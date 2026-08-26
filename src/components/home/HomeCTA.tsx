"use client";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";
import styles from "./Home.module.css";

export default function HomeCTA() {
  return (
    <section className={styles.cta}>
      {/* Background glow */}
      <div className={styles.ctaGlow} />
      <div className={styles.ctaGlow2} />

      {/* Noise texture overlay */}
      <div className={styles.ctaNoise} />

      <div className="container">
        <div className={styles.ctaInner}>
          <BlurFade delay={0}>
            <span className={styles.eyebrow}>Ready to Start?</span>
          </BlurFade>

          <BlurFade delay={0.15}>
            <h2 className={styles.ctaH2}>
              Your Transformation<br />
              Starts <span className={styles.accentText}>Today</span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.25}>
            <p className={styles.ctaSub}>
              Fill the intake form — Abhinav reviews every submission personally
              and will reach out on WhatsApp within 24 hours.
            </p>
          </BlurFade>

          {/* Quote */}
          <BlurFade delay={0.35}>
            <div className={styles.ctaQuote}>
              <span className={styles.ctaQuoteMark}>"</span>
              <p>Discipline is doing what needs to be done, even when you don&apos;t feel like doing it.</p>
            </div>
          </BlurFade>

          <BlurFade delay={0.45}>
            <div className={styles.ctaBtns}>
              <Link href="/book" className={styles.btnPrimary}>
                <MessageCircle size={17} />
                Fill Intake Form & Start
              </Link>
              <Link href="/pricing" className={styles.btnDark}>
                View All Plans <ArrowRight size={15} />
              </Link>
            </div>
          </BlurFade>

          {/* Trust line */}
          <BlurFade delay={0.55}>
            <p className={styles.ctaTrust}>
              <span className="live-dot" style={{ marginRight: 8 }} />
              Accepting new clients · Responds within 24 hours
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
