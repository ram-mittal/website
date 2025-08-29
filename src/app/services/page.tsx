import { Metadata } from 'next';
import Link from 'next/link';
import { ServicesData } from '@/static/servicesData';

export const metadata: Metadata = {
  title: 'Our Services - Kaizen',
  description: ServicesData.subtitle,
};

export default function ServicesPage() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-5xl mb-4">
            {ServicesData.title}
          </h1>
          <p className="text-base text-body-color dark:text-body-color-dark">
            {ServicesData.subtitle}
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {ServicesData.categories.map((category) => (
            <div key={category.id} className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-dark dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                {category.title}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => {
                  const serviceId = service.title.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <div 
                      key={service.id}
                      id={serviceId}
                      className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-300 scroll-mt-20"
                    >
                      <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-body-color dark:text-body-color-dark">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-dark dark:text-white mb-6">
            Ready to get started?
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white shadow-lg shadow-primary/20 hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/30 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
