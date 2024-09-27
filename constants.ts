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
        href: '/aesthetic-medicine#rinofiller', 
        label: 'Rinofiller' 
      },
      { 
        href: '/aesthetic-medicine#lipfiller', 
        label: 'Lipfiller' 
      },
      { 
        href: '/aesthetic-medicine#botox', 
        label: 'Botox' 
      },
      { 
        href: '/aesthetic-medicine#biostimolazioni', 
        label: 'Biostimolazioni' 
      },
      { 
        href: '/aesthetic-medicine#peeling', 
        label: 'Peeling' 
      },
      { 
        href: '/aesthetic-medicine#microneedling', 
        label: 'Microneedling' 
      },
      { 
        href: '/aesthetic-medicine#filler-zigomi', 
        label: 'Filler Zigomi' 
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
        href: '/aesthetic-medicine#full-face', 
        label: 'Full Face' 
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

export { links, menuItems };
