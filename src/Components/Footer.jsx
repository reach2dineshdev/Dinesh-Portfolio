import { SOCIAL } from "../data/constants";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <ScrollReveal>
      <footer
        className="footer-panel matrix-border-container"
        style={{
          padding: "32px 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 20 }}>
          {SOCIAL.map((s) => {
            const cls = `social-pill social-${s.label.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={cls}
                style={{ textDecoration: "none", ['--size']: '40px' }}
                aria-label={s.label}
              >
                <span className="sheen" aria-hidden />
                <img src={s.icon} alt={s.label} className="social-icon-img" />
              </a>
            );
          })}
        </div>

        <div className="footer-text" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "6px 8px" }}>
          <span style={{ whiteSpace: "nowrap" }}>Copyright &copy; {year} by</span>
          <a href="#home" className="nav-logo-text" style={{ fontSize: 16, textDecoration: "none", fontWeight: 700, display: "flex", alignItems: "center" }}>
            Dinesh<span style={{ color: "#0ef", marginLeft: 2 }}>.</span><span className="beating-heart" style={{ display: "inline-block", marginLeft: 4 }}>❤️</span>
          </a>
          <span style={{ whiteSpace: "nowrap" }}>| All Rights Reserved.</span>
        </div>
      </footer>
    </ScrollReveal>
  );
}
