import { Atulye, FAQs, Planting, Sustainability, Why } from '@/app/components/Wildforest/WhyAtulyeUseSustainabilityPlantingFAQs'
import { Agro, Applications, Ecological, Samel, Socio, Wild } from '@/app/components/Wildforest/WildSamelEcologicalAgroSocioApplications'
import React from 'react'

function page() {
  return (
    <>

      <Wild />
      <Samel />
      <Ecological />
      <Agro />
      <Socio />
      <Applications />
      <Why />
      <Atulye />
      <Sustainability />
      <Planting />
      <FAQs />

    </>
  )
}

export default page