"use client";

import { useState } from "react";
import { modules } from "@/lib/content";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Modules() {
  const [open, setOpen] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section id="program" className="border-b border-line">
      <div className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <p className="text-xs font-data text-violet font-semibold tracking-wide uppercase px-4 py-2 bg-violet/10 border border-violet/30 rounded-[15px]">The program</p>
          </div>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.01em]">
            AI Unlocked — 5 module program
          </h2>
          <p className="mt-4 text-text-dim leading-relaxed">
            Deep curriculum breakdown — every module ends with a deployable capstone project.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          {modules.map((m, i) => {
            const isOpen = open === i;
            return (
              <div key={m.code} className="mb-4">
                <button
                  onClick={() => toggleModule(i)}
                  aria-expanded={isOpen}
                  className="w-full text-left group"
                >
                  <div className="flex items-center justify-between p-6 md:p-8 rounded-xl border border-line bg-bg-panel hover:border-violet/50 transition-all shadow-sm hover:shadow-lg">
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="font-data text-sm md:text-base text-violet font-semibold">
                        {m.number}
                      </span>
                      <span className="font-display font-medium text-lg md:text-xl text-text group-hover:text-violet transition-colors">
                        {m.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden md:flex items-center gap-2">
                        {m.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] text-text-dim border border-line rounded-full px-2.5 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </span>
                      {isOpen ? (
                        <ChevronUp size={20} className="text-violet shrink-0" />
                      ) : (
                        <ChevronDown size={20} className="text-text-dim shrink-0 group-hover:text-violet transition-colors" />
                      )}
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 p-6 md:p-8 rounded-xl border border-line bg-bg-raised animate-in fade-in slide-in-from-top-2 duration-300 shadow-lg">
                    <p className="text-text-dim text-sm md:text-base max-w-3xl mx-auto mb-6 text-center">{m.intro}</p>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6">
                      <div>
                        <p className="text-xs font-data text-text-faint mb-3 text-center">
                          {m.coreLabel}
                        </p>
                        <ul className="space-y-2">
                          {m.core.map((c) => (
                            <li key={c} className="text-sm text-text-dim leading-snug flex gap-2.5">
                              <span className="mt-[7px] h-1 w-1 rounded-full bg-line shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-data text-amber mb-3 text-center">{m.newLabel}</p>
                        <ul className="space-y-2">
                          {m.newTopics.map((c) => (
                            <li key={c} className="text-sm text-text-dim leading-snug flex gap-2.5">
                              <span className="mt-[7px] h-1 w-1 rounded-full bg-amber/60 shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-data text-violet mb-3 text-center">
                          {m.handsOnLabel}
                        </p>
                        <ul className="space-y-2">
                          {m.handsOn.map((c) => (
                            <li key={c} className="text-sm text-text-dim leading-snug flex gap-2.5">
                              <span className="mt-[7px] h-1 w-1 rounded-full bg-violet/60 shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="text-sm md:text-[15px] text-text border-t border-line pt-4 max-w-3xl mx-auto leading-relaxed text-center">
                      {m.outcome}
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
