"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp, Flame, Zap, Target } from "lucide-react";

const ACTIVITY = [
  { label: "Sedentary — Office job, little to no movement", factor: 1.2 },
  { label: "Lightly Active — Walking or yoga 1–3 days/week", factor: 1.375 },
  { label: "Moderately Active — Gym or sports 3–5 days/week", factor: 1.55 },
  { label: "Very Active — Intense training 6–7 days/week", factor: 1.725 },
  { label: "Extremely Active — Athlete or physical labour + daily training", factor: 1.9 },
];

const GOALS = [
  { label: "Lose Weight (Mild deficit — sustainable fat loss)", adjust: -300 },
  { label: "Lose Weight (Aggressive — faster but harder)", adjust: -500 },
  { label: "Maintain Weight (Stay at current composition)", adjust: 0 },
  { label: "Lean Bulk (Gain muscle, minimal fat)", adjust: 250 },
  { label: "Bulk (Faster muscle gain, some fat expected)", adjust: 500 },
];

const FAQ = [
  {
    q: "How many calories does an active Indian male need per day?",
    a: "It depends heavily on body weight and activity level. A 75kg male who trains 4–5 days per week typically needs 2,600–3,000 kcal/day to maintain weight. For fat loss, targeting 2,200–2,500 kcal is a sustainable starting point. Use this calculator to get your personalised number.",
  },
  {
    q: "How many calories should an Indian female eat to lose weight?",
    a: "A 60kg woman who trains 3 days per week has a TDEE of roughly 1,900–2,100 kcal. A moderate deficit of 300–400 kcal brings her target to 1,500–1,700 kcal for fat loss. Never go below 1,200 kcal — it leads to muscle loss, hormonal disruption, and metabolic slowdown.",
  },
  {
    q: "What's the difference between BMR and TDEE?",
    a: "BMR (Basal Metabolic Rate) is how many calories your body needs at complete rest — just to breathe, circulate blood, and maintain organ function. TDEE (Total Daily Energy Expenditure) is your actual daily burn including all activity. TDEE is always higher than BMR. Your target calories should be based on TDEE, not BMR.",
  },
  {
    q: "How accurate is the Mifflin-St Jeor equation?",
    a: "It's currently considered the most accurate formula for estimating BMR in the general population, endorsed by the Academy of Nutrition and Dietetics. It has a margin of error of roughly ±10%. That's why you should treat your result as a starting point and adjust based on real-world results over 2–3 weeks.",
  },
  {
    q: "Should I eat below my BMR to lose weight?",
    a: "No. Eating below your BMR puts your body under severe stress and triggers muscle catabolism — your body starts breaking down muscle for energy. This lowers your metabolism further and makes fat loss harder over time. Always eat above BMR and create your deficit relative to TDEE.",
  },
];

