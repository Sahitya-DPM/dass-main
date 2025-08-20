import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function BestInvisalignDealPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Get the Best Deal<br />
            on All-Inclusive Invisalign®
          </h1>
          
          {/* Price Display */}
          <div className="text-center mb-8">
            <div className="text-white text-[48px] font-sansation-bold mb-2">
              only $89/paycheck
            </div>
            <div className="text-white text-[32px] font-sansation-regular mb-2">
              or
            </div>
            <div className="text-white text-[56px] font-sansation-bold mb-4">
              $3,279*
            </div>
          </div>
          
                     {/* Price Comparison */}
           <div className="text-white px-6 py-4 inline-block mb-4">
             <div className="text-[42px] font-sansation-bold">
               Most offices charge $5,500-$7,500!
             </div>
           </div>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Available to new patients only
          </div>
          
          <div className="text-white text-[16px] font-sansation-regular mb-6 max-w-2xl mx-auto">
            *This option includes the $600 Invisalign New Patient Coupon.<br />
            Good for two weeks from your Invisalign consult. Cannot be combined with any other discount or coupon.
          </div>
          
          <div className="text-white text-[20px] font-sansation-bold mb-4">
            $89 down. No credit check required.
          </div>
        </div>
      </section>

      {/* Best Deal Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#004B87] text-[36px] font-sansation-bold mb-6">
              The Best Deal, The Best Reviews & The Most Experience
            </h2>
            
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-8 max-w-4xl mx-auto">
              With hundreds of hours of continuing education, Dr. Wollock uses his expertise to train, mentor, and teach other Invisalign dentists across North America. Dr. Wollock brings a wealth of experience to solve your issues with the added benefit of a volume discount. His practice, Dentistry at Suburban Square, treats more Invisalign cases than 99% of other dental practices across the United States.
            </p>
          </div>
          
          {/* Video Consultation Section */}
          <div className="text-center mb-12">
            <h3 className="text-[#004B87] text-[28px] font-sansation-bold mb-6">
              Now Offering Video Consultations!
            </h3>
            
            <h4 className="text-[#004B87] text-[24px] font-sansation-bold mb-6">
              Schedule Your Video Consultation
            </h4>
            
            <button className="bg-[#029fde] text-white px-8 py-4 rounded-lg font-sansation-bold hover:bg-[#0278b3] transition-colors text-[20px] mb-6">
              Click Here for Your Invisalign Payment Option
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-[#004B87] text-[36px] font-sansation-bold mb-12 text-center">
            The Results Speak for Themselves
          </h2>
          
                                {/* Testimonials Auto-Scroll Carousel */}
           <div className="relative max-w-4xl mx-auto overflow-hidden">
             <div className="flex transition-transform duration-1000 ease-in-out" id="testimonial-carousel">
               {/* Kim Testimonial */}
               <div className="w-full flex-shrink-0 bg-white rounded-lg shadow-lg p-8">
                 <div className="flex flex-col lg:flex-row items-center gap-8">
                   {/* Patient Profile Image */}
                   <div className="flex-shrink-0">
                     <Image
                       src="/images/kim.jpg"
                       alt="Kim - Patient Profile"
                       width={120}
                       height={120}
                       className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-[#029fde]"
                     />
                   </div>
                   
                   {/* Patient Name and Quote */}
                   <div className="flex-1 text-center lg:text-left">
                     <h3 className="text-[#004B87] text-[28px] lg:text-[32px] font-sansation-bold mb-4">
                       Kim
                     </h3>
                     <p className="text-gray-700 text-[18px] lg:text-[20px] leading-[28px] font-sansation-regular italic">
                       "It's definitely a process that I would recommend to anyone else who is looking to do some enhancement to their smile."
                     </p>
                   </div>
                   
                   {/* Before & After Images */}
                   <div className="flex-shrink-0">
                     <div className="flex flex-col space-y-3">
                       <div className="text-center">
                         <Image
                           src="/images/kim_before.jpg"
                           alt="Kim Before Treatment"
                           width={100}
                           height={100}
                           className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg object-cover border-2 border-gray-300"
                         />
                         <p className="text-[#004B87] text-[14px] font-sansation-bold mt-2">Before</p>
                       </div>
                       <div className="text-center">
                         <Image
                           src="/images/kim_after.jpg"
                           alt="Kim After Treatment"
                           width={100}
                           height={100}
                           className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg object-cover border-2 border-[#029fde]"
                         />
                         <p className="text-[#004B87] text-[14px] font-sansation-bold mt-2">After</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Jason Testimonial */}
               <div className="w-full flex-shrink-0 bg-white rounded-lg shadow-lg p-8">
                 <div className="flex flex-col lg:flex-row items-center gap-8">
                   {/* Patient Profile Image */}
                   <div className="flex-shrink-0">
                     <Image
                       src="/images/jason.jpg"
                       alt="Jason - Patient Profile"
                       width={120}
                       height={120}
                       className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-[#029fde]"
                     />
                   </div>
                   
                   {/* Patient Name and Quote */}
                   <div className="flex-1 text-center lg:text-left">
                     <h3 className="text-[#004B87] text-[28px] lg:text-[32px] font-sansation-bold mb-4">
                       Jason
                     </h3>
                     <p className="text-gray-700 text-[18px] lg:text-[20px] leading-[28px] font-sansation-regular italic">
                       "My teeth are amazing."
                     </p>
                   </div>
                   
                   {/* Before & After Images */}
                   <div className="flex-shrink-0">
                     <div className="flex flex-col space-y-3">
                       <div className="text-center">
                         <Image
                           src="/images/jason-before.jpg"
                           alt="Jason Before Treatment"
                           width={100}
                           height={100}
                           className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg object-cover border-2 border-gray-300"
                         />
                         <p className="text-[#004B87] text-[14px] font-sansation-bold mt-2">Before</p>
                       </div>
                       <div className="text-center">
                         <Image
                           src="/images/jason-after.jpg"
                           alt="Jason After Treatment"
                           width={100}
                           height={100}
                           className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg object-cover border-2 border-[#029fde]"
                         />
                         <p className="text-[#004B87] text-[14px] font-sansation-bold mt-2">After</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Jacqui Testimonial */}
               <div className="w-full flex-shrink-0 bg-white rounded-lg shadow-lg p-8">
                 <div className="flex flex-col lg:flex-row items-center gap-8">
                   {/* Patient Profile Image */}
                   <div className="flex-shrink-0">
                     <Image
                       src="/images/jacqui.jpg"
                       alt="Jacqui - Patient Profile"
                       width={120}
                       height={120}
                       className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-[#029fde]"
                     />
                   </div>
                   
                   {/* Patient Name and Quote */}
                   <div className="flex-1 text-center lg:text-left">
                     <h3 className="text-[#004B87] text-[28px] lg:text-[32px] font-sansation-bold mb-4">
                       Jacqui
                     </h3>
                     <p className="text-gray-700 text-[18px] lg:text-[20px] leading-[28px] font-sansation-regular italic">
                       "My teeth look beautiful!"
                     </p>
                   </div>
                   
                   {/* Before & After Images */}
                   <div className="flex-shrink-0">
                     <div className="flex flex-col space-y-3">
                       <div className="text-center">
                         <Image
                           src="/images/jacqui-before.jpg"
                           alt="Jacqui Before Treatment"
                           width={100}
                           height={100}
                           className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg object-cover border-2 border-gray-300"
                         />
                         <p className="text-[#004B87] text-[14px] font-sansation-bold mt-2">Before</p>
                       </div>
                       <div className="text-center">
                         <Image
                           src="/images/jacqui-after.jpg"
                           alt="Jacqui After Treatment"
                           width={100}
                           height={100}
                           className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg object-cover border-2 border-[#029fde]"
                         />
                         <p className="text-[#004B87] text-[14px] font-sansation-bold mt-2">After</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Jim Testimonial */}
               <div className="w-full flex-shrink-0 bg-white rounded-lg shadow-lg p-8">
                 <div className="flex flex-col lg:flex-row items-center gap-8">
                   {/* Patient Profile Image */}
                   <div className="flex-shrink-0">
                     <Image
                       src="/images/jim.jpg"
                       alt="Jim - Patient Profile"
                       width={120}
                       height={120}
                       className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-[#029fde]"
                     />
                   </div>
                   
                   {/* Patient Name and Quote */}
                   <div className="flex-1 text-center lg:text-left">
                     <h3 className="text-[28px] lg:text-[32px] font-sansation-bold mb-4">
                       Jim
                     </h3>
                     <p className="text-gray-700 text-[18px] lg:text-[20px] leading-[28px] font-sansation-regular italic">
                       "When I first got the retainers in I thought I was going to feel a bunch of plastic in my mouth, but actually from day 1 it really wasn't that bad."
                     </p>
                   </div>
                   
                   {/* Before & After Images */}
                   <div className="flex-shrink-0">
                     <div className="flex flex-col space-y-3">
                       <div className="text-center">
                         <Image
                           src="/images/jim-before.jpg"
                           alt="Jim Before Treatment"
                           width={100}
                           height={100}
                           className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg object-cover border-2 border-gray-300"
                         />
                         <p className="text-[#004B87] text-[14px] font-sansation-bold mt-2">Before</p>
                       </div>
                       <div className="text-center">
                         <Image
                           src="/images/jim-after.jpg"
                           alt="Jim After Treatment"
                           width={100}
                           height={100}
                           className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg object-cover border-2 border-[#029fde]"
                         />
                         <p className="text-[#004B87] text-[14px] font-sansation-bold mt-2">After</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Testimonial Indicators */}
             <div className="flex justify-center mt-6 space-x-2">
               <div className="w-3 h-3 bg-[#004B87] rounded-full transition-colors duration-300" id="indicator-0"></div>
               <div className="w-3 h-3 bg-gray-300 rounded-full transition-colors duration-300" id="indicator-1"></div>
               <div className="w-3 h-3 bg-gray-300 rounded-full transition-colors duration-300" id="indicator-2"></div>
               <div className="w-3 h-3 bg-gray-300 rounded-full transition-colors duration-300" id="indicator-3"></div>
             </div>
           </div>
        </div>
      </section>

             {/* Smile Regret Club Special */}
       <section className="py-16 bg-[#029fde]">
         <div className="max-w-6xl mx-auto px-4">
           <div className="text-white p-8 rounded-lg text-center">
            <h2 className="text-[32px] font-sansation-bold mb-6">
              The Smile Regret Club Special
            </h2>
            
            <p className="text-[18px] leading-[26px] font-sansation-regular mb-6 max-w-4xl mx-auto">
              Companies like Smile Direct and Candid Co. have significant failure rates and leave many of their customers unsatisfied with their results. If you have previously tried one of these services and are interested in Invisalign, you can save even more on our already great deal.
            </p>
            
                         <div className="text-white px-6 py-4 inline-block mb-4">
               <div className="text-[24px] font-sansation-bold">
                 Get an Additional $100 Off Your Invisalign® Treatment Cost!
               </div>
             </div>
            
            <div className="text-[28px] font-sansation-bold mb-4">
              Final Invisalign® Cost: $3179**
            </div>
            
            <p className="text-[16px] font-sansation-regular">
              **With proof of prior purchase within one year. Available for a limited time.<br />
              *This option includes the $600 Invisalign New Patient Coupon. Good for two weeks from your Invisalign consult. Cannot be combined with any other discount or coupon.
            </p>
          </div>
        </div>
      </section>

      {/* All-Inclusive Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-[#004B87] text-[36px] font-sansation-bold mb-8 text-center">
            What Does All-Inclusive Mean?
          </h2>
          
          <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-8 text-center max-w-4xl mx-auto">
            If you are considering Invisalign with another provider, you should ask about these potential additional costs.<br />
            We offer the best all-inclusive deal, as it includes all of the following.
          </p>
          
                     <div className="text-left mb-8">
             <p className="text-[#004B87] text-[24px] font-sansation-bold mb-6">
               Our services feature an all-inclusive price of $3,279 with no hidden fees. The price includes:
             </p>
           </div>
          
                     {/* Services List */}
           <div className="max-w-3xl mx-auto mb-12">
             <div className="space-y-3 text-left">
               <p className="text-black text-[18px] font-sansation-regular">Initial Consult</p>
               <p className="text-black text-[18px] font-sansation-regular">X-Rays</p>
               <p className="text-black text-[18px] font-sansation-regular">Photos</p>
               <p className="text-black text-[18px] font-sansation-regular">All Visits</p>
               <p className="text-black text-[18px] font-sansation-regular">Scanning/Impressions</p>
               <p className="text-black text-[18px] font-sansation-regular">All Invisalign Treatment</p>
               <p className="text-black text-[18px] font-sansation-regular">Any Necessary Corrections</p>
               <p className="text-black text-[18px] font-sansation-regular">Free Set of Retainers</p>
             </div>
           </div>
          
                     {/* Invisalign Services Menu - 3 Columns */}
           <div className="mb-12">
             <h3 className="text-[#004B87] text-[28px] font-sansation-bold mb-8 text-center">
               Invisalign® Services & Information
             </h3>
             
                           <div className="grid md:grid-cols-3 gap-8">
                {/* Column 1: The Invisalign® Experience */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#029fde]">
                  <h4 className="text-[#004B87] text-[22px] font-sansation-bold mb-6 text-center border-b-2 border-[#029fde] pb-3">
                    The Invisalign® Experience
                  </h4>
                  <ul className="space-y-3">
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• Before and After Photos</li>
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• Testimonials</li>
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• Selfie Gallery</li>
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• Review Websites</li>
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• FAQs</li>
                  </ul>
                </div>
                
                {/* Column 2: Invisalign® Comparisons */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#004B87]">
                  <h4 className="text-[#004B87] text-[22px] font-sansation-bold mb-6 text-center border-b-2 border-[#004B87] pb-3">
                    Invisalign® Comparisons
                  </h4>
                  <ul className="space-y-3">
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• Invisalign® vs Braces</li>
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• Invisalign® vs Smile Direct Club</li>
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• Invisalign® vs Candid Co</li>
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• Cost of Invisalign®</li>
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• My Dentist Said I Can't Do Invisalign®</li>
                  </ul>
                </div>
                
                {/* Column 3: Invisalign® for All */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#029fde]">
                  <h4 className="text-[#004B87] text-[22px] font-sansation-bold mb-6 text-center border-b-2 border-[#029fde] pb-3">
                    Invisalign® for All
                  </h4>
                  <ul className="space-y-3">
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• Invisalign® for Brides</li>
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• Invisalign® for Teens</li>
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• Invisalign® for Travelers</li>
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• Invisalign® Payment Plans</li>
                    <li className="text-[#004B87] text-[16px] font-sansation-regular hover:text-[#029fde] transition-colors cursor-pointer">• Philadelphia Invisalign®</li>
                  </ul>
                </div>
              </div>
           </div>
           
           {/* Additional Links */}
           <div className="text-center space-y-4">
             <div className="flex justify-center space-x-6">
               <button className="bg-[#029fde] text-white px-6 py-3 rounded-lg font-sansation-bold hover:bg-[#0278b3] transition-colors text-[18px]">
                 Video Testimonials
               </button>
               <button className="bg-[#004B87] text-white px-6 py-3 rounded-lg font-sansation-bold hover:bg-[#003366] transition-colors text-[18px]">
                 Read Google & Yelp Reviews
               </button>
             </div>
             
             <p className="text-gray-700 text-[18px] font-sansation-regular">
               If you are interested in Invisalign, click here for more information about our Invisalign program.
             </p>
           </div>
        </div>
      </section>

             <AwardSection />
       <Footer />
       
       {/* Auto-scroll Script */}
       <script
         dangerouslySetInnerHTML={{
           __html: `
             (function() {
               let currentSlide = 0;
               const totalSlides = 4;
               const carousel = document.getElementById('testimonial-carousel');
               
               function updateIndicators() {
                 for (let i = 0; i < totalSlides; i++) {
                   const indicator = document.getElementById('indicator-' + i);
                   if (indicator) {
                     indicator.className = i === currentSlide 
                       ? 'w-3 h-3 bg-[#004B87] rounded-full transition-colors duration-300'
                       : 'w-3 h-3 bg-gray-300 rounded-full transition-colors duration-300';
                   }
                 }
               }
               
               function nextSlide() {
                 currentSlide = (currentSlide + 1) % totalSlides;
                 if (carousel) {
                   carousel.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
                 }
                 updateIndicators();
               }
               
               // Auto-scroll every 5 seconds
               setInterval(nextSlide, 5000);
               
               // Initialize indicators
               updateIndicators();
             })();
           `
         }}
       />
     </div>
   );
 }
