import { useRef } from "react";
import { CV_LINK } from "../data/constants";
import SectionTitle from "./SectionTitle";
import aboutImage from "../assets/images/about.svg";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max rotation 12 degrees
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    imageRef.current.style.setProperty('--mouse-x', `${x}px`);
    imageRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform = ''; // Reset to let CSS animation take over
    imageRef.current.style.setProperty('--mouse-x', `-1000px`);
    imageRef.current.style.setProperty('--mouse-y', `-1000px`);
  };

  return (
    <section id="about" style={{ padding: "0 1.5rem 80px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionTitle title="About" highlight="Me" />

      <ScrollReveal>
        <div
          className="about-container matrix-border-container"
          style={{
            borderRadius: 20,
            padding: 'clamp(20px, 5vw, 40px)',
            display: "flex",
            gap: "clamp(1rem, 5vw, 4rem)",
            alignItems: "center",
            boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          }}
        >
          {/* SVG illustration */}
          <div className="about-image" style={{ display: "flex", justifyContent: "center", perspective: "1000px" }}>
            <style>{`
              @keyframes aboutImageFloat {
                0% { transform: translateY(0px) rotateX(2deg) rotateY(-2deg); box-shadow: 0 12px 36px rgba(0,0,0,0.5), inset 0 1px 8px rgba(255,255,255,0.04), 0 0 15px rgba(14,238,255,0.1); }
                50% { transform: translateY(-12px) rotateX(-2deg) rotateY(2deg); box-shadow: 0 16px 48px rgba(0,0,0,0.6), inset 0 2px 12px rgba(255,255,255,0.08), 0 0 45px rgba(14,238,255,0.25); }
                100% { transform: translateY(0px) rotateX(2deg) rotateY(-2deg); box-shadow: 0 12px 36px rgba(0,0,0,0.5), inset 0 1px 8px rgba(255,255,255,0.04), 0 0 15px rgba(14,238,255,0.1); }
              }
              .about-image-animated {
                animation: aboutImageFloat 5s ease-in-out infinite;
                transition: box-shadow 0.4s ease, border-color 0.4s ease;
                position: relative;
                overflow: hidden;
                will-change: transform;
              }
              .about-image-animated:hover {
                animation: none; /* Stops float so JS tilt works smoothly */
                border-color: rgba(14,238,255,0.4) !important;
                box-shadow: 0 20px 60px rgba(14,238,255,0.2), inset 0 0 20px rgba(14,238,255,0.1) !important;
              }
              /* Holographic Glare Effect */
              .about-image-animated::after {
                content: "";
                position: absolute;
                inset: 0;
                border-radius: inherit;
                opacity: 0;
                transition: opacity 0.3s ease;
                background: radial-gradient(
                  600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                  rgba(255, 255, 255, 0.15) 0%,
                  transparent 40%
                );
                pointer-events: none;
                z-index: 10;
              }
              .about-image-animated:hover::after {
                opacity: 1;
              }
            `}</style>
            <div
              ref={imageRef}
              className="about-image-animated"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                width: 'clamp(280px, 80vw, 420px)',
                height: 'clamp(240px, 68vw, 360px)',
                borderRadius: 24,
                background: 'linear-gradient(135deg, rgba(14,238,255,0.08) 0%, rgba(14,238,255,0.01) 100%)',
                border: '1px solid rgba(14,238,255,0.2)',
                backdropFilter: 'blur(6px)',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 24,
                cursor: 'pointer',
                transformStyle: "preserve-3d"
              }}
            >
              <img src={aboutImage} alt="About" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))" }} />
            </div>
          </div>

          {/* About text */}
          <div className="about-text" style={{ minWidth: 'auto', textAlign: 'left' }}>
            <p style={{ color: "#adb7be", lineHeight: 1.9, fontSize: 16 }}>
              I'm <strong style={{ color: "#0ef", fontSize: 17 }}>Dinesh</strong>, an Information Technology graduate (8.3 CGPA) who has evolved from a traditional <span style={{ color: "#ffc107", fontWeight: 600 }}>Full Stack Web Developer</span> into a modern <span style={{ color: "#ffc107", fontWeight: 600 }}>Agentic AI Engineer</span>.
            </p>

            <p style={{ color: "#adb7be", margin: "20px 0", lineHeight: 1.9, fontSize: 16 }}>
              Beyond my core expertise in <span style={{ color: "#0ef", fontWeight: 500 }}>React, Spring Boot, and MySQL</span>, I specialize in <span style={{ color: "#0ef", fontWeight: 500 }}>AI-Assisted Development</span>. I am highly proficient with the <strong>Claude ecosystem</strong> (Claude Code, Co-Work), advanced prompt engineering, and integrating <strong>MCP (Model Context Protocol) servers</strong> and plugins to accelerate software delivery.
            </p>

            <p style={{ color: "#adb7be", lineHeight: 1.9, fontSize: 16 }}>
              Whether I am architecting a complex database schema or utilizing AI agents to rapidly prototype new features, my goal is to build robust, scalable, and intelligent applications at lightning speed.
            </p>

            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={CV_LINK} target="_blank" rel="noreferrer">
                <button className="themed-btn-3d primary btn-glow" style={{ fontSize: 15, fontWeight: 600 }}>
                  Download CV <i className="uil uil-file-alt" style={{ marginLeft: 8, fontSize: 18 }} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
