import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function TeethCleaningsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
                     <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
             Regular Teeth Cleanings & X-Rays
           </h1>
           <div className="text-center text-white text-[18px] font-sansation-regular">
             <span className="text-[#029fde]">Home</span> / <span className="text-[#029fde]">Dentistry Services</span> / <span className="text-white">Regular Teeth Cleanings & X-Rays</span>
           </div>
        </div>
      </section>

      {/* Main Content Area - Routine Dental Visits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Two-Column Layout */}
          <div className="flex flex-col lg:flex-row gap-12 mb-12">
                         {/* Left Column - Text Content */}
             <div className="lg:w-3/5">
              <h2 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                You should be visiting a dentist every six months for a routine check-up.
              </h2>
              
              <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
                We also complete yearly X-rays on patients so we can find and treat dental problems early in their development.
              </p>
              
              <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-4">
                Routine dental visits help to:
              </h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Prevent Cavities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Freshen Your Breath</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Stop Tooth Loss</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Brighten Your Smile</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Improve Your Overall Health</span>
                </li>
              </ul>
              
                             <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">
                 Visiting a dentist twice a year ensures that your teeth get the proper care they need. Regular dental cleanings also may help lower your risk for some diseases, including heart disease and stroke.
               </p>
             </div>
            
                         {/* Right Column - Image */}
             <div className="lg:w-2/5">
              <Image
                src="/images/Fotolia.jpg"
                alt="Dental Professional with X-Ray"
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
                     {/* Full-Width Schedule Section */}
           <div className="mt-16">
             <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8">
               Schedule a Teeth Cleaning
             </h2>
             
             <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-6">
               Dentistry at Suburban Square, led by Dr. Michael I. Wollock, provides top-notch dental care. We consistently are awarded as Main Line Today's "Top Dentist," and we take patient care seriously. Our offices are conveniently located in The Times Building in Ardmore's Suburban Square. We also offer payment options for patients without insurance.
             </p>
             
             <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">
               Interested in scheduling an appointment? Contact us online or call (610) 649-0313.
             </p>
           </div>
        </div>
      </section>



      <AwardSection />
      <Footer />
    </div>
  );
}
