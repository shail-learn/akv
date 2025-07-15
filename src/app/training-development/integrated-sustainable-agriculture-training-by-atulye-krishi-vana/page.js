import { Benefits, Integrated, Modules, Movement, Training, Who } from '@/app/components/integrated/IntegratedModulesTrainingWhoBenefitsMovement'
import React from 'react'

function page() {
  return (
    <>
     <Integrated/>
     <Modules/>
     <Training/>
     <Benefits/>
     <Who/>
     <Movement/>
    </>
  )
}

export default page