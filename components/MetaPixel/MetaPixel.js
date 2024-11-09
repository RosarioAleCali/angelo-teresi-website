import Script from 'next/script'
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const MetaPixel = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookie-consent');
    setIsEnabled(cookieConsent === 'accepted');
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '922858279329775');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=922858279329775&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  )
}

export default MetaPixel