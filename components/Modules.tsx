import { modules } from "@/lib/content";
import { CheckCircle2, Sparkles, Wrench } from "lucide-react";

export default function Modules() {
  return (
    <section id="program" className="border-b border-white/[0.06] relative overflow-hidden">
      {/* Static dark bg with ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #05080c 0%, #0a0520 50%, #05080c 100%)" }} />
        <div className="absolute top-0 right-1/4 h-[600px] w-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border"
              style={{
                background: "rgba(255,197,100,0.1)",
                borderColor: "rgba(255,197,100,0.35)",
              }}
            >
              <span className="material-symbols-rounded select-none" style={{ color: "#ffc564", fontSize: "16px" }}>auto_awesome</span>
              <span className="text-sm font-data font-bold tracking-widest uppercase" style={{ color: "#ffc564" }}>
                The program
              </span>
              <span className="material-symbols-rounded select-none" style={{ color: "#ffc564", fontSize: "16px" }}>auto_awesome</span>
            </div>
          </div>
          <h2 className="mt-5 font-display font-bold text-3xl md:text-[2.6rem] leading-[1.1] tracking-[-0.02em]">
            AI Unlocked —{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #a78bfa 0%, #60a5fa 60%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              5 Module Program
            </span>
          </h2>
          <p className="mt-4 text-text-dim leading-relaxed text-[15px]">
            Deep curriculum breakdown — every module ends with a deployable capstone project.
          </p>
        </div>

        {/* Module cards */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {modules.map((m) => (
            <div
              key={m.code}
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: "rgba(167,139,250,0.35)",
                background: "linear-gradient(135deg, rgba(15,20,31,1) 0%, rgba(20,15,40,0.95) 100%)",
                boxShadow: "0 0 40px rgba(139,92,246,0.06)",
              }}
            >
              {/* Card header */}
              <div
                className="flex items-center justify-between px-6 py-5 gap-4"
                style={{ borderLeft: "3px solid #a78bfa" }}
              >
                {/* Left: badge + title */}
                <div className="flex items-center gap-4 min-w-0">
                  <span
                    className="shrink-0 text-[11px] font-data font-bold px-2.5 py-1 rounded-md"
                    style={{
                      background: "linear-gradient(90deg, rgba(139,92,246,0.25) 0%, rgba(96,165,250,0.15) 100%)",
                      border: "1px solid rgba(139,92,246,0.4)",
                      color: "#c4b5fd",
                    }}
                  >
                    {m.code} · Module {m.number}
                  </span>
                  <span className="font-display font-bold text-lg md:text-xl" style={{ color: "#e9d5ff" }}>
                    {m.title}
                  </span>
                </div>

                {/* Right: tags */}
                <div className="hidden md:flex items-center gap-1.5 shrink-0">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium border rounded-full px-2.5 py-[3px]"
                      style={{
                        color: "#9aa5b8",
                        borderColor: "rgba(30,37,50,1)",
                        background: "rgba(15,20,31,0.8)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div
                className="px-6 pb-7 pt-2"
                style={{ borderLeft: "3px solid #a78bfa" }}
              >
                {/* Intro */}
                <p className="text-sm font-semibold italic mb-6 pl-1" style={{ color: "#c8d4e8" }}>
                  {m.intro}
                </p>

                {/* 3-column grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* Core Topics */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <CheckCircle2 size={13} style={{ color: "#60a5fa" }} />
                      <p className="text-[11px] font-data font-semibold tracking-widest uppercase" style={{ color: "#60a5fa" }}>
                        {m.coreLabel}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {m.core.map((c) => (
                        <li key={c} className="text-sm leading-snug flex gap-2.5 items-start" style={{ color: "#dde6f5", fontWeight: 500 }}>
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "#3b82f6" }} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* New Topics */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <Sparkles size={13} style={{ color: "#fbbf24" }} />
                      <p className="text-[11px] font-data font-semibold tracking-widest uppercase" style={{ color: "#fbbf24" }}>
                        {m.newLabel}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {m.newTopics.map((c) => (
                        <li key={c} className="text-sm leading-snug flex gap-2.5 items-start" style={{ color: "#dde6f5", fontWeight: 500 }}>
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "#f59e0b" }} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hands-On */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <Wrench size={13} style={{ color: "#34d399" }} />
                      <p className="text-[11px] font-data font-semibold tracking-widest uppercase" style={{ color: "#34d399" }}>
                        {m.handsOnLabel}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {m.handsOn.map((c) => (
                        <li
                          key={c}
                          className="text-sm leading-snug rounded-lg px-3 py-2"
                          style={{
                            color: "#d1fae5",
                            fontWeight: 500,
                            background: "rgba(52,211,153,0.07)",
                            border: "1px solid rgba(52,211,153,0.15)",
                          }}
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcome */}
                <div
                  className="rounded-xl px-5 py-4"
                  style={{
                    background: "linear-gradient(120deg, rgba(139,92,246,0.1) 0%, rgba(96,165,250,0.08) 100%)",
                    border: "1px solid rgba(139,92,246,0.2)",
                  }}
                >
                  <p className="text-[13px] font-data font-semibold tracking-widest uppercase mb-1.5" style={{ color: "#a78bfa" }}>
                    Outcome
                  </p>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: "#f0f6ff" }}>
                    {m.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
