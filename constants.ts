interface Links {
  online: string;
  inPerson: string;
};

const links: Links = {
  online: '',
  inPerson: ''
};

const menuItems = [
  { href: '/about', label: 'Chi Sono', imageSrc: '/teresi_imgs/teresi-1.png' },
  { href: '/aesthetic-medicine', label: 'Medicina Estetica', imageSrc: '/images/medicina-estetica.png' },
  { href: '/nutrition', label: 'Nutrizione', imageSrc: '/images/nutrizione.png' },
  { href: '/exercising', label: 'Allenamento', imageSrc: '/images/allenamento.png' },
  { href: '/contacts', label: 'Contatti', imageSrc: '/teresi_imgs/teresi-2.png' },
];

export { links, menuItems };
