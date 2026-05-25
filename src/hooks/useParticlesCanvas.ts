import { useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const PARTICLE_COUNT = 60;
const MAX_DISTANCE = 150;

export function useParticlesCanvas(): void {
  useEffect(() => {
    const canvas = document.getElementById("particles-canvas") as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let resizeTimeout = 0;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.1
    });

    const init = () => {
      resize();
      particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
    };

    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 38, 38, ${particle.opacity})`;
      ctx.fill();
    };

    const drawLine = (particleA: Particle, particleB: Particle, distance: number) => {
      const opacity = (1 - distance / MAX_DISTANCE) * 0.15;
      ctx.beginPath();
      ctx.moveTo(particleA.x, particleA.y);
      ctx.lineTo(particleB.x, particleB.y);
      ctx.strokeStyle = `rgba(220, 38, 38, ${opacity})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        drawParticle(particle);

        for (let j = i + 1; j < particles.length; j += 1) {
          const particleB = particles[j];
          const dx = particle.x - particleB.x;
          const dy = particle.y - particleB.y;
          const distance = Math.hypot(dx, dy);

          if (distance < MAX_DISTANCE) {
            drawLine(particle, particleB, distance);
          }
        }
      }

      animationId = window.requestAnimationFrame(update);
    };

    const onResize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(resize, 250);
    };

    init();
    update();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimeout);
      window.cancelAnimationFrame(animationId);
    };
  }, []);
}
