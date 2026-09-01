"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#program", label: "Program" },
  { href: "#opportunity", label: "Opportunity" },
  { href: "#certification", label: "Certification" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <div
            className="h-8 w-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #a78bfa, #60a5fa)" }}
          >
            <span className="font-data font-bold text-[11px] text-white">AI</span>
          </div>
          <span className="font-display font-bold text-[15px] tracking-tight text-white">
            Omkar AI Innovation
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-text-dim hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#enroll"
          className="text-sm font-bold rounded-full px-5 py-2.5 transition-all duration-200 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
            color: "#fff",
            boxShadow: "0 0 20px rgba(167,139,250,0.35)",
          }}
        >
          Enroll now
        </a>
      </div>
    </header>
  );
}
