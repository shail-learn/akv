"use client";
import React from "react";
import bgimage1 from "../../../assets/images/guava/refreshment.webp";
import Image from "next/image";

export const InvestLayout = ({ plantSearon, heading }) => {
  return (
    <>
      <section
        className=" bg-white pt-16 pb-16 lg:pt-20 lg:pb-20 relative"
        style={{
          background: `url(${bgimage1.src})center center / cover no-repeat`,
        }}
      >
        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-50 z-10"></div>
        <div className="mx-auto max-w-7xl  px-4 md:px-8 lg:px-2 relative z-10">
          <div className="flex flex-wrap  items-center gap-6 px-0 md:px-6  lg:px-2">
            <div className="w-[95%] md:w-5/12 ">
              <h2 className="text-3xl md:leading-[1.3] md:text-4xl mb-10 font-medium redhat text-white">
                {heading}
              </h2>
              <div className="bg-white backdrop-blur bg-opacity-20 rounded-[20px]">
                {plantSearon.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-6">
                    <Image
                      src={section.img}
                      className="w-full rounded-3xl"
                      alt="image"
                    />
                    <div className="p-8 ">
                      <ul className="list-disc pl-5 mt-2 space-y-2 text-sm md:text-[15px] text-white font-light redhat">
                        {section.details.map((detail, index) => (
                          <li className="mb-1" key={index}>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const LookingLayout = ({ heading, subheading, box }) => {
  return (
    <>
      <section className="py-12 lg:py-16 bg-[#D9D9D966]">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 ">
          <h2
            className="lg:leading-snug text-black redhat mb-6 lg:mb-4 text-center text-3xl md:text-4xl font-semibold w-full"
            dangerouslySetInnerHTML={{ __html: heading }}
          ></h2>

          <p className="lg:leading-snug text-black  text-center text-sm lg:text-[18px]  font-semibold mb-8 mt-4  w-full">
            {subheading}
          </p>

          <div className="mx-auto justify-center flex flex-wrap lg:flex-nowrap gap-12 lg:gap-5">
            {box.map((item, index) => (
              <div className="w-full md:w-[47%] lg:w-3/12" key={index}>
                <div className=" text-black text-center grid items-center justify-center p-4 h-40 lg:h-32 border-[1px] border-[#1B453C]  rounded-[20px] transition-all  duration-400">
                  <h2 className="lg:leading-snug  poppins text-center text-sm lg:text-[15px]  font-normal  w-full">
                    {item.text}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
