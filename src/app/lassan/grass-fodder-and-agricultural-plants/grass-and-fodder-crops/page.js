import { Application, Conclusion, Environmental, Faqs } from '@/app/components/grass-and-fodder-crops/ApplicationEnvironmentalConclusionFaqs'
import { Atulye, Grass, Hathi, Lucerne, Why } from '@/app/components/grass-and-fodder-crops/GrassHathiLucerneWhyAtulye'
import React from 'react'

function page() {
    return (
        <>
            <Grass />
            <Hathi />
            <Lucerne />
            <Why />
            <Atulye />
            <Application />
            <Environmental />
            <Conclusion />
            <Faqs />
        </>
    )
}

export default page