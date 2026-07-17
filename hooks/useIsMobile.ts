import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint: number = 768) => {
  // Start with the SSR value on the first client render too, so hydration
  // matches; the effect below sets the real value right after mount.
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure it only runs on the client

    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Throttle resize event handling for better performance
    let timeoutId: number | undefined;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(handleResize, 200);
    };

    window.addEventListener('resize', throttledResize);

    // Check in case the user loads directly in a mobile window
    handleResize();

    // Clean up event listener and timeout on component unmount
    return () => {
      window.removeEventListener('resize', throttledResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
