/* ─────────────────────────────────────────
   SKYLARK VILLA BROWSER MOCKUP
   Dark-themed browser window showing
   theskylarkvilla.com content.
   Mirrors CasePhoneMockup structure:
   browser bar + app body.
───────────────────────────────────────── */

const PILLARS = [
  { num: "01", title: "Scale", desc: "Ten-foot walls. Eight-foot doors." },
  { num: "02", title: "Proximity", desc: "Ocean close enough to hear." },
  { num: "03", title: "Isolation", desc: "Two hours from the city." },
  { num: "04", title: "Material", desc: "Floor-to-ceiling glass." },
];

export default function SkylarMockup() {
  return (
    <div className="aspect-[4/3] bg-canvas-s1 border border-edge rounded-[4px] overflow-hidden flex flex-col">
      {/* Browser bar */}
      <div className="h-[26px] bg-canvas-s2 border-b border-edge flex items-center px-2.5 gap-[5px] shrink-0">
        <div className="w-2 h-2 rounded-full bg-ink-faint" />
        <div className="w-2 h-2 rounded-full bg-ink-faint" />
        <div className="w-2 h-2 rounded-full bg-ink-faint" />
        <div className="flex-1 mx-2 h-[14px] rounded-[3px] bg-ink-faint max-w-[200px] flex items-center px-2">
          <span className="font-mono text-[8px] text-ink-muted tracking-[0.04em] truncate">
            theskylarkvilla.com
          </span>
        </div>
      </div>

      {/* Site body */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Hero area */}
        <div
          className="relative flex flex-col items-start justify-end px-5 pb-4 shrink-0"
          style={{
            height: "55%",
            background:
              "linear-gradient(to bottom, rgba(22,20,18,0.2) 0%, rgba(22,20,18,0.85) 100%), linear-gradient(135deg, rgba(201,194,184,0.06) 0%, rgba(22,20,18,0.9) 100%)",
          }}
        >
          {/* Faux image texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(201,194,184,0.015) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,194,184,0.015) 1px, transparent 1px)
              `,
              backgroundSize: "18px 18px",
            }}
          />

          {/* Nav */}
          <div className="absolute top-3 left-0 right-0 px-5 flex items-center justify-between z-10">
            <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink">
              SKYLARK
            </span>
            <span className="font-mono text-[8px] tracking-[0.1em] uppercase text-ink-muted border border-edge px-2 py-0.5 rounded-[2px]">
              Stay With Us
            </span>
          </div>

          {/* Hero copy */}
          <div className="relative z-10">
            <div className="font-mono text-[7px] tracking-[0.14em] uppercase text-brand mb-1.5 opacity-80">
              Trinidad&apos;s Northern Coast
            </div>
            <h3
              className="font-display font-extrabold text-ink leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: "clamp(13px,1.4vw,18px)" }}
            >
              Your private
              <br />
              coastal retreat
            </h3>
            <p className="font-mono text-[7px] text-ink-muted mt-1.5 max-w-[160px] leading-[1.5]">
              Sleep to knocking bamboo.
              <br />
              Wake to crashing waves.
            </p>
          </div>
        </div>

        {/* Pillars strip */}
        <div className="grid grid-cols-4 flex-1 border-t border-edge">
          {PILLARS.map((p) => (
            <div
              key={p.num}
              className="flex flex-col justify-center px-2.5 py-2 border-r border-edge last:border-r-0"
            >
              <div className="font-mono text-[7px] text-brand tracking-[0.08em] mb-1 opacity-70">
                {p.num}
              </div>
              <div
                className="font-display font-bold text-ink leading-none tracking-[-0.02em] mb-1"
                style={{ fontSize: "9px" }}
              >
                {p.title}
              </div>
              <div
                className="font-mono text-ink-muted leading-[1.4]"
                style={{ fontSize: "7px" }}
              >
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
