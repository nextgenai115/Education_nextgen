import { hierarchy } from "@/lib/content";

// Each step gets progressively richer styling to show the hierarchy
const stepStyles = [
  {
    color: "#94a3b8",
    bg: "rgba(148,163,184,0.06)",
    border: "rgba(148,163,184,0.15)",
    glow: "rgba(148,163,184,0.03)",
    label: "Foundation",
    indent: "mr-0 sm:mr-24",
  },
  {
    color: "#7dd3fc",
    bg: "rgba(125,211,252,0.07)",
    border: "rgba(125,211,252,0.18)",
    glow: "rgba(125,211,252,0.04)",
    label: "Learning",
    indent: "mr-0 sm:mr-20",
  },
  {
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.22)",
    glow: "rgba(96,165,250,0.05)",
    label: "Architecture",
    indent: "mr-0 sm:mr-16",
  },
  {
    color: "#818cf8",
    bg: "rgba(129,140,248,0.09)",
    border: "rgba(129,140,248,0.25)",
    glow: "rgba(129,140,248,0.06)",
    label: "Advanced",
    indent: "mr-0 sm:mr-12",
  },
  {
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.1)",
    border: "rgba(167,139,250,0.3)",
    glow: "rgba(167,139,250,0.07)",
    label: "Generative",
    indent: "mr-0 sm:mr-8",
  },
  {
    color: "#c084fc",
    bg: "rgba(192,132,252,0.12)",
    border: "rgba(192,132,252,0.35)",
    glow: "rgba(192,132,252,0.08)",
    label: "Autonomous",
    indent: "mr-0 sm:mr-4",
  },
  {
    color: "#e879f9",
    bg: "rgba(232,121,249,0.14)",
    border: "rgba(232,121,249,0.4)",
    glow: "rgba(232,121,249,0.1)",
    label: "Peak",
    indent: "mr-0",
  },
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
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-bg/80" />
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
            <p
              className="text-xs font-data font-semibold tracking-widest uppercase px-4 py-2 rounded-full border"
              style={{
                background: "rgba(167,139,250,0.1)",
                borderColor: "rgba(167,139,250,0.3)",
                color: "#c4b5fd",
              }}
            >
              AI hierarchy
            </p>
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
                    background: `linear-gradient(120deg, ${s.bg} 0%, rgba(13,17,23,0.95) 100%)`,
                    border: `1px solid ${s.border}`,
                    boxShadow: `0 2px 20px ${s.glow}`,
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
