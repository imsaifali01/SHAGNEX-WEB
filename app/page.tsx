"use client";

import { useState } from "react";

import Hero from "@/components/Hero/Hero";
import WelcomeScreen from "@/components/WelcomeScreen/WelcomeScreen";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {showWelcome && (
        <WelcomeScreen
          onComplete={() => setShowWelcome(false)}
        />
      )}

      <main>
        <Hero />
      </main>
    </>
  );
}
