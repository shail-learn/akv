import { Applications, Atulye, Define, Environmental, FAQs } from '@/app/components/hedges/AtulyeApplicationsEnvironmentalDefineFAQs'
import { Alternanthera, Hedges, Subabul, Why } from '@/app/components/hedges/HedgesSubabulAlternantheraWhy'
import React from 'react'

function page() {
  return (
    <>
      <Hedges />
      <Subabul />
      <Alternanthera />
      <Why />
      <Atulye />
      <Applications />
      <Environmental />
      <Define />
      <FAQs />
    </>
  )
}

export default page