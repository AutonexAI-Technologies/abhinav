import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat/WhatsAppFloat";
import IntakeFormPopup from "@/components/IntakeFormPopup/IntakeFormPopup";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Inter:wght@300;400;500;600;700&family=Marcellus&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* ─── GLOBAL RESPONSIVE OVERRIDES ─── */}
        <style>{`
          /* Prevent any horizontal scroll on all devices */
          html, body { overflow-x: hidden; max-width: 100vw; }

          /* ══ TABLET (≤ 1024px) ══ */
          @media (max-width: 1024px) {
            /* Services / tools alternating 1fr 2fr grids → stack */
            [style*="gridTemplateColumns: \\"1fr 2fr\\""],
            [style*="gridTemplateColumns: \\"2fr 1fr\\""] {
              grid-template-columns: 1fr !important;
              gap: 28px !important;
            }
            /* Reduce large padding on cards */
            [style*="padding: \\"44px 48px\\""] {
              padding: 32px 28px !important;
            }
          }

          /* ══ MOBILE (≤ 768px) ══ */
          @media (max-width: 768px) {
            /* All 2-col grids → single col */
            [style*="repeat(2,1fr)"],
            [style*="repeat(2, 1fr)"] {
              grid-template-columns: 1fr !important;
            }
            /* All 3-col grids → single col */
            [style*="repeat(3,1fr)"],
            [style*="repeat(3, 1fr)"] {
              grid-template-columns: 1fr !important;
            }
            /* All 4-col grids → 2 cols */
            [style*="repeat(4,1fr)"],
            [style*="repeat(4, 1fr)"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            /* Section padding reduction */
            .section { padding-block: 60px !important; }
            /* Typography scale for mobile */
            .d-hero { font-size: clamp(2.2rem, 8vw, 3.2rem) !important; }
            .d-xl   { font-size: clamp(1.8rem, 6vw, 2.4rem) !important; }
            .d-lg   { font-size: clamp(1.4rem, 5vw, 2rem) !important; }
            /* Ensure buttons wrap & stretch */
            .btn-lg { width: 100% !important; justify-content: center !important; }
            /* CTA flex rows → column */
            [style*="flexWrap: \\"wrap\\""][style*="justifyContent: \\"center\\""] {
              flex-direction: column;
              align-items: stretch;
            }
          }

          /* ══ SMALL MOBILE (≤ 480px) ══ */
          @media (max-width: 480px) {
            /* 4-col → 1 col on small screens */
            [style*="repeat(4,1fr)"],
            [style*="repeat(4, 1fr)"] {
              grid-template-columns: 1fr !important;
            }
            /* Card padding reduction */
            [style*="padding: \\"40px 36px\\""],
            [style*="padding: \\"32px 24px\\""] {
              padding: 24px 16px !important;
            }
            .d-hero { font-size: clamp(2rem, 7.5vw, 2.8rem) !important; }
          }

          /* ══ VERY SMALL (≤ 360px — old Android/iOS) ══ */
          @media (max-width: 360px) {
            .container { padding-inline: 12px !important; }
            .d-hero { font-size: 1.9rem !important; }
          }

          /* ══ LARGE / TV (≥ 1920px) ══ */
          @media (min-width: 1920px) {
            .container { max-width: 1600px !important; }
          }
          @media (min-width: 2560px) {
            .container { max-width: 2000px !important; }
            body { font-size: 18px; }
          }

          /* ══ iOS INPUT ZOOM FIX ══ */
          @media (max-width: 768px) {
            input, select, textarea { font-size: 16px !important; }
          }

          /* ══ CALC GRID (two-col input|results) ══ */
          @media (max-width: 900px) {
            .calc-two-col { grid-template-columns: 1fr !important; }
          }

          /* ══ SERVICES PAGE: force alternating grid to stack ══ */
          @media (max-width: 1024px) {
            .services-card-grid { grid-template-columns: 1fr !important; }
          }

          /* ══ SAFE AREA for notched phones (iPhone X+) ══ */
          @supports (padding: env(safe-area-inset-bottom)) {
            body {
              padding-bottom: env(safe-area-inset-bottom);
            }
          }
        `}</style>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <IntakeFormPopup />
      </body>
    </html>
  );
}

