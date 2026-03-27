import HeroDashboardMockup from "@/components/HeroDashboardMockup";

const CTA_HREF = "https://forms.gle/z5g59bT6x1NaZnNv5";

function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden pt-[88px] pb-12 bg-canvas">
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

      {/* Content */}
      <div className="wrap relative z-10 w-full">
        <div className="grid items-center gap-16 grid-cols-1 lg:grid-cols-2">
          {/* LHS */}
          <div className="flex flex-col">
            {/* Status dot */}
            <div className="inline-flex items-center gap-2 mb-5 font-mono text-[11px] tracking-[0.08em] uppercase text-ink-muted">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0 animate-blink"
                style={{ background: "#4ade80" }}
                aria-hidden="true"
              />
              Taking on new projects
            </div>

            {/* H1 */}
            <h1
              className="font-display font-extrabold text-ink mb-5"
              style={{
                fontSize: "clamp(36px,4.8vw,68px)",
                lineHeight: 1.06,
                letterSpacing: "-0.035em",
              }}
            >
              We build software <em className="text-brand">worth using</em>
            </h1>

            {/* Description */}
            <p className="font-sans text-[16px] leading-[1.65] text-ink-muted max-w-[440px] mb-6">
              Full-service software studio. UX research, product design, and
              development — from your first idea to a product your users love.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-start gap-2.5">
              <a
                href={CTA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-brand text-white font-display font-bold text-[14px] px-7 py-[13px] rounded-[6px] no-underline transition-[opacity,transform] duration-200 hover:opacity-85 active:scale-[0.98]"
              >
                Book a 10 min call <ArrowIcon />
              </a>
              <span className="font-sans text-[14px] font-medium text-ink-muted">
                It&apos;s absolutely free
              </span>
            </div>
          </div>

          {/* RHS — hidden below lg */}
          <div className="hidden lg:flex items-center justify-center">
            <HeroDashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
