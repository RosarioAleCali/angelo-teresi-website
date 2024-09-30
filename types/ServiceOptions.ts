export type ServiceOptionKey = 
  | 'Medicina Estetica' 
  | 'Nutrizione/Allenamento' 
  | 'Informatore Scientifico';

export const serviceOptions: Record<ServiceOptionKey, string[]> = {
  'Medicina Estetica': [
    'Biostimolazione',
    'Botox',
    'Filler Labbra',
    'Filler Mandibolare',
    'Filler Occhiaie',
    'Filler Zigomi',
    'Full Face',
    'Microneedling',
    'Peeling',
    'Primo consulto Med. Estetica',
    'Rinofiller'
  ],
  'Nutrizione/Allenamento': [
    'Prima visita Nutrizione + Allenamento',
    'Visita di controllo Nutrizione + Allenamento',
    'Prima visita Nutrizione',
    'Visita di controllo Nutrizione',
    'Prima visita Allenamento',
  ],
  'Informatore Scientifico': ['Informatore Scientifico'],
};
