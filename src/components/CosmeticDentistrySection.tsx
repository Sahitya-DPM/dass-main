'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function CosmeticDentistrySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const beforeAfterImages = [
    {
      id: 1,
      mainImage: "/images/cos-slider-image 1.jpg",
      smallImage1: "/images/cos-slider-image 2.jpg",
      smallImage2: "/images/cos-slider-image 3.jpg"
    },
    {
      id: 2,
      mainImage: "/images/cos-slider-image 4.jpg",
      smallImage1: "/images/cos-slider-image 5.jpg",
      smallImage2: "/images/cos-slider-image 6.jpg"
    },
    {
      id: 3,
      mainImage: "/images/cos-slider-image 7.jpg",
      smallImage1: "/images/cos-slider-image 8.jpg",
      smallImage2: "/images/cos-slider-image 9.jpg"
    }
  ];

  // Auto-carousel functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === beforeAfterImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, beforeAfterImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === beforeAfterImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? beforeAfterImages.length - 1 : prevIndex - 1
    );
  };

  const pauseCarousel = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeCarousel = () => {
    setIsPaused(false);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-[32px] font-sansation-bold text-[#004B87] text-center mb-12 md:mb-16">
            Cosmetic Dentistry
          </h2>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <p className="text-gray-700 font-sansation-regular text-[16px] leading-relaxed">
                Your smile is often your first impression you make, so it&apos;s important to have a smile that you are confident in showing. Our office is known for high-quality cosmetic work with great aesthetics.
              </p>
              
              <p className="text-gray-700 font-sansation-regular text-[16px] leading-relaxed">
                Our office offers a full line of cosmetic dentistry services, including:
              </p>
              
              {/* Services List */}
              <ul className="space-y-3">
                {[
                  "Porcelain Veneers",
                  "Invisalign",
                  "Dental Implants",
                  "Whitening"
                ].map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#004B87] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-sansation-regular text-[16px]">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image Carousel */}
            <div className="relative">
              {/* Main Before & After Image */}
              <div 
                className="relative mb-6"
                onMouseEnter={pauseCarousel}
                onMouseLeave={resumeCarousel}
              >
                <Image 
                  src={beforeAfterImages[currentImageIndex].mainImage} 
                  alt="Before and After Dental Treatment" 
                  width={800}
                  height={320}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg transition-opacity duration-500"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5 text-[#004B87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5 text-[#004B87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {beforeAfterImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="text-center">
            <button className="bg-[#004B87] hover:bg-[#003366] text-white font-sansation-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
