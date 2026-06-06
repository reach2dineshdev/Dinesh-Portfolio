import { useState, useRef } from "react";
import { BADGE_BG } from "../data/constants";

export default function ProjectCard({ title, img, fallbackImg, badges, badgeColors, desc, features, live, github, reverse }) {
  const [imgErr, setImgErr] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation: Max tilt is 8 degrees
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-tilt-card matrix-border-container"
    >
      <div className="tilt-glare" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: reverse ? "row-reverse" : "row",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 1 clamp(260px, 100%, 350px)", minWidth: 0, padding: 'clamp(12px, 3vw, 20px)', display: "flex", justifyContent: "center" }}>
          <img
            src={imgErr ? fallbackImg : img}
            onError={() => setImgErr(true)}
            alt={title}
            style={{ maxWidth: "100%", maxHeight: "clamp(200px, 50vw, 260px)", borderRadius: 12, objectFit: "cover", width: "100%" }}
          />
        </div>

        <div style={{ flex: "1 1 clamp(260px, 100%, 400px)", minWidth: 0, padding: "clamp(16px, 4vw, 28px)" }}>
          <h3 style={{ color: "#ffc107", fontWeight: 700, fontSize: "clamp(18px, 5vw, 20px)", marginBottom: 12 }}>
            {title}
          </h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
            {badges.map((b, i) => (
              <span
                key={b}
                className="glassy-badge"
                style={{
                  background: BADGE_BG[badgeColors[i]]
                    ? `${BADGE_BG[badgeColors[i]]}22`
                    : "rgba(255,255,255,0.08)",
                  borderColor: BADGE_BG[badgeColors[i]]
                    ? `${BADGE_BG[badgeColors[i]]}55`
                    : "rgba(255,255,255,0.16)",
                  color: badgeColors[i] === "warning" ? "#e6d766" : "#eef8ff",
                }}
              >
                {b}
              </span>
            ))}
          </div>

          <p
            style={{
              color: "#adb7be",
              lineHeight: 1.8,
              fontSize: "clamp(14px, 3vw, 15px)",
              marginBottom: 12,
            }}
          >
            {desc}
          </p>

          <ul
            style={{
              color: "#adb7be",
              paddingLeft: 18,
              lineHeight: 1.9,
              fontSize: "clamp(13px, 2.5vw, 14px)",
              marginBottom: 18,
            }}
          >
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={live} target="_blank" rel="noreferrer">
              <button className="themed-btn-3d primary small btn-glow">
                <i className="uil uil-external-link-alt" style={{ marginRight: 8, fontSize: 16 }} /> Live
              </button>
            </a>

            <a href={github} target="_blank" rel="noreferrer">
              <button className="themed-btn-3d outline small">
                <i className="uil uil-github-alt" style={{ marginRight: 8, fontSize: 16 }} /> GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
