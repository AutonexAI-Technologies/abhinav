"use client";
import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { BorderBeam } from "@/components/ui/BorderBeam";
import BlurFade from "@/components/ui/BlurFade";
import styles from "./Home.module.css";

const PLANS = [
  {
    name: "Consultation",
    price: "₹499",
    per: "one-time",
    desc: "45-min 1-on-1 call to map your transformation path.",
    feats: ["Goal & lifestyle assessment", "Training overview", "Diet snapshot", "WhatsApp Q&A (48h)"],
    featured: false,
    cta: "Book a Call",
    href: "/book",
  },
  {
    name: "Online Coaching",
    price: "₹3,999",
    per: "/ month",
    desc: "Full coaching — training, nutrition & weekly support. The complete experience.",
    feats: ["Custom training program", "Macro nutrition plan", "Weekly check-ins", "Form video review", "WhatsApp Mon–Sat", "Monthly plan rebuild"],
    featured: true,
    badge: "Most Popular",
    cta: "Start Now",
    href: "/book",
  },
  {
    name: "3-Month Transform",
    price: "₹9,999",
    per: "/ 3 months",
    desc: "Complete body transformation with maximum support and accountability.",
    feats: ["Everything in Coaching", "3-month roadmap", "Monthly video calls", "Mindset coaching", "Priority WhatsApp"],
    featured: false,
    cta: "Get Started",
    href: "/book",
  },
];

export default function HomePricing() {
  return (
    <section className={styles.pricing}>
      <div className="container">
        <BlurFade className={styles.sectionHead}>
          <span className={styles.eyebrow}>Pricing</span>
          <h2 className={styles.sectionH2}>
            Simple, <span className={styles.accentText}>Transparent</span> Plans
          </h2>
          <p className={styles.sectionSub}>
            No hidden fees. No payment portals. Everything goes direct through WhatsApp — fast, personal, real.
          </p>
        </BlurFade>

        <div className={styles.pricingGrid}>
          {PLANS.map((plan, i) => (
            <BlurFade key={plan.name} delay={0.12 * i}>
              <SpotlightCard
                className={`${styles.pricingCard} ${plan.featured ? styles.pricingFeatured : ""}`}
              >
                {plan.featured && <BorderBeam duration={8} colorFrom="#00C8F0" colorTo="#ffffff" />}

                {plan.badge && (
                  <div className={styles.pricingBadge}>
                    <Star size={10} fill="currentColor" /> {plan.badge}
                  </div>
                )}

                <div className={styles.pricingName}>{plan.name}</div>

                <div className={styles.pricingPriceRow}>
                  <span className={styles.pricingPrice}>{plan.price}</span>
                  <span className={styles.pricingPer}>{plan.per}</span>
                </div>

                <p className={styles.pricingDesc}>{plan.desc}</p>

                <ul className={styles.pricingFeats}>
                  {plan.feats.map(f => (
                    <li key={f}>
                      <span className={styles.pricingCheck}><Check size={12} /></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={plan.featured ? styles.btnPrimary : styles.btnOutline}
                >
                  {plan.cta} <ArrowRight size={14} />
                </Link>
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5} className={styles.pricingFooter}>
          <Link href="/pricing" className={styles.btnGhost}>
            View full pricing & FAQ →
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}
