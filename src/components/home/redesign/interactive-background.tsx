"use client";

import { useEffect, useRef } from "react";

type Dot = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
};

const DOT_SPACING = 28;
const REACTION_RADIUS = 120;
const MAX_PUSH = 14;

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const coarsePointer = window.matchMedia("(pointer: coarse)");

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dots: Dot[] = [];
    let animationFrame = 0;
    let isDark = document.documentElement.classList.contains("dark");

    const pointer = {
      x: width / 2,
      y: height / 2,
      active: false,
    };

    const createDots = () => {
      dots = [];

      for (
        let y = -DOT_SPACING;
        y <= height + DOT_SPACING;
        y += DOT_SPACING
      ) {
        for (
          let x = -DOT_SPACING;
          x <= width + DOT_SPACING;
          x += DOT_SPACING
        ) {
          dots.push({
            baseX: x,
            baseY: y,
            x,
            y,
          });
        }
      }
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      createDots();
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark");
    });

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const canAnimate =
        !reducedMotion.matches &&
        !coarsePointer.matches &&
        pointer.active;

      const parallaxX = canAnimate
        ? ((pointer.x - width / 2) / width) * 10
        : 0;

      const parallaxY = canAnimate
        ? ((pointer.y - height / 2) / height) * 10
        : 0;

      if (canAnimate) {
        const glowRadius = isDark ? 250 : 280;

        const glow = context.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          glowRadius,
        );

        if (isDark) {
          glow.addColorStop(0, "rgba(96, 165, 250, 0.15)");
          glow.addColorStop(0.4, "rgba(59, 130, 246, 0.08)");
        } else {
          glow.addColorStop(0, "rgba(37, 99, 235, 0.12)");
          glow.addColorStop(0.4, "rgba(96, 165, 250, 0.07)");
        }

        glow.addColorStop(1, "rgba(0, 0, 0, 0)");

        context.fillStyle = glow;
        context.fillRect(0, 0, width, height);
      }

      const dotColor = isDark
        ? "rgba(125, 165, 255, 0.18)"
        : "rgba(37, 99, 235, 0.14)";

      context.fillStyle = dotColor;

      dots.forEach((dot) => {
        const baseX = dot.baseX + parallaxX;
        const baseY = dot.baseY + parallaxY;

        let targetX = baseX;
        let targetY = baseY;

        if (canAnimate) {
          const dx = baseX - pointer.x;
          const dy = baseY - pointer.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 0 && distance < REACTION_RADIUS) {
            const strength = 1 - distance / REACTION_RADIUS;
            const push = strength * MAX_PUSH;

            targetX += (dx / distance) * push;
            targetY += (dy / distance) * push;
          }
        }

        dot.x += (targetX - dot.x) * 0.12;
        dot.y += (targetY - dot.y) * 0.12;

        context.beginPath();
        context.arc(dot.x, dot.y, 1.05, 0, Math.PI * 2);
        context.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove);

    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);

      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );

      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}