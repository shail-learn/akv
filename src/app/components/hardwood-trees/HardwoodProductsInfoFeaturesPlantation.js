import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/hardwood/banner.webp";
import product1 from "../../../assets/images/hardwood/product1.webp";
import product2 from "../../../assets/images/hardwood/product2.webp";
import product3 from "../../../assets/images/hardwood/product3.webp";
import Image from 'next/image';
import farmer from "../../../assets/images/hardwood/indian-farmer.webp";

import { Gridbox } from '../Gridbox';
import why1 from "../../../assets/images/hardwood/why1.webp";
import why2 from "../../../assets/images/hardwood/why2.webp";
import why3 from "../../../assets/images/hardwood/why3.webp";
import why4 from "../../../assets/images/hardwood/why4.webp";
import why5 from "../../../assets/images/hardwood/why5.webp";

import image1 from "../../../assets/images/hardwood/img1.webp";
import image2 from "../../../assets/images/hardwood/img2.webp";
import image3 from "../../../assets/images/hardwood/img3.webp";
import image4 from "../../../assets/images/hardwood/img4.webp";

import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';


export const Hardwood = () => {
    const text = {
        banner: banner,
        heading: `Hardwood Trees: Strong & Durable Timber for Sustainable Agroforestry`,

        title: 'At Atulye Krishi Vana, we are committed to cultivating high-value hardwood species that offer exceptional durability, strength, and versatility. ',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>


    )
}



export const Products = () => {
    const timberData = [
        {
            title: "Arjun",
            subtitle: "The Guardian of Health & Timber",
            image: product1,
            scientific: "Terminalia Arjuna",
        },
        {
            title: "Bija",
            subtitle: "The Durable Healer",
            image: product2,
            scientific: "Vijaysar",
        },
        {
            title: "Red Sanders",
            subtitle: "The Precious Timber",
            image: product3,
            scientific: "Pterocarpus Santalinus",
        },
    ];

    return (
        <>
            <section className="bg-[#1B453C] py-8 md:pb-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {timberData.map((item, index) => (
                        <div key={index} className="bg-[#D9D9D966] rounded-xl p-4 text-center shadow-md">
                            <h2 className="text-xl md:text-2xl font-bold text-white py-2 rounded">{item.title}</h2>
                            <p className="text-base text-white mt-1">{item.subtitle}</p>
                            <div className="mt-3">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full md:h-48 object-cover rounded shadow-sm"
                                />
                            </div>
                            <p className="text-base font-semibold text-[#1B453C] mt-3 ">
                                ({item.scientific})
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}


export const Info = () => {
    const basketData = {
        note: "Our project competes on a global scale, leveraging state-of-the-art technology to enhance productivity and improve the livelihoods of local farming communities. Among the valuable hardwood species we cultivate are Bija (Vijaysar) (Pterocarpus marsupium), Red Sanders (Pterocarpus santalinus), and Arjun (Terminalia arjuna)—each offering immense economic and medicinal benefits. Our 500-acre sustainable agroforestry venture in Madhya Pradesh near Bhopal focuses on premium hardwood trees, integrating advanced farming techniques with environmental stewardship. ",
        image: farmer,
    };
    return (
        <>

            <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C]">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <div className="flex flex-col-reverse justify-between lg:flex-row  items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <p className="mt-0 md:mt-4 text-white text-justify">{basketData.note}</p>
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
        </>
    )
}


export const Features = () => {
    const main_heading = "Bija (Vijaysar) - The Durable Healer"
    const shortinfo = "Bija, also known as Vijaysar, is a highly durable hardwood prized for its strength and medicinal properties. Native to India, this tree has been an integral part of traditional medicine and woodworking for centuries. "
    const whyChooseData = [
        {
            image: why1,
            title: 'Strength & Durability:',
            description: ' Resistant to termites and decay, making it an ideal choice for furniture, flooring, and construction',
        },
        {
            image: why2,
            title: 'Medicinal Benefits: ',
            description: 'Used in Ayurveda for diabetes management, liver health, and skin disorders',
        },
        {
            image: why3,
            title: 'Eco-friendly Applications:',
            description: ' Its wood is often used in making tumblers for storing medicinal water.',
        },
        {
            image: why4,
            title: 'Aesthetic Appeal:',
            description: ' Rich reddish-brown wood, great for décor and crafts.',
        },
        {
            image: why5,
            title: 'Cultural Value: ',
            description: 'Sacred in Indian traditions; used in rituals and remedies.',
        },
    ];

    return (
        <>
            <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
                <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
                    <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
                        {main_heading}
                    </h2>
                    <p className="mt-0 md:mt-4 text-white">{shortinfo}</p>
                </div>
            </section>
            <Gridbox heading="Key Features & Uses" data={whyChooseData} />

        </>
    )
}



export const Plantation = () => {
    const GrowthHeading = "Plantation & Growing Requirements";
    const slides = [
        {

            image: image1,
            title: "Soil Type: ",
            desc: "Prefers well-drained, loamy soil with a slightly acidic to neutral pH.",

        },
        {

            image: image2,
            title: "Climate:",
            desc: "Grows best in tropical and subtropical climates with moderate rainfall.",
        },
        {

            image: image3,
            title: "Spacing:",
            desc: "Requires 5m x 5m spacing for optimum growth and canopy development.",
        },

        {

            image: image4,
            title: "Irrigation:",
            desc: "Regular watering in the initial years; once matured, it becomes drought-resistant.",
        },


    ];

    return (
        <>

            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
            />

        </>
    )
}
