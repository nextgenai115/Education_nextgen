import { brand } from "@/lib/content";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-7 w-7 rounded-[6px] bg-violet flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-bg" />
              </span>
              <span className="font-display font-semibold text-[15px] text-text">
                {brand.name}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-text-faint leading-relaxed">
              An AI-focused practical learning program — from AI fundamentals to building and
              deploying real, live AI systems.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-2.5 text-sm text-text-dim hover:text-text transition-colors"
              >
                <Mail size={15} className="text-text-faint" />
                {brand.email}
              </a>
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-2.5 text-sm text-text-dim hover:text-text transition-colors"
              >
                <Phone size={15} className="text-text-faint" />
                {brand.phone}
              </a>
              {brand.offices.map((o) => (
                <div key={o} className="flex items-start gap-2.5 text-sm text-text-faint">
                  <MapPin size={15} className="text-text-faint mt-0.5 shrink-0" />
                  {o}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-data text-text-faint mb-4">Program</p>
              <ul className="space-y-2.5 text-sm text-text-dim">
                <li><a href="#program" className="hover:text-text transition-colors">Modules</a></li>
                <li><a href="#opportunity" className="hover:text-text transition-colors">Income opportunities</a></li>
                <li><a href="#certification" className="hover:text-text transition-colors">Certification</a></li>
                <li><a href="#faq" className="hover:text-text transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-data text-text-faint mb-4">Registrations</p>
              <ul className="space-y-2.5 text-sm text-text-dim">
                {brand.registrations.map((r) => (
                  <li key={r.label}>
                    <span className="block">{r.label}</span>
                    <span className="font-data text-xs text-text-faint">{r.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-text-faint">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-faint">{brand.site}</p>
        </div>
      </div>
    </footer>
  );
}
