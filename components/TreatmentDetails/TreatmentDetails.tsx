import TreatmentDetail from "@/types/TreatmentDetail";
import BeforeAfterSlider from '@/components/BeforeAfterSlider/BeforeAfterSlider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSyringe, 
  faClockRotateLeft,
  faClock,
  faClipboardCheck,
  faCalendarDays
} from '@fortawesome/free-solid-svg-icons';

// To prevent icons from becoming huge on page refresh
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importa i CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const TreatmentDetails: React.FC<{ treatment: TreatmentDetail }> = ({ treatment }) => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="bg-tiber p-5 text-white text-sm flex flex-col md:flex-row w-full max-w-7xl rounded-lg gap-8">
        {/* Sinistra: Titolo, Descrizione e Dettagli */}
        <div className="md:w-1/2">
          {/* Titolo al centro */}
          <div className="w-full mb-4 md:mb-6">
            <h1 className="text-2xl font-bold text-center md:text-left">{treatment.nome}</h1>
          </div>
          {/* Contenuto sottostante */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Descrizione a sinistra */}
            <div className="text-left">
              <p>{treatment.descrizione}</p>
            </div>

            {/* Dettagli a destra */}
            <div className="space-y-3">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                <p className="text-sm text-start"><strong>Durata:</strong> {treatment.durata}</p>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                <p className="text-sm text-start"><strong>Sedute:</strong> {treatment.sedute}</p>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faClipboardCheck} className="mr-2" />
                <p className="text-sm text-start"><strong>Risultati:</strong> {treatment.risultati}</p>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faSyringe} className="mr-2" />
                <p className="text-sm text-start"><strong>Prodotti:</strong> {treatment.prodotti}</p>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faClockRotateLeft} className="mr-2" />
                <p className="text-sm text-start"><strong>Durata Risultati:</strong> {treatment.durataRisultati}</p>
              </div>
            </div>

          </div>
        </div>
        {/* Destra: Immagini */}
        <div className="md:w-1/2 flex justify-center items-center">
            {treatment.immagini.length >= 2 ? (
                <BeforeAfterSlider
                beforeImage={treatment.immagini[0]}
                afterImage={treatment.immagini[1]}
                />
          ) : (
            <p>Immagini non disponibili</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetails;
