"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-edge py-9">
      <div className="wrap">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <p className="font-mono text-[12px] text-ink-muted tracking-[0.05em]">
            © {year} App Banton Studios
          </p>

          <p className="font-mono text-[12px] text-ink-muted tracking-[0.05em]">
            Made with{" "}
            <span className="text-brand" aria-label="love">
              ♥
            </span>{" "}
            in Port of Spain
          </p>
        </div>
      </div>
    </footer>
  );
}
