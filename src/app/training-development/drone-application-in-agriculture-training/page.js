import { Benefits, Drone, Overview, Training, Why } from '@/app/components/Drone/DroneWhyOverviewTrainingBenefits'
import { Future, Practical, Tools, Who } from '@/app/components/Drone/WhoToolsPracticalFuture'
import React from 'react'

function page() {
  return (
    <>
      <Drone />
      <Why />
      <Overview />
      <Training />
      <Benefits />
      <Who />
      <Tools />
      <Practical />
      <Future />
    </>
  )
}

export default page