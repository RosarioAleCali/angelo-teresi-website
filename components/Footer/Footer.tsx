import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tiber text-white text-sm py-4 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-1 text-center sm:flex-row sm:gap-2 sm:justify-center">
        <p className="text-xs sm:text-sm">
          &copy; {currentYear} Angelo Teresi · P. IVA 06689160825
        </p>

        <span className="hidden sm:inline">|</span>

        <p className="text-xs sm:text-sm">
          Tutti i Diritti Riservati
        </p>

        <span className="hidden sm:inline">|</span>

        <Link 
          href="/privacy-policy" 
          className="text-xs sm:text-sm hover:underline hover:text-gray-200 transition-colors"
        >
          Informativa sulla Privacy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
