import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function InvisalignForBridesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Brides: Get Your Dream Smile for the Big Day
          </h1>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Home / Invisalign® / Invisalign® for Brides
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
                     {/* Introduction */}
           <div className="mb-12">
             <div className="grid lg:grid-cols-2 gap-8">
               {/* Left Column - Text Content */}
               <div className="space-y-4">
                 <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                   The day you get married is a day you'll remember for the rest of your life. Those photos will be framed for years to come, and even passed on to your children and future generations. The last thing you'll want to feel when looking at those images is self conscious about your smile.
                 </p>
                 <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                   At Dentistry at Suburban Square, we can provide an easy, painless avenue to the smile of your dreams just in time for your wedding day. Our orthodontic and cosmetic services will ensure you're beaming with pride in all of your wedding photos.
                 </p>
               </div>
               
               {/* Right Column - Image */}
               <div className="text-center">
                 <Image
                   src="/images/brides.jpeg"
                   alt="Wedding Bride"
                   width={400}
                   height={300}
                   className="w-full h-64 object-cover rounded-lg shadow-lg"
                 />
               </div>
             </div>
           </div>

          {/* Invisalign for Brides Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Invisalign for Brides
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Text Content */}
              <div className="space-y-4">
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  According to Brides.com, Invisalign is the gold standard for getting straighter teeth in time for your nuptials. The trays are clear, unnoticeable, and painless. Unlike with traditional braces, you can remove them when needed. Visit our Invisalign page to check out our unbelievable pricing.
                </p>
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  Many brides assume that once the wedding planning has begun, they don't have the time for orthodontic treatment. With Invisalign, this just isn't true. Dr. Wollock's average treatment time is twice as fast as the national average and his completion rate is also well above the national average. In many cases, you'll have time to complete Invisalign before your big day.
                </p>
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  If you don't have much time left before your wedding, Dr. Wollock can remove buttons from your teeth for your wedding if treatment hasn't completely finished. He'll install them again once you're ready to continue with treatment.
                </p>
              </div>
              
                             {/* Right Column - Image */}
               <div className="text-center">
                 <Image
                   src="/images/brides2.jpeg"
                   alt="Invisalign for Brides"
                   width={400}
                   height={300}
                   className="w-full h-64 object-cover rounded-lg shadow-lg"
                 />
               </div>
            </div>
          </div>

          {/* All-Inclusive Pricing Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              All-Inclusive Invisalign for $3,279
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Text Content */}
              <div className="space-y-4">
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  Dentistry at Suburban Square's Invisalign treatment is all-inclusive so you have nothing to worry about. It's the best deal on Invisalign in the Philadelphia area. There are no hidden costs, and the price you pay upfront, or with a payment plan, covers:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                    <li>Initial consult</li>
                    <li>All visits</li>
                    <li>All Invisalign treatment</li>
                    <li>X-rays</li>
                    <li>Photos</li>
                    <li>Scanning/impressions</li>
                    <li>Any necessary corrections</li>
                    <li>Free set of retainers</li>
                  </ul>
                </div>
                
                <p className="text-[#004B87] text-[18px] font-sansation-regular">
                  <strong>Learn more about Dentistry at Suburban Square's Invisalign deal</strong>.
                </p>
              </div>
              
                             {/* Right Column - Image */}
               <div className="text-center">
                 <Image
                   src="/images/Daniella-624x366.jpg"
                   alt="All-Inclusive Invisalign Treatment"
                   width={400}
                   height={300}
                   className="w-full h-64 object-cover rounded-lg shadow-lg"
                 />
               </div>
            </div>
          </div>

                     {/* Referral Program Section */}
           <div className="mb-12">
             <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
               Refer Your Fiancé and Save!
             </h2>
             
             <div className="max-w-4xl mx-auto">
               <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                 Dentistry at Suburban Square offers a referral program to sweeten the Invisalign deal even more! If you refer a new patient, you will receive a $100 credit for dental treatment, and the new patient also receives a $100 credit. If your fiancé is also interested in Invisalign, you'll each save $100, which you can put towards your wedding day.
               </p>
             </div>
           </div>

                     {/* Teeth Whitening Section */}
           <div className="mb-12">
             <h2 className="text-[32px] font-sansation-bold mb-6">
               Whiter, Brighter Smile
             </h2>
             
             <div className="max-w-4xl mx-auto space-y-4">
               <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                 In addition to orthodontic treatment, Dr. Wollock and the rest of the team are also happy to help with teeth whitening. Every bride could use a bit of whitening to help get that picture perfect look, and our office provides an array of cosmetic dentistry services at affordable prices.
               </p>
               <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                 Schedule an appointment for several days before the big day and you'll leave the office with a stain-free, mesmerizing smile.
               </p>
             </div>
           </div>

          {/* Call to Action */}
          <div className="text-center bg-[#029fde] p-8 rounded-lg text-white">
            <h3 className="text-white text-[28px] font-sansation-bold mb-4">
              Ready for Your Dream Wedding Smile?
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
