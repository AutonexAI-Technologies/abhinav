import styles from "./ServicesTicker.module.css";

const ITEMS = [
  "Resistance Training",
  "Personal Training",
  "Meal & Workouts",
  "Cardio Exercises",
  "Online Coaching",
  "Custom Diet Plans",
  "Hybrid Programming",
  "WhatsApp Support",
];

// Duplicate 3× for a fully seamless loop at all viewport widths
const TRACK = [...ITEMS, ...ITEMS, ...ITEMS];

export default function ServicesTicker() {
  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.track}>
        {TRACK.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
