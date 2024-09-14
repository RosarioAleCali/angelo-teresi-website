"use client"

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import useIsClient from '@/hooks/useIsClient';
import useIsMobile from '@/hooks/useIsMobile';
import useOutsideClick from '@/hooks/useOutsideClick';
import { links } from '@/constants';

const MobileBookingButton = () => {
  const [showPopover, setShowPopover] = useState(false);

  const isClient = useIsClient();
  const isMobile = useIsMobile();

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  const popoverRef = useOutsideClick<HTMLDivElement>(() => {
    if (showPopover) {
      setShowPopover(false);
    }
  });

  if (!isClient || !isMobile) return <></>;

  return (
    <>
      <div className="fixed bottom-5 right-5 transition-transform duration-300 ease-in-out slide-in">
        <button
          className="bg-tiber text-white p-4 flex justify-center items-center rounded-full shadow-lg focus:outline-none hover:bg-tropical"
          onClick={togglePopover}
        >
          <FontAwesomeIcon icon={faMessage} size="lg" />
        </button>

        {showPopover && (
          <div
            ref={popoverRef}
            className="absolute bottom-16 right-0 bg-white shadow-lg p-4 rounded-lg"
          >
            <div className="flex flex-col space-y-4">
              <Link
                className="bg-tropical flex justify-center items-center whitespace-nowrap text-white px-4 py-2 rounded-full hover:bg-tiber"
                href={links.online}
                target="_blank"
                rel="noopener noreferrer"
              >
                Online
              </Link>
              <Link
                className="bg-tropical flex justify-center items-center whitespace-nowrap text-white px-4 py-2 rounded-full hover:bg-tiber"
                href={links.inPerson}
                target="_blank"
                rel="noopener noreferrer"
              >
                In Persona
              </Link>
            </div>
          </div>
        )}
      </div>

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
