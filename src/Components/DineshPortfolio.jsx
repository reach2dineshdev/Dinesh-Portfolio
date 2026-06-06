import { useState, useEffect, useRef } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { href: "#home",     label: "Home",    icon: "bi bi-house" },
  { href: "#about",    label: "About",   icon: "bi bi-info-circle" },
  { href: "#skills",   label: "Skills",  icon: "bi bi-code-slash" },
  { href: "#projects", label: "Projects",icon: "bi bi-clipboard2-data" },
  { href: "#contact",  label: "Contact", icon: "bi bi-telephone" },
];

const SOCIAL = [
  { href: "https://www.instagram.com/royal_dinesh_16/",                       icon: "uil uil-instagram",   delay: 250 },
  { href: "https://www.linkedin.com/in/dinesh-fullstackwebdeveloper/",        icon: "uil uil-linkedin-alt",delay: 300 },
  { href: "https://x.com/royal_dinesh_16",                                   icon: "uil uil-twitter",     delay: 350 },
  { href: "https://github.com/dinesh-fullstackwebdeveloper",                  icon: "uil uil-github-alt",  delay: 400 },
];

const FRONTEND_SKILLS = [
  { name: "HTML5",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Sass",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Bootstrap",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
];

const BACKEND_SKILLS = [
  { name: "Java",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "SpringBoot",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "MySQL",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Firebase",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

const OTHER_SKILLS = [
  { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Figma",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Postman",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "SonarQube",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
];

const PROJECTS = [
  {
    title: "Amazon Clone",
    img: "https://raw.githubusercontent.com/dinesh-fullstackwebdeveloper/Amazon_Clone/main/assets/amazonclone.png",
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=Amazon+Clone",
    badges: ["HTML","CSS","JavaScript","Bootstrap","Redux Toolkit","Vite"],
    badgeColors: ["primary","info","warning","success","dark","secondary"],
    desc: "A responsive Amazon Clone replicating the popular e-commerce platform's homepage with fixed navigation, search, shopping cart, product sections, category banners, deals, and advertisements.",
    features: ["🏠 Landing Page with banners and featured products","📂 Category & Subcategory browsing","🔍 Product Search & Filtering","🛒 Product Details with images","👤 User Authentication","💳 Payment Modal (UI)","🌐 API Integration","🛠️ Redux Toolkit state management"],
    live: "https://kaadugal.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/Amazon_Clone",
    reverse: true,
  },
  {
    title: "DineVerse Movie Website",
    img: "https://placehold.co/500x260/23283a/0ef?text=DineVerse",
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=DineVerse",
    badges: ["React","Bootstrap","JavaScript","Vite","TMDb API"],
    badgeColors: ["primary","info","warning","success","danger"],
    desc: "A modern movie discovery app built with React & Vite. Browse, search, and explore detailed info using The Movie Database (TMDb) API with responsive Bootstrap 5 UI and React Router.",
    features: ["🎞️ Browse by category (Now Playing, Top Rated, Popular, Upcoming)","🔍 Search movies by title","📝 Detailed movie information","📱 Responsive Bootstrap 5 design","🧭 React Router navigation","⬆️ Scroll to top on route change"],
    live: "https://dine-verse.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/DineVerse",
    reverse: false,
  },
  {
    title: "DineBuy",
    img: "https://placehold.co/500x260/23283a/0ef?text=DineBuy",
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=DineBuy",
    badges: ["Bootstrap","JavaScript","HTML","CSS"],
    badgeColors: ["info","warning","primary","danger"],
    desc: "An e-commerce platform specializing in premium-quality shoes with product browsing, cart management, and secure checkout built with React.js, Bootstrap, and Firebase.",
    features: ["🏠 Home Page – featured products and deals","👟 Detailed product pages","🔐 Secure user login","📱 Responsive Bootstrap design"],
    live: "https://dinebuy.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/DineBuy-Ecommerce",
    reverse: true,
  },
  {
    title: "TODO-LIST",
    img: "https://placehold.co/500x260/23283a/0ef?text=TODO-LIST",
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=TODO-LIST",
    badges: ["JavaScript","Firebase","HTML","CSS"],
    badgeColors: ["primary","info","success","danger"],
    desc: "A CRUD application using JavaScript and Firebase Realtime Database. Users can add, edit, delete, and mark tasks as completed with instant real-time updates.",
    features: ["📝 Add, View, Edit, Delete records","👀 Dynamic table display","✏️ Update existing records","📱 Responsive across all devices"],
    live: "https://dinesh-todolist-with-firebase.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/todolist-firebase",
    reverse: false,
  },
  {
    title: "GFC Website",
    img: "https://placehold.co/500x260/23283a/0ef?text=GFC+Website",
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=GFC+Website",
    badges: ["HTML","CSS","JavaScript"],
    badgeColors: ["primary","danger","warning"],
    desc: "A responsive and interactive webpage for GFC featuring modern layouts, animations, and user engagement features built with HTML, CSS, and JavaScript.",
    features: ["✨ Modern layout with animations","📱 Fully responsive design","🎨 Interactive UI elements"],
    live: "https://66c73bc457638b2545a0e9e0--dinesh-gfc-webpage.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/gfc-webpage",
    reverse: true,
  },
  {
    title: "Rock Paper Scissors",
    img: "https://placehold.co/500x260/23283a/0ef?text=Rock+Paper+Scissors",
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=Rock+Paper+Scissors",
    badges: ["JavaScript","HTML","CSS"],
    badgeColors: ["primary","info","danger"],
    desc: "A fun and interactive Rock Paper Scissors game vs an AI opponent with smooth animations, glowing UI effects, and real-time score tracking.",
    features: ["⚔️ Player vs Computer","💫 Animated glowing UI","🔥 6-life system","🖱️ Custom animated cursor","❄️ Snowflake background","📱 Mobile responsive"],
    live: "https://kal-kaagidham-kathirikol.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/stone-paper-scissors",
    reverse: false,
  },
  {
    title: "Tic Tac Toe – Ghost Mode",
    img: "https://placehold.co/500x260/23283a/0ef?text=Ghost+Tic+Tac+Toe",
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=Ghost+Tic+Tac+Toe",
    badges: ["JavaScript","HTML","CSS"],
    badgeColors: ["primary","success","danger"],
    desc: "A modern animated Tic Tac Toe with a ghostly theme. Features Player vs Player and Player vs AI (Ghost) modes, three AI difficulty levels, neon UI, and a real-time scoreboard.",
    features: ["🧠 Easy / Medium / Hard AI (Minimax)","👻 Ghost Mode with animated mist","🎨 Neon glow effects","💯 Real-time score tracking","📱 Responsive design","🔄 Mode switch & board reset"],
    live: "https://ghost-tic-tac-toe.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/ghost-tic-tac-toe",
    reverse: true,
  },
];

// ── HOOKS ─────────────────────────────────────────────────────────────────────
function useTypingEffect(strings, typeSpeed = 100, backSpeed = 80, backDelay = 2000) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = strings[idx];
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => { setText(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, typeSpeed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), backDelay);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => { setText(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, backSpeed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setIdx(i => (i + 1) % strings.length);
          setTyping(true);
        }, 0);
        return () => clearTimeout(t);
      }
    }
  }, [charIdx, typing, idx, strings, typeSpeed, backSpeed, backDelay]);

  return text;
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const handler = () => {
      const sections = ["home","about","experience","skills","projects","contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35 && rect.bottom > window.innerHeight * 0.25) {
          setActive(id); break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

// ── COMPONENTS ────────────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let dpr = window.devicePixelRatio || 1;
    let w = window.innerWidth, h = window.innerHeight;
    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(1,0,0,1,0,0); ctx.scale(dpr,dpr);
    };
    resize();
    window.addEventListener("resize", resize);
    const particles = [];
    const mkP = (x,y) => {
      const angle = Math.random()*Math.PI*2, speed = 2+Math.random()*3;
      const hues = [180,190,200,170,160];
      return { x,y, vx:Math.cos(angle)*speed, vy:Math.sin(angle)*speed,
               alpha:1, radius:3+Math.random()*3,
               color:`hsla(${hues[Math.floor(Math.random()*5)]},100%,60%,${0.7+Math.random()*0.3})`,
               life:0, maxLife:30+Math.random()*20 };
    };
    const onMove = e => { for (let i=0;i<12;i++) particles.push(mkP(e.clientX,e.clientY)); };
    document.addEventListener("mousemove", onMove);
    let raf;
    const draw = () => {
      ctx.clearRect(0,0,w,h);
      for (let i=particles.length-1;i>=0;i--) {
        const p = particles[i];
        p.x+=p.vx; p.y+=p.vy; p.vx*=0.96; p.vy*=0.96; p.life++;
        p.alpha = Math.max(0, 1-p.life/p.maxLife);
        ctx.save(); ctx.globalAlpha=p.alpha; ctx.beginPath();
        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
        ctx.fillStyle=p.color; ctx.shadowColor=p.color; ctx.shadowBlur=8; ctx.fill(); ctx.restore();
        if (p.life>p.maxLife) particles.splice(i,1);
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener("resize",resize); document.removeEventListener("mousemove",onMove); cancelAnimationFrame(raf); };
  }, []);
  return <canvas ref={canvasRef} style={{ position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:0 }} />;
}

