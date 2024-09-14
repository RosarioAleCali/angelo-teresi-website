"use client";

import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import useIsClient from '@/hooks/useIsClient';
import useIsMobile from '@/hooks/useIsMobile';

const Header = () => {
  const isClient = useIsClient();
  const isMobile = useIsMobile(); 

  if (!isClient) {
    return <></>;
  }

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;