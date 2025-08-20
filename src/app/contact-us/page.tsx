import Image from 'next/image';
import Header from '@/components/Header';
import AwardSection from '@/components/AwardSection';
import Footer from '@/components/Footer';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Banner Section */}
      <section className="w-full bg-[#004B87] pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-[46px] leading-[58px] font-sansation-bold mb-8">
            Contact Us
          </h1>
          
          <div className="text-white text-[18px] font-sansation-regular mb-4">
            Home / Contact Us
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 text-[18px] leading-[22px] font-sansation-regular mb-4">
              Get in Touch with Our Team
            </p>
            <p className="text-gray-700 text-[18px] leading-[26px] font-sansation-regular">
              We're here to help you achieve the smile of your dreams. Contact us today to schedule your consultation or ask any questions about our Invisalign treatment options.
            </p>
          </div>

          {/* Contact Information & Form Section */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Contact Information */}
              <div className="space-y-4">
                <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-2">
                      Phone:
                    </h3>
                    <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                      The best way to reach us during regular business hours is by phone.
                    </p>
                    <div className="bg-[#004B87] p-6 rounded-lg text-white text-center mt-4">
                      <p className="text-white text-[24px] font-sansation-bold">
                        (610) 649-0313
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-2">
                      Address:
                    </h3>
                    <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                      Dentistry at Suburban Square<br />
                      Suburban Square Shopping Center<br />
                      Ardmore, PA 19003
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#004B87] text-[20px] font-sansation-bold mb-2">
                      Business Hours:
                    </h3>
                    <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: By Appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="space-y-4">
                <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6">
                  Send Us a Message
                </h2>
                
                <div className="space-y-4">
                  <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                    Use the contact form below to drop us a line if you can't talk on the phone right now. Any scheduling changes or cancellations must be called into the office during business hours.
                  </p>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-[#004B87] text-[16px] font-sansation-bold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-[#004B87] text-[16px] font-sansation-bold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-[#004B87] text-[16px] font-sansation-bold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-[#004B87] text-[16px] font-sansation-bold mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="invisalign-consultation">Invisalign Consultation</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="appointment-booking">Appointment Booking</option>
                        <option value="payment-questions">Payment Questions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-[#004B87] text-[16px] font-sansation-bold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-[#004B87] text-white py-3 px-6 rounded-lg font-sansation-bold text-[18px] hover:bg-[#003366] transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Office Image Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6 text-center">
              Our Dental Office
            </h2>
            
            <div className="text-center">
              <Image
                src="/images/new-staff-image-2021.jpg"
                alt="Dental Office"
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

          {/* Getting to Our Office Section */}
          <div className="mb-12">
            <h2 className="text-[#004B87] text-[32px] font-sansation-bold mb-6 text-center">
              Getting to Our Office
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* By Car */}
                <div className="text-center">
                  <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                    By Car:
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                    Our office is a 20 minute drive from 30th Street Station via I-76 West. There's a few free parking options in the area, including the lot that is accessible from Saint James Pl., between E. Montgomery Ave. and Coulter Ave.
                  </p>
                  <button className="mt-4 bg-[#004B87] text-white py-2 px-4 rounded-lg font-sansation-bold hover:bg-[#003366] transition-colors duration-300">
                    Get Directions
                  </button>
                </div>
                
                {/* By Public Transportation */}
                <div className="text-center">
                  <h3 className="text-[#004B87] text-[24px] font-sansation-bold mb-4">
                    By Public Transportation:
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-[22px] font-sansation-regular">
                    Take the Paoli/Thorndale line from the city to Ardmore. The train station is a 16 minute ride from 30th Street, and our office is less than a 5 minute walk from the train station.
                  </p>
                  <button className="mt-4 bg-[#004B87] text-white py-2 px-4 rounded-lg font-sansation-bold hover:bg-[#003366] transition-colors duration-300">
                    Check SEPTA Schedule
                  </button>
                </div>
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
