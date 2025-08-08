import React, { useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";

const NeonGradientBackground: React.FC = () => {
  const { isDark } = useTheme();
  const particlesRef = useRef<HTMLDivElement>(null);
  const particlesInstanceRef = useRef<any>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const initializeParticles = () => {
      if (particlesInstanceRef.current) {
        particlesInstanceRef.current.destroy();
        particlesInstanceRef.current = null;
      }

      if (particlesRef.current) {
        particlesRef.current.innerHTML = "";
      }

      timeoutId = setTimeout(() => {
        if (particlesRef.current) {
          const canvas = document.createElement("canvas");
          canvas.id = "neon-particles-canvas";
          canvas.style.position = "absolute";
          canvas.style.top = "0";
          canvas.style.left = "0";
          canvas.style.width = "100%";
          canvas.style.height = "100%";
          canvas.style.pointerEvents = "none";

          particlesRef.current.appendChild(canvas);
          initCustomParticles(canvas);
        }
      }, 100);
    };

    initializeParticles();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (particlesInstanceRef.current) particlesInstanceRef.current.destroy();
    };
  }, [isDark]);

  const initCustomParticles = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles = [];
    const colors = [
      "#ff00cc",
      "#00ffcc",
      "#cc00ff",
      "#ffcc00",
      "#00ccff",
      "#ff3366",
      "#ccff00",
      "#ff6600",
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 120; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.8 + 0.2,
          opacityDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p1, i) => {
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x <= 0 || p1.x >= canvas.width) p1.vx *= -1;
        if (p1.y <= 0 || p1.y >= canvas.height) p1.vy *= -1;

        p1.opacity += p1.opacityDirection * 0.01;
        if (p1.opacity <= 0.2 || p1.opacity >= 1) p1.opacityDirection *= -1;

        ctx.save();
        ctx.globalAlpha = p1.opacity;
        ctx.fillStyle = p1.color;
        ctx.shadowBlur = 30;
        ctx.shadowColor = p1.color;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        particles.forEach((p2, j) => {
          if (i !== j) {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
              ctx.save();
              ctx.globalAlpha = (1 - dist / 150) * 0.4;
              ctx.strokeStyle = "#00ffff"; // cyan link color
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    particlesInstanceRef.current = {
      destroy: () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", handleResize);
      },
    };
  };

  return (
    <>
      {/* Base Background */}
      <div className="fixed inset-0 -z-40">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            isDark
              ? "bg-gradient-to-br from-black via-black to-gray-900"
              : 'bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900'

          }`}
        />

        {/* Animated Gradient Blur Overlay */}
        <div
          className={`absolute inset-0 opacity-80 animate-gradient-xy ${
            isDark
              ? "bg-gradient-to-r from-purple-800 via-pink-700 to-indigo-800"
              : "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300"
          }`}
          style={{
            backgroundSize: "400% 400%",
            filter: "blur(80px)",
          }}
        />

        {/* Glows */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-0 left-0 w-96 h-96 rounded-full opacity-30 animate-pulse ${
              isDark ? "bg-cyan-500" : "bg-cyan-300"
            }`}
            style={{
              filter: "blur(90px)",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className={`absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 animate-pulse ${
              isDark ? "bg-pink-500" : "bg-pink-300"
            }`}
            style={{
              filter: "blur(90px)",
              transform: "translate(50%, -50%)",
              animationDelay: "1s",
            }}
          />
          <div
            className={`absolute bottom-0 left-1/2 w-72 h-72 rounded-full opacity-20 animate-pulse ${
              isDark ? "bg-purple-500" : "bg-purple-300"
            }`}
            style={{
              filter: "blur(100px)",
              transform: "translate(-50%, 50%)",
              animationDelay: "2s",
            }}
          />
          <div
            className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10 ${
              isDark ? "bg-indigo-500" : "bg-indigo-300"
            }`}
            style={{
              filter: "blur(60px)",
              transform: "translate(-50%, -50%)",
              animation: "float 6s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Particles Layer */}
      <div
        ref={particlesRef}
        className="fixed inset-0 -z-30"
        style={{ width: "100vw", height: "100vh" }}
      />

      {/* Grid Overlay */}
      <div
        className="fixed inset-0 -z-20 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(${
              isDark ? "#ffffff33" : "#00000022"
            } 1px, transparent 1px),
            linear-gradient(90deg, ${
              isDark ? "#ffffff33" : "#00000022"
            } 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Soft Overlay for Readability */}
      <div className="fixed inset-0 -z-10 bg-black/10 dark:bg-black/40 pointer-events-none" />
    </>
  );
};

export default NeonGradientBackground;


