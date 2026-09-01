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

      // Redirect to course page after 3 seconds
      setTimeout(() => {
        window.location.href = brand.courseUrl;
      }, 3000);
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
    <section id="enrollment-form" className="border-b border-line relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" />
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

          <div className="bg-bg-panel border border-line rounded-2xl p-6 md:p-8 shadow-2xl">
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
                  Redirecting to course page...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-bg border border-line rounded-lg text-text placeholder:text-text-faint focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 bg-bg border border-line rounded-lg text-text placeholder:text-text-faint focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
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
                    className="w-full px-4 py-3 bg-bg border border-line rounded-lg text-text placeholder:text-text-faint focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {errorMessage && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-violet text-bg font-medium text-sm rounded-lg px-6 py-4 hover:bg-[#d0d0d0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Request Promo Code
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
