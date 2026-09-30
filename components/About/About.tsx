import Link from "next/link";
import Image from "next/image";
import styles from "./About.module.css";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites that present your brand, services, and value clearly while giving visitors a strong reason to connect.",
  },
  {
    number: "02",
    title: "E-Commerce",
    description:
      "Clean and engaging shopping experiences designed to make products easy to discover, understand, and purchase.",
  },
  {
    number: "03",
    title: "Custom Web Solutions",
    description:
      "Purpose-built digital experiences created around your business needs, customer journeys, and workflows.",
  },
  {
    number: "04",
    title: "Website Redesign",
    description:
      "A modern refresh for existing websites with stronger presentation, clearer structure, better usability, and improved performance.",
  },
];

const reasons = [
  "Business-first thinking",
  "Clear and purposeful design",
  "Responsive user experiences",
  "Performance-focused development",
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your business, audience, goals, and what needs to be achieved.",
  },
  {
    number: "02",
    title: "Define",
    text: "We shape the structure, content direction, and experience around those goals.",
  },
  {
    number: "03",
    title: "Build",
    text: "We turn the direction into a polished, responsive, and reliable digital experience.",
  },
  {
    number: "04",
    title: "Refine",
    text: "We review the details, improve the experience, and prepare it for real users.",
  },
];

const audiences = [
  "Startups",
  "Small Businesses",
  "Growing Brands",
  "Service Businesses",
  "Online Stores",
];

const founderFocus = [
  "Business-focused websites",
  "Modern UI & user experiences",
  "Responsive web development",
  "Performance & usability",
];

