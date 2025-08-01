import { Agro, Botanical, Duranata, Why } from '@/app/components/duranata/DuranataWhyBotanicalAgro'
import { Cultivation, Economic, Our, Use } from '@/app/components/duranata/EconomicCultivationOurUse'
import { FAQs, Secure, Sustainability } from '@/app/components/duranata/SustainabilitySecureFAQs'
import React from 'react'

function page() {
  return (
    <>
    <Duranata/>
    <Why/>
    <Botanical/>
    <Agro/>
    <Economic/>
    <Cultivation/>
    <Our/>
    <Use/>
    <Sustainability/>
    <Secure/>
    <FAQs/>

    </>
  )
}

export default page