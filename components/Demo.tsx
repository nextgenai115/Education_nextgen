import { demo } from "@/lib/content";
const groups = [
  {
    ...demo.repetitive,
    icon: "smart_toy",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.3)",
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(96,165,250,0.04) 100%)",
  },
  {
    ...demo.social,
    icon: "share",
    color: "#34d399",
    bg: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.3)",
    gradient: "linear-gradient(135deg, rgba(52,211,153,0.08) 0%, rgba(56,189,248,0.04) 100%)",
  },
];
export default function Demo() {
  return (
    <section className="border-b border-white/[0.06] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-bg/75" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/3 left-0 h-[400px] w-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 70%)" }} />
      </div>
      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 relative z-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <p
              className="text-xs font-data font-semibold tracking-widest uppercase px-4 py-2 rounded-full border"
              style={{ background: "rgba(167,139,250,0.1)", borderColor: "rgba(167,139,250,0.3)", color: "#c4b5fd" }}
            >
              See what you&rsquo;ll build
            </p>
          </div>
          <h2 className="mt-5 font-display font-bold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.02em]">
            AI agents &amp;{" "}
            <span className="gradient-text">automation demo</span>
          </h2>
          <p className="mt-4 text-text-dim font-medium leading-relaxed">
            Real systems you&rsquo;ll build and deploy during the program.
          </p>
        </div>
        <div className="mt-14 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="relative overflow-hidden rounded-2xl p-6 md:p-8"
              style={{
                background: g.gradient,
                border: `1px solid ${g.border}`,
                boxShadow: `0 0 40px ${g.color}15`,
              }}
            >
              <div className="flex items-center gap-4 mb-7">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl"
                  style={{ background: g.bg, border: `1px solid ${g.border}` }}
                >
                  <span className="material-symbols-rounded select-none" style={{ color: g.color, fontSize: "22px" }}>
                    {g.icon}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white">{g.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {g.items.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: g.color }} />
                      <span className="text-sm font-semibold text-text-dim">{item}</span>
                    </div>
                    <span
                      className="font-data text-xs font-bold px-2 py-0.5 rounded-md"
                      style={{ background: g.bg, color: g.color, border: `1px solid ${g.border}` }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
