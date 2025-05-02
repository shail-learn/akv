import { Banner, Choose, Growth } from '@/app/components/amla/BannerChooseGrowth'
import { Cultivation, Harvesting, Market, Sustainable, Uses } from '@/app/components/amla/CultivationHarvestingMarketUsesSustainable'
import { Faqs, Invest, Looking } from '@/app/components/amla/InvestLookingFaqs'
import React from 'react'

function page() {
  return (
    <>
    <Banner />
    <Choose />
    <Growth />
    <Cultivation/>
    <Harvesting/>
    <Market/>
    <Uses/>
    <Sustainable/>
    <Invest/>
    <Looking/>
    <Faqs/>
    </>
  )
}

export default page