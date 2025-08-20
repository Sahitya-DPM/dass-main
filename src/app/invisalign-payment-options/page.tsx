import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function InvisalignPaymentOptionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Invisalign® Payment Plans
          </h1>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Home / Invisalign® / Invisalign® Payment Plans
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Pricing Table Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Invisalign® Pricing Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mb-8">
                <thead>
                  <tr className="bg-[#004B87] text-white">
                    <th className="border border-gray-300 p-4 text-left">Service</th>
                    <th className="border border-gray-300 p-4 text-left">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Average Invisalign Cost</td>
                    <td className="border border-gray-300 p-4">$5,500-7,500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">Dentistry at Suburban Square Unbelievable All-Inclusive Invisalign Treatment</td>
                    <td className="border border-gray-300 p-4">Only $3,879</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4">Initial consult, X-rays, photos, & impressions/scan, Invisalign Clear Aligners, any necessary additional aligners, a single set of retainers, all Invisalign treatment visits</td>
                    <td className="border border-gray-300 p-4"></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">Your New Patient Coupon (expires 2 weeks after your Invisalign Consultation)</td>
                    <td className="border border-gray-300 p-4">-$600*</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 text-center text-sm text-gray-600" colSpan={2}>Available to new patients only</td>
                  </tr>
                  <tr className="bg-[#029fde] text-white">
                    <td className="border border-gray-300 p-4 font-bold text-lg">Bringing Your Cost Down to</td>
                    <td className="border border-gray-300 p-4 font-bold text-lg">$3,279*</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 text-center text-sm text-gray-600" colSpan={2}>Your insurance reimbursement can lower this cost even further.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 text-center text-sm text-gray-600" colSpan={2}>Available to new patients only</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular mb-4">
                Upon completion of your Invisalign consultation our front desk will schedule you for a Data Collection appointment (scan, photos, X-rays - all included). They will collect a $89 fully refundable deposit to lock in the limited time lowest discount. That deposit will be credited towards full payment due at that Data Collection appointment.
              </p>
              <p className="text-gray-700 text-[14px] leading-[20px] font-sansation-regular">
                *The following options include the $600 Invisalign New Patient Coupon. Good for two weeks from your Invisalign consult. Cannot be combined with any other discount or coupon.
              </p>
            </div>
            
                         <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
               Below are our Easy Funding Options.
             </h3>
           </div>

           {/* Easy Funding Options Section */}
           <div className="mb-12">
             <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
               Easy Funding Options
             </h2>
             
             <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular mb-8">
               Financial considerations should never be an obstacle to obtaining a happier and healthier smile. We have different options available to fit everyone's individual needs.
             </p>
             
             <div className="space-y-4">
               {/* Option 1 */}
               <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                 <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                   <span className="text-[#004B87] text-[18px] font-sansation-bold">Option 1: Lowest Total Cost</span>
                   <span className="text-[#004B87] text-2xl">+</span>
                 </button>
                 <div className="px-6 pb-4">
                   <div className="space-y-3">
                     <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                       <strong>$3,279 in full at first appointment</strong> (scanning/data collection appt)
                     </p>
                     <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                       (check, cash, debit/credit card, HSA)
                     </p>
                     <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                       Any insurance reimbursement will be sent directly to you
                     </p>
                     <p className="text-gray-700 text-[14px] leading-[20px] font-sansation-regular text-gray-600">
                       *The following options include the $600 Invisalign New Patient Coupon. Good for two weeks from your Invisalign consult. Cannot be combined with any other discount or coupon.
                     </p>
                   </div>
                 </div>
               </div>

               {/* Option 2 */}
               <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                 <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                   <span className="text-[#004B87] text-[18px] font-sansation-bold">Option 2: No Credit Check</span>
                   <span className="text-[#004B87] text-2xl">+</span>
                 </button>
                 <div className="px-6 pb-4">
                   <div className="space-y-3">
                     <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                       <strong>$89 a paycheck</strong> With $89 deposit at signup
                     </p>
                     <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                       (payment is linked directly to your bank account)
                     </p>
                     <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                       Only $4,300 if paid off within a year, otherwise 29.99% interest for 36 months totaling $6,445
                     </p>
                   </div>
                 </div>
               </div>

               {/* Option 3 */}
               <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                 <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                   <span className="text-[#004B87] text-[18px] font-sansation-bold">Option 3: Lowest Monthly Payment</span>
                   <span className="text-[#004B87] text-2xl">+</span>
                 </button>
                 <div className="px-6 pb-4">
                   <div className="space-y-3">
                     <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                       <strong>$167 a month</strong> $0 down
                     </p>
                     <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                       Totaling $4,008, 24 months, zero down, 0% interest with approval thru Care Credit
                     </p>
                     <p className="text-gray-700 text-[14px] leading-[20px] font-sansation-regular text-gray-600">
                       Finance options available through 3rd party monthly payments (Care Credit) must be paid timely to avoid penalties.
                     </p>
                   </div>
                 </div>
               </div>

               {/* Option 4 */}
               <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                 <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                   <span className="text-[#004B87] text-[18px] font-sansation-bold">Option 4: Low Down Payments With In-Office Payment Plan</span>
                   <span className="text-[#004B87] text-2xl">+</span>
                 </button>
                 <div className="px-6 pb-4">
                   <div className="space-y-3">
                     <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                       <strong>$1,000 down</strong>
                     </p>
                     <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                       $334.75 bi-weekly for 4 months, totaling $3,678
                     </p>
                   </div>
                 </div>
               </div>

               {/* Option 5 */}
               <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                 <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                   <span className="text-[#004B87] text-[18px] font-sansation-bold">Option 5: Insurance Payment Sent to Us Instead of You*</span>
                   <span className="text-[#004B87] text-2xl">+</span>
                 </button>
                 <div className="px-6 pb-4">
                   <div className="space-y-3">
                     <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                       Subtract your estimated insurance payment from $3,579 and a payment of the balance will be collected (minimum $1,000).
                     </p>
                     <p className="text-gray-700 text-[14px] leading-[20px] font-sansation-regular text-gray-600">
                       *Delta Dental and United Concordia can be used, but will pay you directly, making this option unavailable
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Other Payment Links Section */}
           <div className="mb-12">
             <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
               Other Payment Links
             </h2>
             
             <div className="space-y-4">
               {/* Referral Savings */}
               <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                 <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                   <span className="text-[#004B87] text-[18px] font-sansation-bold">Save More By Referring a Friend</span>
                   <span className="text-[#004B87] text-2xl">+</span>
                 </button>
                 <div className="px-6 pb-4">
                   <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                     Refer a new patient for Invisalign and you'll both save $100 on treatment when both of you purchase Invisalign.
                   </p>
                 </div>
               </div>
             </div>
           </div>

           {/* Additional Information */}
           <div className="mb-12 text-center">
             <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular mb-4">
               Learn more about the costs of Invisalign with or without insurance.
             </p>
             <h3 className="text-[#004B87] text-[24px] font-sansation-bold">
               We Do It BETTER, QUICKER & EASIER!
             </h3>
           </div>

           
        </div>
      </section>

      <AwardSection />
      <Footer />
    </div>
  );
}
