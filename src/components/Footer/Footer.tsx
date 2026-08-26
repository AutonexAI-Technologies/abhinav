import Link from "next/link";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

const LINKS = {
  Training: [
    { label: "Resistance Training", href: "/services" },
    { label: "Personal Training", href: "/services" },
    { label: "Hybrid Programming", href: "/services" },
    { label: "Cardio & Running", href: "/services" },
    { label: "Online Coaching", href: "/services" },
  ],
  Nutrition: [
    { label: "Custom Diet Plans", href: "/diet-plans" },
    { label: "Meal & Workout Plans", href: "/diet-plans" },
    { label: "Macro Calculator", href: "/tools/macro-calculator" },
    { label: "Calorie Calculator", href: "/tools/calorie-calculator" },
    { label: "1RM Calculator", href: "/tools/one-rep-max" },
  ],
  Company: [
    { label: "About Abhinav", href: "/about" },
    { label: "Transformations", href: "/transformations" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book a Call", href: "/book" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#07080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}>

      {/* ── Mobile responsive style block ── */}
      <style>{`
        .footer-cta-strip {
          background: linear-gradient(135deg, rgba(0,200,240,0.08) 0%, rgba(0,150,180,0.04) 100%);
          border-bottom: 1px solid rgba(0,200,240,0.08);
          padding: 40px 0;
        }
        .footer-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 64px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .footer-bottom-bar {
          padding: 28px 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
        }
        .footer-bottom-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }
        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.9rem 2rem;
          border-radius: 999px;
          background: #00C8F0;
          color: #09090b;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.875rem;
          letter-spacing: 0.02em;
          text-decoration: none;
          flex-shrink: 0;
          box-shadow: 0 4px 24px rgba(0,200,240,0.28);
          transition: background 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .footer-cta-btn:hover { background: #33d4f5; transform: translateY(-2px); }

        @media (max-width: 900px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 600px) {
          .footer-cta-strip { padding: 32px 0; }
          .footer-cta-inner { flex-direction: column; align-items: flex-start; }
          .footer-cta-btn { width: 100%; justify-content: center; }
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            padding-bottom: 48px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 24px 0 36px;
          }
          .footer-bottom-links {
            gap: 16px;
          }
        }
        @media (max-width: 400px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Top CTA strip */}
      <div className="footer-cta-strip">
        <div className="container footer-cta-inner">
          <div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 400, color: "#f5f0eb", letterSpacing: "0.04em", marginBottom: 6 }}>
              Ready to Transform?
            </h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              Fill the intake form — reviewed personally by Abhinav within 24 hours.
            </p>
          </div>
          <Link href="/book" className="footer-cta-btn">
            Start Your Journey <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container" style={{ paddingTop: 64 }}>
        <div className="footer-main-grid">

          {/* Brand column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#00C8F0,#005f77)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#07080f", flexShrink: 0 }}>
                A
              </div>
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.12em", color: "#f5f0eb" }}>
                  ABHINAV <span style={{ color: "#00C8F0" }}>LIFTS</span>
                </div>
                <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.28)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 1 }}>
                  Online Fitness Coach
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 280 }}>
              Helping people build stronger bodies, disciplined minds, and meaningful lives.
              Sharing the journey through fitness, running & entrepreneurship.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="https://www.instagram.com/abhinav_.lifts/" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                @abhinav_.lifts
              </a>
              <a href="mailto:abhinavlifts05@gmail.com"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
                <Mail size={14} strokeWidth={1.5} />
                abhinavlifts05@gmail.com
              </a>
              <a href="https://wa.me/918096407555" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
                <MessageCircle size={14} strokeWidth={1.5} />
                WhatsApp (Mon–Sat)
              </a>
            </div>

            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.22)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Hyderabad, Telangana · India
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, items]) => (
            <div key={section}>
              <h4 style={{ fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(255,255,255,0.22)", marginBottom: 20 }}>
                {section}
              </h4>
              <nav style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {items.map((l) => (
                  <Link key={l.href + l.label} href={l.href}
                    style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.42)", textDecoration: "none", transition: "color 0.2s" }}>
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.28)" }}>
            © {new Date().getFullYear()} Abhinav Lifts. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            {[{ href:"/privacy", label:"Privacy Policy" },{ href:"/terms", label:"Terms & Conditions" },{ href:"/tools", label:"Free Tools" }].map(l => (
              <Link key={l.href} href={l.href} style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.28)", textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.22)" }}>
            Designed & Developed by{" "}
            <a href="https://www.autonexai.org/" target="_blank" rel="noopener noreferrer"
              style={{ color: "#00C8F0", fontWeight: 700, textDecoration: "none", fontSize: "0.85rem" }}>
              Autonex AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
