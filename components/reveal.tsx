"use client";

import { motion, type Transition, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

const transition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export function Reveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}
