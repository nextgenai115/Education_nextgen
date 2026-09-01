import { hierarchy } from "@/lib/content";

export default function Hierarchy() {
  return (
    <section className="border-b border-line relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" />
      </div>

      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-1/4 right-0 h-[500px] w-[500px] bg-violet/[0.04] blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 h-[350px] w-[350px] bg-amber/[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="container-px mx-auto max-w-7xl py-12 md:py-20 relative z-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block">
            <p className="text-xs font-data text-violet font-semibold tracking-wide uppercase px-4 py-2 bg-violet/10 border border-violet/30 rounded-[15px]">
              AI hierarchy
            </p>
          </div>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.01em]">
            The AI evolution
          </h2>
          <p className="mt-4 text-text-dim font-medium leading-relaxed">
            From plain artificial intelligence to fully agentic AI companies — you learn the
            whole ladder.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Hierarchy steps */}
          <div className="flex flex-col gap-2.5">
            {hierarchy.map((h) => (
              <div
                key={h.step}
                className="group relative flex items-stretch gap-0 rounded-xl border border-line overflow-hidden transition-all duration-300 hover:border-violet/40 hover:shadow-lg hover:shadow-violet/5"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(15,20,31,0.9) 0%, rgba(13,17,23,0.95) 100%)",
                }}
              >
                {/* Step number column */}
                <div className="flex items-center justify-center w-16 shrink-0 bg-violet/5 border-r border-line group-hover:bg-violet/10 transition-colors duration-300">
                  <span className="font-data text-sm font-bold text-violet group-hover:text-violet transition-colors duration-300">
                    {String(h.step).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center px-5 py-4 gap-0.5">
                  <h3 className="font-display font-bold text-base md:text-[1.05rem] text-text leading-snug">
                    {h.title}
                  </h3>
                  <p className="text-sm font-medium text-text-dim leading-relaxed">
                    {h.desc}
                  </p>
                </div>

                {/* Accent bar on left edge */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-violet/0 via-violet/50 to-violet/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Right: Image — centered against the full height of the left column */}
          <div className="flex items-center justify-center w-full">
            <div className="relative w-full max-w-[420px] mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-3/4 h-3/4 bg-violet/15 blur-[100px] rounded-full" />
              </div>
              <img
                src="/ai-hierarchy-dark.svg"
                alt="AI Hierarchy Visualization"
                className="relative w-full h-auto object-contain drop-shadow-2xl rounded-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
