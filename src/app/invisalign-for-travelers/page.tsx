import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function InvisalignForTravelersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Invisalign® for Travelers: Treatment That Fits Your Schedule
          </h1>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Home / Invisalign® / Invisalign® for Travelers
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
                  The average Invisalign case at most dental practices takes approximately 11 months to complete. At Dentistry at Suburban Square, that same treatment can be completed in as little as 6 months with greater reliability! This gives you much more flexibility with your travel schedule.
                </p>
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  While you will see us in the beginning for a few easy short appointments, most of the treatment will take place at home on your schedule. Dr. Wollock will always tailor your plan to fit your needs, working with your travel timeline and specific Invisalign parameters.
                </p>
              </div>
              
              {/* Right Column - Video */}
              <div className="text-center">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/YBCwZY_I-bY"
                    title="Invisalign for Travelers Video"
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              What Our Traveling Patients Say
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Text Content */}
              <div className="space-y-4">
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  We always love to hear from happy and satisfied customers! This reviewer was leaving to go overseas and appreciated our flexible scheduling before her departure. We ensured she had everything she needed to complete her treatment just in time.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#029fde]">
                  <blockquote className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular italic">
                    "My experience with Dr. Wollock has been great since day one. The staff is really friendly and helpful, definitely make you feel at home. I decided to do my Invisalign treatment with Dr. Wollock and it is the best decision I made. Just before my treatment was complete I noticed one of my teeth was not moving like it should have been, I got notice I was going to be leaving the country just before my treatment was over and Dr Wollock was able to get me in before to make sure I had my trays overseas. Amazing treatment and I definitely recommend coming here."
                  </blockquote>
                  <p className="text-[#004B87] text-[16px] font-sansation-bold mt-4">
                    ~ Cinthia R.
                  </p>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="text-center">
                <Image
                  src="/images/Chau-624x366.jpg"
                  alt="Traveler Patient Success Story"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-[#029fde] p-8 rounded-lg text-white">
            <h3 className="text-white text-[28px] font-sansation-bold mb-4">
              Ready to Start Your Travel-Friendly Invisalign Journey?
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
