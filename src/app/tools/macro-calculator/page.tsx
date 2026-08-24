"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

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

type MacroResult = {
  tdee: number; calories: number;
  protein: number; carbs: number; fat: number;
  diet: string;
};

const FAQ = [
  { q: "How much protein do Indians actually need per day?", a: "Active individuals who train regularly need 1.6–2.2g of protein per kg of bodyweight. For a 70kg person training 4 days a week, that's 112–154g of protein daily. The average Indian diet provides only 40–60g — a significant gap that needs to be addressed through food choices and, if needed, supplementation." },
  { q: "Can vegetarians and vegans get enough protein in India?", a: "Yes, but it requires significantly more planning. Key sources are soy chunks (meal maker), paneer, tofu, Greek yogurt, low-fat milk, and whey protein. Without intentional effort, it's very easy for vegetarians to stay stuck at 50–70g of protein, which is far below what's needed for muscle building or preservation." },
  { q: "What is the best macro ratio for fat loss?", a: "There's no universal best ratio — but a reliable framework for fat loss is: protein 35–40% of calories, fats 25–30%, carbs 30–40%. Most importantly, keep protein high to preserve muscle tissue. The specific carb-to-fat split can be adjusted based on your preference and what keeps you full and consistent." },
  { q: "Should I track macros or just calories?", a: "Tracking only calories is a good starting point. Tracking macros is better if you want to optimise body composition — especially protein intake. At minimum, track your daily protein. If you're hitting your protein target, getting roughly correct calories, and training consistently, you'll see results. Precision improves results but perfection isn't required." },
  { q: "How often should I recalculate my macros?", a: "Every 4–6 weeks, or whenever your weight has changed by more than 3–4 kg. Your TDEE changes as your body weight changes, so the calorie and macro targets that worked at 85kg may not be appropriate at 78kg. Recalculating regularly keeps your plan accurate." },
];