function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const id = href.replace("#","");
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:1000,backgroundColor:"#1f242d",borderBottom:"1px solid rgba(0,238,255,0.1)" }}>
      <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",height:64 }}>
        <a href="#home" onClick={e=>scrollTo(e,"#home")} style={{ fontSize:26,fontWeight:700,color:"#fff",textDecoration:"none",letterSpacing:1 }}>
          Dinesh<span style={{ color:"#0ef" }}>.</span>
        </a>
        {/* Desktop nav */}
        <ul style={{ display:"flex",gap:"0.5rem",listStyle:"none",margin:0,padding:0 }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e=>scrollTo(e,l.href)}
                style={{ display:"flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:8,
                         color: active===l.href.replace("#","") ? "#0ef" : "#ccc",
                         textDecoration:"none",fontSize:15,fontWeight:500,transition:"color .2s",
                         background: active===l.href.replace("#","") ? "rgba(0,238,255,0.08)" : "transparent" }}>
                <i className={l.icon} style={{ fontSize:16 }} />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button onClick={()=>setOpen(o=>!o)}
          style={{ display:"none",background:"none",border:"none",color:"#fff",fontSize:26,cursor:"pointer",lineHeight:1 }}
          className="hamburger" aria-label="Toggle menu">
          <i className={open ? "bi bi-x-lg" : "bi bi-list"} />
        </button>
      </div>
      {/* Mobile dropdown */}
      {open && (
        <div style={{ backgroundColor:"#1f242d",borderTop:"1px solid rgba(0,238,255,0.1)",padding:"1rem 1.5rem" }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={e=>scrollTo(e,l.href)}
              style={{ display:"flex",alignItems:"center",gap:10,padding:"12px 0",color:"#ccc",textDecoration:"none",fontSize:16,borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
              <i className={l.icon} /> {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const typed = useTypingEffect(["Designer","Creator","Developer"]);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  return (
    <section id="home" style={{ minHeight:"100vh",display:"flex",alignItems:"center",padding:"80px 1.5rem 0",maxWidth:1200,margin:"0 auto" }}>
      <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",flexWrap:"wrap",gap:"2rem" }}>
        {/* Text side */}
        <div style={{ flex:1,minWidth:280 }}>
          <div style={{ display:"inline-block",background:"rgba(0,238,255,0.08)",border:"1px solid rgba(0,238,255,0.3)",
                        borderRadius:8,padding:"6px 18px",marginBottom:18,fontSize:15,color:"#0ef",fontWeight:600,letterSpacing:1 }}>
            Dinesh
          </div>
          <h1 style={{ fontSize:"clamp(2rem,5vw,3.2rem)",fontWeight:700,color:"#fff",lineHeight:1.2,marginBottom:16 }}>
            I'm <span style={{ color:"#0ef" }}>{typed}</span>
            <span style={{ borderRight:"2px solid #0ef",marginLeft:2,animation:"blink 1s step-end infinite" }} />
          </h1>
          <p style={{ fontSize:16,color:"#adb7be",lineHeight:1.8,marginBottom:28,maxWidth:520 }}>
            A Passionate Full Stack Web Developer skilled in building responsive, dynamic applications
            using Bootstrap, React.js, Spring Boot, and MySQL.
          </p>
          <div style={{ display:"flex",gap:14,flexWrap:"wrap",marginBottom:36 }}>
            <a href="mailto:balakrishnandinesh16@gmail.com">
              <button style={{ padding:"12px 28px",borderRadius:8,background:"#0ef",color:"#1f242d",fontWeight:700,fontSize:15,border:"none",cursor:"pointer",transition:"transform .2s,box-shadow .2s",boxShadow:"0 0 20px rgba(0,238,255,0.4)" }}
                onMouseEnter={e=>e.target.style.transform="scale(1.05)"}
                onMouseLeave={e=>e.target.style.transform="scale(1)"}>
                Hire Me
              </button>
            </a>
            <a href="https://drive.google.com/file/d/1mKKxK0m02I39K0kLR8Ya27WdIDYKqttb/view?usp=sharing" target="_blank" rel="noreferrer">
              <button style={{ padding:"12px 28px",borderRadius:8,background:"transparent",color:"#fff",fontWeight:600,fontSize:15,border:"2px solid rgba(255,255,255,0.3)",cursor:"pointer",transition:"border-color .2s" }}
                onMouseEnter={e=>e.target.style.borderColor="#0ef"}
                onMouseLeave={e=>e.target.style.borderColor="rgba(255,255,255,0.3)"}>
                Download CV <i className="uil uil-file-alt" />
              </button>
            </a>
          </div>
          <div style={{ display:"flex",gap:14 }}>
            {SOCIAL.map(s => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer"
                style={{ width:44,height:44,borderRadius:"50%",border:"2px solid rgba(0,238,255,0.3)",display:"flex",alignItems:"center",justifyContent:"center",
                         color:"#0ef",fontSize:20,transition:"all .2s",textDecoration:"none" }}
                onMouseEnter={e=>{ e.currentTarget.style.background="#0ef"; e.currentTarget.style.color="#1f242d"; }}
                onMouseLeave={e=>{ e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#0ef"; }}>
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
        {/* Profile image */}
        <div style={{ display:"flex",justifyContent:"center",position:"relative" }}>
          <div style={{ width:300,height:300,borderRadius:"50%",background:"linear-gradient(135deg,rgba(0,238,255,0.2),rgba(0,238,255,0.05))",
                        border:"3px solid rgba(0,238,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",
                        boxShadow:"0 0 60px rgba(0,238,255,0.2)",position:"relative",overflow:"hidden" }}>
            <span style={{ fontSize:120,userSelect:"none" }}>👨‍💻</span>
          </div>
        </div>
      </div>
      {/* Scroll down */}
      <div style={{ position:"absolute",bottom:30,left:"50%",transform:"translateX(-50%)",textAlign:"center" }}>
        <button onClick={()=>scrollTo("about")} style={{ background:"none",border:"none",cursor:"pointer",color:"#adb7be",display:"flex",flexDirection:"column",alignItems:"center",gap:4,fontSize:13 }}>
          <i className="uil uil-mouse-alt" style={{ fontSize:24,color:"#0ef" }} />
          Scroll Down
        </button>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" style={{ padding:"80px 1.5rem",maxWidth:1200,margin:"0 auto" }}>
      <h2 style={{ textAlign:"center",fontSize:"clamp(1.8rem,4vw,2.5rem)",fontWeight:700,color:"#fff",marginBottom:60 }}>
        About <span style={{ color:"#0ef" }}>Me</span>
      </h2>
      <div style={{ display:"flex",gap:"3rem",alignItems:"center",flexWrap:"wrap" }}>
        {/* SVG illustration placeholder */}
        <div style={{ flex:1,minWidth:260,display:"flex",justifyContent:"center" }}>
          <div style={{ width:320,height:260,borderRadius:20,background:"linear-gradient(135deg,rgba(0,238,255,0.1),rgba(0,238,255,0.03))",
                        border:"1px solid rgba(0,238,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:80 }}>
            🎓
          </div>
        </div>
        {/* About text */}
        <div style={{ flex:1,minWidth:280,color:"#adb7be",lineHeight:1.9,fontSize:16 }}>
          <p>I'm <strong style={{ color:"#fff" }}>Dinesh</strong>, a recent graduate with a B.Tech in Information Technology, scoring an <span style={{ color:"#0ef",fontWeight:600 }}>8.3 CGPA</span> from Arunai Engineering College.</p>
          <p style={{ margin:"16px 0" }}>I'm passionate about full stack web development and have hands-on experience building interactive and responsive web applications using HTML5, CSS3, JavaScript, and React.js for the frontend, and Spring Boot for the backend. I have also worked with MySQL to design and manage databases.</p>
          <p>I demonstrated leadership in the project <em style={{ color:"#fff" }}>"Violence Detection and Notification System Using Deep Learning"</em>, where I coordinated team efforts and ensured successful delivery.</p>
          <div style={{ marginTop:28 }}>
            <a href="https://drive.google.com/file/d/1mKKxK0m02I39K0kLR8Ya27WdIDYKqttb/view?usp=sharing" target="_blank" rel="noreferrer">
              <button style={{ padding:"12px 28px",borderRadius:8,background:"#0ef",color:"#1f242d",fontWeight:700,border:"none",cursor:"pointer",fontSize:15 }}>
                Download CV <i className="uil uil-file-alt" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" style={{ padding:"0 1.5rem 80px",maxWidth:1200,margin:"0 auto" }}>
      <h2 style={{ textAlign:"center",fontSize:"clamp(1.8rem,4vw,2.5rem)",fontWeight:700,color:"#fff",marginBottom:48 }}>
        My <span style={{ color:"#0ef" }}>Experience</span>
      </h2>
      <div style={{ maxWidth:720,margin:"0 auto" }}>
        <div style={{ background:"linear-gradient(120deg,#23283a 60%,rgba(0,238,255,0.06) 100%)",borderRadius:18,boxShadow:"0 0 32px rgba(0,238,255,0.15)",padding:28 }}>
          <div style={{ display:"flex",alignItems:"center",gap:18,marginBottom:16 }}>
            <div style={{ width:56,height:56,borderRadius:12,background:"rgba(0,238,255,0.1)",border:"1px solid rgba(0,238,255,0.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28 }}>
              💻
            </div>
            <div>
              <h4 style={{ margin:0,color:"#ffc107",fontWeight:700,fontSize:18 }}>FrontEnd Trainee Intern</h4>
              <span style={{ color:"#adb7be",fontSize:15 }}>SoftTech Ashram, Chennai</span>
            </div>
          </div>
          <div style={{ marginBottom:14 }}>
            <span style={{ background:"rgba(23,162,184,0.2)",color:"#17a2b8",padding:"4px 12px",borderRadius:6,fontSize:14,fontWeight:600 }}>Apr 2025 – Jul 2025</span>
          </div>
          <p style={{ color:"#adb7be",lineHeight:1.8,marginBottom:12,fontSize:15 }}>
            Successfully completed an internship as a FrontEnd Trainee, learning and implementing technologies related to FrontEnd Development, including version control. Actively participated in project development and team collaboration.
          </p>
          <ul style={{ color:"#adb7be",paddingLeft:20,lineHeight:1.9,fontSize:15,marginBottom:18 }}>
            <li>Worked with modern frontend technologies and version control</li>
            <li>Collaborated in team projects and development cycles</li>
            <li>Demonstrated dedication, enthusiasm, and effective communication</li>
            <li>Received appreciation for sincere efforts and problem-solving skills</li>
          </ul>
          <div style={{ background:"linear-gradient(90deg,#0ef,#00ffd5)",color:"#23283a",fontWeight:600,borderRadius:8,padding:"8px 18px",display:"inline-block",fontSize:15 }}>
            <i className="uil uil-award" style={{ marginRight:6 }} />
            Issued By: Soft Tech Ashram
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ name, icon }) {
  return (
    <div style={{ background:"#23283a",borderRadius:12,padding:"20px 16px",display:"flex",flexDirection:"column",alignItems:"center",gap:10,
                  border:"1px solid rgba(0,238,255,0.12)",cursor:"default",transition:"all .25s" }}
      onMouseEnter={e=>{ e.currentTarget.style.borderColor="#0ef"; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(0,238,255,0.2)"; }}
      onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(0,238,255,0.12)"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
      <img src={icon} alt={name} style={{ width:48,height:48,objectFit:"contain" }} />
      <p style={{ margin:0,color:"#adb7be",fontSize:14,fontWeight:500,textAlign:"center" }}>{name}</p>
    </div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" style={{ padding:"0 1.5rem 80px",maxWidth:1200,margin:"0 auto" }}>
      <h2 style={{ textAlign:"center",fontSize:"clamp(1.8rem,4vw,2.5rem)",fontWeight:700,color:"#fff",marginBottom:48 }}>
        My <span style={{ color:"#0ef" }}>Skills</span>
      </h2>

      <h3 style={{ textAlign:"center",color:"#ffc107",fontWeight:700,marginBottom:24,fontSize:18 }}>Front-end</h3>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))",gap:16,marginBottom:48 }}>
        {FRONTEND_SKILLS.map(s => <SkillCard key={s.name} {...s} />)}
      </div>

      <h3 style={{ textAlign:"center",color:"#ffc107",fontWeight:700,marginBottom:24,fontSize:18 }}>Back-end</h3>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))",gap:16,marginBottom:48 }}>
        {BACKEND_SKILLS.map(s => <SkillCard key={s.name} {...s} />)}
      </div>

      <h3 style={{ textAlign:"center",color:"#ffc107",fontWeight:700,marginBottom:24,fontSize:18 }}>Others</h3>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))",gap:16 }}>
        {OTHER_SKILLS.map(s => <SkillCard key={s.name} {...s} />)}
      </div>
    </section>
  );
}

const BADGE_BG = { primary:"#0d6efd",info:"#0dcaf0",warning:"#ffc107",success:"#198754",danger:"#dc3545",dark:"#212529",secondary:"#6c757d" };

function ProjectCard({ title, img, fallbackImg, badges, badgeColors, desc, features, live, github, reverse }) {
  const [imgErr, setImgErr] = useState(false);
  return (
    <div style={{ background:"linear-gradient(120deg,#23283a 60%,rgba(0,238,255,0.06) 100%)",borderRadius:24,boxShadow:"0 0 32px rgba(0,238,255,0.12)",marginBottom:40,overflow:"hidden" }}>
      <div style={{ display:"flex",flexWrap:"wrap",flexDirection: reverse ? "row-reverse" : "row",alignItems:"center" }}>
        <div style={{ flex:"1 1 260px",padding:20,display:"flex",justifyContent:"center" }}>
          <img src={imgErr ? fallbackImg : img} onError={()=>setImgErr(true)} alt={title}
            style={{ maxWidth:"100%",maxHeight:260,borderRadius:12,objectFit:"cover",width:"100%" }} />
        </div>
        <div style={{ flex:"2 1 300px",padding:"24px 28px" }}>
          <h3 style={{ color:"#ffc107",fontWeight:700,fontSize:20,marginBottom:12 }}>{title}</h3>
          <div style={{ display:"flex",flexWrap:"wrap",gap:8,marginBottom:14 }}>
            {badges.map((b,i) => (
              <span key={b} style={{ background: BADGE_BG[badgeColors[i]] || "#6c757d",color: badgeColors[i]==="warning" ? "#212529" : "#fff",
                                     padding:"3px 10px",borderRadius:4,fontSize:12,fontWeight:600 }}>{b}</span>
            ))}
          </div>
          <p style={{ color:"#adb7be",lineHeight:1.8,fontSize:15,marginBottom:12 }}>{desc}</p>
          <ul style={{ color:"#adb7be",paddingLeft:18,lineHeight:1.9,fontSize:14,marginBottom:18 }}>
            {features.map(f => <li key={f}>{f}</li>)}
          </ul>
          <div style={{ display:"flex",gap:12,flexWrap:"wrap" }}>
            <a href={live} target="_blank" rel="noreferrer">
              <button style={{ padding:"9px 20px",borderRadius:8,background:"#0ef",color:"#1f242d",fontWeight:700,border:"none",cursor:"pointer",fontSize:14 }}>
                <i className="bx bx-link-external" /> Live
              </button>
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <button style={{ padding:"9px 20px",borderRadius:8,background:"transparent",color:"#fff",fontWeight:600,border:"2px solid rgba(255,255,255,0.3)",cursor:"pointer",fontSize:14 }}>
                <i className="uil uil-github-alt" /> GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" style={{ padding:"0 1.5rem 80px",maxWidth:1200,margin:"0 auto" }}>
      <h2 style={{ textAlign:"center",fontSize:"clamp(1.8rem,4vw,2.5rem)",fontWeight:700,color:"#fff",marginBottom:52 }}>
        My <span style={{ color:"#0ef" }}>Projects</span>
      </h2>
      {PROJECTS.map(p => <ProjectCard key={p.title} {...p} />)}
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name:"",email:"",phone:"",subject:"",message:"" });
  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const inputStyle = { width:"100%",padding:"14px 16px",borderRadius:8,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(0,238,255,0.2)",
                       color:"#fff",fontSize:15,outline:"none",boxSizing:"border-box",fontFamily:"inherit",transition:"border-color .2s" };

  return (
    <section id="contact" style={{ padding:"0 1.5rem 80px",maxWidth:700,margin:"0 auto" }}>
      <h2 style={{ textAlign:"center",fontSize:"clamp(1.8rem,4vw,2.5rem)",fontWeight:700,color:"#fff",marginBottom:48 }}>
        Contact <span style={{ color:"#0ef" }}>Me</span>
      </h2>
      <div style={{ display:"flex",gap:16,flexWrap:"wrap",marginBottom:16 }}>
        <input name="name" value={form.name} onChange={change} placeholder="Full Name" style={{ ...inputStyle,flex:1,minWidth:200 }}
          onFocus={e=>e.target.style.borderColor="#0ef"} onBlur={e=>e.target.style.borderColor="rgba(0,238,255,0.2)"} />
        <input name="email" value={form.email} onChange={change} placeholder="Email Address" type="email" style={{ ...inputStyle,flex:1,minWidth:200 }}
          onFocus={e=>e.target.style.borderColor="#0ef"} onBlur={e=>e.target.style.borderColor="rgba(0,238,255,0.2)"} />
      </div>
      <div style={{ display:"flex",gap:16,flexWrap:"wrap",marginBottom:16 }}>
        <input name="phone" value={form.phone} onChange={change} placeholder="Mobile Number" type="tel" style={{ ...inputStyle,flex:1,minWidth:200 }}
          onFocus={e=>e.target.style.borderColor="#0ef"} onBlur={e=>e.target.style.borderColor="rgba(0,238,255,0.2)"} />
        <input name="subject" value={form.subject} onChange={change} placeholder="Email Subject" style={{ ...inputStyle,flex:1,minWidth:200 }}
          onFocus={e=>e.target.style.borderColor="#0ef"} onBlur={e=>e.target.style.borderColor="rgba(0,238,255,0.2)"} />
      </div>
      <textarea name="message" value={form.message} onChange={change} placeholder="Your Message" rows={8}
        style={{ ...inputStyle,resize:"vertical",marginBottom:24 }}
        onFocus={e=>e.target.style.borderColor="#0ef"} onBlur={e=>e.target.style.borderColor="rgba(0,238,255,0.2)"} />
      <div style={{ textAlign:"center" }}>
        <a href={`mailto:balakrishnandinesh16@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(form.message)}`}>
          <button style={{ padding:"14px 40px",borderRadius:8,background:"#0ef",color:"#1f242d",fontWeight:700,fontSize:16,border:"none",cursor:"pointer",boxShadow:"0 0 24px rgba(0,238,255,0.4)" }}>
            Send Message
          </button>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const scrollTop = () => document.getElementById("home")?.scrollIntoView({ behavior:"smooth" });
  return (
    <footer style={{ background:"#181c24",borderTop:"1px solid rgba(0,238,255,0.1)",padding:"32px 1.5rem",textAlign:"center" }}>
      <div style={{ display:"flex",justifyContent:"center",gap:16,marginBottom:20 }}>
        {SOCIAL.map(s => (
          <a key={s.href} href={s.href} target="_blank" rel="noreferrer"
            style={{ width:40,height:40,borderRadius:"50%",border:"1px solid rgba(0,238,255,0.3)",display:"flex",alignItems:"center",justifyContent:"center",
                     color:"#0ef",fontSize:18,transition:"all .2s",textDecoration:"none" }}
            onMouseEnter={e=>{ e.currentTarget.style.background="#0ef"; e.currentTarget.style.color="#1f242d"; }}
            onMouseLeave={e=>{ e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#0ef"; }}>
            <i className={s.icon} />
          </a>
        ))}
      </div>
      <p style={{ color:"#adb7be",fontSize:14,margin:"0 0 16px" }}>Copyright © 2025 by Dinesh | All Rights Reserved.</p>
      <button onClick={scrollTop}
        style={{ background:"rgba(0,238,255,0.1)",border:"1px solid rgba(0,238,255,0.3)",color:"#0ef",width:40,height:40,borderRadius:"50%",cursor:"pointer",fontSize:20,display:"inline-flex",alignItems:"center",justifyContent:"center" }}>
        <i className="bx bx-up-arrow-alt" />
      </button>
    </footer>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      {/* External CSS CDN links — inject via useEffect or add to index.html */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background-color: #1f242d; font-family: 'Poppins', sans-serif; overflow-x: hidden; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #1f242d; }
        ::-webkit-scrollbar-thumb { background: #0ef; border-radius: 3px; }
      `}</style>

      <ParticleCanvas />
      <Navbar />

      <main style={{ position:"relative",zIndex:1 }}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
