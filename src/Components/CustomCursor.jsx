import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState({ hovered: false, button: false, hidden: false, isMobile: false });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check if mobile on mount and on resize
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 768;
      setCursorState(prev => ({ ...prev, isMobile }));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (event) => {
      mousePos.current = { x: event.clientX, y: event.clientY };
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const handleScroll = () => {
      // Keep cursor position updated after scroll
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${mousePos.current.x}px`;
        cursor.style.top = `${mousePos.current.y}px`;
      }
    };

    const highlightInteractive = (event) => {
      const target = event.target;
      const isHamburger = Boolean(target.closest(".hamburger"));
      
      const button = Boolean(target.closest("button, [role=button]")) && !isHamburger;
      const interactive = Boolean(target.closest("a, button, input, textarea, select, label, [role=button]")) && !isHamburger;
      setCursorState(prev => ({ ...prev, hovered: interactive, button, hidden: isHamburger }));
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousemove", highlightInteractive);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousemove", highlightInteractive);
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const { hovered, hidden, isMobile } = cursorState;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        pointerEvents: "none",
        transform: hovered ? "translate3d(-50%, -50%, 0) rotate(90deg)" : "translate3d(-50%, -50%, 0) rotate(0deg)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: isMobile ? 0 : hidden ? 0 : 1,
        transition: "opacity 0.15s ease, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
    >
      {/* Center Dot */}
      <div style={{
        width: hovered ? 4 : 6,
        height: hovered ? 4 : 6,
        borderRadius: "50%",
        background: "rgba(14,238,255,1)",
        boxShadow: "0 0 10px rgba(14,238,255,0.8)",
        transition: "width 0.2s ease, height 0.2s ease",
      }} />

      {/* Crosshairs that shoot out from center */}
      <div style={{ position: "absolute", top: hovered ? 4 : 20, width: 2, height: 8, background: "rgba(14,238,255,0.8)", boxShadow: "0 0 8px rgba(14,238,255,0.5)", opacity: hovered ? 1 : 0, transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }} />
      <div style={{ position: "absolute", bottom: hovered ? 4 : 20, width: 2, height: 8, background: "rgba(14,238,255,0.8)", boxShadow: "0 0 8px rgba(14,238,255,0.5)", opacity: hovered ? 1 : 0, transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }} />
      <div style={{ position: "absolute", left: hovered ? 4 : 20, width: 8, height: 2, background: "rgba(14,238,255,0.8)", boxShadow: "0 0 8px rgba(14,238,255,0.5)", opacity: hovered ? 1 : 0, transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }} />
      <div style={{ position: "absolute", right: hovered ? 4 : 20, width: 8, height: 2, background: "rgba(14,238,255,0.8)", boxShadow: "0 0 8px rgba(14,238,255,0.5)", opacity: hovered ? 1 : 0, transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }} />
    </div>
  );
}
