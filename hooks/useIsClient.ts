import { useState, useEffect } from 'react';

function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true only on the client side
  }, []);

  return isClient;
}

export default useIsClient;
