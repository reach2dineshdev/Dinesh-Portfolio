import { useState, useEffect } from "react";

export function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handler = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35 && rect.bottom > window.innerHeight * 0.25) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return active;
}
