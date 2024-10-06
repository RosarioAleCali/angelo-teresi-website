const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tiber p-5 text-center text-white text-sm">
      &copy; {currentYear} Angelo Teresi | Tutti i Diritti Riservati
    </footer>
  );
};

export default Footer;
