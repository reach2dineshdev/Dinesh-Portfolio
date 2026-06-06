import { useTranslation } from 'react-i18next';

export default function ScrollDownButton({ target = "about" }) {
  const { t } = useTranslation();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: -130, marginBottom: 80, zIndex: 10, position: "relative" }}>
      <style>{`
        .liquid-mouse-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .liquid-mouse-container:hover {
          transform: translateY(-4px);
        }

        .mouse-outline {
          position: relative;
          width: 32px;
          height: 52px;
          border: 2px solid rgba(14, 238, 255, 0.4);
          border-radius: 20px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
          overflow: hidden;
          box-shadow: 0 0 15px rgba(14, 238, 255, 0.1);
          transition: all 0.4s ease;
          background: transparent;
        }

        .mouse-outline::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background: linear-gradient(180deg, rgba(14, 238, 255, 0), rgba(14, 238, 255, 0.4));
          transition: height 0.4s ease;
          z-index: 0;
        }

        .liquid-mouse-container:hover .mouse-outline {
          border-color: #0ef;
          box-shadow: 0 0 25px rgba(14, 238, 255, 0.3), inset 0 0 10px rgba(14, 238, 255, 0.2);
        }

        .liquid-mouse-container:hover .mouse-outline::before {
          height: 100%;
        }

        .mouse-wheel {
          width: 4px;
          height: 8px;
          background-color: #0ef;
          border-radius: 4px;
          animation: mouse-scroll 1.5s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite;
          box-shadow: 0 0 8px #0ef;
          z-index: 1;
        }

        .mouse-text {
          color: #a8b3c1;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        .liquid-mouse-container:hover .mouse-text {
          color: #0ef;
          text-shadow: 0 0 8px rgba(14, 238, 255, 0.6);
        }

        @keyframes mouse-scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
      `}</style>

      <div 
        className="liquid-mouse-container" 
        onClick={() => scrollTo(target)}
        aria-label={`Scroll to ${target}`}
      >
        <div className="mouse-outline">
          <div className="mouse-wheel"></div>
        </div>
        <span className="mouse-text">{t('scroll')}</span>
      </div>
    </div>
  );
}
