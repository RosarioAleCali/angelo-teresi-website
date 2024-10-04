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
      <div className="min-h-screen w-full flex flex-col md:flex-row">
        {/* Colonna sinistra (menu) */}
        <div className="w-full md:w-1/5 flex flex-col justify-center items-center     text-center bg-gray-100 p-4 md:flex hidden">
          <ul className="flex flex-col justify-center h-full">
            {filteredChildren.map((child, idx) => (
              <li key={idx} className="mb-2">
                <button
                  onClick={() => handleTreatmentClick(child.label)}
                  className={`${styles['nav-link']} text-tiber font-bold`}
                >
                  {child.label}
                </button>
              </li>
            ))}
          </ul>
        </div>


        {/* Menu Mobile (mostrato solo su dispositivi mobili) */}
        <div className="w-full flex md:hidden justify-center bg-gray-100 p-4">
          <select
            onChange={(e) => handleTreatmentClick(e.target.value)}
            className="w-[90%] h-[48px] p-4 border-2 border-tiber rounded-lg bg-white text-tiber font-bold focus:outline-none focus:ring-2 focus:ring-tiber focus:border-transparent transition duration-300 ease-in-out"
          >
            {filteredChildren.map((child, idx) => (
              <option key={idx} value={child.label}>
                {child.label}
              </option>
            ))}
          </select>
        </div>



        {/* Colonna destra (contenuto) */}
        <div className="w-full md:w-4/5 text-justify px-6 bg-gray-100 text-black p-4">
          {/* Mostra il trattamento selezionato */}
          <TreatmentDetails treatment={selectedTreatment} />
        </div>
      </div>
    </main>
  );
}
