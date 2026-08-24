"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

const ROLES = ["Online Coach", "Hybrid Athlete", "Long-Distance Runner", "Content Creator"];
const QUOTES = [
  "\"Discipline is doing what needs to be done, even when you don't feel like doing it.\"",
  "\"The body achieves what the mind believes.\"",
  "\"Consistency beats intensity, every single time.\"",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setVisible(true);
    const r = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2600);
    const q = setInterval(() => setQuoteIdx(i => (i + 1) % QUOTES.length), 5000);
    return () => { clearInterval(r); clearInterval(q); };
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let anim: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.5 - 0.1,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,200,240,${p.alpha})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
      });
      anim = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(anim); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className={`hero-h ${styles.hero}`}>
      {/* Canvas particles */}
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden />

      {/* Background orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.scanLine} />

      {/* Grid overlay */}
      <div className={styles.grid} />

      <div className={`container ${styles.inner}`}>
        {/* ── LEFT ── */}
        <div className={`${styles.left} ${visible ? styles.visible : ""}`}>
          <div className={styles.badge}>
            <span className="live-dot" />
            <span>Online Coaching · Open Now</span>
          </div>

          <h1 className={styles.headline}>
            <span className={styles.name}>Abhinav</span>
            <span className={styles.roleWrap}>
              <span key={roleIdx} className={`${styles.role} text-blue`}>
                {ROLES[roleIdx]}
              </span>
            </span>
          </h1>

          <p className={styles.sub}>
            Building stronger bodies and disciplined minds —<br />
            through science-backed coaching, real nutrition,<br />
            and relentless consistency.
          </p>

          {/* Rotating quote */}
          <div className={styles.quoteBox}>
            <span className={styles.quoteIcon}>"</span>
            <p key={quoteIdx} className={styles.quoteText}>
              {QUOTES[quoteIdx].replace(/^"|"$/g, "")}
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Link href="/book" className="btn btn-primary btn-lg">
              Start Your Transformation <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="btn btn-outline btn-lg">
              View Services
            </Link>
          </div>
          {/* CTA row only – ticker moved to a separate full-width section */}
        </div>

        {/* ── RIGHT IMAGE ── */}
        <div className={`${styles.right} ${visible ? styles.visible : ""}`}>
          <div className={styles.imageGlow} />
          <div className={styles.imageFrame}>
            <Image src="/abhi-1.jpeg" alt="Abhinav — Online Fitness Coach" fill priority
              className={styles.img} sizes="(max-width:900px) 100vw, 48vw" />
            <div className={styles.imgScrim} />
            {/* Blue edge glow */}
            <div className={styles.edgeGlow} />
          </div>

          {/* Floating stats chips */}
          <div className={`${styles.chip} ${styles.chip1}`}>
            <div className={styles.chipIcon}>🏃</div>
            <div>
              <div className={styles.chipT}>Hybrid Athlete</div>
              <div className={styles.chipS}>Running + Strength</div>
            </div>
          </div>
          <div className={`${styles.chip} ${styles.chip2}`}>
            <div className={styles.chipIcon}>🌐</div>
            <div>
              <div className={styles.chipT}>Global Clients</div>
              <div className={styles.chipS}>India · UAE · UK</div>
            </div>
          </div>
          <div className={`${styles.chip} ${styles.chip3}`}>
            <div className={styles.chipIcon}>💬</div>
            <div>
              <div className={styles.chipT}>WhatsApp Support</div>
              <div className={styles.chipS}>Mon – Sat</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scroll} aria-hidden>
        <div className={styles.scrollBar} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
