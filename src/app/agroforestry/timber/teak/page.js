import { Cultivation, Growth, Harvesting, Plantation } from '@/app/components/teak/CultivationGrowthPlantationHarvesting'
import { Benefits, Faqs, Objectives, Sustainable } from '@/app/components/teak/SustainableObjectivesBenefitsFaqs'
import { Marketd, Markets, Pricing, Teak } from '@/app/components/teak/TeakMarketsPricing'
import React from 'react'

function page() {
    return (
        <>
            <Teak />
            <Marketd />
            <Markets />
            <Pricing />
            <Cultivation />
            <Growth />
            <Plantation />
            <Harvesting />
            <Sustainable />
            <Objectives />
            <Benefits />
            <Faqs />

        </>
    )
}

export default page