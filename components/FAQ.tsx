"use client";

import { useState } from "react";
import { faq } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="border-b border-white/[0.06] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <p
              className="text-xs font-data font-semibold tracking-widest uppercase px-4 py-2 rounded-full border"
              style={{ background: "rgba(167,139,250,0.1)", borderColor: "rgba(167,139,250,0.3)", color: "#c4b5fd" }}
            >
              FAQ
            </p>
          </div>
          <h2 className="mt-5 font-display font-bold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.02em]">
            Frequently asked{" "}
            <span className="gradient-text">questions</span>
          </h2>
        </div>

        <div className="mt-14 max-w-4xl mx-auto space-y-3">
          {faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen
                    ? "linear-gradient(135deg, rgba(15,20,31,1) 0%, rgba(20,15,40,0.95) 100%)"
                    : "rgba(13,17,23,0.8)",
                  border: isOpen ? "1px solid rgba(167,139,250,0.35)" : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: isOpen ? "0 0 30px rgba(167,139,250,0.08)" : "none",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full text-left flex items-center justify-between px-6 py-5 gap-4 group"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span
                      className="shrink-0 font-data text-xs font-bold w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: isOpen ? "rgba(167,139,250,0.15)" : "rgba(255,255,255,0.04)",
                        border: isOpen ? "1px solid rgba(167,139,250,0.3)" : "1px solid rgba(255,255,255,0.06)",
                        color: isOpen ? "#c4b5fd" : "#8a96aa",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-display font-semibold text-base md:text-[1.05rem] leading-snug transition-colors duration-200"
                      style={{ color: isOpen ? "#e9d5ff" : "#ffffff" }}
                    >
                      {f.q}
                    </span>
                  </div>
                  <span
                    className="material-symbols-rounded shrink-0 transition-transform duration-300 select-none"
                    style={{
                      color: isOpen ? "#a78bfa" : "#8a96aa",
                      fontSize: "20px",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div
                    className="px-6 pb-6 pt-0 animate-in fade-in slide-in-from-top-2 duration-200"
                    style={{ borderLeft: "3px solid #a78bfa" }}
                  >
                    <div
                      className="pt-4 ml-12"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <p className="text-sm md:text-[15px] font-medium text-text-dim leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
