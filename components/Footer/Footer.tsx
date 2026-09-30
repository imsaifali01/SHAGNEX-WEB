import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const services = [
  "Business Websites",
  "Landing Pages",
  "E-Commerce",
  "Custom Web Apps",
];

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* =====================================
            MAIN FOOTER
        ====================================== */}

        <div className={styles.mainFooter}>

          {/* ===================================
              BRAND
          ==================================== */}

          <div className={styles.brand}>
            <Link
              href="/"
              className={styles.logo}
              aria-label="SHAGNEX Web Home"
            >
              <Image
                src="/images/shagnex-logo.png"
                alt="SHAGNEX Logo"
                width={46}
                height={46}
                className={styles.logoImage}
              />

              <span className={styles.logoText}>
                <span className={styles.logoName}>
                  SHAGNEX
                </span>

                <span className={styles.logoWeb}>
                  Web
                </span>
              </span>
            </Link>

            <p>
              Modern websites and digital experiences
              designed to help businesses build trust,
              attract customers, and grow online.
            </p>

            <div className={styles.status}>
              <span className={styles.statusDot} />

              <span>
                Available for new projects
              </span>
            </div>
          </div>


          {/* ===================================
              EXPLORE
          ==================================== */}

          <div className={styles.column}>
            <h2>Explore</h2>

            <div className={styles.links}>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>


          {/* ===================================
              SERVICES
          ==================================== */}

          <div className={styles.column}>
            <h2>Services</h2>

            <div className={styles.links}>
              {services.map((service) => (
                <Link
                  key={service}
                  href="/services"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>


          {/* ===================================
              CONNECT
          ==================================== */}

          <div className={styles.column}>
            <h2>Connect</h2>

            <div className={styles.contactLinks}>

              <a href="mailto:hello@shagnexweb.com">
                hello@shagnexweb.com
              </a>

              <Link href="/contact">
                Start a conversation →
              </Link>

            </div>


            {/* SOCIAL ICONS */}

            <div className={styles.socials}>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917673065073"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={styles.socialLink}
              >
                <FaWhatsapp />
              </a>


              {/* Instagram */}
              <a
                href="https://www.instagram.com/shagnex_web/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <FaInstagram />
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/shagnex-web"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                <FaLinkedinIn />
              </a>


              {/* GitHub */}
              <a
                href="https://github.com/imsaifali01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={styles.socialLink}
              >
                <FaGithub />
              </a>

            </div>
          </div>

        </div>


        {/* =====================================
            BOTTOM BAR
        ====================================== */}

        <div className={styles.bottom}>

          <p>
            © {new Date().getFullYear()} SHAGNEX Web.
            All rights reserved.
          </p>

          <div className={styles.bottomLinks}>

            <Link href="#">
              Privacy Policy
            </Link>

            <Link href="#">
              Terms
            </Link>

          </div>

          <span className={styles.madeWith}>
            Built for growth
            <span>✦</span>
          </span>

        </div>

      </div>
    </footer>
  );
}