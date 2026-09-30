"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./WelcomeScreen.module.css";

interface WelcomeScreenProps {
  onComplete: () => void;
}

export default function WelcomeScreen({
  onComplete,
}: WelcomeScreenProps) {
  const [visible, setVisible] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setExit(true);
    }, 2600);

    const completeTimer = window.setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 3300);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`${styles.welcome} ${exit ? styles.exit : ""}`}
      aria-label="Welcome to SHAGNEX Web"
    >
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glowOne} aria-hidden="true" />
      <div className={styles.glowTwo} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoGlow} aria-hidden="true" />

          <Image
            src="/images/shagnex-logo.png"
            alt="SHAGNEX Web"
            width={120}
            height={120}
            priority
            className={styles.logo}
          />
        </div>

        <div className={styles.brand}>
          <span className={styles.brandLine} />
          <span>SHAGNEX WEB</span>
          <span className={styles.brandLine} />
        </div>

        <h1>
          Websites That Grow
          <span> Businesses.</span>
        </h1>

        <div className={styles.loading}>
          <span className={styles.loadingBar} />
        </div>

        <p className={styles.loadingText}>
          Building digital experiences
        </p>
      </div>
    </div>
  );
}
