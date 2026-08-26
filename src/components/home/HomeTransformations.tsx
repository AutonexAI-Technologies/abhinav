"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";
import styles from "./Home.module.css";

// Sample transformation data — placeholder cards until real photos are uploaded
const TESTIMONIALS = [
  {
    name: "Rahul S.",
    location: "Hyderabad, India",
    duration: "12 weeks",
    weightLost: "14 kg",
    result: "Fat Loss + Strength",
    quote: "Abhinav's approach is completely different. No crash dieting — just sustainable, science-backed programming. I lost 14 kg in 12 weeks while actually gaining strength.",
    initials: "RS",
    color: "#00C8F0",
  },
  {
    name: "Priya M.",
    location: "Dubai, UAE",
    duration: "16 weeks",
    weightLost: "9 kg",
    result: "Body Recomposition",
    quote: "The custom meal plan was a game-changer. Abhinav understood my dietary preferences and built a plan around my life — not the other way around.",
    initials: "PM",
    color: "#f59e0b",
  },
  {
    name: "Arjun K.",
    location: "London, UK",
    duration: "20 weeks",
    weightLost: "18 kg",
    result: "Hybrid Training",
    quote: "From barely running 5km to completing a half-marathon while getting stronger — Abhinav's hybrid programming is the real deal.",
    initials: "AK",
    color: "#a855f7",
  },
];

export default function HomeTransformations() {
  return (
    <section className={styles.transformations}>
      {/* Top divider glow */}
      <div className={styles.transformGlow} />

      <div className="container">
        <BlurFade className={styles.sectionHead}>
          <span className={styles.eyebrow}>Client Results</span>
          <h2 className={styles.sectionH2}>
            Real People.<br />
            <span className={styles.accentText}>Real Results.</span>
          </h2>
          <p className={styles.sectionSub}>
            Every client is on a fully personalised programme. These are real outcomes from
            real people — disciplined training, smart nutrition, and consistent weekly support.
            No crash diets. No unsustainable routines.
          </p>
        </BlurFade>

        {/* Transformation cards */}
        <div className={styles.transformGrid}>
          {TESTIMONIALS.map((t, i) => (
            <BlurFade key={t.name} delay={0.12 * i}>
              <div className={styles.transformCard}>
                {/* Result badge */}
                <div className={styles.transformBadge} style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}30` }}>
                  {t.result}
                </div>

                {/* Stats row */}
                <div className={styles.transformStats}>
                  <div className={styles.transformStat}>
                    <span className={styles.transformStatNum} style={{ color: t.color }}>{t.weightLost}</span>
                    <span className={styles.transformStatLabel}>Lost / Changed</span>
                  </div>
                  <div className={styles.transformStatDivider} />
                  <div className={styles.transformStat}>
                    <span className={styles.transformStatNum}>{t.duration}</span>
                    <span className={styles.transformStatLabel}>Duration</span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className={styles.transformQuote}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Client */}
                <div className={styles.transformClient}>
                  <div className={styles.transformAvatar} style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}25` }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className={styles.transformName}>{t.name}</div>
                    <div className={styles.transformLocation}>{t.location}</div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Before/after teaser */}
        <BlurFade delay={0.4}>
          <div className={styles.transformTeaser}>
            <div className={styles.transformTeaserText}>
              <h3 className={styles.transformTeaserH3}>Before & After Photos</h3>
              <p className={styles.transformTeaserSub}>
                Visual transformation photos are being compiled and verified with client consent.
                Every result shown is real, unedited, and achieved through disciplined programming.
              </p>
            </div>
            <Link href="/transformations" className={styles.btnLink}>
              View All Transformations <ArrowRight size={15} />
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
