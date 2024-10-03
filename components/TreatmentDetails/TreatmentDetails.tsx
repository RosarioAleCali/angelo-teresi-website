import TreatmentDetail from "@/types/TreatmentDetail";
import BeforeAfterSlider from '@/components/BeforeAfterSlider/BeforeAfterSlider';

const TreatmentDetails: React.FC<{ treatment: TreatmentDetail }> = ({ treatment }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-tiber p-5 text-white text-sm flex flex-col md:flex-row w-full max-w-7xl rounded-lg">
        {/* Sinistra: Titolo, Descrizione e Dettagli */}
        <div className="md:w-1/2">
          {/* Titolo al centro */}
          <div className="w-full mb-4 md:mb-0">
            <h1 className="text-xl font-bold">{treatment.nome}</h1>
          </div>
          {/* Contenuto sottostante */}
          <div className="flex flex-col md:flex-row">
            {/* Descrizione a sinistra */}
            <div className="md:w-1/2 text-left">
              <p>{treatment.descrizione}</p>
            </div>
            {/* Dettagli a destra */}
            <div className="md:w-1/2 text-left space-y-2">
              <p><strong>Durata:</strong> {treatment.durata}</p>
              <p><strong>Sedute:</strong> {treatment.sedute}</p>
              <p><strong>Risultati:</strong> {treatment.risultati}</p>
              <p><strong>Prodotti:</strong> {treatment.prodotti}</p>
              <p><strong>Durata Risultati:</strong> {treatment.durataRisultati}</p>
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
