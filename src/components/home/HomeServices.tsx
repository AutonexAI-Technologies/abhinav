import Link from "next/link";
import { ArrowRight, Dumbbell, Apple, Zap, PersonStanding } from "lucide-react";
import styles from "./Home.module.css";
const SVC = [
  {icon:<Dumbbell size={24}/>,   title:"Resistance Training",  desc:"Periodised strength programming designed around your goals, equipment, and experience level. Progressive overload done right.", href:"/services"},
  {icon:<PersonStanding size={24}/>, title:"Personal Training", desc:"1-on-1 coaching with custom weekly programmes, form video reviews, and direct WhatsApp guidance throughout.", href:"/services"},
  {icon:<Apple size={24}/>,      title:"Meal & Workouts",       desc:"Combined training + nutrition plans with macro targets, meal timing, and sample meal guides for your dietary preference.", href:"/diet-plans"},
  {icon:<Zap size={24}/>,        title:"Cardio Exercises",      desc:"Structured cardio blocks integrated into your programme — from LISS to HIIT and hybrid running plans.", href:"/services"},
];
export default function HomeServices() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.sh}>
          <span className="eyebrow">What I Offer</span>
          <h2 className="d-xl">Coaching That <span className="text-blue">Gets Results</span></h2>
          <p style={{fontSize:"1rem",color:"var(--muted)",maxWidth:500,lineHeight:1.75}}>No templates. No guesswork. Every plan built around your body, your schedule, and your goals.</p>
        </div>
        <div className={styles.sGrid}>
          {SVC.map(s=>(
            <Link href={s.href} key={s.title} className={styles.sCard}>
              <div className={styles.sIcon}>{s.icon}</div>
              <h3 className={styles.sTitle}>{s.title}</h3>
              <p className={styles.sDesc}>{s.desc}</p>
              <span className={styles.sArrow}><ArrowRight size={16}/></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
