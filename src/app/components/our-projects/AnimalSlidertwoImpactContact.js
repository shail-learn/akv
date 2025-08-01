"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageleft from "../../../assets/images/contract-farming/fodder.webp";
import image02 from "../../../assets/images/projects/Bael.webp";
import image03 from "../../../assets/images/projects/guest.webp";
import image04 from "../../../assets/images/projects/Fruit.webp";
import image05 from "../../../assets/images/projects/Swayambhu.webp";
import image06 from "../../../assets/images/projects/Rasayanshala.webp";
import image07 from "../../../assets/images/projects/Mukund.webp";
import image08 from "../../../assets/images/projects/Nursery.webp";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination, Navigation, Autoplay } from 'swiper/modules';


import bgsupport from '../../../assets/images/contract-farming/bg-img.webp'
import support1 from '../../../assets/images/ourproject/support1.webp'
import support2 from '../../../assets/images/ourproject/support2.webp'
import support3 from '../../../assets/images/contract-farming/support3.webp'
import support4 from '../../../assets/images/ourproject/support4.webp'
import middleimg from '../../../assets/images/contract-farming/long.svg'
import contactbg from "../../../assets/images/training/join-bg.webp";

export const Animal = () => {
    const heading = "Animal Sanctuaries"
    const mission = [
        {

            title: "Shri Malook Gaushala",
            description: `Sheltered pastures for native cattle <br/>  A sanctuary promoting ethical cattle care and rural livelihoods.`,
            link: "/our-projects/shri-malook-gaushala"
        },
        {
            title: "Shri Bhairav Sadan (Dog Shelter)",
            description: `Compassionate haven for canines <br/> A clean, safe space dedicated to stray and abandoned dogs.`,
            link: "/our-projects/shri-bhairav-sadan"

        },
        {
            title: "Shri Pabuji Ushtralaya (Camel Shade)",
            description: `Sandstone shelter honoring Rajasthan’s heritage animal A resting abode for camels, reflecting desert culture and care.`,
            link: "/our-projects/shri-pabuji-ushtralaya"

        },

    ]
    return (
        <>
            <section className=' relative md:mt-0 -mt-8' >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-10'>
                    <div className='flex md:flex-col flex-col lg:flex-row justify-between   gap-8 md:gap-10'>
                        <div className='md:w-4/12  w-full  w-12/12'>
                            <div className='md:max-w-[80%]'>
                                <h2 className='text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold  text-center md:text-left redhat text-[#1B453C] mb-6'>{heading}</h2>

                            </div>
                        </div>
                        <div className='md:w-8/12  w-full  w-12/12'>
                            <div className='flex md:flex-col flex-col lg:flex-row justify-between gap-6 md:gap-6'>
                                {mission.map((item, index) => (
                                    <div className='md:w-4/12 w-full  w-12/12 ' key={index}>
                                        <div className='p-8  bg-[#1A3232] rounded-md text-white h-full'>
                                            <div className='h-[75%]'>
                                                <h2 className='text-lg md:text-xl  font-medium'>{item.title}</h2>
                                                <p className='text-normal text-base lg:text-[17px] pt-4 redhat' dangerouslySetInnerHTML={{ __html: item.description }} />
                                            </div>

                                            <div className="my-3 pt-4 mt-full text-center">
                                                <Link href={item.link}><span className="inline-block border border-white text-white text-base md:text-[17px] px-6 py-2 hover:bg-white hover:text-[#1A3232] transition"  >Learn More</span></Link></div>
                                        </div>
                                    </div>
                                ))}



                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export const Slidertwo = () => {
    const heading1 = "Wellness & Living Gardens"
    const heading2 = "Science & Sustainability"

    const whychoose = [

        {
            image: imageleft,
            title: 'Shri Aushadh Manav (Human Body Garden)  ',
            description: 'Herb layout shaped like a human anatomy <br/>  Each organ-shaped patch features a corresponding medicinal plant.   '
        },
        {
            image: image02,
            title: `Bael Van  `,
            description: 'Grove of sacred Bael trees <br/>  A spiritually symbolic orchard known for its healing and cultural value.  '
        },
        {
            image: image03,
            title: `Guest Garden  `,
            description: 'Welcome garden with curated plant displays <br/> A beautifully maintained space for guests and dignitaries to reflect and relax. '
        },
        {
            image: image04,
            title: `Shri Narayan Falodyan (Fruit Garden) `,
            description: 'Mixed orchard featuring tropical fruits <br/> Encouraging nutrition, self-reliance, and biodiversity preservation.  '
        },
        {
            image: image05,
            title: `Shri Swayambhu Vatika `,
            description: 'Self-sustaining native plant ecosystem <br/> A naturally balanced grove highlighting regenerative design.'
        },

    ]

    const whychoose2 = [

        {
            image: image06,
            title: 'Shri Rasayanshala (Vermicompost Unit)  ',
            description: 'Compost beds and soil lab <br/> A hub for organic waste conversion and farmer education.'
        },
        {
            image: image07,
            title: `Shri Mukund Mausam Vedhshala (AgroMet Station) `,
            description: 'Climate monitoring tower with sensors <br/> Facilitates precision farming with real-time agro-weather insights.  '
        },
        {
            image: image08,
            title: `Shree Venu Nursery  `,
            description: 'Rows of saplings and shaded greenhouses <br/>  A vital source for plant propagation and afforestation efforts.'
        },


    ]

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.on("slideChange", () => {
                setIsBeginning(swiperInstance.isBeginning);
                setIsEnd(swiperInstance.isEnd);
            });
        }
    }, [swiperInstance]);

    return (
        <>
            <section className='pt-10 pb-12 lg:py-16 lg:pt-20'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>

                    <div className='flex  md:flex-col lg:flex-row flex-col-reverse justify-between  gap-8 md:gap-10'>
                        <div className='md:w-6/12  w-full  w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold text-center md:text-left redhat text-[#1B453C] mb-6'>{heading1}</h2>
                            <div className="relative w-full">
                                <Swiper
                                    onSwiper={setSwiperInstance}
                                    spaceBetween={30}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    pagination={{
                                        el: ".custom-pagination3",
                                        clickable: true,
                                    }}
                                    modules={[Grid, Pagination, Navigation]}
                                    grid={{ rows: 1, fill: "row" }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                        },
                                        1024: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                    className="mySwiper style2_slider"
                                >
                                    {whychoose.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div
                                                className="flex gap-4 md:gap-6 flex-col h-[300px] rounded-2xl p-8 lg:p-12"
                                                style={{
                                                    background: `url(${item.image.src}) center center / cover no-repeat`,
                                                }}
                                            >
                                                <div className='absolute top-0 left-0 w-full rounded-2xl h-full bg-black opacity-30'></div>
                                                <div className='relative z-10 grid gap-4 md:gap-6 flex-col h-[300px] flex-wrap'>
                                                    <h2
                                                        className="text-2xl md:leading-[1.3] md:text-3xl h-full font-semibold redhat text-white mb-10 md:mb-14"
                                                        dangerouslySetInnerHTML={{ __html: item.title }}
                                                    ></h2>
                                                    <p className="text-base md:text-[17px] font-medium redhat text-white" dangerouslySetInnerHTML={{ __html: item.description }} />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className="flex justify-between items-center style2_slider mt-16">
                                    <div className="flex items-center  gap-10 lg:gap-14">
                                        <button
                                            className={`swiper-button-prev bg-white rounded-full !relative shadow border border-[#F0F0F0] px-4 py-2 ${isBeginning ? "opacity-50 cursor-not-allowed" : ""
                                                }`}
                                            disabled={isBeginning}
                                        >

                                        </button>
                                        <button
                                            className={`swiper-button-next bg-white rounded-full !relative shadow border border-[#F0F0F0] px-4 py-2 ${isEnd ? "opacity-50 cursor-not-allowed" : ""
                                                }`}
                                            disabled={isEnd}
                                        >

                                        </button>
                                    </div>
                                    <div>
                                        <div className="custom-pagination3 flex justify-start mb-3 space-x-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-6/12  w-full  w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold text-center md:text-left redhat text-[#1B453C] mb-6'>{heading2}</h2>
                            <div className="relative w-full">
                                <Swiper
                                    onSwiper={setSwiperInstance}
                                    spaceBetween={30}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    pagination={{
                                        el: ".custom-pagination4",
                                        clickable: true,
                                    }}
                                    modules={[Grid, Pagination, Navigation]}
                                    grid={{ rows: 1, fill: "row" }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                        },
                                        1024: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                    className="mySwiper style2_slider"
                                >
                                    {whychoose2.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div
                                                className="flex gap-4 md:gap-6 flex-col h-[300px] rounded-2xl p-8 lg:p-12"
                                                style={{
                                                    background: `url(${item.image.src}) center center / cover no-repeat`,
                                                }}
                                            >
                                                <div className='absolute top-0 left-0 w-full rounded-2xl h-full bg-black opacity-30'></div>
                                                <div className='relative z-10 grid gap-4 md:gap-6 flex-col h-[300px] flex-wrap'>
                                                    <h2
                                                        className="text-2xl md:leading-[1.3] md:text-3xl h-full font-semibold redhat text-white mb-10 md:mb-14"
                                                        dangerouslySetInnerHTML={{ __html: item.title }}
                                                    ></h2>
                                                    <p className="text-base md:text-[17px] font-medium redhat text-white" dangerouslySetInnerHTML={{ __html: item.description }} />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className="flex justify-between items-center style2_slider mt-16">
                                    <div className="flex items-center  gap-10 lg:gap-14">
                                        <button
                                            className={`swiper-button-prev bg-white rounded-full !relative shadow border border-[#F0F0F0] px-4 py-2 ${isBeginning ? "opacity-50 cursor-not-allowed" : ""
                                                }`}
                                            disabled={isBeginning}
                                        >

                                        </button>
                                        <button
                                            className={`swiper-button-next bg-white rounded-full !relative shadow border border-[#F0F0F0] px-4 py-2 ${isEnd ? "opacity-50 cursor-not-allowed" : ""
                                                }`}
                                            disabled={isEnd}
                                        >

                                        </button>
                                    </div>
                                    <div>
                                        <div className="custom-pagination4 flex justify-start mb-3 space-x-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </section>
        </>
    )
}


export const Impact = () => {
    const star = middleimg

    const text = "Impact & Legacy"
    const heading = `“Rooted in Culture. Grown with Science. Sustaining for Generations.” `
    const partnerships = [
        {
            title: " 21+ Eco-integrated zones",
            image: support1,
        },
        {
            title: "Climate-resilient land use",
            image: support3,
        },

    ];

    const partnerships1 = [
        {
            title: "Boosted livelihoods & agri-based employment",
            image: support2,
        },
        {
            title: "1000+ visitors every month",
            image: support4,
        },

    ];

    return (
        <>

            <section
                className=" pt-16 pb-8 lg:pt-20 lg:pb-20" style={{ background: `url(${bgsupport.src}) center bottom / cover no-repeat`, 'backgroundColor': '#1B453C' }}>
                <div className='mx-auto max-w-7xl   px-4 md:px-8 lg:px-2 '>

                    <p className='text-[22px] md:text-[24px] text-center text-[#F7C35F] mb-4'>{text}</p>
                    <div className='lg:w-3/4 mx-auto'>
                        <h2 className="lg:leading-snug  text-white redhat lg:text-[40px] font-semibold  text-center text-3xl md:text-4xl mb-8 md:mb-12  w-full" dangerouslySetInnerHTML={{ __html: heading }} />
                    </div >
                    <div className='flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2'>
                        <div className='w-full md:w-5/12'>
                            <div className='flex gap-8 flex-col'>
                                <div className='w-full  md:w-12/12'>
                                    {partnerships.map((partner, index) => (
                                        <div className='w-full w-12/12 mt-10' key={index}>
                                            <div className="relative bg-white border border-[#F7C35F]  rounded-full overflow-hidden shadow-lg">
                                                <Image src={partner.image} alt={partner.title} className="w-full h-44 md:h-56 object-cover rounded-full " />
                                                <div className="absolute inset-0 flex items-center justify-start">
                                                    <div className="bg-white p-8 text-center flex flex-col items-center justify-center h-44 w-44 md:h-56 md:w-56 rounded-full border-2 border-[#F7C35F]">
                                                        <h3 className="text-base md:text-xl text-[#1B453C] font-semibold">{partner.title}</h3>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-2/12 self-start'>
                            <Image src={star} className='w-auto mx-auto h-auto  hidden md:block' alt="icon" />
                        </div>
                        <div className='w-full md:w-5/12'>
                            {partnerships1.map((partner, index) => (
                                <div className='w-full w-12/12 mt-10' key={index}>
                                    <div className="relative bg-white border border-[#F7C35F]  rounded-full overflow-hidden shadow-lg">
                                        <Image src={partner.image} alt={partner.title} className="w-full h-44 md:h-56  rounded-full  object-cover object-top" />
                                        <div className="absolute inset-0 flex items-center justify-end">
                                            <div className="bg-white p-8 text-center border-2 border-[#F7C35F] flex flex-col items-center justify-center h-44 w-44 md:h-56 md:w-56 rounded-full">

                                                <h3 className="text-base md:text-xl text-[#1B453C] font-semibold ">{partner.title}</h3>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>



                    </div>
                </div>
            </section>



        </>
    )
}


export const Contact = () => {
    const [formData, setFormData] = useState({
        location: "",
        email: "",
        phone: ""
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        const { location, email, phone } = formData;

        // Simple validation
        if (!location || !email || !phone) {
            setError("All fields are required.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email.");
            return;
        }

        if (phone.length < 6 || !/^\+?\d+$/.test(phone)) {
            setError("Enter a valid phone number.");
            return;
        }

        try {
            const res = await fetch("/data/project", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setSuccess(true);
                setFormData({ location: "", email: "", phone: "" });
            } else {
                const data = await res.json();
                setError(data.error || "Something went wrong.");
            }
        } catch (err) {
            setError("Failed to send. Please try again.");
        }
    };

    return (
        <section
            className="pt-14 pb-14 lg:pt-20 lg:pb-20 relative"
            style={{
                background: `url(${contactbg.src}) center center / cover no-repeat`
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-35"></div>
            <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-white text-center">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12">
                    <div className="md:w-5/12 w-12/12">
                        <div className="flex flex-col h-full">
                            <div>
                                <h2 className="text-4xl md:leading-[1.3] md:text-5xl md:text-left lg:text-[40px] font-semibold redhat text-white">
                                    Let’s Grow <br /> Together
                                </h2>
                            </div>
                            <div className="md:mt-[50%] mt-14 h-full text-left">
                                <ul className="mb-6 text-base md:text-[17px]">
                                    <li>
                                        Whether you’re a nature lover, corporate, policymaker, or <br />
                                        changemaker—there’s a way for you to be part of our vision.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-5/12 w-12/12">
                        <div className="bg-white text-black p-6 rounded-3xl shadow-lg w-full max-w-md">
                            <h2 className="text-xl md:text-2xl font-medium mb-6 text-center md:text-left">
                                Book a Visit
                            </h2>

                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="outline-none font-normal px-4 p-3 poppins rounded-md w-full bg-[#F6F6F8]"
                                        placeholder="Location:"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="outline-none font-normal px-4 p-3 poppins rounded-md w-full bg-[#F6F6F8]"
                                        placeholder="Email:"
                                    />
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="outline-none font-normal px-4 p-3 poppins rounded-md w-full bg-[#F6F6F8]"
                                        placeholder="Phone Number"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="poppins mt-6 md:text-[17px] font-medium text-white w-full py-3 rounded-[10px] bg-[#1B453C]"
                                >
                                    Submit
                                </button>

                                {success && (
                                    <p className="text-green-600 mt-4 text-sm">Successfully submitted!</p>
                                )}
                                {error && (
                                    <p className="text-red-600 mt-4 text-sm">{error}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};