import React from 'react'
import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project20/use1.webp";
import use2 from "../../../assets/images/projects/project20/use2.webp";
import use3 from "../../../assets/images/projects/project20/use3.webp";
import use4 from "../../../assets/images/projects/project20/use4.webp";
import use5 from "../../../assets/images/projects/project20/use5.webp";
import use6 from "../../../assets/images/projects/project20/use6.webp";
import PartnerBg from "../../../assets/images/projects/project20/bg.webp";


export const Uses = () => {
  const gridBox = "xl:!grid-cols-3 grid3";
  const custom_class = "white_grid grid_padding";
  const whyChooseData = [
    {
      image: use1,
      title: "Design Features:",
      description:
        "Includes a Yajna Kund (sacred fire pit) with seating for ritual performers and guests.",
    },
    {
      image: use2,
      title: "Purpose: ",
      description:
        "Dedicated space for conducting Yajnas, Homas, and Vedic ceremonies",
    },
    {
      image: use3,
      title: "Ritual Materials:",
      description:
        "Uses sacred firewood, ghee, and other traditional offerings.",
    },


  ];

  const whyChooseData1 = [

    {
      image: use4,
      title: "Cultural Significance: ",
      description:
        "Central to Hindu rituals, spiritual practices, and Vedic traditions.",
    },
    {
      image: use5,
      title: "Community Role:",
      description:
        "Facilitates spiritual bonding and collective cultural experiences.",
    },
    {
      image: use6,
      title: "Maintenance: ",
      description:
        "Requires regular cleaning to maintain sanctity and ritual readiness.",
    },
  ]

  return (
    <>

      <Gridbox
        heading="Uses"
        data={whyChooseData}
        className={custom_class}
        gridBox={gridBox}
      />
      <div className='-mt-8'>
      <Gridbox
        data={whyChooseData1}
        className={custom_class}
        gridBox={gridBox}
      />
</div>



    </>
  );
}



export const Yagyashala = () => {
  const heading = "Shri. Shringi Yagyashala";
  const description =
    "Shri. Shringi Yagyashala is more than just a spiritual venue—it is a space where tradition meets ecology. As part of Atulye Krishi Vana, it embodies the integration of ritual purity, cultural heritage, and nature-centric living, offering participants a profound experience rooted in India's ancient wisdom.";
  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 bg-cover bg-center w-full my-8 md:my-12 !mb-0"
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >

      <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
        <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
          <h2 className=" w-full  text-3xl md:text-4xl leading-snug font-bold mb-8 md:mb-10 redhat">
            {heading}
          </h2>
          <p
            className="mb-4 text-sm  md:text-base   w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>


        </div>
      </div>
    </section>
  );
}
