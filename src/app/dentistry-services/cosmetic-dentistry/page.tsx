import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function CosmeticDentistryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Cosmetic Dentistry Services
          </h1>
          <div className="text-center text-white text-[18px] font-sansation-regular">
            <span className="text-[#029fde]">Home</span> / <span className="text-[#029fde]">Dentistry Services</span> / <span className="text-white">Cosmetic Dentistry Services</span>
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
                Your smile is often the first impression you make, so it's important to have a smile that you are confident in showing. Our office is known for high-quality cosmetic work with great aesthetics.
              </p>
              
              <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
                Our office offers a full line of cosmetic dentistry services, including:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Porcelain Veneers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Dental Implants</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Brighten Your Smile</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Whitening</span>
                </li>
              </ul>
              
              <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
                We are a leading Philadelphia Invisalign provider, and we provide the best Invisalign deal on the Main Line.
              </p>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:w-2/5">
              <Image
                src="/images/Fotolia2.jpg"
                alt="Cosmetic Dentistry Services"
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          {/* Full-Width Transformations Section */}
          <div className="mt-16">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8">
              Take a look at some of our cosmetic dentistry transformations:
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#029fde] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">Before & After Photos</h3>
                <p className="text-gray-600 text-[14px] font-sansation-regular">See the amazing transformations</p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#029fde] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">Patient Testimonials</h3>
                <p className="text-gray-600 text-[14px] font-sansation-regular">Real stories from our patients</p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#029fde] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">Selfie Gallery</h3>
                <p className="text-gray-600 text-[14px] font-sansation-regular">Patient selfies and results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8">
            Ready to Transform Your Smile?
          </h2>
          
          <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-6 max-w-4xl mx-auto">
            Interested in our cosmetic dentistry services? Contact us from our website or call (610) 649-0313.
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
