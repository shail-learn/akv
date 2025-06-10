import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/shrubs/banner.webp";
import info from "../../../assets/images/digestive/info.webp";
import Image from 'next/image';
import { Gridbox } from '../Gridbox';
import key1 from "../../../assets/images/shrubs/key1.webp";
import key2 from "../../../assets/images/shrubs/key2.webp";
import key3 from "../../../assets/images/shrubs/key3.webp";
import key4 from "../../../assets/images/shrubs/key4.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import image1 from "../../../assets/images/shrubs/circle1.webp";

import circle2 from "../../../assets/images/shrubs/circle2.webp";
import key5 from "../../../assets/images/shrubs/key5.webp";
import key6 from "../../../assets/images/shrubs/key6.webp";
import key7 from "../../../assets/images/shrubs/key7.webp";
import key8 from "../../../assets/images/shrubs/key8.webp";

import key9 from "../../../assets/images/shrubs/key9.webp";
import key10 from "../../../assets/images/shrubs/key10.webp";
import key11 from "../../../assets/images/shrubs/key11.webp";
import key12 from "../../../assets/images/shrubs/key12.webp";
import circle3 from "../../../assets/images/shrubs/circle3.webp";

import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/shrubs/choose1.webp";
import choose2 from "../../../assets/images/shrubs/choose2.webp";
import choose3 from "../../../assets/images/shrubs/choose3.webp";
import choose4 from "../../../assets/images/shrubs/choose4.webp";
import choose5 from "../../../assets/images/shrubs/choose5.webp";


