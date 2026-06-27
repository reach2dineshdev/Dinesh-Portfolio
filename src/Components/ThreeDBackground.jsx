import { useRef, useEffect } from "react";

function rotateY(p, a) {
  const ca = Math.cos(a), sa = Math.sin(a);
  return { x: p.x * ca + p.z * sa, y: p.y, z: -p.x * sa + p.z * ca };
}

function rotateX(p, a) {
  const ca = Math.cos(a), sa = Math.sin(a);
  return { x: p.x, y: p.y * ca - p.z * sa, z: p.y * sa + p.z * ca };
}

export default function ThreeDBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let dpr = window.devicePixelRatio || 1;
    let w = window.innerWidth, h = window.innerHeight;
    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // create some floating 3D boxes and symbol planes
    const items = [];
    const COUNT = Math.min(28, Math.floor((w * h) / 90000));
    for (let i = 0; i < COUNT; i++) {
      items.push({
        x: (Math.random() - 0.5) * w * 1.6, // NOSONAR
        y: (Math.random() - 0.5) * h * 1.2, // NOSONAR
        z: Math.random() * 1200 - 600, // NOSONAR
        size: 18 + Math.random() * 36, // NOSONAR
        rot: Math.random() * Math.PI * 2, // NOSONAR
        speed: 0.0004 + Math.random() * 0.0012, // NOSONAR
        type: Math.random() > 0.5 ? 'box' : 'sym', // NOSONAR
        sym: ['</>', '{}', 'JS', 'API', '<>'][Math.floor(Math.random()*5)] // NOSONAR
      });
    }

    let t = 0;
    const focal = 700;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // subtle background gradient
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, 'rgba(12,18,22,0.55)');
      g.addColorStop(1, 'rgba(15,19,23,0.55)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.translate(w / 2, h / 2 - 40);

      for (let i = 0; i < items.length; i++) {
        const it = items[i];
        it.rot += it.speed * (1 + (i % 3) * 0.2);
        // slow orbit
        it.x += Math.sin(t * 0.0006 + i) * 0.12;
        it.y += Math.cos(t * 0.0004 + i * 0.7) * 0.08;
        it.z += Math.sin(t * 0.0008 + i) * 0.15;

        // compute projected position
        let p = { x: it.x, y: it.y, z: it.z };
        p = rotateY(p, it.rot * 0.3);
        p = rotateX(p, it.rot * 0.12);
        const scale = focal / (focal + p.z);
        const sx = p.x * scale;
        const sy = p.y * scale;
        const s = it.size * scale;

        if (it.type === 'box') {
          // draw a rounded rect with depth glow
          ctx.save();
          ctx.globalAlpha = Math.max(0.05, Math.min(0.9, scale));
          ctx.fillStyle = `rgba(14,238,255,${0.06 + scale*0.14})`;
          ctx.strokeStyle = `rgba(14,238,255,${0.14 + scale*0.2})`;
          ctx.lineWidth = 1.2 * scale;
          const rx = sx - s / 2, ry = sy - s / 2;
          const r = Math.max(4, s * 0.12);
          roundRect(ctx, rx, ry, s, s, r);
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        } else {
          ctx.save();
          ctx.globalAlpha = 0.08 + scale * 0.22;
          ctx.fillStyle = `rgba(14,238,255,${0.6 * (0.08 + scale * 0.22)})`;
          ctx.font = `${Math.max(8, 10 + s*0.12)}px Poppins, sans-serif`;
          ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText(it.sym, sx, sy);
          ctx.restore();
        }
      }

      ctx.restore();
      t += 16;
      requestAnimationFrame(draw);
    };

    function roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    draw();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 0 }} />;
}
