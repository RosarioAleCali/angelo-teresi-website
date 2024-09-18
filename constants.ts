interface Links {
  online: string;
  inPerson: string;
};

const links: Links = {
  online: '',
  inPerson: ''
};

const menuItems = [
  // { href: '/about', label: 'Chi Sono', imageSrc: '/imgs_menu_items/teresi.png' },
  { href: '/aesthetic-medicine', label: 'Medicina Estetica', imageSrc: '/imgs_menu_items/labbra.png' },
  { href: '/nutrition-and-exercising', label: 'Nutrizione & Allenamento', imageSrc: '/imgs_menu_items/nutrizione-b.png' },
  { href: '/contacts', label: 'Contatti', imageSrc: '/imgs_menu_items/contatti-with-logo.png' },
];

export { links, menuItems };
