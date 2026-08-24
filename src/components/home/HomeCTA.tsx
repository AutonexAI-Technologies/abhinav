import Link from "next/link";
import styles from "./Home.module.css";
const QUOTES = [
  {q:"\"Success is the sum of small efforts, repeated day in and day out.\"",a:"— Robert Collier"},
  {q:"\"Take care of your body. It's the only place you have to live.\"",a:"— Jim Rohn"},
];
export default function HomeCTA() {
  return (
    <section className={`section section-alt ${styles.ctaWrap}`}>
      <div className={styles.ctaGlow}/>
      <div className="container">
        <div className={styles.ctaInner}>
          <span className="eyebrow">Ready to Start?</span>
          <h2 className="d-xl" style={{maxWidth:600,margin:"0 auto"}}>Your Transformation<br/>Starts <span className="text-blue">Today</span></h2>
          <p className={styles.ctaSub}>Fill the intake form — Abhinav reviews every submission personally and will reach out on WhatsApp within 24 hours.</p>
          <div style={{padding:"20px 28px",background:"rgba(0,200,240,0.04)",border:"1px solid rgba(0,200,240,0.10)",borderRadius:"var(--r-lg)",maxWidth:520,textAlign:"center"}}>
            <p style={{fontStyle:"italic",color:"var(--limestone)",fontSize:"0.9rem",lineHeight:1.75}}>{QUOTES[0].q}</p>
            <p style={{fontSize:"0.72rem",color:"var(--faint)",marginTop:8,letterSpacing:"0.08em"}}>{QUOTES[0].a}</p>
          </div>
          <div className={styles.ctaBtns}>
            <Link href="/book" className="btn btn-wa btn-lg">📲 Fill Intake Form &amp; Start</Link>
            <Link href="/pricing" className="btn btn-outline btn-lg">View All Plans</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