export default function MacroCalculatorPage() {
  const [form, setForm] = useState({
    age: "", gender: "male", weight: "", height: "",
    activity: "1.55", goal: "fat-loss", diet: "non-veg",
  });
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

    let calories: number;
    let proteinMultiplier: number;
    let fatPercent: number;

    switch (form.goal) {
      case "fat-loss":
        calories = Math.round(tdee - 400);
        proteinMultiplier = 2.2;
        fatPercent = 0.25;
        break;
      case "maintain":
        calories = tdee;
        proteinMultiplier = 1.8;
        fatPercent = 0.28;
        break;
      default: // muscle-gain
        calories = Math.round(tdee + 300);
        proteinMultiplier = 1.8;
        fatPercent = 0.28;
    }

    const protein = Math.round(wt * proteinMultiplier);
    const fat     = Math.round((calories * fatPercent) / 9);
    const carbs   = Math.round((calories - protein * 4 - fat * 9) / 4);

    setResult({ tdee, calories, protein, carbs: Math.max(carbs, 50), fat, diet: form.diet });
  };

  const sources = tab === "veg" ? VEG_SOURCES : NONVEG_SOURCES;

  return (
    <>
      <section style={{ padding: "80px 0 48px", borderBottom: "1px solid rgba(0,200,240,0.06)", textAlign: "center" }}>
        <div className="container">
          <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>Free Tool</span>
          <h1 className="d-hero" style={{ fontSize: "clamp(2.4rem,5vw,4.5rem)", marginBottom: 16 }}>
            Macro <span className="text-blue">Calculator</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.78 }}>
            Get your exact daily protein, carb, and fat targets — with Indian food sources matched to your dietary preference.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          {/* Input */}
          <div className="calc-card">
            <h2 style={{ fontFamily: "var(--ff-ui)", fontWeight: 700, fontSize: "1.2rem", color: "var(--cream)", marginBottom: 28 }}>Your Details</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="form-group">
                  <label className="form-label">Age (years)</label>
                  <input className="form-input" type="number" placeholder="e.g. 25" value={form.age} onChange={e => setForm(f => ({ ...f, age: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Gender</label>
                  <select className="form-input" value={form.gender} onChange={e => setForm(f => ({ ...f, gender: e.target.value }))}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="form-group">
                  <label className="form-label">Weight (kg)</label>
                  <input className="form-input" type="number" placeholder="e.g. 72" value={form.weight} onChange={e => setForm(f => ({ ...f, weight: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Height (cm)</label>
                  <input className="form-input" type="number" placeholder="e.g. 175" value={form.height} onChange={e => setForm(f => ({ ...f, height: e.target.value }))} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Activity Level</label>
                <select className="form-input" value={form.activity} onChange={e => setForm(f => ({ ...f, activity: e.target.value }))}>
                  {ACTIVITY.map(a => <option key={a.factor} value={a.factor}>{a.label}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Your Goal</label>
                <select className="form-input" value={form.goal} onChange={e => setForm(f => ({ ...f, goal: e.target.value }))}>
                  <option value="fat-loss">Fat Loss — Preserve muscle, shed fat</option>
                  <option value="maintain">Maintenance — Hold current composition</option>
                  <option value="muscle-gain">Muscle Gain — Lean bulk surplus</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Diet Preference</label>
                <select className="form-input" value={form.diet} onChange={e => setForm(f => ({ ...f, diet: e.target.value }))}>
                  <option value="non-veg">Non-Vegetarian</option>
                  <option value="veg">Vegetarian</option>
                  <option value="eggetarian">Eggetarian</option>
                  <option value="vegan">Vegan</option>
                </select>
              </div>
              <button onClick={calculate} className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
                Calculate My Macros
              </button>
            </div>
          </div>

          {/* Results */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {result ? (
              <>
                <div className="calc-result-card">
                  <h3 style={{ fontFamily: "var(--ff-ui)", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--blue)", marginBottom: 24 }}>Daily Macro Targets</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
                    {[
                      { label: "Calories", val: result.calories, unit: "kcal", blue: true },
                      { label: "Protein", val: result.protein, unit: "g", blue: false },
                      { label: "Carbs", val: result.carbs, unit: "g", blue: false },
                      { label: "Fat", val: result.fat, unit: "g", blue: false },
                    ].map(m => (
                      <div key={m.label} className="calc-stat" style={{ background: "rgba(0,0,0,0.25)", borderRadius: "var(--r-md)", padding: "14px 8px" }}>
                        <div className={`calc-stat-value ${m.blue ? "calc-stat-blue" : ""}`} style={{ fontSize: "1.6rem" }}>{m.val}</div>
                        <div className="calc-stat-label" style={{ fontSize: "0.62rem" }}>{m.label}<br />{m.unit}/day</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.8 }}>
                    <strong style={{ color: "var(--cream)" }}>Your TDEE:</strong> {result.tdee} kcal/day &nbsp;·&nbsp;
                    <strong style={{ color: "var(--cream)" }}>Diet:</strong> {result.diet.charAt(0).toUpperCase() + result.diet.slice(1).replace("-", " ")}
                  </div>
                </div>

                <div style={{ padding: "20px 24px", background: "rgba(12,13,22,0.75)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "var(--r-xl)" }}>
                  <p style={{ fontSize: "0.8rem", color: "var(--faint)", marginBottom: 4, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Priority Rule</p>
                  <p style={{ fontSize: "0.88rem", color: "var(--limestone)", lineHeight: 1.75, marginBottom: 14 }}>Hit your <strong style={{ color: "var(--blue)" }}>protein target first</strong>. Then fill remaining calories with carbs and fats based on your preference and energy needs.</p>
                  <Link href="/book" className="btn btn-wa" style={{ width: "100%", justifyContent: "center" }}>
                    📲 Get a Full Custom Nutrition Plan
                  </Link>
                </div>
              </>
            ) : (
              <div style={{ padding: "40px", background: "rgba(12,13,22,0.6)", border: "1px dashed rgba(0,200,240,0.14)", borderRadius: "var(--r-2xl)", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 14 }}>📊</div>
                <p style={{ color: "var(--faint)", fontSize: "0.9rem", lineHeight: 1.7 }}>Your macro breakdown will appear here after you calculate.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Indian Food Sources table */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <span className="eyebrow">Reference</span>
            <h2 className="d-xl">Indian <span className="text-blue">Protein Sources</span></h2>
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 28 }}>
            <button onClick={() => setTab("nonveg")} className={tab === "nonveg" ? "btn btn-primary btn-sm" : "btn btn-outline btn-sm"}>Non-Vegetarian</button>
            <button onClick={() => setTab("veg")} className={tab === "veg" ? "btn btn-primary btn-sm" : "btn btn-outline btn-sm"}>Vegetarian / Vegan</button>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(0,200,240,0.12)" }}>
                  {["Food", "Protein", "Carbs", "Notes"].map(h => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--faint)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sources.map((s, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "14px 16px", fontSize: "0.9rem", color: "var(--cream)", fontWeight: 500 }}>{s.food}</td>
                    <td style={{ padding: "14px 16px", fontSize: "0.9rem", color: "var(--blue)", fontWeight: 600 }}>{s.protein}</td>
                    <td style={{ padding: "14px 16px", fontSize: "0.9rem", color: "var(--muted)" }}>{s.carbs}</td>
                    <td style={{ padding: "14px 16px", fontSize: "0.82rem", color: "var(--faint)" }}>{s.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

      {/* CTA */}
      <section className="section section-alt" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 580, margin: "0 auto" }}>
          <div style={{ padding: "16px 20px", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: "var(--r-lg)", marginBottom: 36, fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.8, textAlign: "left" }}>
            <strong style={{ color: "#fca5a5" }}>Disclaimer:</strong> This calculator is for informational purposes only and is not medical or dietary advice. Consult a healthcare professional or registered dietitian before making significant dietary changes, especially if you have kidney disease, diabetes, liver conditions, or are pregnant.
          </div>
          <h2 className="d-xl" style={{ marginBottom: 14, fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
            Macros are the <span className="text-blue">Blueprint</span>
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: 28, lineHeight: 1.75 }}>Execution is everything. Get a fully personalised programme with training, nutrition, and Abhinav&apos;s direct support.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book" className="btn btn-wa btn-lg">📲 Get a Custom Plan</Link>
            <Link href="/tools/one-rep-max" className="btn btn-outline btn-lg">1RM Calculator <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
