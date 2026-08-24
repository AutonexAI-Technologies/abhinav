"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Clock, Calculator } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";

const CATEGORIES = ["All", "Training", "Nutrition", "Mindset", "Cardio"];

const TOOLS_MINI = [
  { title: "Calorie & TDEE", href: "/tools/calorie-calculator", emoji: "🔥" },
  { title: "Macro Calculator", href: "/tools/macro-calculator", emoji: "📊" },
  { title: "1RM Calculator", href: "/tools/one-rep-max", emoji: "💪" },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "80px 0 56px", borderBottom: "1px solid rgba(0,200,240,0.06)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 64, alignItems: "end" }}>
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>Knowledge Base</span>
              <h1 className="d-hero" style={{ fontSize: "clamp(2.8rem,7vw,6rem)", marginBottom: 20 }}>
                Train Smarter.<br /><span className="text-blue">Eat Better.</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", maxWidth: 520, lineHeight: 1.8 }}>
                Evidence-based articles on training, nutrition, cardio, and the mindset behind lasting transformation — written by Abhinav.
              </p>
            </div>
            {/* Mini tools panel */}
            <div style={{ padding: "28px", background: "rgba(0,200,240,0.04)", border: "1px solid rgba(0,200,240,0.12)", borderRadius: "var(--r-2xl)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                <Calculator size={16} style={{ color: "var(--blue)" }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--blue)" }}>Free Calculators</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {TOOLS_MINI.map(t => (
                  <Link key={t.href} href={t.href} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "rgba(12,13,22,0.8)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "var(--r-lg)", transition: "all .2s" }}>
                    <span style={{ fontSize: "1.2rem" }}>{t.emoji}</span>
                    <span style={{ fontSize: "0.88rem", color: "var(--limestone)", fontWeight: 500 }}>{t.title}</span>
                    <ArrowRight size={13} style={{ color: "var(--blue)", marginLeft: "auto" }} />
                  </Link>
                ))}
              </div>
              <Link href="/tools" className="btn btn-outline btn-sm" style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>
                View All Tools <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: "20px 0", borderBottom: "1px solid rgba(0,200,240,0.05)", position: "sticky", top: "var(--nav-h)", zIndex: 40, background: "rgba(7,8,15,0.92)", backdropFilter: "blur(12px)" }}>
        <div className="container" style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--faint)", marginRight: 6 }}>Filter:</span>
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              style={{
                padding: "7px 18px",
                borderRadius: "9999px",
                fontSize: "0.78rem",
                fontWeight: 600,
                cursor: "pointer",
                border: "1px solid",
                transition: "all .2s",
                background: activeCategory === c ? "var(--grad-blue)" : "rgba(255,255,255,0.03)",
                borderColor: activeCategory === c ? "var(--blue)" : "rgba(255,255,255,0.07)",
                color: activeCategory === c ? "#fff" : "var(--muted)",
              }}
            >
              {c}
            </button>
          ))}
          <span style={{ marginLeft: "auto", fontSize: "0.75rem", color: "var(--faint)" }}>
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* Article Grid */}
      <section className="section">
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--faint)" }}>
              <p style={{ fontSize: "1.1rem" }}>No articles in this category yet — check back soon!</p>
            </div>
          ) : (
            <>
              {/* Featured first post */}
              {filtered[0] && (
                <Link href={`/blog/${filtered[0].slug}`} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, background: "rgba(12,13,22,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "var(--r-2xl)", overflow: "hidden", marginBottom: 24, textDecoration: "none", transition: "all .3s var(--ease)" }}>
                  <div style={{ minHeight: 320, background: "linear-gradient(135deg, rgba(0,200,240,0.08), rgba(12,13,22,0.9))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem", borderRight: "1px solid rgba(0,200,240,0.06)" }}>
                    {filtered[0].emoji}
                  </div>
                  <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ padding: "4px 14px", borderRadius: "9999px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: filtered[0].categoryColor, background: `${filtered[0].categoryColor}18`, border: `1px solid ${filtered[0].categoryColor}30` }}>
                        {filtered[0].category}
                      </span>
                      <span style={{ fontSize: "0.72rem", color: "var(--faint)", display: "flex", alignItems: "center", gap: 4 }}>
                        <Clock size={11} /> {filtered[0].readTime}
                      </span>
                      <span style={{ fontSize: "0.72rem", color: "var(--faint)" }}>{filtered[0].publishDate}</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--ff-display)", fontSize: "2rem", color: "var(--cream)", lineHeight: 1.2 }}>{filtered[0].title}</h2>
                    <p style={{ fontSize: "0.94rem", color: "var(--muted)", lineHeight: 1.8, flex: 1 }}>{filtered[0].excerpt}</p>
                    <div>
                      <div style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--faint)", marginBottom: 10 }}>You&apos;ll learn:</div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                        {filtered[0].whatYouWillLearn.slice(0, 3).map((item, i) => (
                          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.82rem", color: "var(--limestone)" }}>
                            <span style={{ color: "var(--blue)", fontWeight: 700, flexShrink: 0 }}>→</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--blue)", fontWeight: 600, fontSize: "0.88rem" }}>
                      Read Full Article <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              )}

              {/* Rest in grid */}
              {filtered.length > 1 && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                  {filtered.slice(1).map(post => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: "flex", flexDirection: "column", background: "rgba(12,13,22,0.75)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "var(--r-xl)", overflow: "hidden", textDecoration: "none", transition: "all .3s var(--ease)" }}>
                      <div style={{ height: 160, background: "linear-gradient(135deg, rgba(0,200,240,0.06), rgba(12,13,22,0.9))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.2rem", borderBottom: "1px solid rgba(0,200,240,0.05)" }}>
                        {post.emoji}
                      </div>
                      <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span style={{ fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: post.categoryColor, background: `${post.categoryColor}18`, border: `1px solid ${post.categoryColor}30`, padding: "3px 10px", borderRadius: "9999px" }}>{post.category}</span>
                          <span style={{ fontSize: "0.65rem", color: "var(--faint)", display: "flex", alignItems: "center", gap: 3 }}><Clock size={10} />{post.readTime}</span>
                        </div>
                        <h3 style={{ fontFamily: "var(--ff-ui)", fontWeight: 700, fontSize: "0.97rem", color: "var(--cream)", lineHeight: 1.35 }}>{post.title}</h3>
                        <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.72, flex: 1 }}>{post.excerpt}</p>
                        <div style={{ fontSize: "0.72rem", color: "var(--faint)", paddingTop: 12, borderTop: "1px solid rgba(0,200,240,0.05)" }}>{post.publishDate}</div>
                        <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.78rem", color: "var(--blue)", fontWeight: 600 }}>
                          Read Article <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  ))}
                  {/* Coming soon */}
                  <div style={{ display: "flex", flexDirection: "column", background: "rgba(12,13,22,0.4)", border: "1px dashed rgba(255,255,255,0.06)", borderRadius: "var(--r-xl)", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center", gap: 12, minHeight: 280 }}>
                    <span style={{ fontSize: "2rem" }}>✍️</span>
                    <p style={{ fontSize: "0.84rem", color: "var(--faint)", lineHeight: 1.7 }}>More coming soon — follow <strong style={{ color: "var(--blue)" }}>@abhinav._lifts</strong></p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Quote CTA */}
      <section className="section section-alt" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 560, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--ff-display)", fontSize: "3rem", color: "var(--blue)", lineHeight: 1, display: "block", marginBottom: 10 }}>&ldquo;</span>
          <p style={{ fontFamily: "var(--ff-display)", fontSize: "clamp(1.4rem,2.5vw,1.9rem)", color: "var(--cream)", lineHeight: 1.4, marginBottom: 10 }}>Knowledge without action is wasted. Read, apply, repeat.</p>
          <p style={{ fontSize: "0.72rem", color: "var(--faint)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 36 }}>— Abhinav</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book" className="btn btn-primary btn-lg">Start Your Transformation <ArrowRight size={16} /></Link>
            <Link href="/tools" className="btn btn-outline btn-lg">Free Calculators</Link>
          </div>
        </div>
      </section>
    </>
  );
}
