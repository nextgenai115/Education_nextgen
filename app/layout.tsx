import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Unlocked — Master the AI Revolution | Omkar AI Innovation",
  description:
    "Five modules, one complete transformation: AI Foundation, GenAI Toolkit, AI Automation, Chatbots & Agents, Live Autonomous Systems. 20+ hands-on projects, no coding needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/nextgen-ai-logo.37c8a695.png" type="image/png" />
        <link rel="apple-touch-icon" href="/nextgen-ai-logo.37c8a695.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0"
          rel="stylesheet"
        />
        {ga4MeasurementId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${ga4MeasurementId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased bg-bg text-text">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
