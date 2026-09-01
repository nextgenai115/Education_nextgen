import { brand } from "@/lib/content";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.4), rgba(96,165,250,0.4), transparent)" }} />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="container-px mx-auto max-w-7xl py-16 md:py-20 relative">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3">
              <div
                className="h-9 w-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #a78bfa, #60a5fa)" }}
              >
                <span className="font-data font-bold text-xs text-white">AI</span>
              </div>
              <span className="font-display font-bold text-[16px] text-white">
                {brand.name}
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm font-medium text-text-dim leading-relaxed">
              An AI-focused practical learning program — from AI fundamentals to building and
              deploying real, live AI systems.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-2.5 text-sm font-medium text-text-dim hover:text-white transition-colors group"
              >
                <Mail size={15} className="text-text-faint group-hover:text-violet transition-colors" />
                {brand.email}
              </a>
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-2.5 text-sm font-medium text-text-dim hover:text-white transition-colors group"
              >
                <Phone size={15} className="text-text-faint group-hover:text-violet transition-colors" />
                {brand.phone}
              </a>
              {brand.offices.map((o) => (
                <div key={o} className="flex items-start gap-2.5 text-sm font-medium text-text-dim">
                  <MapPin size={15} className="text-text-faint mt-0.5 shrink-0" />
                  {o}
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {brand.registrations.map((r) => (
                <span
                  key={r.label}
                  className="text-[11px] font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(167,139,250,0.08)",
                    border: "1px solid rgba(167,139,250,0.2)",
                    color: "#c4b5fd",
                  }}
                >
                  ✓ {r.label}
                </span>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-data font-bold text-text-faint uppercase tracking-widest mb-5">Program</p>
              <ul className="space-y-3 text-sm font-medium text-text-dim">
                <li><a href="#program" className="hover:text-white transition-colors">Modules</a></li>
                <li><a href="#opportunity" className="hover:text-white transition-colors">Income opportunities</a></li>
                <li><a href="#certification" className="hover:text-white transition-colors">Certification</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-data font-bold text-text-faint uppercase tracking-widest mb-5">Registrations</p>
              <ul className="space-y-3.5 text-sm font-medium text-text-dim">
                {brand.registrations.map((r) => (
                  <li key={r.label}>
                    <span className="block text-text-dim">{r.label}</span>
                    <span className="font-data text-xs font-bold text-text-faint">{r.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs font-medium text-text-faint">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <a
            href={`https://${brand.site}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold transition-colors"
            style={{ color: "#a78bfa" }}
          >
            {brand.site}
          </a>
        </div>
      </div>
    </footer>
  );
}
