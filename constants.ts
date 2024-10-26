interface Links {
  online: string;
  inPerson: string;
};

const links: Links = {
  online: '/contacts',
  inPerson: 'https://prenota.alfadocs.com/p/palermo-studio-del-dottor-angelo-teresi-31421'
};

const menuItems = [
  // { href: '/about', label: 'Chi Sono', imageSrc: '/imgs_menu_items/teresi.png' },
  { 
    href: '/aesthetic-medicine', 
    label: 'Medicina Estetica', 
    imageSrc: '/imgs_menu_items/labbra.png',
    children: [
      { 
        href: '/aesthetic-medicine#biostimolazioni', 
        label: 'Biostimolazione' 
      },
      { 
        href: '/aesthetic-medicine#botox', 
        label: 'Botox' 
      },
      { 
        href: '/aesthetic-medicine#filler-labbra', 
        label: 'Filler Labbra' 
      },
      { 
        href: '/aesthetic-medicine#filler-mandibolare', 
        label: 'Filler Mandibolare' 
      },
      { 
        href: '/aesthetic-medicine#filler-occhiaie', 
        label: 'Filler Occhiaie' 
      },
      { 
        href: '/aesthetic-medicine#filler-zigomi', 
        label: 'Filler Zigomi' 
      },
      { 
        href: '/aesthetic-medicine#full-face', 
        label: 'Full Face' 
      },
      { 
        href: '/aesthetic-medicine#microneedling', 
        label: 'Microneedling' 
      },
      { 
        href: '/aesthetic-medicine#peeling', 
        label: 'Peeling' 
      },
      { 
        href: '/aesthetic-medicine#rinofiller', 
        label: 'Rinofiller' 
      }
    ]
  },
  { 
    href: '/nutrition-and-exercising', 
    label: 'Nutrizione & Allenamento', 
    imageSrc: '/imgs_menu_items/nutrizione-b.png' 
  },
  { 
    href: '/contacts', 
    label: 'Contatti', 
    imageSrc: '/imgs_menu_items/contatti-with-logo.png' 
  },
];

