import { useState, useEffect } from "react";

export function useTypingEffect(strings, typeSpeed = 100, backSpeed = 80, backDelay = 2000) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = strings[idx];
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setText(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, typeSpeed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), backDelay);
        return () => clearTimeout(t);
      }
    } else if (charIdx > 0) {
      const t = setTimeout(() => {
        setText(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, backSpeed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setIdx(i => (i + 1) % strings.length);
        setTyping(true);
      }, 0);
      return () => clearTimeout(t);
    }
  }, [charIdx, typing, idx, strings, typeSpeed, backSpeed, backDelay]);

  return text;
}
