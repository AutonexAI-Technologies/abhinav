"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const NAV = [
  { label: "Home",            href: "/" },
  { label: "About",           href: "/about" },
  { label: "Services",        href: "/services" },
  { label: "Diet Plans",      href: "/diet-plans" },
  { label: "Transformations", href: "/transformations" },
  { label: "Blog",            href: "/blog" },
  { label: "Tools",           href: "/tools" },
  { label: "Pricing",         href: "/pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close drawer on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while drawer is open (prevents background scrolling on iOS)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Nav bar ── always opaque when drawer is open */}
      <nav className={`${styles.nav} ${scrolled || open ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>A</span>
            <span className={styles.logoText}>ABHINAV <em>LIFTS</em></span>
          </Link>

          {/* Desktop links */}
          <div className={styles.links}>
            {NAV.map(n => (
              <Link key={n.href} href={n.href}
                className={`${styles.link} ${pathname === n.href ? styles.active : ""}`}>
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
              onClick={() => setOpen(o => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer — sits below the navbar (top: var(--nav-h)) ── */}
      <div
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className={styles.drawerContent}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href}
              className={`${styles.drawerLink} ${pathname === n.href ? styles.drawerActive : ""}`}>
              {n.label}
            </Link>
          ))}

          <div style={{
            width: "100%", height: 1,
            background: "rgba(0,200,240,0.12)",
            margin: "14px 0 6px"
          }} />

          <Link href="/book" className="btn btn-primary btn-lg"
            style={{ width: "100%", justifyContent: "center" }}>
            📋 Book a Free Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