const treatmentDetails = [
  {
    "nome": "Biostimolazione",
    "descrizione": "Un trattamento che mira a rivitalizzare la pelle attraverso l'iniezione di sostanze come vitamine, minerali e acido ialuronico. Queste sostanze stimolano la produzione di collagene e di elastina, migliorando il tono, l'elasticità e la luminosità della pelle. Questo trattamento aiuta anche a prevenire l'invecchiamento cutaneo, donando al viso un aspetto più fresco e vitale. È particolarmente indicato per chi vuole contrastare i segni di stanchezza e disidratazione, restituendo al volto un aspetto più giovane e sano.",
    "immagini": ["/before_after/biostimolazione-prima.png", "/before_after/biostimolazione-dopo.png"],
    "durata": "30 minuti",
    "sedute": "3-4 sedute",
    "risultati": "Pelle più tonica e idratata",
    "prodotti": "Vitamine, acido ialuronico",
    "durataRisultati": "3-6 mesi"
  },
  {
    "nome": "Botox",
    "descrizione": "Un trattamento iniettivo per ridurre rughe e linee d'espressione, principalmente nella zona della fronte, degli occhi e tra le sopracciglia. Il botox agisce rilassando i muscoli responsabili della formazione delle pieghe, offrendo un effetto distensivo e rendendo la pelle più liscia. È ideale per chi desidera un aspetto più rilassato e riposato, senza ricorrere a interventi chirurgici. I risultati sono temporanei ma molto efficaci e durano generalmente alcuni mesi, dopo i quali il trattamento può essere ripetuto.",
    "immagini": ["/before_after/botox-prima.png", "/before_after/botox-dopo.png"],
    "durata": "20 minuti",
    "sedute": "1 seduta",
    "risultati": "Rughe ridotte e pelle distesa",
    "prodotti": "Tossina botulinica",
    "durataRisultati": "5-6 mesi"
  },
  {
    "nome": "Filler Labbra",
    "descrizione": "Una procedura per aumentare il volume e definire il contorno delle labbra, utilizzando acido ialuronico per ottenere un risultato naturale e armonioso. Questo trattamento è ideale per chi desidera labbra più piene e ben definite, correggendo asimmetrie o semplicemente donando maggiore volume. Inoltre, il filler labbra aiuta a migliorare l'idratazione della zona, rendendo le labbra più morbide e levigate. I risultati sono immediati e durano diversi mesi, a seconda del tipo di prodotto utilizzato.",
    "immagini": ["/before_after/filler-labbra-prima.png", "/before_after/filler-labbra-dopo.png"],
    "durata": "30 minuti",
    "sedute": "1 seduta",
    "risultati": "Labbra più voluminose e definite",
    "prodotti": "Acido ialuronico",
    "durataRisultati": "6-9 mesi"
  },
  {
    "nome": "Filler Mandibolare",
    "descrizione": "Un trattamento per migliorare la definizione della linea mandibolare, dando al viso un aspetto più scolpito e ridefinito. È spesso utilizzato per contrastare il rilassamento cutaneo e migliorare la simmetria del volto, rendendo la linea mandibolare più marcata e armoniosa. Questo tipo di filler è particolarmente indicato per chi vuole ottenere un aspetto più deciso e strutturato, senza ricorrere alla chirurgia. I risultati sono naturali e aiutano a migliorare l'equilibrio complessivo del viso.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "40 minuti",
    "sedute": "1 seduta",
    "risultati": "Profilo mandibolare più definito",
    "prodotti": "Acido ialuronico",
    "durataRisultati": "12 mesi"
  },
  {
    "nome": "Filler Occhiaie",
    "descrizione": "Un trattamento per ridurre la visibilità delle occhiaie, riempiendo la zona sotto gli occhi con acido ialuronico per un aspetto più riposato e giovane. Questo trattamento aiuta a correggere le depressioni sotto gli occhi, che possono far apparire il viso stanco e invecchiato. Il filler occhiaie migliora il colorito e l'aspetto generale della zona perioculare, donando un aspetto più fresco e riposato. I risultati sono immediati e molto apprezzati da chi soffre di occhiaie persistenti.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "30 minuti",
    "sedute": "1 seduta",
    "risultati": "Occhiaie ridotte e sguardo più fresco",
    "prodotti": "Acido ialuronico",
    "durataRisultati": "12 mesi"
  },
  {
    "nome": "Filler Zigomi",
    "descrizione": "Una procedura per aumentare il volume degli zigomi, migliorando la struttura del viso e restituendo un aspetto più giovane e armonioso. Gli zigomi ben definiti contribuiscono a dare al volto un aspetto più sollevato e tonico, migliorando la simmetria e l'equilibrio del viso. Questo trattamento è indicato per chi desidera recuperare volume perso con l'età o semplicemente accentuare la prominenza degli zigomi, ottenendo un risultato sofisticato e naturale. I risultati sono immediati e durano per molti mesi.",
    "immagini": ["/before_after/zigomo_filler-prima.png", "/before_after/zigomo_filler-dopo.png"],
    "durata": "30 minuti",
    "sedute": "1 seduta",
    "risultati": "Zigomi più pieni e definiti",
    "prodotti": "Acido ialuronico",
    "durataRisultati": "9-12 mesi"
  },
  {
    "nome": "Full Face",
    "descrizione": "Un trattamento completo che prevede l'utilizzo di filler e botox per migliorare l'aspetto globale del viso. Questo approccio consente di ridefinire i contorni del viso, riempire le rughe, migliorare la simmetria e donare un aspetto complessivamente più giovane e armonioso. Il Full Face è ideale per chi desidera un ringiovanimento globale senza interventi chirurgici invasivi, affrontando diverse problematiche estetiche in un'unica seduta. I risultati sono visibili immediatamente e migliorano ulteriormente nei giorni successivi al trattamento.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "1 ora",
    "sedute": "1-2 sedute",
    "risultati": "Viso ringiovanito e armonico",
    "prodotti": "Filler, botox",
    "durataRisultati": "12-18 mesi"
  },
  {
    "nome": "Microneedling",
    "descrizione": "Una tecnica che utilizza microaghi per stimolare la produzione di collagene ed elastina, migliorando la texture della pelle e riducendo cicatrici, macchie e pori dilatati. Il microneedling è efficace per trattare una vasta gamma di problematiche cutanee, inclusi segni di acne, iperpigmentazione e perdita di elasticità. La pelle appare più liscia, compatta e luminosa dopo il trattamento. È adatto a chi desidera un miglioramento generale della qualità della pelle senza ricorrere a trattamenti invasivi.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "45 minuti",
    "sedute": "4-6 sedute",
    "risultati": "Pelle più compatta e luminosa",
    "prodotti": "Sieri rigeneranti",
    "durataRisultati": "6-12 mesi"
  },
  {
    "nome": "Peeling",
    "descrizione": "Un trattamento che utilizza soluzioni chimiche per esfoliare la pelle, rimuovendo le cellule morte e stimolando la rigenerazione per una pelle più luminosa e uniforme. Esistono diversi tipi di peeling, da quelli superficiali a quelli più profondi, che vengono scelti in base alle esigenze specifiche del paziente. Il peeling aiuta a migliorare la texture, il tono e la luminosità della pelle, riducendo macchie, rughe sottili e imperfezioni. È un'ottima soluzione per chi desidera un aspetto più fresco e rinnovato senza tempi di recupero lunghi.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "30 minuti",
    "sedute": "3-4 sedute",
    "risultati": "Pelle levigata e più uniforme",
    "prodotti": "Acidi esfolianti",
    "durataRisultati": "6-12 mesi"
  },
  {
    "nome": "Rinofiller",
    "descrizione": "Una procedura non chirurgica per migliorare la forma del naso utilizzando filler dermici, correggendo imperfezioni come gobbe o asimmetrie e migliorando la simmetria senza intervento invasivo. Il rinofiller è ideale per chi desidera apportare modifiche estetiche al naso senza affrontare i rischi e i tempi di recupero di una rinoplastica chirurgica. I risultati sono immediati e possono durare diversi mesi, con un miglioramento significativo dell'armonia del volto.",
    "immagini": ["/before_after/rino_filler-prima.png", "/before_after/rino_filler-dopo.png"],
    "durata": "30 minuti",
    "sedute": "1 seduta",
    "risultati": "Profilo nasale migliorato",
    "prodotti": "Acido ialuronico",
    "durataRisultati": "9-12 mesi"
  } 
];


export { links, menuItems, treatmentDetails };
