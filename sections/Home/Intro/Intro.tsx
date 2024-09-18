// Intro.tsx
import React from 'react';

const Intro = () => {
  return (
    <div id="intro"
    className="bg-tiber text-white  w-full flex flex-col items-center justify-start min-h-screen px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-white text-center mb-4 px-5">
          Benvenuti nel sito del Dr. Angelo Teresi
        </h2>
        <p className="text-lg text-white text-justify mb-6 px-5">
            Sono il dottor Angelo Teresi, un giovane medico laureato in Medicina e Chirurgia con il massimo dei voti e addentrato fin da subito nel mondo della medicina estetica attraverso diversi master e corsi. Ma la mia storia non si ferma ai titoli accademici. Da sempre, il mio vero motore è la passione per lo sport e la sana alimentazione. Fin da quando ero ragazzo, ho trovato in questo stile di vita una fonte inesauribile di energia e determinazione. La stessa che mi ha permesso di affrontare e superare ogni ostacolo che la vita mi ha posto davanti. Fare sport e mangiare sano non sono solo abitudini per me, ma dei veri e propri pilastri su cui ho costruito la mia vita personale e professionale. Ogni sfida, ogni traguardo raggiunto, mi ha insegnato che il benessere non è solo una questione fisica, ma è un profondo equilibrio tra corpo e mente. Questo approccio mi ha portato a creare e avviare numerosi progetti, tutti legati a un unico filo conduttore, la volontà di aiutare gli altri a riscoprire la propria forza interiore, che io ho scoperto attraverso un stile di vita sano e attivo.
        </p>
        <p className="text-lg text-white text-justify px-5">
            Ogni giorno mi sveglio infatti con l'obiettivo di migliorare, non solo per me stesso, ma anche per chiunque scelga di seguire il mio percorso. In qualità di medico, non vedo la salute come assenza di malattia, ma proprio come un benessere totale che abbraccia ogni aspetto della vita. Credo, infatti fermamente, che ognuno di noi abbia il potenziale per trasformarsi, per superare i propri limiti e per vivere una vita piena e soddisfacente. E io sono qui per dimostrarti che con la giusta determinazione, scienza e passione, che non ci sono ostacoli e tutto è possibile.
        </p>
      </div>
    </div>
  );
};

export default Intro;