import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Zap, Heart, Trophy, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Abhinav | Online Fitness Coach, Hybrid Athlete & Content Creator",
  description:
    "The story behind Abhinav Lifts — hybrid athlete, NASM-certified online coach, long-distance runner and content creator coaching clients across India, UAE & the UK.",
};

const VALUES = [
  {
    icon: <Target size={20} />,
    title: "Evidence-Based Coaching",
    desc: "Every programme is grounded in exercise science and nutritional research. No fads, no bro-science — only what peer-reviewed evidence supports.",
  },
  {
    icon: <Zap size={20} />,
    title: "Consistency Over Intensity",
    desc: "Long-term results come from showing up every single day — not from extreme, unsustainable efforts. We build habits that outlast motivation.",
  },
  {
    icon: <Heart size={20} />,
    title: "Sustainable by Design",
    desc: "No crash diets. No burnout cycles. Progress that genuinely fits your lifestyle and creates lasting change, not temporary results.",
  },
  {
    icon: <Trophy size={20} />,
    title: "Real Accountability",
    desc: "Weekly check-ins, form video reviews, and direct WhatsApp support Mon–Sat. You will never feel lost or unsupported on this journey.",
  },
];

const TIMELINE = [
  {
    year: "2018",
    title: "The Beginning",
    desc: "Started training from zero with no coach, no gym experience — only curiosity and determination. Spent years learning through research, trial, and deliberate practice.",
  },
  {
    year: "2020",
    title: "Structured Programming",
    desc: "Competed in a local powerlifting meet and discovered the power of periodised programming. This changed everything — training stopped being random and started producing real results.",
  },
  {
    year: "2021",
    title: "Becoming a Hybrid Athlete",
    desc: "Combined heavy strength training with long-distance running — competing in half-marathons while maintaining full strength output. Proved that you don't have to choose between the two.",
  },
  {
    year: "2022",
    title: "First Coaching Clients",
    desc: "Took on first remote clients and built scalable systems for delivering fully personalised programmes through WhatsApp. Quickly proved that online coaching could be just as effective as in-person.",
  },
  {
    year: "2023",
    title: "Content & Community",
    desc: "Launched @abhinav_.lifts on Instagram and YouTube — creating science-backed fitness content for a growing community. The mission: make evidence-based training accessible to everyone.",
  },
  {
    year: "2024",
    title: "Global Reach",
    desc: "Coaching clients across India, UAE, and the UK. Specialising in fat loss, muscle building, body recomposition, and hybrid performance programming for everyday people with busy lives.",
  },
];

