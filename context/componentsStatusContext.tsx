"use client"

import React from 'react';
import { ComponentsStatusContextType } from '@/types/components-status';

export const ComponentsStatusContext = React.createContext<ComponentsStatusContextType | null>(null);

const ComponentsStatusProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <ComponentsStatusContext.Provider
      value={{ isModalOpen, openModal, closeModal}}
    >
      {children}
    </ComponentsStatusContext.Provider>
  );
};

export default ComponentsStatusProvider;
