"use client";
import { React, useState } from "react";
import banner from "../../assets/images/training/training-banner1.webp";
import BannerPage from '../components/BannerPage'
import Image from 'next/image';
import gallerySections from '../../api/galleryData.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoCloseOutline } from "react-icons/io5";


function ClientPage() {

    const text = {
        banner: banner,
        heading: `Gallery`,
        title:
            "Empowering individuals through expert training and sustainable practices.",
        className: "bg-white !text-black hover:!bg-transparent py-4 hover:!text-white",

        opacity: "opacity-60"
    };


    const [isOpen, setIsOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [activeImages, setActiveImages] = useState([]);

    const closeModal = () => {
        setIsOpen(false);
        setActiveImages([]);
    };

    const handleImageClick = (secIdx, imgIdx) => {
        const selectedSection = gallerySections[secIdx];
        const clickedImage = selectedSection.images[imgIdx];

        if (clickedImage.youtubeLink) {
            window.open(clickedImage.youtubeLink, '_blank');
        } else {
            setActiveImages(selectedSection.images);
            setStartIndex(imgIdx);
            setIsOpen(true);
        }
    };



    return (
        <>
            <BannerPage
                heading={text.heading}
                title={text.title}
                banner={text.banner}
                button={text.button}
                link={text.link}
                classname={text.className}
                opacity={text.opacity}
            />


            <section className="py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
                    {gallerySections.map((section, secIdx) => (
                        <div key={`section-${secIdx}`}>
                            <h2 className="text-2xl md:text-3xl font-normal py-3 mb-10 bg-[#1B453C] text-white text-center">
                                {section.title}
                            </h2>
                            <div className={`mb-14 gap-6 ${section.title === "Videos"
                                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                                : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                                }`}>
                                {section.images.map((img, imgIdx) => (
                                    <div
                                        key={`img-${secIdx}-${img.id}`}
                                        onClick={() => handleImageClick(secIdx, imgIdx)}
                                        className="cursor-pointer group"
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            width={600}
                                            height={600}
                                            className="w-full h-full object-cover rounded-md group-hover:scale-105 transition"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {isOpen && (
                        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded-full text-3xl z-50"
                            >
                                <IoCloseOutline />
                            </button>

                            <div className="w-full max-w-4xl px-4">
                                <Swiper
                                    modules={[Navigation]}
                                    navigation
                                    initialSlide={startIndex}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    className="outer_arrow"
                                >
                                    {activeImages.map((img) => (
                                        <SwiperSlide key={`modal-${img.id}`}>
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                width={1200}
                                                height={800}
                                                className="w-full h-auto max-h-[80vh] object-contain rounded"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    )}
                </div>
            </section>


        </>
    )
}

export default ClientPage