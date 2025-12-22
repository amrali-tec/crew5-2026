"use client";
import { useEffect, useRef } from "react";

interface Props {
  opacity?: number;
  speed?: number;
}

export default function AnimatedLottieBackground({
  opacity = 0.15,
  speed = 0.4,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const shapes: any[] = [];

    // 1. 5-Point Stars (Crew5 رمز)
    for (let i = 0; i < 15; i++) {
      shapes.push({
        type: "star",
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 8 + 4,
        rotation: 0,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        color: `hsl(${220 + Math.random() * 40}, 70%, ${
          55 + Math.random() * 15
        }%)`,
      });
    }

    // 2. Connected Nodes (Network/Team)
    for (let i = 0; i < 20; i++) {
      shapes.push({
        type: "node",
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 6 + 3,
        color: `hsl(${260 + Math.random() * 30}, 65%, ${
          45 + Math.random() * 20
        }%)`,
      });
    }

    // 3. Lines (Connections)
    for (let i = 0; i < 8; i++) {
      shapes.push({
        type: "line",
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(${240 + Math.random() * 60}, 60%, 60%)`,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Crew5 gradient background
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "rgba(30, 58, 138, 0.06)");
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.04)");
      gradient.addColorStop(1, "rgba(168, 85, 247, 0.06)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw shapes
      shapes.forEach((shape) => {
        ctx.save();
        ctx.globalAlpha = opacity * shape.opacity || opacity;
        ctx.shadowBlur = 20;
        ctx.shadowColor = shape.color || "rgba(59, 130, 246, 0.6)";

        if (shape.type === "star") {
          ctx.save();
          ctx.translate(shape.x, shape.y);
          ctx.rotate(shape.rotation);

          // 5-point star
          ctx.beginPath();
          for (let j = 0; j < 10; j++) {
            const angle = (j * Math.PI) / 5;
            const r = j % 2 === 0 ? shape.size : shape.size * 0.4;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.closePath();

          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size);
          grad.addColorStop(0, shape.color);
          grad.addColorStop(1, "transparent");
          ctx.fillStyle = grad;
          ctx.fill();

          shape.rotation += shape.rotSpeed;
          ctx.restore();
        } else if (shape.type === "node") {
          const grad = ctx.createRadialGradient(
            shape.x,
            shape.y,
            0,
            shape.x,
            shape.y,
            shape.size
          );
          grad.addColorStop(0, shape.color);
          grad.addColorStop(0.7, shape.color);
          grad.addColorStop(1, "transparent");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (shape.type === "line") {
          ctx.strokeStyle = shape.color;
          ctx.lineWidth = 1.5;
          ctx.lineCap = "round";
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.moveTo(shape.x1, shape.y1);
          ctx.lineTo(shape.x2, shape.y2);
          ctx.stroke();
        }

        ctx.restore();

        // Update positions
        if (shape.type === "star" || shape.type === "node") {
          shape.x += shape.vx * speed;
          shape.y += shape.vy * speed;
          if (shape.x < 0 || shape.x > canvas.width) shape.vx *= -1;
          if (shape.y < 0 || shape.y > canvas.height) shape.vy *= -1;
        }
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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
    />
  );
}
