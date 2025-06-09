import { Layout, Medicinal, Panchvati, Tulsi, Tulsidasji, Vatika } from '@/app/components/sri-tulsi/TulsiPanchvatiVatikaMedicinalLayoutTulsidasji'
import React from 'react'

function page() {
  return (
    <>
      <Tulsi />
      <Panchvati />
      <Vatika />
      <Medicinal />
      <Layout />
      <Tulsidasji />
    </>
  )
}

export default page