const INDIAN_TIPS = [
  { title: "Rice & Roti Are Not the Enemy", tip: "They're calorie-dense and easy to overeat — but they're not bad foods. Measure portions (1 cup cooked rice ≈ 210 kcal) and balance with protein at every meal." },
  { title: "Cooking Oil Is a Hidden Calorie Source", tip: "1 tablespoon of any cooking oil — groundnut, coconut, ghee — is approximately 120 kcal. Halving your oil use can save 200–300 kcal per day without changing what you eat." },
  { title: "Chai & Coffee Add Up Fast", tip: "A typical Indian chai with 2 tsp sugar and 50ml full-fat milk = 60–80 kcal per cup. Drinking 4–6 cups a day adds 240–480 kcal before you've eaten a single meal." },
  { title: "Home vs Restaurant: A 400 kcal Gap", tip: "The same dish can vary dramatically in calories depending on preparation. A restaurant butter chicken can be 600–900 kcal vs 350–450 kcal home-cooked. Cooking at home is the most powerful calorie-control tool available." },
  { title: "Prioritise Protein at Every Meal", tip: "Most Indian meals are carb and fat heavy with very little protein. Aim to add a protein source to every meal — dal, curd, paneer, eggs, or chicken — to hit your daily protein target." },
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
  transition: "border-color 0.2s",
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

export default function CalorieCalculatorPage() {
  const [form, setForm] = useState({ age: "", gender: "male", weight: "", height: "", activity: "1.55", goal: "0" });
  const [result, setResult] = useState<{ bmr: number; tdee: number; target: number } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calculate = () => {
    const age = parseFloat(form.age);
    const wt  = parseFloat(form.weight);
    const ht  = parseFloat(form.height);
    const af  = parseFloat(form.activity);
    const adj = parseFloat(form.goal);
    if (!age || !wt || !ht) return;
    const bmr = form.gender === "male"
      ? 10 * wt + 6.25 * ht - 5 * age + 5
      : 10 * wt + 6.25 * ht - 5 * age - 161;
    const tdee   = Math.round(bmr * af);
    const target = Math.round(tdee + adj);
    setResult({ bmr: Math.round(bmr), tdee, target });
  };

  const getGoalLabel = () => {
    const adj = parseFloat(form.goal);
    if (adj < 0) return "Fat Loss";
    if (adj === 0) return "Maintenance";
    return "Muscle Gain";
  };

  const getGoalColor = () => {
    const adj = parseFloat(form.goal);
    if (adj < 0) return "#00C8F0";
    if (adj === 0) return "#f59e0b";
    return "#a855f7";
  };

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "#09090b", padding: "clamp(72px,9vw,110px) 0 clamp(48px,6vw,72px)", borderBottom: "1px solid rgba(255,255,255,0.05)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 280, background: "radial-gradient(ellipse, rgba(0,200,240,0.07), transparent 65%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#00C8F0", display: "block", marginBottom: 16 }}>Free Tool</span>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem,6vw,5.5rem)", fontWeight: 400, letterSpacing: "0.02em", color: "#f5f0eb", lineHeight: 1, marginBottom: 18 }}>
            Calorie & <span style={{ color: "#00C8F0" }}>TDEE Calculator</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.42)", maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            Find your exact daily calorie needs using the Mifflin-St Jeor equation — the gold standard in calorie estimation. Built with Indian diets in mind.
          </p>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <section style={{ background: "#0c0c10", padding: "clamp(64px,8vw,100px) 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div className="calc-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 24, alignItems: "start" }}>

            {/* ── Input Panel ── */}
            <div style={{ background: "#09090b", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, overflow: "hidden" }}>
              <div style={{ padding: "24px 28px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", letterSpacing: "0.06em", color: "#f5f0eb", fontWeight: 400 }}>Your Details</h2>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.28)", marginTop: 4 }}>All fields required for calculation</p>
              </div>
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={labelCls}>Age <span style={{ color: "#00C8F0" }}>*</span></label>
                    <input style={inputCls} type="number" placeholder="e.g. 25" value={form.age} onChange={e => setForm(f => ({ ...f, age: e.target.value }))} />
                  </div>
                  <div>
                    <label style={labelCls}>Gender <span style={{ color: "#00C8F0" }}>*</span></label>
                    <select style={inputCls} value={form.gender} onChange={e => setForm(f => ({ ...f, gender: e.target.value }))}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={labelCls}>Weight (kg) <span style={{ color: "#00C8F0" }}>*</span></label>
                    <input style={inputCls} type="number" placeholder="e.g. 72" value={form.weight} onChange={e => setForm(f => ({ ...f, weight: e.target.value }))} />
                  </div>
                  <div>
                    <label style={labelCls}>Height (cm) <span style={{ color: "#00C8F0" }}>*</span></label>
                    <input style={inputCls} type="number" placeholder="e.g. 175" value={form.height} onChange={e => setForm(f => ({ ...f, height: e.target.value }))} />
                  </div>
                </div>
                <div>
                  <label style={labelCls}>Activity Level <span style={{ color: "#00C8F0" }}>*</span></label>
                  <select style={inputCls} value={form.activity} onChange={e => setForm(f => ({ ...f, activity: e.target.value }))}>
                    {ACTIVITY.map(a => <option key={a.factor} value={a.factor}>{a.label}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelCls}>Your Goal <span style={{ color: "#00C8F0" }}>*</span></label>
                  <select style={inputCls} value={form.goal} onChange={e => setForm(f => ({ ...f, goal: e.target.value }))}>
                    {GOALS.map(g => <option key={g.adjust} value={g.adjust}>{g.label}</option>)}
                  </select>
                </div>

                {/* Formula preview */}
                <div style={{ padding: "14px 16px", background: "rgba(0,200,240,0.04)", border: "1px solid rgba(0,200,240,0.09)", borderRadius: 10, fontSize: "0.72rem", color: "rgba(255,255,255,0.28)", lineHeight: 1.9, fontFamily: "monospace" }}>
                  <span style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Formula Used</span><br />
                  BMR = (10 × kg) + (6.25 × cm) − (5 × age) {form.gender === "male" ? "+ 5" : "− 161"}<br />
                  TDEE = BMR × {form.activity}
                </div>

                <button
                  onClick={calculate}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "0.9rem 1.5rem", borderRadius: 999, background: "#00C8F0", color: "#09090b", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.875rem", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,200,240,0.25)", transition: "background 0.2s, transform 0.2s", letterSpacing: "0.02em" }}
                >
                  <Flame size={15} />
                  Calculate My Calories
                </button>
              </div>
            </div>

            {/* ── Results Panel ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {result ? (
                <>
                  {/* Main result card */}
                  <div style={{ background: "linear-gradient(145deg, rgba(0,200,240,0.07), rgba(9,9,11,0.97))", border: "1px solid rgba(0,200,240,0.14)", borderRadius: 20, padding: "32px 28px" }}>
                    <div style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "#00C8F0", marginBottom: 24, opacity: 0.8 }}>Your Results</div>

                    {/* Three stat blocks */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, marginBottom: 24, background: "rgba(255,255,255,0.04)", borderRadius: 14, overflow: "hidden" }}>
                      {[
                        { label: "BMR", value: result.bmr, sub: "kcal/day", dim: true },
                        { label: "TDEE", value: result.tdee, sub: "kcal/day", dim: true },
                        { label: "Target", value: result.target, sub: "kcal/day", dim: false },
                      ].map((s, i) => (
                        <div key={s.label} style={{ padding: "20px 12px", textAlign: "center", background: i === 2 ? "rgba(0,200,240,0.08)" : "rgba(9,9,11,0.6)", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: i === 2 ? "#00C8F0" : "#f5f0eb", lineHeight: 1, letterSpacing: "0.03em" }}>{s.value.toLocaleString()}</div>
                          <div style={{ fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", marginTop: 6 }}>{s.label}</div>
                          <div style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.2)", marginTop: 2 }}>{s.sub}</div>
                        </div>
                      ))}
                    </div>

                    {/* Goal chip + explanation */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                      <span style={{ padding: "4px 12px", borderRadius: 999, background: `${getGoalColor()}18`, border: `1px solid ${getGoalColor()}30`, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: getGoalColor() }}>
                        {getGoalLabel()}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "rgba(255,255,255,0.45)" }}>
                      Eat approximately <strong style={{ color: "#f5f0eb" }}>{result.target.toLocaleString()} kcal/day</strong> to reach your goal. Reassess every 3–4 weeks as your weight changes.
                    </p>

                    {/* Progress bar: BMR → TDEE → Target */}
                    <div style={{ marginTop: 20, padding: "16px", background: "rgba(0,0,0,0.25)", borderRadius: 10 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.58rem", color: "rgba(255,255,255,0.28)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                        <span>BMR {result.bmr}</span><span>TDEE {result.tdee}</span><span>Target {result.target}</span>
                      </div>
                      <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 999, position: "relative", overflow: "hidden" }}>
                        <div style={{ height: "100%", background: "linear-gradient(90deg, rgba(0,200,240,0.4), #00C8F0)", borderRadius: 999, width: `${Math.min(100, (result.target / (result.tdee * 1.3)) * 100)}%`, transition: "width 0.8s ease" }} />
                      </div>
                    </div>
                  </div>

                  {/* Protein recommendation */}
                  <div style={{ background: "#09090b", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "22px 24px" }}>
                    <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 10 }}>Suggested Protein Intake</div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#f5f0eb", letterSpacing: "0.04em", marginBottom: 6 }}>
                      {Math.round(parseFloat(form.weight) * 1.8)}–{Math.round(parseFloat(form.weight) * 2.2)}
                      <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.3)", marginLeft: 6, fontFamily: "'Inter', sans-serif" }}>g/day</span>
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
                      Based on 1.8–2.2g per kg bodyweight. Prioritise hitting this target daily to preserve and build muscle while in a deficit.
                    </p>
                  </div>

                  {/* CTA */}
                  <Link href="/book" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "0.9rem 1.5rem", borderRadius: 999, background: "#00C8F0", color: "#09090b", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,200,240,0.22)", textAlign: "center" }}>
                    Get a Custom Nutrition Plan <ArrowRight size={14} />
                  </Link>
                </>
              ) : (
                /* Empty state */
                <div style={{ background: "#09090b", border: "1px dashed rgba(0,200,240,0.12)", borderRadius: 20, padding: "56px 40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(0,200,240,0.06)", border: "1px solid rgba(0,200,240,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Flame size={22} color="#00C8F0" strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", fontWeight: 400, color: "#f5f0eb", letterSpacing: "0.04em" }}>Your Results Appear Here</h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.28)", lineHeight: 1.7, maxWidth: 280 }}>
                    Enter your details on the left and hit Calculate to see your personalised calorie targets.
                  </p>
                </div>
              )}

              {/* How it works card */}
              <div style={{ background: "#09090b", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "22px 24px" }}>
                <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 12 }}>How This Works</div>
                <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.8 }}>
                  Uses the <strong style={{ color: "#f5f0eb" }}>Mifflin-St Jeor equation</strong> — validated across multiple studies as the most accurate BMR formula for the general population and endorsed by the Academy of Nutrition and Dietetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDIAN TIPS ── */}
      <section style={{ background: "#09090b", padding: "clamp(64px,8vw,100px) 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#00C8F0" }}>For Indian Diets</span>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 400, letterSpacing: "0.02em", color: "#f5f0eb" }}>
              Things to Keep in <span style={{ color: "#00C8F0" }}>Mind</span>
            </h2>
          </div>
          <div className="calc-tips-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {INDIAN_TIPS.map((t, i) => (
              <div key={t.title} style={{ background: "#0c0c10", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, transition: "border-color 0.3s", position: "relative", overflow: "hidden" }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(0,200,240,0.08)", border: "1px solid rgba(0,200,240,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.9rem", color: "#00C8F0" }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#f5f0eb", lineHeight: 1.3 }}>{t.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.78 }}>{t.tip}</p>
              </div>
            ))}
          </div>
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
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "20px 24px", textAlign: "left", cursor: "pointer", background: "none", border: "none", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#f5f0eb" }}
                >
                  {f.q}
                  {openFaq === i
                    ? <ChevronUp size={15} color="#00C8F0" style={{ flexShrink: 0 }} />
                    : <ChevronDown size={15} color="rgba(255,255,255,0.28)" style={{ flexShrink: 0 }} />
                  }
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.85 }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER + CTA ── */}
      <section style={{ background: "#09090b", padding: "clamp(64px,8vw,100px) 0" }}>
        <div className="container" style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ padding: "16px 20px", background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: 12, marginBottom: 48, fontSize: "0.8rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.8 }}>
            <strong style={{ color: "#fca5a5" }}>Disclaimer:</strong> This calculator provides estimates based on the Mifflin-St Jeor equation. It is for informational purposes only and is not medical or dietary advice. Individual needs vary. Always consult a qualified healthcare professional before making significant dietary changes.
          </div>
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 400, letterSpacing: "0.02em", color: "#f5f0eb" }}>
              Numbers Are the <span style={{ color: "#00C8F0" }}>Starting Point</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.38)", lineHeight: 1.75, maxWidth: 440, fontSize: "0.9rem" }}>
              A calculator tells you what to aim for. A coach helps you actually get there — with a plan, accountability, and weekly adjustments.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/book" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.9rem 2rem", borderRadius: 999, background: "#00C8F0", color: "#09090b", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,200,240,0.25)" }}>
                Get a Custom Plan <ArrowRight size={14} />
              </Link>
              <Link href="/tools/macro-calculator" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.9rem 2rem", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>
                Macro Calculator <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
