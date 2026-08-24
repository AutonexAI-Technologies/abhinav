import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./Home.module.css";
const TAGS = ["🏃 Runner","🏋️ Hybrid Athlete","💻 Online Coach","📱 Content Creator","🧠 Mindset Coach","📈 Consistency"];
export default function HomeAbout() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImg}>
            <Image src="/abhi-1.jpeg" alt="Abhinav" fill priority sizes="45vw" style={{objectFit:"cover",objectPosition:"top"}} />
            <div className="img-scrim" />
            <div className={styles.aboutBadge}>
              <span style={{fontSize:"1.4rem"}}>🏆</span>
              <div>
                <div className={styles.badgeT}>Coach & Athlete</div>
                <div className={styles.badgeS}>Online · Global</div>
              </div>
            </div>
          </div>
          <div className={styles.aboutBody}>
            <span className="eyebrow">About Abhinav</span>
            <h2 className="d-xl">Hi, I&apos;m <span className="text-blue">Abhinav</span></h2>
            <p style={{fontSize:"1rem",lineHeight:1.85,color:"var(--limestone)"}}>
              I&apos;m an online fitness coach, hybrid athlete, long-distance runner, and content creator.
              My coaching is built around one core belief — <strong style={{color:"var(--cream)"}}>real results come from real consistency</strong>, not shortcuts.
            </p>
            <p style={{fontSize:"0.95rem",lineHeight:1.8,color:"var(--muted)"}}>
              Through custom training, smart nutrition, and close WhatsApp support, I help clients across
              India, UAE, and the UK build stronger bodies and more disciplined minds.
            </p>
            <div className={styles.tagRow}>{TAGS.map(t=><span key={t} className={styles.tag}>{t}</span>)}</div>
            <Link href="/about" className="btn btn-primary" style={{width:"fit-content",display:"inline-flex",gap:8,alignItems:"center"}}>
              My Full Story <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
