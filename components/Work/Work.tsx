"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaCheck,
  FaPlay,
  FaXmark,
} from "react-icons/fa6";

import styles from "./Work.module.css";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  client: string;
  problem: string;
  solution: string;
  stack: string;
  outcome: string;
  image: string;
  video: string;
  hasVideo: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Hospital Management System",
    category: "HEALTHCARE PLATFORM",

    description:
      "A centralized digital platform designed to simplify hospital operations, patient management, appointments, records, and billing.",

    client:
      "Hospital / Healthcare Management",

    problem:
      "Managing patients, doctors, appointments, records, and billing separately can make everyday hospital operations slower and difficult to organize.",

    solution:
      "Built a centralized digital platform where important hospital information and daily workflows can be managed from one organized system.",

    stack:
      "React + Spring Boot + Java + MySQL",

    outcome:
      "A more organized digital workflow for managing patients, appointments, doctors, medical information, and billing.",

    benefits: [
      "Faster patient management",
      "Easy appointment handling",
      "Centralized records",
      "Simplified billing",
      "Organized hospital workflow",
    ],

    image: "/images/work/hospital-management.png",
    video: "/videos/hospital-management.mp4",

    hasVideo: false,
  },

  {
    number: "02",
    title: "E-Commerce Store",
    category: "ONLINE SHOPPING PLATFORM",

    description:
      "A modern shopping experience designed to help businesses showcase products professionally and create a smooth customer journey.",

    client:
      "Online Retail Business",

    problem:
      "Customers need a clear and trustworthy shopping experience where products are easy to discover, understand, and explore.",

    solution:
      "Created a clean online storefront focused on product presentation, simple navigation, customer convenience, and conversion-focused sections.",

    stack:
      "Next.js + React + CSS",

    outcome:
      "A professional online shopping experience that helps customers discover products and move naturally through the buying journey.",

    benefits: [
      "Better product presentation",
      "Smooth shopping experience",
      "Easy product discovery",
      "Mobile-friendly browsing",
      "Stronger online presence",
    ],

    image: "/images/work/ecommerce.png",
    video: "/videos/ecommerce.mp4",

    hasVideo: false,
  },

  {
    number: "03",
    title: "Business Website",
    category: "BUSINESS WEBSITE",

    description:
      "A professional digital presence created to introduce a business, communicate its services clearly, and generate new opportunities.",

    client:
      "Growing Business / Brand",

    problem:
      "Businesses need a professional online presence that communicates their value quickly and gives visitors a clear reason to connect.",

    solution:
      "Designed a focused website around clear messaging, professional presentation, easy navigation, services, and strong calls-to-action.",

    stack:
      "Next.js + React + CSS",

    outcome:
      "A professional digital presence that improves brand credibility, communicates services clearly, and creates opportunities for customer inquiries.",

    benefits: [
      "Builds brand credibility",
      "Clear service presentation",
      "Stronger online presence",
      "Better visitor experience",
      "Lead generation focused",
    ],

    image: "/images/work/bussiness-website.png",
    video: "/videos/business-website.mp4",

    hasVideo: false,
  },

  {
    number: "04",
    title: "Gym & Fitness Platform",
    category: "FITNESS PLATFORM",

    description:
      "A digital platform designed for fitness businesses to showcase services, trainers, plans, and facilities while helping customers connect.",

    client:
      "Gym / Fitness Business",

    problem:
      "Fitness businesses need to present their services and membership options clearly while giving potential customers enough information to take the next step.",

    solution:
      "Created an engaging fitness-focused experience that presents services, trainers, plans, facilities, and contact options in an organized way.",

    stack:
      "React + JavaScript + CSS",

    outcome:
      "A professional fitness platform that improves service presentation, customer engagement, and online visibility.",

    benefits: [
      "Promotes fitness services",
      "Clear membership presentation",
      "Trainer showcase",
      "Better customer engagement",
      "More inquiry opportunities",
    ],

    image: "/images/work/gym-platform.png",
    video: "/videos/gym-platform.mp4",

    hasVideo: false,
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  /* LOCK BACKGROUND SCROLL WHEN MODAL IS OPEN */

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  /* CLOSE MODAL WITH ESC */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <main className={styles.work}>
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
            SELECTED WORK
          </div>

          <h1>
            Work that
            <span>makes an impact.</span>
          </h1>

          <p>
            We create digital experiences designed around
            real business goals — helping brands look
            professional, connect with customers, and grow online.
          </p>
        </section>

        {/* =====================================
            PROJECTS
        ====================================== */}

        <section className={styles.projects}>
          {projects.map((project, index) => {
            const reversed = index % 2 !== 0;

            return (
              <article
                key={project.number}
                className={`${styles.project} ${
                  reversed ? styles.projectReverse : ""
                }`}
              >
                {/* MEDIA */}

                <div className={styles.mediaSide}>
                  <div className={styles.mediaCard}>
                    <div className={styles.mediaTop}>
                      <span className={styles.projectNumber}>
                        {project.number}
                      </span>

                      <div className={styles.companyLogo}>
                        <Image
                          src="/images/shagnex-logo.png"
                          alt="SHAGNEX Web"
                          width={34}
                          height={34}
                        />
                      </div>
                    </div>

                    <div className={styles.mediaFrame}>
                      {project.hasVideo ? (
                        <video
                          className={styles.projectVideo}
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster={project.image}
                        >
                          <source
                            src={project.video}
                            type="video/mp4"
                          />
                        </video>
                      ) : (
                        <Image
                          src={project.image}
                          alt={`${project.title} project preview`}
                          fill
                          priority={index === 0}
                          className={styles.projectImage}
                          sizes="(max-width: 700px) 100vw, 55vw"
                        />
                      )}

                      <div className={styles.mediaOverlay} />

                      {project.hasVideo && (
                        <div className={styles.playButton}>
                          <FaPlay />
                        </div>
                      )}

                      <div className={styles.mediaCategory}>
                        {project.category}
                      </div>
                    </div>
                  </div>
                </div>

                {/* DETAILS */}

                <div className={styles.detailsSide}>
                  <div className={styles.projectMeta}>
                    PROJECT {project.number}
                  </div>

                  <h2>{project.title}</h2>

                  <p className={styles.description}>
                    {project.description}
                  </p>

                  <div className={styles.benefits}>
                    <span className={styles.benefitLabel}>
                      KEY BENEFITS
                    </span>

                    <div className={styles.benefitList}>
                      {project.benefits.slice(0, 4).map((benefit) => (
                        <div
                          key={benefit}
                          className={styles.benefit}
                        >
                          <span className={styles.check}>
                            <FaCheck />
                          </span>

                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* OPEN CASE STUDY MODAL */}

                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={styles.caseStudyButton}
                      onClick={() =>
                        setSelectedProject(project)
                      }
                    >
                      <span>View Case Study</span>

                      <FaArrowUpRightFromSquare />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}

          {/* =====================================
              YOUR NEXT PROJECT
          ====================================== */}

          <article className={styles.nextProject}>
            <div className={styles.nextGlow} />

            <div className={styles.nextLogo}>
              <Image
                src="/images/shagnex-logo.png"
                alt="SHAGNEX Web"
                width={54}
                height={54}
              />
            </div>

            <span className={styles.nextNumber}>
              05 · YOUR NEXT PROJECT
            </span>

            <h2>
              Could be
              <span> yours.</span>
            </h2>

            <p>
              Have an idea that you want to turn into a
              powerful digital experience? Let&apos;s build
              something meaningful together.
            </p>

            <Link
              href="/contact"
              className={styles.nextButton}
            >
              <span>Start Your Project</span>

              <FaArrowUpRightFromSquare />
            </Link>
          </article>
        </section>
      </div>

      {/* =====================================
          CASE STUDY MODAL
      ====================================== */}

      {selectedProject && (
        <div
          className={styles.modalOverlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div
            className={styles.caseStudyModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
          >
            {/* CLOSE */}

            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setSelectedProject(null)}
              aria-label="Close case study"
            >
              <FaXmark />
            </button>

            {/* MODAL CONTENT */}

            <div className={styles.modalContent}>
              {/* HEADER */}

              <div className={styles.modalHeader}>
                <div className={styles.modalCategory}>
                  {selectedProject.category}
                </div>

                <h2 id="case-study-title">
                  {selectedProject.title}
                </h2>

                <p>
                  {selectedProject.description}
                </p>
              </div>

              {/* MEDIA */}

              <div className={styles.modalMedia}>
                {selectedProject.hasVideo ? (
                  <video
                    className={styles.modalVideo}
                    controls
                    playsInline
                    poster={selectedProject.image}
                  >
                    <source
                      src={selectedProject.video}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className={styles.modalImage}
                    sizes="(max-width: 700px) 100vw, 800px"
                  />
                )}
              </div>

              {/* CLIENT */}

              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>
                  CLIENT
                </span>

                <p>
                  {selectedProject.client}
                </p>
              </div>

              {/* PROBLEM */}

              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>
                  PROBLEM
                </span>

                <p>
                  {selectedProject.problem}
                </p>
              </div>

              {/* SOLUTION */}

              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>
                  SOLUTION
                </span>

                <p>
                  {selectedProject.solution}
                </p>
              </div>

              {/* STACK */}

              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>
                  TECH / STACK
                </span>

                <p>
                  {selectedProject.stack}
                </p>
              </div>

              {/* OUTCOME */}

              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>
                  OUTCOME
                </span>

                <p>
                  {selectedProject.outcome}
                </p>
              </div>

              {/* BENEFITS */}

              <div className={styles.modalBenefits}>
                <span className={styles.detailLabel}>
                  KEY BENEFITS
                </span>

                <div className={styles.modalBenefitList}>
                  {selectedProject.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className={styles.modalBenefit}
                    >
                      <FaCheck />

                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FOOTER */}

              <div className={styles.modalFooter}>
                <div className={styles.modalBrand}>
                  <Image
                    src="/images/shagnex-logo.png"
                    alt="SHAGNEX Web"
                    width={35}
                    height={35}
                  />

                  <span>
                    SHAGNEX <strong>Web</strong>
                  </span>
                </div>

                <Link
                  href="/contact"
                  className={styles.modalCta}
                  onClick={() => setSelectedProject(null)}
                >
                  Start a Similar Project
                  <FaArrowUpRightFromSquare />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}