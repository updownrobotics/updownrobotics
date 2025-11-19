import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, RefObject } from "react";

interface ParallaxOptions {
  speed?: number;
  range?: [number, number];
  springConfig?: {
    stiffness?: number;
    damping?: number;
    restDelta?: number;
  };
}

interface ParallaxReturn {
  ref: RefObject<HTMLDivElement>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
}

export const useParallaxMotion = (options: ParallaxOptions = {}): ParallaxReturn => {
  const {
    speed = 0.618, // Golden ratio default
    range = [0, 200],
    springConfig = {
      stiffness: 100,
      damping: 61.8, // φ * 100
      restDelta: 0.001,
    },
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Vertical parallax movement
  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [range[0], speed * range[1]]
  );
  const y = useSpring(yRaw, springConfig);

  // Scale effect for depth
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]),
    springConfig
  );

  // Opacity for fade effects
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]),
    springConfig
  );

  return { ref, y, scale, opacity };
};

// Hook for simpler Y-only parallax
export const useSimpleParallax = (speed: number = 0.618) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, speed * 200]),
    {
      stiffness: 100,
      damping: 61.8,
      restDelta: 0.001,
    }
  );

  return { ref, y };
};
