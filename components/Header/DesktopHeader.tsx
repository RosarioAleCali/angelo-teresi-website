import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BookingButton from "@/components/BookingButton/BookingButton";
import { menuItems } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from "./DesktopHeader.module.css";

const DesktopHeader = () => {
  const [isMedicinaEsteticaOpen, setIsMedicinaEsteticaOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMedicinaEsteticaOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMedicinaEsteticaOpen(false);
  };

  return (
    <div className="bg-tiber text-white sticky top-0 w-full flex items-center justify-between px-8 py-2.5 z-20">
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/logos/white-pictogram.png"
          alt="Dr. Angelo Teresi Logo"
          className="transition-all duration-300 ease-in-out"
          width={60}
          height={60}
          priority
        />
      </Link>

      <nav className="flex flex-1 justify-center space-x-5">
        {menuItems.map((item) => (
          <div
            key={item.href}
            className={styles["nav-item"]}
            onMouseEnter={item.label === 'Medicina Estetica' ? handleMouseEnter : undefined}
            onMouseLeave={item.label === 'Medicina Estetica' ? handleMouseLeave : undefined}
          >
            <Link
              href={item.href}
              className={`${styles['nav-link']} text-lg whitespace-nowrap flex items-center`}
            >
              {item.label}
              {item.children && (
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`ml-2 transition-transform duration-200 ${isMedicinaEsteticaOpen ? styles.rotate180 : ''}`}
                />
              )}
            </Link>
            
            {item.children && isMedicinaEsteticaOpen && (
              <ul className={styles["sub-menu"]}>
                {item.children.map((subItem) => (
                  <li key={subItem.href} className={styles["sub-menu-item"]}>
                    <Link href={subItem.href} className="text-white text-font-bold transition-colors duration-200">
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>

      <div className="flex-shrink-0 ml-5">
        <BookingButton />
      </div>
    </div>
  );
};

export default DesktopHeader;