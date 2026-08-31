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
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="h-7 w-7 rounded-[6px] bg-violet flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-bg" />
          </span>
          <span className="font-display font-semibold text-[15px] tracking-tight text-text">
            Omkar AI Innovation
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-dim hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#enroll"
          className="text-sm font-medium bg-text text-bg rounded-full px-4 md:px-5 py-2 hover:bg-violet hover:text-text transition-colors"
        >
          Enroll now
        </a>
      </div>
    </header>
  );
}
