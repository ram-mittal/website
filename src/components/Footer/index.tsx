'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-secondary pt-16 dark:bg-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <div className="relative h-14 w-auto dark:rounded-lg dark:bg-white dark:p-1.5 dark:shadow-md">
                  <img 
                    src="/images/logo.png" 
                    alt="Kaizen Logo" 
                    className="h-full w-auto object-contain"
                  />
                </div>
              </Link>
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Elevating brands through innovative marketing solutions. We specialize in customer acquisition, 
                client servicing, and creating impactful marketing campaigns that drive results for B2B and B2C businesses.
              </p>
              <div className="mb-6 space-y-2">
                <p className="text-base text-body-color dark:text-body-color-dark">
                  <a href="mailto:info@gokaizen.in" className="hover:text-primary">info@gokaizen.in</a>
                </p>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  <a href="tel:+917378906483" className="hover:text-primary">+91 73789 06483</a>
                </p>
              </div>
              <div className="mb-6">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-base font-medium text-primary hover:underline"
                >
                  Contact Us
                  <svg 
                    className="ml-1 h-4 w-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="https://www.linkedin.com/company/kaizen-marketing-services"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color transition-colors duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.413v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/kaizen_marketing_services?igsh=MXI3b2Z0Zm5pbHlzNw%3D%3D&utm_source=qr"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color transition-colors duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.7-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">Quick Links</h2>
              <ul>
                <li>
                  <Link href="/about" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">Services</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-dark dark:text-white">Sales & Marketing</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services#b2b-marketing" className="text-sm text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                        B2B Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#b2c-marketing" className="text-sm text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                        B2C Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#mall-events" className="text-sm text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                        Mall Events & Road Trips
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-dark dark:text-white">Business Solutions</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services#brand-acquisition" className="text-sm text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                        Customer Acquisition
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#client-servicing" className="text-sm text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                        Client Servicing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Section Removed */}
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            &copy; {new Date().getFullYear()} Kaizen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
