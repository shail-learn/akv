import React from "react";
import banner from "../../../assets/images/training/whychoosebg.webp";
import Img1 from "../../../assets/images/training/choose-1.webp";
import Img2 from "../../../assets/images/training/choose-2.webp";
import Img3 from "../../../assets/images/training/choose-3.webp";
import Img4 from "../../../assets/images/training/choose-4.webp";
import Img5 from "../../../assets/images/training/choose-5.webp";

import product1 from "../../../assets/images/wind/product01.webp";
import product02 from "../../../assets/images/medicinal/medicine-main.webp";
import product03 from "../../../assets/images/forest/main.webp";
import Image from "next/image";
import backgroundImage from "../../../assets/images/timber/category-bg.webp";
import { Productlist } from "../Productlist";


const WhyChooseUs = () => {
  const heading = "Why Choose Us?";
  const features = [
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

  const custom_space = "pt-0 py-20 md:py-24 lg:py-32"
  const heading1 = "Our Training"
  const bgimg = backgroundImage
  const fruitData = [
      {
          title: "Multi-Layer Farming Training by Atulye Krishi Vana",
          image: product1,
          link: "/training-development/multi-layer-farming-training-by-atulye-krishi-vana",
      },
      {
          title: "Mushroom Spawn Preparation and Cultivation Training",
          image: product02,
          link: "/training-development/mushroom-spawn-preparation-and-cultivation-training",
      },
      {
          title: "Integrated Sustainable Agriculture Training by Atulye Krishi Vana",
          image: product03,
          link: "/training-development/integrated-sustainable-agriculture-training-by-atulye-krishi-vana",
      },
      {
        title: "Drone Application in Agriculture Training",
        image: product03,
        link: "/training-development/drone-application-in-agriculture-training",
    },
  ];

  return (
    <>

      <Productlist heading={heading1} fruitData={fruitData} bgimg={bgimg} custom_space={custom_space} />





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
                  objectFit="cover rounded-full"
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
