import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function WhyCantIDoInvisalignPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            My Dentist Said I Can't Do Invisalign®
          </h1>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Home / Invisalign® / Why Can't I Do Invisalign?
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              With The Help of Dr. Wollock, You CAN Do Invisalign!
            </h2>
            <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
              Invisalign® Can Do Everything Traditional Braces Can Do
            </h3>
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-6">
              If you have been told by a dentist or orthodontist that you are not a great candidate for Invisalign, it may be because you require a more intensive treatment. Some of these cases may include:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-[18px] leading-[26px] font-sansation-regular">
                <li>Overbites</li>
                <li>Underbites</li>
                <li>Crossbite</li>
                <li>Gap Teeth</li>
                <li>Open Bite</li>
              </ul>
            </div>
            
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular">
              Dentists and orthodontists that discourage patients from using Invisalign to treat these issues may have had a lifetime of practice with traditional braces and would prefer to treat patients that way. But the truth is, Invisalign can work with unique situations to achieve every patient's perfect smile, without the hassle of braces.
            </p>
          </div>

          {/* Overbite Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Can I Get Invisalign If I Have an Overbite?
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
                             {/* Left Column - Text Content */}
               <div className="space-y-4">
                 <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                   An overbite is when the upper front teeth overlap with your lower front teeth. Overbites are one of the most common reasons patients undergo treatment for teeth realignment and most people do have some sort of overbite.
                 </p>
                 <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                   If your overbite is too large, a doctor may tell you that you have something called a "deep bite." This can cause your teeth to wear down, which can result in cavities, gum disease, and worn tooth enamel. It also can cause jaw pain. But the good news is, Invisalign can treat overbites and deep bites!
                 </p>
               </div>
              
              {/* Right Column - Before and After Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Image
                    src="/images/kim_before.jpg"
                    alt="Overbite Before Treatment"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-[#004B87] text-[14px] font-sansation-bold">Before</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/kim_after.jpg"
                    alt="Overbite After Treatment"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-[#004B87] text-[14px] font-sansation-bold">After</p>
                </div>
              </div>
            </div>
          </div>

          {/* Underbite Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Can I Get Invisalign if I Have an Underbite?
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Text Content */}
              <div className="space-y-4">
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  An underbite is when you close your mouth and your lower teeth are in front of your upper teeth— the opposite of an overbite. Usually, this means there's a problem with your lower jaw being too far forward.
                </p>
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  Those who have an underbite often suffer from headaches, difficulty of breathing, chewing and speaking properly. It can also cause your teeth to wear down quickly. Invisalign can be used to fix underbites.
                </p>
              </div>
              
              {/* Right Column - Before and After Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Image
                    src="/images/jason-before.jpg"
                    alt="Underbite Before Treatment"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-[#004B87] text-[14px] font-sansation-bold">Before</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/jason-after.jpg"
                    alt="Underbite After Treatment"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-[#004B87] text-[14px] font-sansation-bold">After</p>
                </div>
              </div>
            </div>
          </div>

          {/* Crossbite Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Can I Get Invisalign if I Have a Crossbite?
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Text Content */}
              <div className="space-y-4">
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  A crossbite is when you close your mouth and some of your upper teeth are sitting inside your lower teeth. Normally they should be sitting on the outside.
                </p>
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  Having a crossbite can result in tooth decay and chipping. It can also cause headaches and muscle tension. Lastly, it can make your gums start to recede or make little notches above your gum line. This can lead to painful gum problems, or in severe cases, bone loss. Invisalign can be used to treat crossbites.
                </p>
              </div>
              
              {/* Right Column - Before and After Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Image
                    src="/images/jacqui-before.jpg"
                    alt="Crossbite Before Treatment"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-[#004B87] text-[14px] font-sansation-bold">Before</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/jacqui-after.jpg"
                    alt="Crossbite After Treatment"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-[#004B87] text-[14px] font-sansation-bold">After</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gap Teeth Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Can I Get Invisalign if I Have Gap Teeth?
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Text Content */}
              <div className="space-y-4">
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  Gap teeth can also be referred to as a spacing issue. This is when you have extra space between two or more of your teeth.
                </p>
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  Having gap teeth can create pockets between your teeth where food can get stuck, eventually causing digestive issues. It can also make your gums tender and sore, and in severe cases, it can lead to gum disease. Invisalign can fix gap teeth or any spacing issue.
                </p>
              </div>
              
              {/* Right Column - Before and After Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Image
                    src="/images/kim_before.jpg"
                    alt="Gap Teeth Before Treatment"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-[#004B87] text-[14px] font-sansation-bold">Before</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/kim_after.jpg"
                    alt="Gap Teeth After Treatment"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-[#004B87] text-[14px] font-sansation-bold">After</p>
                </div>
              </div>
            </div>
          </div>

          {/* Open Bite Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
              Can I Get Invisalign if I Have an Open Bite?
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Text Content */}
              <div className="space-y-4">
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  If your upper and lower teeth don't meet when you close your mouth, this is called an open bite.
                </p>
                <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                  People with open bites often experience headaches, jaw pain, and increased teeth sensitivity. It can make it hard to chew or difficult to bite into common foods, like apples. Invisalign aligners can fix an open bite.
                </p>
              </div>
              
              {/* Right Column - Before and After Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Image
                    src="/images/jason-before.jpg"
                    alt="Open Bite Before Treatment"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-[#004B87] text-[14px] font-sansation-bold">Before</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/jason-after.jpg"
                    alt="Open Bite After Treatment"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-[14px] font-sansation-bold">After</p>
                </div>
              </div>
            </div>
          </div>

                     {/* You CAN Get Invisalign Section */}
           <div className="mb-12">
             <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
               You CAN Get Invisalign!
             </h2>
             
             <div className="grid lg:grid-cols-2 gap-8">
               {/* Left Column - Text Content */}
               <div className="space-y-4">
                 <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                   Just because you have a unique smile, doesn't mean you can't get Invisalign. Dr. Wollock has the expertise to train, mentor, and teach other Invisalign® dentists across North America and our office handles more Invisalign cases than 99% of other dental practices across the United States. Dr. Wollock is experienced treating overbites, cross bites, gap teeth, underbites, open bites, and other sensitive cases.
                 </p>
                 <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                   If you have been told you aren't a good candidate for Invisalign, get a second opinion from Dr. Wollock. Traditional braces are a hassle and have a longer average treatment time than Invisalign. Learn more about the difference between these two options.
                 </p>
                 <p className="text-[#004B87] text-[18px] font-sansation-regular">
                   Get started with a free Invisalign consultation & payment options starting at $63/month. We won't stop until you are happy with your results!
                 </p>
               </div>
               
               {/* Right Column - Image */}
               <div className="text-center">
                 <Image
                   src="/images/new-staff-image-2021.jpg"
                   alt="Get Started with Invisalign"
                   width={400}
                   height={300}
                   className="w-full h-64 object-cover rounded-lg shadow-lg"
                 />
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
