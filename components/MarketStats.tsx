import { marketStats } from "@/lib/content";

const cardAccents = [
  "rgba(167,139,250,0.08)",
  "rgba(96,165,250,0.08)",
  "rgba(251,191,36,0.08)",
  "rgba(52,211,153,0.08)",
  "rgba(244,114,182,0.08)",
  "rgba(251,146,60,0.08)",
  "rgba(56,189,248,0.08)",
  "rgba(232,121,249,0.08)",
];

const valueColors = [
  "linear-gradient(135deg, #a78bfa, #60a5fa)",
  "linear-gradient(135deg, #60a5fa, #38bdf8)",
  "linear-gradient(135deg, #fbbf24, #fb923c)",
  "linear-gradient(135deg, #34d399, #60a5fa)",
  "linear-gradient(135deg, #f472b6, #a78bfa)",
  "linear-gradient(135deg, #fb923c, #fbbf24)",
  "linear-gradient(135deg, #38bdf8, #34d399)",
  "linear-gradient(135deg, #e879f9, #a78bfa)",
];

export default function MarketStats() {
  return (
    <section className="border-b border-white/[0.06] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%)" }} />
      </div>

      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <p
              className="text-xs font-data font-semibold tracking-widest uppercase px-4 py-2 rounded-full border"
              style={{ background: "rgba(167,139,250,0.1)", borderColor: "rgba(167,139,250,0.3)", color: "#c4b5fd" }}
            >
              Market opportunity
            </p>
          </div>
          <h2 className="mt-5 font-display font-bold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.02em]">
            Why{" "}
            <span className="gradient-text">AI matters</span>{" "}
            now
          </h2>
          <p className="mt-4 text-text-dim font-medium leading-relaxed">
            AI is creating new opportunities for those who are ready.
          </p>
        </div>

        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {marketStats.map((s, i) => (
            <div
              key={s.label}
              className="relative overflow-hidden rounded-2xl p-6 md:p-7 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{
                background: `linear-gradient(135deg, ${cardAccents[i]} 0%, rgba(15,20,31,0.9) 100%)`,
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
            >
              <p
                className="font-data text-3xl md:text-4xl font-bold"
                style={{
                  background: valueColors[i],
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </p>
              <p className="mt-2 text-xs md:text-[13px] font-semibold text-text-dim leading-snug">
                {s.label}
              </p>
              {/* Corner accent */}
              <div
                className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full opacity-30"
                style={{ background: valueColors[i] }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
