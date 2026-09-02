"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "https://blog.nextgenaiautomation.net" },
];

const partners = [
  {
    name: "Omkar AI Innovation",
    logo: "/OMKAR-LOGO.jpg",
    description: "AI Unlocked — 5 Module Program",
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on outside click
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
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#050915] via-[#0d1a4a] to-[#1652d6]">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-8 px-8 py-3.5">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl border border-sky-400/30 bg-gradient-to-b from-sky-50 to-sky-100 shadow-md overflow-hidden">
            <img
              src="/nextgen-ai-logo.37c8a695.png"
              alt="NextGen AI Automation logo"
              className="h-11 w-11 object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="text-xl font-bold text-white">NextGen</div>
            <div className="-mt-1 text-sm font-semibold text-sky-400">AI Automation</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 xl:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-3 py-2 text-[15px] font-medium transition-colors ${
                  isActive ? "text-white" : "text-slate-200 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-3.5 left-0 right-0 h-0.5 bg-sky-400" />
                )}
              </Link>
            );
          })}

          {/* Education Partners dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setPartnerOpen((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-2 text-[15px] font-medium text-slate-200 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full mr-1"
                style={{ background: "rgba(96,165,250,0.2)", color: "#7dd3fc", border: "1px solid rgba(96,165,250,0.3)" }}
              >
                ★
              </span>
              Education Partners
              <ChevronDown
                size={15}
                className="transition-transform duration-200"
                style={{ transform: partnerOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            {/* Dropdown panel */}
            {partnerOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl overflow-hidden z-50"
                style={{
                  background: "linear-gradient(135deg, rgba(13,26,74,0.98) 0%, rgba(5,9,21,0.99) 100%)",
                  border: "1px solid rgba(96,165,250,0.25)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
                }}
              >
                {/* Arrow */}
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45"
                  style={{ background: "rgba(13,26,74,0.98)", border: "1px solid rgba(96,165,250,0.25)", borderBottom: "none", borderRight: "none" }}
                />

                <div className="p-3">
                  {partners.map((p) => (
                    <div key={p.name}>
                      {/* Partner header */}
                      <a
                        href="#top"
                        onClick={() => setPartnerOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all"
                        style={{ background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.15)" }}
                      >
                        <div className="h-9 w-9 rounded-lg overflow-hidden shrink-0 bg-white/10 flex items-center justify-center">
                          <img src={p.logo} alt={p.name} className="h-7 w-7 object-contain" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white leading-tight">{p.name}</p>
                          <p className="text-[11px] text-sky-400 font-medium">{p.description}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden shrink-0 xl:block">
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-7 py-3 text-[15px] font-bold text-white shadow-md transition-transform hover:scale-105"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="text-white xl:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-[#0d1a4a] px-8 pb-4 pt-3 xl:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Education Partners */}
          <a
            href="#top"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white rounded-md"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-xs font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(96,165,250,0.2)", color: "#7dd3fc" }}>★</span>
            Education Partners
          </a>

<Link
            href="/contact"
            className="mt-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-2.5 text-center text-sm font-bold text-white"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
          </Link>
        </nav>
      )}
    </header>
  );
}
