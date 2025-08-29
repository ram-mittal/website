import { Author } from "@/types/Author";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

function TeamHeroSection({ author }: { author: Author }) {
  return (
    <div className="relative z-10 overflow-hidden pt-28 lg:pt-[150px] pb-16 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="flex flex-wrap">
          {/* Left Column - Image */}
          <div className="w-full px-4 lg:w-1/3">
            <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0" data-wow-delay=".15s">
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              
              {/* Social Links */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 pb-6">
                {author.external_link && (
                  <a
                    href={author.external_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-dark shadow-md hover:bg-primary hover:text-white"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                )}
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-dark shadow-md hover:bg-primary hover:text-white"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-dark shadow-md hover:bg-primary hover:text-white"
                >
                  <FaGlobe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>


          {/* Right Column - Content */}
          <div className="w-full px-4 lg:w-2/3">
            <div className="wow fadeInUp max-w-[570px]" data-wow-delay=".2s">
              <h1 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-4xl sm:leading-tight md:text-[45px] md:leading-[55px]">
                {author.name}
              </h1>
              <p className="mb-8 text-xl font-medium text-body-color">
                {author.designation}
              </p>
              
              {author.about && (
                <div className="mb-10 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
                  <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                    About Me
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    {author.about}
                  </p>
                </div>
              )}

              {(author.email || author.phone) && (
                <div className="mb-10">
                  <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                        <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
                          <path d="M10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5 10 18.5C14.6875 18.5 18.5 14.6875 18.5 10C18.5 5.3125 14.6875 1.5 10 1.5ZM10 17.5C6.1875 17.5 3.125 14.5 3.125 10C3.125 5.5 6.1875 2.5 10 2.5C13.8125 17.5 10 17.5Z" />
                          <path d="M10 5C8.625 5 7.5 6.125 7.5 7.5C7.5 7.9375 7.625 8.3125 7.875 8.625C8 8.75 8.0625 8.9375 8 9.125L7.5625 10.6875C7.5 10.9375 7.6875 11.125 7.9375 11.0625L9.5 10.625C9.6875 10.5625 9.875 10.625 10 10.75C10.5 11.0625 11.0625 11.25 11.6875 11.25C13.25 11.25 14.5 10 14.5 8.5C14.5 6.5625 12.9375 5 10 5ZM10 10C9.75 10 9.5 9.75 9.5 9.5C9.5 9.25 9.75 9 10 9C10.25 9 10.5 9.25 10.5 9.5C10.5 9.75 10.25 10 10 10Z" />
                        </svg>
                      </span>
                      <div>
                        {author.email && (
                          <p className="text-base text-body-color dark:text-dark-6">
                            Email: {author.email}
                          </p>
                        )}
                        {author.phone && (
                          <p className="text-base text-body-color dark:text-dark-6">
                            Phone: {author.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {author.expertise && author.expertise.length > 0 && (
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {author.expertise.map((skill) => (
                      <span 
                        key={skill}
                        className="inline-flex items-center rounded-full bg-primary bg-opacity-10 px-4 py-2 text-sm font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamHeroSection;
