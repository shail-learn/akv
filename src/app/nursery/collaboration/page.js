import { Collaboration, Helps, Kaligut, Mission, Pattern } from '@/app/components/collaboration/CollaborationPatternMissionHelpsKaligut'
import { Action, National, Nhb, Pipeline, Specific, Spices } from '@/app/components/collaboration/SpicesNationalSpecificNhbPipelineAction'
import React from 'react'

function page() {
    return (
        <>
            <Collaboration />
            <Pattern />
            <Mission />
            <Helps />
            <Kaligut />
            <Spices />
            <National />
            <Specific />
            <Nhb />
            <Pipeline />
            <Action />
        </>
    )
}

export default page