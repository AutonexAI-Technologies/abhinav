"use client";
import Link from "next/link";
import { ArrowRight, Dumbbell, Apple, Zap, PersonStanding, Globe, MessageCircle, Trophy, Bike } from "lucide-react";
import MagicCard from "@/components/ui/MagicCard";
import BlurFade from "@/components/ui/BlurFade";
import styles from "./Home.module.css";

const SVC = [
  { icon: <Dumbbell size={22} />, title: "Resistance Training", desc: "Periodised strength programming built around your goals, equipment, and experience level. Progressive overload done right.", tag: "Strength", href: "/services" },
  { icon: <PersonStanding size={22} />, title: "Personal Training", desc: "1-on-1 coaching with custom weekly programs, form video reviews, and direct WhatsApp guidance every step of the way.", tag: "1-on-1", href: "/services" },
  { icon: <Apple size={22} />, title: "Meal & Workouts", desc: "Combined training + nutrition plans with macro targets, meal timing, and sample meal guides for your preference.", tag: "Nutrition", href: "/diet-plans" },
  { icon: <Zap size={22} />, title: "Cardio Exercises", desc: "Structured cardio blocks integrated into your program — from LISS to HIIT and hybrid running plans for endurance.", tag: "Cardio", href: "/services" },
  { icon: <Globe size={22} />, title: "Online Coaching", desc: "Full-service remote coaching — train from anywhere in the world with complete support and accountability.", tag: "Remote", href: "/services" },
  { icon: <MessageCircle size={22} />, title: "WhatsApp Support", desc: "Direct coach access Mon–Sat. No app, no delays. Real answers from a real coach when you need them most.", tag: "Support", href: "/services" },
  { icon: <Trophy size={22} />, title: "Hybrid Programming", desc: "Best of both worlds — strength and running combined into one intelligent program for the hybrid athlete.", tag: "Hybrid", href: "/services" },
  { icon: <Bike size={22} />, title: "Custom Diet Plans", desc: "Fully custom nutrition built around your food culture, dietary needs, and body composition goals.", tag: "Diet", href: "/diet-plans" },
];

export default function HomeServices() {
  return (
    <section className={styles.services}>
      <div className="container">
        <BlurFade className={styles.sectionHead}>
          <span className={styles.eyebrow}>What I Offer</span>
          <h2 className={styles.sectionH2}>
            Coaching That <span className={styles.accentText}>Gets Results</span>
          </h2>
          <p className={styles.sectionSub}>
            No templates. No guesswork. Every plan built around your body, your schedule, and your goals.
          </p>
        </BlurFade>

        <div className={styles.servicesGrid}>
          {SVC.map((s, i) => (
            <BlurFade key={s.title} delay={0.06 * i}>
              <MagicCard className={styles.serviceCard}>
                <Link href={s.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div className={styles.serviceCardInner}>
                    <div className={styles.serviceTopRow}>
                      <div className={styles.serviceIconBox}>{s.icon}</div>
                      <span className={styles.serviceTag}>{s.tag}</span>
                    </div>
                    <h3 className={styles.serviceTitle}>{s.title}</h3>
                    <p className={styles.serviceDesc}>{s.desc}</p>
                    <span className={styles.serviceArrow}><ArrowRight size={15} /></span>
                  </div>
                </Link>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5} className={styles.seeAllWrap}>
          <Link href="/services" className={styles.btnOutline}>
            View All Services <ArrowRight size={15} />
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}
