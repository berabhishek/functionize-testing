// components/Carousel.js
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  "https://images.unsplash.com/photo-1494783367193-149034c05e8f",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8 relative w-full h-64 overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            transform: `translateX(${(index - currentIndex) * 100}%)`,
          }}
        >
          <Image
            src={src}
            alt={`Carousel Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;