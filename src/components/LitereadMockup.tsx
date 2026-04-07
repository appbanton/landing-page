export default function LitereadMockup() {
  return (
    <div className="w-full bg-canvas-s2 border border-edge-hi rounded-[10px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
      {/* Chrome */}
      <div className="h-[24px] bg-canvas-s2 border-b border-edge flex items-center px-3 gap-1.5 shrink-0">
        <div className="w-[7px] h-[7px] rounded-full bg-ink-faint" />
        <div className="w-[7px] h-[7px] rounded-full bg-ink-faint" />
        <div className="w-[7px] h-[7px] rounded-full bg-ink-faint" />
      </div>

      {/* Body */}
      <div className="p-3.5 flex flex-col gap-2">
        {/* Passage */}
        <div className="bg-canvas-s1 rounded-[5px] p-[10px]">
          <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-ink-muted mb-2">
            Passage
          </div>
          <div className="h-[3px] rounded-[2px] bg-ink-faint mb-[5px] w-full" />
          <div className="h-[3px] rounded-[2px] bg-ink-faint mb-[5px] w-[88%]" />
          <div className="h-[3px] rounded-[2px] bg-ink-faint mb-[5px] w-[95%]" />
          <div className="h-[3px] rounded-[2px] bg-ink-faint w-[76%]" />
        </div>

        {/* AI Coach */}
        <div className="bg-canvas-s1 rounded-[5px] p-[10px]">
          <div className="flex items-center gap-1.5 mb-2">
            <span
              className="w-[7px] h-[7px] rounded-full bg-brand shrink-0 animate-blink"
              aria-hidden="true"
            />
            <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-brand">
              AI Coach
            </span>
          </div>

          {/* AI bubble */}
          <div className="border-l-2 border-[rgba(230,75,54,0.45)] bg-[rgba(230,75,54,0.1)] rounded-[3px] px-2 py-[7px] mb-[5px]">
            <div className="h-[3px] rounded-[2px] bg-[rgba(230,75,54,0.3)] mb-[5px] w-[90%]" />
            <div className="h-[3px] rounded-[2px] bg-[rgba(230,75,54,0.3)] w-[68%]" />
          </div>

          {/* User bubble */}
          <div className="border-l-2 border-[rgba(201,194,184,0.12)] bg-[rgba(201,194,184,0.04)] rounded-[3px] px-2 py-[7px] mb-[5px]">
            <div className="h-[3px] rounded-[2px] bg-[rgba(201,194,184,0.12)] w-[55%]" />
          </div>

          {/* AI bubble */}
          <div className="border-l-2 border-[rgba(230,75,54,0.45)] bg-[rgba(230,75,54,0.1)] rounded-[3px] px-2 py-[7px]">
            <div className="h-[3px] rounded-[2px] bg-[rgba(230,75,54,0.3)] mb-[5px] w-[80%]" />
            <div className="h-[3px] rounded-[2px] bg-[rgba(230,75,54,0.3)] w-[50%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
