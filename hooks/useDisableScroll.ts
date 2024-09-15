import { useEffect } from 'react';

const useDisableScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Skip if SSR

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = isOpen ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow; // Restore original overflow
    };
  }, [isOpen]);
};

export default useDisableScroll;
