"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="my-10 md:my-16 lg:my-20" id="brands">
      <h2 className="text-center text-2xl font-bold mb-8 dark:text-white">Our Esteemed Clients</h2>
      <Marquee>
        {Object.entries(Logos).map(([key, logo]) => (
          <div
            key={key}
            className="relative h-full w-fit mx-8 md:mx-12 lg:mx-16 flex items-center justify-center"
          >
            <div className="relative h-16 w-40 md:h-20 md:w-48 flex items-center justify-center bg-white dark:bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image
                src={logo.src}
                className="object-contain max-h-full max-w-full"
                alt={logo.alt}
                width={160}
                height={80}
                style={logo.styles || {}}
              />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

type LogoType = {
  src: string;
  alt: string;
  styles?: React.CSSProperties;
};

const Logos: Record<string, LogoType> = {
  tataSky: {
    src: "/images/clients/tata.jpg",
    alt: "Tata Sky",
    styles: { height: 'auto', width: '100%', objectFit: 'contain' }
  },
  icici: {
    src: "/images/clients/icic.jpg",
    alt: "ICICI Bank",
    styles: { height: 'auto', width: '100%', objectFit: 'contain' }
  },
  google360: {
    src: "/images/clients/google.png",
    alt: "Google 360",
    styles: { height: 'auto', width: '100%', objectFit: 'contain' }
  },
  sosChildren: {
    src: "/images/clients/sos.jpeg",
    alt: "SOS Children's Villages",
    styles: { height: 'auto', width: '100%', objectFit: 'contain' }
  }
};

export default Brands;
