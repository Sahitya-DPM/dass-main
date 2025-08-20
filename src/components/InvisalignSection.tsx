'use client';

import Image from 'next/image';

export default function InvisalignSection() {
  return (
    <section id="invisalign-section" className="w-full bg-[#004B87] py-8 md:py-12 lg:py-16 mt-2.5">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        
        {/* Left Side - Price, Heading, Button */}
        <div className="text-center">
          {/* Price */}
          <div className="text-white text-[32px] mb-4 font-sansation-regular text-center">
            <div>$89/paycheck or</div>
            <div>$3,279</div>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-white text-[45px] font-bold mb-8 font-sansation-bold leading-tight text-center">
            All-Inclusive Invisalign
          </h2>
          
          {/* Button */}
          <button className="bg-[#87CEEB] hover:bg-[#7BB8D9] text-white font-sansation-regular text-base px-[20px] py-[8px] rounded-full transition-all duration-300 transform hover:scale-105 text-center">
            Schedule A Consultation
          </button>
        </div>
        
        {/* Right Side - Text and Awards */}
        <div className="text-center lg:text-left">
          {/* Heading */}
          <h3 className="text-white text-[24px] font-bold mb-6 font-sansation-bold leading-tight text-center">
            The Best Deal, The Best Reviews & The Most Experience.
          </h3>
          
          {/* Paragraph */}
          <p className="text-white text-[16px] mb-8 font-sansation-regular leading-relaxed text-center">
            With hundreds of hours of{' '}
            <span className="text-[#87CEEB] font-sansation-bold">continuing education</span>
            , Dr. Wollock uses his expertise to train, mentor, and teach other Invisalign dentists across North America. Dr. Wollock brings a wealth of experience to solve your issues with the added benefit of a volume discount.
          </p>
          
          {/* Award Badges Row - 9 Specific Awards */}
          <div className="bg-white py-8">
            <div className="flex justify-center items-center gap-3 overflow-x-auto">
              {/* 2024 Diamond+ Invisalign Provider */}
              <Image 
                src="/images/2024-Advantage-Program-Icons-RGB-fullcolor-Diamond-Plus-Tag.png" 
                alt="Diamond+ Invisalign Provider 2024" 
                width={64}
                height={64}
                className="w-16 h-16 object-contain" 
              />
              
              {/* 2023 Diamond+ Invisalign Provider */}
              <Image 
                src="/images/Diamond-Invisalign-provider-2023-6401w.png" 
                alt="Diamond+ Invisalign Provider 2023" 
                width={64}
                height={64}
                className="w-16 h-16 object-contain" 
              />
              
              {/* 2022 Diamond+ Invisalign Provider */}
              <Image 
                src="/images/AdvantageProgIcons_Diamond-2022.png" 
                alt="Diamond+ Invisalign Provider 2022" 
                width={64}
                height={64}
                className="w-16 h-16 object-contain" 
              />
              
              {/* 2021 Diamond+ Invisalign Provider */}
              <Image 
                src="/images/diamond-top-invisalign-2021.jpg" 
                alt="Diamond+ Invisalign Provider 2021" 
                width={64}
                height={64}
                className="w-16 h-16 object-contain" 
              />
              
              {/* 2020 Diamond+ Invisalign Provider */}
              <Image 
                src="/images/AdvantageProgIcons2020.png" 
                alt="Diamond+ Invisalign Provider 2020" 
                width={64}
                height={64}
                className="w-16 h-16 object-contain" 
              />
              
              {/* 2019 Diamond+ Invisalign Provider */}
              <Image 
                src="/images/diamond-logo-2019.png" 
                alt="Diamond+ Invisalign Provider 2019" 
                width={64}
                height={64}
                className="w-16 h-16 object-contain" 
              />
              
              {/* 2018 Diamond+ Invisalign Provider */}
              <Image 
                src="/images/diamond-plus-2018.jpg" 
                alt="Diamond+ Invisalign Provider 2018" 
                width={64}
                height={64}
                className="w-16 h-16 object-contain" 
              />
              
              {/* Best of Main Line 2022 */}
              <Image 
                src="/images/best-of-mainline-2022-226x208.jpg" 
                alt="Best of Main Line 2022" 
                width={64}
                height={64}
                className="w-16 h-16 object-contain" 
              />
              
              {/* Top Invisalign Dentist 2019 */}
              <Image 
                src="/images/tidna-final-19.jpg" 
                alt="Top Invisalign Dentist 2019" 
                width={64}
                height={64}
                className="w-16 h-16 object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
