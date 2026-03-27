/* ─────────────────────────────────────────
   HERO DASHBOARD MOCKUP
   Bar heights and animation delays are
   dynamic — those stay as inline styles.
   Everything structural is Tailwind.
───────────────────────────────────────── */

const BARS: { h: number; hi: boolean }[] = [
  { h: 45, hi: false },
  { h: 62, hi: false },
  { h: 78, hi: true },
  { h: 55, hi: false },
  { h: 90, hi: true },
  { h: 70, hi: false },
  { h: 100, hi: true },
  { h: 68, hi: false },
  { h: 82, hi: false },
];

const SI = [
  { active: true, w: "60%" },
  { active: false, w: "75%" },
  { active: false, w: "50%" },
  { active: false, w: "65%" },
  { active: false, w: "45%" },
];

const STATS = [
  { val: "$2.1M", lbl: "Daily vol.", brand: true },
  { val: "↓41%", lbl: "Error rate", brand: false },
  { val: "98%", lbl: "Uptime", brand: false },
];

export default function HeroDashboardMockup() {
  return (
    /* mock-shell */
    <div className="w-full max-w-[560px] bg-canvas-s2 border border-edge-hi rounded-[10px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
      {/* Browser chrome */}
      <div className="h-8 bg-canvas-s2 border-b border-edge flex items-center px-3.5 gap-1.5 shrink-0">
        <div className="w-[9px] h-[9px] rounded-full bg-ink-faint" />
        <div className="w-[9px] h-[9px] rounded-full bg-ink-faint" />
        <div className="w-[9px] h-[9px] rounded-full bg-ink-faint" />
        <div className="flex-1 mx-3 h-[14px] rounded-[3px] bg-ink-faint max-w-[180px]" />
      </div>

      {/* App body */}
      <div className="flex flex-col">
        {/* Top app bar */}
        <div className="bg-canvas-s1 px-4 py-3 flex items-center justify-between border-b border-edge shrink-0">
          <span className="font-display font-extrabold text-[13px] text-brand tracking-[-0.01em]">
            Carib Finance
          </span>
          <div className="flex gap-2.5">
            <div className="w-8 h-2 rounded-[2px] bg-[rgba(230,75,54,0.35)]" />
            <div className="w-8 h-2 rounded-[2px] bg-ink-faint" />
            <div className="w-8 h-2 rounded-[2px] bg-ink-faint" />
          </div>
        </div>

        {/* Dashboard grid — sidebar + content, fixed 260px */}
        <div
          className="grid overflow-hidden"
          style={{ gridTemplateColumns: "140px 1fr", height: "260px" }}
        >
          {/* Sidebar */}
          <div className="bg-canvas-s2 border-r border-edge p-3 flex flex-col gap-1.5 overflow-hidden">
            {SI.map((item, i) => (
              <div
                key={i}
                className="h-7 rounded-[4px] flex items-center px-2 gap-1.5 shrink-0"
                style={{
                  background: item.active
                    ? "rgba(230,75,54,0.15)"
                    : "var(--faint)",
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    background: item.active ? "var(--brand)" : "var(--faint)",
                  }}
                />
                <div
                  className="h-1.5 rounded-[2px] flex-1"
                  style={{ maxWidth: item.w, background: "var(--faint)" }}
                />
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="p-3.5 flex flex-col gap-2.5 overflow-hidden min-h-0">
            {/* Stat cards */}
            <div
              className="grid gap-2 shrink-0"
              style={{ gridTemplateColumns: "repeat(3,1fr)" }}
            >
              {STATS.map((c) => (
                <div
                  key={c.lbl}
                  className="bg-canvas-s1 border border-edge rounded-[6px] px-3 py-2.5"
                >
                  <div
                    className={`font-display font-extrabold text-[17px] leading-none tracking-[-0.02em] ${c.brand ? "text-brand" : "text-ink"}`}
                  >
                    {c.val}
                  </div>
                  <div className="font-mono text-[9px] text-ink-muted tracking-[0.04em] mt-[3px]">
                    {c.lbl}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart wrap */}
            <div className="bg-canvas-s1 border border-edge rounded-[6px] px-3 py-2.5 flex-1 relative overflow-visible min-h-0">
              <div className="font-mono text-[9px] text-ink-muted tracking-[0.06em] uppercase mb-2 shrink-0">
                Transaction volume
              </div>

              {/* Bars — height is dynamic, stays inline */}
              <div
                className="flex items-end gap-[5px] overflow-hidden"
                style={{ height: "70px", paddingBottom: "2px" }}
              >
                {BARS.map((bar, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-[2px] animate-bar-pulse"
                    style={{
                      height: `${bar.h}%`,
                      background: bar.hi
                        ? "rgba(230,75,54,0.7)"
                        : "rgba(230,75,54,0.2)",
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>

              {/* Notification badge */}
              <div
                className="absolute right-4 bg-canvas-s2 border border-edge-hi rounded-[6px] px-3 py-2 flex items-center gap-2 animate-float-in"
                style={{ top: "-10px" }}
              >
                <div className="w-[7px] h-[7px] rounded-full bg-brand shrink-0 animate-blink" />
                <span className="font-mono text-[10px] text-ink tracking-[0.02em] whitespace-nowrap">
                  Payment processed · $4,200
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
