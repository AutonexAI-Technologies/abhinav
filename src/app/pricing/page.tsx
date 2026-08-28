import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for online coaching, diet plans, and consultation calls. No hidden fees.",
};

const PLANS = [
  {
    name:"1-on-1 Consultation",price:"₹499",period:"one-time",
    desc:"A focused 45-min call to map out your transformation path.",
    features:["Goal & lifestyle assessment","Training overview","Diet snapshot","Personalised next-step roadmap","WhatsApp Q&A (48 hours)"],
    feat:false,cta:"Book Consultation",
  },
  {
    name:"Online Coaching",price:"₹3,999",period:"per month",
    desc:"Full-stack coaching — custom training, nutrition & weekly support.",
    features:["Custom weekly training programme","Macro-tracked nutrition plan","Weekly WhatsApp check-ins","Video form review & feedback","WhatsApp Mon–Sat","Monthly programme rebuild","Progress tracking & adjustments"],
    feat:true,badge:"Most Popular",cta:"Start Coaching",
  },
  {
    name:"3-Month Transformation",price:"₹9,999",period:"3 months",
    desc:"Complete body transformation with dedicated full support.",
    features:["All Online Coaching features","3-month periodised roadmap","Monthly video call check-ins","Mindset & habit coaching","Priority WhatsApp response","6-week midpoint review","Free consultation call"],
    feat:false,cta:"Start Transformation",
  },
  {
    name:"Hybrid Programming",price:"₹4,499",period:"per month",
    desc:"For athletes combining strength and endurance. Custom periodised plans.",
    features:["Running + lifting combined programme","Periodised weekly structure","Race prep or distance goals","Recovery & injury prevention","Nutrition timing for dual-training","Weekly check-ins"],
    feat:false,cta:"Start Hybrid Training",
  },
];

const FAQ = [
  {q:"How do I pay?",a:"All payments are via UPI, bank transfer, or other methods communicated directly through WhatsApp. No payment portals or cards required."},
  {q:"What happens after I fill the intake form?",a:"Abhinav personally reviews every form and reaches out via WhatsApp within 24 hours to discuss your goals and confirm your programme."},
  {q:"Can I change my plan type?",a:"Yes. If you're not on the right plan, Abhinav will discuss switching options at your next monthly check-in."},
  {q:"What's your refund policy?",a:"Consultation calls are non-refundable once conducted. Monthly coaching fees are non-refundable once your programme has been delivered. See our Terms & Conditions for full details."},
  {q:"Do you offer a diet-only plan?",a:"Currently, nutrition plans are part of all coaching packages. Standalone diet plans are available on request — reach out via WhatsApp to discuss."},
  {q:"Is coaching available to clients outside India?",a:"Yes — clients in India, UAE, UK, and internationally are welcome. All coaching is 100% online via WhatsApp."},
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{padding:"80px 0 80px",borderBottom:"1px solid rgba(0,200,240,0.06)",textAlign:"center"}}>
        <div className="container">
          <span className="eyebrow" style={{display:"block",marginBottom:16}}>Pricing</span>
          <h1 className="d-hero" style={{fontSize:"clamp(2.8rem,6vw,5.5rem)",marginBottom:20}}>
            Simple, <span className="text-blue">Transparent</span> Plans
          </h1>
          <p style={{fontSize:"1.05rem",color:"var(--muted)",maxWidth:520,margin:"0 auto",lineHeight:1.78}}>
            No hidden fees. No payment portals. Everything is communicated and handled directly via WhatsApp.
          </p>
        </div>
      </section>

      {/* Plans grid */}
      <section className="section">
        <div className="container pricing-page-grid">
          {PLANS.map(plan=>(
            <div key={plan.name} style={{
              position:"relative",padding:"40px 36px",
              background:plan.feat?"linear-gradient(145deg,rgba(0,200,240,0.07),rgba(12,13,22,0.88))":"rgba(12,13,22,0.75)",
              border:`1px solid ${plan.feat?"rgba(0,200,240,0.28)":"rgba(255,255,255,0.05)"}`,
              borderRadius:"var(--r-2xl)",display:"flex",flexDirection:"column",gap:20,
              boxShadow:plan.feat?"var(--sh-blue)":"none",
            }}>
              {plan.badge&&<div style={{position:"absolute",top:-13,left:36,background:"var(--grad-blue)",color:"#fff",fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",padding:"4px 18px",borderRadius:"9999px"}}>{plan.badge}</div>}
              <div>
                <div style={{fontSize:"0.68rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--faint)",marginBottom:10}}>{plan.name}</div>
                <div style={{fontFamily:"var(--ff-display)",fontSize:"3rem",color:"var(--cream)",lineHeight:1}}>
                  {plan.price}<span style={{fontFamily:"var(--ff-body)",fontSize:"1rem",color:"var(--faint)"}}> {plan.period}</span>
                </div>
              </div>
              <p style={{fontSize:"0.88rem",color:"var(--muted)",lineHeight:1.72}}>{plan.desc}</p>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10,flex:1}}>
                {plan.features.map(f=>(
                  <li key={f} style={{display:"flex",alignItems:"flex-start",gap:10,fontSize:"0.875rem",color:"var(--muted)"}}>
                    <Check size={14} style={{color:"var(--blue)",flexShrink:0,marginTop:2}}/>{f}
                  </li>
                ))}
              </ul>
              <Link href="/book" className={`btn ${plan.feat?"btn-primary":"btn-outline"}`} style={{width:"100%",justifyContent:"center",display:"flex",gap:8,alignItems:"center"}}>
                {plan.cta} <ArrowRight size={15}/>
              </Link>
            </div>
          ))}
        </div>

        {/* WhatsApp note */}
        <div style={{maxWidth:600,margin:"48px auto 0",padding:"24px 32px",background:"rgba(37,211,102,0.06)",border:"1px solid rgba(37,211,102,0.18)",borderRadius:"var(--r-xl)",textAlign:"center"}}>
          <p style={{fontSize:"0.9rem",color:"var(--limestone)",lineHeight:1.78}}>
            💬 <strong style={{color:"var(--cream)"}}>All payments via WhatsApp</strong> — Abhinav will share payment details directly after reviewing your intake form. No portal, no card required.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container" style={{maxWidth:760,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:60,display:"flex",flexDirection:"column",alignItems:"center",gap:14}}>
            <span className="eyebrow">Questions</span>
            <h2 className="d-xl">Frequently <span className="text-blue">Asked</span></h2>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {FAQ.map(f=>(
              <div key={f.q} style={{padding:"24px 28px",background:"rgba(12,13,22,0.75)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"var(--r-xl)"}}>
                <h3 style={{fontFamily:"var(--ff-ui)",fontWeight:600,fontSize:"1rem",color:"var(--cream)",marginBottom:12}}>{f.q}</h3>
                <p style={{fontSize:"0.875rem",color:"var(--muted)",lineHeight:1.8}}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{textAlign:"center"}}>
        <div className="container">
          <h2 className="d-xl" style={{marginBottom:14}}>Still Have <span className="text-blue">Questions?</span></h2>
          <p style={{color:"var(--muted)",marginBottom:36,maxWidth:460,margin:"0 auto 36px",lineHeight:1.75}}>Reach out on WhatsApp — Abhinav will personally answer any questions about plans or pricing.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/book" className="btn btn-wa btn-lg">📲 Start Your Journey</Link>
            <Link href="/services" className="btn btn-outline btn-lg">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
