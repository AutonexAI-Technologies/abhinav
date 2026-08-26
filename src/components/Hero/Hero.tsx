"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Apple, Footprints } from "lucide-react";
import styles from "./Hero.module.css";

const WORDS = ["Transform", "Redefine", "Rebuild", "Elevate"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const t = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className={styles.hero}>
      {/* ── Full-bleed founder image ── */}
      <div className={`${styles.imageBleed} ${visible ? styles.imageVisible : ""}`}>
        <Image
          src="/abhi-3.jpeg"
          alt="Abhinav – Online Fitness Coach"
          fill
          priority
          className={styles.img}
          sizes="65vw"
        />
        {/* Left gradient fade into dark bg */}
        <div className={styles.leftFade} />
        {/* Bottom gradient */}
        <div className={styles.bottomFade} />

        {/* Floating glass card 1 — Nutrition */}
        <div className={`${styles.card} ${styles.cardLeft} ${visible ? styles.cardVisible : ""}`}>
          <div className={styles.cardIcon} style={{ background: "rgba(0,200,240,0.15)" }}>
            <Apple size={16} color="#00C8F0" />
          </div>
          <div>
            <div className={styles.cardTitle}>Daily Nutrition</div>
            <div className={styles.cardSub}>2800 kcal target</div>
          </div>
        </div>

        {/* Floating glass card 2 — Consistency */}
        <div className={`${styles.card} ${styles.cardRight} ${visible ? styles.cardVisible : ""}`}>
          <div className={styles.cardIcon} style={{ background: "rgba(0,200,240,0.12)" }}>
            <Footprints size={16} color="#00C8F0" />
          </div>
          <div>
            <div className={styles.cardTitle}>Daily Steps</div>
            <div className={styles.cardProgress}>
              <div className={styles.progressTrack}>
                <div className={styles.progressBar} style={{ width: "72%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Left content ── */}
      <div className={`container ${styles.inner}`}>
        <div className={`${styles.left} ${visible ? styles.visible : ""}`}>

          {/* Pill badge */}
          <div className={styles.badge}>
            <span className="live-dot" />
            <span>Abhinav Lifts</span>
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            <span className={styles.h1Line1}>
              <span key={wordIdx} className={styles.wordAnim}>{WORDS[wordIdx]}</span>
              {" "}the way
            </span>
            <span className={styles.h1Line2}>You Look</span>
          </h1>

          <p className={styles.sub}>
            Join hundreds who have transformed their lives through
            science-backed fitness programs — personalised training,
            real nutrition, and relentless accountability.
          </p>

          {/* CTA buttons */}
          <div className={styles.ctaRow}>
            <Link href="/book" className={styles.btnPrimary}>
              Start Your Journey <ArrowRight size={15} />
            </Link>
            <Link href="/services" className={styles.btnDark}>
              View Programs
            </Link>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>200+</span>
              <span className={styles.statLabel}>Clients Coached</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>Years of Experience</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLabel}>Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
