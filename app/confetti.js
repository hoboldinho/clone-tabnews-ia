"use client";

import { useEffect, useState } from "react";

const DURATION = 8000;

export default function Celebration() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [Confetti, setConfetti] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cancelled = false;
    let timer;

    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    import("react-confetti")
      .then(({ default: ConfettiComponent }) => {
        if (cancelled) {
          return;
        }

        setConfetti(() => ConfettiComponent);

        timer = window.setTimeout(() => {
          setConfetti(null);
        }, DURATION);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  if (!Confetti || size.width === 0 || size.height === 0) {
    return null;
  }

  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={300}
      gravity={0.2}
      recycle={false}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 10,
      }}
    />
  );
}
