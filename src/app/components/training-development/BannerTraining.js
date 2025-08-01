"use client";
import React from "react";
import banner from "../../../assets/images/training/training-banner1.webp";
import Image from "next/image";
import BannerPage from "../BannerPage";
import IntroImg from "../../../assets/images/training/introImg.webp";
export const BannerTraining = () => {
  const text = {
    banner: banner,
    heading: `Nurturing Knowledge, <br/> Cultivating Success`,
    title:
      "Empowering individuals through expert training and sustainable practices.",
    className: "bg-white !text-black hover:!bg-transparent py-4 hover:!text-white",
    // link: "/contact",
    // button: "Explore Training Programs",
    opacity: "opacity-60"
  };
  return (
    <>
      <BannerPage
        heading={text.heading}
        title={text.title}
        banner={text.banner}
        button={text.button}
        link={text.link}
        classname={text.className}
        opacity={text.opacity}
      />
    </>
  );
};
export const IntroSection = () => {
  const IntroData = {
    heading: "Introduction to <br>Training & Development",

    description: `
    At Atulye Krishi Vana, we believe that knowledge is the key to a prosperous and sustainable future. Our Training & Development initiatives focus on empowering farmers, agripreneurs, and enthusiasts with hands-on learning in agroforestry, precision farming, water conservation, and eco-sustainability. <br><br>Our structured training programs are designed to:
    <br><br>
          <ul><li>Planted over 200,000 trees across 400 acres in Sehore District, Madhya Pradesh.
          </li><li>Species include sandalwood, teak, bamboo, rosewood, and medicinal plants.</li><li>Created dedicated spaces like the Shri Tridev Triveni Vatika and Shri Dhanvantri Vatika for spiritual, medicinal, and ecological benefits.</li>
          </ul>
           Join us in building a future where knowledge and nature grow together!
          `,

    image: IntroImg,
  };

  return (
    <>
      <section className="relative text-center md:text-left  my-20 md:my-[4rem] mb-0">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 ">
          <div className="flex md:flex-col flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12  ">
            <div className="lg:w-6/12  w-full  w-12/12 ">
              <Image
                className="w-full h-full rounded-xl"
                src={IntroData.image}
                alt="banner"
              />
            </div>
            <div className="lg:w-6/12 mt-2 md:mt-4 w-full  w-12/12">
              <h2 className="text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-black mt-4 mb-4"
                dangerouslySetInnerHTML={{ __html: IntroData.heading }}
              />



              <div
                className="description_project redhat mb-8 text-base md:text-[17px]"
                dangerouslySetInnerHTML={{ __html: IntroData.description }}
              ></div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};
