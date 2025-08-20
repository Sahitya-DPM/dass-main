'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = isScrolled ? 120 : 160; // Adjust based on header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    {
      name: 'Home',
      hasDropdown: true,
      action: () => window.location.href = '/',
      submenu: [
        { name: 'Best Invisalign Deals', action: () => scrollToSection('invisalign-section') },
        { name: 'See the Results', action: () => scrollToSection('see-results-section') },
        { name: 'Ask the Expert', action: () => scrollToSection('ask-expert-section') },
        { name: 'Payment Plan Options', action: () => window.location.href = '/how-much-does-invisalign-cost' }
      ]
    },
    {
      name: 'Dentistry',
      hasDropdown: true,
      action: () => window.location.href = '/dentistry-services',
      submenu: [
                 { name: 'Teeth Cleanings', action: () => window.location.href = '/dentistry-services/teeth-cleanings' },
                 { name: 'Fillings & Crowns', action: () => window.location.href = '/dentistry-services/fillings-and-crowns' },
                 { name: 'Cosmetic Dentistry', action: () => window.location.href = '/dentistry-services/cosmetic-dentistry' },
         { name: 'Laser Gingivectomy', action: () => window.location.href = '/dentistry-services/laser-gingivectomy' },
        { name: 'Other Procedures', action: () => window.location.href = '/dentistry-services/implants-root-canals-bridges' }
      ]
    },
    { 
      name: 'Invisalign®', 
      hasDropdown: true,
      action: () => window.location.href = '/best-invisalign-deal',
      submenu: [
        { name: 'The Invisalign® Experience', action: () => window.location.href = '/best-invisalign-deal' },
        { name: 'Before and After Photos', action: () => window.location.href = '/invisalign-photos' },
        { name: 'Testimonials', action: () => window.location.href = '/best-invisalign-deal' },
        { name: 'Selfie Gallery', action: () => window.location.href = '/selfie-gallery' },
        { name: 'Review Websites', action: () => window.location.href = '/best-invisalign-deal' },
        { name: 'FAQs', action: () => window.location.href = '/faqs' },
        { name: 'Invisalign® Comparisons', action: () => window.location.href = '/best-invisalign-deal' },
        { name: 'Invisalign® vs Braces', action: () => window.location.href = '/choosing-between-invisalign-and-braces' },
        { name: 'Invisalign® vs Smile Direct Club', action: () => window.location.href = '/smile-direct-club-vs-your-local-dentist-for-invisalign' },
        { name: 'Invisalign® vs Candid Co', action: () => window.location.href = '/candid-co-vs-your-local-dentist-for-invisalign' },
        { name: 'Cost of Invisalign®', action: () => window.location.href = '/how-much-does-invisalign-cost' },
        { name: 'My Dentist Said I Can\'t Do Invisalign®', action: () => window.location.href = '/why-cant-i-do-invisalign' },
        { name: 'Invisalign® for All', action: () => window.location.href = '/best-invisalign-deal' },
        { name: 'Invisalign® for Brides', action: () => window.location.href = '/invisalign-for-brides' },
        { name: 'Invisalign® for Teens', action: () => window.location.href = '/invisalign-for-teens' },
        { name: 'Invisalign® for Travelers', action: () => window.location.href = '/invisalign-for-travelers' },
        { name: 'Invisalign® Payment Plans', action: () => window.location.href = '/invisalign-payment-options' },
        { name: 'Philadelphia Invisalign®', action: () => window.location.href = '/invisalign-philadelphia' }
      ]
    },
    { name: 'About Us', hasDropdown: true },
    { name: 'Contact Us', hasDropdown: false, action: () => window.location.href = '/contact-us' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white shadow-lg'
        : 'bg-white'
    }`}>
      {/* Main header content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section - Logo and Contact */}
        <div className={`flex flex-col lg:flex-row items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}>
          {/* Left side - Logo */}
          <div className="flex-shrink-0 mb-4 lg:mb-0 flex items-center">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/images/website-logo.png"
                alt="Dentistry at SuburbanSquare Logo"
                width={280}
                height={160}
                className={`transition-all duration-300 ${
                  isScrolled
                    ? 'w-24 h-24 md:w-28 lg:w-32 lg:h-20'
                    : 'w-30 h-30 md:w-35 lg:w-70 lg:h-40'
                }`}
                priority
              />
            </Link>
          </div>

          {/* Right side - Contact and Navigation */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:610-649-0313"
                className={`font-sansation-regular font-[800] hover:text-[#004080] transition-all duration-300 ${
                  isScrolled
                    ? 'text-[#004681] text-[18px]'
                    : 'text-[#004681] text-[22px]'
                }`}
              >
                (610) 649-0313
              </a>
              <button className={`bg-[#004681] text-white px-6 py-2 rounded-full font-sansation-regular hover:bg-[#029fde] transition-all duration-300 ${
                isScrolled ? 'text-xs lg:text-sm py-1.5 px-4' : 'text-sm lg:text-base'
              }`}>
                Online Scheduling
              </button>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-8">
                                 {navigationItems.map((item) => (
                   <li key={item.name} className="relative group">
                     <button 
                       onClick={item.action}
                       className={`font-sansation-bold hover:text-[#3e8bb2] active:text-[#3e8bb2] transition-all duration-300 flex items-center space-x-1 ${
                         isScrolled
                           ? 'text-[#004681] text-[16px]'
                           : 'text-[#004681] text-[18px]'
                       }`}>
                       <span>{item.name}</span>
                       {item.hasDropdown && (
                         <svg
                           className={`ml-1 transition-all duration-300 ${
                             isScrolled ? 'w-3 h-3' : 'w-4 h-4'
                           }`}
                           fill="currentColor"
                           viewBox="0 0 20 20"
                         >
                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                         </svg>
                       )}
                     </button>
                    {/* Dropdown menu */}
                    {item.hasDropdown && item.submenu && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={subItem.action}
                              className="w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 text-left transition-colors duration-200 font-sansation-regular"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden bg-[#003366] text-white p-2 rounded-md hover:bg-[#004080] transition-all duration-300 ${
                isScrolled ? 'p-1.5' : 'p-2'
              }`}
            >
              <svg className={`transition-all duration-300 ${
                isScrolled ? 'w-5 h-5' : 'w-6 h-6'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav>
              <ul className="space-y-2">
                                 {navigationItems.map((item) => (
                   <li key={item.name}>
                     <div>
                       <button 
                         onClick={item.action}
                         className="text-[#004681] font-sansation-bold text-[18px] hover:text-[#3e8bb2] active:text-[#3e8bb2] transition-colors w-full text-left py-2 flex items-center justify-between">
                         <span>{item.name}</span>
                         {item.hasDropdown && (
                           <svg
                             className="w-5 h-5"
                             fill="currentColor"
                             viewBox="0 0 20 20"
                           >
                             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                           </svg>
                         )}
                       </button>
                      {/* Mobile submenu */}
                      {item.hasDropdown && item.submenu && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={subItem.action}
                              className="text-[#004681] font-sansation-regular text-[16px] hover:text-[#3e8bb2] transition-colors w-full text-left py-1 pl-4"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Gold gradient underline */}
      <div className={`h-[15px] bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] transition-all duration-300 ${
        isScrolled ? 'h-[8px]' : 'h-[15px]'
      }`}></div>
    </header>
  );
};

export default Header;
