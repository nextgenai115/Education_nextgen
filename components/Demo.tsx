import { demo } from "@/lib/content";

const groups = [
  {
    ...demo.repetitive,
    icon: "smart_toy",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.25)",
    border: "rgba(167,139,250,0.5)",
    gradient: "linear-gradient(135deg, #1e1040 0%, #160d35 40%, #0f0a20 100%)",
    itemBg: "linear-gradient(135deg, #1e1545 0%, #160f38 100%)",
    itemBorder: "rgba(167,139,250,0.3)",
    numGrad: "linear-gradient(135deg, #7c3aed, #4f46e5)",
    numBorder: "rgba(167,139,250,0.6)",
    headingGrad: "linear-gradient(90deg, #c4b5fd, #818cf8)",
    glow: "0 0 60px rgba(139,92,246,0.2)",
  },
  {
    ...demo.social,
    icon: "share",
    color: "#34d399",
    bg: "rgba(52,211,153,0.25)",
    border: "rgba(52,211,153,0.5)",
    gradient: "linear-gradient(135deg, #0d2e25 0%, #091f1a 40%, #061412 100%)",
    itemBg: "linear-gradient(135deg, #0f3028 0%, #0a2420 100%)",
    itemBorder: "rgba(52,211,153,0.3)",
    numGrad: "linear-gradient(135deg, #059669, #0891b2)",
    numBorder: "rgba(52,211,153,0.6)",
    headingGrad: "linear-gradient(90deg, #6ee7b7, #38bdf8)",
    glow: "0 0 60px rgba(52,211,153,0.15)",
  },
];

export default function Demo() {
  return (
    <section id="demo" className="border-b border-white/[0.06] relative overflow-hidden">
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
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border"
              style={{ background: "linear-gradient(135deg, #1a1000 0%, #2a1a00 50%, #1a1000 100%)", borderColor: "rgba(255,197,100,0.5)", boxShadow: "0 0 20px rgba(255,197,100,0.15), inset 0 1px 0 rgba(255,197,100,0.1)" }}
            >
              <span className="material-symbols-rounded select-none" style={{ color: "#ffc564", fontSize: "16px" }}>auto_awesome</span>
              <span className="text-sm font-data font-bold tracking-widest uppercase" style={{ color: "#ffc564" }}>See what you&rsquo;ll build</span>
              <span className="material-symbols-rounded select-none" style={{ color: "#ffc564", fontSize: "16px" }}>auto_awesome</span>
            </div>
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
                boxShadow: g.glow,
              }}
            >
              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, #f472b6, #a78bfa, #60a5fa, #34d399, #fbbf24)" }}
              />

              {/* Card header */}
              <div className="flex items-center gap-4 mb-6 mt-2">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                  style={{ background: g.numGrad, boxShadow: `0 4px 16px ${g.color}40` }}
                >
                  <span className="material-symbols-rounded select-none text-white" style={{ fontSize: "22px" }}>
                    {g.icon}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-data font-bold uppercase tracking-widest mb-0.5" style={{ color: g.color, opacity: 0.8 }}>
                    Automation
                  </p>
                  <h3
                    className="font-display font-bold text-lg leading-tight"
                    style={{
                      background: g.headingGrad,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {g.title}
                  </h3>
                </div>
              </div>

              {/* Items */}
              <ul className="flex flex-col gap-2.5">
                {g.items.map((item, idx) => (
                  <li
                    key={item}
                    className="group flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.01]"
                    style={{
                      background: g.itemBg,
                      border: `1px solid ${g.itemBorder}`,
                    }}
                  >
                    {/* Step number */}
                    <div
                      className="flex items-center justify-center h-8 w-8 rounded-lg shrink-0 font-data text-xs font-bold text-white"
                      style={{
                        background: g.numGrad,
                        boxShadow: `0 2px 8px ${g.color}40`,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    {/* Text */}
                    <span className="text-sm font-semibold text-white leading-snug flex-1">{item}</span>

                    {/* Check icon */}
                    <span
                      className="material-symbols-rounded select-none shrink-0"
                      style={{ color: g.color, fontSize: "18px", opacity: 0.6 }}
                    >
                      check_circle
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
