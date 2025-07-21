
import { Banner, Plantation, Softwood, Species } from '@/app/components/softwood/BannerSoftwoodSpeciesPlantation'
import { Choose, Commercial, Faqs, Why } from '@/app/components/softwood/CommercialWhyChooseFaqs'
import React from 'react'

function page() {
  return (
    <>
      <Banner />
      <Softwood />
      <Species />
      <Plantation />
      <Commercial />
      <Why />
      <Choose />
      <Faqs />

    </>
  )
}

export default page