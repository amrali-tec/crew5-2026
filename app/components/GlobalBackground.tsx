"use client";
import { useEffect, useRef } from "react";

interface Props {
  opacity?: number;
  speed?: number;
}

export default function AnimatedLottieBackground({
  opacity = 0.2,
  speed = 0.5,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Force full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: any[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 4 + 2,
        color: `hsl(${220 + Math.random() * 40}, 70%, ${
          50 + Math.random() * 20
        }%)`,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background gradient
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)");
      gradient.addColorStop(1, "rgba(168, 85, 247, 0.1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Particles
      particles.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.shadowBlur = 20;
        ctx.shadowColor = p.color;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, p.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.x += p.vx * speed;
        p.y += p.vy * speed;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [opacity, speed]);

  return (
    <>
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[1] pointer-events-none" // ← z-[1] قوي
        style={{ opacity: 1 }} // ← opacity خارج الكانفاس
      />

      {/* Debug border */}
      <div className="fixed inset-0 z-0 border-4 border-red-500/50 pointer-events-none" />
    </>
  );
}
