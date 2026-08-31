"use client";

import { useState } from "react";
import { faq } from "@/lib/content";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section id="faq" className="border-b border-line bg-bg-raised relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-0 h-[500px] w-[500px] bg-violet/[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] bg-amber/[0.02] blur-[120px] rounded-full" />
      </div>
      
      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <p className="text-xs font-data text-violet font-semibold tracking-wide uppercase px-4 py-2 bg-violet/10 border border-violet/30 rounded-[15px]">FAQ</p>
          </div>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.01em]">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          {faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="mb-3">
                <button
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={isOpen}
                  className="w-full text-left group"
                >
                  <div className="flex items-center justify-between p-5 md:p-6 rounded-xl border border-line bg-bg-panel hover:border-violet/50 transition-all shadow-sm hover:shadow-lg">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-violet/30 bg-violet/5 shrink-0">
                        <span className="font-data text-sm text-violet font-semibold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="font-display font-medium text-base md:text-lg text-text group-hover:text-violet transition-colors">
                        {f.q}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp size={20} className="text-violet shrink-0 ml-4" />
                    ) : (
                      <ChevronDown size={20} className="text-text-dim shrink-0 ml-4 group-hover:text-violet transition-colors" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-2 p-5 md:p-6 rounded-xl border border-line bg-bg-raised animate-in fade-in slide-in-from-top-2 duration-300 shadow-lg">
                    <p className="text-sm md:text-base text-text-dim leading-relaxed">
                      {f.a}
                    </p>
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
