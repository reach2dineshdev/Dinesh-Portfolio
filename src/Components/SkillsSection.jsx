import SkillCard from "./SkillCard";
import { FRONTEND_SKILLS, BACKEND_SKILLS, OTHER_SKILLS } from "../data/constants";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "0 1.5rem 80px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionTitle title="My" highlight="Skills" marginBottom={48} />

      <ScrollReveal>
        <h3 style={{ textAlign: "center", color: "#ffc107", fontWeight: 700, marginBottom: 24, fontSize: "clamp(16px, 4vw, 18px)" }}>
          Front-end
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(clamp(100px, 20vw, 130px),1fr))", gap: "clamp(12px, 2vw, 16px)", marginBottom: 48 }}>
          {FRONTEND_SKILLS.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <h3 style={{ textAlign: "center", color: "#ffc107", fontWeight: 700, marginBottom: 24, fontSize: "clamp(16px, 4vw, 18px)" }}>
          Back-end
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(clamp(100px, 20vw, 130px),1fr))", gap: "clamp(12px, 2vw, 16px)", marginBottom: 48 }}>
          {BACKEND_SKILLS.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <h3 style={{ textAlign: "center", color: "#ffc107", fontWeight: 700, marginBottom: 24, fontSize: "clamp(16px, 4vw, 18px)" }}>
          Others
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(clamp(100px, 20vw, 130px),1fr))", gap: "clamp(12px, 2vw, 16px)" }}>
          {OTHER_SKILLS.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