export const Shrubs = () => {
    const text = {
        banner: banner,
        heading: `Medicinal & Ecological Shrubs`,
        subtitle:"Low-Maintenance Green Assets for Health, Heritage, and Habitat",
        title: 'Shrubs are compact, woody or semi-woody plants that serve multiple functions in natural and cultivated ecosystems. Unlike trees, they remain shorter but grow densely, offering excellent coverage, resilience, and versatility. Whether used in hedgerows, herbal gardens, soil conservation zones, or biodiversity parks, shrubs are crucial in building climate-resilient landscapes. <br/> Under the Athulye Krishi Vana initiative, we promote the cultivation of native and adaptive shrubs that serve medicinal, ornamental, and ecological purposes. Among these, Adusa / Vasaka (Justicia adhatoda), Chirchita (Achyranthes aspera), Yavasa (Alhagi maurorum), and Kanghi (Abutilon indicum) stand out for their resilience, heritage value, and practical applications.',
        opacity: 'opacity-40'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}


export const Adusa = () => {


    const main_heading = "Adusa / Vasaka (Justicia adhatoda)"
    const shortinfo = "<b>The Respiratory Remedy in Your Garden</b> <br/> Vasaka, also known as Adhatoda or Malabar Nut, is a well-known medicinal shrub in Ayurveda. With dense green foliage and long spikes of white or purple flowers, it is valued for its respiratory benefits."
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

      {
        image: key1,
        title: 'Medicinal Uses: Leaves are used in treating cough, bronchitis, asthma, and other respiratory ailments.',

      },
      {
        image: key2,
        title: 'Soil Enrichment: Helps in stabilizing soil on embankments or degraded lands.',
      },
      {
        image: key3,
        title: 'Pollinator Support: Flowers attract bees and small butterflies.',
      },
      {
        image: key4,
        title: 'Low Maintenance: Thrives without chemical fertilizers or intensive irrigation.',
      },

    ];

    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: image1,
        desc: `Adusa is highly adaptable to Indian tropical and subtropical climates. It grows in loamy to slightly saline soils and tolerates drought conditions. It thrives best in full to partial sunlight. <br/><br/> Vasaka is widely used in herbal medicine and respiratory syrups, creating consistent demand in Ayurvedic product industries. Farmers can sell dried leaves, extracts, or grow saplings for sale to herbal nurseries and medicinal plantations.`,

      },

    ];

    return (
        <>


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



export const Chirchita = () => {
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const custom_class = "white_grid grid_padding"
    const main_heading = "Chirchita (Achyranthes aspera)"
    const shortinfo = `<b>The Herbal Sentinel of Wastelands</b> <br/> Chirchita, or Prickly Chaff Flower, is a native shrub that grows well in uncultivated fields, open grasslands, and rocky terrain. Though often overlooked, it holds high herbal significance in traditional medicine.`
    const whyChooseData = [
      {
        image: key5,
        title: 'Traditional Remedy: Used in managing kidney stones, joint pain, wounds, and digestive issues.',
      },
      {
        image: key6,
        title: 'Hardy Nature: Grows in poor soils with minimal water.',
      },
      {
        image: key7,
        title: 'Ecological Value: Serves as ground cover and prevents erosion.',
      },
      {
        image: key8,
        title: 'Livestock Friendly: Tender shoots are browsed by goats and sheep.',
      },

    ];

    const custom_class1 = "growth_white"
    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: circle2,
        desc: `Chirchita thrives across semi-arid and dry tropical regions of India. It tolerates poor soil fertility and rocky conditions. The plant prefers sunny locations and is highly drought-tolerant. <br> <br> It is increasingly being sourced for herbal formulations, making it valuable for bulk collectors and herbal companies. Cultivation on marginal lands allows farmers to monetize uncultivated areas while aiding ecological restoration.`,
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


export const Yavasa = () => {
    const main_heading = "Yavasa (Alhagi maurorum)"
    const shortinfo = "<b>The Drought Warrior of Arid Lands</b> <br/> Yavasa is a thorny shrub that thrives in dry and saline soils. It is traditionally used in desert medicine and is known for its resilience in extremely harsh environments."
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

      {
        image: key9,
        title: 'Drought Resistance: Survives with minimal water, ideal for arid and semi-arid zones.',

      },
      {
        image: key10,
        title: 'Medicinal Value: Used for urinary disorders, wound healing, and digestive issues.',
      },
      {
        image: key11,
        title: 'Livelihood Support: Acts as a fodder source during drought.',
      },
      {
        image: key12,
        title: 'Soil Reclamation: Helps improve degraded and saline lands.',
      },

    ];

    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: circle3,
        desc: `Yavasa grows in Rajasthan, Gujarat, and other dry zones. It thrives in sandy, saline, and rocky soils. It requires direct sunlight and withstands very high temperatures. <br/><br/> Yavasa's resilience makes it perfect for reclaiming wastelands. It supports herbal industries and drought-resilient farming. Saplings are in demand for greening programs under desert development schemes.`,

      },

    ];

    return (
      <>

        <section className="py-12 pt-16 md:pt-20  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
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



export const Kanghi = () => {
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const custom_class = "white_grid grid_padding"
    const main_heading = "Kanghi (Abutilon indicum)"
    const shortinfo = `<b>The Gentle Healer with Golden Blooms</b> <br/> Kanghi, also called Indian Mallow, is a soft-wooded shrub with velvety leaves and yellow bell-shaped flowers. It’s a common ingredient in rural medicine and home gardens.`
    const whyChooseData = [
      {
        image: key5,
        title: 'Multi-purpose Use: Treats coughs, wounds, inflammation, and muscle pain.',
      },
      {
        image: key6,
        title: 'Aesthetic Value: Attractive flowers make it suitable for medicinal-cum-ornamental gardens.',
      },
      {
        image: key7,
        title: 'Livestock Value: Tender shoots are used as fodder.',
      },
      {
        image: key8,
        title: 'Pollinator Plant: Supports bees and butterflies.',
      },

    ];

    const custom_class1 = "growth_white"
    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: circle2,
        desc: `Kanghi grows in a variety of conditions—humid, dry, and even shaded areas. It prefers loamy or clay soils and performs well in most Indian states. <br> <br> Used in Ayurvedic and Unani systems, Kanghi supports the herbal trade. It is easy to propagate and grow, making it a good addition to kitchen gardens, herbal clusters, and homestead farming.`,
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



export const Why = () => {
    const heading = "Why Cultivate Shrubs with Athulye Krishi Vana?"
    const fruitData = [
      {
        title: "Multifunctional Plants",
        image: choose1,
        flip: "These shrubs offer medicinal, ecological, and economic functions. They’re a key element in sustainable land use."
      },
      {
        title: "Restore Marginal Lands",
        image: choose2,
        flip: "Many of these species grow in degraded, rocky, or saline soils, turning unused land into productive green zones."
      },
      {
        title: "Resilient and Low Input",
        image: choose3,
        flip: "Once established, these shrubs require little care, chemical input, or water, making them ideal for climate-resilient agriculture."
      },
      {
        title: "Income from Herbal Products",
        image: choose4,
        flip: "Leaves, roots, and extracts can be sold to herbal medicine manufacturers. Dried herbs, oils, and powders have growing domestic and export markets."
      },
      {
        title: "Community Herbal Gardens",
        image: choose5,
        flip: "These shrubs are ideal for panchayat-level herbal parks and school-based learning gardens."
      },


    ];
    return (
      <>
        <Productlist heading={heading} fruitData={fruitData} />

      </>
    )
}

