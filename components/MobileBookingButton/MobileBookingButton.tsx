"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import useIsClient from '@/hooks/useIsClient';
import useIsMobile from '@/hooks/useIsMobile';
import { links } from '@/constants';

const MobileBookingButton = () => {
  const isClient = useIsClient();
  const isMobile = useIsMobile();

  if (!isClient || !isMobile) return null;

  return (
    <>
      <a
        href={links.inPerson}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Prenota"
        className="fixed bottom-5 right-5 bg-tropical p-4 flex justify-center items-center rounded-full shadow-lg focus:outline-hidden transition-colors duration-100 text-white hover:bg-[#2a8d8a] slide-in z-500"
      >
        <FontAwesomeIcon icon={faCalendar} size="lg" />
      </a>

      <style jsx>{`
        /* Slide in from right animation */
        .slide-in {
          transform: translateX(100%);
          animation: slideIn 0.3s forwards;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default MobileBookingButton;
