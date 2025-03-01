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
                <Image
                    src={image}
                    alt={name}
                    className=" w-full h-full rounded-lg"
                    width={300}
                    height={300}

                />


                <Button className="border rounded-full mt-4 w-full py-1 p-2 border-black hover:bg-[#1A3232] hover:text-white transition-all duration-400" onClick={() => router.push("/")}>
                    <h5 className=" poppins text-sm md:text-base font-normal">{name}</h5>
                    <h6 className="md:text-sm text-xs font-bold poppins">{designation}</h6>
                </Button>

            </div>

        </>
    )
}
