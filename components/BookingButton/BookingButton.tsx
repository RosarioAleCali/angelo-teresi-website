import React, { useContext } from 'react';
import { ComponentsStatusContext } from '@/context/componentsStatusContext';
import { ComponentsStatusContextType } from '@/types/components-status';

const BookingButton = () => {
  const { openModal } = useContext(ComponentsStatusContext) as ComponentsStatusContextType;

  return (
    <button onClick={openModal} className="bg-tropical text-white font-bold py-2 px-6 rounded-lg border border-transparent transition-colors duration-200 ease-in-out hover:bg-[#2a8d8a] hover:border-[#28a097] hover:text-white active:bg-[#228e8d] focus:outline-none focus:ring-2 focus:ring-tropical focus:ring-opacity-30">
      Prenota
    </button>
  );
};

export default BookingButton;
