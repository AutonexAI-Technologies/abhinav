import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat/WhatsAppFloat";
import IntakeFormPopup from "@/components/IntakeFormPopup/IntakeFormPopup";

export const metadata: Metadata = {
  title: { default: "Abhinav Lifts | Online Fitness Coach & Hybrid Athlete", template: "%s | Abhinav Lifts" },
  description: "Abhinav is an online fitness coach, hybrid athlete, and content creator. Custom training, nutrition plans, and 1-on-1 coaching — 100% online.",
  keywords: ["Abhinav Lifts","online fitness coach India","hybrid athlete","online personal trainer","custom diet plan","fitness transformation"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {/* Hero section is full-screen and handles its own top padding via hero-h min-height */}
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <IntakeFormPopup />
      </body>
    </html>
  );
}
