import { income } from "@/lib/content";

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
            <p className="text-xs font-data text-violet font-semibold tracking-wide uppercase px-4 py-2 bg-violet/10 border border-violet/30 rounded-[15px]">Income opportunities</p>
          </div>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.01em]">
            8 ways to build income with AI
          </h2>
          <p className="mt-4 text-text-dim leading-relaxed">
            Learners don&rsquo;t just study AI — they monetize it. Eight proven, in-demand paths
            to sustainable income.
          </p>
        </div>

        <div className="mt-12 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {income.map((it, i) => (
            <div
              key={it.title}
              className="relative overflow-hidden rounded-xl border border-line p-6 md:p-7 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet/5"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(238, 238, 238, 0.03) 0%, 
                  rgba(15, 20, 31, 0.6) 50%, 
                  rgba(13, 17, 23, 0.8) 100%)`
              }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-violet/30 bg-violet/5 mb-4">
                <span className="font-data text-sm text-violet font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display font-semibold text-base md:text-lg text-text leading-snug mb-3">
                {it.title}
              </h3>
              <p className="text-sm text-text-dim leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
