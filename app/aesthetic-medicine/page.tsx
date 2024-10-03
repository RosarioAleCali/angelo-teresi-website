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
    <div className="flex flex-col md:flex-row w-full">
      {/* Menu */}
      <div className="w-full md:w-1/5 flex flex-row md:flex-col justify-center bg-gray-100 p-4">
        <ul className="flex flex-row md:flex-col w-full flex-wrap justify-center">
          {filteredChildren.map((child, idx) => (
            <li key={idx} className="mb-0 md:mb-2">
              <button
                onClick={() => handleTreatmentClick(child.label)}
                className={`text-tiber text-justify ${styles.menuButton}`}
              >
                {child.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenuto */}
      <div className="w-full md:w-4/5 text-justify px-6 bg-gray-100 text-black p-4">
        {/* Mostra il trattamento selezionato */}
        <TreatmentDetails treatment={selectedTreatment} />
      </div>
    </div>
  );
}
