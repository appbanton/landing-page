"use client";

import { useRef, useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import Photo from "@/components/Photo";

type Props = {
  videoId: string;
  youtubeUrl: string;
  title: string;
  poster: string;
  posterAlt: string;
  /** Analytics label for where the film was opened. */
  location?: string;
  /** 16:9 poster with the lead slot's image sizes (used on /marketing). */
  wide?: boolean;
};

/**
 * Click-to-load video. Nothing from YouTube loads until the visitor clicks.
 * Uses a native <dialog>: focus is trapped, Esc closes, focus returns to the
 * trigger. The iframe is unmounted on close so playback stops.
 */
export default function VideoTile({
  videoId,
  youtubeUrl,
  title,
  poster,
  posterAlt,
  location = "home",
  wide = false,
}: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  function play() {
    setOpen(true);
    dialog.current?.showModal();
    sendGAEvent("event", "video_play", {
      video_title: title,
      video_id: videoId,
      location,
    });
  }

  return (
    <>
      <button
        type="button"
        className="tile-photo play-trigger"
        onClick={play}
        aria-haspopup="dialog"
        aria-label={`Play ${title}`}
      >
        <Photo
          src={poster}
          alt={posterAlt}
          sizes={
            wide ? "(max-width: 960px) 100vw, 58vw" : "(max-width: 960px) 100vw, 33vw"
          }
          className={wide ? "ph-wide" : ""}
          priority={wide}
        >
          <span className="play" aria-hidden="true" />
        </Photo>
      </button>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={title}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
      >
        <div className="lb-bar">
          <a
            className="lb-fallback"
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube ↗
          </a>
          <button
            type="button"
            className="lb-close"
            onClick={() => dialog.current?.close()}
          >
            Close <span aria-hidden="true">✕</span>
          </button>
        </div>
        <div className="lb-frame">
          {open && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          )}
        </div>
      </dialog>
    </>
  );
}
