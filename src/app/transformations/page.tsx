import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Transformations | Abhinav Lifts",
  description:
    "Real client transformations from Abhinav Lifts — fat loss, muscle building, and body recomposition results from India, UAE, and the UK. Evidence-based programming, real results.",
};

const TESTIMONIALS = [
  {
    name: "Rahul S.",
    location: "Hyderabad, India",
    age: 27,
    goal: "Fat Loss",
    duration: "12 Weeks",
    lost: "14 kg",
    quote:
      "I had tried multiple diets before and always ended up gaining the weight back. Abhinav's approach was completely different — no crash dieting, no extreme restriction. Just sustainable, progressive programming. By week 8, I had lost 10 kg and was actually stronger than when I started.",
    beforeWeight: "91 kg",
    afterWeight: "77 kg",
    highlight: "14 kg lost in 12 weeks while gaining strength",
    initials: "RS",
    accentColor: "#00C8F0",
  },
  {
    name: "Priya M.",
    location: "Dubai, UAE",
    age: 31,
    goal: "Body Recomposition",
    duration: "16 Weeks",
    lost: "9 kg",
    quote:
      "As someone who has always struggled with finding a diet that worked around Indian vegetarian food, I was sceptical. Abhinav built a plan completely tailored to my food culture and preferences. The weekly check-ins kept me accountable — I never felt like I was doing this alone.",
    beforeWeight: "68 kg",
    afterWeight: "59 kg",
    highlight: "9 kg lost, visible muscle definition, maintained Indian vegetarian diet",
    initials: "PM",
    accentColor: "#f59e0b",
  },
  {
    name: "Arjun K.",
    location: "London, UK",
    age: 29,
    goal: "Hybrid Performance",
    duration: "20 Weeks",
    lost: "18 kg",
    quote:
      "I came to Abhinav wanting to get stronger AND run a half-marathon — everyone told me you can't do both effectively. Abhinav proved them wrong. His hybrid programming is intelligent, progressive, and genuinely changed how I think about fitness.",
    beforeWeight: "102 kg",
    afterWeight: "84 kg",
    highlight: "18 kg lost, half-marathon completed, personal bests in squat and deadlift",
    initials: "AK",
    accentColor: "#a855f7",
  },
];

const TIMELINE = [
  {
    week: "Week 1–2",
    title: "Programme Delivered",
    desc: "Your fully custom training programme and nutrition plan are delivered on Day 1. First check-in at the end of Week 2 to fine-tune form, adjust targets, and address any early challenges.",
  },
  {
    week: "Week 3–6",
    title: "Momentum Builds",
    desc: "Visible progress begins. Training intensity scales progressively. Nutrition is adjusted based on your body's weekly response — no guessing, no one-size-fits-all.",
  },
  {
    week: "Week 7–10",
    title: "Significant Changes",
    desc: "This is where transformations become clearly visible. Strength personal bests are hit. Habits are fully embedded. The discipline built in the early weeks pays off here.",
  },
  {
    week: "Week 11–12+",
    title: "Milestone & Next Phase",
    desc: "Transformation milestone reached. The programme is completely rebuilt for the next phase — continued fat loss, muscle-building, or maintenance. The journey continues.",
  },
];

const STATS = [
  { num: "200+", label: "Clients Coached" },
  { num: "3", label: "Countries" },
  { num: "12–20", label: "Avg. Week Results" },
  { num: "98%", label: "Completion Rate" },
];

