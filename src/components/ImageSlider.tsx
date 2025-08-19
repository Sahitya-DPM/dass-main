'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/images/invisalign-slide.c0fe5683.jpg',
    mainHeading: 'The BEST Deal on Invisalign®',
    subHeading: 'We Do It BETTER\nQUICKER & EASIER!',
    buttonText: 'LEARN MORE',
    contentAlign: 'left'
  },
  {
    id: 2,
    image: '/images/testimonial-video-slide.704e1603.jpg',
    mainHeading: 'See Our Proven Results!',
    buttonText: 'VIDEO TESTIMONIALS',
    contentAlign: 'left'
  },
  {
    id: 3,
    image: '/images/smile-with-confidence-slide.f1cbdca1.jpg',
    mainHeading: 'Cosmetic Dentistry',
    subHeading: 'Our office is known for high-quality cosmetic work with proven results.',
    buttonText: 'COSMETIC DENTISTRY',
    contentAlign: 'right'
  },
  {
    id: 4,
    image: '/images/see-what-others-slide.8281e1ac.jpg',
    mainHeading: 'See What Others Are Saying',
    buttonText: 'READ THE REVIEWS',
    contentAlign: 'right'
  },
  {
    id: 5,
    image: '/images/convenient-location-slide.20070091.jpg',
    mainHeading: 'Conveniently Located on the Main Line',
    subHeading: 'Right in Suburban Square',
    buttonText: 'LEARN MORE',
    contentAlign: 'left'
  }
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Gold gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] z-10"></div>
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#004080] via-[#004080] to-[#003366] opacity-10"></div>
            
            {/* Content Container */}
            <div className={`absolute inset-0 flex items-center ${
              slide.contentAlign === 'left' ? 'justify-start' : 'justify-end'
            }`}>
              <div className={`w-full md:w-1/2 px-8 md:px-16 lg:px-20 ${
                slide.contentAlign === 'left' ? 'text-left' : 'text-right'
              } ${slide.id === 1 ? 'pt-12' : ''}`}>
                {/* Main Heading */}
                {slide.mainHeading && (
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 font-sansation-bold leading-tight">
                    {slide.mainHeading.split(' ').map((word, wordIndex) => {
                      if (word === 'BEST' || word === 'BETTER' || word === 'QUICKER' || word === 'EASIER') {
                        return (
                          <span key={wordIndex} className="text-[#87CEEB] font-bold">
                            {word}{' '}
                          </span>
                        );
                      }
                      return <span key={wordIndex}>{word} </span>;
                    })}
                  </h2>
                )}
                
                {/* Sub Heading */}
                {slide.subHeading && (
                  <p className="text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 font-sansation-regular italic leading-relaxed">
                    {slide.subHeading.split('\n').map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < slide.subHeading.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                )}
                
                {/* Button */}
                <button className="px-8 py-3 md:px-10 md:py-4 bg-transparent border-2 border-white rounded-full text-white font-sansation-regular text-base md:text-lg font-medium uppercase tracking-wide transition-all duration-300 hover:bg-[#029fde] hover:border-[#029fde] transform hover:scale-105">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
