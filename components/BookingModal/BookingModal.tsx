"use client"

import { useContext } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { ComponentsStatusContext } from '@/context/componentsStatusContext';
import useOutsideClick from '@/hooks/useOutsideClick';
import { ComponentsStatusContextType } from '@/types/components-status';
import { links } from '@/constants';

const BookingModal = () => {
  const { isModalOpen, closeModal } = useContext(ComponentsStatusContext) as ComponentsStatusContextType;

  const modalRef = useOutsideClick<HTMLDivElement>(() => {
    if (isModalOpen) {
      closeModal();
    }
  });

  return (
    <div
      className={`${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} fixed inset-0 bg-black/50 flex justify-center items-start pt-[20vh] transition-opacity transition-visibility duration-300 z-[10000]`}
    >
      <div ref={modalRef} className="relative w-fit flex flex-col">
        <div className="flex flex-col items-center p-5 border border-transparent rounded-md bg-tropical shadow-md">
          <div className="flex justify-center gap-5 bg-transparent">
            <Link
              className="flex flex-col items-center text-center border border-[#746d75]/30 rounded p-2.5 w-[6.85rem] bg-white text-black hover:bg-[#F5F5F5] hover:text-[#333333] hover:underline hover:decoration-tropical hover:decoration-2 hover:underline-offset-1"
              href={links.online}
              rel="noopener noreferrer"
              onClick={closeModal}
            >
              <FontAwesomeIcon title="Online" titleId="Online" className="text-tropical text-4xl p-2" icon={faEarthEurope} />
              <span className="mt-2 text-sm text-inherit">Online</span>
            </Link>
            <Link
              className="flex flex-col items-center text-center border border-[#746d75]/30 rounded p-2.5 w-[6.85rem] bg-white text-black hover:bg-[#F5F5F5] hover:text-[#333333] hover:underline hover:decoration-tropical hover:decoration-2 hover:underline-offset-1"
              href={links.inPerson}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeModal}
            >
              <FontAwesomeIcon title="Airbnb" titleId="Airbnb" className="text-tropical text-4xl p-2" icon={faUserDoctor} />
              <span className="mt-2 text-sm text-inherit">In Persona</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <button
            className="bg-transparent border-none text-white text-base uppercase w-fit hover:underline hover:decoration-tropical hover:decoration-2 hover:underline-offset-1"
            onClick={closeModal}
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
