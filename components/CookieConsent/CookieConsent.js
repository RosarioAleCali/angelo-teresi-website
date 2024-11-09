import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già fatto una scelta
    const cookieConsent = Cookies.get('cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 }); // Cookie valido per 1 anno
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    Cookies.set('cookie-consent', 'declined', { expires: 365 });
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700">
          Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. 
          Alcuni di questi cookie sono essenziali, mentre altri ci aiutano a 
          migliorare questo sito e la tua esperienza.
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Accetta
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Rifiuta
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent