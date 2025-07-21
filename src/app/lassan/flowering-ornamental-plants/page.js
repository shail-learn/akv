import { Categories, Flowering, Whyadd } from '@/app/components/flowering/FloweringWhyaddCategories'
import { Best, Ornamental, Perfect, Together } from '@/app/components/flowering/PerfectOrnamentalBestTogether'
import React from 'react'

function page() {
    return (
        <>
            <Flowering />
            <Whyadd />
            <Categories />
            <Perfect />
            {/* <Ornamental /> */}
            <Best />
            <Together />
        </>
    )
}

export default page