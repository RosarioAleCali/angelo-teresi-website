import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuItem from '@/components/Shared/MenuItem';
import useDisableScroll from '@/hooks/useDisableScroll';
import { menuItems } from '@/constants';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const toggleMenu = () => setIsOpen(!isOpen);

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
    <header className="bg-tiber sticky top-0 w-full flex items-center justify-between px-4 py-2.5 z-20">
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
          className={`fixed inset-0 top-[4.3rem] bg-gradient-to-br from-teal-500/80 via-tropical/80 to-cyan-500/80 z-10 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } overflow-y-auto`}
          aria-hidden={!isOpen}
        >
          <ul className="flex flex-col justify-start items-center min-h-screen pt-4 pb-20">
            {menuItems.map((item, index) => (
              <MenuItem
                key={item.href}
                href={item.href}
                imageSrc={item.imageSrc}
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