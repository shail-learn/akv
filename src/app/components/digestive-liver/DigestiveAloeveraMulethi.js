import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/digestive/banner.webp";
import info from "../../../assets/images/digestive/info.webp";
import Image from 'next/image';
import { Gridbox } from '../Gridbox';
import key1 from "../../../assets/images/digestive/key1.webp";
import key2 from "../../../assets/images/digestive/key2.webp";
import key3 from "../../../assets/images/digestive/key3.webp";
import key4 from "../../../assets/images/digestive/key4.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import image1 from "../../../assets/images/digestive/image1.webp";

import circle2 from "../../../assets/images/digestive/circle2.webp";
import key5 from "../../../assets/images/digestive/key5.webp";
import key6 from "../../../assets/images/digestive/key6.webp";
import key7 from "../../../assets/images/digestive/key7.webp";
import key8 from "../../../assets/images/digestive/key8.webp";

export const Digestive = () => {
  const text = {
    banner: banner,
    heading: `Grow Health, Cultivate Wellness <br/>
        The Power of Nature at Your Roots`,
    title: 'Digestive health is the foundation of overall wellness. A strong digestive system not only supports nutrient absorption but also influences immunity, mental clarity, and physical energy. The liver, often referred to as the body’s detox powerhouse, plays a crucial role in filtering toxins, metabolizing fats, and managing hormones.',
    opacity: 'opacity-30'
  }
  return (
    <>
      <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
      <Wave />
    </>
  )
}



export const Aloevera = () => {
  const basketData = {
    note: "In traditional medicine, several herbs have been trusted for centuries to support digestion, enhance liver function, and optimize metabolic health. These plants not only promote gut health but also have potent detoxifying properties that make them essential in modern wellness formulations. Atulye Krishi Vana promotes the large-scale cultivation of these powerful herbs, providing farmers with profitable crop options while contributing to community health and environmental sustainability.",
    image: info,
  };

  const main_heading = "Aloe Vera (Aloe vera)"
  const shortinfo = "The Universal Healer <br/> Aloe Vera is one of the most versatile medicinal plants known for its soothing, healing, and detoxifying properties. It is a hardy succulent that thrives in arid and semi-arid regions, requiring minimal water and care"
  const gridBox = "xl:!grid-cols-4 custom_height"
  const whyChooseData = [

    {
      image: key1,
      title: 'Aids in detoxification and liver health',

    },
    {
      image: key2,
      title: 'Provides natural hydration and anti-inflammatory effects',
    },
    {
      image: key3,
      title: 'Promotes nutrient absorption and gut flora balance',
    },
    {
      image: key4,
      title: 'Supports healthy digestion and regular bowel movements',
    },

  ];

  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: image1,
      desc: `Aloe Vera is a drought-tolerant plant that thrives in hot, dry climates with well-drained, sandy soils. It can be cultivated in a wide range of environments, including marginal lands, making it ideal for low-cost farming. <br/><br/> Aloe Vera has a significant market presence in the food, cosmetics, and nutraceutical industries. It is used in juices, gels, dietary supplements, and topical creams. The global demand for Aloe Vera products continues to grow, driven by health-conscious consumers and natural skincare enthusiasts.`,

    },

  ];

  return (
    <>

      <section className="py-12 md:!pt-0  px-4 md:px-8 lg:px-16 bg-[#1B453C]">
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
          <div className="flex flex-col-reverse justify-between lg:flex-row  items-center gap-8">
            <div className="w-full md:w-1/2">
              <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: basketData.note }} ></p>
            </div>
            <div className="w-full md:w-[40%]">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={basketData.image}
                  alt="Basket of fruits and vegetables"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
        </div>
      </section>
      <Gridbox heading="Key Benefits" data={whyChooseData} gridBox={gridBox} />

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
      />

    </>
  )
}



export const Mulethi = () => {
  const gridBox = "xl:!grid-cols-4 custom_height"
  const custom_class = "white_grid grid_padding"
  const main_heading = "Mulethi (Glycyrrhiza glabra)"
  const shortinfo = `<b>The Sweet Healer</b> <br/> Mulethi, also known as licorice root, is a perennial herb with a long history in traditional medicine. It is valued for its ability to soothe the digestive tract, reduce inflammation, and support respiratory health. The plant contains glycyrrhizin, a compound that gives it its characteristic sweet taste and potent medicinal properties.`
  const whyChooseData = [
    {
      image: key5,
      title: 'Relieves indigestion, acidity, and gastric ulcers',
    },
    {
      image: key6,
      title: 'Supports liver detoxification and bile flow',
    },
    {
      image: key7,
      title: 'Reduces inflammation in the digestive system',
    },
    {
      image: key8,
      title: 'Acts as a natural expectorant and immune booster',
    },

  ];

  const custom_class1 = "growth_white"
  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: circle2,
      desc: `Mulethi prefers deep, well-drained soils and a temperate to subtropical climate. It requires moderate rainfall and can tolerate light frost, making it suitable for regions with distinct seasons. <br> <br> Mulethi is in high demand for its use in herbal teas, cough syrups, throat lozenges, and digestive tonics. It is also a key ingredient in Ayurvedic formulations and traditional herbal blends.`,
    },



  ];

  return (
    <>
      <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-black" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
        </div>
      </section>
      <Gridbox heading="Key Benefits" data={whyChooseData} className={custom_class} gridBox={gridBox} />

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
        className={custom_class1}
      />

    </>
  )
}
