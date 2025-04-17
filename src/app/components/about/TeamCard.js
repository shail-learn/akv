"use client";
import { Button } from '@headlessui/react';
import Image from 'next/image';

import { useRouter } from "next/navigation";
import React from 'react'

export const TeamCard = ({ data }) => {
    const { name, designation, image } = data;
    const router = useRouter();
    return (
        <>
            <div className="text-center">
            <div className="bg-[#A8A8A8] rounded-[20px] overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    className="w-full h-full mx-auto"
                    width={200}
                    height={200}
                  />
                </div>
                <h5 className="text-lg mb-0 mt-2 font-normal" dangerouslySetInnerHTML={{__html:name}}/>
                <h6 className="text-sm font-semibold">{designation}</h6>
                {/* <Image
                    src={image}
                    alt={name}
                    className=" w-full h-full rounded-lg"
                    width={300}
                    height={300}

                />
                <Button className="border rounded-full mt-4 w-full py-1 p-2 border-black hover:bg-[#1A3232] hover:text-white transition-all duration-400" onClick={() => router.push("/")}>
                    <h5 className=" poppins text-sm md:text-base font-normal">{name}</h5>
                    <h6 className="md:text-sm text-xs font-bold poppins">{designation}</h6>
                </Button> */}

            </div>

        </>
    )
}
