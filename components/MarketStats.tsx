import { marketStats } from "@/lib/content";

const cards = [
  { accent: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.25)", value: "linear-gradient(135deg, #a78bfa, #60a5fa)", icon: "trending_up"   },
  { accent: "rgba(96,165,250,0.12)",  border: "rgba(96,165,250,0.25)",  value: "linear-gradient(135deg, #60a5fa, #38bdf8)", icon: "payments"       },
  { accent: "rgba(251,191,36,0.12)",  border: "rgba(251,191,36,0.25)",  value: "linear-gradient(135deg, #fbbf24, #fb923c)", icon: "groups"         },
  { accent: "rgba(52,211,153,0.12)",  border: "rgba(52,211,153,0.25)",  value: "linear-gradient(135deg, #34d399, #60a5fa)", icon: "domain"         },
  { accent: "rgba(244,114,182,0.12)", border: "rgba(244,114,182,0.25)", value: "linear-gradient(135deg, #f472b6, #a78bfa)", icon: "code"           },
  { accent: "rgba(251,146,60,0.12)",  border: "rgba(251,146,60,0.25)",  value: "linear-gradient(135deg, #fb923c, #fbbf24)", icon: "rocket_launch"  },
  { accent: "rgba(56,189,248,0.12)",  border: "rgba(56,189,248,0.25)",  value: "linear-gradient(135deg, #38bdf8, #34d399)", icon: "auto_fix_high"  },
  { accent: "rgba(232,121,249,0.12)", border: "rgba(232,121,249,0.25)", value: "linear-gradient(135deg, #e879f9, #a78bfa)", icon: "database"       },
];

export default function MarketStats() {
  return (
    <section
      className="border-b relative overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "linear-gradient(160deg, #07090f 0%, #0d1224 50%, #07090f 100%)" }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-1/4 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 65%)" }} />
        <div className="absolute -bottom-20 left-1/4 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 65%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[700px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-data font-bold tracking-widest uppercase"
            style={{ background: "rgba(255,197,100,0.08)", borderColor: "rgba(255,197,100,0.3)", color: "#ffc564" }}
          >
            <span className="material-symbols-rounded select-none" style={{ color: "#ffc564", fontSize: "15px" }}>auto_awesome</span>
            Market opportunity
            <span className="material-symbols-rounded select-none" style={{ color: "#ffc564", fontSize: "15px" }}>auto_awesome</span>
          </p>

          <h2 className="mt-5 font-display font-bold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.02em] text-white">
            Why{" "}
            <span style={{
              background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              AI matters
            </span>{" "}
            now
          </h2>
          <p className="mt-4 font-medium leading-relaxed text-text-dim">
            AI is creating new opportunities for those who are ready.
          </p>
        </div>

        {/* Stats grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {marketStats.map((s, i) => {
            const c = cards[i];
            return (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-2xl p-6 md:p-7 transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1"
                style={{
                  background: `linear-gradient(145deg, ${c.accent} 0%, rgba(13,18,36,0.95) 100%)`,
                  border: `1px solid ${c.border}`,
                  boxShadow: `0 4px 32px rgba(0,0,0,0.35), 0 0 0 0 transparent`,
                }}
              >
                {/* Top-left icon */}
                <div className="mb-3">
                  <span
                    className="material-symbols-rounded select-none"
                    style={{
                      background: c.value,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontSize: "18px",
                      opacity: 0.7,
                    }}
                  >
                    {c.icon}
                  </span>
                </div>

                {/* Value */}
                <p
                  className="font-data text-3xl md:text-4xl font-bold leading-none"
                  style={{
                    background: c.value,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </p>

                {/* Label */}
                <p className="mt-2.5 text-xs md:text-[13px] font-semibold text-text-dim leading-snug">
                  {s.label}
                </p>

                {/* Corner glow blob */}
                <div
                  className="absolute -bottom-5 -right-5 h-20 w-20 rounded-full opacity-25 transition-opacity duration-300 group-hover:opacity-40"
                  style={{ background: c.value }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: c.value }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
