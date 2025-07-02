import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/agriculture/banner-new.webp";
import { Gridbox } from '../Gridbox';
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import info from "../../../assets/images/digestive/info.webp";
import Image from 'next/image';
import key1 from "../../../assets/images/agriculture/key1.webp";
import key2 from "../../../assets/images/agriculture/key2.webp";
import key3 from "../../../assets/images/agriculture/key3.webp";
import key4 from "../../../assets/images/agriculture/key4.webp";
import image1 from "../../../assets/images/agriculture/circle1.webp";
import circle2 from "../../../assets/images/agriculture/circle2.webp";
import key5 from "../../../assets/images/agriculture/key5.webp";
import key6 from "../../../assets/images/agriculture/key6.webp";
import key7 from "../../../assets/images/agriculture/key7.webp";
import key8 from "../../../assets/images/agriculture/key8.webp";

import key9 from "../../../assets/images/agriculture/key9.webp";
import key10 from "../../../assets/images/agriculture/key10.webp";
import key11 from "../../../assets/images/agriculture/key11.webp";
import key12 from "../../../assets/images/agriculture/key12.webp";
import circle3 from "../../../assets/images/agriculture/circle3.webp";


import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/digestive/choose1.webp";
import choose2 from "../../../assets/images/digestive/choose2.webp";
import choose3 from "../../../assets/images/agriculture/why3.webp";
import choose4 from "../../../assets/images/digestive/choose4.webp";
import choose5 from "../../../assets/images/agriculture/why5.webp";

import { FaqSlider } from '../FaqSlider';

