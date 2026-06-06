import { SOCIAL, CV_LINK, CONTACT_EMAIL } from "../data/constants";
import { useTypingEffect } from "../hooks/useTypingEffect";
import profileImage from "../assets/images/DineshProfile.png";

export default function HeroSection() {
  const typed = useTypingEffect(["Developer", "Agentic AI Engineer", "Creator"]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: 180,
        paddingBottom: 140,
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
          gap: "2rem",
          margin: "auto 0",
        }}
      >
        {/* Text side */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <div className="dev-bracket-badge">
            <span className="bracket left">&lt;</span>
            <span className="name">Dinesh</span>
            <span className="bracket right">/&gt;</span>
          </div>

          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            I'm <span className="gradient-text-animated">{typed}</span>
            <span style={{ borderRight: "2px solid #0ef", marginLeft: 2, animation: "blink 1s step-end infinite" }} />
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "#adb7be",
              lineHeight: 1.8,
              marginBottom: 28,
              maxWidth: 520,
            }}
          >
            A Passionate Full Stack Web Developer & Agentic AI Engineer. Skilled in building complex applications with React & Spring Boot, and utilizing advanced AI agents (Claude, MCP servers) to rapidly architect software.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <button className="themed-btn-3d primary btn-glow" style={{ fontSize: 15 }}>
                Hire Me
              </button>
            </a>

            <a href={CV_LINK} target="_blank" rel="noreferrer">
              <button className="themed-btn-3d outline" style={{ fontSize: 15 }}>
                Download CV <i className="uil uil-file-alt" style={{ marginLeft: 8 }} />
              </button>
            </a>
          </div>

          <div style={{ display: "flex", gap: 14 }}>
            {SOCIAL.map((s) => {
              const cls = `social-pill social-${s.label.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cls}
                  style={{ textDecoration: "none", fontSize: 18 }}
                  aria-label={s.label}
                >
                  <span className="sheen" aria-hidden />
                  <img src={s.icon} alt={s.label} className="social-icon-img" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Profile image with orbiting tech stack */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", flex: '1 1 clamp(260px, 50vw, 400px)', minWidth: 0, padding: "40px 0" }}>
          <style>{`
            @keyframes profileFloat {
              0% { transform: translateY(0px); box-shadow: 0 0 40px rgba(0,238,255,0.2); }
              50% { transform: translateY(-15px); box-shadow: 0 0 80px rgba(0,238,255,0.4); }
              100% { transform: translateY(0px); box-shadow: 0 0 40px rgba(0,238,255,0.2); }
            }
            @keyframes orbitSpin { 100% { transform: translate(-50%, -50%) rotate(360deg); } }
            @keyframes counterOrbitSpin { 100% { transform: rotate(-360deg); } }
            
            .hero-profile-container {
              position: relative;
              width: clamp(220px, 40vw, 320px);
              height: clamp(220px, 40vw, 320px);
              border-radius: 50%;
              animation: profileFloat 5s ease-in-out infinite;
              z-index: 2;
              background: linear-gradient(135deg,rgba(0,238,255,0.2),rgba(0,238,255,0.05));
              border: 3px solid rgba(0,238,255,0.4);
              overflow: hidden;
            }
            
            .orbit-container {
              position: absolute;
              top: 50%; left: 50%;
              width: clamp(300px, 55vw, 440px);
              height: clamp(300px, 55vw, 440px);
              transform: translate(-50%, -50%);
              border-radius: 50%;
              border: 1px dashed rgba(0,238,255,0.25);
              animation: orbitSpin 24s linear infinite;
              z-index: 1;
            }
            
            .orbit-icon {
              position: absolute;
              width: clamp(36px, 6vw, 50px);
              height: clamp(36px, 6vw, 50px);
              background: rgba(10,16,22,0.85);
              border: 1px solid rgba(0,238,255,0.4);
              border-radius: 50%;
              padding: 8px;
              box-shadow: 0 0 20px rgba(0,238,255,0.25);
              animation: counterOrbitSpin 24s linear infinite;
              display: flex; align-items: center; justify-content: center;
              backdrop-filter: blur(4px);
            }
          `}</style>

          <div className="orbit-container">
            <div className="orbit-icon" style={{ top: '0%', left: '50%', transformOrigin: 'center', margin: 'calc(-1 * clamp(18px, 3vw, 25px))' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{width: '100%'}}/>
            </div>
            <div className="orbit-icon" style={{ top: '50%', left: '100%', transformOrigin: 'center', margin: 'calc(-1 * clamp(18px, 3vw, 25px))' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" style={{width: '100%'}}/>
            </div>
            <div className="orbit-icon" style={{ top: '100%', left: '50%', transformOrigin: 'center', margin: 'calc(-1 * clamp(18px, 3vw, 25px))' }}>
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg" alt="Claude" style={{width: '100%', filter: 'invert(1) brightness(2)'}}/>
            </div>
            <div className="orbit-icon" style={{ top: '50%', left: '0%', transformOrigin: 'center', margin: 'calc(-1 * clamp(18px, 3vw, 25px))' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" style={{width: '100%'}}/>
            </div>
          </div>

          <div className="hero-profile-container">
            <img 
              src={profileImage} 
              alt="Dinesh" 
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} 
            />
          </div>
        </div>
      </div>

      {/* Scroll control removed from here - now rendered between Hero and About sections */}
    </section>
  );
}
