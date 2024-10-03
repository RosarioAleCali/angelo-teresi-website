"use client"

import { useState } from 'react';
import TreatmentDetails from "@/components/TreatmentDetails/TreatmentDetails";
import { menuItems } from "@/constants";
import { treatmentDetails } from "@/constants";
import styles from './page.module.css';

export default function AestheticMedicine() {
  const filteredChildren = menuItems
    .find(item => item.label === 'Medicina Estetica')?.children || [];
  
  // Stato per tenere traccia del trattamento selezionato
  const [selectedTreatment, setSelectedTreatment] = useState(treatmentDetails[0]);

  // Funzione per cambiare il trattamento corrente in base al clic sull'elemento del menu
  const handleTreatmentClick = (label: string) => {
    const selected = treatmentDetails.find(treatment => treatment.nome === label);
    if (selected) {
      setSelectedTreatment(selected); // Aggiorna lo stato con il trattamento selezionato
    }
  };

  return (
    <main id="main" className="flex flex-col w-full items-center justify-between">
      <div className="min-h-screen flex w-full">
        {/* Colonna sinistra (1/5) */}
        <div className="flex-1/5 flex flex-col justify-center text-center bg-gray-100 p-4">
          <ul>
            {filteredChildren.map((child, idx) => (
              <li key={idx} className="mb-2">
                <button
                  onClick={() => handleTreatmentClick(child.label)}
                  className={`${styles['nav-link']} text-tiber text-bold`}
                >
                  {child.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonna destra (4/5) */}
        <div className="flex-4/5 text-justify px-6 w-full bg-gray-100 text-black p-4">
          {/* Mostra il trattamento selezionato */}
          <TreatmentDetails treatment={selectedTreatment} />
        </div>
      </div>
    </main>
  );
}