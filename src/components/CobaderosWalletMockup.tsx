export default function CobaderosWalletMockup() {
  return (
    <div className="w-full bg-canvas-s2 border border-edge-hi rounded-[10px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
      {/* Chrome */}
      <div className="h-[24px] bg-canvas-s2 border-b border-edge flex items-center px-3 gap-1.5 shrink-0">
        <div className="w-[7px] h-[7px] rounded-full bg-ink-faint" />
        <div className="w-[7px] h-[7px] rounded-full bg-ink-faint" />
        <div className="w-[7px] h-[7px] rounded-full bg-ink-faint" />
      </div>

      {/* Body */}
      <div className="p-3.5">
        <div className="bg-canvas-s1 rounded-[5px] p-[10px] flex flex-col gap-1.5">
          <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-ink-muted mb-1">
            Wallet
          </div>

          {/* Card 1 — verified, brand tint */}
          <div className="rounded-[6px] px-3 py-[10px] relative bg-[rgba(230,75,54,0.07)] border border-[rgba(230,75,54,0.25)]">
            <div className="h-[3px] w-[44px] rounded-[2px] bg-[rgba(230,75,54,0.3)] mb-[6px]" />
            <div className="h-[5px] w-[90px] rounded-[2px] bg-[rgba(201,194,184,0.18)] mb-1" />
            <div className="h-[3px] w-[60px] rounded-[2px] bg-[rgba(230,75,54,0.18)]" />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[15px] h-[15px] rounded-full bg-[rgba(230,75,54,0.15)] border border-[rgba(230,75,54,0.4)] flex items-center justify-center">
              <div className="w-[5px] h-[5px] rounded-full bg-brand" />
            </div>
          </div>

          {/* Card 2 — verified, neutral */}
          <div className="rounded-[6px] px-3 py-[10px] relative bg-[rgba(201,194,184,0.03)] border border-edge">
            <div className="h-[3px] w-[44px] rounded-[2px] bg-[rgba(201,194,184,0.12)] mb-[6px]" />
            <div className="h-[5px] w-[90px] rounded-[2px] bg-[rgba(201,194,184,0.12)] mb-1" />
            <div className="h-[3px] w-[60px] rounded-[2px] bg-[rgba(201,194,184,0.08)]" />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[15px] h-[15px] rounded-full bg-[rgba(230,75,54,0.15)] border border-[rgba(230,75,54,0.4)] flex items-center justify-center">
              <div className="w-[5px] h-[5px] rounded-full bg-brand" />
            </div>
          </div>

          {/* Card 3 — pending, faint */}
          <div className="rounded-[6px] px-3 py-[10px] relative bg-[rgba(201,194,184,0.02)] border border-[rgba(201,194,184,0.06)]">
            <div className="h-[3px] w-[44px] rounded-[2px] bg-[rgba(201,194,184,0.07)] mb-[6px]" />
            <div className="h-[5px] w-[90px] rounded-[2px] bg-[rgba(201,194,184,0.07)] mb-1" />
            <div className="h-[3px] w-[60px] rounded-[2px] bg-[rgba(201,194,184,0.05)]" />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[15px] h-[15px] rounded-full bg-[rgba(201,194,184,0.04)] border border-[rgba(201,194,184,0.1)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
