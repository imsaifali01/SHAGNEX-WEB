
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";

const navItems = [
  { name: "Home", href: "/home" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (href: string) => {
    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <header className={styles.header}>
      <nav
        className={styles.navbar}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/home"
          className={styles.logo}
          onClick={closeMenu}
          aria-label="SHAGNEX Web Home"
        >
          <Image
            src="/images/shagnex-logo.png"
            alt="SHAGNEX Web"
            width={46}
            height={46}
            priority
            className={styles.logoImage}
          />

          <span className={styles.logoMain}>
            SHAGNEX
          </span>

          <span className={styles.logoWeb}>
            Web
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${
                  active ? styles.activeNavLink : ""
                }`}
                onClick={closeMenu}
                aria-current={
                  active ? "page" : undefined
                }
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={styles.cta}
          onClick={closeMenu}
        >
          <span>Start a Project</span>
          <span className={styles.arrow}>↗</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen
              ? styles.menuButtonActive
              : ""
          }`}
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={
              menuOpen
                ? styles.lineOpen1
                : styles.line
            }
          />

          <span
            className={
              menuOpen
                ? styles.lineOpen2
                : styles.line
            }
          />

          <span
            className={
              menuOpen
                ? styles.lineOpen3
                : styles.line
            }
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          menuOpen
            ? styles.mobileMenuOpen
            : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileLinks}>
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.mobileLink} ${
                  active
                    ? styles.activeMobileLink
                    : ""
                }`}
                onClick={closeMenu}
                aria-current={
                  active ? "page" : undefined
                }
                tabIndex={menuOpen ? 0 : -1}
              >
                <span>{item.name}</span>

                <span
                  className={styles.mobileArrow}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <Link
          href="/contact"
          className={styles.mobileCta}
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        >
          <span>Start a Project</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
