"use client";

import React from 'react';
import { ComponentsStatusContextType, OpenModalParams } from '@/types/components-status';
import { trackMetaPixelEvent } from '@/utils/metaPixel';

export const ComponentsStatusContext = React.createContext<ComponentsStatusContextType | null>(null);

const ComponentsStatusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const openModal = (params: OpenModalParams = {}) => {
    setIsModalOpen(true);
    trackMetaPixelEvent('OpenModal', params);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <ComponentsStatusContext.Provider
      value={{ isModalOpen, openModal, closeModal }}
    >
      {children}
    </ComponentsStatusContext.Provider>
  );
};

export default ComponentsStatusProvider;
