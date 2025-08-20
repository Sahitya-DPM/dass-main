'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function HowMuchDoesInvisalignCostPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            How Much Does Invisalign® Cost?
          </h1>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Home / Invisalign® / Cost of Invisalign®
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-6">
              Understanding the cost of Invisalign® treatment is an important part of your decision-making process. While the investment may seem significant, it's important to consider the long-term value and the various payment options available.
            </p>
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular">
              At Dentistry at Suburban Square, we believe that everyone deserves access to a beautiful smile, which is why we offer competitive pricing and flexible payment plans.
            </p>
          </div>

          {/* Our Pricing Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8 text-center">
              Our Competitive Invisalign® Pricing
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Full Invisalign */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#029fde] text-center">
                <h3 className="text-[#004B87] text-[28px] font-sansation-bold mb-4">
                  Full Invisalign® Treatment
                </h3>
                <div className="text-[#029fde] text-[48px] font-sansation-bold mb-2">
                  $3,279
                </div>
                <p className="text-gray-600 text-[16px] font-sansation-regular mb-4">
                  All-inclusive price
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="text-gray-700 text-[16px] font-sansation-regular">• Initial consultation</li>
                  <li className="text-gray-700 text-[16px] font-sansation-regular">• 3D scanning and X-rays</li>
                  <li className="text-gray-700 text-[16px] font-sansation-regular">• Custom treatment plan</li>
                  <li className="text-gray-700 text-[16px] font-sansation-regular">• All aligner trays</li>
                  <li className="text-gray-700 text-[16px] font-sansation-regular">• Regular check-ups</li>
                  <li className="text-gray-700 text-[16px] font-sansation-regular">• Treatment adjustments</li>
                  <li className="text-gray-700 text-[16px] font-sansation-regular">• Retainers included</li>
                </ul>
              </div>

              {/* Invisalign Express */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#004B87] text-center">
                <h3 className="text-[#004B87] text-[28px] font-sansation-bold mb-4">
                  Invisalign® Express
                </h3>
                <div className="text-[#004B87] text-[48px] font-sansation-bold mb-2">
                  $2,399
                </div>
                <p className="text-gray-600 text-[16px] font-sansation-regular mb-4">
                  For minor cases (5-10 aligners)
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="text-gray-700 text-[16px] font-sansation-regular">• Quick treatment (3-6 months)</li>
                  <li className="text-gray-700 text-[16px] font-sansation-regular">• Ideal for minor crowding</li>
                  <li className="text-gray-700 text-[16px] font-sansation-regular">• Same quality care</li>
                  <li className="text-gray-700 text-[16px] font-sansation-regular">• Professional supervision</li>
                  <li className="text-gray-700 text-[16px] font-sansation-regular">• Retainers included</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mb-12 text-center">
            <Image
              src="/images/Fotolia4.jpg"
              alt="Invisalign Cost and Treatment"
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Payment Options Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8 text-center">
              Flexible Payment Options
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#029fde] text-center">
                <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                  Pay in Full
                </h3>
                <p className="text-[#029fde] text-[32px] font-sansation-bold mb-2">
                  $3,279
                </p>
                <p className="text-gray-600 text-[14px] font-sansation-regular">
                  Save with upfront payment
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#004B87] text-center">
                <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                  Payment Plan
                </h3>
                <p className="text-[#004B87] text-[32px] font-sansation-bold mb-2">
                  $89/month
                </p>
                <p className="text-gray-600 text-[14px] font-sansation-regular">
                  $250 down payment
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#029fde] text-center">
                <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                  Insurance
                </h3>
                <p className="text-[#029fde] text-[32px] font-sansation-bold mb-2">
                  Varies
                </p>
                <p className="text-gray-600 text-[14px] font-sansation-regular">
                  Check your coverage
                </p>
              </div>
            </div>
          </div>

          {/* Cost Comparison Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8 text-center">
              How Our Prices Compare
            </h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">Other Providers</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700 text-[16px] font-sansation-regular">• Traditional orthodontists: $5,500 - $7,500</li>
                    <li className="text-gray-700 text-[16px] font-sansation-regular">• At-home companies: $1,900 - $2,400</li>
                    <li className="text-gray-700 text-[16px] font-sansation-regular">• Hidden fees and additional costs</li>
                    <li className="text-gray-700 text-[16px] font-sansation-regular">• Limited supervision and support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">Dentistry at Suburban Square</h3>
                  <ul className="space-y-2">
                    <li className="text-[#029fde] text-[16px] font-sansation-bold">• Full treatment: $3,279</li>
                    <li className="text-[#029fde] text-[16px] font-sansation-bold">• Express treatment: $2,399</li>
                    <li className="text-gray-700 text-[16px] font-sansation-regular">• No hidden fees</li>
                    <li className="text-gray-700 text-[16px] font-sansation-regular">• Professional supervision throughout</li>
                    <li className="text-gray-700 text-[16px] font-sansation-regular">• All-inclusive pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              What's Included in Your Investment
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#029fde]">
                  <h4 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">Initial Consultation</h4>
                  <p className="text-gray-700 text-[14px] font-sansation-regular">
                    Comprehensive evaluation, 3D scanning, X-rays, and treatment planning
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#004B87]">
                  <h4 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">Custom Treatment Plan</h4>
                  <p className="text-gray-700 text-[14px] font-sansation-regular">
                    Personalized aligner sequence designed specifically for your smile
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#029fde]">
                  <h4 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">All Aligner Trays</h4>
                  <p className="text-gray-700 text-[14px] font-sansation-regular">
                    Complete set of aligners needed for your entire treatment
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#004B87]">
                  <h4 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">Regular Check-ups</h4>
                  <p className="text-gray-700 text-[14px] font-sansation-regular">
                    Ongoing monitoring and adjustments throughout your treatment
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#029fde]">
                  <h4 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">Treatment Adjustments</h4>
                  <p className="text-gray-700 text-[14px] font-sansation-regular">
                    Modifications to your treatment plan as needed for optimal results
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#004B87]">
                  <h4 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">Retainers</h4>
                  <p className="text-gray-700 text-[14px] font-sansation-regular">
                    Custom retainers to maintain your beautiful new smile
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance and Financing Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Insurance and Financing
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#029fde]">
                <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                  Dental Insurance
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mb-4">
                  Many dental insurance plans cover Invisalign treatment under orthodontic benefits. We'll help you verify your coverage and submit claims.
                </p>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  Typical coverage ranges from $1,000 to $3,000, which can significantly reduce your out-of-pocket costs.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#004B87]">
                <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                  Flexible Payment Plans
                </h3>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mb-4">
                  We offer convenient payment plans starting at just $89 per month with a $250 down payment. No credit check required.
                </p>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                  Our payment plans make Invisalign treatment accessible to patients on any budget.
                </p>
              </div>
            </div>
          </div>

          {/* Value Proposition Section */}
          <div className="mb-12 bg-[#029fde] p-8 rounded-lg text-white">
            <h2 className="text-white text-[32px] font-sansation-bold mb-6 text-center">
              Why Invisalign® is Worth the Investment
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-white text-[20px] font-sansation-bold mb-3">Confidence</h3>
                <p className="text-white text-[16px] font-sansation-regular">
                  A beautiful smile boosts self-esteem and confidence in all aspects of life
                </p>
              </div>
              <div>
                <h3 className="text-white text-[20px] font-sansation-bold mb-3">Health Benefits</h3>
                <p className="text-white text-[16px] font-sansation-regular">
                  Properly aligned teeth improve oral health and make cleaning easier
                </p>
              </div>
              <div>
                <h3 className="text-white text-[20px] font-sansation-bold mb-3">Long-term Value</h3>
                <p className="text-white text-[16px] font-sansation-regular">
                  Investment in your smile pays dividends for years to come
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-[#004B87] text-[28px] font-sansation-bold mb-4">
              Ready to Invest in Your Smile?
            </h3>
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-6">
              Schedule a consultation to learn more about our competitive pricing and flexible payment options.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-[#029fde] text-white px-8 py-3 rounded-lg font-sansation-bold hover:bg-[#0278b3] transition-colors text-[18px]">
                Schedule Consultation
              </button>
              <button className="bg-[#004B87] text-white px-8 py-3 rounded-lg font-sansation-bold hover:bg-[#003366] transition-colors text-[18px]">
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
