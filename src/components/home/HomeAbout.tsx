"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";
import NumberTicker from "@/components/ui/NumberTicker";
import styles from "./Home.module.css";

const STATS = [
  { num: 200, suffix: "+", label: "Clients Coached" },
  { num: 5, suffix: "+", label: "Years Experience" },
  { num: 3, suffix: "", label: "Countries" },
  { num: 98, suffix: "%", label: "Retention Rate" },
];

export default function HomeAbout() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Image column */}
          <BlurFade delay={0.1} className={styles.aboutImgWrap}>
            <div className={styles.aboutImgFrame}>
              <Image
                src="/abhi-1.jpeg"
                alt="Abhinav – Fitness Coach"
                fill
                sizes="(max-width:900px) 100vw, 45vw"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
              {/* Bottom caption */}
              <div className={styles.aboutImgCaption}>
                <span className={styles.aboutImgTag}>NASM Certified</span>
                <span className={styles.aboutImgTag} style={{ background: "rgba(0,200,240,0.15)", color: "#00C8F0", border: "1px solid rgba(0,200,240,0.3)" }}>Hybrid Athlete</span>
              </div>
            </div>

            {/* Floating experience card */}
            <div className={styles.expCard}>
              <span className={styles.expNum}>5+</span>
              <span className={styles.expLabel}>Years<br />Coaching</span>
            </div>
          </BlurFade>

          {/* Content column */}
          <BlurFade delay={0.25} className={styles.aboutContent}>
            <span className={styles.eyebrow}>About Abhinav</span>

            <h2 className={styles.aboutH2}>
              The Coach Who<br />
              <span className={styles.accentText}>Gets It Done</span>
            </h2>

            <p className={styles.aboutPara}>
              I&apos;m an online fitness coach, hybrid athlete, long-distance runner, and content creator.
              My coaching is built around one core belief — <strong>real results come from real consistency</strong>, not shortcuts or fads.
            </p>
            <p className={styles.aboutPara2}>
              Through custom training, smart nutrition, and direct WhatsApp support, I help clients across
              India, UAE, and the UK build stronger bodies and more disciplined minds.
            </p>

            {/* Stats grid */}
            <div className={styles.statGrid}>
              {STATS.map((s, i) => (
                <div key={s.label} className={styles.statBox}>
                  <span className={styles.statBig}>
                    <NumberTicker value={s.num} suffix={s.suffix} duration={1.8} />
                  </span>
                  <span className={styles.statSmall}>{s.label}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className={styles.btnLink}>
              My Full Story <ArrowRight size={16} />
            </Link>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
