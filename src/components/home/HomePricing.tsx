"use client";
import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";

const PLANS = [
  {
    name: "Consultation",
    price: "₹499",
    per: "one-time",
    desc: "45-min 1-on-1 call to map your transformation path.",
    feats: ["Goal & lifestyle assessment", "Training overview", "Diet snapshot", "WhatsApp Q&A (48h)"],
    featured: false,
    cta: "Book a Call",
    href: "/book",
  },
  {
    name: "Online Coaching",
    price: "₹3,999",
    per: "/ month",
    desc: "Full coaching — training, nutrition & weekly support. The complete experience.",
    feats: ["Custom training program", "Macro nutrition plan", "Weekly check-ins", "Form video review", "WhatsApp Mon–Sat", "Monthly plan rebuild"],
    featured: true,
    badge: "Most Popular",
    cta: "Start Now",
    href: "/book",
  },
  {
    name: "3-Month Transform",
    price: "₹9,999",
    per: "/ 3 months",
    desc: "Complete body transformation with maximum support and accountability.",
    feats: ["Everything in Coaching", "3-month roadmap", "Monthly video calls", "Mindset coaching", "Priority WhatsApp"],
    featured: false,
    cta: "Get Started",
    href: "/book",
  },
];

export default function HomePricing() {
  return (
    <section style={{ padding: "clamp(80px,10vw,140px) 0", background: "#09090b" }}>
      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: start;
        }
        .pricing-card {
          background: #0c0d16;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          position: relative;
          transition: border-color 0.3s;
        }
        .pricing-card:hover {
          border-color: rgba(255,255,255,0.13);
        }
        .pricing-card-featured {
          background: linear-gradient(145deg, rgba(0,200,240,0.06), #09090b);
          border: 1.5px solid rgba(0,200,240,0.28);
          box-shadow: 0 0 32px rgba(0,200,240,0.07), 0 8px 40px rgba(0,0,0,0.4);
        }
        .pricing-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #00C8F0, #0096b3);
          color: #09090b;
          font-size: 0.58rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 5px 16px;
          border-radius: 999px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 5px;
          z-index: 2;
          font-family: 'Inter', sans-serif;
        }
        .pricing-name {
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.3);
          font-family: 'Inter', sans-serif;
          margin-top: 10px;
        }
        .pricing-price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .pricing-price {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.8rem;
          color: #f5f0eb;
          line-height: 1;
          letter-spacing: 0.02em;
        }
        .pricing-per {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.35);
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }
        .pricing-desc {
          font-size: 0.83rem;
          line-height: 1.65;
          color: rgba(255,255,255,0.38);
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .pricing-feats {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
          margin-bottom: 4px;
        }
        .pricing-feats li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.83rem;
          color: rgba(255,255,255,0.52);
          font-family: 'Inter', sans-serif;
        }
        .pricing-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(0,200,240,0.10);
          border: 1px solid rgba(0,200,240,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00C8F0;
          flex-shrink: 0;
        }
        .pricing-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0.875rem 2rem;
          border-radius: 999px;
          background: #00C8F0;
          color: #09090b;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.03em;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 4px 24px rgba(0,200,240,0.30);
          width: 100%;
        }
        .pricing-btn-primary:hover {
          background: #33d4f5;
          transform: translateY(-2px);
        }
        .pricing-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0.875rem 2rem;
          border-radius: 999px;
          background: transparent;
          color: #f5f0eb;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.14);
          transition: border-color 0.2s, background 0.2s;
          width: 100%;
        }
        .pricing-btn-outline:hover {
          border-color: rgba(0,200,240,0.4);
          background: rgba(0,200,240,0.05);
          color: #00C8F0;
        }
        .pricing-footer {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }
        .pricing-ghost-btn {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.75rem 2rem;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          transition: color 0.2s, border-color 0.2s;
        }
        .pricing-ghost-btn:hover {
          color: #00C8F0;
          border-color: rgba(0,200,240,0.3);
        }

        /* ── Tablet ── */
        @media (max-width: 960px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto;
          }
        }
        /* ── Mobile ── */
        @media (max-width: 540px) {
          .pricing-card { padding: 32px 20px; }
          .pricing-price { font-size: 2.4rem; }
          .pricing-grid { max-width: 100%; }
        }
      `}</style>

      <div className="container">
        {/* Section header */}
        <BlurFade>
          <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 72px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.28em", textTransform: "uppercase", color: "#00C8F0" }}>Pricing</span>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem,5vw,4.5rem)", fontWeight: 400, letterSpacing: "0.02em", color: "#f5f0eb", lineHeight: 1.05 }}>
              Simple, <span style={{ color: "#00C8F0" }}>Transparent</span> Plans
            </h2>
            <p style={{ fontSize: "clamp(0.88rem,1.3vw,1rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.42)", maxWidth: 500 }}>
              No hidden fees. No payment portals. Everything goes direct through WhatsApp — fast, personal, real.
            </p>
          </div>
        </BlurFade>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <BlurFade key={plan.name} delay={0.12 * i}>
              <div className={`pricing-card${plan.featured ? " pricing-card-featured" : ""}`}>
                {/* Badge — OUTSIDE the card padding flow, absolute */}
                {plan.badge && (
                  <div className="pricing-badge">
                    <Star size={9} fill="currentColor" /> {plan.badge}
                  </div>
                )}

                <div className="pricing-name">{plan.name}</div>

                <div className="pricing-price-row">
                  <span className="pricing-price">{plan.price}</span>
                  <span className="pricing-per">{plan.per}</span>
                </div>

                <p className="pricing-desc">{plan.desc}</p>

                <ul className="pricing-feats">
                  {plan.feats.map(f => (
                    <li key={f}>
                      <span className="pricing-check"><Check size={11} strokeWidth={2.5} /></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={plan.featured ? "pricing-btn-primary" : "pricing-btn-outline"}
                >
                  {plan.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5} className="pricing-footer">
          <Link href="/pricing" className="pricing-ghost-btn">
            View full pricing & FAQ →
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}
