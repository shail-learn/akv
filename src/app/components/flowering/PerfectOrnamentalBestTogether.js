import Image from 'next/image'
import React from 'react'
import harvestimg from "../../../assets/images/flower/Premium.webp";
import SpeciesSlider from '../SpeciesSlider';
import image1 from "../../../assets/images/flower/image1.webp";
import image2 from "../../../assets/images/flower/image2.webp";
import image3 from "../../../assets/images/flower/image3.webp";
import image4 from "../../../assets/images/flower/image4.webp";
import image5 from "../../../assets/images/flower/image5.webp";
import Plant from "../../../assets/images/flower/future.webp";
import { MdCheckCircle } from "react-icons/md";
import grow from "../../../assets/images/flower/grow.webp";
import Link from 'next/link';

export const Perfect = () => {
    const heading = "Perfect For"
    const points = [
        { item: "Terrace & home gardens" },
        { item: "Farm borders & walkways" },
        { item: "Pollinator zones" },
        { item: "Decorative religious or ceremonial spaces" },
    ]
    return (
        <>

            <section className="py-14   lg:py-20">
                <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
                    <div className='w-[95%] md:w-[92%] mx-auto'>
                        <div className="relative rounded-lg">
                            <Image
                                src={harvestimg}
                                alt="Forest Image"
                                className="w-full md:h-full object-cover h-60 rounded-2xl"
                            />

                            <div className="absolute redhat w-3/5 md:w-1/3 h-28 flex items-center top-8 -left-3 md:-left-8 bg-[#EDA809] text-white py-3 px-6 rounded-md  ">
                                <h2 className='lg:leading-snug  text-black redhat text-left border-l border-white border-opacity-20 ps-3 text-2xl md:text-4xl  font-normal'>
                                    {heading}
                                </h2>

                            </div>
                            <div className="absolute top-8 md:-right-8 -right-3  bg-[#EDA809] md:w-16 w-10 h-28 rounded-md"></div>
                        </div>
                        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-1 mt-4'>
                            {points.map((item, index) => (
                                <p className='text-base redhat font-semibold   text-black my-2' key={index}>
                                    {item.item}
                                </p>
                            ))}

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}


// export const Ornamental = () => {
//     const data = [
//         {
//             image: image1,
//             name: "Areca Palm",
//             link: "/agroForestry/mahagony",
//             linkText: "A tropical touch for interiors and entryways",
//         },
//         {
//             image: image2,
//             name: "Song of India",
//             link: "/agroForestry/timber/red-sandalwood",
//             linkText: "Air-purifying and elegant",

//         },
//         {
//             image: image3,
//             name: "Croton ",
//             link: "/agroForestry/gamhar",
//             linkText: "Bold leaves in shades of red, orange, and green",

//         },
//         {
//             image: image4,
//             name: "Bougainvillea",
//             link: "/agroForestry/gamhar",
//             linkText: "Drought-tolerant and dramatic"
//         },
//         {
//             image: image5,
//             name: "Ficus (Bonsai/Fiddle Leaf",
//             link: "/agroForestry/gamhar",
//             linkText: "A sculptural beauty"
//         },
//     ];
//     return (
//         <>
//             <SpeciesSlider data={data} />
//         </>
//     )
// }



export const Best = () => {
    const heading = `Best Used In`

    const futurePlans = [
        `<b>Corporate gardens</b>`,
        `<b>Indoor & office decor</b>`,
        `<b>Landscape architecture</b>`,
        `<b>Gated communities & resorts</b>`,
    ];


    return (
        <>

            <section className="text-center md:text-left  pb-16 pt-6 lg:pb-20 lg:pt-4">
                <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10">

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-black mb-4 md:mb-20"
                            dangerouslySetInnerHTML={{ __html: heading }}
                        />
                        {/* List using map() */}
                        <ul className="mt-6 space-y-4">
                            {futurePlans.map((plan, index) => (
                                <li key={index} className="flex  text-left space-x-3">
                                    <span className="w-6 h-6 text-[#1B453C] flex items-center justify-center rounded-full">
                                        <MdCheckCircle className='w-6 h-6' />
                                    </span>
                                    <p
                                        className="text-[#141414] redhat"
                                        dangerouslySetInnerHTML={{ __html: plan }}
                                    />
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className=" w-full md:w-1/2">
                        <Image
                            src={Plant}
                            alt="Planting"
                            width={200}
                            height={200}
                            className="w-full h-full"
                        />

                    </div>
                </div>
            </section>
        </>
    )
}



export const Together = () => {
    const growData = {
        "heading": "Let’s Green Your World Together",
        "paragraphs": [
            "Our experts can guide you based on region, climate, and use-case. We support individual gardeners, architects, nurseries, and municipalities.",

        ],

        "image": grow
    }
    return (
        <>
            <section className="bg-[#f1f1f1] py-10 px-4">
                <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 flex flex-col-reverse md:flex-row items-center gap-8">
                    {/* Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl redhat font-semibold text-center md:text-left text-[#1B453C]  mb-4">
                            {growData.heading}
                        </h2>
                        <p className='text-black py-4 md:text-lg text-base font-medium mb-8 md:mb-20'>Need help selecting the right plants?</p>
                        {growData.paragraphs.map((p, index) => (
                            <p key={index} className="text-black mb-2">
                                {p}
                            </p>
                        ))}
                        <div className='mt-12'>
                            <Link href="https://atulye-foundation.org/" target='_blank'
                                className="text-lg text-[#1B453C] font-normal px-4 py-2 border border-[#1B453C]">
                              Visit Our Nursery
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="overflow-hidden  w-[350px] h-[350px] relative mx-auto md:mx-0 md:ml-auto">
                            <Image
                                src={growData.image}
                                alt="Grow with us"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-[50%] shadow-lg"
                            />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
