import { Cultivation, Harvesting, Nursery, Plantation } from '@/app/components/melia-dubia/CultivationNurseryPlantationHarvesting'
import { Applications, Demand, Sustainable } from '@/app/components/melia-dubia/DemandApplicationsSustainable'
import { Faqs, Invest, Looking } from '@/app/components/melia-dubia/InvestLookingFaqs'
import { Choose, Growth, Melia, Soil } from '@/app/components/melia-dubia/MeliaChooseGrowthSoil'
import React from 'react'

function page() {
    return (
        <>
            <Melia />
            <Choose />
            <Growth />
            <Soil />
            <Cultivation />
            <Nursery />
            <Plantation />
            <Harvesting />
            <Demand />
            <Applications />
            <Sustainable />
            <Invest />
            <Looking />
            <Faqs />
        </>
    )
}

export default page