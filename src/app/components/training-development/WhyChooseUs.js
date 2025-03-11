import React from "react";
import banner from "../../../assets/images/training/whychoosebg.webp";
import Img1 from "../../../assets/images/training/choose-1.webp";
import Img2 from "../../../assets/images/training/choose-2.webp";
import Img3 from "../../../assets/images/training/choose-3.webp";
import Img4 from "../../../assets/images/training/choose-4.webp";
import Img5 from "../../../assets/images/training/choose-5.webp";
import Image from "next/image";
const WhyChooseUs = () => {
  const heading = "Why Choose Us?";
  const features  = [
    {
      image: Img1,
      title: 'Practical Training',
      description: 'Learn by doing with real-life applications.',
    },
    {
      image: Img2,
      title: 'Sustainability Focus',
      description: 'Contribute to climate-positive farming.',
    },
    {
      image: Img3,
      title: 'Expert Mentors',
      description: 'Learn from scientists, agronomists, and industry leaders.',
    },
    {
      image: Img4,
      title: 'Technology Integration',
      description: 'Work with AI, IoT, and drone tech.',
    },
    {
      image: Img5,
      title: 'Certifications & Career Support',
      description: 'Get recognized credentials to boost your career.',
    },
  ];
  return (
    <>
      <section
        className="bg-cover bg-center relative text-center px-4 md:text-left  pt-16 pb-16 lg:pt-20 lg:pb-20"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="absolute inset-0 bg-[#1B453C] opacity-80"></div>
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 ">
          <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium text-center redhat text-white mb-12">
            {heading}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="min-w-24 min-h-24 relative rounded-full overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h3 className="text-white text-xl text-left redhat relative font-medium">{feature.title}</h3>
              <p className="text-white mt-2 text-left  relative redhat text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
