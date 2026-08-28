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
      <style>{`
        /* ── Footer CTA strip ── */
        .ftr-cta {
          background: linear-gradient(135deg, rgba(0,200,240,0.07) 0%, rgba(0,150,180,0.03) 100%);
          border-bottom: 1px solid rgba(0,200,240,0.07);
          padding: 40px 0;
        }
        .ftr-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .ftr-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.875rem 2rem;
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
        .ftr-cta-btn:hover { background: #33d4f5; transform: translateY(-2px); }

        /* ── Main grid ── */
        .ftr-main {
          padding-top: 60px;
        }
        .ftr-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .ftr-brand {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .ftr-link-col h4 {
          font-size: 0.58rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: rgba(255,255,255,0.22);
          margin-bottom: 18px;
          font-family: 'Inter', sans-serif;
        }
        .ftr-link-col nav {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .ftr-link-col a {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.42);
          text-decoration: none;
          transition: color 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .ftr-link-col a:hover { color: #00C8F0; }

        /* ── Bottom bar ── */
        .ftr-bottom {
          padding: 24px 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ftr-bottom p, .ftr-bottom a {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.28);
          text-decoration: none;
          font-family: 'Inter', sans-serif;
        }
        .ftr-bottom-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          align-items: center;
        }
        .ftr-bottom-links a:hover { color: rgba(255,255,255,0.55); }
        .ftr-autonex { color: #00C8F0 !important; font-weight: 700 !important; font-size: 0.85rem !important; }
        .ftr-autonex:hover { color: #33d4f5 !important; }

        /* ── Social links ── */
        .ftr-social { display: flex; flex-direction: column; gap: 10px; }
        .ftr-social a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.42);
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          transition: color 0.2s;
        }
        .ftr-social a:hover { color: #00C8F0; }

        /* ── TABLET (≤ 960px) ── */
        @media (max-width: 960px) {
          .ftr-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 36px;
          }
          /* Brand spans full width on tablet */
          .ftr-brand {
            grid-column: 1 / -1;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 32px;
            padding-bottom: 32px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .ftr-brand-bio { flex: 1; min-width: 220px; }
        }

        /* ── MOBILE (≤ 600px) ── */
        @media (max-width: 600px) {
          .ftr-cta { padding: 28px 0; }
          .ftr-cta-inner { flex-direction: column; align-items: flex-start; gap: 16px; }
          .ftr-cta-btn { width: 100%; justify-content: center; }

          .ftr-main { padding-top: 40px; }
          .ftr-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
            padding-bottom: 40px;
          }
          /* Brand spans 2 cols */
          .ftr-brand {
            grid-column: 1 / -1;
            flex-direction: column;
            gap: 16px;
            padding-bottom: 24px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .ftr-brand-bio { min-width: 0; }

          .ftr-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            padding: 20px 0 32px;
          }
          .ftr-bottom-links { gap: 14px; }
        }

        /* ── SMALL MOBILE (≤ 380px) ── */
        @media (max-width: 380px) {
          .ftr-grid { grid-template-columns: 1fr; gap: 24px; }
          .ftr-brand { grid-column: auto; }
        }
      `}</style>

      {/* CTA Strip */}
      <div className="ftr-cta">
        <div className="container ftr-cta-inner">
          <div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 400, color: "#f5f0eb", letterSpacing: "0.04em", marginBottom: 6 }}>
              Ready to Transform?
            </h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              Fill the intake form — reviewed personally by Abhinav within 24 hours.
            </p>
          </div>
          <Link href="/book" className="ftr-cta-btn">
            Start Your Journey <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container ftr-main">
        <div className="ftr-grid">

          {/* Brand Column */}
          <div className="ftr-brand">
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#00C8F0,#005f77)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#07080f", flexShrink: 0 }}>
                A
              </div>
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.12em", color: "#f5f0eb", lineHeight: 1.2 }}>
                  ABHINAV <span style={{ color: "#00C8F0" }}>LIFTS</span>
                </div>
                <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.28)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 2 }}>
                  Online Fitness Coach
                </div>
              </div>
            </div>

            <div className="ftr-brand-bio">
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.85, marginBottom: 16 }}>
                Helping people build stronger bodies, disciplined minds, and meaningful lives through fitness, running & smart nutrition.
              </p>

              <div className="ftr-social">
                <a href="https://www.instagram.com/abhinav_.lifts/" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  @abhinav_.lifts
                </a>
                <a href="mailto:abhinavlifts05@gmail.com">
                  <Mail size={14} strokeWidth={1.5} />
                  abhinavlifts05@gmail.com
                </a>
                <a href="https://wa.me/918096407555" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={14} strokeWidth={1.5} />
                  WhatsApp (Mon–Sat)
                </a>
              </div>

              <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 14 }}>
                Hyderabad, India
              </p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(LINKS).map(([section, items]) => (
            <div key={section} className="ftr-link-col">
              <h4>{section}</h4>
              <nav>
                {items.map((l) => (
                  <Link key={l.href + l.label} href={l.href}>{l.label}</Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="ftr-bottom">
          <p>© {new Date().getFullYear()} Abhinav Lifts. All rights reserved.</p>
          <div className="ftr-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/tools">Free Tools</Link>
          </div>
          <p>
            Built by{" "}
            <a href="https://www.autonexai.org/" target="_blank" rel="noopener noreferrer" className="ftr-autonex">
              Autonex AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
