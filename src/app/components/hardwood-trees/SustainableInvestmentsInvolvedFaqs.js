import Image from 'next/image';
import React from 'react'
import icon1 from "../../../assets/images/hardwood/icon1.svg";
import icon2 from "../../../assets/images/hardwood/icon2.svg";
import icon3 from "../../../assets/images/hardwood/icon3.svg";
import icon4 from "../../../assets/images/hardwood/icon4.svg";
import atulya from "../../../assets/images/hardwood/atulya.webp";
import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/hardwood/choose1.webp";
import choose2 from "../../../assets/images/hardwood/choose2.webp";
import choose3 from "../../../assets/images/hardwood/choose3.webp";
import choose4 from "../../../assets/images/hardwood/choose4.webp";
import choose5 from "../../../assets/images/hardwood/choose5.webp";
import choose6 from "../../../assets/images/hardwood/choose6.webp";

import PartnerBg from "../../../assets/images/hardwood/bgimg.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';

export const Sustainable = () => {
    const heading = "Atulye Krishi Vana’s Sustainable Agroforestry Approach"
    const agroItems = [
        {
            icon: icon1,
            title: "Scientific Spacing & Plantation",
            info: "Optimized Tree Spacing to enhance sunlight penetration and nutrient absorption. Mixed Cultivation with nitrogen-fixing plants to enrich the soil.",
        },
        {
            icon: icon2,
            title: "Soil Health & Fertility Management",
            info: "Organic Mulching to retain moisture and enhance soil fertility. Bio-fertilizers and Microbial Inoculants to boost tree growth naturally.",
        },
        {
            icon: icon3,
            title: "Smart Irrigation & Water Conservation",
            info: "Drip Irrigation & Rainwater Harvesting to ensure efficient water use. Soil Moisture Monitoring to optimize watering schedules.",
        },
        {
            icon: icon4,
            title: "Community & Environmental Impact",
            info: "Employment & Skill Development for local farmers. Carbon Sequestration Initiatives to combat climate change",
        },
    ];
    return (
        <>
            <section className="bg-[#ECECEC] py-12 px-4">
                <div className="max-w-7xl mx-auto md:mr-0 flex flex-col lg:flex-row items-center gap-8">
                    {/* Left Content */}
                    <div className="flex-1 md:order-1 order-2">
                        <h2 className="text-3xl md:text-4xl text-center font-medium text-[#1B453C] mb-8 md:mb-12">
                            {heading}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                            {agroItems.map((item, index) => (
                                <div key={index} className="text-[#1B453C] text-center">
                                    <Image src={item.icon} alt={item.title} className=' h-10 md:h-12 object-contain mx-auto' />

                                    <h3 className="text-lg font-medium md:text-xl py-3">{item.title}</h3>
                                    <p className="text-[15px] text-black">{item.info}</p>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 md:order-2 order-1">

                        <Image
                            src={atulya}
                            alt="Agroforestry Hand"
                            width={600}
                            height={400}
                            className="w-full h-full md:-mt-24"
                            priority
                        />
                    </div>
                </div>
            </section>
        </>
    )
}




export const Investments = () => {
    const heading = "Why Choose Atulye Krishi Vana for Hardwood Investments?"
    const fruitData = [
        {
            title: "Sustainable & Ethical Practices",
            image: choose1,
        },
        {
            title: "State-of-the-Art Farming Techniques",
            image: choose2,
        },
        {
            title: "Expert Advisory & Support",
            image: choose3,
        },
        {
            title: "High-Value Hardwood Species",
            image: choose4,
        },
        {
            title: "Global Quality Standards",
            image: choose5,
        },
        {
            title: "End-to-End Transparency",
            image: choose6,
        },

    ];
    return (
        <>
            <Productlist heading={heading} fruitData={fruitData} />

        </>
    )
}



export const Involved = () => {
    const heading = "Get Involved – Invest in Sustainable Hardwood with Us!";
    const description =
        "Join us today and be a part of India’s leading sustainable forestry movement.";

    const subdes =
        "  📞  Contact Us Now to learn more about investment opportunities,bulk tree purchases, or partnership inquiries!";

    return (
        <section
            className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full my-8 md:my-12"
            style={{ backgroundImage: `url(${PartnerBg.src})` }}
        >
            {/* Content */}
            <div className="relative z-10 h-full flex  px-4 md:px-20 max-w-5xl">
                <div className="max-w-7xl text-white text-left pl-3 md:pl-[4rem] mt-5">
                    <h2 className="md:w-10/12 w-full text-3xl md:text-4xl leading-snug font-bold mb-10 md:mb-20 redhat">
                        {heading}
                    </h2>
                    <p
                        className="mb-4 text-sm md:text-base md:w-2/3 w-full"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>

                    <p className="text-sm md:text-base md:w-2/3 w-full">{subdes}</p>
                </div>
            </div>
        </section>
    );
}


export const Faqs = () => {
    const Faqheading =
    "How long does it take for these hardwood trees to mature for timber harvesting?    ";
  const Faqdescription = `Bija (Vijaysar) takes about 30-50 years to fully mature, making it one of the slower-growing but highly valuable hardwoods. Red Sanders, known for its rich red heartwood, requires 20-25 years to develop high-quality timber. Arjun, widely used for both timber and medicinal purposes, reaches harvestable maturity in 15-20 years. Growth rates depend on factors like soil fertility, climate, and irrigation. While these trees take time to mature, they offer significant returns on investment, making them ideal for long-term commercial forestry and conservation projects aimed at sustainable timber harvesting and environmental restoration.`;
  const FaqsData = [
    {
      question: "Are these trees resistant to pests and diseases?",
      answer:
        "Yes, all three species have natural resistance to many pests and diseases, reducing the need for chemical treatments. Bija (Vijaysar) produces a strong, durable wood that is naturally termite-resistant. Red Sanders has dense, oily heartwood that repels borers and insects, making it highly durable. Arjun, due to its medicinal properties, remains largely free from common fungal infections. However, young trees may require protection from grazing animals and occasional fungal threats in humid conditions. Regular pruning and monitoring help maintain healthy growth, ensuring high timber quality while minimizing environmental impact through reduced pesticide use.",
    },
    {
      question:
        "Can these trees be grown in urban or backyard settings?",
      answer:
        "These trees require large open spaces due to their size and root spread, making them less ideal for small backyards. However, Arjun is sometimes used in urban settings as an avenue tree due to its shade and medicinal benefits. Red Sanders is better suited for protected plantations, as it requires legal permissions in many regions. Bija, being a large deciduous tree, is more suitable for agroforestry or large-scale forestry projects. If planted in urban areas, they require deep, well-drained soil and periodic pruning to prevent overcrowding and optimize growth while maintaining ecological balance.        ",
    },
    {
      question: "What is the environmental impact of cultivating these trees?",
      answer:
        "These hardwood trees provide numerous environmental benefits, including carbon sequestration, soil conservation, and biodiversity enhancement. Red Sanders, classified as an endangered species, plays a crucial role in afforestation and restoring degraded lands. Bija (Vijaysar) improves soil fertility by shedding nutrient-rich leaves, benefiting surrounding crops. Arjun, often found along riverbanks, prevents erosion and stabilizes soil. Large-scale plantations contribute to reducing greenhouse gases, improving air quality, and creating sustainable ecosystems. Their deep root systems also enhance groundwater recharge, making them valuable assets in ecological conservation and sustainable forestry initiatives aimed at combating deforestation and climate change.",
    },
    {
      question: "Are these trees suitable for commercial agroforestry?",
      answer:
        "Yes, Bija, Red Sanders, and Arjun are excellent choices for sustainable agroforestry projects due to their high market value and long-term benefits. Farmers can integrate them with crops like medicinal herbs, legumes, or shade-tolerant species to maximize land productivity. These trees require minimal maintenance after establishment, offering consistent returns through timber sales. Red Sanders, due to its rarity, commands a premium price in the international market. Agroforestry models using these species contribute to soil health, carbon sequestration, and ecosystem balance, making them a sustainable and profitable choice for commercial forestry investments and land-use optimization strategies.",
    },
    {
        question: "Do these trees require special care or maintenance?",
        answer:
          "Once established, these trees require minimal maintenance compared to fast-growing softwoods. However, during their early years, proper care is essential to ensure healthy growth. Regular watering is required for young saplings, particularly in dry seasons, until deep roots develop. Pruning helps shape the tree and prevent overcrowding. Occasional organic fertilizers can enhance growth, though these trees generally thrive in nutrient-rich soils. Pest and disease management is mostly preventive, relying on organic solutions rather than chemicals. Proper spacing between trees ensures adequate sunlight and airflow, reducing fungal infections and promoting optimal timber quality for long-term commercial use.",
      },
  ];

  return (
    <>
      <FaqsLayout
        heading={Faqheading}
        description={Faqdescription}
        faqs={FaqsData}
      />
    </>
  );
}
