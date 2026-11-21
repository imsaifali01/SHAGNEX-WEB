"use client";

import {
  useCallback,
  useState,
  useSyncExternalStore,
} from "react";

import Hero from "@/components/Hero/Hero";
import WelcomeScreen from "@/components/WelcomeScreen/WelcomeScreen";

const emptySubscribe = () => () => {};
const getServerSnapshot = () => false;
const getClientSnapshot = () => true;

export default function Home() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = useCallback(() => {
    setShowWelcome(false);
  }, []);

  return (
    <>
      {mounted && showWelcome && (
        <WelcomeScreen
          onComplete={handleWelcomeComplete}
        />
      )}

      <main>
        <Hero />
      </main>
    </>
  );
}
