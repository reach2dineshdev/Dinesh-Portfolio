import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from 'prop-types';
import { NAV_LINKS } from "../data/constants";
import { useActiveSection } from "../hooks/useActiveSection";

// Magnetic Hover Wrapper
const MagneticWrapper = ({ children }) => {
  const ref = useRef(null);
  
  const handleMouseMove = (e) => {
    if(!ref.current) return;
    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    const x = clientX - (rect.left + rect.width / 2);
    const y = clientY - (rect.top + rect.height / 2);
    
    ref.current.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px) scale(1.05)`;
  };
  
  const handleMouseLeave = () => {
    if(!ref.current) return;
    ref.current.style.transform = `translate(0px, 0px) scale(1)`;
  };
  
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)", display: "inline-block" }}
    >
      {children}
    </div>
  );
};

MagneticWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const ScrambleLink = ({ l, isActive, scrollTo }) => {
  const [displayText, setDisplayText] = useState(l.label);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const chars = "!<>-_\\/[]{}—=+*^?#_01";

  const triggerScramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let iteration = 0;
    intervalRef.current = setInterval(() => {
      setDisplayText(
        l.label.split("").map((letter, index) => {
          if (index < iteration) return l.label[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iteration >= l.label.length) {
        clearInterval(intervalRef.current);
        setDisplayText(l.label);
      }
      iteration += 1 / 3;
    }, 20);
  }, [l.label]);

  useEffect(() => {
    if (isActive) {
      triggerScramble();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, triggerScramble]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    triggerScramble();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isActive) {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  // Determine active styles based on isActive or isHovered
  const showActiveStyle = isActive || isHovered;
  
  // Clean fallback: If it's not active and not hovered, it MUST be the original label.
  const finalDisplayText = showActiveStyle ? displayText : l.label;

  return (
    <a
      href={l.href}
      onClick={(e) => {
        setIsHovered(false);
        scrollTo(e, l.href);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "8px 16px",
        borderRadius: 10,
        color: showActiveStyle ? (isActive ? "#0ef" : "#fff") : "#a8b3c1",
        textDecoration: "none",
        fontSize: 14,
        fontWeight: 600,
        transition: "all .3s cubic-bezier(0.4, 0, 0.2, 1)",
        background: isActive ? "rgba(14, 238, 255, 0.12)" : (isHovered ? "rgba(14, 238, 255, 0.08)" : "transparent"),
        border: isActive ? "1px solid rgba(14, 238, 255, 0.3)" : "1px solid transparent",
        boxShadow: isActive ? "0 0 20px rgba(14, 238, 255, 0.15), inset 0 1px 3px rgba(255, 255, 255, 0.05)" : (isHovered ? "0 0 15px rgba(14,238,255,0.2)" : "none"),
        textShadow: showActiveStyle ? "0 0 8px rgba(14,238,255,0.8)" : "none",
      }}
    >
      {l.icon && l.icon.startsWith('http') ? (
        <img
          src={l.icon}
          alt={l.label}
          style={{ width: 16, height: 16, filter: isActive ? "drop-shadow(0 0 6px #0ef)" : "brightness(0.9)", transition: "filter .3s" }}
        />
      ) : (
        <i className={l.icon} style={{ fontSize: 15 }} />
      )}
      <span style={{ minWidth: `${l.label.length * 8}px`, display: "inline-block" }}>
        {finalDisplayText}
      </span>
    </a>
  );
};

ScrambleLink.propTypes = {
  l: PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  scrollTo: PropTypes.func.isRequired,
};

export default function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        hamburgerRef.current && !hamburgerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Compute nav position/size for dropdown alignment
  const navTop = scrolled ? 12 : 24;
  const navHeight = scrolled ? 60 : 70;

  return (
    <>
      <nav
        className="matrix-border-container"
        style={{
          position: "fixed",
          top: navTop,
          left: "50%",
          transform: "translateX(-50%)",
          width: scrolled ? "calc(100% - 60px)" : "calc(100% - 40px)",
          maxWidth: 1200,
          zIndex: 1000,
          background: scrolled ? "rgba(10, 16, 22, 0.85)" : "rgba(10, 16, 22, 0.65)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(14, 238, 255, 0.15)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.05)",
          borderRadius: scrolled ? 16 : 24,
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
      >
        <div
          style={{
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: navHeight,
            transition: "height 0.4s ease",
          }}
        >
          <MagneticWrapper>
            <a
              href="#home"
              onClick={(e) => scrollTo(e, "#home")}
              className="nav-logo-text"
              style={{
                fontSize: scrolled ? 22 : 26,
                fontWeight: 800,
                textDecoration: "none",
                letterSpacing: 1,
                display: "flex",
                alignItems: "center",
                transition: "font-size 0.4s ease",
              }}
            >
              Dinesh<span style={{ color: "#0ef", marginLeft: 2 }}>.</span><span className="beating-heart" style={{ display: "inline-block", marginLeft: 4 }}>❤️</span>
            </a>
          </MagneticWrapper>

          {/* Desktop nav */}
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
            {NAV_LINKS.map((l) => {
              const isActive = active === l.href.replace("#", "");
              return (
                <li key={l.href}>
                  <MagneticWrapper>
                    <ScrambleLink l={l} isActive={isActive} scrollTo={scrollTo} />
                  </MagneticWrapper>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            onClick={() => setOpen((o) => !o)}
            style={{
              display: "none",
              background: open ? "rgba(14, 238, 255, 0.2)" : "rgba(14, 238, 255, 0.12)",
              border: "1.5px solid rgba(14, 238, 255, 0.3)",
              color: "#0ef",
              fontSize: 24,
              cursor: "pointer",
              lineHeight: 1,
              borderRadius: 12,
              padding: "8px 12px",
              transition: "all .3s cubic-bezier(0.4, 0, 0.2, 1)",
              fontWeight: 600,
              boxShadow: "0 0 20px rgba(14, 238, 255, 0.1), inset 0 1px 3px rgba(255, 255, 255, 0.05)",
            }}
            className="hamburger"
            aria-label="Toggle menu"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(14, 238, 255, 0.2)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(14, 238, 255, 0.25), inset 0 1px 3px rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = open ? "rgba(14, 238, 255, 0.2)" : "rgba(14, 238, 255, 0.12)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(14, 238, 255, 0.1), inset 0 1px 3px rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <i className={open ? "bi bi-x-lg" : "bi bi-code-slash"} style={{ transition: "transform .3s ease", transform: open ? "rotate(90deg)" : "rotate(0deg)" }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — rendered OUTSIDE <nav> to escape overflow:hidden from matrix-border-container */}
      {open && (
        <div
          ref={dropdownRef}
          className="mobile-dropdown"
          style={{
            position: "fixed",
            top: navTop + navHeight + 12,
            left: "50%",
            transform: "translateX(-50%)",
            width: scrolled ? "calc(100% - 60px)" : "calc(100% - 40px)",
            maxWidth: 1200,
            zIndex: 1001,
            background: "rgba(10, 16, 22, 0.97)",
            border: "1px solid rgba(14, 238, 255, 0.2)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: 20,
            padding: "0.75rem 1rem",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(14, 238, 255, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.05)",
          }}>
          {NAV_LINKS.map((l) => {
            const isActive = active === l.href.replace("#", "");
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 12px",
                  color: isActive ? "#0ef" : "#a8b3c1",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 600,
                  borderBottom: "1px solid rgba(14, 238, 255, 0.05)",
                  borderRadius: 8,
                  background: isActive ? "rgba(14, 238, 255, 0.08)" : "transparent",
                  transition: "all .2s",
                  marginBottom: 6,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(14, 238, 255, 0.06)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isActive ? "rgba(14, 238, 255, 0.08)" : "transparent";
                  e.currentTarget.style.color = isActive ? "#0ef" : "#a8b3c1";
                }}
              >
                <i className={l.icon} style={{ fontSize: 16 }} /> {l.label}
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}
