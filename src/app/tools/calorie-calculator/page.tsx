"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

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
  { emoji: "🍛", title: "Rice & Roti Are Not the Enemy", tip: "They're calorie-dense and easy to overeat — but they're not bad foods. Measure portions (1 cup cooked rice ≈ 210 kcal) and balance with protein at every meal." },
  { emoji: "🛢️", title: "Cooking Oil Is a Hidden Calorie Bomb", tip: "1 tablespoon of any cooking oil — groundnut, coconut, ghee — is approximately 120 kcal. Switching to a non-stick pan and halving your oil use can save 200–300 kcal per day without changing what you eat." },
  { emoji: "☕", title: "Chai & Coffee Add Up Fast", tip: "A typical Indian chai with 2 tsp sugar and 50ml full-fat milk = 60–80 kcal per cup. If you drink 4–6 cups a day, that's 240–480 kcal before you've eaten a single meal." },
  { emoji: "🏠", title: "Home vs Restaurant: A 400 kcal Gap", tip: "The same dish can vary dramatically in calories depending on preparation. A restaurant butter chicken portion can be 600–900 kcal vs 350–450 kcal for a home-cooked equivalent. Cooking at home is genuinely the most powerful calorie-control tool available." },
  { emoji: "🌿", title: "Allam (Ginger) Chutney Over Heavy Chutneys", tip: "Traditional chutneys made with peanuts, tamarind, and oil can be 100–200 kcal per serving. Ginger chutney (allam pachadi) made without excessive oil is far lower in calories and has anti-inflammatory properties." },
];

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
    return "Lean Bulk / Muscle Gain";
  };

  return (
    <>
      <section style={{ padding: "80px 0 48px", borderBottom: "1px solid rgba(0,200,240,0.06)", textAlign: "center" }}>
        <div className="container">
          <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>Free Tool</span>
          <h1 className="d-hero" style={{ fontSize: "clamp(2.4rem,5vw,4.5rem)", marginBottom: 16 }}>
            Calorie & <span className="text-blue">TDEE Calculator</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.78 }}>
            Find your exact daily calorie needs using the Mifflin-St Jeor equation — the gold standard in calorie estimation. Built with Indian diets in mind.
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
                  {ACTIVITY.map(a => (
                    <option key={a.factor} value={a.factor}>{a.label}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Your Goal</label>
                <select className="form-input" value={form.goal} onChange={e => setForm(f => ({ ...f, goal: e.target.value }))}>
                  {GOALS.map(g => (
                    <option key={g.adjust} value={g.adjust}>{g.label}</option>
                  ))}
                </select>
              </div>
              <button onClick={calculate} className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
                Calculate My Calories
              </button>
            </div>
          </div>

          {/* Results */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {result ? (
              <>
                <div className="calc-result-card">
                  <h3 style={{ fontFamily: "var(--ff-ui)", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--blue)", marginBottom: 24 }}>Your Results</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 28 }}>
                    <div className="calc-stat">
                      <div className="calc-stat-value">{result.bmr}</div>
                      <div className="calc-stat-label">BMR<br/>kcal/day</div>
                    </div>
                    <div className="calc-stat">
                      <div className="calc-stat-value">{result.tdee}</div>
                      <div className="calc-stat-label">TDEE<br/>kcal/day</div>
                    </div>
                    <div className="calc-stat">
                      <div className="calc-stat-value calc-stat-blue">{result.target}</div>
                      <div className="calc-stat-label">Target<br/>kcal/day</div>
                    </div>
                  </div>
                  <div style={{ padding: "16px", background: "rgba(0,0,0,0.3)", borderRadius: "var(--r-md)", fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.7 }}>
                    <strong style={{ color: "var(--cream)" }}>Goal: {getGoalLabel()}</strong><br />
                    Eat approximately <strong style={{ color: "var(--blue)" }}>{result.target} kcal/day</strong> to reach your goal. Reassess every 3–4 weeks as your weight changes.
                  </div>
                </div>

                <div style={{ padding: "20px 24px", background: "rgba(12,13,22,0.75)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "var(--r-xl)" }}>
                  <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 14 }}>
                    <strong style={{ color: "var(--cream)" }}>Suggested Protein:</strong> {Math.round(parseFloat(form.weight) * 1.8)}–{Math.round(parseFloat(form.weight) * 2.2)}g/day<br />
                    These numbers are a starting point. Real-world results may require adjustments based on your body&apos;s response.
                  </p>
                  <Link href="/book" className="btn btn-wa" style={{ width: "100%", justifyContent: "center" }}>
                    📲 Get a Custom Nutrition Plan
                  </Link>
                </div>
              </>
            ) : (
              <div style={{ padding: "40px", background: "rgba(12,13,22,0.6)", border: "1px dashed rgba(0,200,240,0.14)", borderRadius: "var(--r-2xl)", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 14 }}>🧮</div>
                <p style={{ color: "var(--faint)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  Enter your details and hit <strong style={{ color: "var(--cream)" }}>Calculate</strong> to see your personalised calorie targets.
                </p>
              </div>
            )}

            {/* How it works */}
            <div style={{ padding: "24px", background: "rgba(12,13,22,0.75)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "var(--r-xl)" }}>
              <h3 style={{ fontFamily: "var(--ff-ui)", fontWeight: 700, fontSize: "0.9rem", color: "var(--cream)", marginBottom: 14 }}>How This Calculator Works</h3>
              <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 10 }}>Uses the <strong style={{ color: "var(--cream)" }}>Mifflin-St Jeor equation</strong> — validated across multiple studies as the most accurate BMR formula for the general population.</p>
              <div style={{ fontSize: "0.78rem", color: "var(--faint)", background: "rgba(0,0,0,0.3)", borderRadius: "var(--r-md)", padding: "14px 16px", lineHeight: 2 }}>
                <strong style={{ color: "var(--limestone)" }}>Male:</strong> BMR = (10 × kg) + (6.25 × cm) − (5 × age) + 5<br />
                <strong style={{ color: "var(--limestone)" }}>Female:</strong> BMR = (10 × kg) + (6.25 × cm) − (5 × age) − 161<br />
                <strong style={{ color: "var(--limestone)" }}>TDEE:</strong> BMR × Activity Factor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Tips */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <span className="eyebrow">For Indian Diets</span>
            <h2 className="d-xl">Things to Keep in <span className="text-blue">Mind</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {INDIAN_TIPS.map(t => (
              <div key={t.title} className="glass" style={{ padding: "24px" }}>
                <span style={{ fontSize: "1.6rem", display: "block", marginBottom: 12 }}>{t.emoji}</span>
                <h3 style={{ fontFamily: "var(--ff-ui)", fontWeight: 600, fontSize: "0.95rem", color: "var(--cream)", marginBottom: 10 }}>{t.title}</h3>
                <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.78 }}>{t.tip}</p>
              </div>
            ))}
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

      {/* Disclaimer + CTA */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ padding: "20px 24px", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.14)", borderRadius: "var(--r-lg)", marginBottom: 40, fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.8 }}>
            <strong style={{ color: "#fca5a5" }}>Disclaimer:</strong> This calculator provides estimates based on the Mifflin-St Jeor equation. It is for informational purposes only and is not medical or dietary advice. Individual needs vary based on metabolism, health conditions, and medications. Always consult a qualified healthcare professional before making significant dietary changes — especially if you have diabetes, thyroid conditions, PCOS, or any other health condition.
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 className="d-xl" style={{ marginBottom: 14, fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>Numbers Are the <span className="text-blue">Starting Point</span></h2>
            <p style={{ color: "var(--muted)", marginBottom: 28, lineHeight: 1.75 }}>A calculator tells you what to aim for. A coach helps you actually get there — with a plan, accountability, and weekly adjustments.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book" className="btn btn-wa btn-lg">📲 Get a Custom Plan from Abhinav</Link>
              <Link href="/tools/macro-calculator" className="btn btn-outline btn-lg">Macro Calculator <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
