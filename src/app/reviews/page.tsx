import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Patient Reviews & Testimonials
          </h1>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Home / Reviews
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-6">
              Don't just take our word for it - hear what our patients have to say about their experience at Dentistry at Suburban Square. 
              We're proud of our reputation for excellence and the trust our community places in us.
            </p>
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular">
              Our patients consistently rate us among the top dental practices in the Main Line area.
            </p>
          </div>

          {/* Review Platforms Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8 text-center">
              Our Review Ratings
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Google Reviews */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#029fde] text-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/images/google.png"
                    alt="Google Reviews"
                    width={40}
                    height={40}
                    className="mr-3"
                  />
                  <div className="text-left">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">4.9/5 Rating</p>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Hundreds of 5-star reviews on Google</p>
                <button className="mt-4 bg-[#029fde] text-white px-6 py-2 rounded-lg font-sansation-bold hover:bg-[#0278b3] transition-colors">
                  Read Google Reviews
                </button>
              </div>

              {/* Yelp Reviews */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#004B87] text-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/images/yelp.png"
                    alt="Yelp Reviews"
                    width={40}
                    height={40}
                    className="mr-3"
                  />
                  <div className="text-left">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">4.8/5 Rating</p>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Excellent patient satisfaction on Yelp</p>
                <button className="mt-4 bg-[#004B87] text-white px-6 py-2 rounded-lg font-sansation-bold hover:bg-[#003366] transition-colors">
                  Read Yelp Reviews
                </button>
              </div>

              {/* Facebook Reviews */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#029fde] text-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/images/facebook.png"
                    alt="Facebook Reviews"
                    width={40}
                    height={40}
                    className="mr-3"
                  />
                  <div className="text-left">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">4.9/5 Rating</p>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Highly recommended by Facebook community</p>
                <button className="mt-4 bg-[#029fde] text-white px-6 py-2 rounded-lg font-sansation-bold hover:bg-[#0278b3] transition-colors">
                  Read Facebook Reviews
                </button>
              </div>
            </div>
          </div>

          {/* Featured Testimonials Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8 text-center">
              Featured Patient Testimonials
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#029fde]">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/kim.jpg"
                    alt="Kim - Patient"
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-[#004B87] text-[20px] font-sansation-bold">Kim</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular italic">
                  "It's definitely a process that I would recommend to anyone else who is looking to do some enhancement to their smile. Dr. Wollock and the entire team made the experience comfortable and professional."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#004B87]">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/jason.jpg"
                    alt="Jason - Patient"
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-[#004B87] text-[20px] font-sansation-bold">Jason</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular italic">
                  "My teeth are amazing. The Invisalign treatment exceeded my expectations. Dr. Wollock's expertise and the caring staff made the entire process smooth and successful."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#029fde]">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/jacqui.jpg"
                    alt="Jacqui - Patient"
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-[#004B87] text-[20px] font-sansation-bold">Jacqui</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular italic">
                  "My teeth look beautiful! The transformation is incredible. I'm so grateful for Dr. Wollock's skill and the amazing results I achieved with Invisalign."
                </p>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#004B87]">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/jim.jpg"
                    alt="Jim - Patient"
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-[#004B87] text-[20px] font-sansation-bold">Jim</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-[16px] leading-[24px] font-sansation-regular italic">
                  "When I first got the retainers in I thought I was going to feel a bunch of plastic in my mouth, but actually from day 1 it really wasn't that bad. The results speak for themselves."
                </p>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-8 text-center">
              Awards & Recognition
            </h2>
            
            <div className="text-center">
              <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular mb-6 max-w-3xl mx-auto">
                Our patients consistently rate us among the top dental practices in the Main Line area. 
                We're proud of our reputation for excellence and the trust our community places in us.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="text-center">
                  <Image
                    src="/images/best-of-mainline-2022-226x208.jpg"
                    alt="Best of Main Line 2022"
                    width={100}
                    height={100}
                    className="mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm text-gray-600">Best of Main Line 2022</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/2014_sl_cosmetic_dentists_emblem.jpg"
                    alt="Best Cosmetic Dentists 2014"
                    width={100}
                    height={100}
                    className="mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm text-gray-600">Best Cosmetic Dentists 2014</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/2010.jpg"
                    alt="Main Line Today Best 2010"
                    width={100}
                    height={100}
                    className="mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm text-gray-600">Main Line Today Best 2010</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-[#029fde] p-8 rounded-lg text-white">
            <h3 className="text-white text-[28px] font-sansation-bold mb-4">
              Join Our Satisfied Patients
            </h3>
            <p className="text-white text-[18px] leading-[26px] font-sansation-regular mb-6">
              Experience the same level of care and expertise that has earned us thousands of 5-star reviews.
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
