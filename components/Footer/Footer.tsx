import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tiber p-5 text-center text-white text-sm">
      &copy; {currentYear} Angelo Teresi P. IVA 06689160825 | Tutti i Diritti Riservati | 
      <Link href="/privacy-policy" className='hover:underline'>
        &nbsp;Informativa sulla Privacy
      </Link>
    </footer>
  );
};

export default Footer;
