export default function SkillCard({ name, icon }) {
  return (
    <div className="skill-card">
      <img src={icon} alt={name} className={`skill-icon ${name === 'GitHub' || name === 'AI-Assisted Dev' ? 'invert-icon' : ''}`} />
      <p className="skill-name">{name}</p>
    </div>
  );
}
