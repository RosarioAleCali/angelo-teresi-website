import Link from 'next/link';
import { MenuItemProps } from '@/types/MenuItemProps';

const MenuItem = ({ href, children, imageSrc, delay, isVisible }: MenuItemProps) => {
  return (
    <li
      className={`relative flex justify-center items-center bg-gray-100 rounded-lg shadow-lg w-5/6 h-32 mx-auto mb-4 transition-all duration-300 transform bg-cover bg-center ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}
      style={{
        backgroundImage: `url(${imageSrc})`,
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-65 rounded-lg" />

      <Link
        href={href}
        className="relative z-10 w-full h-full flex justify-center items-center text-white text-lg font-semibold transition-transform duration-150 hover:scale-100 active:scale-95"
      >
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
