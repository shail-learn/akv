
import { Applications, Atulye, Conclusion, Environmental, FAQs } from '@/app/components/shrubs/AtulyeApplicationsEnvironmentalConclusionFAQs'
import { Adusa, Chirchita, Kanghi, Shrubs, Why, Yavasa } from '@/app/components/shrubs/ShrubsAdusaChirchitaYavasaKanghiWhy'
import React from 'react'

function page() {
    return (
        <>
            <Shrubs />
            <Adusa />
            <Chirchita />
            <Yavasa />
            <Kanghi />
            <Why />
            <Atulye />
            <Applications />
            <Environmental />
            <Conclusion />
            <FAQs />
        </>
    )
}

export default page