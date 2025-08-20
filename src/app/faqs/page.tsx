import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            FAQs
          </h1>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Home / FAQs
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* FAQ Items */}
          <div className="space-y-8">
            {/* FAQ 1 - Am I a good candidate for Invisalign®? */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#029fde]">
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                Am I a good candidate for Invisalign®?
              </h3>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                With Dr Wollock's years of expert experience and training, Invisalign can work for almost ALL. Call or schedule online for a FREE consultation to determine how well Invisalign can work for you.
              </p>
            </div>

            {/* FAQ 2 - Does dental insurance cover Invisalign? */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#004B87]">
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                Does dental insurance cover Invisalign?
              </h3>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mb-4">
                Many dental insurance plans will cover the cost of Invisalign® treatment under the orthodontic maximum portion of the policy. There can be limitations and exclusions, for example, age limitations & waiting periods. We will confirm your orthodontic coverage and submit to your insurance policy upon you wearing your first Invisalign tray & the reimbursement will come directly to you. We are experts at getting the maximum value back for you from your dental insurance.
              </p>
              <p className="text-[#029fde] text-[16px] font-sansation-regular">
                Learn more about Invisalign payment options.
              </p>
            </div>

            {/* FAQ 3 - How long does it take to get Invisalign? */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#029fde]">
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                How long does it take to get Invisalign?
              </h3>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mb-4">
                The length of treatment depends on the severity of your case. However, the average case takes about 11-12 months. But, with the techniques Dr. Wollock uses to make Invisalign work better it also makes that same 11-month average case go quicker, usually taking just 1/2 as long (down to only 6 months). Here's a look at the process:
              </p>
              
              <div className="space-y-4 ml-6">
                <div>
                  <h4 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">Consultation</h4>
                  <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                    Dr. Michael I. Wollock will meet with you and review how Invisalign can solve your concerns. If you choose to proceed, we can start right away with a scan, saving you a visit.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">Scanning</h4>
                  <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                    Instead of nasty impressions that make people gag, we will scan your mouth. This is easier for you and more accurate. We will also take x-rays and photos. All of this comes at no extra charge.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">Three Weeks Later</h4>
                  <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                    You will meet with Dr. Wollock again to see a computerized animation of your projected Invisalign treatment. At this stage, you'll learn how many Invisalign trays you will need, which will also tell you how long your treatment will be.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">Ongoing Care</h4>
                  <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                    Once you approve the computer animation, your trays will be ready in three weeks. From that point on, you will wear your trays 24 out of 24 hours a day. Yes, all day; eating, sleeping, day, night, all the time except to clean. Please note that if you do not wear them this often, your Invisalign treatment will be far less effective. Simply put, the more you wear it, the better it will work. Throughout your treatment, you will meet with Dr. Wollock when necessary to guide you to success. For your convenience this can be a minimal number of visits. However, you are always welcome to see us more if you desire.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[#004B87] text-[18px] font-sansation-bold mb-2">After the Trays</h4>
                  <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                    At the end of your treatment, when you and Dr. Wollock are happy, you will be provided with a FREE set of upper and lower retainers. You will wear the retainers in the beginning for 22 out of 24 hours a day, for 3 months until your teeth's position firms up. Then you will wear the retainers every night for as long as you want your teeth to remain straight. And you will replace retainers a minimum of every two years to prevent them from stretching and your teeth shifting. Retainers will also help prevent damage from grinding and/or clenching, which most adults do yet most are unaware. In addition, they make great whitening trays.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 - How does Invisalign work? */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#004B87]">
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                How does Invisalign work?
              </h3>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                Invisalign® takes a modern approach to straightening teeth, using a custom-made series of aligners created for you and only you. These aligner trays are made of smooth, comfortable, clear, and virtually invisible plastic that you wear over your teeth. Wearing the aligners will gradually shift your teeth into place. You will start a new set of aligners on a regular customized schedule to best fit your needs, until your treatment is completed.
              </p>
            </div>

            {/* FAQ 5 - Does Invisalign actually work? */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#029fde]">
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                Does Invisalign actually work?
              </h3>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                Invisalign works comparable to braces to straighten teeth and fix dental problems including bite issues, gapped teeth, and crowding. Just take a look at some of our before & after photos to see just how effective Invisalign is in producing beautiful smiles.
              </p>
            </div>

            {/* FAQ 6 - How much does Invisalign cost? */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#004B87]">
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                How much does Invisalign cost?
              </h3>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mb-4">
                We offer the best Invisalign® deal. An all-inclusive Invisalign® deal for $3,279 or as low as $89 per paycheck. Free Invisalign® consultations, no hidden fees, & no cutting corners! As low as $89 per paycheck with $250 down (no credit check required) or the lowest cost of $3,279 due at start of treatment. These deals are for new patients only.
              </p>
              <p className="text-[#029fde] text-[16px] font-sansation-regular">
                Learn more about the costs of Invisalign with and without insurance.
              </p>
            </div>

            {/* FAQ 7 - What restrictions will I have with Invisalign? */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#029fde]">
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                What restrictions will I have with Invisalign?
              </h3>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                Unlike braces, your Invisalign aligners can be removed. This helps facilitate cleaning, which leads to better health. However, if you don't wear them, they won't work. If you don't wear them enough, they won't work well. We find that most patients can eat any diet they choose during treatment. It takes about a week to get used to this. However, we do recommend you stay away from curry, turmeric, and yellow mustard since they irreversibly stain the trays. If you must enjoy foods that cause this stain, we recommend you do so on the last day of that tray. This means you don't need to restrict your diet habits, just as long as you wear your trays for 24 hours a day.
              </p>
            </div>

            {/* FAQ 8 - Can I drink alcohol with Invisalign? */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#004B87]">
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                Can I drink alcohol with Invisalign?
              </h3>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                Yes, it is safe to drink alcohol. It's important to clean your teeth & aligners if you have been drinking any sugary beverages (with or without alcohol).
              </p>
            </div>

            {/* FAQ 9 - Can I get Invisalign if I have an underbite? */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#029fde]">
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                Can I get Invisalign if I have an underbite?
              </h3>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                Yes. Invisalign is also designed to correct an underbite. An underbite is when you close your mouth and your lower teeth are in front of your upper teeth - the opposite of an overbite. Usually, this means there's a problem with your lower jaw being too far forward.
              </p>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mt-4">
                Those who have an underbite often suffer from headaches, difficulty of breathing, chewing and speaking properly. It can also cause your teeth to wear down quickly. Invisalign can fix some underbites, but severe underbites might require surgery alongside the Invisalign treatment.
              </p>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mt-4">
                Each patient is different so it's important to have an Invisalign consultation to determine if you have any underlying issues that are causing an underbite.
              </p>
            </div>

            {/* FAQ 10 - Can I get Invisalign if I have an overbite? */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#004B87]">
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                Can I get Invisalign if I have an overbite?
              </h3>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                Yes. Invisalign is also designed to correct an overbite. An overbite is when the upper front teeth overlap with your lower front teeth. Overbites are one of the most common reasons patients undergo treatment for teeth realignment and most people do have some sort of overbite!
              </p>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mt-4">
                If your overbite is too large, a doctor may tell you that you have something called a deep bite. This can cause your teeth to wear down which can result in cavities, gum disease, and worn tooth enamel. It also can cause jaw pain, including TMJ. But the good news is that Invisalign can treat overbites and deep bites!
              </p>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular mt-4">
                An experienced professional like Dr. Wollock can help to treat an overbite with Invisalign, leaving you with a beautiful smile!
              </p>
            </div>

            {/* FAQ 11 - What is the best alternative to braces? */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#029fde]">
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                What is the best alternative to braces?
              </h3>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                Invisalign is a clear, and virtually invisible, alternative to metal braces. Invisalign straightens teeth just like braces, but Invisalign aligners come with less restrictions than braces. Invisalign allows you to eat whatever foods you enjoy and brush and floss normally. Most importantly, why wear a mouth full of metal when you can do the same things (in the right hands) for less money while in clear esthetic trays?
              </p>
            </div>

            {/* FAQ 12 - Is Invisalign better than braces? */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#004B87]">
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                Is Invisalign better than braces?
              </h3>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                Both braces and Invisalign help to straighten your teeth, and in many cases, the better choice depends on your specific situation. Many people prefer Invisalign because there are less restrictions in terms of eating, they are less visible, and they may be more comfortable. However, braces are often better for children because they require less responsibility in terms of upkeep since there is an option to remove them for cleaning.
              </p>
            </div>

            {/* FAQ 13 - How do I clean my aligners? */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#029fde]">
              <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                How do I clean my aligners?
              </h3>
              <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular">
                Your aligners can be cleaned by brushing them with toothpaste carefully and rinsing them in lukewarm water.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AwardSection />
      <Footer />
    </div>
  );
}
