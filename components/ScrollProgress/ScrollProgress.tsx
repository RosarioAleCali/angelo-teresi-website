"use client"

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  // Utilizzare il hook useScroll per ottenere lo stato di scroll della pagina
  const { scrollYProgress } = useScroll();

  // Utilizzare useSpring per rendere più fluida l'animazione del progresso di scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 origin-left z-50"
      style={{
        backgroundColor: '#31ACA6',
        scaleX: smoothProgress,
        transformOrigin: "0%",
      }}
    />
  );
};

export default ScrollProgress;
