import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useDisableScroll from '@/hooks/useDisableScroll';
import { menuItems } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion'; // Aggiunto AnimatePresence

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isMedicinaEsteticaOpen, setIsMedicinaEsteticaOpen] = useState(false);

  // const medicinaEsteticaRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  // const toggleMedicinaEstetica = () => {
  //   setIsMedicinaEsteticaOpen(!isMedicinaEsteticaOpen);
  // };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  useDisableScroll(isOpen);

  // Varianti per le animazioni
  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  const hamburgerLineVariants = {
    closed: (custom: number) => ({
      rotate: 0,
      y: custom === 1 ? -8 : custom === 3 ? 8 : 0,
      opacity: 1,
      transition: { duration: 0.2 }
    }),
    open: (custom: number) => ({
      rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
      y: custom === 1 ? 0 : custom === 3 ? 0 : 0,
      opacity: custom === 2 ? 0 : 1,
      transition: { duration: 0.2 }
    })
  };

  return (
    <header className="bg-tiber sticky top-0 w-full flex items-center justify-between px-4 py-2.5 z-[1000]">
      <motion.div 
        className="flex-shrink-0"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/" className="text-white text-lg font-bold">
          <Image
            src="/logos/white-pictogram.png"
            alt="Dr. Angelo Teresi"
            className="transition-all duration-300 ease-in-out"
            width={50}
            height={50}
            priority
          />
        </Link>
      </motion.div>
      <div className="relative z-50">
        {/* Hamburger Icon */}
        <button
          className="w-10 h-10 relative flex flex-col justify-center items-center z-50"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {[1, 2, 3].map((line) => (
            <motion.span
              key={line}
              custom={line}
              variants={hamburgerLineVariants}
              animate={isOpen ? "open" : "closed"}
              className="bg-white h-0.5 w-6 rounded absolute"
              style={{ y: (line - 2) * 6 }}
            />
          ))}
        </button>

        {/* Right Side Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.nav
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 w-2/3.1 h-full bg-gradient-to-br from-teal-500 via-tropical to-cyan-500 z-40 overflow-y-auto"
                aria-hidden={!isOpen}
              >
                <motion.ul
                  className="flex flex-col items-start justify-start h-full py-20 px-6 space-y-6"
                >
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.href}
                      variants={itemVariants}
                      className="w-full text-tiber"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label === 'Medicina Estetica' ? (
                        <>
                          <div className="flex items-center justify-between w-full">
                            <Link
                              href={item.href}
                              className="text-white text-xl font-semibold hover:text-tiber transition-colors duration-200"
                              onClick={handleMenuClick}
                            >
                              {item.label}
                            </Link>
                            {/* {item.children && (
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
                            )} */}
                          </div>
                          {/* {item.children && (
                            <ul
                              ref={medicinaEsteticaRef}
                              style={{
                                height: isMedicinaEsteticaOpen ? `${medicinaEsteticaRef.current?.scrollHeight}px` : '0px',
                              }}
                              className={`${styles.expansion} mt-2 space-y-2 ml-4 overflow-hidden transition-height duration-300`}
                            >
                              {item.children.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link 
                                    href={subItem.href} 
                                    className="text-white hover:text-tiber transition-colors duration-200 block"
                                    onClick={handleMenuClick}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )} */}
                        </>
                      ) : (
                        <Link 
                          href={item.href} 
                          className="text-white text-xl font-semibold hover:text-tiber transition-colors duration-200 block" 
                          onClick={handleMenuClick}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.nav>

              {/* Overlay with improved animation */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-30"
                onClick={toggleMenu}
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default MobileHeader;