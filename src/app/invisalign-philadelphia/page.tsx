import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function InvisalignPhiladelphiaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Invisalign® Philadelphia
          </h1>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Home / Invisalign® / Invisalign® Philadelphia
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 text-[18px] leading-[22px] font-sansation-regular mb-4">
              The Best Invisalign Deal is 20 Minutes Away!
            </p>
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular">
              Our Ardmore office, located in the Suburban Square shopping center, is just a few blocks from the Ardmore train station. It's easy to get to us by car or train, and there's a number of free parking options near our office.
            </p>
          </div>

          {/* Getting to Our Office & Contact Section */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Getting to Our Office */}
              <div className="space-y-4">
                <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
                  Getting to Our Office from the City
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-2">
                      By Car:
                    </h3>
                    <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                      Our office is a 20 minute drive from 30th Street Station via I-76 West. There's a few free parking options in the area, including the lot that is accessible from Saint James Pl., between E. Montgomery Ave. and Coulter Ave. Get directions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-2">
                      By Public Transportation:
                    </h3>
                    <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                      Take the Paoli/Thorndale line from the city to Ardmore. The train station is a 16 minute ride from 30th Street, and our office is less than a 5 minute walk from the train station. Check the SEPTA schedule.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Us */}
              <div className="space-y-4">
                <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
                  Contact Us
                </h2>
                
                <div className="space-y-4">
                  <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                    The best way to reach us during regular business hours is by phone.
                  </p>
                  
                  <div className="bg-[#004B87] p-6 rounded-lg text-white text-center">
                    <p className="text-white text-[24px] font-sansation-bold">
                      (610) 649-0313
                    </p>
                  </div>
                  
                  <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                    Use the contact form below to drop us a line if you can't talk on the phone right now. Any scheduling changes or cancellations must be called into the office during business hours.
                  </p>
                </div>
              </div>
                         </div>
           </div>

                       {/* Invisalign Dental Office Section */}
            <div className="mb-12">
              <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6 text-center">
                Invisalign Dental Office
              </h2>
              
              <div className="text-center">
                <Image
                  src="/images/new-staff-image-2021.jpg"
                  alt="Invisalign Dental Office"
                  width={600}
                  height={400}
                  className="w-full max-w-2xl mx-auto h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

                                                   {/* Top Rated Dental Care Section */}
              <div className="mb-12">
                <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6 text-center">
                  Top Rated Dental Care
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Google Reviews */}
                  <div className="text-center">
                    <div className="text-4xl mb-4">
                      <span className="text-blue-500">G</span>
                      <span className="text-red-500">o</span>
                      <span className="text-yellow-500">o</span>
                      <span className="text-blue-500">g</span>
                      <span className="text-green-500">l</span>
                      <span className="text-red-500">e</span>
                    </div>
                    <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
                    <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular font-semibold mb-2">
                      4.9 out of 5 stars
                    </p>
                    <a href="#" className="text-[#004B87] text-[15px] leading-[22px] font-sansation-regular underline hover:no-underline">
                      550+ Reviews
                    </a>
                  </div>
                  
                  {/* Facebook Reviews */}
                  <div className="text-center">
                    <div className="text-4xl mb-4 text-blue-600">f</div>
                    <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
                    <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular font-semibold mb-2">
                      4.9 out of 5 stars
                    </p>
                    <a href="#" className="text-[#004B87] text-[15px] leading-[22px] font-sansation-regular underline hover:no-underline">
                      200+ Reviews
                    </a>
                  </div>
                  
                  {/* Yelp Reviews */}
                  <div className="text-center">
                    <div className="text-4xl mb-4">
                      <span className="text-black">y</span>
                      <span className="text-red-500">e</span>
                      <span className="text-black">l</span>
                      <span className="text-red-500">p</span>
                    </div>
                    <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
                    <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular font-semibold mb-2">
                      4.9 out of 5 stars
                    </p>
                    <a href="#" className="text-[#004B87] text-[15px] leading-[22px] font-sansation-regular underline hover:no-underline">
                      100+ Reviews
                    </a>
                  </div>
                </div>
              </div>

           {/* Smile, Shop & Dine Section */}
           <div className="mb-12">
             <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6 text-center">
               Smile, Shop & Dine in Suburban Square
             </h2>
             
             <div className="max-w-4xl mx-auto">
               <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-8 text-center">
                 If you're coming to our office for Invisalign treatment, don't miss out on all of the great options for shopping and dining. Some of our favorites include:
               </p>
               
               <div className="grid md:grid-cols-3 gap-8">
                 {/* Shop Column */}
                 <div className="text-center">
                   <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                     Shop:
                   </h3>
                   <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                     There's dozens of shops all within walking distance of our office, including Apple, lululemon, west elm, and J. Crew.
                   </p>
                 </div>
                 
                 {/* Eat Column */}
                 <div className="text-center">
                   <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                     Eat:
                   </h3>
                   <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                     Since you can easily remove your Invisalign aligners to enjoy any food you want, why not follow up your free Invisalign consultation with a celebratory meal Not Your Average Joe's, sweetgreen, Besito, or Ruby's Diner.
                   </p>
                 </div>
                 
                 {/* Drink Column */}
                 <div className="text-center">
                   <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                     Drink:
                   </h3>
                   <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                     For beer lovers, don't miss your chance to try some delicious beers from Tired Hands at their Brew Cafe or Fermentaria.
                   </p>
                 </div>
               </div>
               
               <div className="text-center mt-8">
                 <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                   Check out the complete Suburban Square directory.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>

      <AwardSection />
      <Footer />
    </div>
  );
}
