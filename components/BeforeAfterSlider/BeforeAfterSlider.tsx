import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number;
  className?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Prima',
  afterLabel = 'Dopo',
  initialPosition = 50,
  className = ''
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculatePosition = useCallback((clientX: number): number | undefined => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const percentage = ((clientX - rect.left) / rect.width) * 100;
    return Math.max(0, Math.min(100, percentage));
  }, []);

  const handleMove = useCallback((clientX: number): void => {
    const newPosition = calculatePosition(clientX);
    if (newPosition !== undefined) {
      setPosition(newPosition);
    }
  }, [calculatePosition]);

  const handleKeyboardMove = (direction: 'left' | 'right'): void => {
    const step = 5;
    setPosition(prev => Math.max(0, Math.min(100, direction === 'left' ? prev - step : prev + step)));
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseUp = (): void => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent): void => {
      if (isDragging) handleMove(e.clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  useEffect(() => {
    const preventDefault = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventDefault, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventDefault);
    };
  }, [isDragging]);

  // Il resto del componente rimane invariato...
  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-96 overflow-hidden select-none rounded-lg group touch-none ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      role="slider"
      aria-valuenow={position}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Slider confronto immagini"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') handleKeyboardMove('left');
        if (e.key === 'ArrowRight') handleKeyboardMove('right');
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt={afterLabel}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`
        }}
      >
        <Image
          src={beforeImage}
          alt={beforeLabel}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className={`absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm
        transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
        {beforeLabel}
      </div>
      <div className={`absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm
        transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
        {afterLabel}
      </div>

      <div
        className="absolute top-0 h-full cursor-ew-resize transform -translate-x-1/2"
        style={{ left: `${position}%` }}
        onMouseDown={(e) => {
          e.stopPropagation();
          setIsDragging(true);
        }}
      >
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/80">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg
            flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="flex gap-0.5">
              <ChevronLeft className="w-3 h-3 text-gray-600" />
              <ChevronRight className="w-3 h-3 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0"
        onMouseDown={(e) => {
          handleMove(e.clientX);
          setIsDragging(true);
        }}
        onTouchStart={(e) => {
          handleMove(e.touches[0].clientX);
          setIsDragging(true);
        }}
        onTouchMove={(e) => {
          if (isDragging) {
            handleMove(e.touches[0].clientX);
          }
        }}
        onTouchEnd={() => {
          setIsDragging(false);
        }}
      />
    </div>
  );
};

export default BeforeAfterSlider;