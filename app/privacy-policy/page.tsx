/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import React from 'react';
import Head from "next/head";
import ReactMarkdown from 'react-markdown'; 
import FadeInSection from '@/components/FadeInSection/FadeInSection';

const PrivacyPolicy: React.FC = () => {
  const markdown = `
# Informativa sulla Privacy

**Angelo Teresi | Medicina Estetica Nutrizione Palermo**  

**Indirizzo:** Via S. Filippo, 12, 90125 Palermo PA, Italia  

La presente Informativa sulla Privacy descrive le modalità di trattamento dei dati personali raccolti attraverso il sito web di **Angelo Teresi | Medicina Estetica Nutrizione Palermo** in conformità al Regolamento (UE) 2016/679 (Regolamento Generale sulla Protezione dei Dati, “GDPR”).

## 1. Titolare del Trattamento dei Dati
Il titolare del trattamento dei dati è **Angelo Teresi**, con sede legale in Via S. Filippo, 12, 90125 Palermo PA, Italia. Per qualsiasi informazione relativa al trattamento dei dati personali, puoi contattarci tramite email all’indirizzo: **dr.angeloteresi@gmail.com**.

## 2. Tipologie di Dati Raccolti
Attraverso il sito web raccogliamo dati personali tramite il **modulo di contatto** e tramite **Meta Pixel** per fini statistici e analisi. Le informazioni raccolte includono:

- Nome
- Numero di telefono
- Indirizzo email
- Messaggio inviato dall’utente
- Servizio di interesse selezionato dall’utente
- Dati anonimi relativi al comportamento di navigazione

## 3. Finalità del Trattamento dei Dati
I dati personali forniti tramite il modulo di contatto verranno trattati esclusivamente per:

- Gestire e rispondere alle richieste di informazioni inviate dagli utenti;
- Fornire dettagli sui servizi offerti;
- Contattare l’utente per appuntamenti o informazioni relative ai servizi di interesse.

I dati anonimi raccolti tramite Meta Pixel vengono utilizzati per migliorare l’esperienza utente e per fini di analisi statistica, senza identificare gli utenti individualmente.

## 4. Modalità del Trattamento dei Dati
Il trattamento dei dati personali avviene con l’adozione di misure di sicurezza adeguate, nel rispetto delle normative vigenti. I dati saranno trattati con strumenti informatici e manuali per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti.

## 5. Conservazione dei Dati
I dati personali saranno conservati per il tempo necessario a fornire riscontro alle richieste degli utenti o per gestire le prenotazioni. I dati raccolti tramite Meta Pixel sono conservati secondo le policy di Meta Platforms, Inc.

## 6. Diritti degli Interessati
Gli utenti hanno il diritto di:

- Accedere ai propri dati personali e richiedere informazioni sul loro trattamento;
- Richiedere la rettifica o la cancellazione dei dati personali;
- Opporsi al trattamento dei dati personali o richiederne la limitazione;
- Richiedere la portabilità dei propri dati.

Per esercitare tali diritti, è possibile inviare una richiesta via email all’indirizzo **dr.angeloteresi@gmail.com**. Gli utenti hanno inoltre il diritto di proporre reclamo all’Autorità Garante per la Protezione dei Dati Personali.

## 7. Meta Pixel
Questo sito utilizza **Meta Pixel**, uno strumento di tracciamento fornito da Meta Platforms, Inc. (Facebook), che raccoglie dati anonimi sulle visite al sito per fini statistici e di analisi. Puoi scegliere di disabilitare il tracciamento tramite le impostazioni del tuo browser o tramite le impostazioni di Meta.

## 8. Modifiche alla Presente Informativa
La presente informativa potrebbe essere soggetta a modifiche o aggiornamenti. Invitiamo gli utenti a consultare regolarmente questa pagina per essere informati su eventuali modifiche.

**Ultimo aggiornamento:** 9 Novembre 2024.
`;

  return (
    <>
      <Head>
        <meta property="og:title" content="Informativa sulla Privacy - Dr. Angelo Teresi" key="title" />
      </Head>
      <FadeInSection>
        <div className="text-white max-w-3xl mx-auto my-8 p-4">
          <ReactMarkdown
            className="prose prose-lg leading-relaxed"
            components={{
              h1: ({ node, ...props }) => <h1 className="mb-8 mt-12 font-bold" {...props} />,
              h2: ({ node, ...props }) => <h2 className="mb-6 mt-8 font-bold" {...props} />,
              h3: ({ node, ...props }) => <h3 className="mb-6 mt-8 font-bold" {...props} />,
              p: ({ node, ...props }) => <p className="mb-6" {...props} />,
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </FadeInSection>
    </>
  );
};

export default PrivacyPolicy;
