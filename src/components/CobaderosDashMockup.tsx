const CREDENTIAL_ROWS: { w: string; hi: boolean }[] = [
  { w: "82%", hi: true },
  { w: "61%", hi: false },
  { w: "44%", hi: false },
  { w: "27%", hi: false },
];

export default function CobaderosDashMockup() {
  return (
    <div className="aspect-[4/3] bg-canvas-s1 border border-edge rounded-[4px] overflow-hidden flex flex-col">
      {/* Browser bar */}
      <div className="h-[26px] bg-canvas-s2 border-b border-edge flex items-center px-2.5 gap-[5px] shrink-0">
        <div className="w-2 h-2 rounded-full bg-ink-faint" />
        <div className="w-2 h-2 rounded-full bg-ink-faint" />
        <div className="w-2 h-2 rounded-full bg-ink-faint" />
      </div>

      {/* Body */}
      <div className="p-3.5 flex flex-col gap-2 h-[calc(100%-26px)]">
        {/* Top row — two stat cells */}
        <div className="grid grid-cols-2 gap-2 shrink-0">
          <div className="bg-canvas-s2 rounded-[3px] px-3 py-2.5">
            <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-brand opacity-80 mb-1.5">
              Verifications
            </div>
            <div className="h-[6px] w-[52px] rounded-[2px] bg-brand opacity-20 mb-1" />
            <div
              className="h-[5px] w-[36px] rounded-[2px]"
              style={{ background: "rgba(237,232,226,0.07)" }}
            />
          </div>
          <div className="bg-canvas-s2 rounded-[3px] px-3 py-2.5">
            <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-brand opacity-80 mb-1.5">
              Billed
            </div>
            <div className="h-[6px] w-[44px] rounded-[2px] bg-brand opacity-20 mb-1" />
            <div
              className="h-[5px] w-[32px] rounded-[2px]"
              style={{ background: "rgba(237,232,226,0.07)" }}
            />
          </div>
        </div>

        {/* Middle — credential type breakdown */}
        <div className="bg-canvas-s2 rounded-[3px] px-3 py-2.5 flex-1">
          <div
            className="font-mono text-[9px] tracking-[0.1em] uppercase mb-2.5"
            style={{ color: "rgba(237,232,226,0.2)" }}
          >
            By credential type
          </div>
          <div className="flex flex-col gap-2">
            {CREDENTIAL_ROWS.map((row, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="h-[5px] w-[40px] rounded-[2px] shrink-0"
                  style={{ background: "rgba(237,232,226,0.08)" }}
                />
                <div
                  className="flex-1 h-[4px] rounded-[2px]"
                  style={{ background: "rgba(237,232,226,0.05)" }}
                >
                  <div
                    className="h-full rounded-[2px] bg-brand"
                    style={{ width: row.w, opacity: row.hi ? 0.55 : 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom — audit trail */}
        <div className="bg-canvas-s2 rounded-[3px] px-3 py-2 shrink-0 flex items-center gap-2">
          <div
            className="w-[6px] h-[6px] rounded-full bg-brand shrink-0"
            style={{ opacity: 0.7 }}
          />
          <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-brand opacity-70">
            Audit trail
          </div>
          <div className="flex-1 flex justify-end gap-1.5">
            <div
              className="h-[5px] w-[28px] rounded-[2px]"
              style={{ background: "rgba(237,232,226,0.07)" }}
            />
            <div
              className="h-[5px] w-[20px] rounded-[2px]"
              style={{ background: "rgba(237,232,226,0.07)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
