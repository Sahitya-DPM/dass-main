import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function LaserGingivectomyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Laser Gingivectomy
          </h1>
          <div className="text-center text-white text-[18px] font-sansation-regular">
            <span className="text-[#029fde]">Home</span> / <span className="text-[#029fde]">Dentistry Services</span> / <span className="text-white">Laser Gingivectomy</span>
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
              <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
                Laser Gingivectomy Before and After
              </h2>
              
              <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
                Gingivectomy is a simple procedure performed when gums exceed over the tooth, causing a "gummy" smile or the appearance of smaller teeth. Laser gingivectomy, also known as laser gum recontouring, is performed by your dentist using a laser to remove gum tissue, which can promote easier, quicker healing and results.
              </p>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:w-2/5">
              <Image
                src="/images/Fotolia2.jpg"
                alt="Laser Gingivectomy Treatment"
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          {/* Full-Width Benefits Section */}
          <div className="mt-16">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8">
              Benefits of Laser Gum Recontouring
            </h2>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-6">
              Keeping your smile healthy includes proactive measures to ensure bacteria in your mouth doesn't lead to serious infection. When bacteria builds up and causes gum disease, laser gum recontouring can help by:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Removing stubborn bacteria from dental roots</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Eliminating inflammation caused by gum disease</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Improving your long term dental health</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Reducing bone loss</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Cosmetically enhancing the size of your teeth (making cleaning easier for you in the long run!)</span>
              </li>
            </ul>
          </div>
          
          {/* Full-Width Treatment Process Section */}
          <div className="mt-16">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8">
              Laser Gingivectomy Treatment Process
            </h2>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-6">
              Your dentist will use a laser tool to clear out excessive tissue and shape your gum line. Typical procedure time is under an hour, however, some procedures may include multiple sessions depending on the amount of tissue that needs to be removed from your gums.
            </p>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-6">
              Before treatment, your dentist will administer anesthesia into your gums to numb the area and deter any discomfort. Then your dentist will:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Use a laser to remove part of the gum tissue.</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Apply a suction tool in your mouth to eliminate excess saliva during the process.</span>
              </li>
            </ul>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-6">
              Once the gum tissue has been removed:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Your dentist will use a laser to shape your remaining gum tissue into your gum line and vaporize any excess tissue.</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">You will be asked to keep the area clean and will usually take oral pain medication.</span>
              </li>
            </ul>
          </div>
          
          {/* Full-Width Recovery Section */}
          <div className="mt-16">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8">
              Laser Gingivectomy Recovery Time
            </h2>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-6">
              It's likely your gums will be sensitive after the procedure, but usually, they heal within a week. To help the healing process along, your dentist will recommend that you:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Use over-the-counter pain medication to ease any discomfort.</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Keep the area clean.</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Stick to soft foods for a few days.</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-[#029fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular">Use warm salt water to rinse any lingering bacteria from your mouth on a daily basis.</span>
              </li>
            </ul>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
              It's rare to experience facial and jaw swelling post-procedure. To combat swelling, you can use a cold compress on your cheeks and face. It's always best to contact your dentist if you experience bleeding a few days after the procedure, excessive pain, or infection.
            </p>
          </div>
          
          {/* Full-Width Conclusion Section */}
          <div className="mt-16">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8">
              Keep Your Smile Healthy with Laser Gingivectomy
            </h2>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
              It's always best to take preventative measures when it comes to your oral health! With laser gingivectomy treatment, you can enjoy a full-looking smile that limits your risk of serious infection down the line.
            </p>
            
            <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-8">
              If it's time for your bi-annual check-up or you are ready to learn more about maintaining a healthy smile with laser gingivectomy, contact us today.
            </p>
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
            Contact us today to learn more about laser gingivectomy and schedule your consultation.
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
