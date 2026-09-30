"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import styles from "./Contact.module.css";

const faqs = [
  {
    question: "What services does SHAGNEX Web offer?",
    answer:
      "We build business websites, landing pages, e-commerce websites and custom web applications with a focus on modern design, performance and business growth.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "The cost depends on the type of website, features and project requirements. Share your requirements through the form and we can discuss the right solution for your business.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "Project timelines depend on the size and complexity of the website. A simple website can be completed faster, while larger custom projects require more development time.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Our websites are designed to provide a smooth and responsive experience across mobile, tablet and desktop devices.",
  },
  {
    question: "Can you build an e-commerce website?",
    answer:
      "Yes. We can create modern e-commerce experiences with product displays, shopping flows and business-focused design.",
  },
  {
    question: "How can I start a project?",
    answer:
      "Simply fill out the project inquiry form, send us an email or contact us through WhatsApp. We will discuss your requirements and the next steps.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((current) =>
      current === index ? null : index
    );
  };

  return (
    <main className={styles.contact}>

      {/* BACKGROUND */}

      <div className={styles.grid} />
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />

      <div className={styles.container}>

        {/* =====================================
            INTRO
        ====================================== */}

        <section className={styles.intro}>

          <div className={styles.eyebrow}>
            <span />
            LET&apos;S CONNECT
          </div>

          <h1>
            Let&apos;s build
            <span>something that grows.</span>
          </h1>

          <p>
            Have an idea, a business website requirement,
            or a custom web project? Tell us what you need
            and let&apos;s turn your vision into a powerful
            digital experience.
          </p>

        </section>


        {/* =====================================
            CONTACT AREA
        ====================================== */}

        <section className={styles.contactArea}>

          {/* ===================================
              FORM
          ==================================== */}

          <div className={styles.formCard}>

            <div className={styles.formHeader}>

              <div>

                <span className={styles.cardLabel}>
                  START A PROJECT
                </span>

                <h2>
                  Start a conversation
                </h2>

              </div>

              <div className={styles.headerIcon}>
                ↗
              </div>

            </div>


            <p className={styles.formIntro}>
              Share a few details about your project
              and we&apos;ll get back to you.
            </p>


            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >

              {/* NAME + EMAIL */}

              <div className={styles.fieldRow}>

                <div className={styles.field}>

                  <label htmlFor="name">
                    NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />

                </div>


                <div className={styles.field}>

                  <label htmlFor="email">
                    EMAIL
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />

                </div>

              </div>


              {/* PHONE + SERVICE */}

              <div className={styles.fieldRow}>

                <div className={styles.field}>

                  <label htmlFor="phone">
                    CONTACT NUMBER
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                  />

                </div>


                <div className={styles.field}>

                  <label htmlFor="service">
                    SERVICE
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                  >

                    <option
                      value=""
                      disabled
                    >
                      Select a service
                    </option>

                    <option value="business-website">
                      Business Website
                    </option>

                    <option value="landing-page">
                      Landing Page
                    </option>

                    <option value="ecommerce">
                      E-Commerce
                    </option>

                    <option value="web-app">
                      Custom Web App
                    </option>

                  </select>

                </div>

              </div>


              {/* BUDGET */}

              <div className={styles.field}>

                <label htmlFor="budget">
                  BUDGET
                  <span>OPTIONAL</span>
                </label>

                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                >

                  <option value="">
                    Select a range
                  </option>

                  <option value="under-25">
                    Under ₹25,000
                  </option>

                  <option value="25-50">
                    ₹25,000 – ₹50,000
                  </option>

                  <option value="50-100">
                    ₹50,000 – ₹1,00,000
                  </option>

                  <option value="100-plus">
                    ₹1,00,000+
                  </option>

                </select>

              </div>


              {/* PROJECT DETAILS */}

              <div className={styles.field}>

                <label htmlFor="message">
                  PROJECT DETAILS
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your business, idea, goals or requirements..."
                  required
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className={styles.submit}
              >

                <span>
                  {submitted
                    ? "Inquiry Sent"
                    : "Send Project Inquiry"}
                </span>

                <span>
                  {submitted ? "✓" : "↗"}
                </span>

              </button>


              {/* TRUST NOTE */}

              <p className={styles.formNote}>
                We&apos;ll review your inquiry and get back
                to you within 24–48 hours.

                <span>
                  🔒 Your information stays private and secure.
                </span>
              </p>


              {/* FORM BRAND */}

              <div className={styles.formBrand}>

                <Image
                  src="/images/shagnex-logo.png"
                  alt="SHAGNEX Web"
                  width={42}
                  height={42}
                />

                <span>
                  SHAGNEX Web
                </span>

              </div>


              {/* SUCCESS */}

              {submitted && (
                <p className={styles.success}>
                  Thanks! Your project inquiry has
                  been received.
                </p>
              )}

            </form>

          </div>


          {/* ===================================
              RIGHT SIDE
          ==================================== */}

          <div className={styles.rightSide}>

            {/* COMPANY DETAILS */}

            <div className={styles.companyCard}>

              <div className={styles.companyHeader}>

                <div>

                  <span className={styles.cardLabel}>
                    SHAGNEX WEB
                  </span>

                  <h2>
                    Company details
                  </h2>

                </div>

                <div className={styles.companyLogo}>
                  SW
                </div>

              </div>


              {/* EMAIL */}

              <a
                href="mailto:hello@shagnexweb.com"
                className={styles.contactItem}
              >

                <span className={styles.contactIcon}>
                  <FaEnvelope />
                </span>

                <span className={styles.contactText}>

                  <small>
                    EMAIL
                  </small>

                  hello@shagnexweb.com

                </span>

                <FaArrowUpRightFromSquare
                  className={styles.itemArrow}
                />

              </a>


              {/* PHONE */}

              <a
                href="tel:+91 7352618279"
                className={styles.contactItem}
              >

                <span className={styles.contactIcon}>
                  <FaPhone />
                </span>

                <span className={styles.contactText}>

                  <small>
                    CALL
                  </small>

                  +91 7352618279

                </span>

                <FaArrowUpRightFromSquare
                  className={styles.itemArrow}
                />

              </a>


              {/* WHATSAPP */}

              <a
                href="https://wa.me/917673065073"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >

                <span className={styles.contactIcon}>
                  <FaWhatsapp />
                </span>

                <span className={styles.contactText}>

                  <small>
                    WHATSAPP
                  </small>

                  Start a conversation

                </span>

                <FaArrowUpRightFromSquare
                  className={styles.itemArrow}
                />

              </a>


              {/* LOCATION */}

              <div className={styles.contactItemStatic}>

                <span className={styles.contactIcon}>
                  <FaLocationDot />
                </span>

                <span className={styles.contactText}>

                  <small>
                    LOCATION
                  </small>

                  India · Serving Worldwide

                </span>

              </div>


              {/* AVAILABILITY */}

              <div className={styles.availability}>

                <span className={styles.statusDot} />

                <div>

                  <strong>
                    Available for new projects
                  </strong>

                  <small>
                    Let&apos;s discuss your next idea.
                  </small>

                </div>

              </div>


              {/* SOCIALS */}

              <div className={styles.socialSection}>

                <span>
                  CONNECT WITH US
                </span>

                <div className={styles.socials}>

                  <a
                    href="https://www.instagram.com/shagnex_web/"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/shagnex-web"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>

                 

                  <a
                    href="https://wa.me/917673065073"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>

                </div>

              </div>

            </div>


            {/* GOOGLE MAP */}

            <div className={styles.mapCard}>

              <div className={styles.mapHeader}>

                <div>

                  <span>
                    LOCATION
                  </span>

                  <strong>
                    India · Worldwide
                  </strong>

                </div>

                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Maps ↗
                </a>

              </div>


              <div className={styles.mapWrapper}>

                <iframe
                  title="SHAGNEX Web Location"
                  src="https://www.google.com/maps?q=India&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className={styles.mapOverlay}>

                  <FaLocationDot />

                  <span>
                    SHAGNEX Web
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================
            FAQ
        ====================================== */}

        <section className={styles.faqSection}>

          <div className={styles.faqHeading}>

            <div className={styles.eyebrow}>
              <span />
              FAQ
            </div>

            <h2>
              Frequently asked
              <span>questions.</span>
            </h2>

            <p>
              Everything you may want to know before
              starting your project with SHAGNEX Web.
            </p>

          </div>


          <div className={styles.faqList}>

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`${styles.faqItem} ${
                    isOpen ? styles.faqOpen : ""
                  }`}
                >

                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >

                    <span>
                      {faq.question}
                    </span>

                    <span className={styles.faqIcon}>
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>


                  <div className={styles.faqAnswer}>

                    <p>
                      {faq.answer}
                    </p>

                  </div>

                </div>
              );

            })}

          </div>

        </section>

      </div>

    </main>
  );
}