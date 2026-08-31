import { brand } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="border-b border-line relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[720px] bg-violet/[0.08] blur-[140px] rounded-full" />
      </div>
      <div className="container-px mx-auto max-w-7xl py-20 md:py-28 text-center relative">
        <p className="text-sm md:text-base text-text-dim italic">
          &ldquo;Don&rsquo;t just witness the AI Revolution — Lead It.&rdquo;
        </p>
        <h2 className="mt-5 font-display font-semibold text-3xl md:text-5xl tracking-[-0.01em] max-w-2xl mx-auto">
          Ready to lead the AI revolution?
        </h2>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://earnifyempire.in/contact?plan=Partner+2+%E2%80%94+Master+the+AI+Revolution"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-violet text-bg font-medium text-sm rounded-full pl-6 pr-5 py-3.5 hover:bg-[#93a1ff] transition-colors"
          >
            Enroll now
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
      </div>
    </section>
  );
}
