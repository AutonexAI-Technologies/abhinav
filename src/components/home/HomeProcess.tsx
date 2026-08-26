"use client";
import BlurFade from "@/components/ui/BlurFade";
import styles from "./Home.module.css";

const STEPS = [
  {
    num: "01",
    title: "Fill the Intake Form",
    desc: "Share your goals, lifestyle, dietary preferences, and training history. Abhinav reviews every submission personally.",
    icon: "📋",
  },
  {
    num: "02",
    title: "Get Your Custom Plan",
    desc: "Within 48 hours, receive a fully tailored training program and nutrition plan built around your exact life and goals.",
    icon: "📊",
  },
  {
    num: "03",
    title: "Train with Support",
    desc: "Start training with direct WhatsApp access to your coach. Weekly check-ins, form reviews, and plan rebuilds every month.",
    icon: "💬",
  },
];

export default function HomeProcess() {
  return (
    <section className={styles.process}>
      <div className="container">
        <BlurFade className={styles.sectionHead}>
          <span className={styles.eyebrow}>How It Works</span>
          <h2 className={styles.sectionH2}>
            Simple. <span className={styles.accentText}>Effective.</span> Real.
          </h2>
          <p className={styles.sectionSub}>
            Three steps to start your transformation — no app downloads, no confusion, just coaching.
          </p>
        </BlurFade>

        <div className={styles.processGrid}>
          {STEPS.map((step, i) => (
            <BlurFade key={step.num} delay={0.15 * i}>
              <div className={styles.processCard}>
                {/* Number */}
                <div className={styles.processNumWrap}>
                  <span className={styles.processNum}>{step.num}</span>
                  {i < STEPS.length - 1 && <div className={styles.processLine} />}
                </div>
                {/* Emoji icon */}
                <div className={styles.processIcon}>{step.icon}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