export default function About() {
  return (
    <main className={styles.about}>
      <div className={styles.backgroundGrid} aria-hidden="true" />
      <div className={styles.backgroundGlowOne} aria-hidden="true" />
      <div className={styles.backgroundGlowTwo} aria-hidden="true" />

      <div className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              ABOUT SHAGNEX WEB
            </div>

            <h1>
              We build digital
              <span>experiences that move businesses forward.</span>
            </h1>

            <p>
              SHAGNEX Web is a digital web studio focused on creating modern,
              purposeful, and high-performance websites that help businesses
              build trust, connect with customers, and grow online.
            </p>

            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryButton}>
                Start a Project
                <span>↗</span>
              </Link>

              <Link href="/work" className={styles.secondaryButton}>
                Explore Our Work
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div
              className={`${styles.visualRing} ${styles.visualRingOne}`}
            />
            <div
              className={`${styles.visualRing} ${styles.visualRingTwo}`}
            />

            <div className={styles.visualCore}>
              <Image
                src="/images/shagnex-logo.png"
                alt=""
                width={78}
                height={78}
                priority
              />
            </div>

            <span
              className={`${styles.visualDot} ${styles.visualDotOne}`}
            />
            <span
              className={`${styles.visualDot} ${styles.visualDotTwo}`}
            />
            <span
              className={`${styles.visualDot} ${styles.visualDotThree}`}
            />

            <div className={styles.visualCaption}>
              <strong>SHAGNEX</strong>
              <span>WEB STUDIO</span>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className={styles.positioning}>
          <div className={styles.sectionNumber}>01</div>

          <div>
            <div className={styles.smallLabel}>OUR APPROACH</div>

            <h2>
              A website should look good.
              <span>It should also do something.</span>
            </h2>

            <p>
              We approach every project as more than a design task. The
              structure, visuals, content, and interactions should work
              together to communicate value and create a better experience for
              the people who visit your business.
            </p>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className={styles.services}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.eyebrow}>
                <span />
                WHAT WE DO
              </div>

              <h2>
                Digital work built
                <span>around your business.</span>
              </h2>
            </div>

            <p>
              From strategy to execution, we create focused digital solutions
              that make your brand easier to understand, easier to trust, and
              easier to grow.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article key={service.number} className={styles.serviceCard}>
                <div className={styles.serviceTop}>
                  <span>{service.number}</span>
                  <i>↗</i>
                </div>

                <div className={styles.serviceIcon} aria-hidden="true">
                  <span />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WHY SHAGNEX */}
        <section className={styles.why}>
          <div className={styles.whyVisual} aria-hidden="true">
            <div className={styles.whyOuter} />
            <div className={styles.whyMiddle} />

            <div className={styles.whyInner}>
              <strong>SHAGNEX</strong>
              <span>WEB</span>
            </div>
          </div>

          <div className={styles.whyContent}>
            <div className={styles.eyebrow}>
              <span />
              WHY SHAGNEX
            </div>

            <h2>
              Strategy.
              <br />
              Design.
              <br />
              <span>Technology.</span>
            </h2>

            <p>
              Three elements, one focused goal: create digital experiences
              that are visually strong, easy to use, technically reliable,
              and connected to real business objectives.
            </p>

            <div className={styles.reasonList}>
              {reasons.map((reason, index) => (
                <div key={reason}>
                  <strong>0{index + 1}</strong>
                  <span>{reason}</span>
                  <i>↗</i>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className={styles.founder}>
          <div className={styles.founderVisual}>
            <div className={styles.founderGlow} aria-hidden="true" />

            <div className={styles.founderImageFrame}>
              <Image
                src="/images/founder.jpeg"
                alt="MD SAIF ALI - Founder of SHAGNEX Web"
                fill
                sizes="(max-width: 700px) 82vw, 430px"
                className={styles.founderImage}
              />

              <div className={styles.founderImageOverlay} />

              <div className={styles.founderBadge}>
                <span>FOUNDER</span>
                <strong>SHAGNEX WEB</strong>
              </div>
            </div>
          </div>

          <div className={styles.founderContent}>
            <div className={styles.eyebrow}>
              <span />
              MEET THE FOUNDER
            </div>

            <h2>
              Built with a vision.
              <span>Driven by digital.</span>
            </h2>

            <div className={styles.founderName}>
              <strong>MD SAIF ALI</strong>
              <span>Founder &amp; Web Developer — SHAGNEX Web</span>
            </div>

            <p>
              SHAGNEX Web was founded with a simple vision: help businesses
              create a stronger digital presence through thoughtful design,
              modern web experiences, and technology that serves a real
              purpose.
            </p>

            <p>
              The focus is not just on making a website look professional,
              but on creating an experience that communicates value, builds
              trust, and gives a business room to grow.
            </p>

            <div className={styles.founderFocus}>
              {founderFocus.map((item, index) => (
                <div key={item}>
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>

            <div className={styles.founderActions}>
              <Link
                href="https://www.linkedin.com/in/imsaifali01 "
                target="_blank"
                rel="noreferrer"
                className={styles.socialButton}
              >
                LinkedIn
                <span>↗</span>
              </Link>

              <Link
                href="https://github.com/imsaifali01"
                target="_blank"
                rel="noreferrer"
                className={styles.socialButton}
              >
                GitHub
                <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* WHO WE BUILD FOR */}
        <section className={styles.audience}>
          <div className={styles.audienceIntro}>
            <div className={styles.eyebrow}>
              <span />
              WHO WE BUILD FOR
            </div>

            <h2>
              Built for businesses
              <span>ready to grow.</span>
            </h2>

            <p>
              Whether you are starting something new or improving what already
              exists, we build around the stage, goals, and needs of your
              business.
            </p>
          </div>

          <div className={styles.audienceList}>
            {audiences.map((audience, index) => (
              <div key={audience}>
                <span>0{index + 1}</span>
                <strong>{audience}</strong>
                <i>↗</i>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.process}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.eyebrow}>
                <span />
                HOW WE WORK
              </div>

              <h2>
                From idea
                <span>to impact.</span>
              </h2>
            </div>

            <p>
              A clear process keeps every project focused, transparent, and
              moving in the right direction.
            </p>
          </div>

          <div className={styles.processGrid}>
            {process.map((item) => (
              <article key={item.number} className={styles.processCard}>
                <div className={styles.processTop}>
                  <span>{item.number}</span>
                  <i>↗</i>
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PROMISE */}
        <section className={styles.promise}>
          <div className={styles.promiseGlow} aria-hidden="true" />

          <div className={styles.promiseContent}>
            <div className={styles.eyebrow}>
              <span />
              OUR PROMISE
            </div>

            <h2>
              We don&apos;t just build websites.
              <span>
                We build digital experiences designed to move businesses
                forward.
              </span>
            </h2>

            <p>
              Every detail has a purpose — from the first impression to the
              final interaction.
            </p>
          </div>

          <div className={styles.promiseMark} aria-hidden="true">
            <Image
              src="/images/shagnex-logo.png"
              alt=""
              width={54}
              height={54}
            />
            <span>WEB</span>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div>
            <div className={styles.ctaLabel}>LET&apos;S BUILD TOGETHER</div>

            <h2>
              Have an idea?
              <span>Let&apos;s make it real.</span>
            </h2>

            <p>
              Tell us what you are building and let&apos;s turn the idea into
              a professional digital experience.
            </p>
          </div>

          <Link href="/contact" className={styles.ctaButton}>
            Start a Conversation
            <span>↗</span>
          </Link>
        </section>
      </div>
    </main>
  );
}