"use client"
import React from 'react'
import { Certification, Faq, GreenRevolution, Register } from '../components/training-development/CertificationFaqRegister'
import { SuccessStories } from '../components/training-development/SuccessStories'
import { BannerTraining, IntroSection } from '../components/training-development/BannerTraining'
import TrainingProgram from '../components/training-development/TrainingProgram'
import WhyChooseUs from '../components/training-development/WhyChooseUs'

function ClientPage() {
  return (
    <>
      <BannerTraining />
      <IntroSection />
      <TrainingProgram />
      <WhyChooseUs />
      <SuccessStories />
      <Certification />
      <Faq />
      <Register />
      <GreenRevolution />
    </>
  )
}

export default ClientPage