import styles from "./Home.module.css";
const ITEMS = ["Resistance Training","Personal Training","Meal & Workouts","Cardio Exercises","Online Coaching","Custom Diet Plans","Hybrid Programming","WhatsApp Support","Form Video Review","Weekly Check-ins","Fat Loss","Muscle Building"];
export default function HomeTrustStrip() {
  const d = [...ITEMS,...ITEMS];
  return (
    <div className={styles.trustStrip}>
      <div className={styles.marqueeTrack}>
        {d.map((t,i) => <span key={i} className={styles.trustItem}><span className={styles.trustDot}/>{t}</span>)}
      </div>
    </div>
  );
}
