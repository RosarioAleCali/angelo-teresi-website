"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import Script from 'next/script';
import { ComponentsStatusContext } from '@/context/componentsStatusContext';
import { ComponentsStatusContextType } from '@/types/components-status';

const MetaPixel: React.FC = () => {
  const { hasConsented } = useContext(ComponentsStatusContext) as ComponentsStatusContextType;

  return (
    <>
      {hasConsented && (
        // Meta Pixel Script only added if consent is given
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        />
      )}

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=922858279329775&ev=PageView&noscript=1"
          alt="Meta Pixel"
        />
      </noscript>
    </>
  );
};

export default MetaPixel;
