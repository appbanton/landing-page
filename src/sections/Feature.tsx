"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

const CTA_HREF = "https://forms.gle/z5g59bT6x1NaZnNv5";

/* ─────────────────────────────────────────
   MARKERS
   size: 0.04 — matches playground default
   id: used by COBE for CSS anchor positioning
───────────────────────────────────────── */
const MARKERS: { location: [number, number]; size: number; id: string }[] = [
  { location: [59.9139, 10.7522], size: 0.04, id: "oslo" }, // Oslo
  { location: [0.3476, 32.5825], size: 0.04, id: "kampala" }, // Kampala
  { location: [10.6918, -61.4979], size: 0.04, id: "pos" }, // Port of Spain
  { location: [39.7684, -86.1581], size: 0.04, id: "indianapolis" }, // Indianapolis
  { location: [-8.0476, -34.877], size: 0.04, id: "recife" }, // Recife
  { location: [42.6887, 3.0667], size: 0.04, id: "perpignan" }, // Perpignan
  { location: [38.5988, -0.0502], size: 0.04, id: "altea" }, // Altea
  { location: [35.8997, 14.5147], size: 0.04, id: "valletta" }, // Valletta
];

/* ─────────────────────────────────────────
   MOTION BUTTON — v9.5 exact
───────────────────────────────────────── */
function MotionButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={CTA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        height: "56px",
        width: "220px",
        borderRadius: "999px",
        background: "var(--s2)",
        border: "1px solid var(--border)",
        cursor: "none",
        textDecoration: "none",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          left: "4px",
          top: "50%",
          transform: "translateY(-50%)",
          width: hovered ? "calc(100% - 8px)" : "46px",
          height: "46px",
          borderRadius: "999px",
          background: "var(--brand)",
          transition: "width .45s cubic-bezier(0.16,1,0.3,1)",
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: "absolute",
          left: "15px",
          top: "50%",
          transform: hovered
            ? "translateY(-50%) translateX(3px)"
            : "translateY(-50%)",
          color: "#fff",
          width: "18px",
          height: "18px",
          transition: "transform .35s cubic-bezier(0.16,1,0.3,1)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "var(--font-outfit), sans-serif",
          fontWeight: 700,
          fontSize: "15px",
          color: hovered ? "#fff" : "var(--text)",
          whiteSpace: "nowrap",
          transition: "color .3s",
          pointerEvents: "none",
          zIndex: 1,
          marginLeft: "12px",
        }}
      >
        Book a free call
      </span>
    </a>
  );
}

/* ─────────────────────────────────────────
   GLOBE
   Settings taken directly from the COBE
   playground screenshot (dark mode):
   dark: 0.72 | diffuse: 1.6
   mapSamples: 24000 | mapBrightness: 6
   mapBaseBrightness: 0.26
───────────────────────────────────────── */
function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const phiOffset = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let raf: number;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1120,
      height: 1120,
      phi: 0,
      theta: 0.25,
      dark: 0.72,
      diffuse: 1.6,
      mapSamples: 24000,
      mapBrightness: 6,
      mapBaseBrightness: 0.26,
      baseColor: [0.18, 0.15, 0.13] as [number, number, number],
      markerColor: [0.9, 0.29, 0.21] as [number, number, number],
      glowColor: [0.12, 0.1, 0.08] as [number, number, number],
      markerElevation: 0,
      markers: MARKERS,
    });

    function animate() {
      if (!isDragging.current) phi += 0.004;
      globe.update({ phi: phi + phiOffset.current });
      raf = requestAnimationFrame(animate);
    }

    setTimeout(() => {
      canvas.style.opacity = "1";
      animate();
    }, 100);

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
    };
  }, []);

  return (
    <div style={{ position: "relative", height: "520px", overflow: "visible" }}>
      <canvas
        ref={canvasRef}
        width={1120}
        height={1120}
        style={{
          position: "absolute",
          top: "50%",
          right: "-120px",
          transform: "translateY(-50%)",
          width: "560px",
          height: "560px",
          opacity: 0,
          transition: "opacity 1s ease",
          cursor: "grab",
        }}
        onPointerDown={(e) => {
          isDragging.current = true;
          dragStartX.current = e.clientX;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          isDragging.current = false;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          isDragging.current = false;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (isDragging.current) {
            phiOffset.current = (e.clientX - dragStartX.current) / 200;
          }
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   FEATURE SECTION — v9.5 layout
───────────────────────────────────────── */
export default function Feature() {
  return (
    <section
      style={{
        padding: 0,
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
        background: "var(--s1)",
      }}
    >
      <div className="wrap">
        <div
          className="globe-inner"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            minHeight: "520px",
            position: "relative",
          }}
        >
          {/* Content LHS */}
          <div style={{ padding: "80px 0", zIndex: 2, position: "relative" }}>
            <div className="slabel" style={{ marginBottom: "28px" }}>
              Let&apos;s talk
            </div>
            <h2
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(40px,5.5vw,80px)",
                lineHeight: 1,
                letterSpacing: "-.04em",
                color: "var(--text)",
                marginBottom: "24px",
              }}
            >
              The world
              <br />
              <em style={{ color: "var(--brand)" }}>awaits</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "16px",
                color: "var(--muted)",
                lineHeight: 1.65,
                maxWidth: "380px",
                marginBottom: "40px",
              }}
            >
              10 minutes. Tell us what you&apos;re building. We&apos;ll be
              honest about whether we&apos;re the right fit — and if not,
              we&apos;ll point you somewhere better.
            </p>
            <MotionButton />
          </div>

          {/* Globe RHS — hidden on mobile */}
          <div className="globe-rhs-wrap">
            <Globe />
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:960px){
          .globe-inner    { grid-template-columns:1fr !important; }
          .globe-rhs-wrap { display:none !important; }
        }
      `}</style>
    </section>
  );
}
