"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "abhinav_popup_dismissed";
const DISMISS_DAYS = 7; // don't show again for 7 days after dismiss
const SHOW_AFTER_MS = 25000; // 25 seconds on page
const EXIT_DELAY_MS = 400; // debounce exit intent

const BENEFITS = [
  "Personalised plan designed for YOUR body",
  "Direct WhatsApp support from Abhinav",
  "Response guaranteed within 24 hours",
  "100% free consultation — no commitment",
];

const QUOTES = [
  "The best time to start was yesterday. The second best time is now.",
  "A year from now you'll wish you had started today.",
  "Discipline is the bridge between your goals and your results.",
];

export default function IntakeFormPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [quote] = useState(() => QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  const pathname = usePathname();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasShownRef = useRef(false);

  // Don't show on the /book page itself
  const isBookPage = pathname === "/book";

  const shouldShow = () => {
    if (isBookPage || hasShownRef.current) return false;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return true;
      const { dismissedAt } = JSON.parse(raw);
      const daysSince = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24);
      return daysSince >= DISMISS_DAYS;
    } catch {
      return true;
    }
  };

  const show = () => {
    if (!shouldShow()) return;
    hasShownRef.current = true;
    setVisible(true);
  };

  const dismiss = (persist = true) => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 350);
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ dismissedAt: Date.now() }));
      } catch {}
    }
  };

  useEffect(() => {
    if (isBookPage) return;

    // Timed trigger — show after 25 seconds
    timerRef.current = setTimeout(show, SHOW_AFTER_MS);

    // Exit-intent trigger — mouse leaves viewport from the top
    let exitTimer: ReturnType<typeof setTimeout>;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        clearTimeout(exitTimer);
        exitTimer = setTimeout(show, EXIT_DELAY_MS);
      }
    };
    const handleMouseEnter = () => clearTimeout(exitTimer);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Scroll trigger — show when user has scrolled 60% of the page
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (scrolled / total >= 0.65) show();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      clearTimeout(exitTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBookPage]);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => dismiss(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9990,
          background: "rgba(7,8,15,0.75)",
          backdropFilter: "blur(6px)",
          animation: closing ? "fade-out .35s forwards" : "fade-in .35s forwards",
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book a free consultation with Abhinav"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            pointerEvents: "auto",
            width: "100%",
            maxWidth: 580,
            background: "linear-gradient(160deg, #0c0d16 0%, #07080f 100%)",
            border: "1px solid rgba(0,200,240,0.22)",
            borderRadius: "var(--r-2xl)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(0,200,240,0.10), 0 1px 0 rgba(0,200,240,0.08) inset",
            overflow: "hidden",
            animation: closing ? "popup-out .35s var(--ease) forwards" : "popup-in .45s var(--ease) forwards",
          }}
        >
          {/* Top accent bar */}
          <div style={{ height: 3, background: "var(--grad-blue)", width: "100%" }} />

          {/* Close button */}
          <button
            onClick={() => dismiss(true)}
            aria-label="Close popup"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--muted)",
              transition: "all .2s",
              zIndex: 1,
            }}
          >
            <X size={15} />
          </button>

          <div style={{ padding: "36px 40px 40px" }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.18)", animation: "pulse-live 1.8s ease-in-out infinite" }} />
              <span style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--blue)" }}>
                Free Consultation Available
              </span>
            </div>

            {/* Headline */}
            <h2 style={{ fontFamily: "var(--ff-display)", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--cream)", lineHeight: 1.15, marginBottom: 10 }}>
              Ready to Transform<br />Your Body?
            </h2>
            <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 24 }}>
              Fill the 2-minute intake form and Abhinav will personally review it and reach out with a plan tailored specifically to you.
            </p>

            {/* Benefits */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {BENEFITS.map(b => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.875rem", color: "var(--limestone)" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--blue)", flexShrink: 0 }} />
                  {b}
                </div>
              ))}
            </div>

            {/* Quote */}
            <div style={{ padding: "14px 18px", background: "rgba(0,200,240,0.05)", border: "1px solid rgba(0,200,240,0.10)", borderRadius: "var(--r-lg)", marginBottom: 28 }}>
              <p style={{ fontStyle: "italic", fontSize: "0.84rem", color: "var(--limestone)", lineHeight: 1.7 }}>
                &ldquo;{quote}&rdquo;
              </p>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/book"
                onClick={() => dismiss(true)}
                className="btn btn-primary btn-lg"
                style={{ flex: 1, justifyContent: "center" }}
              >
                📋 Fill the Intake Form <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/918096407555?text=Hi%20Abhinav!%20I%20am%20interested%20in%20your%20coaching.%20Can%20we%20chat?"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => dismiss(true)}
                className="btn btn-wa"
                style={{ flex: 1, justifyContent: "center" }}
              >
                💬 WhatsApp Directly
              </a>
            </div>

            {/* Dismiss link */}
            <p style={{ textAlign: "center", marginTop: 16 }}>
              <button
                onClick={() => dismiss(true)}
                style={{ fontSize: "0.75rem", color: "var(--faint)", cursor: "pointer", background: "none", border: "none", textDecoration: "underline" }}
              >
                No thanks, maybe later
              </button>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popup-in  { from { opacity:0; transform:scale(0.92) translateY(20px) } to { opacity:1; transform:scale(1) translateY(0) } }
        @keyframes popup-out { from { opacity:1; transform:scale(1) translateY(0) } to { opacity:0; transform:scale(0.94) translateY(12px) } }
        @keyframes fade-out  { from { opacity:1 } to { opacity:0 } }
      `}</style>
    </>
  );
}
