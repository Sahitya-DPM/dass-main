import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function InvisalignPhotosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Invisalign® Before and After Photos
          </h1>
          
          <p className="text-white text-[20px] font-sansation-regular mb-6 max-w-4xl mx-auto">
            See the amazing transformations our patients have achieved with Invisalign® treatment
          </p>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Real results from real patients at Dentistry at Suburban Square
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
                        <p className="text-[14px] font-sansation-bold mt-2">After</p>
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
                    <h3 className="text-[#004B87] text-[28px] lg:text-[32px] font-sansation-bold mb-4">
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
