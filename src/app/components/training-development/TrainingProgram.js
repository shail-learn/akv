import React from "react";
import first from "../../../assets/images/training/program-1.webp";
import second from "../../../assets/images/training/program-2.webp";
import third from "../../../assets/images/training/program-3.webp";
import fourth from "../../../assets/images/training/program-4.webp";
import fifth from "../../../assets/images/training/program-5.webp";
import Image from "next/image";

const TrainingProgram = () => {
  const heading = "Our Training Programs";
  const textoneData = {
    title: "Sustainable Agriculture & Agroforestry",
    listData: `<li>Afforestation & Reforestation: Learn how to restore degraded lands.</li>
    <li>Organic Farming Techniques: Reduce chemical dependency while improving soil health.</li>
    <li>Agroforestry for Wealth Generation: Understand long-term benefits of timber, fruit, and medicinal plant farming.</li>`,
  };
  const texttwoData = {
    title: "Smart Farming with Technology",
    listData: `<li>AI & Robotics in Farming: Discover how automation is changing agriculture.</li>
    <li>Drone Technology: Learn how drones assist in crop health monitoring and pesticide spraying.</li>
    <li>Precision Agriculture: Use GIS, GPS, and real-time monitoring for efficient farming.</li>`,
  };
  const textthirdData = {
    title: "Water & Soil Management",
    listData: `<li>Water Conservation Techniques: Master rainwater harvesting, irrigation automation, and check dams.</li>
    <li>Soil Testing & Treatment: Improve soil fertility through scientific analysis and bio-fertilizers.</li>`,
  };
  const textfourthData = {
    title: "Medicinal & Horticulture Training",
    listData: `<li>Growing High-Value Crops: Learn cultivation techniques for sandalwood, amla, tulsi, and aloe vera.</li>
    <li>Herbal Farming & Ayurveda: Discover the medicinal value of various plants.</li>`,
  };
  const textsixData = {
    title: "Agribusiness & Entrepreneurship Development",
    listData: `<li>Farm-to-Market Training: Learn how to grow, process, package, and sell produce.</li>
    <li>Eco-Tourism Opportunities: Turn farming into sustainable travel experiences.</li>
    <li>Women & Youth Empowerment: Skill development programs focused on financial independence.</li>

    `,
  };
  const fiftcontent =
    " All our programs include hands-on field training, expert mentorship, and interactive workshops.";

  return (
    <>
      <section className="pt-14 pb-0 lg:pt-0 lg:pb-0 technology-sec">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 ">
          <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-black mt-4 text-center">
            {heading}
          </h2>
        </div>
        <div className="mx-auto max-w-full  pt-10">
          <div className="grid gap-0 grid-cols-1  lg:grid-cols-12 items-center justify-center">
            <div className="md:col-span-3 col-span-12   h-full">
              <Image
                src={first}
                alt="icon"
                className="w-full mx-auto  h-full"
              />
            </div>
            <div className="md:col-span-3 col-span-12  h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#000]">
              <div className="p-5">
                <p className="w-3/4 pl-5 py-3 text-md font-medium">
                  {textoneData.title}
                </p>
                <ul
                  className="w-2/2 text-[14px] !list-disc pl-5 py-4"
                  dangerouslySetInnerHTML={{ __html: textoneData.listData }}
                ></ul>
              </div>
            </div>

            <div className="md:col-span-3 col-span-12  h-full">
              <Image
                src={second}
                alt="icon"
                className="w-full mx-auto h-full"
              />
            </div>
            <div className="md:col-span-3 col-span-12  h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#000]">
              <div className="p-5">
                <p className="w-3/4 pl-5 py-3 text-md font-medium">
                  {texttwoData.title}
                </p>
                <ul
                  className="w-2/2 text-[14px] !list-disc pl-5 py-4"
                  dangerouslySetInnerHTML={{ __html: texttwoData.listData }}
                ></ul>
              </div>
            </div>

            <div className="md:col-span-3 col-span-12 order-6 lg:order-none  h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#000]">
              <div className="p-5">
                <p className="w-3/4 pl-5 py-3 text-md font-medium">
                  {textthirdData.title}
                </p>
                <ul
                  className="w-2/2 text-[14px] !list-disc pl-5 py-4"
                  dangerouslySetInnerHTML={{ __html: textthirdData.listData }}
                ></ul>
              </div>
            </div>
            <div className="md:col-span-3 col-span-12  order-5 lg:order-none    h-full">
              <Image src={third} alt="icon" className="w-full mx-auto h-full" />
            </div>
            <div className="md:col-span-3 col-span-12 order-8 lg:order-none  h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#000]">
              <div className="p-5">
                <p className="w-3/4 pl-5 py-3 text-md font-medium">
                  {textfourthData.title}
                </p>
                <ul
                  className="w-2/2 text-[14px] !list-disc pl-5 py-4"
                  dangerouslySetInnerHTML={{ __html: textfourthData.listData }}
                ></ul>
              </div>
            </div>
            <div className="md:col-span-3 col-span-12  order-7  lg:order-none  h-full">
              <Image
                src={fourth}
                alt="icon"
                className="w-full mx-auto h-full"
              />
            </div>
            <div className="md:col-span-3 col-span-12 order-8 lg:order-none   h-full">
              <Image
                src={fifth}
                alt="icon"
                className="w-full mx-auto  h-full"
              />
            </div>
            <div className="md:col-span-3 col-span-12 order-9 lg:order-none h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#000]">
              <div className="p-5">
                <p className="w-3/4 pl-5 py-3 text-md font-medium">
                  {textsixData.title}
                </p>
                <ul
                  className="w-2/2 text-[14px] !list-disc pl-5 py-4"
                  dangerouslySetInnerHTML={{ __html: textsixData.listData }}
                ></ul>
              </div>
            </div>
            <div className="col-span-6 h-72 order-11 lg:order-none lg:h-full grid items-center transition-all duration-400 justify-center ">
              <p className=" italic w-3/4 m-auto text-center ">{fiftcontent}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingProgram;
