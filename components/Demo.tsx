import { demo } from "@/lib/content";
import { Bot, Share2 } from "lucide-react";

const groups = [
  { ...demo.repetitive, icon: Bot },
  { ...demo.social, icon: Share2 },
];

export default function Demo() {
  return (
    <section className="border-b border-line relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-bg/90 backdrop-blur-sm" />
      </div>

      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-1/3 right-0 h-[500px] w-[500px] bg-violet/[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-1/3 left-0 h-[400px] w-[400px] bg-amber/[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 relative z-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <p className="text-xs font-data text-violet font-semibold tracking-wide uppercase px-4 py-2 bg-violet/10 border border-violet/30 rounded-[15px]">See what you&rsquo;ll build</p>
          </div>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.01em]">
            AI agents &amp; automation demo
          </h2>
        </div>

        <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className="relative overflow-hidden rounded-xl border border-line p-6 md:p-8 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet/5"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(238, 238, 238, 0.03) 0%, 
                    rgba(15, 20, 31, 0.6) 50%, 
                    rgba(13, 17, 23, 0.8) 100%)`
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg border border-violet/30 bg-violet/5">
                    <Icon size={24} className="text-violet" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-text">{g.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {g.items.map((item, idx) => (
                    <li
                      key={item}
                      className="flex items-center justify-between py-3 px-4 rounded-lg bg-bg-panel/50 border border-line/50 hover:border-violet/30 transition-all"
                    >
                      <span className="text-sm md:text-base text-text-dim">{item}</span>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet/10 border border-violet/30">
                        <span className="font-data text-xs text-violet font-semibold">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
