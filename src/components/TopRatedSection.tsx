'use client';

import Image from 'next/image';

export default function TopRatedSection() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
                     <h2 className="text-[32px] font-sansation-bold text-[#004B87] text-center mb-12 md:mb-16">
             Top Rated Dental Care
           </h2>
          
          {/* Review Platform Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                         {/* Google Reviews */}
             <div className="text-center">
               <div className="mb-4">
                                   <Image 
                    src="/images/google.png" 
                    alt="Google" 
                    width={200}
                    height={100}
                    className="w-[200px] h-[100px] mx-auto object-contain"
                  />
               </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-[18px] mb-2 font-sansation-regular">4.9 out of 5 stars</p>
              <a href="#" className="text-[#004B87] underline font-sansation-bold hover:text-[#003366] transition-colors text-[23px]">
                550+ Reviews
              </a>
            </div>

                         {/* Facebook Reviews */}
             <div className="text-center">
               <div className="mb-4">
                                   <Image 
                    src="/images/facebook.png" 
                    alt="Facebook" 
                    width={200}
                    height={100}
                    className="w-[200px] h-[100px] mx-auto object-contain"
                  />
               </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-[18px] mb-2 font-sansation-regular">4.9 out of 5 stars</p>
              <a href="#" className="text-[#004B87] underline font-sansation-bold hover:text-[#003366] transition-colors text-[23px]">
                200+ Reviews
              </a>
            </div>

                         {/* Yelp Reviews */}
             <div className="text-center">
               <div className="mb-4">
                                   <Image 
                    src="/images/yelp.png" 
                    alt="Yelp" 
                    width={200}
                    height={100}
                    className="w-[200px] h-[100px] mx-auto object-contain"
                  />
               </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-[18px] mb-2 font-sansation-regular">4.9 out of 5 stars</p>
              <a href="#" className="text-[#004B87] underline font-sansation-bold hover:text-[#003366] transition-colors text-[23px]">
                100+ Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
