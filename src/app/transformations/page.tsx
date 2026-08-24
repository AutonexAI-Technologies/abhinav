import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Transformations",
  description: "Real client transformations from Abhinav Lifts coaching. Before and after results coming soon.",
};

const WHAT_TO_EXPECT = [
  {icon:"📋",week:"Week 1–2",   desc:"Programme delivered. Baseline established. First check-in to fine-tune form and nutrition targets."},
  {icon:"📈",week:"Week 3–6",   desc:"Visible progress begins. Training intensity scales up. Nutrition adjusted based on body response."},
  {icon:"💪",week:"Week 7–10",  desc:"Significant physique changes. Strength personal bests. Habits fully embedded."},
  {icon:"🏆",week:"Week 11–12+",desc:"Transformation milestone. Plan rebuilt for the next phase — continued progress or maintenance."},
];

export default function TransformationsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{padding:"80px 0 80px",borderBottom:"1px solid rgba(0,200,240,0.06)",textAlign:"center"}}>
        <div className="container">
          <span className="eyebrow" style={{display:"block",marginBottom:16}}>Results</span>
          <h1 className="d-hero" style={{fontSize:"clamp(2.8rem,7vw,6rem)",marginBottom:20}}>
            Real Transformations.<br/><span className="text-blue">Coming Soon.</span>
          </h1>
          <p style={{fontSize:"1.05rem",color:"var(--muted)",maxWidth:560,margin:"0 auto 40px",lineHeight:1.8}}>
            Client transformation results are currently being compiled and will be uploaded shortly.
            Each result is from a real client on a fully personalised programme — no filters, no gimmicks.
          </p>

          {/* Placeholder */}
          <div style={{maxWidth:480,margin:"0 auto",padding:"48px",background:"rgba(12,13,22,0.75)",border:"1px dashed rgba(0,200,240,0.18)",borderRadius:"var(--r-2xl)",display:"flex",flexDirection:"column",alignItems:"center",gap:16}}>
            <span style={{fontSize:"3rem"}}>📸</span>
            <h2 style={{fontFamily:"var(--ff-display)",fontSize:"1.6rem",color:"var(--cream)"}}>Yet to be Uploaded</h2>
            <p style={{fontSize:"0.9rem",color:"var(--muted)",lineHeight:1.75,textAlign:"center"}}>
              Transformation photos and client stories are being collected. Check back soon, or follow
              <strong style={{color:"var(--blue)"}}> @abhinav._lifts</strong> on Instagram for regular updates.
            </p>
            <Link href="/book" className="btn btn-primary">
              Be the First Result <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section section-alt">
        <div className="container">
          <div style={{textAlign:"center",marginBottom:56,display:"flex",flexDirection:"column",alignItems:"center",gap:14}}>
            <span className="eyebrow">The Process</span>
            <h2 className="d-xl">What to Expect, <span className="text-blue">Week by Week</span></h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
            {WHAT_TO_EXPECT.map(w=>(
              <div key={w.week} className="glass-blue" style={{padding:"28px 22px",display:"flex",flexDirection:"column",gap:14}}>
                <span style={{fontSize:"1.8rem"}}>{w.icon}</span>
                <h3 style={{fontFamily:"var(--ff-ui)",fontWeight:700,fontSize:"0.82rem",color:"var(--blue)",textTransform:"uppercase",letterSpacing:"0.1em"}}>{w.week}</h3>
                <p style={{fontSize:"0.84rem",color:"var(--muted)",lineHeight:1.78}}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational quote */}
      <section className="section" style={{textAlign:"center"}}>
        <div className="container" style={{maxWidth:700,margin:"0 auto"}}>
          <div style={{padding:"52px 48px",background:"rgba(12,13,22,0.75)",border:"1px solid rgba(0,200,240,0.12)",borderRadius:"var(--r-2xl)"}}>
            <span style={{fontFamily:"var(--ff-display)",fontSize:"4rem",color:"var(--blue)",lineHeight:1,display:"block",marginBottom:16}}>"</span>
            <p style={{fontFamily:"var(--ff-display)",fontSize:"clamp(1.4rem,3vw,2rem)",color:"var(--cream)",lineHeight:1.4,marginBottom:20}}>
              The pain you feel today will be the strength you feel tomorrow.
            </p>
            <p style={{fontSize:"0.78rem",color:"var(--faint)",letterSpacing:"0.15em",textTransform:"uppercase"}}>— Arnold Schwarzenegger</p>
            <div style={{marginTop:40}}>
              <Link href="/book" className="btn btn-wa btn-lg">📲 Start Your Transformation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
