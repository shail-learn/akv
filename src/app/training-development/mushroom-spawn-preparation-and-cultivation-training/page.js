import { Additional, Benefits, Infra, Scalable, Varieties, Who } from '@/app/components/mushroom/BenefitsInfraWhoVarietiesAdditionalScalable'
import { Course, Mushroom, Training, Why } from '@/app/components/mushroom/MushroomWhyCourseTraining'
import React from 'react'

function page() {
  return (
    <>
      <Mushroom />
      <Why />
      <Course />
      <Training />
      <Benefits />
      <Infra />
      <Who />
      <Varieties />
      <Additional />
      <Scalable />
    </>
  )
}

export default page