export type ServiceOptionKey = 
  | 'Medicina Estetica' 
  | 'Nutrizione/Allenamento' 
  | 'Informatore Scientifico';

export const serviceOptions: Record<ServiceOptionKey, string[]> = {
  'Medicina Estetica': [
    'Primo consulto Med. Estetica',
    'Filler Labbra',
    'Rinofiller',
    'Biostimolazione',
    'Botox',
    'Peeling',
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
