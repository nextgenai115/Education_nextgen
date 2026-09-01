import { brand, pricing, heroStats } from "@/lib/content";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/[0.06]">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-bg/75" />
      </div>

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute -top-40 right-[-5%] h-[600px] w-[600px] rounded-full animate-pulse-glow" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)" }} />
        <div className="absolute top-60 left-[-5%] h-[500px] w-[500px] rounded-full animate-pulse-glow" style={{ background: "radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)", animationDelay: "1.5s" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[800px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="container-px mx-auto max-w-7xl relative pt-16 md:pt-24 pb-20 md:pb-32 z-20">
        {/* Badge */}
        <div className="flex flex-col items-start gap-2 mb-10 animate-rise">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border"
            style={{
              background: "rgba(167,139,250,0.1)",
              borderColor: "rgba(167,139,250,0.3)",
              color: "#c4b5fd",
            }}
          >
            <Sparkles size={11} />
            NexGen AI Education Partner · Omkar AI Innovation
          </span>
          <span className="text-xs font-semibold text-text-faint">Five Modules. One Complete Transformation.</span>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start">
          <div>
            <h1
              className="font-display font-bold text-[2.8rem] leading-[1.04] sm:text-6xl lg:text-[4.5rem] tracking-[-0.03em] animate-rise"
              style={{ animationDelay: "80ms" }}
            >
              <span className="text-white">Get 20% Off</span>
              <br />
              <span className="gradient-text">AI Revolution.</span>
            </h1>

            <p
              className="mt-7 max-w-lg text-base md:text-lg text-text-dim font-medium leading-relaxed animate-rise"
              style={{ animationDelay: "160ms" }}
            >
              {brand.tagline} — {brand.subline}. Five progressive modules take you from
              understanding language models to deploying live, autonomous AI products.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-rise"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="#enrollment-form"
                className="inline-flex items-center gap-2 font-bold text-sm rounded-full pl-6 pr-5 py-3.5 transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                  color: "#fff",
                  boxShadow: "0 0 30px rgba(167,139,250,0.4)",
                }}
              >
                Get 20% Off Now
                <ArrowUpRight size={16} />
              </a>
              <a
                href={brand.courseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-text-dim hover:text-white underline decoration-white/20 underline-offset-4 transition-colors"
              >
                Explore on {brand.site}
              </a>
            </div>

            {/* Stats */}
            <dl
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 max-w-xl border-t pt-8 animate-rise"
              style={{ borderColor: "rgba(255,255,255,0.08)", animationDelay: "320ms" }}
            >
              {heroStats.map((s) => (
                <div key={s.label}>
                  <dt className="font-data text-2xl md:text-3xl font-bold gradient-text">{s.value}</dt>
                  <dd className="mt-1.5 text-xs font-semibold text-text-faint leading-snug">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Pricing card */}
          <div className="animate-rise" style={{ animationDelay: "200ms" }}>
            <div
              className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(15,20,31,0.95) 0%, rgba(20,15,40,0.9) 100%)",
                border: "1px solid rgba(167,139,250,0.25)",
                boxShadow: "0 0 60px rgba(167,139,250,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Corner glow */}
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)" }} />

              <p className="text-xs font-data font-bold uppercase tracking-widest" style={{ color: "#ffc564" }}>
                ✦ Limited time special offer
              </p>

              <div className="mt-5">
                <p className="text-xs font-semibold text-text-faint">Website price</p>
                <p className="font-data text-lg font-bold text-text-faint line-through decoration-1 mt-0.5">
                  ₹{pricing.websitePrice}/-
                </p>
              </div>

              <div className="mt-3">
                <p className="text-xs font-semibold text-text-dim">NexGenAI Automation price</p>
                <p className="font-display font-bold text-5xl text-white mt-1">
                  ₹{pricing.partnerPrice}
                  <span className="text-xl font-semibold text-text-dim">/-</span>
                </p>
              </div>

              <a
                id="enroll"
                href="#enrollment-form"
                className="mt-7 flex items-center justify-center gap-2 w-full font-bold text-sm rounded-xl py-3.5 transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(167,139,250,0.35)",
                }}
              >
                Enroll Now — Save 20%
              </a>

              <p className="mt-4 text-[11px] font-medium leading-relaxed text-text-faint">
                *{pricing.note}
              </p>

              <div className="mt-6 pt-5 space-y-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                {brand.registrations.map((r) => (
                  <div key={r.label} className="flex items-center justify-between gap-3 text-xs">
                    <span className="font-medium text-text-faint">{r.label}</span>
                    <span
                      className="font-data font-bold shrink-0 px-2 py-0.5 rounded-md"
                      style={{ background: "rgba(167,139,250,0.1)", color: "#c4b5fd", border: "1px solid rgba(167,139,250,0.2)" }}
                    >
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
