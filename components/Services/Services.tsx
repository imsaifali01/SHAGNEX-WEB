"use client";

import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional, responsive websites that build trust, showcase your business, and turn visitors into customers.",
    features: [
      "Modern responsive design",
      "Mobile-first experience",
      "SEO-friendly structure",
      "Contact & enquiry integration",
    ],
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Focused landing pages built to communicate your offer clearly and drive more enquiries, sign-ups, or sales.",
    features: [
      "Conversion-focused layout",
      "Clear call-to-actions",
      "Fast-loading experience",
      "Campaign-ready structure",
    ],
  },
  {
    number: "03",
    title: "E-Commerce",
    description:
      "Clean and scalable online stores designed to make browsing, shopping, and managing products simple.",
    features: [
      "Product & category structure",
      "Responsive shopping experience",
      "Checkout integration",
      "Easy-to-manage foundation",
    ],
  },
  {
    number: "04",
    title: "Custom Web Apps",
    description:
      "Purpose-built web applications for businesses that need workflows, dashboards, tools, or functionality beyond a standard website.",
    features: [
      "Custom functionality",
      "Dashboard & workflow systems",
      "Scalable architecture",
      "API & third-party integrations",
    ],
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    priceLabel: "Development",
    description:
      "A professional online presence for individuals and small businesses.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Modern UI/UX",
      "Contact form",
      "Basic SEO setup",
      "Deployment assistance",
    ],
    deployment: "₹1,499",
    maintenance: "₹999/month",
    popular: false,
  },
  {
    name: "Business",
    price: "₹18,999",
    priceLabel: "Development",
    description:
      "A complete business website designed to build credibility and generate enquiries.",
    features: [
      "Up to 10 pages",
      "Custom UI/UX design",
      "Advanced sections",
      "Contact & enquiry integration",
      "SEO-ready structure",
      "Performance optimization",
      "Deployment assistance",
    ],
    deployment: "₹1,499",
    maintenance: "₹1,999/month",
    popular: true,
  },
  {
    name: "Growth",
    price: "₹34,999+",
    priceLabel: "Development",
    description:
      "A more advanced solution for businesses that need custom features and integrations.",
    features: [
      "Custom page structure",
      "Advanced functionality",
      "Third-party integrations",
      "Custom components",
      "Performance optimization",
      "Scalable architecture",
      "Deployment assistance",
    ],
    deployment: "₹1,999+",
    maintenance: "₹2,499+/month",
    popular: false,
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals, and what the website needs to achieve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a clear visual direction with a modern interface built around your brand.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We turn the approved design into a fast, responsive, and reliable digital experience.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test, optimize, deploy, and make sure your website is ready for real visitors.",
  },
];

export default function Services() {
  return (
    <main className={styles.page}>
      {/* ========================================
          HERO
      ======================================== */}

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>WHAT WE BUILD</span>

          <h1>
            Digital experiences
            <br />
            <span>built to grow.</span>
          </h1>

          <p className={styles.heroText}>
            From high-converting landing pages to complete business websites
            and custom web applications, we build modern digital experiences
            around your goals.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Start a project
              <span>↗</span>
            </Link>

            <Link href="/work" className={styles.secondaryButton}>
              View our work
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          SERVICES
      ======================================== */}

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>OUR SERVICES</span>

              <h2>
                Everything you need
                <br />
                <span>to grow online.</span>
              </h2>
            </div>

            <p>
              Practical web solutions designed to look professional, perform
              fast, and support real business goals.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article
                key={service.number}
                className={styles.serviceCard}
              >
                <div className={styles.cardTop}>
                  <span className={styles.serviceNumber}>
                    {service.number}
                  </span>

                  <span className={styles.cardArrow}>↗</span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={styles.serviceLink}
                >
                  Start this service
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          PRICING
      ======================================== */}

      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.pricingHeading}>
            <span className={styles.eyebrow}>SIMPLE PRICING</span>

            <h2>
              Start with what
              <br />
              <span>your business needs.</span>
            </h2>

            <p>
              Clear starting prices with flexible options for projects that
              need something more custom.
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`${styles.pricingCard} ${
                  plan.popular ? styles.popularCard : ""
                }`}
              >
                {plan.popular && (
                  <span className={styles.popularBadge}>
                    Most Popular
                  </span>
                )}

                <div className={styles.planHeader}>
                  <span className={styles.planName}>
                    {plan.name}
                  </span>

                  <div className={styles.price}>
                    {plan.price}
                  </div>

                  <span className={styles.priceLabel}>
                    {plan.priceLabel}
                  </span>

                  <p>{plan.description}</p>
                </div>

                {/* ==================================
                    PROJECT COST
                ================================== */}

                <div className={styles.costBox}>
                  <div className={styles.costRow}>
                    <span>Development</span>
                    <strong>{plan.price}</strong>
                  </div>

                  <div className={styles.costRow}>
                    <span>
                      Deployment
                      <small> one-time</small>
                    </span>

                    <strong>{plan.deployment}</strong>
                  </div>

                  <div className={styles.costRow}>
                    <span>
                      Maintenance
                      <small> optional</small>
                    </span>

                    <strong>{plan.maintenance}</strong>
                  </div>
                </div>

                <div className={styles.planDivider} />

                <ul className={styles.planFeatures}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={
                    plan.popular
                      ? styles.planPrimaryButton
                      : styles.planButton
                  }
                >
                  Get started
                  <span>↗</span>
                </Link>
              </article>
            ))}
          </div>

          <div className={styles.pricingNote}>
            <span>✦</span>

            <p>
              Development is the project build cost. Deployment is a
              one-time charge for putting the website live. Maintenance is
              optional and billed monthly. Domain, hosting, paid APIs, and
              other third-party services are separate where applicable.
            </p>
          </div>

          {/* ========================================
              CUSTOM PROJECT
          ======================================== */}

          <div className={styles.customProject}>
            <div>
              <span className={styles.eyebrow}>
                NEED SOMETHING CUSTOM?
              </span>

              <h3>
                Have a bigger idea
                <br />
                <span>in mind?</span>
              </h3>

              <p>
                Tell us what you want to build. We&apos;ll understand the
                requirements and suggest the right approach for your project.
              </p>
            </div>

            <Link
              href="/contact"
              className={styles.customButton}
            >
              Discuss your project
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          PROCESS
      ======================================== */}

      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeading}>
            <span className={styles.eyebrow}>HOW WE WORK</span>

            <h2>
              From idea to
              <br />
              <span>launch.</span>
            </h2>

            <p>
              A straightforward process that keeps the project clear,
              collaborative, and focused on the outcome.
            </p>
          </div>

          <div className={styles.processGrid}>
            {process.map((step) => (
              <div
                key={step.number}
                className={styles.processCard}
              >
                <span className={styles.processNumber}>
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
      ======================================== */}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <span className={styles.eyebrow}>
              LET&apos;S BUILD
            </span>

            <h2>
              Ready to build
              <br />
              <span>something remarkable?</span>
            </h2>

            <p>
              Tell us about your business, your idea, or the problem you want
              to solve. Let&apos;s turn it into a website that works for you.
            </p>

            <Link
              href="/contact"
              className={styles.ctaButton}
            >
              Start a conversation
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
