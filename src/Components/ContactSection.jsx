import { useState, useRef, useEffect } from "react";
import { CONTACT_EMAIL } from "../data/constants";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [bootSequence, setBootSequence] = useState("");
  const [isBooted, setIsBooted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendProgress, setSendProgress] = useState(0);

  const terminalRef = useRef(null);

  // Command Line Boot Sequence on every scroll
  useEffect(() => {
    let timeouts = [];
    let isMounted = true;

    const text1 = "> Initializing secure connection...";
    const text2 = "\n> Connection established.\n> Ready. Enter message below.";

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          timeouts.forEach(clearTimeout);
          timeouts = [];
          
          setBootSequence("");
          setIsBooted(false);
          
          let currentText = "";
          
          const sleep = (ms) => new Promise(r => {
            const t = setTimeout(r, ms);
            timeouts.push(t);
          });

          const runSequence = async () => {
            for (let i = 0; i < text1.length; i++) {
              if (!isMounted) return;
              currentText += text1.charAt(i);
              setBootSequence(currentText);
              await sleep(30);
            }
            await sleep(400);
            for (let j = 0; j < text2.length; j++) {
              if (!isMounted) return;
              currentText += text2.charAt(j);
              setBootSequence(currentText);
              await sleep(30);
            }
            await sleep(600);
            if (isMounted) setIsBooted(true);
          };
          
          runSequence();
        } else {
          timeouts.forEach(clearTimeout);
          timeouts = [];
          setBootSequence("");
          setIsBooted(false);
        }
      },
      { threshold: 0.2 }
    );

    if (terminalRef.current) observer.observe(terminalRef.current);
    
    return () => {
      isMounted = false;
      timeouts.forEach(clearTimeout);
      observer.disconnect();
    };
  }, []);

  // 3D Tilt Logic
  const handleMouseMove = (e) => {
    if (!terminalRef.current) return;
    const rect = terminalRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -4; // Subtle tilt
    const rotateY = ((x - centerX) / centerX) * 4;

    terminalRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    terminalRef.current.style.setProperty('--mouse-x', `${x}px`);
    terminalRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!terminalRef.current) return;
    terminalRef.current.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  // Form Change
  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Placeholder Scramble Decryption
  const handleFocus = (e) => {
    e.target.style.borderColor = "#0ef";
    const original = e.target.dataset.originalPlaceholder;
    if (!original) return;
    
    let iterations = 0;
    const chars = "!@#$%^&*<>?{}[]";
    const interval = setInterval(() => {
      e.target.placeholder = original.split("").map((char, index) => {
        if(index < iterations) return original[index];
        return chars[Math.floor(Math.random() * chars.length)]; // NOSONAR
      }).join("");
      
      if(iterations >= original.length) clearInterval(interval);
      iterations += 1/2; // Speed of decryption
    }, 30);
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "rgba(0,238,255,0.2)";
    e.target.placeholder = e.target.dataset.originalPlaceholder;
  };

  // Submit Upload Sequence
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSending) return;
    setIsSending(true);
    setSendProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5; // Random chunk progress // NOSONAR
      if(progress > 100) progress = 100;
      setSendProgress(progress);
      
      if(progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          globalThis.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(form.message)}`;
          setTimeout(() => {
            setIsSending(false);
            setForm({ name: "", email: "", phone: "", subject: "", message: "" });
          }, 1000);
        }, 500);
      }
    }, 150);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 8,
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(0,238,255,0.2)",
    color: "#fff",
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "monospace",
    transition: "border-color .2s",
  };

  return (
    <section id="contact" style={{ padding: "0 1.5rem 80px", maxWidth: 700, margin: "0 auto" }}>
      <SectionTitle title="Contact" highlight="Me" marginBottom={48} />

      <ScrollReveal>
        <div 
          ref={terminalRef}
          className="terminal-window project-tilt-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ 
            transformStyle: 'preserve-3d', 
            transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(0, 238, 255, 0.2)',
            marginBottom: 0
          }}
        >
          <div className="tilt-glare" />
          
          <div className="terminal-header" style={{ position: 'relative', zIndex: 10 }}>
            <div className="terminal-buttons">
              <span className="terminal-btn close"></span>
              <span className="terminal-btn minimize"></span>
              <span className="terminal-btn maximize"></span>
            </div>
            <div className="terminal-title">contact.exe</div>
          </div>
          
          <div className="terminal-body" style={{ position: 'relative', zIndex: 10, minHeight: 400 }}>
            {/* Boot Sequence */}
            <div style={{ 
              fontFamily: 'monospace', 
              color: '#0ef', 
              whiteSpace: 'pre-line', 
              marginBottom: isBooted ? 24 : 0,
              fontSize: 14,
              lineHeight: 1.6
            }}>
              {bootSequence}
              {!isBooted && <span style={{ animation: 'blink 1s step-end infinite' }}>_</span>}
            </div>

            {/* Form Content */}
            <div style={{ 
              opacity: isBooted ? 1 : 0, 
              transform: isBooted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              pointerEvents: isBooted ? 'auto' : 'none'
            }}>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 16 }}>
                <input
                  name="name"
                  value={form.name}
                  onChange={change}
                  data-original-placeholder="Full Name"
                  placeholder="Full Name"
                  style={{ ...inputStyle, flex: 1, minWidth: 200 }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={change}
                  data-original-placeholder="Email Address"
                  placeholder="Email Address"
                  type="email"
                  style={{ ...inputStyle, flex: 1, minWidth: 200 }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 16 }}>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={change}
                  data-original-placeholder="Mobile Number"
                  placeholder="Mobile Number"
                  type="tel"
                  style={{ ...inputStyle, flex: 1, minWidth: 200 }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />

                <input
                  name="subject"
                  value={form.subject}
                  onChange={change}
                  data-original-placeholder="Email Subject"
                  placeholder="Email Subject"
                  style={{ ...inputStyle, flex: 1, minWidth: 200 }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={change}
                data-original-placeholder="Your Message"
                placeholder="Your Message"
                rows={6}
                style={{ ...inputStyle, resize: "vertical", marginBottom: 24 }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              <div style={{ textAlign: "center" }}>
                <button 
                  onClick={handleSubmit}
                  disabled={isSending}
                  className={`themed-btn-3d primary ${isSending ? '' : 'btn-glow'}`} 
                  style={{ fontSize: 15, fontFamily: 'monospace', width: 220 }}
                >
                  {isSending ? (
                    `Uploading [${'|'.repeat(Math.floor(sendProgress / 10))}${' '.repeat(10 - Math.floor(sendProgress / 10))}]`
                  ) : (
                    String.raw`C:\> Send_Message`
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
