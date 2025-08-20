import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function InvisalignForTeensPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Invisalign® for Teens: Confidence Without Compromise
          </h1>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Home / Invisalign® / Invisalign® for Teens
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Introduction Section */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Text Content */}
              <div className="space-y-4">
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  Getting traditional braces as a teen can be an unpleasant experience. With the long list of foods they can no longer consume, the sports they can no longer play, and the more complicated oral hygiene routine they will need to implement, metal braces come with a number of new restrictions and difficulties. Even so, many teens would be able to tolerate these changes if there wasn't one huge downside—everyone can tell that they have braces, a.k.a. "metal mouth."
                </p>
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  At Dentistry at Suburban Square, we can provide an Invisalign Teen treatment plan that works for your teen, without interrupting their life or risking their confidence.
                </p>
              </div>
              
              {/* Right Column - Image */}
              <div className="text-center">
                <Image
                  src="/images/before-after-gyzell-624x318.jpg"
                  alt="Teen Invisalign Before and After Results"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Text Content */}
              <div className="space-y-4">
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  Many parents are concerned that choosing Invisalign puts a lot of responsibility on the teen to ensure they wear them often enough and don't lose them. However, this is not an issue for many teens. The benefits and added responsibilities of Invisalign far outweigh the limited positives of braces.
                </p>
              </div>
              
              {/* Right Column - Image */}
              <div className="text-center">
                <Image
                  src="/images/before-after-gavin-624x318.jpg"
                  alt="Teen Invisalign Benefits"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Best Invisalign Deal in Philadelphia
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Text Content */}
              <div className="space-y-4">
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  Our deal on Invisalign is by far the best and most affordable in the Philadelphia area. The treatment is all-inclusive, with no hidden fees, and costs a total of $3,279. Learn more about the cost of Invisalign.
                </p>
                
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  This price, paid upfront or with a payment plan, includes everything you will need:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                    <li>Initial consultation</li>
                    <li>All visits</li>
                    <li>All Invisalign treatment</li>
                    <li>X-rays</li>
                    <li>Scanning/impressions</li>
                    <li>Any necessary corrections</li>
                    <li>Free set of retainers</li>
                  </ul>
                </div>
              </div>
              
              {/* Right Column - Video */}
              <div className="text-center">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/7PbclI7eoUs"
                    title="Invisalign for Teens Video"
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-[#029fde] p-8 rounded-lg text-white">
            <h3 className="text-white text-[28px] font-sansation-bold mb-4">
              Ready to Transform Your Teen's Smile?
            </h3>
            <p className="text-white text-[18px] leading-[26px] font-sansation-regular mb-6">
              If you're ready for a consultation or have any questions, fill out our form or call the office at (610) 649-0313.
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
