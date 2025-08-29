import { ServicesData } from "@/static/servicesData";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";

const Features = () => {
  // Flatten all services from all categories
  const allServices = ServicesData.categories.flatMap(category => 
    category.services.map(service => ({
      ...service,
      category: category.title
    }))
  );

  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title={ServicesData.title}
          paragraph={ServicesData.subtitle}
          center
        />

        {ServicesData.categories.map((category) => (
          <div key={category.id} className="mb-16">
            <h2 className="text-2xl font-bold text-dark dark:text-white mb-8 text-center">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service) => (
                <SingleFeature 
                  key={`${category.id}-${service.id}`} 
                  feature={{
                    ...service,
                    paragraph: service.description
                  }} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
