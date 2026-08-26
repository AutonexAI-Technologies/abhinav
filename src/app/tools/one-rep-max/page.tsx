"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp, Dumbbell } from "lucide-react";

const EXERCISES = ["Bench Press", "Squat", "Deadlift", "Overhead Press (OHP)", "Barbell Row", "Romanian Deadlift"];

type StrengthLevel = "Beginner" | "Novice" | "Intermediate" | "Advanced" | "Elite";

const STANDARDS_M: Record<string, Record<StrengthLevel, number>> = {
  "Bench Press":          { Beginner: 0.5,  Novice: 0.75, Intermediate: 1.0,  Advanced: 1.35, Elite: 1.6  },
  "Squat":                { Beginner: 0.75, Novice: 1.0,  Intermediate: 1.4,  Advanced: 1.75, Elite: 2.1  },
  "Deadlift":             { Beginner: 1.0,  Novice: 1.25, Intermediate: 1.75, Advanced: 2.2,  Elite: 2.6  },
  "Overhead Press (OHP)": { Beginner: 0.35, Novice: 0.55, Intermediate: 0.75, Advanced: 1.0,  Elite: 1.2  },
  "Barbell Row":          { Beginner: 0.5,  Novice: 0.75, Intermediate: 1.0,  Advanced: 1.3,  Elite: 1.55 },
  "Romanian Deadlift":    { Beginner: 0.6,  Novice: 0.85, Intermediate: 1.2,  Advanced: 1.55, Elite: 1.9  },
};
const STANDARDS_F: Record<string, Record<StrengthLevel, number>> = Object.fromEntries(
  Object.entries(STANDARDS_M).map(([ex, levels]) => [
    ex,
    Object.fromEntries(Object.entries(levels).map(([lvl, val]) => [lvl, Math.round(val * 0.63 * 100) / 100])) as Record<StrengthLevel, number>,
  ])
);

const LEVELS: StrengthLevel[] = ["Beginner", "Novice", "Intermediate", "Advanced", "Elite"];
const LEVEL_COLORS: Record<StrengthLevel, string> = {
  Beginner: "#94a3b8", Novice: "#64748b", Intermediate: "#f59e0b", Advanced: "#f97316", Elite: "#00C8F0",
};
const PERCENTAGES = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50];

const FAQ = [
  { q: "What is a One Rep Max (1RM)?", a: "Your 1RM is the maximum weight you can lift for exactly one repetition with proper form. It's the gold standard for measuring strength in powerlifting and strength sports, and it's used to calculate training loads (e.g., 'do sets at 75% of your 1RM')." },
  { q: "How accurate are 1RM prediction formulas?", a: "For sets of 3–5 reps performed to near-failure, prediction accuracy is typically within 5–10% of your actual 1RM. Accuracy drops significantly as rep count increases beyond 8 reps. Multiple formulas are averaged here to reduce the error from any single formula." },
  { q: "What is a respectable bench press for my bodyweight?", a: "For an Indian male in his 20s–30s with 1–2 years of consistent training, benching your bodyweight is a solid intermediate milestone. Lifting 1.25× bodyweight is advanced. For females, 0.6–0.75× bodyweight at intermediate level is excellent." },
  { q: "How often should I test my 1RM?", a: "Avoid testing your actual 1RM frequently — once every 8–12 weeks is sufficient during a structured programme. Over-testing has a high injury risk and disrupts your training. Use calculator-based estimation from sub-maximal sets for day-to-day programming." },
  { q: "Why do different formulas give different results?", a: "Each formula was derived from different population samples and prioritised accuracy in different rep ranges. Epley is most popular for low rep ranges, Brzycki is very similar to Epley, and Lombardi is more conservative for higher reps. Averaging them reduces the impact of any single formula's weaknesses." },
];

const inputCls = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10,
  padding: "11px 14px",
  fontSize: "0.875rem",
  color: "#f5f0eb",
  outline: "none",
  fontFamily: "'Inter', sans-serif",
  boxSizing: "border-box" as const,
  appearance: "none" as const,
};

