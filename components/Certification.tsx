import { certification } from "@/lib/content";

export default function Certification() {
  return (
    <section id="certification" className="border-b border-white/[0.06] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <p
              className="text-xs font-data font-semibold tracking-widest uppercase px-4 py-2 rounded-full border"
              style={{ background: "rgba(167,139,250,0.1)", borderColor: "rgba(167,139,250,0.3)", color: "#c4b5fd" }}
            >
              Completion &amp; certification
            </p>
          </div>
          <h2 className="mt-5 font-display font-bold text-3xl md:text-[2.5rem] leading-[1.1] tracking-[-0.02em]">
            What you{" "}
            <span className="gradient-text">earn</span>{" "}
            after all 5 modules
          </h2>
          <p className="mt-4 text-text-dim font-medium leading-relaxed">{certification.intro}</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8">
          {/* Details card */}
          <div
            className="rounded-2xl p-7 md:p-9"
            style={{
              background: "linear-gradient(135deg, rgba(15,20,31,0.95) 0%, rgba(20,15,40,0.9) 100%)",
              border: "1px solid rgba(167,139,250,0.2)",
              boxShadow: "0 0 40px rgba(167,139,250,0.06)",
            }}
          >
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {certification.details.map((d) => (
                <div
                  key={d.label}
                  className="pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <dt className="text-xs font-semibold text-text-faint uppercase tracking-wide">{d.label}</dt>
                  <dd className="mt-1.5 text-sm font-bold text-white">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Eligibility card */}
          <div
            className="rounded-2xl p-7 md:p-9"
            style={{
              background: "linear-gradient(135deg, rgba(52,211,153,0.05) 0%, rgba(15,20,31,0.95) 100%)",
              border: "1px solid rgba(52,211,153,0.2)",
              boxShadow: "0 0 40px rgba(52,211,153,0.05)",
            }}
          >
            <h3 className="font-display font-bold text-base text-white mb-6">
              Eligibility criteria
            </h3>
            <ul className="space-y-3.5">
              {certification.eligibility.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.3)" }}
                  >
                    <span className="material-symbols-rounded select-none" style={{ color: "#34d399", fontSize: "13px" }}>
                      check
                    </span>
                  </span>
                  <span className="text-sm font-medium text-text-dim leading-relaxed">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
