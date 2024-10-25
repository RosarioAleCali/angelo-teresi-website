"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TreatmentDetails from "@/components/TreatmentDetails/TreatmentDetails";
import { menuItems } from "@/constants";
import { treatmentDetails } from "@/constants";
import styles from './Treatments.module.css';
import FadeInSection from '@/components/FadeInSection/FadeInSection';
import { ChevronDown } from 'lucide-react';

const Treatments = () => {
  const filteredChildren = menuItems
    .find(item => item.label === 'Medicina Estetica')?.children || [];
  const [selectedTreatment, setSelectedTreatment] = useState(treatmentDetails[0]);
  const [activeTab, setActiveTab] = useState(filteredChildren[0]?.label);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTreatmentClick = (label: string) => {
    const selected = treatmentDetails.find(treatment => treatment.nome === label);
    if (selected) {
      setSelectedTreatment(selected);
      setActiveTab(label);
      setIsMenuOpen(false);
    }
  };

  return (
    <FadeInSection>
      <section id="treatments" className="flex flex-col w-full items-start mt-5 md:px-56">
        <div className="flex flex-col w-full items-center justify-between">
          {/* Menu Tabs (desktop) */}
          <div className="hidden md:flex w-full border-b mb-4">
            {filteredChildren.map((child, idx) => (
              <motion.button
                key={idx}
                onClick={() => handleTreatmentClick(child.label)}
                className={`relative px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === child.label ? 'text-[#31ACA6]' : 'text-white hover:text-[#31ACA6]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {child.label}
                {activeTab === child.label && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#31ACA6]"
                    layoutId="activeTab"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Card con Menu Mobile e Contenuto */}
          <motion.div 
            className="w-full rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Menu Mobile */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-full flex items-center justify-between p-4 bg-white text-[#31ACA6] font-medium border-b border-[#31ACA6]/20"
                whileTap={{ scale: 0.98 }}
              >
                <span>{activeTab}</span>
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-b border-[#31ACA6]/20 bg-white overflow-hidden"
                  >
                    {filteredChildren.map((child, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => handleTreatmentClick(child.label)}
                        className={`w-full text-left p-4 text-sm transition-colors ${
                          activeTab === child.label 
                            ? 'text-[#31ACA6] bg-[#31ACA6]/5' 
                            : 'text-gray-600 hover:bg-[#31ACA6]/5'
                        }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        {child.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTreatment.nome}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-0"
              >
                <TreatmentDetails treatment={selectedTreatment} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Treatments;