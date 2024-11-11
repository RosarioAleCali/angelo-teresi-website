import React, { useContext } from 'react';
import { ComponentsStatusContext } from '@/context/componentsStatusContext';
import { ComponentsStatusContextType } from '@/types/components-status';

interface BookingButtonProps {
  size?: 'lg';
}

const BookingButton: React.FC<BookingButtonProps> = ({ size }) => {
  const { openModal } = useContext(ComponentsStatusContext) as ComponentsStatusContextType;

  // Definiamo le classi di base
  const baseClasses = "bg-tropical text-white font-bold rounded-lg border border-transparent transition-colors duration-200 ease-in-out hover:bg-[#2a8d8a] hover:border-[#28a097] hover:text-white active:bg-[#228e8d] focus:outline-none focus:ring-2 focus:ring-tropical focus:ring-opacity-30";

  // Aggiungiamo le classi condizionali in base alla prop size
  const sizeClasses = size === 'lg' 
    ? "py-4 px-8 text-lg" // Dimensioni maggiori
    : "py-2 px-6 text-base"; // Dimensioni originali

  return (
    <button
      onClick={() =>openModal({
        modalName: 'Booking',
        origin: 'Tasto Prenota' })
      }
      className={`${baseClasses} ${sizeClasses}`}
    >
      Prenota
    </button>
  );
};

export default BookingButton;
