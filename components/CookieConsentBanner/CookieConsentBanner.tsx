"use client";

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { ComponentsStatusContext } from '@/context/componentsStatusContext';
import { ComponentsStatusContextType } from '@/types/components-status';
import useOutsideClick from '@/hooks/useOutsideClick';

const CookieConsentBanner: React.FC = () => {
  const { hasConsented, setConsent } = useContext(ComponentsStatusContext) as ComponentsStatusContextType;
  const [isVisible, setIsVisible] = useState(true);

  const bannerRef = useOutsideClick<HTMLDivElement>(() => setIsVisible(false));

  if (hasConsented || !isVisible) return null; // Don't show the banner if user already consented or banner is closed

  const handleAccept = () => {
    setConsent(true);
    setIsVisible(false);
  };

  const handleRefuse = () => {
    setConsent(false);
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      ref={bannerRef}
      className="fixed bottom-0 left-0 w-full bg-tropical text-white p-4 sm:p-6 z-[1000]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center">
        <p className="text-center sm:text-left mb-4 sm:mb-0">
          Usiamo i cookie per migliorare la tua esperienza. Cliccando su {'"'}Accetta{'"'}, acconsenti al nostro utilizzo dei cookie. Puoi saperne di più nella nostra{' '}
          <Link href="/privacy-policy" className="text-tiber underline">
            Privacy Policy
          </Link>.
        </p>
        <div className="flex gap-4 m-2">
          <button
            onClick={handleAccept}
            className="bg-tiber text-white py-2 px-4 rounded transition"
          >
            Accetta
          </button>
          <button
            onClick={handleRefuse}
            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Rifiuta
          </button>
          <button
            onClick={handleClose}
            className="bg-transparent text-white py-2 px-4 rounded hover:bg-gray-700 transition"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
