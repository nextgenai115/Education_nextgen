"use client";

import { brand } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
import { trackOutboundLink } from "@/lib/ga4";

export default function CTA() {
  const handleExploreClick = () => {
    trackOutboundLink(brand.courseUrl, "Explore our website");
  };

  return (
    <section className="border-b border-white/[0.06] relative overflow-hidden">
      {/* Big center glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-px mx-auto max-w-7xl py-24 md:py-32 text-center relative">
        <p
          className="text-sm md:text-base font-semibold italic mb-4"
          style={{ color: "#c4b5fd" }}
        >
          &ldquo;Don&rsquo;t just witness the AI Revolution — Lead It.&rdquo;
        </p>

        <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-[-0.02em] max-w-3xl mx-auto leading-[1.08]">
          Ready to lead the{" "}
          <span className="gradient-text">AI revolution?</span>
        </h2>

        <p className="mt-6 text-text-dim font-medium max-w-xl mx-auto leading-relaxed">
          Join thousands learning to build, automate, and deploy real AI systems — from zero to production.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://earnifyempire.in/contact?plan=Partner+2+%E2%80%94+Master+the+AI+Revolution"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-sm rounded-full pl-7 pr-6 py-4 transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
              color: "#fff",
              boxShadow: "0 0 40px rgba(167,139,250,0.4)",
            }}
          >
            Enroll now — Save 20%
            <ArrowUpRight size={16} />
          </a>
          <a
            href={brand.courseUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleExploreClick}
            className="text-sm font-semibold text-text-dim hover:text-white underline decoration-white/20 underline-offset-4 transition-colors"
          >
            Explore our website
          </a>
        </div>
      </div>
    </section>
  );
}
