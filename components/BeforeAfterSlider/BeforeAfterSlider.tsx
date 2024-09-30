import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage }) => {
  const [position, setPosition] = useState(50); // Posizione iniziale al 50%
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      let newPosition = (x / rect.width) * 100;
      newPosition = Math.max(0, Math.min(newPosition, 100));
      setPosition(newPosition);
    }
  };

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      let newPosition = (x / rect.width) * 100;
      newPosition = Math.max(0, Math.min(newPosition, 100));
      setPosition(newPosition);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Immagine "After" come sfondo */}
      <Image
        src={afterImage}
        alt="After"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      {/* Immagine "Before" sopra, con clipping dinamico */}
      <Image
        src={beforeImage}
        alt="Before"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        style={{
          clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0% 100%)`,
        }}
      />

      {/* Cursore */}
      <div
        className="absolute top-0 h-full flex items-center justify-center cursor-pointer"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Linea del cursore */}
        <div className="w-0 h-full border-l-2 border-white"></div>
        {/* Maniglia del cursore */}
        <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-500 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
