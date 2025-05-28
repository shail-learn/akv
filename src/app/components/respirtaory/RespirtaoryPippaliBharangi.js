import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/respirtaory/banner.webp";
import info from "../../../assets/images/respirtaory/info.webp";
import Image from 'next/image';
import { Gridbox } from '../Gridbox';
import key1 from "../../../assets/images/respirtaory/key1.webp";
import key2 from "../../../assets/images/respirtaory/key2.webp";
import key3 from "../../../assets/images/respirtaory/key3.webp";
import key4 from "../../../assets/images/respirtaory/key4.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import circle1 from "../../../assets/images/respirtaory/circle1.webp";

import circle2 from "../../../assets/images/respirtaory/circle2.webp";
import key5 from "../../../assets/images/respirtaory/key5.webp";
import key6 from "../../../assets/images/respirtaory/key6.webp";
import key7 from "../../../assets/images/respirtaory/key7.webp";
import key8 from "../../../assets/images/respirtaory/key8.webp";

export const Respirtaory = () => {
  const text = {
    banner: banner,
    heading: `Breathe Easy, Live Naturally <br/>
    Grow Health with Every Breath`,
    title: 'Respiratory health has become a critical focus in recent years, with rising pollution, seasonal allergies, and the impact of respiratory infections driving global demand for natural remedies. Traditional herbal medicine offers a time-tested approach to supporting lung function, reducing inflammation, and relieving congestion.',
    opacity: 'opacity-50'
}
return (
    <>
        <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
        <Wave />
    </>
)
}



export const Pippali = () => {
  const basketData = {
    note: "The Atulye Krishi Vana project is dedicated to promoting the cultivation of powerful respiratory herbs like Pippali (Piper longum), Bharangi (Clerodendrum serratum), Vajradanti (Barleria prionitis), and Tulsi (Ocimum tenuiflorum). These plants not only offer relief from respiratory ailments but also contribute to overall immune health, reduce oxidative stress, and improve air quality through natural phytoremediation.    ",
    image: info,
};

const main_heading = "Pippali (Piper longum)"
const shortinfo = "<b>The Lung Tonic and Metabolism Booster</b>  <br/> Pippali, also known as Indian long pepper, is a powerful herb used extensively in Ayurveda for its respiratory and digestive benefits. It is known to clear mucus, enhance lung function, and improve overall respiratory health. The plant contains bioactive compounds like piperine, which have anti-inflammatory, antimicrobial, and bronchodilator effects. Pippali is often included in herbal formulations for treating cough, asthma, and chronic bronchitis."
const gridBox = "xl:!grid-cols-4 custom_height"
const whyChooseData = [

  {
    image: key1,
    title: 'Clears respiratory passages and reduces mucus buildup',

  },
  {
    image: key2,
    title: 'Acts as a natural bronchodilator, improving lung function',
  },
  {
    image: key3,
    title: 'Enhances metabolism and digestion',
  },
  {
    image: key4,
    title: 'Supports immune function and overall vitality',
  },

];

const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
const slides = [
  {

    image: circle1,
    desc: `Pippali grows well in tropical and subtropical regions, preferring warm, humid climates. It requires well-drained, fertile soils with a slightly acidic to neutral pH. The plant thrives under partial shade, making it suitable for agroforestry and intercropping systems. <br/><br/> Pippali is in high demand for use in Ayurvedic formulations, herbal teas, cough syrups, and respiratory tonics. It is also used as a natural preservative and flavoring agent in traditional foods.`,

  },

];

return (
    <>

        <section className="py-12 md:!pt-0  px-4 md:px-8 lg:px-16 bg-[#1B453C]">
            <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                <div className="flex flex-col-reverse justify-between lg:flex-row   gap-8">
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


export const Bharangi = () => {
  const gridBox = "xl:!grid-cols-4 custom_height"
  const custom_class = "white_grid grid_padding"
  const main_heading = "Bharangi (Clerodendrum serratum)"
  const shortinfo = `<b>The Respiratory Support Herb</b> <br/> Bharangi is a small, aromatic shrub known for its potent anti-inflammatory and expectorant properties. It is widely used in Ayurvedic medicine to support lung function, clear nasal passages, and reduce respiratory inflammation. `
  const whyChooseData = [
    {
      image: key5,
      title: 'Acts as a natural expectorant, clearing mucus from the lungs',
    },
    {
      image: key6,
      title: 'Reduces respiratory inflammation and congestion',
    },
    {
      image: key7,
      title: 'Supports recovery from respiratory infections and bronchitis',
    },
    {
      image: key8,
      title: 'Enhances lung capacity and breathing efficiency',
    },

  ];

  const custom_class1 = "growth_white"
  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: circle2,
      desc: `Bharangi prefers tropical and subtropical climates with well-drained, nutrient-rich soils. It can tolerate a range of soil types, including loamy and sandy soils, and grows well in areas with moderate to high rainfall. <br> <br> Bharangi is used in a variety of respiratory health products, including herbal syrups, tablets, and capsules. It is also a key ingredient in traditional Ayurvedic formulations like Dashmoolarishta and Bharangyadi Kashayam.The rising demand for natural respiratory remedies makes Bharangi a valuable crop for farmers looking to diversify their herbal portfolio.`,
    },



  ];

  return (
    <>
      <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-black" dangerouslySetInnerHTML={{__html:shortinfo}}></p>
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
