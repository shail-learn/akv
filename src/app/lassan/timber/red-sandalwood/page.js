import { Banner, Choose, Cultivation, Growth } from '@/app/components/red-sandalwood/BannerChooseGrowthCultivation'
import { Harvesting, Markets, Sustainable, Uses } from '@/app/components/red-sandalwood/HarvestingMarketsUsesSustainable'
import { Faqs, Looking, Why } from '@/app/components/red-sandalwood/WhyLookingFaqs'
import React from 'react'

function page() {
    return (
        <>
            <Banner />
            <Choose />
            <Growth />
            <Cultivation />
            <Harvesting />
            <Markets />
            <Uses />
            <Sustainable/>
            <Why />
            <Looking />
            <Faqs />

        </>
    )
}

export default page