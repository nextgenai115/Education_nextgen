import { hierarchy } from "@/lib/content";

export default function Hierarchy() {
  return (
    <section className="border-b border-line bg-bg-raised relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-0 h-[400px] w-[400px] bg-violet/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 h-[300px] w-[300px] bg-amber/[0.02] blur-[100px] rounded-full" />
      </div>
      
      <div className="container-px mx-auto max-w-7xl py-10 md:py-14 relative">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-block">
            <p className="text-xs font-data text-violet font-semibold tracking-wide uppercase px-4 py-2 bg-violet/10 border border-violet/30 rounded-[15px]">AI hierarchy</p>
          </div>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.01em]">
            The AI evolution
          </h2>
          <p className="mt-4 text-text-dim leading-relaxed">
            From plain artificial intelligence to fully agentic AI companies — you learn the
            whole ladder.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-3">
            {hierarchy.map((h, i) => (
              <div
                key={h.step}
                className="relative overflow-hidden rounded-lg border border-line p-4 md:p-5 transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-violet/5"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(238, 238, 238, 0.03) 0%, 
                    rgba(15, 20, 31, 0.6) 50%, 
                    rgba(13, 17, 23, 0.8) 100%)`
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg border border-violet/30 bg-violet/5">
                      <span className="font-data text-lg md:text-xl text-violet">
                        {String(h.step).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-base md:text-lg text-text">
                        {h.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-text-dim leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
