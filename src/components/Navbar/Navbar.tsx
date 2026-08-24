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
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>A</span>
            <span className={styles.logoText}>ABHINAV <em>LIFTS</em></span>
          </Link>
          <div className={styles.links}>
            {NAV.map(n => (
              <Link key={n.href} href={n.href} className={`${styles.link} ${pathname === n.href ? styles.active : ""}`}>{n.label}</Link>
            ))}
          </div>
          <div className={styles.cta}>
            <Link href="/book" className="btn btn-primary btn-sm">Book a Call</Link>
            <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        <div className={styles.drawerContent}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} className={`${styles.drawerLink} ${pathname === n.href ? styles.drawerActive : ""}`}>{n.label}</Link>
          ))}
          <Link href="/book" className="btn btn-primary" style={{ marginTop:16 }}>Book a Call</Link>
        </div>
      </div>
    </>
  );
}
