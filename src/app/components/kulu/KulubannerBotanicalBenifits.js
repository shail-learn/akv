import React from 'react'

import BannerPage from '../BannerPage';
import banner from "../../../assets/images/kulu/banner.webp";
import whychooose from "../../../assets/images/kulu/wavy.svg";
import icon1 from "../../../assets/images/kulu/icon1.svg";
import icon2 from "../../../assets/images/kulu/icon2.svg";
import icon3 from "../../../assets/images/kulu/icon3.svg";


import Image from 'next/image';
import { Iconslider } from '../Iconslider';
import SpeciesSlider from '../utilities/ContentSlider';
import { Contentslider } from '../Contentslider';

export const Kulubanner = () => {
    const text = {
        banner: banner,
        heading: `Kulu (Sterculia urens)`,
        subtitle: "The Resilient Gum-Yielding Tree for Sustainable Agroforestry",
        title: "Kulu (Sterculia urens) is a deciduous tree native to India, known for its high-value gum extraction. It thrives in dry deciduous forests and rocky terrains, making it a resilient species with multiple commercial and ecological benefits. ",
        opacity: "opacity-50"
    };
    return (
        <>
            <BannerPage
                heading={text.heading}
                title={text.title}
                subtitle={text.subtitle}
                opacity={text.opacity}
                banner={text.banner}
                classname={text.className}

            />
        </>
    )
}


export const Botanical = () => {
    const heading = "Botanical Profile of Kulu (Sterculia urens)";
    const cardData = [
        {
            title: "Scientific Name",
            icon: icon1,
            description: "Sterculia urens",
        },
        {
            title: "Common Names",
            icon: icon2,

            description: "Kulu, Indian Tragacanth, Karaya Tree",
        },
        {
            title: "Family",
            icon: icon3,

            description: "Malvaceae (formerly Sterculiaceae)",
        },
        {
            title: "Growth Type",
            icon: icon1,
            description: "Deciduous tree",
        },
        {
            title: "Height",
            icon: icon2,

            description:
                "Up to 15 meters",
        },
        {
            title: "Bark",
            icon: icon3,

            description: "Smooth, whitish, and peeling in papery flakes",
        },
        {
            title: "Leaves",
            icon: icon1,
            description: "Broad, lobed, and clustered at the ends of branches",
        },
        {
            title: "Flowers",
            icon: icon2,

            description:  "Small, yellowish, appearing before new foliage",
        },
        {
            title: "Fruits",
            icon: icon3,
            description: "Woody follicles containing numerous seeds",
        },
        {
            title: "Gum Name",
            icon: icon1,

            description:  "Karaya gum (Sterculia gum)",
        },
    ];



    return (
        <>
            <div className="relative w-full md:-mt-28 z-10">
                <Image
                    src={whychooose}
                    alt="Divider"
                    width={1920}
                    height={700}
                    className="w-full object-cover h-full"
                />
            </div>

            <Iconslider
                card={cardData}
                heading={heading}
            />

        </>
    );
}


export const Benifits = () => {
    const speciesData = [
        {
          name: "Karaya Gum Extraction",
          info:"Karaya gum is a high-value natural exudate used in multiple industries. It is collected by making incisions in the tree bark, allowing the gum to ooze and harden into resinous lumps.",
          points: [
            'Pharmaceutical Use: Used as a laxative, dental adhesive, and emulsifier in medicines.',
            'Food Industry: Acts as a thickener, stabilizer, and dietary fiber supplement.',
            'Cosmetics: Used in skincare products, hair gels, and anti-aging formulations.',
            'Industrial Applications: Utilized in adhesives, textiles, and printing inks.',
          ],
        },
        {
            name: "Environmental and Ecological Benefits",
            info:"Kulu trees play a crucial role in soil conservation, biodiversity, and carbon sequestration. ",
            points: [
              'Drought-Resistant: Thrives in arid and semi-arid climates, ensuring reforestation in degraded lands.',
              'Soil Stabilization: Prevents erosion in rocky terrains and enhances soil fertility.',
              'Supports Wildlife: Provides food and habitat for birds, bees, and insects.',

            ],
          },
          {
            name: "Agroforestry & Sustainable Cultivation",

            points: [
              'Ideal for mixed cropping with medicinal plants and fodder species.',
              'Enhances farmer income through diversified revenue streams (gum, wood, and seeds).',
              'Promotes eco-friendly, sustainable harvesting without harming tree regeneration.',

            ],
          },

      ];

      return (
        <>

          <Contentslider
            title="Benefits and Commercial Uses of Kulu Tree"
            speciesData={speciesData}
          />
        </>
      );
}
