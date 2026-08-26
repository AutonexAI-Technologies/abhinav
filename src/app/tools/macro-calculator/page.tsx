"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp, BarChart3 } from "lucide-react";

const ACTIVITY = [
  { label: "Sedentary — Desk job, minimal movement", factor: 1.2 },
  { label: "Lightly Active — Light walks, yoga 1–3 days/week", factor: 1.375 },
  { label: "Moderately Active — Gym or sports 3–5 days/week", factor: 1.55 },
  { label: "Very Active — Intense training 6–7 days/week", factor: 1.725 },
  { label: "Extremely Active — Athlete or physical labour + training", factor: 1.9 },
];

const VEG_SOURCES = [
  { food: "Soy Chunks (dry, 50g)", protein: "26g", carbs: "17g", notes: "Best veg protein-to-calorie ratio" },
  { food: "Paneer (100g)", protein: "18g", carbs: "1g", notes: "High fat — account in daily budget" },
  { food: "Tofu, firm (100g)", protein: "12g", carbs: "2g", notes: "Lower fat than paneer, neutral taste" },
  { food: "Greek Yogurt / Hung Curd (150g)", protein: "15g", carbs: "7g", notes: "Great snack, high satiety" },
  { food: "Low-fat Milk (250ml)", protein: "8g", carbs: "12g", notes: "Easy to add throughout the day" },
  { food: "Moong Dal (1 cup cooked)", protein: "14g", carbs: "38g", notes: "Protein + carbs — not a protein food alone" },
];

const NONVEG_SOURCES = [
  { food: "Chicken Breast (100g cooked)", protein: "31g", carbs: "0g", notes: "Most efficient protein source" },
  { food: "Whole Eggs (2 eggs)", protein: "13g", carbs: "1g", notes: "Nutritionally complete" },
  { food: "Egg Whites (100g)", protein: "11g", carbs: "0g", notes: "Near zero fat, very versatile" },
  { food: "Tuna, canned in water (100g)", protein: "26g", carbs: "0g", notes: "Cheapest protein per gram" },
  { food: "Rohu Fish (100g cooked)", protein: "19g", carbs: "0g", notes: "Excellent local option, omega-3 rich" },
  { food: "Prawns (100g cooked)", protein: "24g", carbs: "0g", notes: "Low fat, widely available" },
];

type MacroResult = { tdee: number; calories: number; protein: number; carbs: number; fat: number; diet: string; };