export const Agricultural = () => {
    const text = {
        banner: banner,
        heading: `Nutritious, Aromatic, and Profitable: Home-Grown Staples for Self-Reliance and Smallholder Income`,

        title: 'Agricultural and kitchen crops form the foundation of self-sufficient food systems. These crops—often grown in home gardens, small plots, or intercropped on farms—serve dual purposes: meeting household nutritional needs and offering high-value produce for local markets.',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}



export const Dhaniya = () => {
    const basketData = {
        note: "With minimal inputs, they provide culinary flavor, medicinal benefits, and dietary diversity, especially in rural and peri-urban landscapes. Under the Atulye Krishi Vana initiative, we encourage the cultivation of easy-to-grow, fast-yielding, and economically important kitchen crops such as Dhaniya (Coriandrum sativum), Pyaj (Allium cepa), and Lashun (Allium sativum). These crops are suited to a variety of Indian agro-climatic conditions and can be integrated into kitchen gardens, terrace farms, smallholder plots, or organic produce clusters. ",
        image: info,
    };

    const main_heading = "Dhaniya (Coriandrum sativum)"
    const shortinfo = "<b>The Versatile Herb with Dual Harvests</b> <br/> Dhaniya, or coriander, is a fast-growing herb widely used in Indian cuisine. Both its fresh green leaves and dried seeds are culinary staples, making it a highly versatile and profitable kitchen crop."
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

        {
            image: key1,
            title: 'Dual Use',
            description: "Leaves (coriander) and seeds (dhania) are both edible and marketable."

        },
        {
            image: key2,
            title: 'Quick Maturity',
            description: "Ready to harvest leaves in 30–35 days; seeds in 90–110 days."

        },
        {
            image: key3,
            title: 'Low Input',
            description: "Requires little fertilizer or pest control."

        },
        {
            image: key4,
            title: 'Multiple Sowing Seasons',
            description: "Can be grown in rabi and early kharif seasons."

        },

    ];

    const GrowthHeading = "Agro-climatic Suitability";
    const slides = [
        {

            image: image1,
            desc: `Dhaniya thrives in cool, dry weather and prefers loamy, well-drained soil. It is grown widely across India—especially in Rajasthan, Madhya Pradesh, Gujarat, Tamil Nadu, and Andhra Pradesh.
        `,

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

                applicationsData={[
                    "Home kitchen gardens and terrace pots",
                    "Bulk seed production for spice markets",
                    "Green leaf supply for urban vendors",
                    "Intercropping with vegetables and fruit trees"
                ]}
            />

        </>
    )
}


export const Pyaj = () => {
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const custom_class = "white_grid grid_padding"
    const main_heading = "Pyaj (Allium cepa)"
    const shortinfo = `<b>The Culinary Essential of Every Indian Meal</b> <br/> Onion is a core kitchen crop with high domestic and commercial demand. Grown in multiple seasons and consumed both fresh and dried, Pyaj is a staple that every smallholder can grow with strong market potential.`
    const whyChooseData = [
      {
        image: key5,
        title: 'Daily Use Crop',
        description:"Integral to Indian cooking and chutneys."
      },
      {
        image: key6,
        title: 'Storage Ready',
        description:"Bulbs can be stored or sold post-harvest."

      },
      {
        image: key7,
        title: 'Value Addition',
        description:"Used in pickles, powders, and condiments."

      },
      {
        image: key8,
        title: 'Export-Oriented',
        description:"High demand from Gulf and Southeast Asian markets."

      },

    ];

    const custom_class1 = "growth_white"
    const GrowthHeading = "Agro-climatic Suitability";
    const slides = [
      {

        image: circle2,
        desc: `Onions prefer mild temperatures with moderate sunlight. Well-drained sandy loam soils with good organic content are ideal. Cultivated widely in Maharashtra, Karnataka, Tamil Nadu, Gujarat, and Bihar.`,
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
          applicationsData={[
            "Market-focused commercial cultivation",
            "Intercropping in agroforestry or orchard models",
            "Culinary supply for hotels, institutions, and local vendorss",
            "Small-scale exports and food processing supply chains"
        ]}
        />

      </>
    )
}


export const Lashun = () => {

    const main_heading = "Lashun (Allium sativum)"
    const shortinfo = "<b>The Aromatic Healer and Flavor Enhancer</b> <br/> Garlic, or Lashun, is a pungent bulb crop known for its culinary flavor and therapeutic value. It offers high returns due to its concentrated aroma, long shelf life, and demand in traditional medicine."
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

        {
            image: key9,
            title: 'Medicinal Use',
            description: "Known for anti-inflammatory, digestive, and immunity-boosting properties."

        },
        {
            image: key10,
            title: 'Market Value',
            description: "Higher price per kg compared to many vegetables."

        },
        {
            image: key11,
            title: 'Easy Storage',
            description: "Can be sun-dried and stored for months."

        },
        {
            image: key12,
            title: 'Pest-Repellent',
            description: "Natural pest deterrent in crop rotations."

        },

    ];

    const GrowthHeading = "Agro-climatic Suitability";
    const slides = [
        {

            image: circle3,
            desc: `Garlic grows best in cool, dry conditions with plenty of sunshine. Prefers sandy loam soils rich in organic matter. Cultivated in Madhya Pradesh, Rajasthan, Gujarat, Punjab, and Uttar Pradesh.
        `,

        },

    ];

    return (
        <>
            <section className="py-16  px-4 md:px-8 md:pt-20 lg:px-16 bg-[#1B453C] text-center">
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

                applicationsData={[
                    "Farmgate sale of bulbs and dried garlic",
                    "Garlic paste and oil production in SHG enterprises",
                    "Herbal and ayurvedic product markets",
                    "Home gardens for culinary and medicinal use"
                ]}
            />

        </>
    )
}



export const Why = () => {
    const heading = "Why Grow Agricultural & Kitchen Crops with Atulye Krishi Vana?"
    const fruitData = [
      {
        title: "Self-Reliance in Food and Flavor",
        image: choose1,
        flip: "Growing daily-use crops like dhaniya, pyaj, and lashun ensures consistent kitchen access and reduces market dependency."
      },
      {
        title: "High Value from Small Plots",
        image: choose2,
        flip: "These crops thrive in small spaces and give multiple harvests or long shelf-life produce, ideal for land-scarce households."
      },
      {
        title: "Income from Niche Markets",
        image: choose3,
        flip: "There is growing demand for fresh coriander, organic garlic, and desi onion varieties among health-conscious and export buyers."
      },
      {
        title: "Organic and Sustainable",
        image: choose4,
        flip: "These crops perform well with compost and natural pest deterrents, supporting low-input and organic farming."
      },
      {
        title: "Women-Led Cultivation",
        image: choose5,
        flip: "Easy to manage and quick to grow, kitchen crops are ideal for women-led home farming and backyard enterprises."
      },


    ];
    return (
      <>
        <Productlist heading={heading} fruitData={fruitData} />

      </>
    )
}



export const Atulye = () => {
    const heading = "Atulye Krishi Vana’s Support Ecosystem";
    const title= "We provide training, material, and market linkages for community groups, SHGs, and progressive farmers to cultivate high-demand kitchen crops."
    const subtitle = "Our Services Include: "
    const className = "slider_height height_300";

    const card = [
      {
        title: "Quality Seed Supply",
        description: "Certified seeds of coriander, onion sets, and garlic cloves."
      },
      {
        title: "Home Garden Kits",
        description: "Packaged starter kits for families and schools."
      },
      {
        title: "Training Modules",
        description: "On seed sowing, pest control, harvesting, and crop rotation."
      },
      {
        title: "Packaging Support",
        description: "Advice on branding and value-added product creation."
      },
      {
        title: "Market Linkages",
        description: "Access to FPOs, herbal vendors, urban retail chains, and exporters."
      },
      {
        title: "Demonstration Plots",
        description: "Learning gardens in schools, temples, and panchayat nurseries."
      },


    ];
    return (
      <>
        <FaqSlider
          classname={className}
          className="shailendra"
          card={card}
          heading={heading}
          title1={title}
          subtitle={subtitle}
        />


      </>
    );
}
