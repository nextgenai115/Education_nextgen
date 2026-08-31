import { brand, pricing, heroStats } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-violet/10 blur-[120px]" />
        <div className="absolute top-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-amber/[0.06] blur-[110px]" />
        <div className="absolute inset-0 grid-line opacity-[0.03]" />
      </div>

      <div className="container-px mx-auto max-w-7xl relative pt-14 md:pt-20 pb-16 md:pb-24">
        <div className="flex flex-wrap items-center gap-2 mb-8 animate-rise">
          <span className="text-xs font-data text-violet bg-violet/10 border border-violet/25 rounded-full px-3 py-1">
            Partner 2 · Omkar AI Innovation
          </span>
          <span className="text-xs text-text-faint">Five Modules. One Complete Transformation.</span>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
          <div>
            <h1
              className="font-display font-semibold text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] tracking-[-0.02em] text-text animate-rise"
              style={{ animationDelay: "80ms" }}
            >
              Get 20% Off
              <br />
              AI Revolution.
            </h1>

            <p
              className="mt-6 max-w-lg text-base md:text-lg text-text-dim leading-relaxed animate-rise"
              style={{ animationDelay: "160ms" }}
            >
              {brand.tagline} — {brand.subline}. Five progressive modules take you from
              understanding language models to deploying live, autonomous AI products.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-4 animate-rise"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="#enrollment-form"
                className="inline-flex items-center gap-2 bg-violet text-bg font-medium text-sm rounded-full pl-5 pr-4 py-3 hover:bg-[#d0d0d0] transition-colors"
              >
                Get 20% Off Now
                <ArrowUpRight size={16} />
              </a>
              <a
                href={brand.courseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-dim hover:text-text underline decoration-line underline-offset-4 transition-colors"
              >
                Explore on {brand.site}
              </a>
            </div>

            <dl
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 max-w-xl border-t border-line pt-8 animate-rise"
              style={{ animationDelay: "320ms" }}
            >
              {heroStats.map((s) => (
                <div key={s.label}>
                  <dt className="font-data text-2xl md:text-3xl text-text">{s.value}</dt>
                  <dd className="mt-1 text-xs text-text-faint leading-snug">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Pricing panel */}
          <div className="animate-rise" style={{ animationDelay: "200ms" }}>
            <div className="rounded-2xl border border-line bg-bg-panel p-6 md:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-violet/10 blur-[70px] rounded-full" />
              <p className="text-xs font-data uppercase tracking-wide text-amber">
                Limited time special offer
              </p>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-xs text-text-faint">Website price</p>
                  <p className="font-data text-lg text-text-faint line-through decoration-1">
                    ₹{pricing.websitePrice}/-
                  </p>
                </div>
              </div>

              <div className="mt-1">
                <p className="text-xs text-text-faint">Earnify Empire price</p>
                <p className="font-display font-semibold text-5xl text-text mt-1">
                  ₹{pricing.partnerPrice}
                  <span className="text-lg text-text-faint">/-</span>
                </p>
              </div>

              <a
                id="enroll"
                href="#enrollment-form"
                className="mt-6 flex items-center justify-center gap-2 w-full bg-text text-bg font-medium text-sm rounded-xl py-3 hover:bg-violet transition-colors"
              >
                Get Promo Code
              </a>

              <p className="mt-4 text-[11px] leading-relaxed text-text-faint">
                *{pricing.note} You can also connect directly via the Omkar AI Innovation
                website if you wish.
              </p>

              <div className="mt-6 pt-6 border-t border-line space-y-2.5">
                {brand.registrations.map((r) => (
                  <div key={r.label} className="flex items-center justify-between gap-3 text-xs">
                    <span className="text-text-faint">{r.label}</span>
                    <span className="font-data text-text-dim shrink-0">{r.value}</span>
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
