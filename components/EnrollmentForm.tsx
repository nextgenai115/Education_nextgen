"use client";
import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { trackFormSubmission } from "@/lib/ga4";
import { brand } from "@/lib/content";
export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit enrollment");
      }
      setStatus("success");
      setFormData({ name: "", email: "", phone: "" });
      trackFormSubmission("enrollment_form", "success");
      // Redirect to payment page after 3 seconds
      setTimeout(() => {
        window.location.href = "https://pages.razorpay.com/pl_TXba8xVI1KE2ig/view";
      }, 2000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      trackFormSubmission("enrollment_form", "error");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section id="enrollment-form" className="border-b border-line relative overflow-hidden" style={{ background: "transparent" }}>
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/enrol.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(5,8,12,0.55)" }} />
      </div>
      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[720px] bg-violet/[0.08] blur-[140px] rounded-full" />
      </div>
      <div className="container-px mx-auto max-w-7xl py-20 md:py-28 relative z-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm md:text-base font-semibold text-text-dim italic mb-4">
              &ldquo;Don&rsquo;t just witness the AI Revolution — Lead It.&rdquo;
            </p>
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-[-0.01em]">
              Claim Your 20% Discount Today
            </h2>
            <p className="mt-4 text-text-dim font-medium max-w-xl mx-auto">
              Complete the form below to receive your exclusive promo code for 20% off our comprehensive AI program via email.
            </p>
          </div>
          <div
            className="relative overflow-hidden rounded-2xl p-6 md:p-8"
            style={{
              background: "linear-gradient(135deg, #0d1117 0%, #0f0a2e 50%, #0a1535 100%)",
              border: "1px solid rgba(167,139,250,0.3)",
              boxShadow: "0 0 60px rgba(139,92,246,0.15), 0 0 120px rgba(96,165,250,0.06), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl" style={{ background: "linear-gradient(90deg, #a78bfa, #60a5fa, #34d399, #fbbf24)" }} />
            {/* Corner glows */}
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)" }} />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)" }} />
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green/20 mb-4">
                  <CheckCircle className="w-8 h-8 text-green" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">Request Submitted Successfully!</h3>
                <p className="text-text-dim font-medium mb-4">
                  Your exclusive 20% discount promo code will be sent to your email address shortly.
                </p>
                <p className="text-sm text-violet">
                  Redirecting to payment page...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-text mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-text placeholder:text-text-faint focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(167,139,250,0.2)" }}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-text mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-text placeholder:text-text-faint focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(167,139,250,0.2)" }}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-text mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-text placeholder:text-text-faint focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(167,139,250,0.2)" }}
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Promo Code + Pricing */}
                <div className="px-[15%]">
                <div
                  className="rounded-2xl p-5 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #0f0a2e 0%, #1e0a3a 40%, #0a1535 100%)",
                    border: "1px solid rgba(167,139,250,0.5)",
                    boxShadow: "0 0 40px rgba(139,92,246,0.2), 0 0 80px rgba(96,165,250,0.08), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Corner glow */}
                  <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.3) 0%, transparent 70%)" }} />
                  <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(96,165,250,0.2) 0%, transparent 70%)" }} />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl" style={{ background: "linear-gradient(90deg, #a78bfa, #60a5fa, #34d399)" }} />

                  {/* Pricing row */}
                  <div className="flex items-center justify-between mb-4 pb-4 relative" style={{ borderBottom: "1px solid rgba(167,139,250,0.15)" }}>
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-data font-bold uppercase tracking-widest mb-1" style={{ color: "#6b7280" }}>Was</span>
                      <span className="font-data font-bold text-xl line-through" style={{ color: "#4b5563" }}>₹4,999</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <span
                        className="text-[11px] font-bold px-3 py-0.5 rounded-full animate-pulse"
                        style={{ background: "linear-gradient(90deg, rgba(52,211,153,0.2), rgba(96,165,250,0.2))", color: "#34d399", border: "1px solid rgba(52,211,153,0.4)" }}
                      >
                        🎉 SAVE 20%
                      </span>
                      <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>▼</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-data font-bold uppercase tracking-widest mb-1" style={{ color: "#34d399" }}>Now</span>
                      <span
                        className="font-data font-bold text-2xl"
                        style={{
                          background: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #34d399 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        ₹3,999
                      </span>
                    </div>
                  </div>

                  {/* Promo code */}
                  <div className="relative">
                    <label className="block text-[10px] font-data font-bold uppercase tracking-widest mb-2 text-center" style={{ color: "rgba(167,139,250,0.8)" }}>
                      ✦ Promo Code Applied ✦
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        readOnly
                        value="NEXTGEN032"
                        className="flex-1 px-4 py-2.5 rounded-xl font-data font-bold text-center tracking-[0.3em] text-base cursor-default select-all"
                        style={{
                          background: "linear-gradient(135deg, rgba(167,139,250,0.12), rgba(96,165,250,0.08))",
                          border: "1px solid rgba(167,139,250,0.4)",
                          color: "#e9d5ff",
                          outline: "none",
                          letterSpacing: "0.2em",
                        }}
                      />
                      <div
                        className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                        style={{ background: "linear-gradient(135deg, rgba(52,211,153,0.2), rgba(96,165,250,0.15))", border: "1px solid rgba(52,211,153,0.4)" }}
                      >
                        <span className="material-symbols-rounded select-none" style={{ color: "#34d399", fontSize: "20px" }}>check_circle</span>
                      </div>
                    </div>
                    <p className="text-[11px] font-semibold mt-2 text-center" style={{ color: "#c4b5fd" }}>
                      Exclusive pricing via NextGen AI Automation
                    </p>
                  </div>
                </div>
                </div>
                {errorMessage && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 font-bold text-sm rounded-xl px-6 py-4 transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                    color: "#fff",
                    boxShadow: "0 4px 20px rgba(167,139,250,0.35)",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enroll Now
                    </>
                  )}
                </button>
                <p className="text-xs font-medium text-text-dim text-center">
                  By submitting this form, you agree to our terms and privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
