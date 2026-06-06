import { useState, useEffect, useRef } from "react";

export default function SectionTitle({ title, highlight, align = "center", marginBottom = 60 }) {
  const [displayText, setDisplayText] = useState(title);
  const [displayHighlight, setDisplayHighlight] = useState(highlight || "");
  const ref = useRef(null);
  const chars = "!<>-_\\/[]{}—=+*^?#_01";

  const startScramble = (targetText, setter) => {
    if (!targetText) return;
    let iteration = 0;
    const interval = setInterval(() => {
      setter(
        targetText.split("").map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration) return targetText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2; // Decrypt speed
    }, 30);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startScramble(title, setDisplayText);
          if (highlight) {
            setTimeout(() => startScramble(highlight, setDisplayHighlight), 150);
          }
        } else {
          // Reset when out of view so it scrambles again
          setDisplayText(""); 
          setDisplayHighlight("");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [title, highlight]);

  return (
    <h2
      ref={ref}
      style={{
        textAlign: align,
        fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
        fontWeight: 800,
        color: "#fff",
        marginBottom: marginBottom,
        letterSpacing: 1
      }}
    >
      {displayText} <span style={{ color: "#0ef", textShadow: "0 0 15px rgba(0, 238, 255, 0.4)" }}>{displayHighlight}</span>
    </h2>
  );
}