const labelCls = {
  display: "block",
  fontSize: "0.65rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.38)",
  marginBottom: 6,
};

export default function OneRepMaxPage() {
  const [form, setForm] = useState({ exercise: "Bench Press", weight: "", reps: "", bodyweight: "", gender: "male" });
  const [result, setResult] = useState<{ rm: number; level: StrengthLevel; standards: Record<StrengthLevel, number>; chart: number[] } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calculate = () => {
    const w  = parseFloat(form.weight);
    const r  = parseFloat(form.reps);
    const bw = parseFloat(form.bodyweight);
    if (!w || !r) return;

    const epley    = w * (1 + r / 30);
    const brzycki  = r >= 37 ? epley : w * (36 / (37 - r));
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

  const levelIdx = result ? LEVELS.indexOf(result.level) : -1;
  const progressPct = result && form.bodyweight
    ? Math.min(100, ((result.rm / parseFloat(form.bodyweight)) / result.standards.Elite) * 100)
    : 0;

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "#09090b", padding: "clamp(72px,9vw,110px) 0 clamp(48px,6vw,72px)", borderBottom: "1px solid rgba(255,255,255,0.05)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 280, background: "radial-gradient(ellipse, rgba(0,200,240,0.07), transparent 65%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#00C8F0", display: "block", marginBottom: 16 }}>Free Tool</span>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem,6vw,5.5rem)", fontWeight: 400, letterSpacing: "0.02em", color: "#f5f0eb", lineHeight: 1, marginBottom: 18 }}>
            One Rep Max <span style={{ color: "#00C8F0" }}>Calculator</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.42)", maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            Estimate your maximum strength across key lifts. Get your full percentage chart for programming and see how you rank against natural lifter standards.
          </p>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <section style={{ background: "#0c0c10", padding: "clamp(64px,8vw,100px) 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 24, alignItems: "start" }}>

            {/* Input Panel */}
            <div style={{ background: "#09090b", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, overflow: "hidden" }}>
              <div style={{ padding: "24px 28px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", letterSpacing: "0.06em", color: "#f5f0eb", fontWeight: 400 }}>Your Lift</h2>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.28)", marginTop: 4 }}>Weight + reps required. Bodyweight optional for standards.</p>
              </div>
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: 18 }}>
                {/* Exercise selector — pills */}
                <div>
                  <label style={labelCls}>Exercise *</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                    {EXERCISES.map(ex => (
                      <button
                        key={ex}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, exercise: ex }))}
                        style={{ padding: "9px 12px", borderRadius: 8, border: "1px solid", borderColor: form.exercise === ex ? "#00C8F0" : "rgba(255,255,255,0.08)", background: form.exercise === ex ? "rgba(0,200,240,0.10)" : "rgba(255,255,255,0.02)", color: form.exercise === ex ? "#00C8F0" : "rgba(255,255,255,0.38)", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.75rem", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}
                      >
                        {ex}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div><label style={labelCls}>Weight Lifted (kg) *</label><input style={inputCls} type="number" placeholder="e.g. 80" value={form.weight} onChange={e => setForm(f => ({ ...f, weight: e.target.value }))} /></div>
                  <div><label style={labelCls}>Reps Completed *</label><input style={inputCls} type="number" placeholder="3–10 reps" value={form.reps} onChange={e => setForm(f => ({ ...f, reps: e.target.value }))} /></div>
                </div>

                <div style={{ padding: "12px 14px", background: "rgba(0,200,240,0.04)", border: "1px solid rgba(0,200,240,0.09)", borderRadius: 10, fontSize: "0.75rem", color: "rgba(255,255,255,0.32)", lineHeight: 1.7 }}>
                  For best accuracy: use a set of <strong style={{ color: "rgba(255,255,255,0.55)" }}>3–5 reps</strong> at or near failure (RIR 0–2).
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div><label style={labelCls}>Bodyweight (kg) <span style={{ color: "rgba(255,255,255,0.2)" }}>opt.</span></label><input style={inputCls} type="number" placeholder="e.g. 75" value={form.bodyweight} onChange={e => setForm(f => ({ ...f, bodyweight: e.target.value }))} /></div>
                  <div><label style={labelCls}>Gender (for standards)</label>
                    <select style={inputCls} value={form.gender} onChange={e => setForm(f => ({ ...f, gender: e.target.value }))}>
                      <option value="male">Male</option><option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={calculate}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "0.9rem 1.5rem", borderRadius: 999, background: "#00C8F0", color: "#09090b", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.875rem", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,200,240,0.25)", letterSpacing: "0.02em" }}
                >
                  <Dumbbell size={15} />
                  Calculate My 1RM
                </button>
              </div>
            </div>

            {/* Results Panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {result ? (
                <>
                  {/* Main 1RM card */}
                  <div style={{ background: "linear-gradient(145deg, rgba(0,200,240,0.07), rgba(9,9,11,0.97))", border: "1px solid rgba(0,200,240,0.14)", borderRadius: 20, padding: "28px" }}>
                    <div style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "#00C8F0", marginBottom: 20, opacity: 0.8 }}>
                      Estimated 1RM — {form.exercise}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
                      <div>
                        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem,6vw,5rem)", color: "#f5f0eb", lineHeight: 1, letterSpacing: "0.02em" }}>
                          {result.rm}
                          <span style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.28)", marginLeft: 8, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>kg</span>
                        </div>
                      </div>
                      {form.bodyweight && (
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.28)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Strength Level</div>
                          <span style={{ padding: "6px 18px", borderRadius: 999, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: `${LEVEL_COLORS[result.level]}18`, border: `1px solid ${LEVEL_COLORS[result.level]}35`, color: LEVEL_COLORS[result.level] }}>
                            {result.level}
                          </span>
                          <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.28)", marginTop: 8 }}>
                            {(result.rm / parseFloat(form.bodyweight)).toFixed(2)}× BW
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Strength level progress bar */}
                    {form.bodyweight && (
                      <div>
                        <div style={{ display: "flex", marginBottom: 8 }}>
                          {LEVELS.map((lvl, i) => (
                            <div key={lvl} style={{ flex: 1, textAlign: "center" }}>
                              <div style={{ fontSize: "0.52rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: lvl === result.level ? LEVEL_COLORS[lvl] : "rgba(255,255,255,0.2)" }}>{lvl}</div>
                              <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", marginTop: 2 }}>{result.standards[lvl]}×</div>
                            </div>
                          ))}
                        </div>
                        {/* Segmented progress track */}
                        <div style={{ display: "flex", gap: 2, height: 6 }}>
                          {LEVELS.map((lvl, i) => (
                            <div key={lvl} style={{ flex: 1, borderRadius: 999, background: i <= levelIdx ? LEVEL_COLORS[lvl] : "rgba(255,255,255,0.06)", transition: "background 0.4s ease" }} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Programming chart */}
                  <div style={{ background: "#09090b", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "24px" }}>
                    <div style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#00C8F0", marginBottom: 18, opacity: 0.8 }}>Programming Chart</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }}>
                      {result.chart.map((kg, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 14px", background: i === 0 ? "rgba(0,200,240,0.08)" : "rgba(255,255,255,0.02)", borderRadius: 8, border: i === 0 ? "1px solid rgba(0,200,240,0.20)" : "1px solid rgba(255,255,255,0.04)" }}>
                          <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.32)", fontWeight: 600, fontFamily: "monospace" }}>{PERCENTAGES[i]}%</span>
                          <span style={{ fontSize: "0.9rem", fontWeight: 700, color: i === 0 ? "#00C8F0" : "#f5f0eb", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}>{kg} kg</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/book" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "0.9rem", borderRadius: 999, background: "#00C8F0", color: "#09090b", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,200,240,0.22)" }}>
                    Get a Custom Strength Programme <ArrowRight size={14} />
                  </Link>
                </>
              ) : (
                <div style={{ background: "#09090b", border: "1px dashed rgba(0,200,240,0.12)", borderRadius: 20, padding: "56px 40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(0,200,240,0.06)", border: "1px solid rgba(0,200,240,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Dumbbell size={22} color="#00C8F0" strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", fontWeight: 400, color: "#f5f0eb", letterSpacing: "0.04em" }}>Your 1RM Appears Here</h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.28)", lineHeight: 1.7, maxWidth: 280 }}>
                    Select an exercise, enter weight and reps, then hit Calculate.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── STRENGTH STANDARDS TABLE ── */}
      <section style={{ background: "#09090b", padding: "clamp(64px,8vw,100px) 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#00C8F0" }}>Reference</span>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 400, letterSpacing: "0.02em", color: "#f5f0eb" }}>
              Strength <span style={{ color: "#00C8F0" }}>Standards</span>
            </h2>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.38)", maxWidth: 520, lineHeight: 1.7 }}>
              Bodyweight multipliers for natural lifters. For males. Female standards are approximately 60–65%.
            </p>
          </div>
          <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "rgba(0,200,240,0.04)", borderBottom: "1px solid rgba(0,200,240,0.10)" }}>
                  <th style={{ padding: "14px 18px", textAlign: "left", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,0.28)" }}>Exercise</th>
                  {LEVELS.map(l => (
                    <th key={l} style={{ padding: "14px 18px", textAlign: "center", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: LEVEL_COLORS[l] }}>{l}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {EXERCISES.map((ex, i) => (
                  <tr key={ex} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: i % 2 === 0 ? "rgba(9,9,11,0.6)" : "rgba(255,255,255,0.01)" }}>
                    <td style={{ padding: "14px 18px", fontSize: "0.875rem", color: "#f5f0eb", fontWeight: 600 }}>{ex}</td>
                    {LEVELS.map(l => (
                      <td key={l} style={{ padding: "14px 18px", textAlign: "center", fontSize: "0.875rem", color: "rgba(255,255,255,0.42)" }}>{STANDARDS_M[ex][l]}× BW</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.22)", marginTop: 14, textAlign: "center" }}>
            Standards are for natural lifters with correct form. Do not compare with enhanced athletes.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#0c0c10", padding: "clamp(64px,8vw,100px) 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#00C8F0" }}>FAQ</span>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 400, letterSpacing: "0.02em", color: "#f5f0eb" }}>
              Frequently <span style={{ color: "#00C8F0" }}>Asked</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{ background: "#09090b", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "20px 24px", textAlign: "left", cursor: "pointer", background: "none", border: "none", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#f5f0eb" }}>
                  {f.q}
                  {openFaq === i ? <ChevronUp size={15} color="#00C8F0" style={{ flexShrink: 0 }} /> : <ChevronDown size={15} color="rgba(255,255,255,0.28)" style={{ flexShrink: 0 }} />}
                </button>
                {openFaq === i && <div style={{ padding: "0 24px 20px", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.85 }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER + CTA ── */}
      <section style={{ background: "#09090b", padding: "clamp(64px,8vw,100px) 0" }}>
        <div className="container" style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ padding: "14px 20px", background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: 12, marginBottom: 48, fontSize: "0.8rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.8 }}>
            <strong style={{ color: "#fca5a5" }}>Disclaimer:</strong> This calculator provides estimates based on mathematical formulas. Never attempt a true 1RM without a spotter and proper warm-up. Consult a qualified trainer before attempting heavy lifts, especially if you have any injuries or medical conditions.
          </div>
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 400, letterSpacing: "0.02em", color: "#f5f0eb" }}>
              Numbers Are <span style={{ color: "#00C8F0" }}>Just the Start</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.38)", lineHeight: 1.75, maxWidth: 440, fontSize: "0.9rem" }}>
              A strong 1RM is built through smart, periodised programming. Get a custom strength plan from Abhinav.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/book" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.9rem 2rem", borderRadius: 999, background: "#00C8F0", color: "#09090b", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,200,240,0.25)" }}>
                Get a Custom Programme <ArrowRight size={14} />
              </Link>
              <Link href="/tools/calorie-calculator" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.9rem 2rem", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>
                Calorie Calculator <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
