import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Dumbbell, TrendingUp, Zap, PersonStanding } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Resistance training, personal training, meal & workout plans, and cardio programming. Evidence-based, 100% online.",
};

const SERVICES = [
  {
    icon: <Dumbbell size={30}/>,
    badge: "Core Service",
    title: "Resistance Training",
    price: "Included in Coaching",
    desc: "Structured, periodised strength training built around your goals, available equipment, and experience. Progressive overload applied correctly for sustainable muscle and strength gains.",
    includes: ["Periodised 4–6 day programme","Exercise selection based on equipment","Progressive overload system","Deload weeks built in","Accessory work included","Monthly programme rebuild"],
    featured: false,
    accent: "var(--blue)",
  },
  {
    icon: <PersonStanding size={30}/>,
    badge: "Most Popular",
    title: "Personal Training (Online)",
    price: "₹3,999 / month",
    desc: "1-on-1 personalised coaching with weekly WhatsApp check-ins, video form review, and programme adjustments. The closest thing to having a coach with you every day — delivered fully remotely.",
    includes: ["Custom weekly training programme","Macro-tracked nutrition plan","Weekly WhatsApp check-ins","Video form review & feedback","WhatsApp support Mon–Sat","Monthly plan rebuild","Progress tracking"],
    featured: true,
    accent: "var(--blue)",
  },
  {
    icon: <MessageCircle size={30}/>,
    badge: "Combined Plan",
    title: "Meal & Workouts",
    price: "₹3,999 / month",
    desc: "Your training and nutrition, fully integrated. Custom workout programme + macro-tracked meal plan for your dietary preference — Vegetarian, Eggetarian, Non-Veg, or Vegan.",
    includes: ["Custom training programme","Full macro-tracked diet plan","Vegetarian / Non-veg / Vegan options","Meal timing guidance","Sample meal ideas","Supplement recommendations","Weekly check-in"],
    featured: false,
    accent: "var(--blue)",
  },
  {
    icon: <Zap size={30}/>,
    badge: "Specialist",
    title: "Cardio Exercises",
    price: "Included in all plans",
    desc: "Structured cardiovascular programming integrated into your overall plan — from low-intensity steady state (LISS) to high-intensity intervals (HIIT) and hybrid running blocks.",
    includes: ["LISS / HIIT / Zone 2 options","Running programme for beginners","Race prep or distance goals","Hybrid cardio + strength blocks","Cardio-nutrition timing","Recovery & rest day guidance"],
    featured: false,
    accent: "var(--blue)",
  },
];

const PROCESS = [
  {step:"01",title:"Fill the Form",    desc:"Complete the intake form with your goals, training history, lifestyle, and dietary preferences."},
  {step:"02",title:"Abhinav Reviews",  desc:"Every form reviewed personally. You'll hear from Abhinav on WhatsApp within 24 hours."},
  {step:"03",title:"Get Your Plan",    desc:"Fully custom training programme and nutrition plan delivered within 3 days."},
  {step:"04",title:"Execute & Grow",   desc:"Follow the plan with weekly check-ins, form reviews, and continuous adjustments."},
];

