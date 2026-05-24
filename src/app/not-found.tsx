import Link from "next/link";
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";

export default function NotFound() {
  return (
    <>
      <Cursor />
      <Grain />
      <section className="relative min-h-svh flex items-center justify-center overflow-hidden bg-canvas">
        {/* Grid background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,194,184,0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,194,184,0.015) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Glow orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[10%] right-[5%] w-[520px] h-[520px] rounded-full animate-drift"
          style={{
            background:
              "radial-gradient(circle, rgba(230,75,54,0.06) 0%, transparent 65%)",
          }}
        />

        {/* Ghost 404 */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold leading-none tracking-[-0.05em]"
          style={{
            fontSize: "clamp(160px, 22vw, 280px)",
            color: "rgba(201,194,184,0.03)",
          }}
        >
          404
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          {/* Label */}
          <div className="slabel mb-8">Error 404</div>

          {/* Heading */}
          <h1
            className="font-display font-extrabold text-ink tracking-[-0.04em] leading-[0.95] mb-5"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            We lost this one
          </h1>

          {/* Body */}
          <p className="font-sans text-[16px] leading-[1.65] text-ink-muted max-w-[380px] mb-10">
            This page doesn&apos;t exist. Happens to the best of us. The good
            news is everything else works perfectly.
          </p>

          {/* CTA */}
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-brand text-white font-display font-bold text-[14px] px-7 py-[13px] rounded-[6px] no-underline transition-[opacity,transform] duration-200 hover:opacity-85 active:scale-[0.98]"
          >
            Take me home
          </Link>
        </div>
      </section>
    </>
  );
}
