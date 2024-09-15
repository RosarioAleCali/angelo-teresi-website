import Link from 'next/link';
import { MenuItemProps } from '@/types/MenuItemProps';

const MenuItem = ({ href, children, imageSrc, delay, isVisible }: MenuItemProps) => {
  return (
    <li
      className={`w-5/6 mx-auto mb-4 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <Link
        href={href}
        className="group block rounded-lg overflow-hidden"
      >
        <div
          className="relative flex justify-center items-center bg-gray-100 shadow-lg h-32 rounded-lg transition-transform duration-150 transform bg-cover bg-center group-hover:scale-100 group-active:scale-95"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-65 rounded-lg" />
          <span className="relative z-10 text-white text-lg font-semibold">
            {children}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default MenuItem;