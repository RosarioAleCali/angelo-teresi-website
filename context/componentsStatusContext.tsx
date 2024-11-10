"use client";

import React, { createContext, useState, useEffect } from 'react';
import { ComponentsStatusContextType, OpenModalParams } from '@/types/components-status';
import { trackMetaPixelEvent } from '@/utils/metaPixel';

export const ComponentsStatusContext = createContext<ComponentsStatusContextType | null>(null);

const ComponentsStatusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [hasConsented, setHasConsented] = useState<boolean>(false);

  useEffect(() => {
    // Check local storage or cookies to see if the user has previously consented
    const consent = localStorage.getItem('user-consent');
    if (consent === 'true') {
      setHasConsented(true);
    }
  }, []);

  const setConsent = (consent: boolean) => {
    setHasConsented(consent);
    localStorage.setItem('user-consent', consent.toString());
  };

  const openModal = (params: OpenModalParams = {}) => {
    setIsModalOpen(true);
    trackMetaPixelEvent('OpenModal', params);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <ComponentsStatusContext.Provider
      value={{ isModalOpen, openModal, closeModal, hasConsented, setConsent }}
    >
      {children}
    </ComponentsStatusContext.Provider>
  );
};

export default ComponentsStatusProvider;
