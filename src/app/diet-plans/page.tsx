import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Diet Plans",
  description: "Custom macro-tracked diet plans for Vegetarian, Eggetarian, Non-Vegetarian, and Vegan lifestyles. Indian-friendly, sustainable, goal-aligned.",
};

const PLANS = [
  {
    emoji:"🌿",type:"Vegetarian",accent:"#4ade80",subtle:"rgba(74,222,128,0.07)",border:"rgba(74,222,128,0.18)",tag:"Plant-Forward",
    desc:"A high-protein vegetarian plan centred around paneer, legumes, dairy, tofu, and whole grains. Indian-meal-friendly with full macro flexibility.",
    sampleMeals:["Oats + Milk + Banana (Breakfast)","Paneer Sabzi + Roti + Dal (Lunch)","Greek Yogurt + Almonds (Snack)","Brown Rice + Rajma + Salad (Dinner)"],
    macros:{P:"120–150g",C:"180–220g",F:"50–70g"},
    features:["Daily calorie & macro targets","Indian food substitution guide","Restaurant-friendly swaps","Weekly grocery template","Supplement recommendations","Flexible meal timing"],
  },
  {
    emoji:"🥚",type:"Eggetarian",accent:"#fbbf24",subtle:"rgba(251,191,36,0.07)",border:"rgba(251,191,36,0.18)",tag:"Flexible & High-Protein",
    desc:"The most popular and flexible plan — vegetarian staples plus eggs for superior protein coverage. Ideal for most body composition goals.",
    sampleMeals:["Egg Whites + Oats + Banana (Breakfast)","Egg Curry + Roti + Dal (Lunch)","Boiled Eggs + Fruit (Snack)","Paneer + Rice + Salad (Dinner)"],
    macros:{P:"140–170g",C:"180–220g",F:"55–75g"},
    features:["Highest protein among plant plans","Budget-friendly whole-food focus","Easy-to-hit daily targets","Pre/post workout meal timing","Supplement guide","Calorie cycling options"],
  },
  {
    emoji:"🍗",type:"Non-Vegetarian",accent:"var(--blue)",subtle:"var(--blue-subtle)",border:"var(--blue-border)",tag:"Maximum Performance",
    desc:"Full animal-protein plan with chicken, fish, eggs, and lean meats. Optimised for muscle building, fat loss, and athletic performance.",
    sampleMeals:["Eggs + Chicken Breast + Oats (Breakfast)","Grilled Chicken + Rice + Veggies (Lunch)","Tuna + Crackers (Snack)","Fish + Salad + Roti (Dinner)"],
    macros:{P:"160–200g",C:"180–240g",F:"55–80g"},
    features:["Highest protein capacity","Lean bulk & cut variants","Meal prep guide included","Restaurant ordering guide","Full supplement stack","Advanced calorie cycling"],
  },
  {
    emoji:"🌱",type:"Vegan",accent:"#34d399",subtle:"rgba(52,211,153,0.07)",border:"rgba(52,211,153,0.18)",tag:"100% Plant-Based",
    desc:"A fully plant-based plan using tofu, tempeh, legumes, seeds, and protein supplements — carefully crafted to hit all essential amino acids.",
    sampleMeals:["Tofu Scramble + Oats + Berries (Breakfast)","Lentil Dal + Brown Rice (Lunch)","Hemp Seeds + Smoothie (Snack)","Tempeh + Quinoa + Vegetables (Dinner)"],
    macros:{P:"110–140g",C:"200–250g",F:"50–65g"},
    features:["Complete amino acid profile","B12, Iron & Zinc optimised","Vegan protein supplement guide","Digestion-friendly choices","Meal prep made simple","Budget & premium options"],
  },
];

const PRINCIPLES = [
  {icon:"🎯",title:"Macro Precision",   desc:"Exact daily protein, carb, and fat targets tailored to your body weight, goal, and activity level."},
  {icon:"🇮🇳",title:"Indian Food First",  desc:"Built around widely available Indian staples — no imported ingredients or unaffordable foods."},
  {icon:"📈",title:"Progressive Adjust", desc:"As your body adapts, your nutrition plan adapts. Monthly recalculations keep progress moving."},
  {icon:"⚡",title:"Performance-Tuned",  desc:"Meal timing, carb cycling, and pre/post-workout nutrition factored in for optimal training output."},
];

