/* ─────────────────────────────────────────
   LITEREAD PRODUCT MOCKUP
   Adapted from the original light-theme
   ProductMockup to AppBanton's warm dark
   palette. Structure is unchanged — only
   colours, backgrounds and borders are
   swapped to match the site's design system.
───────────────────────────────────────── */

const WAVEFORM = [3, 5, 8, 6, 10, 7, 4, 9, 6, 5, 8, 4, 7, 5, 3];

export default function LitereadMockup() {
  return (
    <div className="w-full flex justify-center items-end">
      {/* Outer shell */}
      <div
        className="relative w-full max-w-[480px] p-2 rounded-[2rem] border border-edge-hi"
        style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.45)" }}
      >
        {/* Inner core — faux browser window */}
        <div
          className="bg-canvas-s1 overflow-hidden"
          style={{ borderRadius: "calc(2rem - 0.5rem)" }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-edge bg-canvas-s2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-ink-faint" />
              <div className="w-3 h-3 rounded-full bg-ink-faint" />
              <div className="w-3 h-3 rounded-full bg-ink-faint" />
            </div>
            <div className="flex-1 mx-3 bg-canvas rounded-md px-3 py-1 border border-edge font-mono text-[11px] text-ink-muted">
              literead.vercel.app/passages/the-red-planet
            </div>
          </div>

          {/* App content */}
          <div className="p-5 select-none pointer-events-none">
            {/* Passage header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span
                  className="text-white font-bold rounded-full px-2.5 py-1 bg-brand"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Grade 4
                </span>
                <span className="font-mono text-[10px] text-ink-muted">
                  Science · 3 min read
                </span>
              </div>
              <span className="font-mono text-[11px] text-ink-muted opacity-60">
                Passage 12 of 47
              </span>
            </div>

            {/* Passage title */}
            <h3
              className="font-display font-bold text-ink mb-3"
              style={{ fontSize: "16px", letterSpacing: "-0.02em" }}
            >
              The Red Planet
            </h3>

            {/* Passage text */}
            <p
              className="font-sans text-ink-muted mb-5"
              style={{ fontSize: "11px", lineHeight: "1.6" }}
            >
              Mars is the fourth planet from the Sun. It is called the Red
              Planet because iron oxide on its surface gives it a reddish
              appearance. Mars has two small moons, Phobos and Deimos.
              Scientists believe Mars once had liquid water flowing across its
              rocky surface.
            </p>

            {/* Divider */}
            <div className="border-t border-edge mb-4" />

            {/* AI coach panel */}
            <div className="rounded-xl p-4 border border-edge bg-canvas-s2">
              <div className="flex items-start gap-3 mb-3">
                {/* AI avatar */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-brand"
                  style={{ boxShadow: "0 2px 8px rgba(230,75,54,0.35)" }}
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="2.5" fill="white" />
                    <path
                      d="M7 1.5v1M7 11.5v1M1.5 7h1M11.5 7h1M3.4 3.4l.7.7M9.9 9.9l.7.7M9.9 4.1l-.7.7M4.1 9.9l-.7.7"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <p
                    className="font-mono font-bold mb-1 text-brand"
                    style={{ fontSize: "10px" }}
                  >
                    AI Reading Coach
                  </p>
                  <p
                    className="font-sans text-ink-muted"
                    style={{ fontSize: "11px", lineHeight: "1.5" }}
                  >
                    Why do you think scientists care so much about whether Mars
                    had water?
                  </p>
                </div>
              </div>

              {/* Mic + waveform */}
              <div className="flex items-center gap-3 pt-3 border-t border-edge">
                <button
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-brand"
                  style={{ boxShadow: "0 4px 14px rgba(230,75,54,0.4)" }}
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <rect
                      x="5"
                      y="1"
                      width="4"
                      height="8"
                      rx="2"
                      fill="white"
                    />
                    <path
                      d="M2.5 7.5A4.5 4.5 0 007 12a4.5 4.5 0 004.5-4.5"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="7"
                      y1="12"
                      x2="7"
                      y2="13.5"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                {/* Waveform bars */}
                <div className="flex items-center gap-[3px] h-6 flex-1">
                  {WAVEFORM.map((h, i) => (
                    <div
                      key={i}
                      className="w-[2px] rounded-full"
                      style={{
                        height: `${h * 2}px`,
                        background: "rgba(230,75,54,0.35)",
                      }}
                    />
                  ))}
                </div>

                <span className="font-mono text-[10px] text-ink-muted">
                  Tap to answer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
