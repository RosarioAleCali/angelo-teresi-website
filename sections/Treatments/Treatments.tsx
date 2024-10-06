"use client"

import { useState } from 'react';
import TreatmentDetails from "@/components/TreatmentDetails/TreatmentDetails";
import { menuItems } from "@/constants";
import { treatmentDetails } from "@/constants";
import styles from './Treatments.module.css';

const Treatments = () => {
  const filteredChildren = menuItems
    .find(item => item.label === 'Medicina Estetica')?.children || [];

  const [selectedTreatment, setSelectedTreatment] = useState(treatmentDetails[0]);

  const handleTreatmentClick = (label: string) => {
    const selected = treatmentDetails.find(treatment => treatment.nome === label);
    if (selected) {
      setSelectedTreatment(selected);
    }
  };

  return (
    <section
      id="treatments"
      className="flex flex-col w-full items-start mt-5"
    >
      <div className="flex flex-col md:flex-row w-full items-center justify-between">
        {/* Colonna sinistra (menu) */}
        <div
          className="w-full md:w-1/5 hidden flex-col justify-center items-center text-center p-4 md:flex"
        >
          <ul className="flex flex-col justify-center h-full text-white">
            {filteredChildren.map((child, idx) => (
              <li key={idx} className="mb-2">
                <button
                  onClick={() => handleTreatmentClick(child.label)}
                  className={`${styles['nav-link']} font-bold`}
                >
                  {child.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Mobile (mostrato solo su dispositivi mobili) */}
        <select
          onChange={(e) => handleTreatmentClick(e.target.value)}
          className="w-full flex md:hidden h-full p-4 border-2 border-tiber rounded-lg text-tiber font-bold focus:outline-none focus:ring-2 focus:ring-tiber focus:border-transparent transition duration-300 ease-in-out"
        >
          {filteredChildren.map((child, idx) => (
            <option key={idx} value={child.label}>
              {child.label}
            </option>
          ))}
        </select>

        {/* Colonna destra (contenuto) */}
        <div className="w-full md:w-4/5 text-justify text-black py-6">
          <TreatmentDetails treatment={selectedTreatment} />
        </div>
      </div>
    </section>
  );
};

export default Treatments;
