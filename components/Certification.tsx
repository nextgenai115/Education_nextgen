import { certification } from "@/lib/content";

const detailIcons: Record<string, string> = {
  Format:      "workspace_premium",
  Issuer:      "business",
  Status:      "verified",
  Recognition: "emoji_events",
  Mentorship:  "groups",
  Career:      "trending_up",
};

const detailColors: Record<string, { color: string; bg: string; border: string }> = {
  Format:      { color: "#a78bfa", bg: "rgba(167,139,250,0.1)",  border: "rgba(167,139,250,0.25)"  },
  Issuer:      { color: "#60a5fa", bg: "rgba(96,165,250,0.1)",   border: "rgba(96,165,250,0.25)"   },
  Status:      { color: "#fbbf24", bg: "rgba(251,191,36,0.1)",   border: "rgba(251,191,36,0.25)"   },
  Recognition: { color: "#34d399", bg: "rgba(52,211,153,0.1)",   border: "rgba(52,211,153,0.25)"   },
  Mentorship:  { color: "#f472b6", bg: "rgba(244,114,182,0.1)",  border: "rgba(244,114,182,0.25)"  },
  Career:      { color: "#38bdf8", bg: "rgba(56,189,248,0.1)",   border: "rgba(56,189,248,0.25)"   },
};

export default function Certification() {
  return (
    <section id="certification" className="border-b border-white/[0.06] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <p
              className="text-xs font-data font-semibold tracking-widest uppercase px-4 py-2 rounded-full border"
              style={{ background: "rgba(167,139,250,0.1)", borderColor: "rgba(167,139,250,0.3)", color: "#c4b5fd" }}
            >
              Completion &amp; certification
            </p>
          </div>
          <h2 className="mt-5 font-display font-bold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.02em]">
            What you{" "}
            <span className="gradient-text">earn</span>{" "}
            after all 5 modules
          </h2>
          <p className="mt-4 text-text-dim font-medium leading-relaxed">{certification.intro}</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8">

          {/* Details card */}
          <div
            className="rounded-2xl p-7 md:p-8"
            style={{
              background: "linear-gradient(135deg, rgba(15,20,31,0.98) 0%, rgba(20,15,40,0.95) 100%)",
              border: "1px solid rgba(167,139,250,0.2)",
              boxShadow: "0 0 40px rgba(167,139,250,0.06)",
            }}
          >
            <p className="text-xs font-data font-bold uppercase tracking-widest mb-5" style={{ color: "#a78bfa" }}>
              Certificate Details
            </p>
            <div className="flex flex-col gap-3">
              {certification.details.map((d) => {
                const icon = detailIcons[d.label] ?? "info";
                const s = detailColors[d.label] ?? { color: "#a78bfa", bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.2)" };
                return (
                  <div
                    key={d.label}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.01]"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {/* Icon tile */}
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                      style={{ background: s.bg, border: `1px solid ${s.border}` }}
                    >
                      <span className="material-symbols-rounded select-none" style={{ color: s.color, fontSize: "18px" }}>
                        {icon}
                      </span>
                    </div>

                    {/* Label + Value */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-data font-bold uppercase tracking-widest mb-0.5" style={{ color: s.color, opacity: 0.75 }}>
                        {d.label}
                      </p>
                      <p className="text-sm font-bold text-white leading-snug">{d.value}</p>
                    </div>

                    {/* Check tick */}
                    <span className="material-symbols-rounded select-none shrink-0" style={{ color: s.color, fontSize: "17px", opacity: 0.55 }}>
                      check_circle
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Eligibility card */}
          <div
            className="rounded-2xl p-7 md:p-9"
            style={{
              background: "linear-gradient(135deg, rgba(52,211,153,0.05) 0%, rgba(15,20,31,0.95) 100%)",
              border: "1px solid rgba(52,211,153,0.2)",
              boxShadow: "0 0 40px rgba(52,211,153,0.05)",
            }}
          >
            <p className="text-xs font-data font-bold uppercase tracking-widest mb-5" style={{ color: "#34d399" }}>
              Eligibility Criteria
            </p>
            <ul className="space-y-3">
              {certification.eligibility.map((e, i) => (
                <li
                  key={e}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <span
                    className="flex items-center justify-center h-6 w-6 rounded-full shrink-0 mt-0.5 font-data text-xs font-bold"
                    style={{ background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.3)", color: "#34d399" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-text-dim leading-relaxed">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
