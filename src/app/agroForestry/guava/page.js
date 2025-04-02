import { Banner, Climate, Guava } from '@/app/components/guava/BannerGuavaClimate'
import { Irrigation, Micronutrient, Nutrient } from '@/app/components/guava/IrrigationNutrientMicronutrient'
import { PlantingMaterial, PlantingSeason, PlantingTechniques } from '@/app/components/guava/Planting'
import { Faqs, Pest, Pruning, Why } from '@/app/components/guava/PruningPestWhyFaqs'
import React from 'react'

function page() {
    return (
        <>
            <Banner />
            <Guava />
            <Climate />
            <PlantingMaterial/>
            <PlantingSeason/>
            <PlantingTechniques/>
            <Irrigation/>
            <Nutrient/>
            <Micronutrient/>
            <Pruning/>
            <Pest/>
            <Why/>
            <Faqs/>
        </>
    )
}

export default page