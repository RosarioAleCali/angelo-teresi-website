"use client"

import { useEffect, useState } from 'react';
import debounce from '@/utils/debounce';
import styles from './ScrollDownIndicator.module.css';

const ScrollDownIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrolledPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      if (scrolledPercentage >= 10) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles['arrow-scroll']} ${showIndicator ? styles.show : styles.hide}`}>
      <div className={`${styles['arrow']}`}></div>
      <div className={`${styles['arrow']}`}></div>
      <div className={`${styles['arrow']}`}></div>
    </div>
  );
};

export default ScrollDownIndicator;