const QUOTES = [
  {q:"The successful warrior is the average man, with laser-like focus.",a:"— Bruce Lee"},
  {q:"It never gets easier, you just get stronger.",a:"— Unknown"},
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{padding:"80px 0 80px",borderBottom:"1px solid rgba(0,200,240,0.06)",textAlign:"center"}}>
        <div className="container">
          <span className="eyebrow" style={{display:"block",marginBottom:16}}>Services</span>
          <h1 className="d-hero" style={{fontSize:"clamp(2.8rem,6vw,5.5rem)",marginBottom:20}}>
            Real Coaching.<br/><span className="text-blue">Real Results.</span>
          </h1>
          <p style={{fontSize:"1.05rem",color:"var(--muted)",maxWidth:520,margin:"0 auto",lineHeight:1.78}}>
            No templates. No guesswork. Every programme built from scratch around your body, schedule, and goals.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section">
        <div className="container" style={{display:"flex",flexDirection:"column",gap:28}}>
          {SERVICES.map(s=>(
            <div key={s.title} style={{
              display:"grid",gridTemplateColumns:"1fr 2fr",gap:56,padding:"44px 48px",
              background:s.featured?"linear-gradient(145deg,rgba(0,200,240,0.06),rgba(12,13,22,0.88))":"rgba(12,13,22,0.72)",
              border:`1px solid ${s.featured?"rgba(0,200,240,0.28)":"rgba(255,255,255,0.05)"}`,
              borderRadius:"var(--r-2xl)",
              boxShadow:s.featured?"var(--sh-blue)":"none",
              alignItems:"start",
            }}>
              <div style={{display:"flex",flexDirection:"column",gap:20}}>
                <div style={{display:"inline-block",padding:"3px 14px",borderRadius:"9999px",fontSize:"0.62rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:s.featured?"#07080f":"var(--blue)",background:s.featured?"var(--grad-blue)":"var(--blue-subtle)",border:s.featured?"none":"1px solid var(--blue-border)",width:"fit-content"}}>{s.badge}</div>
                <div style={{color:"var(--blue)"}}>{s.icon}</div>
                <h2 style={{fontFamily:"var(--ff-display)",fontSize:"1.8rem",color:"var(--cream)",lineHeight:1.15}}>{s.title}</h2>
                <div style={{fontFamily:"var(--ff-display)",fontSize:"1.6rem",color:"var(--cream)",lineHeight:1}}>{s.price}</div>
                <p style={{fontSize:"0.9rem",color:"var(--muted)",lineHeight:1.8}}>{s.desc}</p>
                <Link href="/book" className={`btn ${s.featured?"btn-primary":"btn-outline"}`} style={{display:"inline-flex",gap:8,alignItems:"center",width:"fit-content"}}>
                  Get Started <ArrowRight size={16}/>
                </Link>
              </div>
              <div>
                <p style={{fontSize:"0.62rem",fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--faint)",marginBottom:20}}>What&apos;s Included</p>
                <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:14}}>
                  {s.includes.map(item=>(
                    <li key={item} style={{display:"flex",alignItems:"flex-start",gap:12,fontSize:"0.9rem",color:"var(--muted)",lineHeight:1.6}}>
                      <Check size={15} style={{color:"var(--blue)",flexShrink:0,marginTop:3}}/>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Motivational quote */}
      <section style={{padding:"60px 0",textAlign:"center",background:"rgba(12,13,22,0.6)",borderTop:"1px solid rgba(0,200,240,0.05)",borderBottom:"1px solid rgba(0,200,240,0.05)"}}>
        <div className="container" style={{maxWidth:600,margin:"0 auto"}}>
          <span style={{fontFamily:"var(--ff-display)",fontSize:"3rem",color:"var(--blue)",lineHeight:1,display:"block",marginBottom:10}}>"</span>
          <p style={{fontFamily:"var(--ff-display)",fontSize:"clamp(1.4rem,2.5vw,1.9rem)",color:"var(--cream)",lineHeight:1.4,marginBottom:10}}>{QUOTES[0].q}</p>
          <p style={{fontSize:"0.72rem",color:"var(--faint)",letterSpacing:"0.15em",textTransform:"uppercase"}}>{QUOTES[0].a}</p>
        </div>
      </section>

      {/* Process */}
      <section className="section section-alt">
        <div className="container">
          <div style={{textAlign:"center",marginBottom:60,display:"flex",flexDirection:"column",alignItems:"center",gap:14}}>
            <span className="eyebrow">How It Works</span>
            <h2 className="d-xl">The Process, <span className="text-blue">Step by Step</span></h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
            {PROCESS.map(p=>(
              <div key={p.step} className="glass" style={{padding:"32px 24px",display:"flex",flexDirection:"column",gap:16}}>
                <div style={{fontFamily:"var(--ff-display)",fontSize:"3.2rem",color:"rgba(0,200,240,0.15)",lineHeight:1}}>{p.step}</div>
                <h3 style={{fontFamily:"var(--ff-ui)",fontWeight:600,fontSize:"1.05rem",color:"var(--cream)"}}>{p.title}</h3>
                <p style={{fontSize:"0.875rem",color:"var(--muted)",lineHeight:1.78}}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{textAlign:"center"}}>
        <div className="container">
          <h2 className="d-xl" style={{marginBottom:14}}>Ready to <span className="text-blue">Start?</span></h2>
          <p style={{color:"var(--muted)",fontSize:"1rem",maxWidth:460,margin:"0 auto 36px",lineHeight:1.75}}>
            Fill the intake form — Abhinav will personally reach out within 24 hours to build your plan.
          </p>
          <Link href="/book" className="btn btn-wa btn-lg">📲 Fill Intake Form</Link>
        </div>
      </section>
    </>
  );
}
