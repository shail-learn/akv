
import { Brahmi, Mandukparni, Shatavari } from '@/app/components/stress-relief-and-cognitive-wellness/BrahmiClimaticMandukparniShatavari'
import { FAQs, Herbal, Post, Sliderblur } from '@/app/components/stress-relief-and-cognitive-wellness/PostHerbalFAQs'
import { Ashwagandha, Benefits, Climatic, Stress } from '@/app/components/stress-relief-and-cognitive-wellness/StressAshwagandhaBenefitsClimatic'
import { Applications, Tulsi, Why } from '@/app/components/stress-relief-and-cognitive-wellness/TulsiWhyApplicationsBenefits'
import React from 'react'

function page() {
  return (
    <>
      <Stress />
      <Ashwagandha />
      <Benefits />
      <Climatic />
      <Brahmi />
      <Mandukparni />
      <Shatavari />
      <Tulsi />
      <Why />
      <Applications />
      <Sliderblur/>
      <Post />
      <Herbal />
      <FAQs />


    </>
  )
}

export default page