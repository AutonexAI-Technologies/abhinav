"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const EXERCISES = ["Bench Press", "Squat", "Deadlift", "Overhead Press (OHP)", "Barbell Row", "Romanian Deadlift"];

type StrengthLevel = "Beginner" | "Novice" | "Intermediate" | "Advanced" | "Elite";

// Strength standards as bodyweight multiples — Male
const STANDARDS_M: Record<string, Record<StrengthLevel, number>> = {
  "Bench Press":           { Beginner: 0.5, Novice: 0.75, Intermediate: 1.0, Advanced: 1.35, Elite: 1.6 },
  "Squat":                 { Beginner: 0.75, Novice: 1.0,  Intermediate: 1.4, Advanced: 1.75, Elite: 2.1 },
  "Deadlift":              { Beginner: 1.0,  Novice: 1.25, Intermediate: 1.75, Advanced: 2.2,  Elite: 2.6 },
  "Overhead Press (OHP)":  { Beginner: 0.35, Novice: 0.55, Intermediate: 0.75, Advanced: 1.0,  Elite: 1.2 },
  "Barbell Row":           { Beginner: 0.5,  Novice: 0.75, Intermediate: 1.0,  Advanced: 1.3,  Elite: 1.55 },
  "Romanian Deadlift":     { Beginner: 0.6,  Novice: 0.85, Intermediate: 1.2,  Advanced: 1.55, Elite: 1.9 },
};
// Female standards are roughly 60–65% of male
const STANDARDS_F: Record<string, Record<StrengthLevel, number>> = Object.fromEntries(
  Object.entries(STANDARDS_M).map(([ex, levels]) => [
    ex,
    Object.fromEntries(Object.entries(levels).map(([lvl, val]) => [lvl, Math.round(val * 0.63 * 100) / 100])) as Record<StrengthLevel, number>,
  ])
);

const LEVELS: StrengthLevel[] = ["Beginner", "Novice", "Intermediate", "Advanced", "Elite"];
const LEVEL_COLORS: Record<StrengthLevel, string> = {
  Beginner: "#94a3b8", Novice: "#4ade80", Intermediate: "#facc15",
  Advanced: "#f97316", Elite: "#00C8F0",
};

const PERCENTAGES = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50];

const FAQ = [
  { q: "What is a One Rep Max (1RM)?", a: "Your 1RM is the maximum weight you can lift for exactly one repetition with proper form. It's the gold standard for measuring strength in powerlifting and strength sports, and it's used to calculate training loads (e.g., 'do sets at 75% of your 1RM')." },
  { q: "How accurate are 1RM prediction formulas?", a: "For sets of 3–5 reps performed to near-failure, prediction accuracy is typically within 5–10% of your actual 1RM. Accuracy drops significantly as rep count increases beyond 8 reps. Multiple formulas are averaged here to reduce the error from any single formula." },
  { q: "What is a respectable bench press for my bodyweight?", a: "For an Indian male in his 20s–30s with 1–2 years of consistent training, benching your bodyweight is a solid intermediate milestone. Lifting 1.25× bodyweight is advanced. For females, 0.6–0.75× bodyweight at intermediate level is excellent." },
  { q: "How often should I test my 1RM?", a: "Avoid testing your actual 1RM frequently — once every 8–12 weeks is sufficient during a structured programme. Over-testing has a high injury risk and disrupts your training. Use calculator-based estimation from sub-maximal sets for day-to-day programming." },
  { q: "Why do different formulas give different results?", a: "Each formula was derived from different population samples and prioritised accuracy in different rep ranges. Epley is most popular for low rep ranges, Brzycki is very similar to Epley, and Lombardi is more conservative for higher reps. Averaging them reduces the impact of any single formula's weaknesses." },
];

