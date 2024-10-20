// src/components/Contacts.tsx

"use client";

import React from 'react';
import { Map } from "@/components/Map/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import openMaps from "@/utils/openMaps";
import ContactForm from "@/components/ContactForm/ContactForm";
import useFadeInOnScroll from '@/hooks/useFadeInOnScroll'; 

const Contacts: React.FC = () => {
  // Utilizzo del Custom Hook per animare i tre div principali durante lo scroll
  useFadeInOnScroll();

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-80px)] bg-tiber p-10">
      <h2 className="text-3xl text-white font-bold mb-4 text-center">
        Contatti
      </h2>
      <div className="flex flex-col md:flex-row w-full flex-grow gap-6 text-black">
        {/* Div della Mappa */}
        <div 
          id="map" 
          className="fadeInElement flex-1 p-4 bg-white border rounded-lg shadow z-10 order-3 md:order-1"
        >
          <Map />
        </div>

        {/* Div dei Contatti */}
        <div
          id="contacts"
          className="fadeInElement flex-1 flex flex-col p-4 gap-6 bg-white border rounded-lg shadow order-2"
        >
          <div id="address">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Indirizzo</h3>
            <ul>
              <li>
                <button onClick={openMaps} className="flex items-start text-left text-gray-600 hover:text-teal-600 transition">
                  <FontAwesomeIcon icon={faMapPin} className="mr-2" size="xl" color="#31ACA6" />
                  <span>Via Santo Filippo 12, 90125 Palermo</span>
                </button>
              </li>
            </ul>
          </div>
          <div id="contact-info">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Contatti</h3>
            <ul className="text-gray-700 flex flex-col gap-2">
              <li>
                <a href="https://wa.me/393333219346" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-teal-600 transition">
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" size="xl" color="#31ACA6" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="tel:+393333219346" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-teal-600 transition">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" size="lg" color="#31ACA6" />
                  Telefono
                </a>
              </li>
              <li>
                <a href="mailto:dr.angeloteresi@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-teal-600 transition">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" size="lg" color="#31ACA6" />
                  dr.angeloteresi@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div id="socials">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Social Media</h3>
            <ul className="text-gray-700">
              <li>
                <a href="https://www.instagram.com/dr.angeloteresi?igsh=cXowN2I1MmphZDh0" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-teal-600 transition">
                  <FontAwesomeIcon icon={faInstagram} className="mr-2" size="xl" color="#31ACA6" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Div del Modulo di Contatto */}
        <div id="contact-form" className="fadeInElement flex-1 p-4 bg-white border rounded-lg shadow order-1 md:order-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
