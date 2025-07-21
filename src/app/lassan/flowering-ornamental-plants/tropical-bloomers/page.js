import { Beauty, Cases, Climate, Cultivate, Include, Questions } from '@/app/components/tropical-bloomers/CultivateIncludeCasesClimateBeautyQuestions'
import { Ashok, Bougainvillea, Gudhal, Heena, Tropical } from '@/app/components/tropical-bloomers/TropicalGudhalAshokBougainvilleaHeena'
import React from 'react'

function page() {
  return (
    <>
      <Tropical />
      <Gudhal />
      <Ashok />
      <Bougainvillea />
      <Heena />
      <Cultivate />
      <Include />
      <Cases />
      <Climate />
      <Beauty />
      <Questions />
    </>
  )
}

export default page