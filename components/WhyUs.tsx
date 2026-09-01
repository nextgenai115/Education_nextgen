import { whyUs } from "@/lib/content";
import {
  Users,
  Rocket,
  Network,
  BadgeCheck,
  TrendingUp,
  Globe2,
} from "lucide-react";

const icons = [Users, Rocket, Network, BadgeCheck, TrendingUp, Globe2];

export default function WhyUs() {
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

      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 relative z-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <p className="text-xs font-data text-violet font-semibold tracking-wide uppercase px-4 py-2 bg-violet/10 border border-violet/30 rounded-[15px]">Why us</p>
          </div>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.01em]">
            Why join Omkar AI Innovation?
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {whyUs.map((w, i) => {
            const Icon = icons[i];
            return (
              <div
                key={w.title}
                className="rounded-xl border border-line bg-bg p-6 md:p-7"
              >
                <Icon size={20} className="text-violet" strokeWidth={1.5} />
                <h3 className="mt-4 font-display font-medium text-[15px] text-text">
                  {w.title}
                </h3>
                <p className="mt-2 text-[13px] text-text-faint leading-relaxed">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
