"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { brand } from "@/lib/content";

const quickLinks = [
  { label: "Home",          href: "https://www.nextgenaiautomation.net/" },
  { label: "Services",      href: "https://www.nextgenaiautomation.net/services" },
  { label: "Case Studies",  href: "https://www.nextgenaiautomation.net/case-studies" },
  { label: "Pricing",       href: "https://www.nextgenaiautomation.net/pricing" },
  { label: "About Us",      href: "https://www.nextgenaiautomation.net/about" },
  { label: "Portfolio",     href: "https://www.nextgenaiautomation.net/portfolio" },
  { label: "Contact",       href: "https://www.nextgenaiautomation.net/contact" },
  { label: "Blog",          href: "https://blog.nextgenaiautomation.net" },
];

const serviceLinks = [
  { label: "AI Agents",               href: "https://www.nextgenaiautomation.net/services" },
  { label: "Manufacturing Automation", href: "https://www.nextgenaiautomation.net/services" },
  { label: "Workflow Automation",      href: "https://www.nextgenaiautomation.net/services" },
  { label: "CRM Automation",           href: "https://www.nextgenaiautomation.net/services" },
  { label: "Website Development",      href: "https://www.nextgenaiautomation.net/services" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0e1a] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/nextgen-ai-logo.37c8a695.png"
                alt="NextGen AI Automation"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display font-bold text-[16px] text-white">
                NextGen AI Automation
              </span>
            </div>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Empowering businesses in India and beyond with cutting-edge AI automation
              solutions. Scale faster, save time, and reduce costs.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="text-slate-500 transition-colors hover:text-blue-400">𝕏</a>
              <a href="#" aria-label="LinkedIn" className="text-slate-500 transition-colors hover:text-blue-400">in</a>
              <a href="#" aria-label="GitHub" className="text-slate-500 transition-colors hover:text-blue-400">gh</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-blue-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">Services</h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-blue-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-blue-500" strokeWidth={1.75} />
                Bangalore, Karnataka, India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-blue-500" strokeWidth={1.75} />
                <a href="tel:+918310897655" className="hover:text-blue-400">
                  +91 8310897655
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-blue-500" strokeWidth={1.75} />
                <a href="mailto:info@nextgenaiautomation.net" className="hover:text-blue-400">
                  info@nextgenaiautomation.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 NextGen AI Automation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.nextgenaiautomation.net/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="https://www.nextgenaiautomation.net/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Floating action buttons */}
      <a
        href="https://wa.me/918310897655"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2} />
      </a>
      <button
        type="button"
        aria-label="Open chat"
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2} />
      </button>
    </footer>
  );
}
