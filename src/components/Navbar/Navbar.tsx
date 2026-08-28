"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  User,
  Dumbbell,
  Utensils,
  Sparkles,
  BookOpen,
  Calculator,
  CreditCard,
  ArrowRight,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import styles from "./Navbar.module.css";

const NAV = [
  { label: "Home",            href: "/",                icon: Home,       badge: null },
  { label: "About",           href: "/about",           icon: User,       badge: null },
  { label: "Services",        href: "/services",        icon: Dumbbell,   badge: "Coaching" },
  { label: "Diet Plans",      href: "/diet-plans",      icon: Utensils,   badge: "Nutrition" },
  { label: "Transformations", href: "/transformations", icon: Sparkles,   badge: "Results" },
  { label: "Blog",            href: "/blog",            icon: BookOpen,   badge: null },
  { label: "Tools",           href: "/tools",           icon: Calculator, badge: "Free" },
  { label: "Pricing",         href: "/pricing",         icon: CreditCard, badge: "Plans" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close drawer on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while drawer is open (prevents background scrolling on iOS/Android)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);

  return (
    <>
      {/* ── Nav bar ── */}
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${open ? styles.navDrawerOpen : ""}`}>
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
            <span className={styles.logoMark}>A</span>
            <span className={styles.logoText}>ABHINAV <em>LIFTS</em></span>
          </Link>

          {/* Desktop links */}
          <div className={styles.links}>
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`${styles.link} ${pathname === n.href ? styles.active : ""}`}
              >
                {n.label}
              </Link>
            ))}
          </div>

          {/* CTA + burger */}
          <div className={styles.cta}>
            <Link href="/book" className={`btn btn-primary btn-sm ${styles.bookBtn}`}>
              Book a Call
            </Link>
            <button
              className={styles.burger}
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Luxury Mobile Drawer (100% Solid Dark Backdrop) ── */}
      <div
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className={styles.drawerInner}>
          {/* Menu items list */}
          <div className={styles.drawerList}>
            {NAV.map((n, idx) => {
              const Icon = n.icon;
              const isActive = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`${styles.drawerItem} ${isActive ? styles.drawerItemActive : ""}`}
                  style={{ animationDelay: `${idx * 0.04}s` }}
                >
                  <div className={styles.drawerItemLeft}>
                    <div className={`${styles.drawerIconBox} ${isActive ? styles.drawerIconBoxActive : ""}`}>
                      <Icon size={18} />
                    </div>
                    <span className={styles.drawerItemLabel}>{n.label}</span>
                  </div>

                  <div className={styles.drawerItemRight}>
                    {n.badge && (
                      <span className={styles.drawerBadge}>{n.badge}</span>
                    )}
                    <ChevronRight size={15} className={styles.drawerArrow} />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom Action Section */}
          <div className={styles.drawerFooter}>
            {/* Primary Consultation Button */}
            <Link
              href="/book"
              className={styles.drawerPrimaryBtn}
              onClick={() => setOpen(false)}
            >
              <span>Book a Free Consultation</span>
              <ArrowRight size={16} />
            </Link>

            {/* Quick Links / Socials */}
            <div className={styles.drawerSocials}>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.drawerSocialLink}
              >
                <div className={styles.waDot} />
                <MessageCircle size={15} color="#25D366" />
                <span>WhatsApp Chat</span>
              </a>

              <a
                href="https://www.instagram.com/abhinav_.lifts/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.drawerSocialLink}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>@abhinav_.lifts</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
