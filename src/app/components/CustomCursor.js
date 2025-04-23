'use client';
import mouse from "./../../../public/mouse.svg";

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("img");
    cursor.src = mouse.src;
    cursor.style.position = "fixed";
    cursor.style.width = "30px";
    cursor.style.height = "30px";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "99999";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.transition = "transform 0.05s ease";

    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
}