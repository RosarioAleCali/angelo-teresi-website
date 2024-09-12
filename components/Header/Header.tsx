"use client"

import useIsMobile from '@/hooks/useIsMobile';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </>
  );
}

export default Header;
