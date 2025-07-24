// components/InfoSection.js

import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Image from "next/image";

const InfoSection = ({ heading, image, infoData }) => {
    return (
        <section className="relative text-center md:text-left pb-16 pt-20 lg:pb-16 bg-[#f5f5f5]">
            <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-1">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">

                    {/* Image Section */}
                    <div className="md:w-[40%] w-full">
                        <div className="relative">
                            <Image
                                className="w-full h-full rounded-xl object-cover"
                                src={image}
                                alt="Key Details"
                            />
                        </div>
                    </div>

                    {/* Info List Section */}
                    <div className="md:w-[60%] w-full">
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-[#1B453C] mb-8">
                            {heading}
                        </h2>

                        <div className="my-6 mb-14">
                            {infoData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 mb-4 py-1 text-left"
                                >
                                    <RiCheckboxCircleFill className="h-5 w-5 text-green-800 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold redhat text-lg md:text-xl text-[#1B453C] leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-black redhat text-[17px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
