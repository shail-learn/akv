import { Applications, Bring, Choose, Functional } from '@/app/components/palms-cycads/FunctionalApplicationsChooseBring'
import { Best, Categories, Palms, Why } from '@/app/components/palms-cycads/PalmsWhyCategoriesBest'
import React from 'react'

function page() {
  return (
    <>
     <Palms/>
     <Why/>
     <Categories/>
     <Best/>
     <Functional/>
     <Applications/>
     <Choose/>
     <Bring/>
    </>
  )
}

export default page