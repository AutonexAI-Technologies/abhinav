import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import styles from "./Home.module.css";
const PLANS = [
  {name:"Consultation",price:"₹499",per:"one-time",desc:"45-min 1-on-1 call to map your transformation path.",feats:["Goal & lifestyle assessment","Training overview","Diet snapshot","WhatsApp Q&A (48h)"],feat:false,cta:"Book Call"},
  {name:"Online Coaching",price:"₹3,999",per:"/ month",desc:"Full coaching — training, nutrition & weekly support.",feats:["Custom training program","Macro nutrition plan","Weekly check-ins","Form video review","WhatsApp Mon–Sat","Monthly rebuild"],feat:true,badge:"Most Popular",cta:"Start Now"},
  {name:"3-Month Transform",price:"₹9,999",per:"3 months",desc:"Complete body transformation with full support.",feats:["All Coaching features","3-month roadmap","Monthly video calls","Mindset coaching","Priority support"],feat:false,cta:"Get Started"},
];
export default function HomePricing() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.sh}>
          <span className="eyebrow">Pricing</span>
          <h2 className="d-xl">Simple, <span className="text-blue">Transparent</span> Plans</h2>
          <p style={{fontSize:"1rem",color:"var(--muted)",maxWidth:480,lineHeight:1.7}}>No hidden fees. No payment portals. Everything goes direct through WhatsApp.</p>
        </div>
        <div className={styles.pGrid}>
          {PLANS.map(p=>(
            <div key={p.name} className={`${styles.pCard} ${p.feat?styles.pFeat:""}`}>
              {p.badge&&<div className={styles.pBadge}>{p.badge}</div>}
              <div className={styles.pName}>{p.name}</div>
              <div className={styles.pPrice}>{p.price}<span className={styles.pPer}> {p.per}</span></div>
              <div className={styles.pDesc}>{p.desc}</div>
              <ul className={styles.pFeats}>{p.feats.map(f=><li key={f}><Check size={13}/>{f}</li>)}</ul>
              <Link href="/book" className={`btn ${p.feat?"btn-primary":"btn-outline"} ${styles.pCta}`}>{p.cta} <ArrowRight size={15}/></Link>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:36}}>
          <Link href="/pricing" className="btn btn-outline">View Full Pricing & FAQ</Link>
        </div>
      </div>
    </section>
  );
}
