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

const TreatmentDetails: React.FC<{ treatment: TreatmentDetail }> = ({ treatment }) => {
  return (
    <div className="bg-tropical p-5 text-white text-sm flex flex-col md:flex-row w-full max-w-7xl rounded-lg gap-8">
      {/* Sinistra: Titolo, Descrizione e Dettagli */}
      <div className="md:w-1/2">
        {/* Titolo al centro */}
        <div className="w-full mb-4 md:mb-6">
          <h1 className="text-2xl font-bold text-center md:text-left text-wrap break-words">{treatment.nome}</h1>
        </div>
        {/* Contenuto sottostante */}
        <div className="flex flex-wrap gap-4">
          {/* Descrizione a sinistra */}
          <div className="text-left">
            <p>{treatment.descrizione}</p>
          </div>

          {/* Dettagli a destra */}
          <div className="flex flex-wrap justify-start w-full gap-1 md:gap-6">
            <div className="flex flex-col items-center text-center gap-1 w-24">
              <FontAwesomeIcon icon={faClock} className="mb-2 text-xl" />
              <strong>Durata</strong>
              <p className="text-sm">{treatment.durata}</p>
            </div>
            <div className="flex flex-col items-center text-center gap-1 w-24">
              <FontAwesomeIcon icon={faCalendarDays} className="mb-2 text-xl" />
              <strong>Sedute</strong>
              <p className="text-sm">{treatment.sedute}</p>
            </div>
            <div className="flex flex-col items-center text-center gap-1 w-24">
              <FontAwesomeIcon icon={faClipboardCheck} className="mb-2 text-xl" />
              <strong>Risultati</strong>
              <p className="text-sm">{treatment.risultati}</p>
            </div>
            <div className="flex flex-col items-center text-center gap-1 w-24">
              <FontAwesomeIcon icon={faSyringe} className="mb-2 text-xl" />
              <strong>Prodotti</strong>
              <p className="text-sm">{treatment.prodotti}</p>
            </div>
            <div className="flex flex-col items-center text-center gap-1 w-24">
              <FontAwesomeIcon icon={faClockRotateLeft} className="mb-2 text-xl" />
              <strong>Durata Risultati</strong>
              <p className="text-sm">{treatment.durataRisultati}</p>
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
  );
};

export default TreatmentDetails;
