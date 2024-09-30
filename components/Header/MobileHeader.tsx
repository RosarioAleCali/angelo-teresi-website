import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useDisableScroll from '@/hooks/useDisableScroll';
import { menuItems } from '@/constants';
import styles from './MobileHeader.module.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMedicinaEsteticaOpen, setIsMedicinaEsteticaOpen] = useState(false);

  const medicinaEsteticaRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMedicinaEstetica = () => {
    setIsMedicinaEsteticaOpen(!isMedicinaEsteticaOpen);
  };

  useDisableScroll(isOpen);

  return (
    <header className="bg-tiber sticky top-0 w-full flex items-center justify-between px-4 py-2.5 z-50">
      <div className="flex-shrink-0">
        <Link href="/" className="text-white text-lg font-bold">
          <Image
            src="/logos/white-pictogram.png"
            alt="Dr. Angelo Teresi Logo"
            className="transition-all duration-300 ease-in-out"
            width={50}
            height={50}
            priority
          />
        </Link>
      </div>
      <div className="relative z-50">
        {/* Hamburger Icon */}
        <button
          className="w-10 h-10 relative flex flex-col justify-center items-center z-50"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className={`bg-white h-0.5 w-6 rounded transition-all duration-300 ease-in-out absolute ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`} />
          <span className={`bg-white h-0.5 w-6 rounded transition-all duration-300 ease-in-out absolute ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`bg-white h-0.5 w-6 rounded transition-all duration-300 ease-in-out absolute ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`} />
        </button>
        {/* Right Side Menu */}
        <nav
          className={`fixed top-0 right-0 w-2/3.1 h-full bg-gradient-to-br from-teal-500 via-tropical to-cyan-500 z-40 transition-all duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } overflow-y-auto`}
          aria-hidden={!isOpen}
        >
          <ul className="flex flex-col items-start justify-start h-full py-20 px-6 space-y-6">
            {menuItems.map((item) => (
              <li key={item.href} className="w-full text-tiber">
                {item.label === 'Medicina Estetica' ? (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <Link
                        href={item.href}
                        className="text-white text-xl font-semibold hover:text-tiber transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          onClick={toggleMedicinaEstetica}
                          className="ml-2 focus:outline-none"
                          aria-label="Toggle sub-menu"
                        >
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            className={`text-white text-lg transform transition-transform duration-200 ${
                              isMedicinaEsteticaOpen ? 'rotate-180' : ''
                            }`}
                            title="Toggle Subcategories"
                          />
                        </button>
                      )}
                    </div>
                    {item.children && (
                      <ul
                        ref={medicinaEsteticaRef}
                        style={{
                          height: isMedicinaEsteticaOpen ? `${medicinaEsteticaRef.current?.scrollHeight}px` : '0px',
                        }}
                        className={`${styles.expansion} mt-2 space-y-2 ml-4 overflow-hidden transition-height duration-300`}
                      >
                        {/* Sub Menu */}
                        {item.children.map((subItem) => (
                          <li key={subItem.href}>
                            <Link 
                              href={subItem.href} 
                              className="text-white hover:text-tiber transition-colors duration-200 block"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="text-white text-xl font-semibold hover:text-tiber transition-colors duration-200 block">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30" 
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
