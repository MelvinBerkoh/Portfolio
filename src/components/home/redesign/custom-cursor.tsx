"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

function subscribeToCursorSupport(callback: () => void) {
  const finePointer = window.matchMedia("(pointer: fine)");
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  finePointer.addEventListener("change", callback);
  reducedMotion.addEventListener("change", callback);

  return () => {
    finePointer.removeEventListener("change", callback);
    reducedMotion.removeEventListener("change", callback);
  };
}

function getCursorSupportSnapshot() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getServerCursorSupportSnapshot() {
  return false;
}

const TRAIL_LENGTH = 8;

type Point = {
  x: number;
  y: number;
};

export function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribeToCursorSupport,
    getCursorSupportSnapshot,
    getServerCursorSupportSnapshot,
  );

  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const pointer = useRef<Point>({
    x: -100,
    y: -100,
  });

  const trail = useRef<Point[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({
      x: -100,
      y: -100,
    })),
  );

  useEffect(() => {
    if (!enabled) {
      return;
    }

    document.documentElement.classList.add("custom-cursor-active");

    let animationFrame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      pointer.current.x = event.clientX;
      pointer.current.y = event.clientY;
    };

    const animate = () => {
      const { x, y } = pointer.current;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x - 16}px, ${
          y - 16
        }px, 0)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 2.5}px, ${
          y - 2.5
        }px, 0)`;
      }

      let previousX = x;
      let previousY = y;

      trail.current.forEach((point, index) => {
        point.x += (previousX - point.x) * 0.42;
        point.y += (previousY - point.y) * 0.42;

        previousX = point.x;
        previousY = point.y;

        const element = trailRefs.current[index];

        if (!element) {
          return;
        }

        const scale = 1 - index / (TRAIL_LENGTH + 2);
        const opacity = 0.72 - index / (TRAIL_LENGTH * 1.45);

        element.style.transform = `translate3d(${point.x - 2.5}px, ${
          point.y - 2.5
        }px, 0) scale(${scale})`;

        element.style.opacity = `${Math.max(opacity, 0)}`;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);

      document.documentElement.classList.remove(
        "custom-cursor-active",
      );
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      {Array.from({ length: TRAIL_LENGTH }).map((_, index) => (
        <span
          key={index}
          ref={(element) => {
            trailRefs.current[index] = element;
          }}
          className="pointer-events-none fixed left-0 top-0 z-[98] h-[5px] w-[5px] rounded-full bg-brand shadow-[0_0_8px_var(--cursor-glow)]"
        />
      ))}

      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 drop-shadow-[0_0_7px_var(--cursor-glow)]"
      >
        <span className="absolute left-0 top-0 h-2.5 w-2.5 rounded-tl-[4px] border-l-2 border-t-2 border-brand" />
        <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-tr-[4px] border-r-2 border-t-2 border-brand" />
        <span className="absolute bottom-0 left-0 h-2.5 w-2.5 rounded-bl-[4px] border-b-2 border-l-2 border-brand" />
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-br-[4px] border-b-2 border-r-2 border-brand" />
      </div>

      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[101] h-[5px] w-[5px] rounded-full bg-brand shadow-[0_0_8px_var(--cursor-glow)]"
      />
    </>
  );
}