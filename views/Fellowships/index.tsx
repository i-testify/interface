import { FellowshipBanner, FellowshipHeader } from '@/components/Fellowships'
import React from 'react'

interface Props {
    fellowshipId: string
}

const FellowshipView = ({ fellowshipId }: Props) => {
    return (
        <div>
            <FellowshipBanner />
            <section className='max-w-app-main mx-auto'>
                <FellowshipHeader fellowshipId={fellowshipId} />
            </section>
        </div>
    )
}

export default FellowshipView