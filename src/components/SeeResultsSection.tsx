'use client';

import Image from 'next/image';

export default function SeeResultsSection() {
  return (
    <section id="see-results-section" className="w-full bg-white py-8 md:py-12">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
                     <h2 className="text-[32px] font-sansation-bold text-[#004B87] text-center mb-12 md:mb-16">
             See the Results
           </h2>
          
          {/* Two Cards Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Card - Video Testimonials */}
            <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                {/* Video Thumbnail */}
                <Image 
                  src="/images/testimonial-video-slide.704e1603.jpg" 
                  alt="Video Testimonial Thumbnail" 
                  width={800}
                  height={320}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#004B87] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Caption */}
                             <h3 className="text-[27px] font-sansation-bold text-[#004B87] text-center mt-4 group-hover:text-[#003366] transition-colors duration-300">
                 Video Testimonials
               </h3>
            </div>

                         {/* Right Card - Before & After */}
             <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
               <div className="relative overflow-hidden rounded-lg shadow-lg">
                 {/* Before & After Image */}
                 <Image 
                   src="/images/before-after-home.jpg" 
                   alt="Before and After Treatment Results" 
                   width={800}
                   height={320}
                   className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                 />
               </div>
              
              {/* Caption */}
                             <h3 className="text-[27px] font-sansation-bold text-[#004B87] text-center mt-4 group-hover:text-[#003366] transition-colors duration-300">
                 Before & After
               </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
