import ThreeDBackground from './Components/ThreeDBackground';
import ParticleCanvas from './Components/ParticleCanvas';
import CustomCursor from './Components/CustomCursor';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import ScrollDownButton from './Components/ScrollDownButton';
import AboutSection from './Components/AboutSection';
import ExperienceSection from './Components/ExperienceSection';
import SkillsSection from './Components/SkillsSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
import './App.css'

function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; cursor: none !important; }
        html, body, a, button, input, textarea, select, label { cursor: none !important; }
        body { background-color: #1f242d; font-family: 'Poppins', sans-serif; overflow-x: hidden; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        /* Experience card desktop layout */
        .exp-card-flex { flex-direction: row; }
        .exp-logo-wrapper { width: 100px; justify-content: flex-start; flex-shrink: 0; }
        .exp-content { text-align: left; }
        .exp-company-group { justify-content: flex-start; }
        .exp-badges { justify-content: flex-start; }
        /* About section desktop layout */
        .about-container { flex-direction: row; }
        .about-image { flex: 0 1 420px; max-width: 420px; }
        .about-text { flex: 1 1 auto; text-align: left; }
        .mobile-dropdown { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          .mobile-dropdown { display: block !important; }
        }
        @media (max-width: 768px) {
          body { font-size: 14px; }
          h2 { margin-bottom: 32px !important; }
          h3 { font-size: 16px !important; margin-bottom: 20px !important; }
          p { font-size: 14px !important; line-height: 1.7 !important; }
          section { padding: 60px 1rem !important; }
          #home { padding-top: 160px !important; padding-bottom: 140px !important; }
          .themed-btn-3d { padding: 10px 18px; font-size: 12px; }
          .glassy-badge { font-size: 11px; padding: 5px 10px; }
          /* Experience card mobile layout */
          .exp-card-flex { flex-direction: column !important; align-items: stretch !important; }
          .exp-logo-wrapper { width: 100% !important; display: flex !important; justify-content: center !important; flex-shrink: 1 !important; margin-bottom: 20px !important; }
          .exp-logo-box { width: 90px !important; height: 90px !important; box-shadow: 0 12px 40px rgba(0,238,255,0.15) !important; border-radius: 24px !important; }
          .exp-logo-box img { width: 75% !important; height: 75% !important; }
          .exp-content { width: 100% !important; text-align: center !important; }
          .exp-header-flex { flex-direction: column !important; align-items: center !important; justify-content: center !important; gap: 16px !important; }
          .exp-role { font-size: clamp(18px, 5vw, 22px) !important; text-align: center !important; margin-bottom: 0 !important; }
          .exp-company-group { justify-content: center !important; flex-wrap: wrap !important; gap: 8px !important; margin-bottom: 16px !important; }
          .exp-badges { justify-content: center !important; margin-top: 16px !important; margin-bottom: 16px !important; }
          .exp-summary { text-align: center !important; margin-top: 16px !important; font-size: 14px !important; }
          .exp-highlights { text-align: left !important; padding: 16px 16px 16px 36px !important; background: rgba(0,0,0,0.2) !important; border-radius: 16px !important; border: 1px solid rgba(255,255,255,0.03) !important; margin-top: 20px !important; }
          .exp-highlights li { margin-bottom: 10px !important; font-size: 14px !important; }
          /* About section mobile layout */
          .about-container { flex-direction: column !important; align-items: stretch !important; }
          .about-image { flex: 1 1 100% !important; max-width: 100% !important; margin-bottom: 20px !important; display: flex !important; justify-content: center !important; }
          .about-text { flex: 1 1 100% !important; text-align: center !important; }
          
          /* Footer mobile layout */
          .footer-panel { margin: 0 1rem 24px 1rem !important; border-radius: 20px !important; }
        }
        @media (max-width: 480px) {
          section { padding: 40px 0.75rem !important; }
          #home { padding-top: 150px !important; padding-bottom: 140px !important; }
          h2 { font-size: 1.8rem !important; }
          .themed-btn-3d { padding: 8px 14px; font-size: 11px; }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #1f242d; }
        ::-webkit-scrollbar-thumb { background: #0ef; border-radius: 3px; }
        /* Premium Neon Border Tracing Buttons */
        .themed-btn-3d { 
          padding: 12px 26px; 
          border-radius: 12px; 
          font-weight: 700; 
          letter-spacing: 0.8px; 
          cursor: pointer; 
          display: inline-flex; 
          align-items: center; 
          justify-content: center; 
          position: relative; 
          overflow: hidden;
          background: transparent;
          border: none;
          color: #0ef;
          z-index: 1;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        .themed-btn-3d::before {
          content: "";
          position: absolute;
          top: 50%; left: 50%;
          width: 300%; height: 300%;
          background: conic-gradient(from 0deg, transparent 60%, #0ef 80%, #d62976 100%);
          animation: spinTracing 3s linear infinite;
          transform: translate(-50%, -50%);
          z-index: -2;
        }
        
        .themed-btn-3d::after {
          content: "";
          position: absolute;
          inset: 2px;
          border-radius: 10px;
          background: #081118;
          z-index: -1;
          transition: all 0.3s ease;
        }

        @keyframes spinTracing {
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Hover state */
        .themed-btn-3d:hover {
          color: #fff;
          text-shadow: 0 0 8px rgba(255,255,255,0.8);
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0,238,255,0.25), 0 0 20px rgba(214,41,118,0.25);
        }
        
        .themed-btn-3d:hover::before {
          background: conic-gradient(from 0deg, #0ef, #d62976, #0ef);
          animation: spinTracing 1.5s linear infinite;
        }
        
        .themed-btn-3d:hover::after {
          background: rgba(0,238,255,0.15);
        }

        .themed-btn-3d:active {
          transform: translateY(-1px) scale(0.98);
        }

        .themed-btn-3d.primary {
          color: #0ef;
        }
        
        .themed-btn-3d.outline {
          color: #b8e6ff;
        }
        
        .themed-btn-3d.small { 
          padding: 8px 18px; 
          font-size: 13px; 
          border-radius: 8px;
        }
        .themed-btn-3d.small::after {
          border-radius: 6px;
        }

        /* Neon Ring Pulses (Social Icons) */
        .social-pill { 
          --size: 42px; 
          width: var(--size); 
          height: var(--size); 
          border-radius: 50%; 
          display: inline-flex; 
          align-items: center; 
          justify-content: center; 
          background: transparent; 
          border: 2px solid rgba(0,238,255,0.25);
          box-shadow: 0 0 10px rgba(0,238,255,0.1), inset 0 0 10px rgba(0,238,255,0.1);
          transition: all 0.4s ease; 
          position: relative; 
          z-index: 1; 
          animation: idleBreathing 3.5s ease-in-out infinite;
        }

        .social-pill .social-icon-img { 
          width: 18px; 
          height: 18px; 
          display: block; 
          filter: invert(0.8) brightness(1.2); 
          transition: all 0.4s ease; 
          z-index: 2;
          animation: iconBreathing 3.5s ease-in-out infinite;
        }

        @keyframes idleBreathing {
          0%, 100% { box-shadow: 0 0 8px rgba(0,238,255,0.15), inset 0 0 8px rgba(0,238,255,0.1); border-color: rgba(0,238,255,0.25); }
          50% { box-shadow: 0 0 18px rgba(0,238,255,0.4), inset 0 0 12px rgba(0,238,255,0.2); border-color: rgba(0,238,255,0.6); }
        }

        @keyframes iconBreathing {
          0%, 100% { filter: invert(0.8) brightness(1.2); transform: scale(1); }
          50% { filter: invert(0.9) brightness(1.5); transform: scale(1.08); }
        }

        /* The Radar Wave Rings */
        .social-pill::before, .social-pill::after { 
          content: ""; 
          position: absolute; 
          top: -2px; left: -2px; right: -2px; bottom: -2px; /* Accounts for border */
          border-radius: 50%; 
          border: 2px solid rgba(0,238,255,0.8);
          opacity: 0; 
          z-index: -1;
        }

        /* Base Hover Interaction (cyan default) */
        .social-pill:hover { 
          border-color: rgba(0,238,255,0.8);
          box-shadow: 0 0 20px rgba(0,238,255,0.4), inset 0 0 15px rgba(0,238,255,0.2);
          transform: translateY(-4px);
          animation: none; /* Stops breathing on hover */
        }

        .social-pill:hover .social-icon-img { 
          animation: none; /* Stops breathing on hover */
          filter: invert(1) brightness(2) drop-shadow(0 0 8px rgba(255,255,255,0.8)); 
          transform: scale(1.15);
        }

        .social-pill:hover::before { 
          animation: radarPulse 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite; 
        }
        .social-pill:hover::after { 
          animation: radarPulse 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.75s infinite; 
        }

        @keyframes radarPulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        /* Brand Color overrides */
        .social-instagram:hover { border-color: #d62976; box-shadow: 0 0 20px rgba(214,41,118,0.4), inset 0 0 15px rgba(214,41,118,0.2); }
        .social-instagram:hover::before, .social-instagram:hover::after { border-color: #d62976; }
        
        .social-linkedin:hover { border-color: #0077b5; box-shadow: 0 0 20px rgba(0,119,181,0.4), inset 0 0 15px rgba(0,119,181,0.2); }
        .social-linkedin:hover::before, .social-linkedin:hover::after { border-color: #0077b5; }
        
        .social-x:hover { border-color: #fff; box-shadow: 0 0 20px rgba(255,255,255,0.4), inset 0 0 15px rgba(255,255,255,0.2); }
        .social-x:hover::before, .social-x:hover::after { border-color: #fff; }
        
        .social-github:hover { border-color: #fff; box-shadow: 0 0 20px rgba(255,255,255,0.4), inset 0 0 15px rgba(255,255,255,0.2); }
        .social-github:hover::before, .social-github:hover::after { border-color: #fff; }

        /* small animated accent */
        .btn-glow { box-shadow: 0 8px 28px rgba(0,238,255,0.12), inset 0 0 6px rgba(0,238,255,0.08); }
        .glassy-badge { display:inline-flex; align-items:center; justify-content:center; padding:6px 12px; border-radius:999px; font-size:12px; font-weight:500; letter-spacing:0.4px; text-transform:uppercase; color:#e6f8ff; backdrop-filter: blur(12px); border:1px solid rgba(255,255,255,0.12); box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04), 0 8px 18px rgba(0,0,0,0.25); background: rgba(255,255,255,0.05);
        }
        .footer-panel { 
          background: rgba(10, 16, 22, 0.6); 
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(0,238,255,0.15); 
          box-shadow: 0 15px 40px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.05); 
          border-radius: 24px;
          max-width: 1200px;
          margin: 0 auto 24px auto;
        }
        .footer-text { color:#b8e6ff; font-size:14px; margin:0 0 16px; letter-spacing:0.3px; text-shadow: 0 1px 18px rgba(0,238,255,0.14); }

        /* Navbar Enhancements */
        .nav-logo-text {
          color: #fff;
          transition: all 0.3s ease;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .nav-logo-text:hover {
          color: #0ef;
          text-shadow: 0 0 15px rgba(14,238,255,0.6);
        }
        .beating-heart {
          animation: heartbeat 1.5s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes heartbeat {
          0% { transform: scale(1); }
          15% { transform: scale(1.25); text-shadow: 0 0 15px rgba(255,0,50,0.8); }
          30% { transform: scale(1); }
          45% { transform: scale(1.25); text-shadow: 0 0 15px rgba(255,0,50,0.8); }
          60% { transform: scale(1); }
          100% { transform: scale(1); }
        }

        /* Hero Section Premium Effects */
        .dev-bracket-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(0,238,255,0.04);
          border: 1px solid rgba(0,238,255,0.2);
          border-radius: 8px;
          padding: 8px 24px;
          margin-bottom: 18px;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #fff;
          cursor: default;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .dev-bracket-badge .bracket {
          color: #0ef;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0.8;
          display: inline-block;
          text-shadow: 0 0 10px rgba(0,238,255,0.5);
          font-weight: 800;
        }

        .dev-bracket-badge .bracket.left { margin-right: 6px; }
        .dev-bracket-badge .bracket.right { margin-left: 6px; }

        .dev-bracket-badge .name {
          color: #cbeeff;
          transition: all 0.4s ease;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .dev-bracket-badge:hover {
          background: rgba(0,238,255,0.12);
          border-color: rgba(0,238,255,0.5);
          box-shadow: 0 10px 30px rgba(0,238,255,0.25), inset 0 0 15px rgba(0,238,255,0.1);
          transform: translateY(-4px) scale(1.03);
        }

        .dev-bracket-badge:hover .bracket {
          color: #fff;
          opacity: 1;
          text-shadow: 0 0 15px #0ef, 0 0 30px #0ef;
        }

        .dev-bracket-badge:hover .bracket.left {
          transform: translateX(-10px) scale(1.25);
        }

        .dev-bracket-badge:hover .bracket.right {
          transform: translateX(10px) scale(1.25);
        }

        .dev-bracket-badge:hover .name {
          color: #fff;
          text-shadow: 0 0 12px #0ef, 0 0 24px #0ef;
          letter-spacing: 3px;
        }

        .gradient-text-animated {
          background: linear-gradient(to right, #0ef, #d62976, #0ef);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 3s linear infinite;
        }

        /* Universal Neon Matrix Borders */
        .matrix-border-container {
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .matrix-border-container::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 250%;
          height: 250%;
          background: conic-gradient(from 0deg, transparent 70%, #0ef 80%, #d62976 100%);
          transform: translate(-50%, -50%);
          animation: spinMatrixBorder 4s linear infinite;
          z-index: -2;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .matrix-border-container::after {
          content: "";
          position: absolute;
          inset: 2px; /* Width of the neon border */
          border-radius: inherit;
          background: rgba(10, 16, 22, 0.95); /* Opaque to hide gradient behind content */
          z-index: -1;
        }

        .matrix-border-container:hover::before {
          opacity: 1;
          animation: spinMatrixBorder 2s linear infinite; /* Speeds up on hover */
        }

        @keyframes spinMatrixBorder {
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* 3D Tilt Project Cards */
        .project-tilt-card {
          position: relative;
          border-radius: 18px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.6), inset 0 0 20px rgba(0,238,255,0.02);
          margin-bottom: clamp(24px, 5vw, 40px);
          transition: transform 0.15s ease-out, box-shadow 0.3s ease;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .project-tilt-card:hover {
          box-shadow: 0 20px 60px rgba(0,238,255,0.15), inset 0 0 30px rgba(0,238,255,0.05);
          z-index: 10;
        }

        /* Glare effect inside the card */
        .tilt-glare {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease;
          background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(255, 255, 255, 0.08) 0%,
            transparent 40%
          );
          pointer-events: none;
          z-index: 100;
        }

        .project-tilt-card:hover .tilt-glare {
          opacity: 1;
        }

        /* Contact Section Terminal UI */
        .terminal-window {
          background: rgba(10, 16, 22, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(0, 238, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.05);
          overflow: hidden;
          margin: 0 auto;
        }

        .terminal-header {
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(0, 238, 255, 0.1);
          padding: 12px 20px;
          display: flex;
          align-items: center;
        }

        .terminal-buttons {
          display: flex;
          gap: 8px;
        }

        .terminal-btn {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .terminal-btn.close { background: #ff5f56; box-shadow: 0 0 8px rgba(255,95,86,0.6); }
        .terminal-btn.minimize { background: #ffbd2e; box-shadow: 0 0 8px rgba(255,189,46,0.6); }
        .terminal-btn.maximize { background: #27c93f; box-shadow: 0 0 8px rgba(39,201,63,0.6); }

        .terminal-title {
          flex: 1;
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
          font-family: monospace;
          font-size: 13px;
          letter-spacing: 1px;
          margin-right: 52px; /* Offset to keep title centered due to left buttons */
        }

        .terminal-body {
          padding: 30px;
        }

        @media (max-width: 600px) {
          .terminal-body { padding: 20px 16px; }
        }

        @keyframes gradientPan {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        /* Skill Card Idle Orbit to Hyper-Drive */
        .skill-card {
          background: rgba(10,16,22,0.45);
          border-radius: 14px;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          border: 1px solid transparent; /* Replaced by inset gap */
          backdrop-filter: blur(6px);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 8px 30px rgba(0,0,0,0.55), inset 0 0 18px rgba(0,238,255,0.02);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        /* The default slow orbit beam */
        .skill-card::before {
          content: "";
          position: absolute;
          top: 50%; left: 50%;
          width: 250%; height: 250%;
          background: conic-gradient(from 0deg, transparent 85%, rgba(0, 238, 255, 0.5) 100%);
          transform: translate(-50%, -50%);
          opacity: 1; /* Always visible */
          transition: background 0.3s ease, opacity 0.3s ease;
          animation: spinMatrixBorder 6s linear infinite; /* Slow orbit */
          z-index: -2;
        }

        /* Inner card background */
        .skill-card::after {
          content: "";
          position: absolute;
          inset: 1px; /* Thickness of the border */
          border-radius: 13px; /* Matches inner curve */
          background: rgba(13, 20, 27, 0.95); /* Deep opaque glass */
          z-index: -1;
          transition: background 0.3s ease;
        }
        
        .skill-icon {
          width: 48px; height: 48px; object-fit: contain;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.4s ease;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4));
        }
        .skill-icon.invert-icon {
          filter: invert(1) brightness(2) drop-shadow(0 4px 6px rgba(0,0,0,0.4));
        }
        .skill-name {
          margin: 0; color: #adb7be; font-size: 14px; font-weight: 600; text-align: center;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        
        /* Hover Effects */
        .skill-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 16px 40px rgba(0,0,0,0.7), 0 0 35px rgba(14,238,255,0.15) inset, 0 0 20px rgba(14,238,255,0.2);
        }
        
        /* Activate Hyper-Drive */
        .skill-card:hover::before {
          background: conic-gradient(from 0deg, transparent 60%, #0ef 80%, #d62976 100%); /* Triples in width, adds magenta */
          animation: spinMatrixBorder 1s linear infinite; /* 6x speed */
        }
        
        .skill-card:hover::after {
          background: rgba(18, 28, 38, 0.95); /* Slightly lighter on hover */
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.15) translateY(-4px) rotate(5deg);
          filter: drop-shadow(0 8px 12px rgba(14,238,255,0.3));
        }
        .skill-card:hover .skill-icon.invert-icon {
          filter: invert(1) brightness(2) drop-shadow(0 8px 12px rgba(14,238,255,0.3));
        }
        .skill-card:hover .skill-name {
          color: #fff;
          text-shadow: 0 0 8px rgba(14,238,255,0.6);
          transform: translateY(-2px);
        }
      `}</style>

      <ThreeDBackground />
      <ParticleCanvas />
      <CustomCursor />
      <Navbar />

      <main style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <ScrollDownButton target={"about"} />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App
