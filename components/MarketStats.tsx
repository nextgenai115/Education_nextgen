import { marketStats } from "@/lib/content";

export default function MarketStats() {
  return (
    <section className="border-b border-line relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-violet/[0.05] blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-amber/[0.03] blur-[120px] rounded-full" />
      </div>
      
      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <p className="text-xs font-data text-violet font-semibold tracking-wide uppercase px-4 py-2 bg-violet/10 border border-violet/30 rounded-[15px]">Market opportunity</p>
          </div>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.01em]">
            Why AI matters now
          </h2>
          <p className="mt-4 text-text-dim leading-relaxed">
            AI is creating new opportunities for those who are ready.
          </p>
        </div>

        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {marketStats.map((s, index) => (
            <div
              key={s.label}
              className="relative overflow-hidden rounded-xl border border-line bg-gradient-to-br from-bg-panel to-bg-raised p-6 md:p-8 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-violet/10"
              style={{
                background: `linear-gradient(135deg, 
                  ${index % 2 === 0 ? 'rgba(238, 238, 238, 0.05)' : 'rgba(176, 176, 176, 0.03)'} 0%, 
                  rgba(15, 20, 31, 0.8) 50%, 
                  rgba(13, 17, 23, 0.9) 100%)`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              <p className="font-data text-3xl md:text-4xl text-text relative z-10">{s.value}</p>
              <p className="mt-2 text-xs md:text-[13px] text-text-dim leading-snug relative z-10">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
