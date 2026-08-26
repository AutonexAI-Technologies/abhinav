import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Fitness Calculators",
  description: "Free science-backed fitness calculators — Calorie & TDEE, Macro Calculator, and 1RM Strength Calculator. Built for Indians by Abhinav Lifts.",
};

const TOOLS = [
  {
    emoji: "🔥",
    title: "Calorie & TDEE Calculator",
    subtitle: "Know exactly how many calories to eat",
    desc: "Uses the Mifflin-St Jeor equation — the gold standard for BMR estimation. Get your Basal Metabolic Rate, Total Daily Energy Expenditure, and a goal-specific calorie target. Built with Indian meal context.",
    features: ["Mifflin-St Jeor equation", "Activity-adjusted TDEE", "Fat loss / maintenance / bulk targets", "Indian food tips included"],
    href: "/tools/calorie-calculator",
    accent: "var(--blue)",
  },
  {
    emoji: "📊",
    title: "Macro Calculator",
    subtitle: "Protein, carbs & fats — broken down for you",
    desc: "Calculate your exact daily macro targets based on your goal and diet preference. Includes an Indian food protein source table for vegetarian, eggetarian, non-veg, and vegan diets.",
    features: ["Goal-specific macro splits", "Indian food protein reference", "Veg / Non-veg / Vegan tables", "Priority protein guidance"],
    href: "/tools/macro-calculator",
    accent: "#00C8F0",
  },
  {
    emoji: "💪",
    title: "One Rep Max (1RM) Calculator",
    subtitle: "Estimate your maximum strength safely",
    desc: "Estimate your 1RM across 6 lifts using a 3-formula average (Epley, Brzycki, Lombardi). Get a full percentage programming chart and see your strength level vs natural lifter standards.",
    features: ["3-formula averaged estimate", "Programming percentage chart", "Strength level classification", "Standards for 6 major lifts"],
    href: "/tools/one-rep-max",
    accent: "#f97316",
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "80px 0 64px", borderBottom: "1px solid rgba(0,200,240,0.06)", textAlign: "center" }}>
        <div className="container">
          <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>Free Tools</span>
          <h1 className="d-hero" style={{ fontSize: "clamp(2.8rem,6vw,5.5rem)", marginBottom: 20 }}>
            Science-Backed <span className="text-blue">Calculators</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
            Free fitness calculators built on validated equations — not guesswork. Know your numbers, then build your plan around them.
          </p>
        </div>
      </section>

      {/* Tool Cards */}
      <section className="section">
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {TOOLS.map((tool, i) => (
            <div key={tool.title} style={{
              display: "grid",
              gridTemplateColumns: i % 2 === 0 ? "1fr 2fr" : "2fr 1fr",
              gap: 56,
              padding: "44px 48px",
              background: "rgba(12,13,22,0.75)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "var(--r-2xl)",
              alignItems: "center",
            }}>
              {i % 2 !== 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                    {tool.features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.95rem", color: "var(--muted)" }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: tool.accent, flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <h2 style={{ fontFamily: "var(--ff-display)", fontSize: "2rem", color: "var(--cream)", lineHeight: 1.15, marginBottom: 6 }}>{tool.title}</h2>
                  <p style={{ fontSize: "0.85rem", color: tool.accent, fontWeight: 600, letterSpacing: "0.04em" }}>{tool.subtitle}</p>
                </div>
                <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.85 }}>{tool.desc}</p>
                <Link href={tool.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.75rem 1.75rem", borderRadius: 999, background: "#00C8F0", color: "#09090b", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,200,240,0.22)" }}>
                  Open Calculator <ArrowRight size={15} />
                </Link>
              </div>
              {i % 2 === 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                    {tool.features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.95rem", color: "var(--muted)" }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: tool.accent, flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why use these */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>Why It Matters</span>
          <h2 className="d-xl" style={{ marginBottom: 20 }}>Know Your Numbers. <span className="text-blue">Own Your Progress.</span></h2>
          <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.85, marginBottom: 36 }}>
            Most people train and diet by feel. The ones who get results train and eat by data. These calculators give you the foundation — from there, a personalised programme makes the difference.
          </p>
          <Link href="/book" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.9rem 2.2rem", borderRadius: 999, background: "#00C8F0", color: "#09090b", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 24px rgba(0,200,240,0.28)" }}>
            Get a Custom Programme <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
