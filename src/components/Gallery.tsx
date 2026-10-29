"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Chapter } from "@/content/construction";

/**
 * Chaptered photo grid with a lightbox. Uses a native <dialog>: focus is
 * trapped, Esc closes, focus returns to the photo that opened it. The large
 * image is only mounted while the dialog is open.
 */
export default function Gallery({ chapters }: { chapters: Chapter[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [cur, setCur] = useState(0);

  // Only photos that exist open in the lightbox.
  const flat = chapters.flatMap((c) =>
    c.photos.flatMap((p) =>
      p.src ? [{ ...p, src: p.src, chapter: c.title }] : [],
    ),
  );
  // offsets[i] is the flat index of chapter i's first real photo.
  const offsets = chapters.map((_, i) =>
    chapters
      .slice(0, i)
      .reduce((n, c) => n + c.photos.filter((p) => p.src).length, 0),
  );

  function show(i: number) {
    setCur(i);
    setOpen(true);
    dialog.current?.showModal();
  }
  function step(d: number) {
    setCur((i) => (i + d + flat.length) % flat.length);
  }

  const photo = flat[cur];

  return (
    <>
      {chapters.map((c, ci) => {
        const real = c.photos.filter((p) => p.src).length;
        let seen = 0;
        return (
        <section key={c.title} className="cn-chap" aria-label={c.title}>
          <div className="cn-chap-h">
            <h2>{c.title}</h2>
            <span>
              {real === 0
                ? "Coming soon"
                : `${real} ${real === 1 ? "photo" : "photos"}`}
            </span>
          </div>
          <div className="cn-gal">
            {c.photos.map((p) => {
              const cls = `cn-ph cn-s${p.span}${p.tall ? " cn-tall" : ""}`;
              if (!p.src) {
                return (
                  <div key={p.alt} className={`${cls} cn-soon`}>
                    <span>
                      <b>Photo coming soon</b>
                      {p.alt}
                    </span>
                  </div>
                );
              }
              const index = offsets[ci] + seen++;
              return (
              <button
                key={p.src}
                type="button"
                className={cls}
                onClick={() => show(index)}
                aria-haspopup="dialog"
                aria-label={`Open photo: ${p.alt}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={`(max-width: 720px) 100vw, ${Math.round((p.span / 12) * 100)}vw`}
                  style={{ objectFit: "cover", objectPosition: p.pos ?? "50% 50%" }}
                />
              </button>
              );
            })}
          </div>
        </section>
        );
      })}

      <dialog
        ref={dialog}
        className="cn-lb"
        aria-label="Photo viewer"
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1);
          else if (e.key === "ArrowRight") step(1);
        }}
      >
        <div className="cn-lb-bar">
          <span className="cn-lb-pos">
            {cur + 1} / {flat.length}
          </span>
          <div className="cn-lb-nav">
            <button type="button" onClick={() => step(-1)} aria-label="Previous photo">
              <span aria-hidden="true">←</span> Prev
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next photo">
              Next <span aria-hidden="true">→</span>
            </button>
            <button type="button" onClick={() => dialog.current?.close()}>
              Close <span aria-hidden="true">✕</span>
            </button>
          </div>
        </div>
        <div className="cn-lb-stage">
          {open && (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 1100px) 96vw, 1100px"
              style={{ objectFit: "contain" }}
            />
          )}
        </div>
        <p className="cn-lb-cap">
          {photo.chapter} · {photo.alt}
        </p>
      </dialog>
    </>
  );
}
