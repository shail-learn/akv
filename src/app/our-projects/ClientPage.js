"use client"
import React from 'react'
import { Banner, Explore, Waterscapes } from '../components/our-projects/BannerExploreWaterscapes'
import { Animal, Contact, Impact, Slidertwo } from '../components/our-projects/AnimalSlidertwoImpactContact'

function ClientPage() {
    return (
        <>

            <Banner />
            <Explore />
            <Waterscapes />
            <Animal />
            <Slidertwo />
            <Impact />
            <Contact />
        </>
    )
}

export default ClientPage