export default function TransformationsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "#09090b",
          padding: "clamp(80px,10vw,120px) 0 clamp(60px,8vw,100px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
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
            width: 700,
            height: 350,
            background: "radial-gradient(ellipse, rgba(0,200,240,0.08), transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#00C8F0",
              display: "block",
              marginBottom: 20,
            }}
          >
            Client Results
          </span>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "#f5f0eb",
              lineHeight: 1,
              marginBottom: 24,
            }}
          >
            Real People.{" "}
            <span style={{ color: "#00C8F0" }}>Real Results.</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.42)",
              maxWidth: 560,
              margin: "0 auto 40px",
            }}
          >
            Every client is on a fully personalised programme — no templates, no generic plans.
            These results come from disciplined training, smart nutrition, and consistent weekly accountability.
            No crash diets. No unsustainable routines.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 0,
              flexWrap: "wrap",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              overflow: "hidden",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                style={{
                  flex: "1 1 140px",
                  padding: "24px 16px",
                  textAlign: "center",
                  background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
                  borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    color: "#f5f0eb",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.28)",
                    marginTop: 6,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT STORIES ── */}
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
              Client Stories
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
              What Clients <span style={{ color: "#00C8F0" }}>Say</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1fr 2fr" : "2fr 1fr",
                  gap: 0,
                  background: "#09090b",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 20,
                  overflow: "hidden",
                }}
              >
                {/* Stats panel */}
                {i % 2 === 0 && (
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${t.accentColor}10, rgba(9,9,11,0.95))`,
                      borderRight: "1px solid rgba(255,255,255,0.06)",
                      padding: "48px 36px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 24,
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "0.68rem",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: t.accentColor,
                        opacity: 0.8,
                      }}
                    >
                      {t.goal} · {t.duration}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <div
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                          color: t.accentColor,
                          lineHeight: 1,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {t.lost}
                      </div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "rgba(255,255,255,0.32)",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontWeight: 600,
                        }}
                      >
                        Lost / Changed
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: 16,
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.38)",
                      }}
                    >
                      <div>
                        <div style={{ color: "#f5f0eb", fontWeight: 700 }}>{t.beforeWeight}</div>
                        <div style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Before</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.18)" }}>→</div>
                      <div>
                        <div style={{ color: t.accentColor, fontWeight: 700 }}>{t.afterWeight}</div>
                        <div style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>After</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Quote panel */}
                <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", gap: 24, justifyContent: "center" }}>
                  <div
                    style={{
                      padding: "5px 14px",
                      background: `${t.accentColor}12`,
                      border: `1px solid ${t.accentColor}28`,
                      borderRadius: 999,
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: t.accentColor,
                      width: "fit-content",
                    }}
                  >
                    {t.location} · Age {t.age}
                  </div>
                  <blockquote
                    style={{
                      fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
                      lineHeight: 1.85,
                      color: "rgba(255,255,255,0.55)",
                      fontStyle: "italic",
                      margin: 0,
                      borderLeft: `3px solid ${t.accentColor}40`,
                      paddingLeft: 20,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: `${t.accentColor}15`,
                        border: `1px solid ${t.accentColor}25`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.78rem",
                        color: t.accentColor,
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#f5f0eb" }}>{t.name}</div>
                      <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", marginTop: 2 }}>
                        {t.highlight}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats panel (right-side variant) */}
                {i % 2 !== 0 && (
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${t.accentColor}10, rgba(9,9,11,0.95))`,
                      borderLeft: "1px solid rgba(255,255,255,0.06)",
                      padding: "48px 36px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 24,
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "0.68rem",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: t.accentColor,
                        opacity: 0.8,
                      }}
                    >
                      {t.goal} · {t.duration}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <div
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                          color: t.accentColor,
                          lineHeight: 1,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {t.lost}
                      </div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "rgba(255,255,255,0.32)",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontWeight: 600,
                        }}
                      >
                        Lost / Changed
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 16, fontSize: "0.78rem", color: "rgba(255,255,255,0.38)" }}>
                      <div>
                        <div style={{ color: "#f5f0eb", fontWeight: 700 }}>{t.beforeWeight}</div>
                        <div style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Before</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.18)" }}>→</div>
                      <div>
                        <div style={{ color: t.accentColor, fontWeight: 700 }}>{t.afterWeight}</div>
                        <div style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>After</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT TIMELINE ── */}
      <section
        style={{
          background: "#09090b",
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
              The Process
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
              What to <span style={{ color: "#00C8F0" }}>Expect</span>
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.35)",
                maxWidth: 440,
              }}
            >
              A typical 12-week transformation timeline — week by week, what actually happens when you commit to the process.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 2,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            {TIMELINE.map((t, i) => (
              <div
                key={t.week}
                style={{
                  padding: "36px 28px",
                  background: "#09090b",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2.8rem",
                    color: "rgba(0,200,240,0.14)",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                  }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#00C8F0",
                    opacity: 0.7,
                  }}
                >
                  {t.week}
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
                  {t.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.78,
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO NOTE ── */}
      <section
        style={{
          background: "#0c0c10",
          padding: "clamp(60px,8vw,100px) 0",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: 640,
              margin: "0 auto",
              padding: "40px 48px",
              background: "#09090b",
              border: "1px solid rgba(255,255,255,0.06)",
              borderLeft: "3px solid #00C8F0",
              borderRadius: "0 16px 16px 0",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: "#f5f0eb",
              }}
            >
              Before & After Photos
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.42)",
              }}
            >
              Visual transformation photos are being compiled and verified with full client consent.
              Every result shown will be real, unedited, and clearly documented with timeline and programme details.
              Follow <strong style={{ color: "#00C8F0" }}>@abhinav_.lifts</strong> on Instagram for regular real-time client updates and progress posts.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                "No filters. No editing.",
                "Client-consented only.",
                "Full context provided.",
              ].map((p) => (
                <div
                  key={p}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.42)",
                  }}
                >
                  <CheckCircle2 size={12} color="#00C8F0" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "#09090b",
          padding: "clamp(80px,10vw,120px) 0",
          textAlign: "center",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: 560,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
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
            Your Story Could<br />
            <span style={{ color: "#00C8F0" }}>Be Next</span>
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.38)",
              maxWidth: 400,
            }}
          >
            Fill the intake form. Abhinav reviews every submission personally and responds within 24 hours.
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
            }}
          >
            Start Your Transformation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