export default function DietPlansPage() {
  return (
    <>
      {/* Hero */}
      <section style={{padding:"80px 0 80px",borderBottom:"1px solid rgba(0,200,240,0.06)",textAlign:"center"}}>
        <div className="container">
          <span className="eyebrow" style={{display:"block",marginBottom:16}}>Nutrition</span>
          <h1 className="d-hero" style={{fontSize:"clamp(2.8rem,6vw,5.5rem)",marginBottom:20}}>
            Diet Plans <span className="text-blue">Built for You</span>
          </h1>
          <p style={{fontSize:"1.05rem",color:"var(--muted)",maxWidth:560,margin:"0 auto 36px",lineHeight:1.78}}>
            Macro-tracked, lifestyle-friendly, and 100% Indian-food-compatible. Four plans to match every dietary preference — all fully customised to your body and goals.
          </p>
          <div style={{display:"flex",justifyContent:"center",gap:10,flexWrap:"wrap"}}>
            {["🌿 Vegetarian","🥚 Eggetarian","🍗 Non-Veg","🌱 Vegan"].map(t=>(
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section section-alt">
        <div className="container">
          <div className="diet-principles-grid">
            {PRINCIPLES.map(p=>(
              <div key={p.title} className="glass" style={{padding:"28px 22px",display:"flex",flexDirection:"column",gap:12}}>
                <span style={{fontSize:"1.6rem"}}>{p.icon}</span>
                <h3 style={{fontFamily:"var(--ff-ui)",fontWeight:600,fontSize:"0.95rem",color:"var(--cream)"}}>{p.title}</h3>
                <p style={{fontSize:"0.82rem",color:"var(--muted)",lineHeight:1.78}}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="section">
        <div className="container diet-plans-grid">
          {PLANS.map(plan=>(
            <div key={plan.type} style={{background:plan.subtle,border:`1px solid ${plan.border}`,borderRadius:"var(--r-2xl)",padding:"40px 36px",display:"flex",flexDirection:"column",gap:24}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <div>
                  <span style={{display:"inline-block",fontSize:"0.62rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:plan.accent,background:plan.subtle,border:`1px solid ${plan.border}`,padding:"3px 12px",borderRadius:"9999px",marginBottom:10}}>{plan.tag}</span>
                  <h2 style={{fontFamily:"var(--ff-display)",fontSize:"2rem",color:"var(--cream)"}}>{plan.type}</h2>
                </div>
                <span style={{fontSize:"2.5rem"}}>{plan.emoji}</span>
              </div>
              <p style={{fontSize:"0.9rem",color:"var(--muted)",lineHeight:1.8}}>{plan.desc}</p>

              {/* Sample day */}
              <div>
                <p style={{fontSize:"0.62rem",fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--faint)",marginBottom:12}}>Sample Day</p>
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  {plan.sampleMeals.map((m,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"center",gap:10,fontSize:"0.84rem",color:"var(--muted)"}}>
                      <span style={{width:5,height:5,borderRadius:"50%",background:plan.accent,flexShrink:0}}/>{m}
                    </div>
                  ))}
                </div>
              </div>

              {/* Macros */}
              <div style={{display:"flex",gap:12}}>
                {[["Protein",plan.macros.P],["Carbs",plan.macros.C],["Fats",plan.macros.F]].map(([l,v])=>(
                  <div key={l} style={{flex:1,textAlign:"center",padding:"12px",background:"rgba(0,0,0,0.2)",borderRadius:"var(--r-md)"}}>
                    <div style={{fontFamily:"var(--ff-ui)",fontWeight:700,fontSize:"0.9rem",color:plan.accent}}>{v}</div>
                    <div style={{fontSize:"0.62rem",color:"var(--faint)",marginTop:4,textTransform:"uppercase",letterSpacing:"0.1em"}}>{l}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
                {plan.features.map(f=>(
                  <li key={f} style={{display:"flex",alignItems:"center",gap:10,fontSize:"0.84rem",color:"var(--muted)"}}>
                    <Check size={13} style={{color:plan.accent,flexShrink:0}}/>{f}
                  </li>
                ))}
              </ul>

              <Link href="/book" className="btn btn-primary" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:plan.accent,borderColor:plan.accent,color:"#07080f"}}>
                Get This Plan <ArrowRight size={16}/>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Quote + CTA */}
      <section className="section section-alt" style={{textAlign:"center"}}>
        <div className="container" style={{maxWidth:620,margin:"0 auto"}}>
          <span style={{fontFamily:"var(--ff-display)",fontSize:"3rem",color:"var(--blue)",lineHeight:1,display:"block",marginBottom:10}}>"</span>
          <p style={{fontFamily:"var(--ff-display)",fontSize:"clamp(1.4rem,2.5vw,2rem)",color:"var(--cream)",lineHeight:1.4,marginBottom:10}}>Let food be thy medicine and medicine be thy food.</p>
          <p style={{fontSize:"0.72rem",color:"var(--faint)",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:40}}>— Hippocrates</p>
          <h2 className="d-xl" style={{marginBottom:14,fontSize:"clamp(1.6rem,3vw,2.2rem)"}}>Not Sure Which Plan <span className="text-blue">Fits You?</span></h2>
          <p style={{color:"var(--muted)",marginBottom:32}}>Fill the intake form — Abhinav will assign the right plan based on your goals and lifestyle.</p>
          <Link href="/book" className="btn btn-wa btn-lg">📲 Get My Custom Diet Plan</Link>
        </div>
      </section>
    </>
  );
}
