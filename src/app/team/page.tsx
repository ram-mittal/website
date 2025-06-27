import { Authors } from "@/static/authorData";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Our Team | Kaizen",
  description: "Meet our dedicated team at Kaizen Marketing Services",
};

function MembersPage() {
  return (
    <div className="relative z-10 overflow-hidden pt-28 lg:pt-[150px] pb-16 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[45px] md:leading-[55px]">
            Our Leadership Team
          </h1>
          <p className="text-base text-body-color dark:text-dark-6">
            Meet the driving force behind Kaizen Marketing Services
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Authors.map((member) => (
            <div 
              key={member.id}
              className="wow fadeInUp group relative overflow-hidden rounded-lg bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark-2 dark:hover:shadow-gray-dark/20"
              data-wow-delay="0.1s"
            >
              <Link href={`/team/${member.id}`} className="relative block h-[350px] w-full">
                <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
                  {member.designation}
                </span>
                <div className="relative h-full w-full overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover object-center transition duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
              <div className="p-6 text-center">
                <h3 className="mb-1 text-xl font-bold text-dark dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-body-color dark:text-dark-6">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MembersPage;
