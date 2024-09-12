import Link from "next/link";
import Image from "next/image";
import styles from "./DesktopHeader.module.css";

const DesktopHeader = () => {
  return (
    <header className="bg-tiber sticky top-0 w-full flex items-center justify-between px-8 py-2.5">
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
        <Link href="/about" className={`${styles['nav-link']} text-lg whitespace-nowrap`}>Chi Sono</Link>
        <Link href="/aesthetic-medicine" className={`${styles['nav-link']} text-lg whitespace-nowrap`}>Medicina Estetica</Link>
        <Link href="/nutrition" className={`${styles['nav-link']} text-lg whitespace-nowrap`}>Nutrizione</Link>
        <Link href="/excersing" className={`${styles['nav-link']} text-lg whitespace-nowrap`}>Allenamento</Link>
        <Link href="/contacts" className={`${styles['nav-link']} text-lg whitespace-nowrap`}>Contatti</Link>
      </nav>

      <div className="flex-shrink-0 ml-5">CTA</div>
    </header>
  );
}

export default DesktopHeader;
