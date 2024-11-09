import Cookies from 'js-cookie';

export const initializeCookieManager = () => {
  const consent = Cookies.get('cookie-consent');
  if (consent === 'declined') {
    // Rimuovi tutti i cookie non essenziali
    Object.keys(Cookies.get()).forEach(cookieName => {
      if (cookieName !== 'cookie-consent') {
        Cookies.remove(cookieName);
      }
    });
  }
};