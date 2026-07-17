"use client"

import { motion, useAnimation, useInView, type Variants } from 'framer-motion';
import React, { useEffect, useRef, useState, useCallback } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  once?: boolean;
  className?: string;
  scrollThreshold?: number;
  exitDuration?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 50,
  once = false,
  className = '',
  scrollThreshold = 150,     // Aumentato il default
  exitDuration = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const lastScrollTime = useRef(0);
  const lastScrollY = useRef(0);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isInView = useInView(ref, {
    once: false,
  });

  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { x: 0, y: distance };
      case 'down':
        return { x: 0, y: -distance };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: distance };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialOffset(),
      transition: {
        duration: exitDuration,
        ease: 'easeIn',
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  const handleScroll = useCallback(() => {
    const currentTime = Date.now();
    const currentScrollY = window.scrollY;
    const scrollingUp = currentScrollY < lastScrollY.current;
    
    if (scrollingUp && currentTime - lastScrollTime.current < scrollThreshold) {
      return;
    }

    lastScrollTime.current = currentTime;
    lastScrollY.current = currentScrollY;
  }, [scrollThreshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  const handleAnimation = useCallback(async () => {
    if (isInView && (!once || !hasAnimated)) {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }

      await controls.start('visible');
      setHasAnimated(true);
    } else if (!isInView && !once) {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;

      if (scrollingUp) {
        if (animationTimeoutRef.current) {
          clearTimeout(animationTimeoutRef.current);
        }

        animationTimeoutRef.current = setTimeout(() => {
          controls.start('hidden');
        }, scrollThreshold);
      } else {
        controls.start('hidden');
      }
    }
  }, [isInView, once, hasAnimated, scrollThreshold, controls]);
  
  useEffect(() => {
    handleAnimation();
  }, [handleAnimation]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      layout={false}
      style={{ 
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',  // Aiuta a prevenire flickering
        WebkitBackfaceVisibility: 'hidden',
        transform: 'translateZ(0)',    // Forza hardware acceleration
        WebkitTransform: 'translateZ(0)',
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
