const PINS = [
  { top: "42%", left: "24%", size: "7px", bg: "var(--brand)", label: "TT" },
  {
    top: "28%",
    left: "50%",
    size: "6px",
    bg: "rgba(230,75,54,0.55)",
    label: "BB",
  },
  {
    top: "19%",
    left: "70%",
    size: "5px",
    bg: "rgba(230,75,54,0.4)",
    label: "JM",
  },
  {
    top: "55%",
    left: "74%",
    size: "5px",
    bg: "rgba(230,75,54,0.35)",
    label: "AG",
  },
];

const CARDS = [
  {
    name: "Maracas Beach — TT",
    meta: "3 tours available",
    price: "$42",
    imgAlpha: 0.4,
  },
  {
    name: "Crane Beach — BB",
    meta: "5 tours available",
    price: "$68",
    imgAlpha: 0.25,
  },
];

const TABS = [
  { label: "MAP", on: true },
  { label: "TOURS", on: false },
  { label: "SAVED", on: false },
  { label: "YOU", on: false },
];

export default function CasePhoneMockup() {
  return (
    <div className="aspect-[4/3] bg-canvas-s1 border border-edge rounded-[4px] overflow-hidden flex flex-col">
      {/* Browser bar */}
      <div className="h-[26px] bg-canvas-s2 border-b border-edge flex items-center px-2.5 gap-[5px] shrink-0">
        <div className="w-2 h-2 rounded-full bg-ink-faint" />
        <div className="w-2 h-2 rounded-full bg-ink-faint" />
        <div className="w-2 h-2 rounded-full bg-ink-faint" />
      </div>

      {/* Body — centred */}
      <div className="p-3.5 h-[calc(100%-26px)] flex items-center justify-center">
        {/* Phone shell */}
        <div className="w-[190px] bg-canvas-s2 border border-edge-hi rounded-[26px] overflow-hidden flex flex-col">
          {/* Notch */}
          <div className="h-[26px] bg-canvas-s2 flex items-center justify-center shrink-0">
            <div className="w-14 h-2.5 bg-canvas rounded-full" />
          </div>

          {/* Screen */}
          <div className="flex-1 overflow-hidden">
            {/* App header */}
            <div className="bg-canvas-s1 px-[13px] py-[9px] flex items-center justify-between">
              <div>
                <div className="font-display font-extrabold text-[14px] text-brand tracking-[-0.02em]">
                  SunRoute
                </div>
                <div className="font-mono text-[8px] text-ink-muted tracking-[0.06em]">
                  DISCOVER THE CARIBBEAN
                </div>
              </div>
              <div className="w-5 h-5 rounded-full bg-brand opacity-15" />
            </div>

            {/* Map area */}
            <div className="h-[85px] bg-canvas-s2 relative overflow-hidden">
              {/* Grid overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(rgba(230,75,54,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(230,75,54,0.04) 1px,transparent 1px)",
                  backgroundSize: "13px 13px",
                }}
              />
              {/* Map pins — dynamic position/size stays inline */}
              {PINS.map((pin, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    top: pin.top,
                    left: pin.left,
                    width: pin.size,
                    height: pin.size,
                    background: pin.bg,
                  }}
                >
                  <div className="absolute inset-[-4px] rounded-full bg-[rgba(230,75,54,0.2)]" />
                  <div className="absolute top-[-13px] left-[-6px] font-mono text-[7px] text-brand tracking-[0.04em] whitespace-nowrap">
                    {pin.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Cards */}
            <div className="px-[9px] py-[7px] flex flex-col gap-1">
              {CARDS.map((card, i) => (
                <div
                  key={i}
                  className="bg-canvas-s1 rounded-[5px] px-2 py-1.5 flex gap-[7px] items-center"
                >
                  <div
                    className="w-[26px] h-[26px] rounded-[3px] shrink-0"
                    style={{
                      background: `linear-gradient(135deg,rgba(230,75,54,${card.imgAlpha}),rgba(230,75,54,0.1))`,
                    }}
                  />
                  <div className="flex-1">
                    <div className="font-display font-bold text-[9px] text-ink tracking-[-0.01em] leading-[1.2]">
                      {card.name}
                    </div>
                    <div className="font-mono text-[7px] text-ink-muted mt-px">
                      {card.meta}
                    </div>
                  </div>
                  <div className="font-mono text-[7px] px-[5px] py-0.5 rounded-[2px] bg-brand-dim text-brand shrink-0">
                    {card.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Tab bar */}
            <div className="h-[34px] bg-canvas-s1 border-t border-edge flex">
              {TABS.map((tab, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center justify-center gap-0.5"
                >
                  <div
                    className={`w-3.5 h-0.5 rounded-[1px] ${tab.on ? "bg-brand" : "bg-ink-faint"}`}
                  />
                  <div
                    className={`font-mono text-[7px] tracking-[0.04em] ${tab.on ? "text-brand" : "text-ink-muted"}`}
                  >
                    {tab.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
