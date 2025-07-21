
import { Banner, Growth, Why } from '@/app/components/gamhar/BannerWhyGrowth'
import { Cultivation, Harvesting, Market, Uses } from '@/app/components/gamhar/CultivationHarvestingMarketUses'
import { Faqs, Invest, Looking } from '@/app/components/gamhar/InvestLookingFaqs'
import React from 'react'


function page() {

    return (
        <>
            <Banner />
            <Why />
            <Growth />
            <Cultivation />
            <Harvesting />
            <Market />
            <Uses />
            <Invest/>
            <Looking/>
            <Faqs/>
        </>
    )
}

export default page