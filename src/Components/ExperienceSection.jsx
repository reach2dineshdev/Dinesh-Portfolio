import EXPERIENCES from "../data/experience";
import { BADGE_BG } from "../data/constants";
import softtechLogo from "../assets/images/softtechashram.png";
import tvsLogo from "../assets/images/TVSSCS.png";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "0 1.5rem 80px", maxWidth: 1000, margin: "0 auto" }}>
      <SectionTitle title="My" highlight="Experience" />

      <div style={{ maxWidth: 920, margin: "0 auto", display: 'grid', gap: 'clamp(12px, 3vw, 20px)' }}>
        {EXPERIENCES.map((exp) => (
          <ScrollReveal key={exp.id}>
            <div
            key={exp.id}
            className="matrix-border-container"
            style={{ borderRadius: 18, padding: 'clamp(14px, 3vw, 20px)', marginBottom: 'clamp(16px, 3vw, 24px)', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}
          >
            

            <div className="exp-card-flex" style={{ display: 'flex', gap: 'clamp(12px, 3vw, 18px)', alignItems: 'flex-start' }}>
              {/* Logo - left on desktop, top center on mobile */}
              <div className="exp-logo-wrapper" style={{ width: 100, display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <div
                  className="exp-logo-box"
                  style={{
                    width: 84,
                    height: 84,
                    borderRadius: 16,
                    background: 'linear-gradient(180deg, rgba(14,238,255,0.04), rgba(0,0,0,0.16))',
                    border: '1px solid rgba(14,238,255,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    boxShadow: '0 10px 36px rgba(2,12,20,0.6), inset 0 3px 10px rgba(255,255,255,0.02)'
                  }}
                >
                  {exp.logo ? (
                    <img src={exp.logo === '/src/assets/images/softtechashram.png' ? softtechLogo : exp.logo === '/src/assets/images/TVSSCS.png' ? tvsLogo : exp.logo} alt={exp.company} style={{ width: 64, height: 64, objectFit: 'contain', imageRendering: 'auto' }} />
                  ) : (
                    <div style={{ color: '#0ef', fontWeight: 700, fontSize: 18 }}>{exp.company.split(' ').map(w=>w[0]).join('')}</div>
                  )}
                </div>
              </div>

              {/* Content - right on desktop, full width below logo on mobile */}
              <div className="exp-content" style={{ flex: 1 }}>
                <div className="exp-header-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
                  <div style={{ flex: 1 }}>
                    <h4 className="exp-role" style={{ margin: 0, color: '#ffc107', fontWeight: 700, fontSize: 18 }}>{exp.role}</h4>
                    <div className="exp-company-group" style={{ display:'flex', gap: 8, alignItems:'center', marginTop:6 }}>
                      <div style={{ background:'linear-gradient(90deg,#071b23,#0b2a35)', padding:'6px 10px', borderRadius:8, color:'#cfeffb', fontWeight:600, fontSize:13 }}>
                        {exp.company}
                      </div>
                      {exp.location ? <span style={{ color:'#7f9aa3' }}>{exp.location}</span> : null}
                    </div>
                  </div>

                  <div>
                    <span style={{ background: 'rgba(23,162,184,0.12)', color: '#17a2b8', padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap', display: 'inline-block' }}>
                      {exp.start} – {exp.end}
                    </span>
                  </div>
                </div>

                {/* badges below company */}
                {exp.tech && (
                  <div className="exp-badges" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
                    {exp.tech.map((t, i) => {
                      const key = t.toLowerCase().replace(/[^a-z0-9]+/g, '');
                      const palette = ['#0d6efd', '#0dcaf0', '#ffc107', '#198754', '#dc3545', '#6f42c1', '#20c997', '#fd7e14'];
                      const base = BADGE_BG[key] || palette[i % palette.length];
                      const bg = `${base}22`;
                      const border = `${base}55`;
                      return (
                        <span
                          key={t}
                          className="glassy-badge"
                          style={{
                            background: bg,
                            borderColor: border,
                            color: '#eef8ff',
                            fontSize: 12,
                            padding: '6px 10px'
                          }}
                        >
                          {t}
                        </span>
                      );
                    })}
                  </div>
                )}

                <p className="exp-summary" style={{ color: '#adb7be', lineHeight: 1.8, marginTop: 12, marginBottom: 12 }}>{exp.summary}</p>

                <ul className="exp-highlights" style={{ color: '#adb7be', paddingLeft: 20, lineHeight: 1.9, fontSize: 15, marginBottom: 12 }}>
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
