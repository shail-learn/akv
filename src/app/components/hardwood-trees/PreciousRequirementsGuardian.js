import React from 'react'
import { Gridbox } from '../Gridbox';
import why1 from "../../../assets/images/hardwood/why6.webp";
import why2 from "../../../assets/images/hardwood/why4.webp";
import why3 from "../../../assets/images/hardwood/why7.webp";
import why4 from "../../../assets/images/hardwood/why9.webp";
import why5 from "../../../assets/images/hardwood/why8.webp";

import why6 from "../../../assets/images/hardwood/why10.webp";
import why7 from "../../../assets/images/hardwood/why11.webp";
import why8 from "../../../assets/images/hardwood/why12.webp";
import why9 from "../../../assets/images/hardwood/why13.webp";

import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';

import image1 from "../../../assets/images/hardwood/img5.webp";
import image2 from "../../../assets/images/hardwood/img6.webp";
import image3 from "../../../assets/images/hardwood/img7.webp";
import image4 from "../../../assets/images/hardwood/img8.webp";

import image5 from "../../../assets/images/hardwood/why1.webp";
import image6 from "../../../assets/images/hardwood/img9.webp";
import image7 from "../../../assets/images/hardwood/img10.webp";
import image8 from "../../../assets/images/hardwood/img11.webp";


export const Precious = () => {
  const custom_class = "white_grid grid_padding"
  const main_heading = "Bija (Vijaysar) - The Durable Healer"
  const shortinfo = "Bija, also known as Vijaysar, is a highly durable hardwood prized for its strength and medicinal properties. Native to India, this tree has been an integral part of traditional medicine and woodworking for centuries. "
  const whyChooseData = [
    {
      image: why1,
      title: 'Exceptional Timber:',
      description: 'Valued for furniture, musical instruments, carvings, and luxury wood products.',
    },
    {
      image: why2,
      title: 'Medicinal Significance:',
      description: 'Used in traditional medicine for treating skin diseases, digestive disorders, and blood purification.',
    },
    {
      image: why3,
      title: 'High Market Demand:',
      description: ' One of the most sought-after hardwoods in global markets.',
    },
    {
      image: why4,
      title: 'Cultural Importance:',
      description: ' Used in religious artifacts and temple architecture across India.',
    },
    {
      image: why5,
      title: 'Natural Dye Source: ',
      description: 'Its heartwood yields a red dye used in textiles and herbal preparations.',
    },
  ];

  return (
    <>
      <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-black">{shortinfo}</p>
        </div>
      </section>
      <Gridbox heading="Key Features & Uses" data={whyChooseData} className={custom_class} />

    </>
  )
}



export const Requirements = () => {
  const custom_class1 = "growth_white"
  const GrowthHeading = "Plantation & Growing Requirements";
  const slides = [
    {

      image: image1,
      title: "Soil Type: ",
      desc: "Grows best in gravelly, lateritic, and well-drained red soils..",

    },
    {

      image: image2,
      title: "Climate:",
      desc: "Thrives in semi-arid and tropical regions with low to moderate rainfall.",
    },
    {

      image: image3,
      title: "Spacing:",
      desc: "Requires 4m x 4m spacing to allow for healthy root development.",
    },

    {

      image: image4,
      title: "Irrigation:",
      desc: "Minimal water requirement; drought-resistant once established.",
    },


  ];

  return (
    <>

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
        className={custom_class1}
      />

    </>
  )
}


export const Guardian = () => {
  const custom_class = "grid_padding"
  const main_heading = "Arjun - The Guardian of Health & Timber"
  const shortinfo = "Arjun (Terminalia arjuna) is a multi-purpose tree known for its strong wood and potent medicinal properties. Its bark is widely used in Ayurveda for heart health and its wood is utilized in construction and furniture making."
  const whyChooseData = [
    {
      image: why6,
      title: 'Durable Timber: ',
      description: 'Ideal for construction, bridges, boats, and agricultural implements.',
    },
    {
      image: why7,
      title: 'Ayurvedic Importance:',
      description: 'Used for heart ailments, cholesterol management, and wound healing.',
    },
    {
      image: why8,
      title: 'Erosion Control: ',
      description: 'Its deep roots help prevent soil erosion, making it ideal for afforestation projects.',
    },
    {
      image: why2,
      title: 'Medicinal Use: ',
      description: 'Beneficial in treating asthma, fractures, and urinary disorders.',
    },
    {
      image: why9,
      title: 'Urban Utility: ',
      description: ' Acts as a shade tree and natural air purifier in city landscapes.',
    },
  ];


  const custom_class1 = "growth_padding"
  const GrowthHeading = "Plantation & Growing Requirements";
  const slides = [
    {

      image: image5,
      title: "Soil Type: ",
      desc: "Adapts well to clay loam, sandy loam, and alluvial soils",

    },
    {

      image: image6,
      title: "Climate:",
      desc: "Flourishes in humid, tropical, and subtropical conditions.",
    },
    {

      image: image7,
      title: "Spacing:",
      desc: "Recommended spacing is 6m x 6m for optimal canopy growth.",
    },

    {

      image: image8,
      title: "Irrigation:",
      desc: "Requires moderate watering during dry spells.",
    },


  ];
  return (
    <>
     <section className="py-12 md:pt-16  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-white">{shortinfo}</p>
        </div>
      </section>
      <Gridbox heading="Key Features & Uses" data={whyChooseData} className={custom_class} />
      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
        className={custom_class1}
      />
    </>
  )
}
