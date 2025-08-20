import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function CandidCoVsLocalDentistPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Candid Co vs Your Local Dentist for Invisalign®
          </h1>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Home / Invisalign® / Candid Co vs Your Local Dentist
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-6">
              Candid Co is another at-home clear aligner company that has gained popularity in recent years. Like other direct-to-consumer orthodontic companies, they offer a different approach to teeth straightening compared to traditional dental office treatment.
            </p>
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular">
              Understanding the differences between Candid Co and professional dental care can help you make the best choice for your smile.
            </p>
          </div>

          {/* Comparison Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8 text-center">
              Candid Co vs Local Dentist: Key Differences
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Candid Co */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#004B87]">
                <h3 className="text-[#004B87] text-[28px] font-sansation-bold mb-6 text-center">
                  Candid Co
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                    How It Works
                  </h4>
                  <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mb-4">
                    Candid Co uses an at-home impression kit and remote monitoring. Treatment plans are created by orthodontists who review your case remotely without in-person consultation.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Lower cost than traditional treatment
                    </li>
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Convenient at-home treatment
                    </li>
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Minimal office visits required
                    </li>
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Remote monitoring available
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Limited in-person supervision
                    </li>
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Cannot treat complex cases
                    </li>
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • No hands-on adjustments
                    </li>
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Risk of treatment complications
                    </li>
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Limited emergency support
                    </li>
                  </ul>
                </div>
              </div>

              {/* Local Dentist */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#029fde]">
                <h3 className="text-[#004B87] text-[28px] font-sansation-bold mb-6 text-center">
                  Local Dentist (Dr. Wollock)
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                    How It Works
                  </h4>
                  <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mb-4">
                    Comprehensive in-office evaluation with 3D scanning, X-rays, and professional consultation. Dr. Wollock personally designs and monitors your treatment plan with regular check-ups.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Professional supervision throughout treatment
                    </li>
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Comprehensive dental evaluation
                    </li>
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Treatment adjustments as needed
                    </li>
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Can handle complex cases
                    </li>
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Immediate support for issues
                    </li>
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Addresses other dental concerns
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Higher initial investment
                    </li>
                    <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                      • Requires office visits
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mb-12 text-center">
            <Image
              src="/images/Fotolia4.jpg"
              alt="Candid Co vs Local Dentist Comparison"
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Why Choose Local Dentist Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Why Choose Your Local Dentist for Invisalign®?
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#029fde]">
                <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                  Professional Expertise
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  Dr. Wollock has years of experience with Invisalign treatment and can handle complex cases that at-home companies cannot. His expertise ensures better treatment outcomes.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#004B87]">
                <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                  Personalized Care
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  Every patient is unique, and Dr. Wollock creates customized treatment plans based on your specific dental needs and goals.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#029fde]">
                <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                  Ongoing Support
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  With regular office visits, any issues can be addressed immediately, and your treatment can be adjusted as needed for optimal results.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#004B87]">
                <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                  Comprehensive Treatment
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  Your local dentist can address other dental issues that may affect your Invisalign treatment, ensuring overall oral health.
                </p>
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6 text-center">
              Cost Comparison
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">Candid Co</h3>
                <p className="text-gray-700 text-[18px] font-sansation-regular">$1,900 - $2,400</p>
                <p className="text-gray-600 text-[14px] font-sansation-regular">Upfront payment required</p>
              </div>
              <div className="text-center">
                <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">Local Dentist</h3>
                <p className="text-[#029fde] text-[24px] font-sansation-bold">$3,279</p>
                <p className="text-gray-600 text-[14px] font-sansation-regular">All-inclusive with payment plans available</p>
              </div>
            </div>
          </div>

          {/* Treatment Complexity */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Treatment Complexity Matters
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#029fde]">
              <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-4">
                At-home companies like Candid Co are limited to simple cases with minor crowding or spacing issues. They cannot treat:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  • Severe crowding or spacing
                </li>
                <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  • Bite problems (overbite, underbite, crossbite)
                </li>
                <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  • Cases requiring extractions
                </li>
                <li className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  • Complex tooth movements
                </li>
              </ul>
              <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mt-4">
                Dr. Wollock can handle all these cases and more, ensuring you get the smile you deserve regardless of complexity.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-[#029fde] p-8 rounded-lg text-white">
            <h3 className="text-white text-[28px] font-sansation-bold mb-4">
              Get Professional Invisalign® Care
            </h3>
            <p className="text-white text-[18px] leading-[26px] font-sansation-regular mb-6">
              Don't compromise on your smile. Schedule a consultation with Dr. Wollock to discuss your Invisalign treatment options and get the professional care you deserve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-[#029fde] px-8 py-3 rounded-lg font-sansation-bold hover:bg-gray-100 transition-colors text-[18px]">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-sansation-bold hover:bg-white hover:text-[#029fde] transition-colors text-[18px]">
                Call (610) 649-0313
              </button>
            </div>
          </div>
        </div>
      </section>

      <AwardSection />
      <Footer />
    </div>
  );
}
