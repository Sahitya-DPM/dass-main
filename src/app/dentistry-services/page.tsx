'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AwardSection from "@/components/AwardSection";
import TopRatedSection from "@/components/TopRatedSection";

import Image from "next/image";

export default function DentistryServices() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-[120px] md:pt-[140px] lg:pt-[160px]">
                                   {/* Hero & Insurance Benefits Section - Dark Blue Background */}
         <section className="w-full bg-[#004B87] pt-32 pb-16">
           <div className="w-full px-4 md:px-6 lg:px-8">
             <div className="max-w-6xl mx-auto text-center">
               <h1 className="text-white text-[46px] font-sansation-bold leading-[58px] mb-0">
                 Expert Dental Care
               </h1>
                               <h2 className="text-[#ADD8E6] text-[46px] font-sansation-bold mb-8">
                  With <span className="text-white">or</span> Without <span className="text-white">Insurance</span>
                </h2>
                
                {/* Divider Line */}
                <hr className="w-4/5 h-0.5 bg-[#ADD8E6] mx-auto my-[50px] opacity-25" />
                
                <div className="mb-12">
                                 <h2 className="text-[#029fde] text-[42px] font-sansation-bold mb-4 text-center">
                   $0 Cleanings for Patients With Insurance!
                 </h2>
                                                                   <p className="text-white text-[26px] leading-[1.4] mb-8 italic text-center">
                    We do whatever it takes to ensure you pay as little out-of-pocket as possible!
                  </p>
                </div>

                <div className="mb-8">
                                     <div className="text-center mb-4">
                                           <p className="text-white font-sansation-bold text-[26px] leading-[1.4]">
                        <span className="text-[#029fde] text-[36px] uppercase">FREE*</span> Brighter, White Cleaning for Adults
                      </p>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                     <div className="text-center">
                                               <p className="text-white font-sansation-bold text-[26px] leading-[1.4]">
                          <span className="text-[#029fde] text-[36px] uppercase">FREE*</span> Exam for Adults
                        </p>
                     </div>
                     <div className="text-center">
                                               <p className="text-white font-sansation-bold text-[26px] leading-[1.4]">
                          <span className="text-[#029fde] text-[36px] uppercase">FREE*</span> Cleaning & Exam for Children
                        </p>
                     </div>
                   </div>
                   <div className="text-center">
                                           <p className="text-white font-sansation-bold text-[26px] leading-[1.4]">
                        <span className="text-[#029fde] text-[36px] uppercase">FREE*</span> Second Opinion Evaluation
                      </p>
                   </div>
                </div>

                                                                      <div className="text-center">
                     <p className="text-[#019fde] text-[26px] leading-[1.4] italic">
                       *FREE for patients with insurance. We accept almost all insurance providers.
                     </p>
                   </div>
                   
                   {/* Divider Line */}
                   <hr className="w-4/5 h-0.5 bg-[#ADD8E6] mx-auto my-[50px] opacity-25" />
               
               <div className="mt-16">
                 <h2 className="text-[#029fde] text-[48px] font-sansation-bold mb-[40px]">
                   Smile Now! Pay Later! — 0% Financing
                 </h2>
                 <p className="text-white text-[32px] mb-6">
                   We Offer Affordable Dental Coverage for Uninsured Patients
                 </p>
                 <h3 className="text-[#019fde] text-[42px] font-sansation-bold mb-6">
                   As Low as $324/Year
                 </h3>
                 <p className="text-white text-[28px] italic mt-[30px] leading-[40px]">
                   Offer includes two cleanings, two exams & x-rays. Learn more about our payment options for patients without insurance.
                 </p>
               </div>
             </div>
           </div>
         </section>

        {/* Call to Action - White Background */}
        <section className="w-full bg-white py-16">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
                             <h2 className="text-[#004B87] text-[36px] font-sansation-bold mb-6">
                 Come See Our Caring Dental Team
               </h2>
               <div className="mb-8">
                 <Image 
                   src="/images/new-staff-image-2021.jpg" 
                   alt="Our Caring Dental Team" 
                   width={600} 
                   height={400} 
                   className="mx-auto rounded-lg shadow-lg"
                 />
               </div>
                               <div className="bg-[#029fde] p-[30px] rounded-[20px] text-center mb-0 text-white text-[32px] w-[820px] mx-auto">
                  <p>
                    Schedule a cleaning appointment <span className="underline">online</span> or give us a<br />
                    call at <span className="underline">(610) 649-0313</span>.
                  </p>
                </div>
            </div>
          </div>
        </section>

                 {/* Services Section - White Background */}
         <section className="w-full bg-white py-16">
           <div className="w-full px-4 md:px-6 lg:px-8">
             <div className="w-[820px] mx-auto">
                             <h2 className="text-[#004B87] text-[36px] font-sansation-bold text-center mb-0">
                 A Trusted & Superior Level of Dental Care
               </h2>

                             <div className="space-y-16">
                 {/* Regular Cleanings and X-Rays */}
                                   <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-3/5">
                      <h3 className="text-[#004B87] text-[32px] font-sansation-bold mb-4">
                        Regular Cleanings and X-Rays
                      </h3>
                      <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-6">
                        Regular teeth cleanings are recommended every six months and digital X-rays are taken once every 1-2 years to check for decay. We offer flexible appointment schedules before and after work or school.
                      </p>
                      <button className="bg-[#004B87] text-white px-8 py-3 rounded-lg font-sansation-bold hover:bg-[#003366] transition-colors">
                        Learn More
                      </button>
                    </div>
                    <div className="lg:w-2/5">
                                           <Image 
                        src="/images/Fotolia.jpg" 
                        alt="Regular Cleanings and X-Rays" 
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg"
                      />
                   </div>
                 </div>

                                   {/* Fillings and Crowns */}
                                     <div className="flex flex-col lg:flex-row items-center gap-8">
                     <div className="lg:w-3/5">
                       <h3 className="text-[#004B87] text-[32px] font-sansation-bold mb-4">
                         Fillings and Crowns
                       </h3>
                       <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-6">
                         A dental crown protects and strengthens a tooth&apos;s structure. A filling is used to repair a tooth that is affected by cracks and decay. Dentistry at Suburban Square does excellent work with fillings and crowns.
                       </p>
                       <button className="bg-[#004B87] text-white px-8 py-3 rounded-lg font-sansation-bold hover:bg-[#003366] transition-colors">
                         Learn More
                       </button>
                     </div>
                     <div className="lg:w-2/5">
                                             <Image 
                         src="/images/Fotolia2.jpg" 
                         alt="Fillings and Crowns" 
                         width={400}
                         height={300}
                         className="rounded-lg shadow-lg"
                       />
                    </div>
                  </div>

                                   {/* Cosmetic Dentistry & Veneers */}
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-3/5">
                      <h3 className="text-[#004B87] text-[32px] font-sansation-bold mb-4">
                        Cosmetic Dentistry & Veneers
                      </h3>
                      <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-6">
                        Many patients just want a better looking smile. An in-office consultation helps us determine if veneers or other cosmetic procedures are the right choice for you. We also offer Main Line Invisalign services.
                      </p>
                      <button className="bg-[#004B87] text-white px-8 py-3 rounded-lg font-sansation-bold hover:bg-[#003366] transition-colors">
                        Learn More
                      </button>
                    </div>
                    <div className="lg:w-2/5">
                                           <Image 
                        src="/images/Fotolia4.jpg" 
                        alt="Cosmetic Dentistry & Veneers" 
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg"
                      />
                   </div>
                 </div>

                                                      {/* Implants, Root Canals & Bridges */}
                   <div className="flex flex-col lg:flex-row items-center gap-8">
                     <div className="lg:w-3/5">
                       <h3 className="text-[#004B87] text-[32px] font-sansation-bold mb-4">
                         Implants, Root Canals & Bridges
                       </h3>
                       <p className="text-gray-700 text-[16px] leading-[22px] font-sansation-regular mb-6">
                         We make all of our dental procedures as painless as possible. Once we&apos;re complete, you won&apos;t be able to stop smiling.
                       </p>
                       <button className="bg-[#004B87] text-white px-8 py-3 rounded-lg font-sansation-bold hover:bg-[#003366] transition-colors">
                         Learn More
                       </button>
                     </div>
                     <div className="lg:w-2/5">
                                             <Image 
                         src="/images/Fotolia3.jpg" 
                         alt="Implants, Root Canals & Bridges" 
                         width={400}
                         height={300}
                         className="rounded-lg shadow-lg"
                       />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <TopRatedSection />
        <AwardSection />
        <Footer />
      </div>
    </div>
  );
}
