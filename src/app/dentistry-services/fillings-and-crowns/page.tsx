import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function FillingsAndCrownsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Fillings and Crowns
          </h1>
          <div className="text-center text-white text-[18px] font-sansation-regular">
            <span className="text-[#029fde]">Home</span> / <span className="text-[#029fde]">Dentistry Services</span> / <span className="text-white">Fillings and Crowns</span>
          </div>
        </div>
      </section>

      {/* Main Content Area - Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Two-Column Layout */}
          <div className="flex flex-col lg:flex-row gap-12 mb-12">
            {/* Left Column - Text Content */}
            <div className="lg:w-3/5">
              <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
                If you have a decaying, cracked, or fractured tooth, then you may be in need of a crown or a filling. Don't wait around for a decaying tooth to just disappear, as you could then be faced with bigger and more expensive problems. Dentistry at Suburban Square is skilled at dealing with these oral problems, and we can gladly help you decide if you are in need of a crown or a filling.
              </p>
              
              <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
                What is a Filling?
              </h2>
              
              <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
                A filling is used to repair a tooth that may be affected by fractures, cracks, or decay. A composite (tooth-colored) filling is often the most common type of filling. In this process, the affected portion of the tooth is removed and then filled with a composite filling. A filling will last for years to come so your smile will stay looking great.
              </p>
              
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                When Do I Need a Filling?
              </h3>
              
              <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-4">
                Common reasons you might need a filling include:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Decayed teeth</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Chipped teeth</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Cracked or broken teeth</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Closing space between two teeth</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Worn teeth</span>
                </li>
              </ul>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:w-2/5">
              <Image
                src="/images/Fotolia2.jpg"
                alt="Dental Fillings and Crowns"
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          {/* Full-Width Crowns Section */}
          <div className="mt-16">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8">
              What is a Crown?
            </h2>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
              A dental crown acts as a cap, as it is a covering that encases the entire tooth's surface, restoring it to its original shape and size. A crown is often needed when a filling can't do the job, and a crown protects the overall tooth structure. Porcelain crowns are popular because they match the color of your teeth and are highly durable. Newer crowns are also resistant to grinding and other abuses. When you need a crown, we customize it to match the size, shape, and colors of your teeth.
            </p>
            
            <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
              When Do I Need a Crown?
            </h3>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-4">
              Common reasons you might need a crown include:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Fractured fillings</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Broken or fractured teeth</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Cosmetic reasons</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Decayed teeth</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Large fillings</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Root canal on a tooth</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8">
            Ready to Schedule Your Appointment?
          </h2>
          
          <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-6 max-w-4xl mx-auto">
            Would you like to learn more information about crowns and fillings or are you ready to schedule an appointment? Contact us straight from our website or call (610) 649-0313.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#029fde] text-white px-8 py-4 rounded-lg font-sansation-bold hover:bg-[#0278b3] transition-colors text-[18px]">
              Contact Us Online
            </button>
            <a 
              href="tel:610-649-0313"
              className="bg-[#004B87] text-white px-8 py-4 rounded-lg font-sansation-bold hover:bg-[#003366] transition-colors text-[18px] inline-block"
            >
              Call (610) 649-0313
            </a>
          </div>
        </div>
      </section>

      <AwardSection />
      <Footer />
    </div>
  );
}
