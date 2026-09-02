"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const partners = [
  {
    name: "Omkar AI Innovation",
    logo: "/OMKAR-LOGO.jpg",
    description: "AI Unlocked — 5 Module Program",
    sections: [
      { label: "Hero / Overview",  href: "#top" },
      { label: "AI Hierarchy",     href: "#hierarchy" },
      { label: "Program Modules",  href: "#program" },
      { label: "Automation Demo",  href: "#demo" },
      { label: "Income Paths",     href: "#opportunity" },
      { label: "Why Join Us",      href: "#why-us" },
      { label: "Certification",    href: "#certification" },
      { label: "Enroll & Pricing", href: "#enrollment-form" },
      { label: "FAQ",              href: "#faq" },
    ],
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScrollY.current && current > 80);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPartnerOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#050915] via-[#0d1a4a] to-[#1652d6] transition-transform duration-500 ease-in-out"
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      {/* Use same max-w-7xl and px as page content so logo aligns with hero */}
      <div className="container-px mx-auto max-w-7xl flex items-center gap-6 py-3.5">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-sky-400/30 bg-gradient-to-b from-sky-50 to-sky-100 shadow-md overflow-hidden">
            <img
              src="/nextgen-ai-logo.37c8a695.png"
              alt="NextGen AI Automation"
              className="h-10 w-10 object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="text-xl font-bold text-white">NextGen</div>
            <div className="-mt-0.5 text-sm font-semibold text-sky-400">AI Automation</div>
          </div>
        </Link>

        {/* Desktop: Home + Education Partners — right after logo */}
        <nav className="hidden xl:flex items-center gap-1 ml-2">
          {/* Home */}
          <Link
            href="/"
            className={`relative px-4 py-2 text-[15px] font-medium transition-colors rounded-lg hover:bg-white/5 ${
              pathname === "/" ? "text-white" : "text-slate-200 hover:text-white"
            }`}
          >
            Home
            {pathname === "/" && (
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-sky-400 rounded-full" />
            )}
          </Link>

          {/* Education Partners */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setPartnerOpen((v) => !v)}
              className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium text-slate-200 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(96,165,250,0.2)", color: "#7dd3fc", border: "1px solid rgba(96,165,250,0.3)" }}
              >
                ★
              </span>
              Education Partners
              <ChevronDown
                size={14}
                style={{ transform: partnerOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
              />
            </button>

            {partnerOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-72 rounded-2xl overflow-hidden z-50"
                style={{
                  background: "linear-gradient(135deg, rgba(13,26,74,0.98) 0%, rgba(5,9,21,0.99) 100%)",
                  border: "1px solid rgba(96,165,250,0.25)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
                }}
              >
                <div className="p-3">
                  {partners.map((p) => (
                    <div key={p.name}>
                      {/* Partner header */}
                      <div
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl mb-2"
                        style={{ background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.15)" }}
                      >
                        <div className="h-9 w-9 rounded-lg overflow-hidden shrink-0 bg-white/10 flex items-center justify-center">
                          <img src={p.logo} alt={p.name} className="h-7 w-7 object-contain" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white leading-tight">{p.name}</p>
                          <p className="text-[11px] text-sky-400 font-medium">{p.description}</p>
                        </div>
                      </div>

                      {/* Section links */}
                      <div className="grid grid-cols-2 gap-1">
                        {p.sections.map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            onClick={() => setPartnerOpen(false)}
                            className="group flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-sky-500/10 hover:to-blue-500/10 hover:translate-x-0.5 hover:shadow-sm"
                            style={{ borderLeft: "2px solid transparent" }}
                            onMouseEnter={e => (e.currentTarget.style.borderLeftColor = "rgba(96,165,250,0.6)")}
                            onMouseLeave={e => (e.currentTarget.style.borderLeftColor = "transparent")}
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full shrink-0 transition-all duration-200 group-hover:scale-125"
                              style={{ background: "rgba(96,165,250,0.5)" }}
                            />
                            {s.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile hamburger — pushed to right */}
        <div className="ml-auto xl:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            className="text-white p-1"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-[#0d1a4a] px-6 pb-4 pt-3 xl:hidden">
          <Link
            href="/"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <a
            href="#top"
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-white rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-xs font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(96,165,250,0.2)", color: "#7dd3fc" }}>★</span>
            Education Partners
          </a>
        </nav>
      )}
    </header>
  );
}
