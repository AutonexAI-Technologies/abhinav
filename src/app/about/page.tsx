import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Zap, Heart, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Abhinav Lifts — hybrid athlete, online coach, long-distance runner and content creator.",
};

const VALUES = [
  { icon: <Target size={22}/>, title: "Evidence-Based",    desc: "Every programme grounded in sports science. No fads, no bro-science — only what research supports." },
  { icon: <Zap size={22}/>,    title: "Consistency First", desc: "Long-term results come from showing up every day. We build habits, not just workout plans." },
  { icon: <Heart size={22}/>,  title: "Sustainable",       desc: "No crash diets. No burnout. Progress that fits your real life and lasts long-term." },
  { icon: <Trophy size={22}/>, title: "Accountability",    desc: "Weekly check-ins, form reviews, WhatsApp support. You're never left guessing what to do next." },
];

const TIMELINE = [
  { year: "2018", title: "Started Training",          desc: "Began the fitness journey from zero — self-taught through years of consistent research, trial, and dedication." },
  { year: "2020", title: "First Powerlifting Meet",   desc: "Competed locally. Discovered the power of structured programming, periodisation, and smart recovery." },
  { year: "2021", title: "Became a Hybrid Athlete",   desc: "Combined strength training with long-distance running. Competed in half-marathons while maintaining full strength." },
  { year: "2022", title: "Launched Online Coaching",  desc: "Took on first remote clients. Built scalable systems for delivering personalised programmes fully via WhatsApp." },
  { year: "2023", title: "Content Creation",          desc: "Launched @abhinav._lifts on Instagram and YouTube — science-backed training content to a growing community." },
  { year: "2024", title: "Global Client Base",        desc: "Coaching clients across India, UAE, and the UK. Specialising in fat loss, muscle building, and hybrid performance." },
];

