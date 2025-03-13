import React from 'react'
import { BannerBamboo, GrowthBamboo, WhyBamboo } from '../components/bamboo/BambooWhyGrowth'
import { Cultivation, Harvesting, Market } from '../components/bamboo/CultivationHarvestingMarket'
import { Invest, Sustainable, Uses } from '../components/bamboo/UsesSustainableInvest'
import { Faq, Looking } from '../components/bamboo/LookingFaq'

function page() {
  return (
    <>
    <BannerBamboo/>
    <WhyBamboo/>
    <GrowthBamboo/>
    <Cultivation/>
    <Harvesting/>
    <Market/>
    <Uses/>
    <Sustainable/>
    <Invest/>
    <Looking/>
    <Faq/>
    </>
  )
}

export default page