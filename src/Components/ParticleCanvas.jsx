import { useRef, useEffect } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let dpr = window.devicePixelRatio || 1;
    let w = window.innerWidth,
      h = window.innerHeight;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = [];

    const symbols = ["</>", "{}", "<>", "JS", "UI", "DB", "API", "<>", "&lt;/&gt;"];

    const mkP = (x, y, baseSpeed = 1) => {
      const angle = Math.random() * Math.PI * 2; // NOSONAR
      const speed = baseSpeed + Math.random() * 1.1; // NOSONAR
      const hues = [180, 190, 200, 170, 160];
      const symbol = symbols[Math.floor(Math.random() * symbols.length)]; // NOSONAR
      const size = 1.5 + Math.random() * 3; // NOSONAR
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        radius: size,
        phase: Math.random() * Math.PI * 2, // NOSONAR
        color: `hsla(${hues[Math.floor(Math.random() * hues.length)]},100%,70%,${0.5 + Math.random() * 0.35})`, // NOSONAR
        life: 0,
        maxLife: 110 + Math.random() * 100, // NOSONAR
        symbol,
        size,
      };
    };

    const spawnEdge = () => {
      const edge = Math.floor(Math.random() * 4); // NOSONAR
      switch (edge) {
        case 0:
          return mkP(Math.random() * w, -10, 0.6); // NOSONAR
        case 1:
          return mkP(Math.random() * w, h + 10, 0.6); // NOSONAR
        case 2:
          return mkP(-10, Math.random() * h, 0.6); // NOSONAR
        default:
          return mkP(w + 10, Math.random() * h, 0.6); // NOSONAR
      }
    };

    let mouseX = -1000;
    let mouseY = -1000;
    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (Math.random() > 0.4) { // NOSONAR
        particles.push(mkP(e.clientX, e.clientY, 1.2));
      }
    };
    const onLeave = () => { mouseX = -1000; mouseY = -1000; };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      if (particles.length < 180 && Math.random() < 0.22) { // NOSONAR
        particles.push(spawnEdge());
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vx *= 0.975;
        p.vy *= 0.975;
        p.x += p.vx + Math.sin(p.life * 0.08 + p.phase) * 0.6;
        p.y += p.vy + Math.cos(p.life * 0.06 + p.phase) * 0.35;
        p.life += 1;
        p.alpha = Math.max(0, 1 - p.life / p.maxLife);

        ctx.save();
        ctx.globalAlpha = p.alpha;
        if (p.symbol && Math.random() > 0.3) { // NOSONAR
          ctx.fillStyle = p.color;
          ctx.font = `${10 + p.size * 3}px Poppins, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 6;
          ctx.fillText(p.symbol, p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = p.radius * 4;
          ctx.fill();
        }
        ctx.restore();

        // Draw interactive line to mouse
        const dist = Math.hypot(p.x - mouseX, p.y - mouseY);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(14,238,255, ${0.4 * (1 - dist / 140) * p.alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        if (p.life > p.maxLife || p.x < -40 || p.x > w + 40 || p.y < -40 || p.y > h + 40) {
          particles.splice(i, 1);
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 1 }} />;
}