const QUOTES = [
  { q: "The secret of getting ahead is getting started.", a: "— Mark Twain" },
  { q: "Take care of your body. It's the only place you have to live.", a: "— Jim Rohn" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{padding:"80px 0 80px",borderBottom:"1px solid rgba(0,200,240,0.06)"}}>
        <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}}>
          <div style={{display:"flex",flexDirection:"column",gap:24}}>
            <span className="eyebrow">About</span>
            <h1 className="d-hero" style={{fontSize:"clamp(3rem,7vw,6rem)"}}>
              Coach.<br/>Athlete.<br/><span className="text-blue">Creator.</span>
            </h1>
            <p style={{fontSize:"1.05rem",lineHeight:1.85,color:"var(--limestone)"}}>
              I&apos;m Abhinav — an online fitness coach, hybrid athlete, long-distance runner, and content creator on a mission to help people build stronger bodies and more disciplined minds.
            </p>
            <p style={{fontSize:"0.95rem",lineHeight:1.8,color:"var(--muted)"}}>
              My coaching is rooted in evidence-based programming, real consistency, and habits that genuinely fit your life — not extreme approaches that are impossible to maintain.
            </p>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              {["📸 @abhinav._lifts","▶️ YouTube: AbhinavLiftsVlogs"].map(s=>(
                <span key={s} style={{padding:"8px 16px",borderRadius:"9999px",border:"1px solid rgba(0,200,240,0.14)",fontSize:"0.78rem",color:"var(--muted)"}}>
                  {s}
                </span>
              ))}
            </div>
            <Link href="/book" className="btn btn-primary" style={{width:"fit-content",display:"inline-flex",gap:8,alignItems:"center"}}>
              Work With Me <ArrowRight size={16}/>
            </Link>
          </div>
          <div style={{position:"relative",height:600,borderRadius:"var(--r-2xl)",overflow:"hidden",border:"1px solid rgba(0,200,240,0.10)"}}>
            <Image src="/abhi-1.jpeg" alt="Abhinav" fill priority sizes="45vw" style={{objectFit:"cover",objectPosition:"top"}}/>
            <div className="img-scrim"/>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{textAlign:"center",marginBottom:60,display:"flex",flexDirection:"column",alignItems:"center",gap:14}}>
            <span className="eyebrow">Philosophy</span>
            <h2 className="d-xl">What I <span className="text-blue">Stand For</span></h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
            {VALUES.map(v=>(
              <div key={v.title} className="glass-blue" style={{padding:"28px 24px",display:"flex",flexDirection:"column",gap:14}}>
                <div style={{width:50,height:50,borderRadius:"var(--r-md)",background:"var(--blue-subtle)",border:"1px solid var(--blue-border)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--blue)"}}>{v.icon}</div>
                <h3 style={{fontFamily:"var(--ff-ui)",fontWeight:600,fontSize:"1rem",color:"var(--cream)"}}>{v.title}</h3>
                <p style={{fontSize:"0.84rem",color:"var(--muted)",lineHeight:1.78}}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOTIVATIONAL QUOTE ── */}
      <section style={{padding:"60px 0",textAlign:"center"}}>
        <div className="container" style={{maxWidth:640,margin:"0 auto"}}>
          <span style={{fontFamily:"var(--ff-display)",fontSize:"4rem",color:"var(--blue)",lineHeight:1,display:"block",marginBottom:14}}>"</span>
          <p style={{fontFamily:"var(--ff-display)",fontSize:"clamp(1.5rem,3vw,2.2rem)",color:"var(--cream)",lineHeight:1.4,marginBottom:12}}>{QUOTES[0].q}</p>
          <p style={{fontSize:"0.75rem",color:"var(--faint)",letterSpacing:"0.15em",textTransform:"uppercase"}}>{QUOTES[0].a}</p>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section section-alt">
        <div className="container" style={{maxWidth:740,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:60,display:"flex",flexDirection:"column",alignItems:"center",gap:14}}>
            <span className="eyebrow">Journey</span>
            <h2 className="d-xl">The Road <span className="text-blue">Here</span></h2>
          </div>
          <div style={{display:"flex",flexDirection:"column"}}>
            {TIMELINE.map((m,i)=>(
              <div key={m.year} style={{display:"grid",gridTemplateColumns:"64px 1fr",gap:24}}>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <div style={{width:44,height:44,borderRadius:"50%",background:"var(--blue-subtle)",border:"1.5px solid var(--blue-border)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--ff-ui)",fontWeight:700,fontSize:"0.68rem",color:"var(--blue)",flexShrink:0}}>{m.year}</div>
                  {i<TIMELINE.length-1&&<div style={{width:1,flex:1,marginTop:8,background:"linear-gradient(to bottom,rgba(0,200,240,0.3),transparent)",minHeight:36}}/>}
                </div>
                <div style={{paddingTop:8,paddingBottom:i<TIMELINE.length-1?36:0}}>
                  <h3 style={{fontFamily:"var(--ff-ui)",fontWeight:600,fontSize:"1.05rem",color:"var(--cream)",marginBottom:8}}>{m.title}</h3>
                  <p style={{fontSize:"0.875rem",color:"var(--muted)",lineHeight:1.8}}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section style={{padding:"60px 0",textAlign:"center"}}>
        <div className="container" style={{maxWidth:640,margin:"0 auto"}}>
          <span style={{fontFamily:"var(--ff-display)",fontSize:"4rem",color:"var(--blue)",lineHeight:1,display:"block",marginBottom:14}}>"</span>
          <p style={{fontFamily:"var(--ff-display)",fontSize:"clamp(1.5rem,3vw,2.2rem)",color:"var(--cream)",lineHeight:1.4,marginBottom:12}}>{QUOTES[1].q}</p>
          <p style={{fontSize:"0.75rem",color:"var(--faint)",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:36}}>{QUOTES[1].a}</p>
          <Link href="/book" className="btn btn-primary btn-lg">Start Your Transformation <ArrowRight size={16}/></Link>
        </div>
      </section>
    </>
  );
}