const CREDENTIALS = [
  "NASM Certified Personal Trainer",
  "Hybrid Athlete — Strength & Endurance",
  "Half-Marathon Competitor",
  "Online Coaching — 200+ Clients",
  "Clients in India, UAE & UK",
  "Evidence-Based Programming",
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "#09090b",
          padding: "clamp(80px,10vw,120px) 0 clamp(60px,8vw,100px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,200,240,0.07), transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div className="container">
          <div className="about-hero-grid">
            {/* Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#00C8F0",
                }}
              >
                About Abhinav
              </span>

              <h1
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(3.5rem, 8vw, 7rem)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  color: "#f5f0eb",
                  lineHeight: 0.95,
                }}
              >
                Coach.{" "}
                <span style={{ color: "#00C8F0" }}>Athlete.</span>
                <br />
                Creator.
              </h1>

              <p
                style={{
                  fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
                  lineHeight: 1.85,
                  color: "rgba(255,255,255,0.55)",
                  maxWidth: 460,
                }}
              >
                I&apos;m Abhinav — an online fitness coach, hybrid athlete, long-distance runner, and content creator. My coaching is built on one principle: <strong style={{ color: "#f5f0eb" }}>real results come from real consistency, not shortcuts.</strong>
              </p>

              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.35)",
                  maxWidth: 420,
                }}
              >
                I work with clients across India, UAE, and the UK — helping them build stronger bodies and more disciplined minds through evidence-based programming and direct, personal support.
              </p>

              {/* Credentials */}
              <div className="about-credentials-grid">
                {CREDENTIALS.map((c) => (
                  <div
                    key={c}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    <CheckCircle2 size={13} color="#00C8F0" strokeWidth={2} />
                    {c}
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {[
                  { label: "Instagram: @abhinav_.lifts", href: "https://www.instagram.com/abhinav_.lifts/" },
                  { label: "abhinavlifts05@gmail.com", href: "mailto:abhinavlifts05@gmail.com" },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      padding: "7px 16px",
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.10)",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>

              <Link
                href="/book"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "0.9rem 2rem",
                  borderRadius: 999,
                  background: "#00C8F0",
                  color: "#09090b",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  width: "fit-content",
                  boxShadow: "0 4px 24px rgba(0,200,240,0.28)",
                  transition: "background 0.2s, transform 0.2s",
                }}
              >
                Work With Me <ArrowRight size={15} />
              </Link>
            </div>

            {/* Image */}
            <div
              style={{
                position: "relative",
                height: "clamp(480px, 65vh, 680px)",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <Image
                src="/abhi-2.jpeg"
                alt="Abhinav – Online Fitness Coach"
                fill
                priority
                sizes="45vw"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(9,9,11,0.7) 0%, transparent 50%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section
        style={{
          background: "#0c0c10",
          padding: "clamp(80px,10vw,120px) 0",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              marginBottom: 64,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#00C8F0",
              }}
            >
              Philosophy
            </span>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 400,
                letterSpacing: "0.02em",
                color: "#f5f0eb",
                lineHeight: 1.05,
              }}
            >
              What I <span style={{ color: "#00C8F0" }}>Stand For</span>
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.38)",
                maxWidth: 480,
              }}
            >
              These are not just values on a page — they are the principles that shape every programme, every check-in, and every conversation with a client.
            </p>
          </div>

          <div className="about-values-grid">
            {VALUES.map((v) => (
              <div
                key={v.title}
                style={{
                  padding: "32px 24px",
                  background: "#09090b",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  transition: "border-color 0.3s",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(0,200,240,0.08)",
                    border: "1px solid rgba(0,200,240,0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#00C8F0",
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#f5f0eb",
                    lineHeight: 1.3,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.84rem",
                    lineHeight: 1.78,
                    color: "rgba(255,255,255,0.38)",
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BREAK ── */}
      <section
        style={{
          background: "#09090b",
          padding: "clamp(60px,8vw,100px) 0",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container" style={{ maxWidth: 680, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              fontStyle: "italic",
              color: "#f5f0eb",
              lineHeight: 1.4,
              marginBottom: 16,
            }}
          >
            &ldquo;Discipline is choosing what you want most over what you want now.&rdquo;
          </p>
          <p
            style={{
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            — Abraham Lincoln
          </p>
        </div>
      </section>

      {/* ── JOURNEY / TIMELINE ── */}
      <section
        style={{
          background: "#0c0c10",
          padding: "clamp(80px,10vw,120px) 0",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              marginBottom: 72,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#00C8F0",
              }}
            >
              The Journey
            </span>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 400,
                letterSpacing: "0.02em",
                color: "#f5f0eb",
                lineHeight: 1.05,
              }}
            >
              The Road <span style={{ color: "#00C8F0" }}>Here</span>
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.35)",
                maxWidth: 440,
              }}
            >
              Six years of building from scratch — not a shortcut in sight. Every year taught a new lesson that now shapes how I coach.
            </p>
          </div>

          <div
            style={{
              maxWidth: 720,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {TIMELINE.map((m, i) => (
              <div
                key={m.year}
                className="about-timeline-item"
              >
                {/* Year + connector line */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "rgba(0,200,240,0.08)",
                      border: "1px solid rgba(0,200,240,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                      color: "#00C8F0",
                      flexShrink: 0,
                    }}
                  >
                    {m.year}
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        flex: 1,
                        marginTop: 8,
                        background:
                          "linear-gradient(to bottom, rgba(0,200,240,0.20), transparent)",
                        minHeight: 40,
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  style={{
                    paddingTop: 10,
                    paddingBottom: i < TIMELINE.length - 1 ? 40 : 0,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#f5f0eb",
                      marginBottom: 10,
                    }}
                  >
                    {m.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.42)",
                      lineHeight: 1.82,
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{
          background: "#09090b",
          padding: "clamp(80px,10vw,120px) 0",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 600,
            height: 300,
            background:
              "radial-gradient(ellipse, rgba(0,200,240,0.09), transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="container"
          style={{
            maxWidth: 580,
            margin: "0 auto",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#00C8F0",
            }}
          >
            Ready?
          </span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "#f5f0eb",
              lineHeight: 1.05,
            }}
          >
            Start Your<br />
            <span style={{ color: "#00C8F0" }}>Transformation</span>
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.38)",
              maxWidth: 400,
            }}
          >
            Fill the intake form — Abhinav reviews every submission personally and
            responds on WhatsApp within 24 hours.
          </p>
          <Link
            href="/book"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "0.9rem 2.4rem",
              borderRadius: 999,
              background: "#00C8F0",
              color: "#09090b",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              boxShadow: "0 4px 28px rgba(0,200,240,0.32)",
              transition: "background 0.2s, transform 0.2s",
            }}
          >
            Work With Me <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
