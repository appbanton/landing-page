"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LHS */}
          <div className="flex justify-center">
            <p className="text-white/50">{`© ${year} App Banton Studios`} </p>
          </div>
          {/* RHS */}
          <div className="text-center">
            <nav>
              <p className="text-white/50">
                Made with <span className="text-white">❤️</span> in POS
              </p>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
