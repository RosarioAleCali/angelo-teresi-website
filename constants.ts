interface Links {
  online: string;
  inPerson: string;
};

const links: Links = {
  online: 'https://prenota.alfadocs.com/p/palermo-studio-del-dottor-angelo-teresi-31421',
  inPerson: ''
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
    "descrizione": "Trattamento che stimola la rigenerazione cellulare e la produzione di collagene.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "30 minuti",
    "sedute": "3-4 sedute",
    "risultati": "Pelle più tonica e idratata",
    "prodotti": "Vitamine, acido ialuronico",
    "durataRisultati": "3-6 mesi"
  },
  {
    "nome": "Botox",
    "descrizione": "Trattamento che riduce le rughe d'espressione con iniezioni di tossina botulinica.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "20 minuti",
    "sedute": "1 seduta",
    "risultati": "Rughe ridotte e pelle distesa",
    "prodotti": "Tossina botulinica",
    "durataRisultati": "3-4 mesi"
  },
  {
    "nome": "Filler Labbra",
    "descrizione": "Iniezioni di filler per aumentare il volume delle labbra e migliorarne la forma.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "30 minuti",
    "sedute": "1 seduta",
    "risultati": "Labbra più voluminose e definite",
    "prodotti": "Acido ialuronico",
    "durataRisultati": "6-9 mesi"
  },
  {
    "nome": "Filler Mandibolare",
    "descrizione": "Rimodellamento del contorno mandibolare con filler per un profilo più definito.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "40 minuti",
    "sedute": "1 seduta",
    "risultati": "Profilo mandibolare più definito",
    "prodotti": "Acido ialuronico",
    "durataRisultati": "12 mesi"
  },
  {
    "nome": "Filler Occhiaie",
    "descrizione": "Trattamento che riduce le occhiaie con iniezioni di filler sotto gli occhi.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "30 minuti",
    "sedute": "1 seduta",
    "risultati": "Occhiaie ridotte e sguardo più fresco",
    "prodotti": "Acido ialuronico",
    "durataRisultati": "12 mesi"
  },
  {
    "nome": "Filler Zigomi",
    "descrizione": "Iniezioni di filler per aumentare il volume degli zigomi e migliorare la definizione del viso.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "30 minuti",
    "sedute": "1 seduta",
    "risultati": "Zigomi più pieni e definiti",
    "prodotti": "Acido ialuronico",
    "durataRisultati": "9-12 mesi"
  },
  {
    "nome": "Full Face",
    "descrizione": "Trattamento completo di ringiovanimento del viso con l'uso combinato di filler e botox.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "1 ora",
    "sedute": "1-2 sedute",
    "risultati": "Viso ringiovanito e armonico",
    "prodotti": "Filler, botox",
    "durataRisultati": "12-18 mesi"
  },
  {
    "nome": "Microneedling",
    "descrizione": "Trattamento che stimola la produzione di collagene attraverso micro-perforazioni nella pelle.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "45 minuti",
    "sedute": "4-6 sedute",
    "risultati": "Pelle più compatta e luminosa",
    "prodotti": "Sieri rigeneranti",
    "durataRisultati": "6-12 mesi"
  },
  {
    "nome": "Peeling",
    "descrizione": "Trattamento esfoliante per rigenerare la pelle e ridurre le macchie.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "30 minuti",
    "sedute": "3-4 sedute",
    "risultati": "Pelle levigata e più uniforme",
    "prodotti": "Acidi esfolianti",
    "durataRisultati": "6-12 mesi"
  },
  {
    "nome": "Rinofiller",
    "descrizione": "Rimodellamento del naso senza chirurgia tramite iniezioni di filler.",
    "immagini": ["/imgs_menu_items/nutrizione-a.png", "/imgs_menu_items/nutrizione-b.png"],
    "durata": "30 minuti",
    "sedute": "1 seduta",
    "risultati": "Profilo nasale migliorato",
    "prodotti": "Acido ialuronico",
    "durataRisultati": "9-12 mesi"
  } 
];


export { links, menuItems, treatmentDetails };
