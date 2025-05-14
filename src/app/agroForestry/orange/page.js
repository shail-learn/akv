import { Fertilization, Growth, Pest } from '@/app/components/orange/FertilizationGrowthPest'
import { Ideal, Orangebanner, Planting, Steps } from '@/app/components/orange/OrangebannerIdealPlantingSteps'
import { FAQs, Harvesting, Join, Pruning } from '@/app/components/orange/PruningHarvestingFAQsJoin'
import React from 'react'

function page() {
    return (
        <>
            <Orangebanner />
            <Ideal />
            <Planting />
            <Steps />
            <Fertilization/>
            <Growth/>
            <Pest/>
            <Pruning/>
            <Harvesting/>
            <FAQs/>
            <Join/>
        </>
    )
}

export default page