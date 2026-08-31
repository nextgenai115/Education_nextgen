import type { Metadata } from "next";
import "./globals.css";

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
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-bg text-text">{children}</body>
    </html>
  );
}
