import { certification } from "@/lib/content";
import { Check } from "lucide-react";

export default function Certification() {
  return (
    <section id="certification" className="border-b border-line">
      <div className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <p className="text-xs font-data text-violet font-semibold tracking-wide uppercase px-4 py-2 bg-violet/10 border border-violet/30 rounded-[15px]">Completion &amp; certification</p>
          </div>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.01em]">
            What you earn after all 5 modules
          </h2>
          <p className="mt-4 text-text-dim leading-relaxed">{certification.intro}</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8">
          <div className="rounded-2xl border border-line bg-bg-panel p-7 md:p-9">
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {certification.details.map((d) => (
                <div key={d.label} className="border-t border-line pt-4">
                  <dt className="text-xs text-text-faint">{d.label}</dt>
                  <dd className="mt-1.5 text-sm text-text font-medium">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-line p-7 md:p-9">
            <h3 className="font-display font-medium text-base text-text">
              Eligibility criteria
            </h3>
            <ul className="mt-6 space-y-4">
              {certification.eligibility.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-green/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-green" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-text-dim leading-relaxed">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
