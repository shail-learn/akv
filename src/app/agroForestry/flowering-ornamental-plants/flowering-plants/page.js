import { Amaltas, Flower, Gulmohar, Kaner, Rose } from '@/app/components/flowering-plants/FlowerAmaltasKanerGulmoharRose'
import { Cases, Climate, FAQs, Grow, Services, Why } from '@/app/components/flowering-plants/WhyServicesCasesClimateGrowFAQs'
import React from 'react'

function page() {
  return (
    <>
    <Flower/>
    <Amaltas/>
    <Kaner/>
    <Gulmohar/>
    <Rose/>
    <Why/>
    <Services/>
    <Cases/>
    <Climate/>
    <Grow/>
    <FAQs/>
    </>
  )
}

export default page