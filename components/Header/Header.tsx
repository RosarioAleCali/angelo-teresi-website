"use client";

import { useState, useEffect } from 'react';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import useIsMobile from '@/hooks/useIsMobile';

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile(768); 

  useEffect(() => {
    // Let's indicate that we are on the client side
    setIsClient(true);
  }, []);

  // Make the component client-side only to avoid SSR issues
  if (!isClient) {
    return null; // O un placeholder come <div>Loading...</div>
  }

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;