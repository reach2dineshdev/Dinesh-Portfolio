import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/constants";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: "0 1.5rem 80px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionTitle title="My" highlight="Projects" marginBottom={52} />

      {PROJECTS.map((p) => (
        <ScrollReveal key={p.title}>
          <ProjectCard {...p} />
        </ScrollReveal>
      ))}
    </section>
  );
}