const FAQ = [
  { q: "How much protein do Indians actually need per day?", a: "Active individuals who train regularly need 1.6–2.2g of protein per kg of bodyweight. For a 70kg person training 4 days a week, that's 112–154g of protein daily. The average Indian diet provides only 40–60g — a significant gap that needs to be addressed through food choices and, if needed, supplementation." },
  { q: "Can vegetarians and vegans get enough protein in India?", a: "Yes, but it requires significantly more planning. Key sources are soy chunks (meal maker), paneer, tofu, Greek yogurt, low-fat milk, and whey protein. Without intentional effort, it's very easy for vegetarians to stay stuck at 50–70g of protein, which is far below what's needed for muscle building or preservation." },
  { q: "What is the best macro ratio for fat loss?", a: "There's no universal best ratio — but a reliable framework for fat loss is: protein 35–40% of calories, fats 25–30%, carbs 30–40%. Most importantly, keep protein high to preserve muscle tissue. The specific carb-to-fat split can be adjusted based on your preference and what keeps you full and consistent." },
  { q: "Should I track macros or just calories?", a: "Tracking only calories is a good starting point. Tracking macros is better if you want to optimise body composition — especially protein intake. At minimum, track your daily protein. If you're hitting your protein target, getting roughly correct calories, and training consistently, you'll see results." },
  { q: "How often should I recalculate my macros?", a: "Every 4–6 weeks, or whenever your weight has changed by more than 3–4 kg. Your TDEE changes as your body weight changes, so the calorie and macro targets that worked at 85kg may not be appropriate at 78kg. Recalculating regularly keeps your plan accurate." },
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

const MACRO_COLORS = { protein: "#00C8F0", carbs: "#f59e0b", fat: "#a855f7" };

export default function MacroCalculatorPage() {
  const [form, setForm] = useState({ age: "", gender: "male", weight: "", height: "", activity: "1.55", goal: "fat-loss", diet: "non-veg" });
  const [result, setResult] = useState<MacroResult | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tab, setTab] = useState<"veg" | "nonveg">("nonveg");

  const calculate = () => {
    const age = parseFloat(form.age);
    const wt  = parseFloat(form.weight);
    const ht  = parseFloat(form.height);
    const af  = parseFloat(form.activity);
    if (!age || !wt || !ht) return;

    const bmr  = form.gender === "male"
      ? 10 * wt + 6.25 * ht - 5 * age + 5
      : 10 * wt + 6.25 * ht - 5 * age - 161;
    const tdee = Math.round(bmr * af);

    let calories: number, proteinMultiplier: number, fatPercent: number;
    switch (form.goal) {
      case "fat-loss":     calories = Math.round(tdee - 400); proteinMultiplier = 2.2; fatPercent = 0.25; break;
      case "maintain":     calories = tdee;                    proteinMultiplier = 1.8; fatPercent = 0.28; break;
      default:             calories = Math.round(tdee + 300);  proteinMultiplier = 1.8; fatPercent = 0.28;
    }

    const protein = Math.round(wt * proteinMultiplier);
    const fat     = Math.round((calories * fatPercent) / 9);
    const carbs   = Math.round((calories - protein * 4 - fat * 9) / 4);
    setResult({ tdee, calories, protein, carbs: Math.max(carbs, 50), fat, diet: form.diet });
  };

  const sources = tab === "veg" ? VEG_SOURCES : NONVEG_SOURCES;

  // Macro percentages for visual bar
  const proteinPct = result ? Math.round((result.protein * 4 / result.calories) * 100) : 0;
  const fatPct     = result ? Math.round((result.fat * 9 / result.calories) * 100) : 0;
  const carbsPct   = result ? 100 - proteinPct - fatPct : 0;

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "#09090b", padding: "clamp(72px,9vw,110px) 0 clamp(48px,6vw,72px)", borderBottom: "1px solid rgba(255,255,255,0.05)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 280, background: "radial-gradient(ellipse, rgba(0,200,240,0.07), transparent 65%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#00C8F0", display: "block", marginBottom: 16 }}>Free Tool</span>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem,6vw,5.5rem)", fontWeight: 400, letterSpacing: "0.02em", color: "#f5f0eb", lineHeight: 1, marginBottom: 18 }}>
            Macro <span style={{ color: "#00C8F0" }}>Calculator</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.42)", maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            Get your exact daily protein, carb, and fat targets — with Indian food sources matched to your dietary preference.
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
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", letterSpacing: "0.06em", color: "#f5f0eb", fontWeight: 400 }}>Your Details</h2>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.28)", marginTop: 4 }}>All fields required for calculation</p>
              </div>
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div><label style={labelCls}>Age *</label><input style={inputCls} type="number" placeholder="e.g. 25" value={form.age} onChange={e => setForm(f => ({ ...f, age: e.target.value }))} /></div>
                  <div><label style={labelCls}>Gender *</label>
                    <select style={inputCls} value={form.gender} onChange={e => setForm(f => ({ ...f, gender: e.target.value }))}>
                      <option value="male">Male</option><option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div><label style={labelCls}>Weight (kg) *</label><input style={inputCls} type="number" placeholder="e.g. 72" value={form.weight} onChange={e => setForm(f => ({ ...f, weight: e.target.value }))} /></div>
                  <div><label style={labelCls}>Height (cm) *</label><input style={inputCls} type="number" placeholder="e.g. 175" value={form.height} onChange={e => setForm(f => ({ ...f, height: e.target.value }))} /></div>
                </div>
                <div>
                  <label style={labelCls}>Activity Level *</label>
                  <select style={inputCls} value={form.activity} onChange={e => setForm(f => ({ ...f, activity: e.target.value }))}>
                    {ACTIVITY.map(a => <option key={a.factor} value={a.factor}>{a.label}</option>)}
                  </select>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={labelCls}>Your Goal *</label>
                    <select style={inputCls} value={form.goal} onChange={e => setForm(f => ({ ...f, goal: e.target.value }))}>
                      <option value="fat-loss">Fat Loss</option>
                      <option value="maintain">Maintenance</option>
                      <option value="muscle-gain">Muscle Gain</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelCls}>Diet Preference *</label>
                    <select style={inputCls} value={form.diet} onChange={e => setForm(f => ({ ...f, diet: e.target.value }))}>
                      <option value="non-veg">Non-Vegetarian</option>
                      <option value="veg">Vegetarian</option>
                      <option value="eggetarian">Eggetarian</option>
                      <option value="vegan">Vegan</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={calculate}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "0.9rem 1.5rem", borderRadius: 999, background: "#00C8F0", color: "#09090b", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.875rem", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,200,240,0.25)", letterSpacing: "0.02em" }}
                >
                  <BarChart3 size={15} />
                  Calculate My Macros
                </button>
              </div>
            </div>

            {/* Results Panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {result ? (
                <>
                  {/* Main result card */}
                  <div style={{ background: "linear-gradient(145deg, rgba(0,200,240,0.06), rgba(9,9,11,0.97))", border: "1px solid rgba(0,200,240,0.12)", borderRadius: 20, padding: "28px" }}>
                    <div style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "#00C8F0", marginBottom: 24, opacity: 0.8 }}>Daily Macro Targets</div>

                    {/* 4 stat blocks */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2, background: "rgba(255,255,255,0.03)", borderRadius: 12, overflow: "hidden", marginBottom: 24 }}>
                      {[
                        { label: "Calories", value: result.calories, unit: "kcal", color: "#f5f0eb" },
                        { label: "Protein", value: result.protein, unit: "g", color: MACRO_COLORS.protein },
                        { label: "Carbs", value: result.carbs, unit: "g", color: MACRO_COLORS.carbs },
                        { label: "Fat", value: result.fat, unit: "g", color: MACRO_COLORS.fat },
                      ].map((s, i) => (
                        <div key={s.label} style={{ padding: "18px 8px", textAlign: "center", background: i === 0 ? "rgba(255,255,255,0.03)" : "rgba(9,9,11,0.7)", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.4rem,2.5vw,1.9rem)", color: s.color, lineHeight: 1, letterSpacing: "0.03em" }}>{s.value}</div>
                          <div style={{ fontSize: "0.58rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.28)", marginTop: 5 }}>{s.label}</div>
                          <div style={{ fontSize: "0.56rem", color: "rgba(255,255,255,0.18)", marginTop: 2 }}>{s.unit}/day</div>
                        </div>
                      ))}
                    </div>

                    {/* Stacked macro bar */}
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ display: "flex", gap: 0, height: 8, borderRadius: 999, overflow: "hidden", marginBottom: 10 }}>
                        <div style={{ width: `${proteinPct}%`, background: MACRO_COLORS.protein, transition: "width 0.8s ease" }} />
                        <div style={{ width: `${carbsPct}%`, background: MACRO_COLORS.carbs, transition: "width 0.8s ease" }} />
                        <div style={{ width: `${fatPct}%`, background: MACRO_COLORS.fat, transition: "width 0.8s ease" }} />
                      </div>
                      <div style={{ display: "flex", gap: 16, fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>
                        <span style={{ color: MACRO_COLORS.protein }}>Protein {proteinPct}%</span>
                        <span style={{ color: MACRO_COLORS.carbs }}>Carbs {carbsPct}%</span>
                        <span style={{ color: MACRO_COLORS.fat }}>Fat {fatPct}%</span>
                      </div>
                    </div>

                    <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.32)", lineHeight: 1.7 }}>
                      Your TDEE: <strong style={{ color: "#f5f0eb" }}>{result.tdee} kcal/day</strong>
                    </p>
                  </div>

                  {/* Priority rule */}
                  <div style={{ background: "#09090b", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "20px 24px", borderLeft: "3px solid #00C8F0" }}>
                    <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 8 }}>Priority Rule</div>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.48)", lineHeight: 1.75 }}>
                      Hit your <strong style={{ color: "#00C8F0" }}>protein target first</strong>. Then fill remaining calories with carbs and fats based on your preference and energy needs. Protein is non-negotiable.
                    </p>
                  </div>

                  <Link href="/book" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "0.9rem", borderRadius: 999, background: "#00C8F0", color: "#09090b", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,200,240,0.22)" }}>
                    Get a Full Custom Nutrition Plan <ArrowRight size={14} />
                  </Link>
                </>
              ) : (
                <div style={{ background: "#09090b", border: "1px dashed rgba(0,200,240,0.12)", borderRadius: 20, padding: "56px 40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(0,200,240,0.06)", border: "1px solid rgba(0,200,240,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <BarChart3 size={22} color="#00C8F0" strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", fontWeight: 400, color: "#f5f0eb", letterSpacing: "0.04em" }}>Your Macros Appear Here</h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.28)", lineHeight: 1.7, maxWidth: 280 }}>
                    Fill in your details and hit Calculate to see your personalised macro breakdown.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROTEIN SOURCES TABLE ── */}
      <section style={{ background: "#09090b", padding: "clamp(64px,8vw,100px) 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#00C8F0" }}>Reference</span>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 400, letterSpacing: "0.02em", color: "#f5f0eb" }}>
              Indian <span style={{ color: "#00C8F0" }}>Protein Sources</span>
            </h2>
          </div>

          {/* Tab toggle */}
          <div style={{ display: "flex", gap: 0, marginBottom: 28, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, overflow: "hidden", width: "fit-content", margin: "0 auto 28px" }}>
            {[{ key: "nonveg", label: "Non-Vegetarian" }, { key: "veg", label: "Vegetarian / Vegan" }].map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as "veg" | "nonveg")}
                style={{ padding: "10px 24px", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.82rem", border: "none", cursor: "pointer", transition: "background 0.2s, color 0.2s", background: tab === t.key ? "#00C8F0" : "transparent", color: tab === t.key ? "#09090b" : "rgba(255,255,255,0.42)" }}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "rgba(0,200,240,0.04)", borderBottom: "1px solid rgba(0,200,240,0.10)" }}>
                  {["Food", "Protein", "Carbs", "Notes"].map(h => (
                    <th key={h} style={{ padding: "14px 18px", textAlign: "left", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,0.28)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sources.map((s, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: i % 2 === 0 ? "rgba(9,9,11,0.6)" : "rgba(255,255,255,0.01)" }}>
                    <td style={{ padding: "14px 18px", fontSize: "0.875rem", color: "#f5f0eb", fontWeight: 500 }}>{s.food}</td>
                    <td style={{ padding: "14px 18px", fontSize: "0.875rem", color: "#00C8F0", fontWeight: 700 }}>{s.protein}</td>
                    <td style={{ padding: "14px 18px", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)" }}>{s.carbs}</td>
                    <td style={{ padding: "14px 18px", fontSize: "0.8rem", color: "rgba(255,255,255,0.28)" }}>{s.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {/* ── CTA ── */}
      <section style={{ background: "#09090b", padding: "clamp(64px,8vw,100px) 0" }}>
        <div className="container" style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ padding: "14px 20px", background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: 12, marginBottom: 48, fontSize: "0.8rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.8 }}>
            <strong style={{ color: "#fca5a5" }}>Disclaimer:</strong> This calculator is for informational purposes only and is not medical or dietary advice. Consult a healthcare professional or registered dietitian before making significant dietary changes, especially if you have kidney disease, diabetes, liver conditions, or are pregnant.
          </div>
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 400, letterSpacing: "0.02em", color: "#f5f0eb" }}>
              Macros Are the <span style={{ color: "#00C8F0" }}>Blueprint</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.38)", lineHeight: 1.75, maxWidth: 440, fontSize: "0.9rem" }}>
              Execution is everything. Get a fully personalised programme with training, nutrition, and Abhinav&apos;s direct support.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/book" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.9rem 2rem", borderRadius: 999, background: "#00C8F0", color: "#09090b", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,200,240,0.25)" }}>
                Get a Custom Plan <ArrowRight size={14} />
              </Link>
              <Link href="/tools/one-rep-max" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.9rem 2rem", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>
                1RM Calculator <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
