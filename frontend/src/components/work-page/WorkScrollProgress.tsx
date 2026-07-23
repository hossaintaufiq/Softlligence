"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function WorkScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return <motion.div className="wp-progress" style={{ scaleX }} aria-hidden="true" />;
}
