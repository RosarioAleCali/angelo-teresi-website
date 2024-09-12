import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useDisableScroll from '@/hooks/useDisableScroll';

interface MenuItemProps {
  href: string;
  children: React.ReactNode;
  imageSrc: string; // Campo per l'immagine di sfondo
  delay: number;
  isVisible: boolean;
}

const MenuItem = ({ href, children, imageSrc, delay, isVisible }: MenuItemProps) => (
  <li
    className={`relative flex justify-center items-center bg-gray-100 rounded-lg shadow-lg w-5/6 h-32 mx-auto mb-4 transition-all duration-300 transform bg-cover bg-center ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
    }`}
    style={{
      backgroundImage: `url(${imageSrc})`, // Imposta l'immagine come sfondo
      transitionDelay: `${delay}ms`,
    }}
  >
    {/* Overlay per migliorare la leggibilità del testo */}
    <div className="absolute inset-0 bg-black opacity-65 rounded-lg"></div>

    {/* Link con il testo sopra l'immagine */}
    <Link
      href={href}
      className="relative z-10 block w-full h-full flex justify-center items-center text-white text-lg font-semibold transition-transform duration-150 hover:scale-100 active:scale-95"
    >
      {children}
    </Link>
  </li>
);

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const menuItems = [
    { href: '/chi-sono', label: 'Chi Sono', imageSrc: '/teresi_imgs/teresi-1.png' },
    { href: '/medicina-estetica', label: 'Medicina Estetica', imageSrc: '/images/medicina-estetica.png' },
    { href: '/nutrizione', label: 'Nutrizione', imageSrc: '/images/nutrizione.png' },
    { href: '/allenamento', label: 'Allenamento', imageSrc: '/images/allenamento.png' },
    { href: '/contatti', label: 'Contatti', imageSrc: '/teresi_imgs/teresi-2.png' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Usa l'hook per disabilitare lo scrolling quando il menu è aperto
  useDisableScroll(isOpen);

  useEffect(() => {
    if (isOpen) {
      menuItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, index]);
        }, index * 100);
      });
    } else {
      setVisibleItems([]);
    }
  }, [isOpen]);

  return (
    <header className="bg-teal-800 sticky top-0 w-full flex items-center justify-between px-4 py-2.5 z-20">
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
      <div className="relative">
        {/* Hamburger Icon */}
        <button
          className="w-10 h-10 relative flex flex-col justify-center items-center"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className={`bg-white h-0.5 w-6 rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`bg-white h-0.5 w-6 rounded transition-all duration-300 my-1 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`bg-white h-0.5 w-6 rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
        {/* Full Screen Menu */}
        <nav
          className={`fixed inset-0 top-[70px] bg-white z-10 transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          <ul className="flex flex-col justify-center items-center h-full">
            {menuItems.map((item, index) => (
              <MenuItem
                key={item.href}
                href={item.href}
                imageSrc={item.imageSrc} // Passa l'immagine corrispondente come sfondo
                delay={index * 50}
                isVisible={visibleItems.includes(index)}
              >
                {item.label}
              </MenuItem>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;