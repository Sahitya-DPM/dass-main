import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function ImplantsRootCanalsBridgesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Implants, Root Canals & Bridges
          </h1>
          <div className="text-center text-white text-[18px] font-sansation-regular">
            <span className="text-[#029fde]">Home</span> / <span className="text-[#029fde]">Dentistry Services</span> / <span className="text-white">Implants, Root Canals & Bridges</span>
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
                Dentistry at Suburban Square provides a number of special dental procedures, including implants, root canals, and bridges.
              </p>
              
              <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
                Implants
              </h2>
              
              <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
                Tooth loss is a common problem for millions of Americans, and it can happen because of injury, decay, and gingivitis.
              </p>
              
              <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
                Dental implants are replacement tooth roots that provide a strong foundation for replacement teeth. They are designed to fuse with the bone, and they look and feel like your own teeth. They are also very durable and more comfortable than dentures.
              </p>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:w-2/5">
              <Image
                src="/images/Fotolia2.jpg"
                alt="Dental Implants, Root Canals & Bridges"
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          {/* Full-Width Root Canals Section */}
          <div className="mt-16">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8">
              Root Canals
            </h2>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
              Sometimes a tooth that is decayed or infected needs a root canal procedure. A root canal is performed when the nerve of a tooth is infected. During the procedure, the nerve is removed and the inside of the tooth is then cleaned and sealed.
            </p>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
              Root canals have a bad reputation for being a painful procedure, but that is not the case. Most people don't report pain, and often the most painful part is dealing with the pain up until the procedure.
            </p>
          </div>
          
          {/* Full-Width Bridges Section */}
          <div className="mt-16">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8">
              Bridges
            </h2>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
              Like implants, dental bridges can fill a gap created by missing teeth. A bridge is made up of two or more crowns on each side of a missing tooth. A false tooth is then placed in between. Dental bridges are supported by natural teeth or implants.
            </p>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
              Bridges vary based on the patient, but once the system is in place, a bridge lasts for well over 10-15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8">
            Schedule a Consultation
          </h2>
          
          <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-6 max-w-4xl mx-auto">
            For these procedures, it's best to schedule a consultation with Dr. Michael I. Wollock. Call our office at (610) 649-0313 or contact us straight from our website.
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
