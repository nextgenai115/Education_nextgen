import { hierarchy } from "@/lib/content";
// Each step gets progressively richer styling to show the hierarchy
const stepStyles = [
  { color: "#94a3b8", bg: "#1a1f2e", border: "#2a3244", glow: "#1a1f2e", label: "Foundation",  indent: "mr-0 sm:mr-24" },
  { color: "#7dd3fc", bg: "#0f1e2e", border: "#1a3448", glow: "#0f1e2e", label: "Learning",     indent: "mr-0 sm:mr-20" },
  { color: "#60a5fa", bg: "#0e1a2e", border: "#1a2e48", glow: "#0e1a2e", label: "Architecture", indent: "mr-0 sm:mr-16" },
  { color: "#818cf8", bg: "#12112e", border: "#201f48", glow: "#12112e", label: "Advanced",     indent: "mr-0 sm:mr-12" },
  { color: "#a78bfa", bg: "#160e30", border: "#2a1a50", glow: "#160e30", label: "Generative",   indent: "mr-0 sm:mr-8"  },
  { color: "#c084fc", bg: "#1a0e34", border: "#301a55", glow: "#1a0e34", label: "Autonomous",   indent: "mr-0 sm:mr-4"  },
  { color: "#e879f9", bg: "#1e0a38", border: "#3a1258", glow: "#1e0a38", label: "Peak",          indent: "mr-0"          },
];
export default function Hierarchy() {
  return (
    <section className="border-b border-white/[0.06] relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/h.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(5,8,12,0.7)" }} />
      </div>
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div
          className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)" }}
        />
      </div>
      <div className="container-px mx-auto max-w-7xl py-12 md:py-20 lg:py-24 relative z-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
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
                AI Hierarchy
              </span>
              <span className="material-symbols-rounded select-none" style={{ color: "#ffc564", fontSize: "16px" }}>auto_awesome</span>
            </div>
          </div>
          <h2 className="mt-5 font-display font-bold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.02em]">
            The{" "}
            <span className="gradient-text">AI evolution</span>
          </h2>
          <p className="mt-4 text-text-dim font-medium leading-relaxed text-sm md:text-base">
            From plain artificial intelligence to fully agentic AI companies — you learn the
            whole ladder.
          </p>
        </div>
        {/* Two-column: steps + image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Steps — pyramid/funnel layout */}
          <div className="flex flex-col gap-2 w-full">
            {hierarchy.map((h, i) => {
              const s = stepStyles[i];
              return (
                <div
                  key={h.step}
                  className={`group relative flex items-stretch rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 ${s.indent}`}
                  style={{
                    background: s.bg,
                    border: `1px solid ${s.border}`,
                    boxShadow: `0 2px 16px rgba(0,0,0,0.4)`,
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className="w-1 shrink-0"
                    style={{ background: `linear-gradient(180deg, transparent, ${s.color}, transparent)` }}
                  />
                  {/* Step number */}
                  <div
                    className="flex flex-col items-center justify-center w-14 sm:w-16 shrink-0 py-4"
                    style={{ borderRight: `1px solid ${s.border}` }}
                  >
                    <span
                      className="font-data text-sm font-bold leading-none"
                      style={{ color: s.color }}
                    >
                      {String(h.step).padStart(2, "0")}
                    </span>
                    <span
                      className="font-data text-[9px] font-semibold uppercase tracking-wider mt-1 hidden sm:block"
                      style={{ color: s.color, opacity: 0.6 }}
                    >
                      {s.label}
                    </span>
                  </div>
                  {/* Text content */}
                  <div className="flex flex-col justify-center px-4 sm:px-5 py-3.5 gap-0.5 flex-1 min-w-0">
                    <h3
                      className="font-display font-bold text-sm sm:text-base leading-snug truncate"
                      style={{ color: "#ffffff" }}
                    >
                      {h.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-medium leading-relaxed"
                      style={{ color: "#c8d4e8" }}
                    >
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
            {/* Bottom label */}
            <p className="text-center text-xs font-semibold text-text-faint mt-2 tracking-wider uppercase">
              ↑ Every level builds on the last
            </p>
          </div>
          {/* Right: image — hidden on mobile, shown lg+ */}
          <div className="hidden lg:flex items-center justify-center w-full">
            <div className="relative w-full max-w-[420px] mx-auto">
              <img
                src="/ai-hierarchy-dark.svg"
                alt="AI Hierarchy Visualization"
                className="w-full h-auto object-contain"
                style={{
                  borderRadius: "15px",
                  boxShadow: "0 4px 32px rgba(167,139,250,0.15), 0 1px 4px rgba(0,0,0,0.5)",
                  maxHeight: "480px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
