import { useEffect } from 'react';

const useDisableScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      // Disabilita lo scroll quando il menu è aperto
      document.body.style.overflow = 'hidden';
    } else {
      // Riabilita lo scroll quando il menu è chiuso
      document.body.style.overflow = '';
    }

    // Pulisci l'effetto in caso di smontaggio
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
};

export default useDisableScroll;