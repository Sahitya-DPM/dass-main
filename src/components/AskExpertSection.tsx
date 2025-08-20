'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';

export default function AskExpertSection() {
  const swiperRef = useRef<SwiperRef>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string>('');

  // Custom autoplay implementation
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideNext();
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const pauseAutoplay = () => {
    setIsPaused(true);
  };

  const resumeAutoplay = () => {
    setIsPaused(false);
  };

  const expertVideos = [
    {
      id: 1,
      image: "/images/video1-img.jpg",
      title: "",
      expert: "",
      practice: "",
      youtubeUrl: "https://youtu.be/Ytb85Hgtd88"
    },
    {
      id: 2,
      image: "/images/video3-img (1).jpg",
      title: "",
      expert: "",
      practice: "",
      youtubeUrl: "https://youtu.be/mO6IynJccIo"
    },
    {
      id: 3,
      image: "/images/video4-img.jpg",
      title: "",
      expert: "",
      practice: "",
      youtubeUrl: "https://youtu.be/DZGC5VAyd7Q"
    },
    {
      id: 4,
      image: "/images/video5-img.jpg",
      title: "",
      expert: "",
      practice: "",
      youtubeUrl: "https://youtu.be/mO6IynJccIo"
    }
  ];

  const handleCardClick = (youtubeUrl: string) => {
    setSelectedVideo(youtubeUrl);
    setIsModalOpen(true);
    // Pause autoplay when modal is open
    setIsPaused(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo('');
    // Resume autoplay when modal is closed
    setIsPaused(false);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Convert YouTube URL to embed URL
  const getEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})/);
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
  };

  return (
    <section id="ask-expert-section" className="w-full bg-white py-8 md:py-12">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-[32px] font-sansation-bold text-[#004B87] text-center mb-12 md:mb-16">
            Ask the Expert
          </h2>
          
          {/* Swiper Carousel */}
          <div 
            className="relative"
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
          >
            <Swiper
              ref={swiperRef}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              speed={800}
              className="!pb-12"
              loop={true}
              allowTouchMove={true}
            >
              {expertVideos.map((video) => (
                <SwiperSlide key={video.id}>
                  <div 
                    className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                    onClick={() => handleCardClick(video.youtubeUrl)}
                  >
                    {/* Video Card */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      {/* Video Thumbnail */}
                      <div className="relative overflow-hidden">
                        <Image 
                          src={video.image} 
                          alt="Video thumbnail"
                          width={400}
                          height={224}
                          className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-[#004B87] ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons - Outside Swiper */}
            <button 
              onClick={goPrev}
              className="absolute -left-8 md:-left-12 lg:-left-16 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
            >
              <svg className="w-6 h-6 text-[#004B87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={goNext}
              className="absolute -right-8 md:-right-12 lg:-right-16 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
            >
              <svg className="w-6 h-6 text-[#004B87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Modal Content */}
            <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video Container */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={getEmbedUrl(selectedVideo)}
                  title="Video Player"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Click outside to close */}
            <div 
              className="absolute inset-0 -z-10" 
              onClick={closeModal}
            />
          </div>
        </div>
      )}
    </section>
  );
}
