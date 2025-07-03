"use client";
import { useState } from "react";
import EventCalendar from "../components/EventCalendar";
import BannerPage from "../components/BannerPage";
import banner from "../../assets/images/events/banner.webp";


function page() {
    const text = {
        banner: banner,
        heading: `Upcoming Events`,
        opacity: 'opacity-50'
    }

    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />

            <EventCalendar />
        </>
    )
}

export default page