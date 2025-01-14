"use client";
import React, { useState } from "react";
import background from "../../../assets/images/home/tab-bg.webp";
import { Tab, TabGroup, TabList } from "@headlessui/react";

const categories = [
    {
        name: "Purpose",
        posts:
            "We are here not to borrow from future generations but to create an ecosystem that provides the resources needed to live sustainably. Our work protects life and nurtures prosperity through agroforestry.",
    },
    {
        name: "Values",
        posts:
            "From future generations but to create an ecosystem that provides the resources needed to live sustainably. Our work protects life and nurtures prosperity through agroforestry.",
    },
    {
        name: "Quotes",
        posts:
            "But to create an ecosystem that provides the resources needed to live sustainably. Our work protects life and nurtures prosperity through agroforestry.",
    },
];


export const PurposeAndValue = () => {
    const [activeTabContent, setActiveTabContent] = useState(categories[0].posts);
    const [fade, setFade] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabChange = (index) => {
        setFade(true);
        setTimeout(() => {
            setActiveIndex(index);
            setActiveTabContent(categories[index].posts);
            setFade(false);
        }, 200);
    };
    return (
        <>

            <section className="flex flex-col md:flex-row items-center justify-center py-8 lg:py-0 md:mb-16">
                <div className="flex flex-col md:flex-row gap-10 md:gap-20 p-10 bg-white">
                    <div>
                        <div className="text-center">
                            <h3 className="text-3xl md:text-4xl  pb-10 redhat">
                                Our Purpose <span className="text-[#498A8A]">& Values</span>
                            </h3>
                        </div>
                        <TabGroup selectedIndex={activeIndex} onChange={handleTabChange}>
                            <TabList className="flex flex-wrap justify-center md:justify-start  lg:flex-col items-center space-y-3">
                                {categories.map(({ name }, index) => (
                                    <Tab
                                        key={name}
                                        className={({ selected }) =>
                                            ` text-[18px] md:text-[20px]  w-[250px] rounded-[18px] font-light h-[49px] text-center leading-[49px] focus:outline-none ${selected
                                                ? "border-[1px] border-[#000] font-normal shadow-md text-[#A6A6A6] bg-white	focus:outline-none"
                                                : "text-[#000000] focus:outline-none"
                                            }`
                                        }
                                        onClick={() => handleTabChange(index)}
                                    >
                                        {name}
                                    </Tab>
                                ))}
                            </TabList>
                        </TabGroup>
                    </div>

                    <div
                        className="bg-cover bg-center text-center rounded-3xl   shadow-lg w-[300px] h-[320px] md:w-[488px] md:h-[394px]"
                        style={{ backgroundImage: `url(${background.src})` }}

                    >
                        <div
                            className={`flex justify-center items-center h-full w-full transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"
                                }`}
                        >
                            <p className="text-white text-center p-6 lg:px-20 lg:py-5 text-[16px] md:text-[18px] leading-8 lg:leading-[36px] font-[300]">
                                {activeTabContent ||
                                    "Select a tab to see the content displayed here."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
