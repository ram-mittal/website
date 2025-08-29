"use client";

import { useTheme } from "next-themes";

const ContactDetails = () => {
  const { theme } = useTheme();

  return (
    <div className="container">
      <div className="mx-auto max-w-4xl">
        <div className="relative z-10 rounded-xl bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
          <h3 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white">
            Contact Information
          </h3>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h4 className="mb-3 text-xl font-semibold text-dark dark:text-white">Email Us</h4>
                <a 
                  href="mailto:info@gokaizen.in" 
                  className="text-lg text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  info@gokaizen.in
                </a>
              </div>
              
              <div>
                <h4 className="mb-3 text-xl font-semibold text-dark dark:text-white">Visit Us</h4>
                <a 
                  href="https://share.google/VlLx5Y5Uyla6K3NMt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  Ashoka Mall, G4, Bund Garden Rd,<br />
                  Sangamvadi, Pune,<br />
                  Maharashtra 411001
                </a>
              </div>
              
              <div>
                <h4 className="mb-3 text-xl font-semibold text-dark dark:text-white">Call Us</h4>
                <a 
                  href="tel:+917378906483" 
                  className="text-lg text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  +91 7378906483
                </a>
              </div>
              
              <div>
                <h4 className="mb-3 text-xl font-semibold text-dark dark:text-white">Office Hours</h4>
                <p className="text-lg text-body-color dark:text-body-color-dark">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-lg text-body-color dark:text-body-color-dark">
                  Saturday: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="mb-3 text-xl font-semibold text-dark dark:text-white">Visit Our Office</h4>
              <address className="not-italic text-lg text-body-color dark:text-body-color-dark">
                Ashoka Mall, G4<br />
                Bund Garden Rd, Sangamvadi<br />
                Pune, Maharashtra 411001
              </address>
              
              <div className="mt-8">
                <h5 className="mb-3 text-lg font-semibold text-dark dark:text-white">Follow Us</h5>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/company/kaizen-marketing-services" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.413v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/kaizen_marketing_services?igsh=MXI3b2Z0Zm5pbHlzNw==&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute left-2 top-7">
            <svg width="57" height="65" viewBox="0 0 57 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z" fill={theme === "light" ? "#4A6CF7" : "#fff"} fillOpacity="0.08" />
            </svg>
          </div>
          
          <div className="absolute right-0 top-0">
            <svg width="162" height="91" viewBox="0 0 162 91" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M1 89.9999C8 77.3332 28.5 2.86665 39 1.99988C49.5 1.13321 70.5 1.49988 80.5 11.9999C90.5 22.4999 97 51 116 51C135 51 154 18.5 161 1.99988" stroke={theme === "light" ? "#4A6CF7" : "#fff"} strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
