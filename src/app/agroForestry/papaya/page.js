import { Banner, Soil, Varieties } from '@/app/components/papaya/BannerVarietiesSoil'
import { Nursery, Planting, Strategies } from '@/app/components/papaya/NurseryPlantingStrategies'
import { Aftercare, Nutrient, Pest } from '@/app/components/papaya/NutrientAftercarePest'
import { Faq, Papain, Seed } from '@/app/components/papaya/PapainSeedFaq'
import React from 'react'

function page() {
    return (
        <>
            <Banner />
            <Varieties />
            <Soil />
            <Nursery />
            <Planting />
            <Strategies />
            <Nutrient />
            <Aftercare />
            <Pest />
            <Papain />
            <Seed />
            <Faq />
        </>
    )
}

export default page