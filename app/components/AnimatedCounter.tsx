"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

function formatNumber(value: number, decimals: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.6,
  className,
}: AnimatedCounterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const finalText = `${prefix}${formatNumber(value, decimals)}${suffix}`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.textContent = finalText;
      return;
    }

    const counter = { value: 0 };
    const tween = gsap.to(counter, {
      value,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        element.textContent = `${prefix}${formatNumber(counter.value, decimals)}${suffix}`;
      },
      onComplete: () => {
        element.textContent = finalText;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [decimals, duration, prefix, suffix, value]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formatNumber(0, decimals)}
      {suffix}
    </span>
  );
}