export default function OneRepMaxPage() {
  const [form, setForm] = useState({ exercise: "Bench Press", weight: "", reps: "", bodyweight: "", gender: "male" });
  const [result, setResult] = useState<{ rm: number; level: StrengthLevel; standards: Record<StrengthLevel, number>; chart: number[] } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calculate = () => {
    const w  = parseFloat(form.weight);
    const r  = parseFloat(form.reps);
    const bw = parseFloat(form.bodyweight);
    if (!w || !r) return;

    // Three formula average
    const epley   = w * (1 + r / 30);
    const brzycki = r >= 37 ? epley : w * (36 / (37 - r));
    const lombardi = w * Math.pow(r, 0.1);
    const rm = Math.round((epley + brzycki + lombardi) / 3);

    const standards = form.gender === "male" ? STANDARDS_M[form.exercise] : STANDARDS_F[form.exercise];
    const ratio = bw > 0 ? rm / bw : 0;

    let level: StrengthLevel = "Beginner";
    if (ratio >= standards.Elite)        level = "Elite";
    else if (ratio >= standards.Advanced)     level = "Advanced";
    else if (ratio >= standards.Intermediate) level = "Intermediate";
    else if (ratio >= standards.Novice)       level = "Novice";

    const chart = PERCENTAGES.map(p => Math.round(rm * p / 100));
    setResult({ rm, level, standards, chart });
  };

  return (
    <>
      <section style={{ padding: "80px 0 48px", borderBottom: "1px solid rgba(0,200,240,0.06)", textAlign: "center" }}>
        <div className="container">
          <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>Free Tool</span>
          <h1 className="d-hero" style={{ fontSize: "clamp(2.4rem,5vw,4.5rem)", marginBottom: 16 }}>
            One Rep Max <span className="text-blue">Calculator</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.78 }}>
            Estimate your maximum strength across key lifts. Get your full percentage chart for programming and see how you rank against strength standards.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          {/* Input */}
          <div className="calc-card">
            <h2 style={{ fontFamily: "var(--ff-ui)", fontWeight: 700, fontSize: "1.2rem", color: "var(--cream)", marginBottom: 28 }}>Your Lift</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="form-group">
                <label className="form-label">Exercise</label>
                <select className="form-input" value={form.exercise} onChange={e => setForm(f => ({ ...f, exercise: e.target.value }))}>
                  {EXERCISES.map(ex => <option key={ex} value={ex}>{ex}</option>)}
                </select>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="form-group">
                  <label className="form-label">Weight Lifted (kg)</label>
                  <input className="form-input" type="number" placeholder="e.g. 80" value={form.weight} onChange={e => setForm(f => ({ ...f, weight: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Reps Completed</label>
                  <input className="form-input" type="number" placeholder="3–10 reps" value={form.reps} onChange={e => setForm(f => ({ ...f, reps: e.target.value }))} />
                </div>
              </div>
              <div style={{ padding: "12px 16px", background: "rgba(0,200,240,0.04)", border: "1px solid rgba(0,200,240,0.10)", borderRadius: "var(--r-md)", fontSize: "0.78rem", color: "var(--faint)" }}>
                💡 For best accuracy: use a set of 3–5 reps performed at or near failure (RIR 0–2).
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="form-group">
                  <label className="form-label">Your Bodyweight (kg)</label>
                  <input className="form-input" type="number" placeholder="e.g. 75" value={form.bodyweight} onChange={e => setForm(f => ({ ...f, bodyweight: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Gender (for standards)</label>
                  <select className="form-input" value={form.gender} onChange={e => setForm(f => ({ ...f, gender: e.target.value }))}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <button onClick={calculate} className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
                Calculate My 1RM
              </button>
            </div>
          </div>

          {/* Results */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {result ? (
              <>
                {/* Main result */}
                <div className="calc-result-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                    <div>
                      <div style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--faint)", marginBottom: 6 }}>Estimated 1RM — {form.exercise}</div>
                      <div className="calc-stat-value" style={{ fontSize: "4rem" }}>{result.rm}<span style={{ fontSize: "1.5rem", color: "var(--faint)", marginLeft: 6 }}>kg</span></div>
                    </div>
                    {form.bodyweight && (
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "0.68rem", color: "var(--faint)", marginBottom: 6 }}>Strength Level</div>
                        <span style={{ padding: "6px 18px", borderRadius: "9999px", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", background: `${LEVEL_COLORS[result.level]}20`, border: `1px solid ${LEVEL_COLORS[result.level]}40`, color: LEVEL_COLORS[result.level] }}>
                          {result.level}
                        </span>
                        <div style={{ fontSize: "0.72rem", color: "var(--faint)", marginTop: 8 }}>
                          Ratio: {(result.rm / parseFloat(form.bodyweight)).toFixed(2)}× BW
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Strength standard bar */}
                  {form.bodyweight && (
                    <div style={{ marginTop: 4 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        {LEVELS.map(lvl => (
                          <div key={lvl} style={{ textAlign: "center", flex: 1 }}>
                            <div style={{ fontSize: "0.58rem", color: lvl === result.level ? LEVEL_COLORS[lvl] : "var(--faint)", fontWeight: lvl === result.level ? 700 : 400, textTransform: "uppercase", letterSpacing: "0.08em" }}>{lvl}</div>
                            <div style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: 2 }}>{result.standards[lvl]}×</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ height: 6, background: "rgba(0,0,0,0.4)", borderRadius: 9999, overflow: "hidden" }}>
                        <div style={{ height: "100%", borderRadius: 9999, background: `linear-gradient(90deg, #94a3b8, #4ade80, #facc15, #f97316, var(--blue))`, width: `${Math.min(100, ((result.rm / parseFloat(form.bodyweight)) / result.standards.Elite) * 100)}%`, transition: "width 0.8s var(--ease)" }} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Percentage chart */}
                <div style={{ background: "rgba(12,13,22,0.8)", border: "1px solid var(--border-subtle)", borderRadius: "var(--r-xl)", padding: "24px" }}>
                  <h3 style={{ fontFamily: "var(--ff-ui)", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--blue)", marginBottom: 18 }}>Programming Chart</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }}>
                    {result.chart.map((kg, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", background: i === 0 ? "var(--blue-subtle)" : "rgba(0,0,0,0.2)", borderRadius: "var(--r-sm)", border: i === 0 ? "1px solid var(--blue-border)" : "1px solid transparent" }}>
                        <span style={{ fontSize: "0.72rem", color: "var(--faint)", fontWeight: 600 }}>{PERCENTAGES[i]}%</span>
                        <span style={{ fontSize: "0.9rem", fontWeight: 700, color: i === 0 ? "var(--blue)" : "var(--cream)" }}>{kg} kg</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div style={{ padding: "40px", background: "rgba(12,13,22,0.6)", border: "1px dashed rgba(0,200,240,0.14)", borderRadius: "var(--r-2xl)", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 14 }}>💪</div>
                <p style={{ color: "var(--faint)", fontSize: "0.9rem", lineHeight: 1.7 }}>Enter your lift details and hit Calculate to see your estimated 1RM and programming chart.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Strength Standards Table */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <span className="eyebrow">Reference</span>
            <h2 className="d-xl">Strength <span className="text-blue">Standards</span></h2>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", maxWidth: 520 }}>Bodyweight multipliers for natural lifters. For males. Female standards are approximately 60–65%.</p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(0,200,240,0.12)" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--faint)" }}>Exercise</th>
                  {LEVELS.map(l => (
                    <th key={l} style={{ padding: "12px 16px", textAlign: "center", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: LEVEL_COLORS[l] }}>{l}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {EXERCISES.map((ex, i) => (
                  <tr key={ex} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                    <td style={{ padding: "14px 16px", fontSize: "0.9rem", color: "var(--cream)", fontWeight: 500 }}>{ex}</td>
                    {LEVELS.map(l => (
                      <td key={l} style={{ padding: "14px 16px", textAlign: "center", fontSize: "0.88rem", color: "var(--muted)" }}>{STANDARDS_M[ex][l]}× BW</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "0.78rem", color: "var(--faint)", marginTop: 16, textAlign: "center" }}>These standards are for natural lifters performing the lift with correct form. Do not compare with enhanced athletes.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <span className="eyebrow">FAQ</span>
            <h2 className="d-xl">Frequently <span className="text-blue">Asked</span></h2>
          </div>
          {FAQ.map((f, i) => (
            <div key={i} className="accord">
              <button className="accord-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q}
                {openFaq === i ? <ChevronUp size={16} style={{ color: "var(--blue)", flexShrink: 0 }} /> : <ChevronDown size={16} style={{ color: "var(--faint)", flexShrink: 0 }} />}
              </button>
              {openFaq === i && <div className="accord-body">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="section section-alt" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ padding: "16px 20px", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: "var(--r-lg)", marginBottom: 36, fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.8, textAlign: "left" }}>
            <strong style={{ color: "#fca5a5" }}>Disclaimer:</strong> This calculator provides estimates based on mathematical formulas. Actual 1RM may differ due to technique, fatigue, and individual physiology. Never attempt a true 1RM without a spotter and proper warm-up. Consult a qualified trainer before attempting heavy lifts, especially if you have any injuries or medical conditions.
          </div>
          <h2 className="d-xl" style={{ marginBottom: 14, fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
            Numbers Are <span className="text-blue">Just the Start</span>
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: 28, lineHeight: 1.75 }}>A strong 1RM is built through smart, periodised programming. Get a custom strength plan from Abhinav.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book" className="btn btn-wa btn-lg">📲 Get a Custom Strength Programme</Link>
            <Link href="/tools/calorie-calculator" className="btn btn-outline btn-lg">Calorie Calculator <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
