import { whyUs } from "@/lib/content";
const whyUsIcons = [
  { icon: "groups",           color: "#a78bfa", bg: "rgba(139,92,246,0.12)",  border: "rgba(139,92,246,0.3)"  },
  { icon: "rocket_launch",    color: "#60a5fa", bg: "rgba(96,165,250,0.12)",  border: "rgba(96,165,250,0.3)"  },
  { icon: "hub",              color: "#34d399", bg: "rgba(52,211,153,0.12)",  border: "rgba(52,211,153,0.3)"  },
  { icon: "verified",         color: "#fbbf24", bg: "rgba(251,191,36,0.12)",  border: "rgba(251,191,36,0.3)"  },
  { icon: "trending_up",      color: "#f472b6", bg: "rgba(244,114,182,0.12)", border: "rgba(244,114,182,0.3)" },
  { icon: "public",           color: "#38bdf8", bg: "rgba(56,189,248,0.12)",  border: "rgba(56,189,248,0.3)"  },
];
export default function WhyUs() {
  return (
    <section id="why-us" className="border-b border-line relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/enrol.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-bg/75" />
      </div>
      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 relative z-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border"
              style={{ background: "linear-gradient(135deg, #1a1000 0%, #2a1a00 50%, #1a1000 100%)", borderColor: "rgba(255,197,100,0.5)", boxShadow: "0 0 20px rgba(255,197,100,0.15), inset 0 1px 0 rgba(255,197,100,0.1)" }}
            >
              <span className="material-symbols-rounded select-none" style={{ color: "#ffc564", fontSize: "16px" }}>auto_awesome</span>
              <span className="text-sm font-data font-bold tracking-widest uppercase" style={{ color: "#ffc564" }}>Why us</span>
              <span className="material-symbols-rounded select-none" style={{ color: "#ffc564", fontSize: "16px" }}>auto_awesome</span>
            </div>
          </div>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.01em]">
            Why join Omkar AI Innovation?
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {whyUs.map((w, i) => {
            const { icon, color, bg, border } = whyUsIcons[i];
            return (
              <div
                key={w.title}
                className="group relative overflow-hidden rounded-xl border border-line bg-bg p-6 md:p-7 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <span className="material-symbols-rounded select-none" style={{ color, fontSize: "22px" }}>
                    {icon}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[15px] text-text">{w.title}</h3>
                <p className="mt-2 text-[13px] font-medium text-text-dim leading-relaxed">{w.desc}</p>
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
