import { Atulye, Heal, MedicineFaqs, Unique, Use } from '@/app/components/Medicinal/AtulyeUseUniqueHealMedicineFaqs'
import { Benefits, Kachnar, Lakshmitaru, Medicinal, Vijaysar } from '@/app/components/Medicinal/MedicinalVijaysarLakshmitaruKachnarBenefits'
import React from 'react'

function page() {
  return (
    <>
      <Medicinal/>
      <Vijaysar/>
      <Lakshmitaru/>
      <Kachnar/>
      <Benefits/>
      <Atulye/>
      <Use/>
      <Unique/>
      <Heal/>
      <MedicineFaqs/>

    </>
  )
}

export default page