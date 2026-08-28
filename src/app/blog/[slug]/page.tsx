import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, BookOpen } from "lucide-react";
import { getBlogPost, getAllSlugs, BLOG_POSTS } from "@/lib/blog-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.coverImage] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* ── FULL-WIDTH HERO IMAGE ── */}
      <div style={{ position: "relative", width: "100%", height: "clamp(320px, 45vh, 520px)", overflow: "hidden" }}>
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        {/* Overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,8,15,0.3) 0%, rgba(7,8,15,0.9) 75%, rgba(7,8,15,1) 100%)" }} />
        {/* Meta over image */}
        <div className="container" style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", width: "100%" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", marginBottom: 18 }}>
            <ArrowLeft size={13} /> Back to Blog
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>
            <span style={{ padding: "4px 14px", borderRadius: "9999px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: post.categoryColor, background: `${post.categoryColor}22`, border: `1px solid ${post.categoryColor}50` }}>
              {post.category}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.72rem", color: "rgba(255,255,255,0.5)" }}>
              <Clock size={11} /> {post.readTime} read
            </span>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>{post.publishDate}</span>
          </div>
          <h1 style={{ fontFamily: "var(--ff-display)", fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)", color: "#fff", lineHeight: 1.12, marginBottom: 10, letterSpacing: "-0.02em", maxWidth: 860, textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}>
            {post.title}
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: 680 }}>{post.subtitle}</p>
        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <section style={{ padding: "56px 0 80px" }}>
        <div className="container blog-post-layout" style={{ maxWidth: 1180, margin: "0 auto" }}>

          {/* ── LEFT: Full Article ── */}
          <div>
            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 20px", background: "rgba(0,200,240,0.04)", border: "1px solid rgba(0,200,240,0.10)", borderRadius: "var(--r-xl)", marginBottom: 40, flexWrap: "wrap" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--grad-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ff-display)", color: "#07080f", fontWeight: 700, fontSize: "1.2rem", flexShrink: 0 }}>A</div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--cream)" }}>Abhinav</div>
                <div style={{ fontSize: "0.72rem", color: "var(--faint)" }}>Online Coach · Hybrid Athlete · Content Creator · Hyderabad</div>
              </div>
              <Link href="/book" className="btn btn-primary btn-sm">Work With Me</Link>
            </div>

            {/* What you&apos;ll learn */}
            <div style={{ marginBottom: 48, padding: "28px 32px", background: "rgba(0,200,240,0.05)", border: "1px solid rgba(0,200,240,0.14)", borderRadius: "var(--r-xl)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <BookOpen size={18} style={{ color: "var(--blue)" }} />
                <span style={{ fontFamily: "var(--ff-ui)", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--blue)" }}>What You&apos;ll Learn in This Article</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {post.whatYouWillLearn.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "0.95rem", color: "var(--limestone)", lineHeight: 1.6 }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 22, height: 22, borderRadius: "50%", background: "var(--blue-subtle)", border: "1px solid var(--blue-border)", fontSize: "0.68rem", fontWeight: 700, color: "var(--blue)", flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Article body */}
            <article
              className="article-body"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* In-article CTA */}
            <div style={{ marginTop: 64, padding: "40px 44px", background: "linear-gradient(145deg,rgba(0,200,240,0.08),rgba(12,13,22,0.95))", border: "1px solid rgba(0,200,240,0.20)", borderRadius: "var(--r-2xl)", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: 12 }}>🎯</div>
              <h3 style={{ fontFamily: "var(--ff-display)", fontSize: "2rem", color: "var(--cream)", marginBottom: 12 }}>
                Ready to Apply This?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 480, margin: "0 auto 28px" }}>
                Reading is the first step. If you want a fully personalised programme built around your body, schedule, and goals — Abhinav reviews every form personally and responds within 24 hours.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/book" className="btn btn-wa btn-lg">📲 Book a Free Consultation</Link>
                <Link href="/tools" className="btn btn-outline">Free Calculators</Link>
              </div>
            </div>

            {/* Tags row */}
            <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--faint)" }}>Tags:</span>
              {["Fitness", "India", post.category, "Online Coaching", "Abhinav Lifts"].map(t => (
                <span key={t} style={{ padding: "4px 14px", borderRadius: "9999px", fontSize: "0.72rem", color: "var(--muted)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Sticky Sidebar ── */}
          <aside style={{ position: "sticky", top: "calc(var(--nav-h) + 24px)", display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Table of contents */}
            <div className="article-toc">
              <h4>In This Article</h4>
              <ol>
                {post.tableOfContents.map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{i + 1}. {item.label}</a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Free Tools */}
            <div style={{ padding: "22px", background: "rgba(12,13,22,0.8)", border: "1px solid var(--border-subtle)", borderRadius: "var(--r-xl)" }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--faint)", marginBottom: 14 }}>Free Calculators</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "🔥 Calorie Calculator", href: "/tools/calorie-calculator" },
                  { label: "📊 Macro Calculator", href: "/tools/macro-calculator" },
                  { label: "💪 1RM Calculator", href: "/tools/one-rep-max" },
                ].map(t => (
                  <Link key={t.href} href={t.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "var(--blue-subtle)", border: "1px solid var(--blue-border)", borderRadius: "var(--r-md)", fontSize: "0.8rem", color: "var(--blue-light)" }}>
                    {t.label} <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Coaching CTA */}
            <div style={{ padding: "22px", background: "linear-gradient(145deg,rgba(0,200,240,0.07),rgba(12,13,22,0.9))", border: "1px solid rgba(0,200,240,0.14)", borderRadius: "var(--r-xl)" }}>
              <div style={{ fontSize: "1.4rem", marginBottom: 10 }}>🚀</div>
              <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--cream)", marginBottom: 8 }}>Work Directly With Abhinav</p>
              <p style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 14 }}>Custom programme + nutrition + weekly support. All online, all personalised.</p>
              <Link href="/book" className="btn btn-primary btn-sm" style={{ width: "100%", justifyContent: "center" }}>
                Book a Consultation
              </Link>
            </div>

            {/* Quote */}
            <div style={{ padding: "20px", background: "rgba(12,13,22,0.6)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "var(--r-xl)" }}>
              <p style={{ fontStyle: "italic", fontSize: "0.84rem", color: "var(--limestone)", lineHeight: 1.75 }}>
                &ldquo;The secret to getting ahead is getting started.&rdquo;
              </p>
              <p style={{ fontSize: "0.68rem", color: "var(--faint)", marginTop: 8, textTransform: "uppercase", letterSpacing: "0.12em" }}>— Mark Twain</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── RELATED ARTICLES ── */}
      {related.length > 0 && (
        <section style={{ padding: "60px 0", background: "rgba(12,13,22,0.65)", borderTop: "1px solid rgba(0,200,240,0.05)" }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
              <h2 style={{ fontFamily: "var(--ff-display)", fontSize: "2rem", color: "var(--cream)" }}>
                More to <span className="text-blue">Read</span>
              </h2>
              <Link href="/blog" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.82rem", color: "var(--blue)" }}>
                All Articles <ArrowRight size={13} />
              </Link>
            </div>
            <div className="blog-related-grid">
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ display: "flex", flexDirection: "column", background: "rgba(12,13,22,0.8)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "var(--r-xl)", overflow: "hidden", textDecoration: "none", transition: "all .3s var(--ease)" }}>
                  <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                    <Image src={p.coverImage} alt={p.coverImageAlt} fill style={{ objectFit: "cover" }} sizes="400px" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,13,22,0.85) 0%, transparent 60%)" }} />
                    <div style={{ position: "absolute", bottom: 12, left: 14 }}>
                      <span style={{ padding: "3px 10px", borderRadius: "9999px", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: p.categoryColor, background: `${p.categoryColor}25`, border: `1px solid ${p.categoryColor}40` }}>{p.category}</span>
                    </div>
                  </div>
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Clock size={11} style={{ color: "var(--faint)" }} />
                      <span style={{ fontSize: "0.68rem", color: "var(--faint)" }}>{p.readTime} · {p.publishDate}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--ff-ui)", fontWeight: 700, fontSize: "0.95rem", color: "var(--cream)", lineHeight: 1.35 }}>{p.title}</h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.7, flex: 1 }}>{p.excerpt.slice(0, 100)}...</p>
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.78rem", color: "var(--blue)", fontWeight: 600 }}>
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
