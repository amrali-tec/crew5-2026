"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function AnimatedIconsBackground() {
  const particlesInit = async (engine: any) => {
    // loadFull يأخذ engine بدون مشاكل type
    await loadFull(engine);
  };

  return (
    <Particles
      id="animated-icons-bg"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 30 },
          shape: { type: "circle" },
          size: { value: { min: 10, max: 20 }, random: true },
          move: { enable: true, speed: 1.5, outModes: { default: "out" } },
        },
      }}
    />
  );
}
