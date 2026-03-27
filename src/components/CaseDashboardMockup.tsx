const DB_BARS: { h: number; hi: boolean }[] = [
  { h: 38, hi: false },
  { h: 62, hi: false },
  { h: 78, hi: true },
  { h: 52, hi: false },
  { h: 88, hi: true },
  { h: 68, hi: false },
  { h: 100, hi: true },
];

export default function CaseDashboardMockup() {
  return (
    <div className="aspect-[4/3] bg-canvas-s1 border border-edge rounded-[4px] overflow-hidden flex flex-col">
      {/* Browser bar */}
      <div className="h-[26px] bg-canvas-s2 border-b border-edge flex items-center px-2.5 gap-[5px] shrink-0">
        <div className="w-2 h-2 rounded-full bg-ink-faint" />
        <div className="w-2 h-2 rounded-full bg-ink-faint" />
        <div className="w-2 h-2 rounded-full bg-ink-faint" />
      </div>

      {/* Body */}
      <div className="p-3.5 h-[calc(100%-26px)]">
        <div
          className="grid gap-2 h-full"
          style={{
            gridTemplateColumns: "1.5fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
          }}
        >
          {/* Cell 1 — bars chart, row span 2 */}
          <div className="bg-canvas-s2 rounded-[3px] relative overflow-hidden row-span-2">
            <div className="absolute top-2.5 left-3">
              <div className="font-mono text-[17px] text-brand opacity-80 leading-none">
                $2.1M
              </div>
              <div
                className="font-mono text-[9px] tracking-[0.04em] mt-0.5"
                style={{ color: "rgba(237,232,226,0.2)" }}
              >
                Daily volume
              </div>
            </div>
            <div className="absolute bottom-2 left-2 right-2 flex items-end gap-[3px] h-[55%]">
              {DB_BARS.map((bar, i) => (
                <div
                  key={i}
                  className="flex-1 bg-brand rounded-t-[2px]"
                  style={{ height: `${bar.h}%`, opacity: bar.hi ? 0.6 : 0.18 }}
                />
              ))}
            </div>
          </div>

          {/* Cell 2 — error rate */}
          <div className="bg-canvas-s2 rounded-[3px] relative overflow-hidden">
            <div className="absolute top-2.5 left-3">
              <div className="font-mono text-[17px] text-brand opacity-80 leading-none">
                ↓41%
              </div>
              <div
                className="font-mono text-[9px] tracking-[0.04em] mt-0.5"
                style={{ color: "rgba(237,232,226,0.2)" }}
              >
                Error rate
              </div>
            </div>
          </div>

          {/* Cell 3 — uptime */}
          <div className="bg-canvas-s2 rounded-[3px] relative overflow-hidden">
            <div className="absolute top-2.5 left-3">
              <div className="font-mono text-[17px] text-brand opacity-80 leading-none">
                98%
              </div>
              <div
                className="font-mono text-[9px] tracking-[0.04em] mt-0.5"
                style={{ color: "rgba(237,232,226,0.2)" }}
              >
                Uptime
              </div>
            </div>
          </div>

          {/* Cell 4 — live feed, col span 2 */}
          <div className="bg-canvas-s2 rounded-[3px] relative overflow-hidden col-span-2">
            <div className="absolute top-2.5 left-3">
              <div className="font-mono text-[11px] text-brand opacity-80 leading-none">
                Live transaction feed
              </div>
              <div className="font-mono text-[9px] text-brand opacity-70 tracking-[0.04em] mt-0.5">
                ● Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
