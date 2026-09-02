import { income } from "@/lib/content";
const incomeIcons = [
  { icon: "auto_fix_high",   color: "#a78bfa", bg: "rgba(139,92,246,0.12)",  border: "rgba(139,92,246,0.3)",  glow: "hover:shadow-[0_8px_40px_rgba(139,92,246,0.2)]",  hoverBorder: "hover:border-[rgba(139,92,246,0.5)]"  },
  { icon: "videocam",        color: "#f472b6", bg: "rgba(244,114,182,0.12)", border: "rgba(244,114,182,0.3)", glow: "hover:shadow-[0_8px_40px_rgba(244,114,182,0.2)]", hoverBorder: "hover:border-[rgba(244,114,182,0.5)]" },
  { icon: "edit_note",       color: "#60a5fa", bg: "rgba(96,165,250,0.12)",  border: "rgba(96,165,250,0.3)",  glow: "hover:shadow-[0_8px_40px_rgba(96,165,250,0.2)]",  hoverBorder: "hover:border-[rgba(96,165,250,0.5)]"  },
  { icon: "psychology",      color: "#fbbf24", bg: "rgba(251,191,36,0.12)",  border: "rgba(251,191,36,0.3)",  glow: "hover:shadow-[0_8px_40px_rgba(251,191,36,0.2)]",  hoverBorder: "hover:border-[rgba(251,191,36,0.5)]"  },
  { icon: "business_center", color: "#34d399", bg: "rgba(52,211,153,0.12)",  border: "rgba(52,211,153,0.3)",  glow: "hover:shadow-[0_8px_40px_rgba(52,211,153,0.2)]",  hoverBorder: "hover:border-[rgba(52,211,153,0.5)]"  },
  { icon: "smart_toy",       color: "#fb923c", bg: "rgba(251,146,60,0.12)",  border: "rgba(251,146,60,0.3)",  glow: "hover:shadow-[0_8px_40px_rgba(251,146,60,0.2)]",  hoverBorder: "hover:border-[rgba(251,146,60,0.5)]"  },
  { icon: "laptop_mac",      color: "#38bdf8", bg: "rgba(56,189,248,0.12)",  border: "rgba(56,189,248,0.3)",  glow: "hover:shadow-[0_8px_40px_rgba(56,189,248,0.2)]",  hoverBorder: "hover:border-[rgba(56,189,248,0.5)]"  },
  { icon: "rocket_launch",   color: "#e879f9", bg: "rgba(232,121,249,0.12)", border: "rgba(232,121,249,0.3)", glow: "hover:shadow-[0_8px_40px_rgba(232,121,249,0.2)]", hoverBorder: "hover:border-[rgba(232,121,249,0.5)]" },
];
export default function Income() {
  return (
    <section id="opportunity" className="border-b border-line relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-0 h-[500px] w-[500px] bg-violet/[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] bg-amber/[0.02] blur-[120px] rounded-full" />
      </div>
      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border"
              style={{ background: "linear-gradient(135deg, #1a1000 0%, #2a1a00 50%, #1a1000 100%)", borderColor: "rgba(255,197,100,0.5)", boxShadow: "0 0 20px rgba(255,197,100,0.15), inset 0 1px 0 rgba(255,197,100,0.1)" }}
            >
              <span className="material-symbols-rounded select-none" style={{ color: "#ffc564", fontSize: "16px" }}>auto_awesome</span>
              <span className="text-sm font-data font-bold tracking-widest uppercase" style={{ color: "#ffc564" }}>Income opportunities</span>
              <span className="material-symbols-rounded select-none" style={{ color: "#ffc564", fontSize: "16px" }}>auto_awesome</span>
            </div>
          </div>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.01em]">
            8 ways to build income with AI
          </h2>
          <p className="mt-4 text-text-dim font-medium leading-relaxed">
            Learners don&rsquo;t just study AI — they monetize it. Eight proven, in-demand paths
            to sustainable income.
          </p>
        </div>
        <div className="mt-12 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {income.map((it, i) => {
            const { icon, color, bg, border, glow, hoverBorder } = incomeIcons[i];
            return (
              <div
                key={it.title}
                className={`group relative overflow-hidden rounded-xl border border-line p-6 md:p-7 transition-all duration-300 hover:scale-[1.03] ${glow} ${hoverBorder}`}
                style={{
                  background: "linear-gradient(135deg, rgba(15,20,31,0.95) 0%, rgba(13,17,23,0.98) 100%)",
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl"
                    style={{ background: bg, border: `1px solid ${border}` }}
                  >
                    <span className="material-symbols-rounded select-none" style={{ color, fontSize: "22px" }}>
                      {icon}
                    </span>
                  </div>
                  <span className="font-data text-xs font-bold" style={{ color }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base md:text-[1.05rem] text-text leading-snug mb-2">
                  {it.title}
                </h3>
                <p className="text-sm font-medium text-text-dim leading-relaxed">{it.desc}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
