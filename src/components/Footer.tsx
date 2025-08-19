'use client';

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Section */}
             <div className="bg-[#004B87] text-white py-8 md:py-12">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Three Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                                             {/* Left Column - Dentist Info */}
                <div className="space-y-2">
                  <div>
                    <p className="font-sansation-regular text-[18px] mb-1">
                      Michael I. Wollock, DMD
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="font-sansation-regular text-[18px]">
                      32 Parking Plaza, Suite 604<br />
                      Ardmore, PA 19003
                    </p>
                    <p className="font-sansation-regular text-[18px]">
                      Located in The Times Building in<br />
                      Suburban Square.
                    </p>
                    <p className="font-sansation-regular text-[18px]">
                      (610) 649-0313
                    </p>
                  </div>
                </div>

              {/* Center Column - Quote & Social Media */}
              <div className="space-y-6 text-center md:text-left">
                                                 <blockquote className="italic font-sansation-regular text-[33px] leading-[40px] text-[#87CEEB] text-center">
                  &ldquo;Doing what we<br />
                  LOVE in the service of<br />
                  people who LOVE<br />
                  what we do.&rdquo;
                </blockquote>
                
                                                   {/* Social Media Icons */}
                  <div className="flex justify-center space-x-4">
                    {/* Facebook */}
                    <a 
                      href="#" 
                      className="w-6 h-6 flex items-center justify-center border border-[#029fde] rounded-full transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <svg className="w-6 h-6" fill="#029fde" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    
                    {/* YouTube */}
                    <a 
                      href="#" 
                      className="w-6 h-6 flex items-center justify-center border border-[#029fde] rounded-full transition-all duration-300"
                      aria-label="YouTube"
                    >
                      <svg className="w-6 h-6" fill="#029fde" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    
                    {/* Instagram */}
                    <a 
                      href="#" 
                      className="w-6 h-6 flex items-center justify-center border border-[#029fde] rounded-full transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <svg className="w-6 h-6" fill="#029fde" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                      </svg>
                    </a>
                  </div>
              </div>

                                             {/* Right Column - Business Hours */}
                <div className="space-y-2">
                  <div className="space-y-1 font-sansation-regular text-[18px] text-right">
                    <div>
                      <span>Mon:7:00 AM - 5:00 PM</span>
                    </div>
                    <div>
                      <span>Tue:9:00 AM - 8:00 PM</span>
                    </div>
                    <div>
                      <span>Wed:8:00 AM - 5:00 PM</span>
                    </div>
                    <div>
                      <span>Thu:9:00 AM - 8:00 PM</span>
                    </div>
                    <div>
                      <span>Fri:7:00 AM - 3:00 PM</span>
                    </div>
                    <div>
                      <span>Sat:Hours by Appointment</span>
                    </div>
                    <div>
                      <span>Sun:Closed</span>
                    </div>
                  </div>
                  
                  <p className="text-white font-sansation-regular text-[18px] text-right">
                    *Hours are subject to change
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>

             {/* Gold Gradient Strip */}
                                                               <div className="bg-gradient-to-r from-[#B89B5B] via-[#D4C08C] to-[#FDF8E3] py-4">
         <div className="w-full px-4 md:px-6 lg:px-8">
           <div className="max-w-6xl mx-auto">
             <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-center">
               {/* Copyright and Navigation Links */}
               <p className="text-[#004B87] font-sansation-regular text-sm">
                 ©2025 Dentistry at Suburban Square | Privacy Policy | Terms and Conditions | Directions
               </p>
             </div>
           </div>
         </div>
       </div>
    </footer>
  );
}
