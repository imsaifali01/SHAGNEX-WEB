"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiSpringboot,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import styles from "./Hero.module.css";


/* ========================================
   SERVICES
======================================== */

const buildServices = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites that build trust, showcase your brand and attract customers.",
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to turn visitors into customers.",
  },
  {
    number: "03",
    title: "E-Commerce",
    description:
      "Modern online stores with smooth shopping experiences and business-focused design.",
  },
  {
    number: "04",
    title: "Custom Web Apps",
    description:
      "Powerful web applications built around your unique business requirements.",
  },
];


/* ========================================
   TECHNOLOGIES
======================================== */

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];


/* ========================================
   HERO STATS
======================================== */

const stats = [
  {
    target: 100,
    suffix: "%",
    label: "Responsive Design",
  },
  {
    target: 24,
    suffix: "/7",
    label: "Digital Presence",
  },
  {
    target: 1,
    suffix: "",
    label: "Business-Focused Approach",
  },
];


/* ========================================
   ANIMATED STAT
======================================== */

function StatCounter({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(target);

  useEffect(() => {
    let animationFrame = 0;

    const duration = 1400;
    const startTime = performance.now();

    setCount(0);

    const animate = (currentTime: number) => {
      const elapsed =
        currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(
        easedProgress * target
      );

      setCount(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  return (
    <div className={styles.statItem}>
      <strong>
        {count}
        {suffix}
      </strong>

      <span>{label}</span>
    </div>
  );
}


/* ========================================
   HERO
======================================== */

export default function Hero() {
  return (
    <main className={styles.hero}>

      {/* ====================================
          BACKGROUND
      ==================================== */}

      <div
        className={styles.grid}
        aria-hidden="true"
      />

      <div
        className={styles.glowOne}
        aria-hidden="true"
      />

      <div
        className={styles.glowTwo}
        aria-hidden="true"
      />


      <div className={styles.container}>

        {/* ==================================
            MAIN HERO
        ================================== */}

        <section
          className={styles.heroTop}
          aria-labelledby="hero-title"
        >

          <div className={styles.logoBox}>
            <Image
              src="/images/shagnex-logo.png"
              alt="SHAGNEX Web"
              width={82}
              height={82}
              priority
            />
          </div>


          <div className={styles.eyebrow}>
            <span />
            DIGITAL EXPERIENCES FOR MODERN BUSINESSES
            <span />
          </div>


          <h1 id="hero-title">
            SHAGNEX
            <span>Web</span>
          </h1>


          <div className={styles.tagline}>
            Websites That Grow Businesses
          </div>


          <p className={styles.description}>
            We design and build modern, fast and
            conversion-focused websites that help
            businesses build trust, attract customers
            and grow online.
          </p>


          {/* CTA */}
          <div className={styles.actions}>

            <Link
              href="/contact"
              className={styles.primaryButton}
            >
              Start Your Project
              <span aria-hidden="true">
                ↗
              </span>
            </Link>

            <Link
              href="/work"
              className={styles.secondaryButton}
            >
              View Our Work
              <span aria-hidden="true">
                ↗
              </span>
            </Link>

          </div>

        </section>


        {/* ==================================
            SHOWCASE
        ================================== */}

        <section
          className={styles.videoSection}
          aria-labelledby="showcase-title"
        >

          <div className={styles.videoInfo}>

            <div className={styles.videoLabel}>
              <span />
              SHAGNEX SHOWCASE
            </div>


            <h2 id="showcase-title">
              Your business
              <strong> deserves better.</strong>
            </h2>


            <p>
              We create digital experiences that
              combine premium design, modern
              technology and business strategy
              to help your brand stand out online.
            </p>


            <div className={styles.videoFeatures}>

              <div>
                <span>01</span>
                <p>Premium UI/UX</p>
              </div>

              <div>
                <span>02</span>
                <p>Fast Performance</p>
              </div>

              <div>
                <span>03</span>
                <p>Fully Responsive</p>
              </div>

            </div>


            <Link
              href="/services"
              className={styles.exploreButton}
            >
              Explore Our Services
              <span aria-hidden="true">
                ↗
              </span>
            </Link>

          </div>


          {/* VIDEO */}
          <div className={styles.videoWrapper}>

            <div className={styles.browserBar}>

              <div
                className={styles.browserDots}
                aria-hidden="true"
              >
                <i />
                <i />
                <i />
              </div>

              <div className={styles.browserAddress}>
                shagnex.web
              </div>

              <div className={styles.live}>
                <span />
                LIVE
              </div>

            </div>


            <div className={styles.videoFrame}>

              <video
                className={styles.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="SHAGNEX Web showcase"
              >
                <source
                  src="/videos/shagnex-showcase.mp4"
                  type="video/mp4"
                />
              </video>


              <div
                className={styles.videoOverlay}
                aria-hidden="true"
              />


              <div className={styles.videoCard}>

                <div
                  className={styles.videoIcon}
                  aria-hidden="true"
                >
                  ↗
                </div>

                <div>
                  <strong>
                    SHAGNEX Web
                  </strong>

                  <small>
                    Websites That Grow Businesses
                  </small>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ==================================
            STATS
        ================================== */}

        <section
          className={styles.statsSection}
          aria-label="Why choose SHAGNEX Web"
        >

          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}

        </section>


        {/* ==================================
            WHAT WE BUILD
        ================================== */}

        <section
          className={styles.buildSection}
          aria-labelledby="build-title"
        >

          <div className={styles.buildHeader}>

            <div className={styles.buildLabel}>
              <span />
              WHAT WE BUILD
            </div>


            <h2 id="build-title">
              Digital experiences
              <strong> built to grow.</strong>
            </h2>


            <p>
              From business websites to powerful
              web applications, we build modern
              digital solutions designed around
              your business goals.
            </p>

          </div>


          <div className={styles.buildSlider}>

            <div className={styles.buildTrack}>

              {[
                ...buildServices,
                ...buildServices,
              ].map((service, index) => (
                <Link
                  key={`${service.number}-${index}`}
                  href="/services"
                  className={styles.buildItem}
                >

                  <div className={styles.buildNumber}>
                    {service.number}
                  </div>

                  <div className={styles.buildContent}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <span
                    className={styles.buildArrow}
                    aria-hidden="true"
                  >
                    ↗
                  </span>

                </Link>
              ))}

            </div>

          </div>

        </section>


        {/* ==================================
            TECHNOLOGIES
        ================================== */}

        <section
          className={styles.techSection}
          aria-labelledby="technology-title"
        >

          <div className={styles.techHeader}>

            <div className={styles.techLabel}>
              <span />
              TECHNOLOGIES WE WORK WITH
            </div>


            <h2 id="technology-title">
              Built with
              <strong> modern technology.</strong>
            </h2>


            <p>
              We use modern, reliable and scalable
              technologies to create fast and
              powerful digital experiences.
            </p>

          </div>


          <div className={styles.techSlider}>

            <div className={styles.techTrack}>

              {[
                ...technologies,
                ...technologies,
              ].map((technology, index) => {

                const Icon = technology.icon;

                return (
                  <div
                    key={`${technology.name}-${index}`}
                    className={styles.techItem}
                  >

                    <Icon
                      className={styles.techIcon}
                      aria-hidden="true"
                    />

                    <span>
                      {technology.name}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>

        </section>


        {/* ==================================
            ABOUT OUR WORK
        ================================== */}

        <section
          className={styles.aboutWorkSection}
          aria-labelledby="about-work-title"
        >

          <div className={styles.aboutWorkContent}>

            <div className={styles.aboutWorkLabel}>
              <span />
              ABOUT OUR WORK
            </div>


            <h2 id="about-work-title">
              We build websites
              <strong> that mean business.</strong>
            </h2>


            <p className={styles.aboutWorkDescription}>
              SHAGNEX Web creates modern digital
              experiences for businesses that want
              to build a strong online presence.
              We combine clean design, modern
              technology and business-focused
              strategy to create websites that look
              professional and help businesses grow.
            </p>


            <p className={styles.aboutWorkDescription}>
              From business websites and landing
              pages to e-commerce platforms and
              custom web applications, every project
              is designed with performance,
              responsiveness and user experience
              in mind.
            </p>


            <Link
              href="/contact"
              className={styles.aboutWorkButton}
            >
              Let&apos;s Build Together
              <span aria-hidden="true">
                ↗
              </span>
            </Link>

          </div>


          <div className={styles.aboutWorkFeatures}>

            <div className={styles.aboutWorkFeature}>
              <span>01</span>

              <div>
                <h3>Business First</h3>
                <p>
                  Every website is built around
                  your business goals and customers.
                </p>
              </div>
            </div>


            <div className={styles.aboutWorkFeature}>
              <span>02</span>

              <div>
                <h3>Modern Design</h3>
                <p>
                  Clean, premium and professional
                  interfaces that build trust.
                </p>
              </div>
            </div>


            <div className={styles.aboutWorkFeature}>
              <span>03</span>

              <div>
                <h3>Performance Focused</h3>
                <p>
                  Fast, responsive and optimized
                  experiences across devices.
                </p>
              </div>
            </div>


            <div className={styles.aboutWorkFeature}>
              <span>04</span>

              <div>
                <h3>Built to Grow</h3>
                <p>
                  Scalable websites that can evolve
                  with your business.
                </p>
              </div>
            </div>

          </div>

        </section>


        {/* ==================================
            TRUST BAR
        ================================== */}

        <section
          className={styles.trustBar}
          aria-label="SHAGNEX Web benefits"
        >

          <div>
            <span>01</span>
            <p>Premium Design</p>
          </div>

          <div>
            <span>02</span>
            <p>Fast Performance</p>
          </div>

          <div>
            <span>03</span>
            <p>Mobile First</p>
          </div>

          <div>
            <span>04</span>
            <p>Business Focused</p>
          </div>

        </section>

      </div>
    </main>
  );
}
