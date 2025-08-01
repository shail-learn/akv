import { Benefits, Cultivation, Faqs, Joins, Post } from '@/app/components/immunity/BenefitsPostCultivationJoinsFaqs'
import { Applications, Chitvan, Patha, Why } from '@/app/components/immunity/ChitvanPathaWhyApplications'
import { Amla, Giloy, Immunity, Kalmegh } from '@/app/components/immunity/ImmunityGiloyAmlaKalmegh'
import React from 'react'

function page() {
  return (
    <>
      <Immunity />
      <Giloy />
      <Amla />
      <Kalmegh />
      <Chitvan />
      <Patha />
      <Why />
      <Applications />
      <Benefits />
      <Post />
      <Cultivation />
      <Joins />
      <Faqs />
    </>
  )
}

export default page