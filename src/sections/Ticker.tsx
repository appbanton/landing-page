const ITEMS = [
  "UX Research",
  "Product Design",
  "Web Development",
  "Mobile Apps",
  "Prototyping",
  "Design Systems",
  "Software That Ships",
];

export default function Ticker() {
  return (
    <div className="border-t border-b border-edge overflow-hidden py-[13px]">
      <div className="flex whitespace-nowrap animate-tick">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-5 px-7 font-mono text-[12px] tracking-[0.1em] uppercase text-ink-muted select-none"
          >
            <span
              className="w-1 h-1 rounded-full bg-brand shrink-0 opacity-60"
              aria-hidden="true"
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
