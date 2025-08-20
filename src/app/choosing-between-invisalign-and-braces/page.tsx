import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function InvisalignVsBracesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Smile Direct Club Vs Your Local Dentist for Invisalign®
          </h1>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Home / What's New? / Smile Direct Club Vs Your Local Dentist for Invisalign®
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Read the Reviews First Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Read the Reviews First
            </h2>
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-6">
              While a large company like Smile Direct Club can often provide many positive testimonials, they have the control to moderate the reviews they share with you. It's often more telling to view an unmoderated reviews page, like the Better Business Bureau, where anyone can write about their experience. For comparison, be sure to check out our Yelp testimonials.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mb-2">
                <strong>Dr. Mike:</strong> You had a different experience than most, because you came from doing something else. Can you tell us about that?
              </p>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mb-2">
                <strong>Jacqui:</strong> Smile Direct, and it was a disaster.
              </p>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mb-2">
                <strong>Dr. Mike:</strong> Sorry. What was the difference for you?
              </p>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                <strong>Jacqui:</strong> You guys knew what you were doing, between the buttons, the shaving of my teeth, and you guys were responsive and you take care of it, so I never had any issues with any of that, whereas I did all the time with Smile Direct, and my teeth never came out.
              </p>
            </div>
          </div>

          {/* Pros to Using Smile Direct Club */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Pros to Using Smile Direct Club
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                  Save Money:
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  Smile Direct Club is an inexpensive way to align your bite at home. The advertised cost for treatment with Smile Direct is $1895 for a one-time payment, or $2290 if you break your fee into monthly $85 payments. (Dentistry at Suburban Square's monthly payments are $77 per month and you have direct care from Dr. Wollock.) After your treatment ends, you need to pay $99 for a retainer. Sometimes paying just a little more is worth having a doctor make it right.
                </p>
              </div>

              <div>
                <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                  Save Time:
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  The program offers the benefit of allowing patients to treat themselves at home. You can get a scan of your smile at a local branch, or you can order an at-home impressions kit from Smile Direct Club. Dr. Wollock can significantly minimize the number of visits for Invisalign.
                </p>
              </div>

              <div>
                <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                  Easy to Get Started:
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  An orthodontist uses the scans of your smile to evaluate a treatment plan from a remote location. Without you ever meeting with your orthodontist, your aligners arrive in the mail.
                </p>
              </div>
            </div>
          </div>

          {/* Cons to Using Smile Direct Club */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Cons to Using Smile Direct Club
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                  High Failure Rate:
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  Even though the procedure is cheaper than visiting a dentist's office, there is a high failure rate that will cost you more.
                </p>
              </div>

              <div>
                <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                  One-Size-Fits-All Treatment:
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  You may not be a good candidate for Smile Direct, or you may require costly additional treatment. If you see a qualified Invisalign dentist, they will tell you what is best for you, and your options so you don't waste time and money.
                </p>
              </div>

              <div>
                <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                  Poor Customer Service:
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  Many Smile Direct customers report poor customer service. Phone calls are met with an automatic recording where callers must jump through hoops to finally speak to the right person. Dr. Wollock and his team are always there for you.
                </p>
              </div>

              <div>
                <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                  No Buttons:
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  Smile Direct will not utilize buttons, an important part of the Invisalign process that make it so much more reliable. Buttons are small, temporary attachments that adhere to your teeth and hold the aligners in place.
                </p>
              </div>

              <div>
                <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-3">
                  Paying for Multiple Impressions:
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  Even professional dentists don't always get impressions perfectly on the first try, so it makes sense that many Smile Direct customers report that their impressions are rejected the first time. If your first impressions don't turn out, you will be charged 50% of the original cost for a new testing kit. Dr Wollock does not use impressions. He uses a quick and easy scan that is more accurate and avoids gagging.
                </p>
              </div>
            </div>
          </div>

          {/* Monthly Pricing Comparison */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Monthly Pricing for Invisalign Versus Smile Direct Club
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-[#004B87] text-white">
                    <th className="border border-gray-300 p-4 text-left">Dentistry at Suburban Square</th>
                    <th className="border border-gray-300 p-4 text-left">Smile Direct</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4">Deposit</td>
                    <td className="border border-gray-300 p-4">$250</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4">Monthly Payments Start At</td>
                    <td className="border border-gray-300 p-4">$62.07</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4">Retainer</td>
                    <td className="border border-gray-300 p-4">Included</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mt-4">
              <a href="#" className="text-[#029fde] hover:underline">Learn more about our payment options.</a>
            </p>
          </div>

          {/* Other Downfalls Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Other Downfalls of Using Smile Direct Club
            </h2>
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-6">
              The Better Business Bureau reports more than 2,000 complaints nationwide involving Smile Direct Club. Most of the complaints involve customer service issues — such as broken aligners, delivery issues and payment problems — but dozens describe concerns about treatment results: complaints like broken teeth and nerve damage.
            </p>
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-6">
              It's important for teeth straightening patients to see a professional in person to ensure their treatment is safe and effective.
            </p>
          </div>

          {/* Smile Regret Club Special */}
          <div className="bg-[#029fde] p-8 rounded-lg text-white mb-12">
            <h2 className="text-white text-[32px] font-sansation-bold mb-6 text-center">
              The Smile Regret Club Special
            </h2>
            <p className="text-white text-[18px] leading-[26px] font-sansation-regular mb-6 text-center">
              Companies like Smile Direct and Candid Co. have significant failure rates and leave many of their customers unsatisfied with their results. If you have previously tried one of these services and are interested in Invisalign, you can save even more on our already great deal.
            </p>
            <div className="text-center">
              <p className="text-white text-[24px] font-sansation-bold mb-2">
                Get an Additional $100 Off Your Invisalign® Treatment Cost!
              </p>
              <p className="text-white text-[20px] font-sansation-bold mb-4">
                Final Invisalign® Cost: $3179*
              </p>
              <p className="text-white text-[14px] font-sansation-regular mb-4">
                *With proof of prior purchase within one year. Available for a limited time.
              </p>
              <p className="text-white text-[14px] font-sansation-regular">
                *This option includes the $600 Invisalign New Patient Coupon. Good for two weeks from your Invisalign consult. Cannot be combined with any other discount or coupon.
              </p>
            </div>
          </div>

          {/* Benefits to Working with Dr. Wollock */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Benefits to Working with Dr. Wollock
            </h2>
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-6">
              Working with a professional dentist gives you the benefit of professional guidance during your treatment. If something isn't working, Dr. Wollock will be able to adjust your treatment.
            </p>
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-6">
              While Smile Direct Club users do have some support from the company, there is no replacement for seeing a doctor in a face-to-face office setting. Dentists undergo years of schooling that give them unique insight into correcting bites.
            </p>
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-6">
              Dr. Wollock is 1 of 25 Elite 1% Invisalign dentists in the country. Other dentists in North America seek out Dr. Wollock, who uses his experience and expertise to mentor his peers.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-[#004B87] text-[18px] font-sansation-regular mb-4">
              <strong>If you are interested in Invisalign, <a href="#" className="text-[#029fde] hover:underline">Learn more about Dentistry at Suburban Square's Invisalign deal.</a></strong>
            </p>
          </div>
        </div>
      </section>

      <AwardSection />
      <Footer />
    </div>
  );
}
