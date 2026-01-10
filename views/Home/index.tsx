'use client'
import { PostCard } from '@/components/shared'
import { TestimonyComposer } from '@/components/Testimony'
import { Button } from '@/components/ui/button'
import { Briefcase01, ChevronDown, ChevronRightDouble, CoinsStacked03, Heart, HeartSquare, MedicalCross, Plane, Plus, Rows02, TrendUp01 } from '@untitled-ui/icons-react'
import Image from 'next/image'
import React, { useState } from 'react'

import { toggleTestimonyModal } from '@/Redux/Slices/testimonySlice'
import { useAppDispatch } from '@/Redux/store'

const Index = () => {
    const dispatch = useAppDispatch()
    const [draft, setDraft] = useState({
        fellowshipId: "",
        title: '',
        content: '',
        showAvatar: true
    })

    const handleCreateTestimony = () => {
        dispatch(toggleTestimonyModal())
    }
    return (
        <div className='max-w-5xl mx-auto pt-10 space-y-6'>
            <header className='flex items-center gap-8'>
                <span className='flex items-center gap-1 text-sm font-medium text-neutral-600'>
                    Trending
                    <ChevronDown />
                </span>
                <span className='flex items-center gap-1 text-sm font-medium text-neutral-600'>
                    <Rows02 />
                    <ChevronDown />
                </span>
            </header>
            <div className='grid grid-cols-[1fr_343px] gap-6'>
                <main className='w-full'>
                    <button onClick={handleCreateTestimony} className='mb-6 w-full flex items-center justify-between px-4 border border-neutral-200  max-w-full! bg-neutral-50 rounded-2xl h-16!' >
                        <div className='flex items-center gap-2'>
                            <Image src='/assets/Avatars Default with Backdrop.svg' alt='smile icon' width={32} height={32} className='rounded-full mr-2' />
                            <span className='text-neutral-600 text-sm'>What are you grateful for?</span>
                        </div>
                        <span className=' bg-black text-white flex items-center justify-center rounded-full size-7!'>
                            <Plus className='size-4' />
                        </span>
                    </button>
                    <ul className='flex flex-col gap-4'>
                        <PostCard
                            author="{newusername}"
                            collaborators="{anotherusername}"
                            avatarUrl="/assets/Avatars Default with Backdrop.svg"
                            time="3 mins"
                            title="How Forgiveness Brought Peace Back Into My Home After Months of Conflict"
                            excerpt="There was so much tension between me and my husband that we barely spoke for weeks..."
                            imageUrl="/assets/Image.jpg"
                            category="Health & Healing"
                        />
                        <PostCard
                            author="{newusername}"
                            avatarUrl="/assets/Avatars Default with Backdrop.svg"
                            time="3 mins"
                            title="I got the job!!!"
                            excerpt="There was so much tension between me and my husband that we barely spoke for weeks..."
                            category="Health & Healing"
                        />


                    </ul>
                </main>
                <aside className='border rounded-2xl p-4 border-neutral-200 sticky top-2 h-fit'>
                    <h3 className='flex items-center gap-2 text-blue-60 text-sm font-medium'> <TrendUp01 /> Trending Fellowships</h3>

                    <ul className='mt-4'>
                        {trendingFellowships.map((fellowship) => {
                            return (
                                <li key={fellowship.id} className='flex items-center gap-2 mt-1 hover:bg-neutral-100 cursor-pointer py-2 px-3 rounded-lg'>
                                    <div className=' rounded-lg flex items-center justify-center' >
                                        <fellowship.icon style={{ color: fellowship.color }} />
                                    </div>
                                    <span className='text-sm font-normal'>{fellowship.title}</span>
                                </li>
                            )
                        })
                        }
                    </ul>
                    <Button variant="secondary" className='w-full mt-4 rounded-[14px]'>See All <ChevronRightDouble /> </Button>
                </aside>
            </div>
            <TestimonyComposer
                value={draft}
                onChange={setDraft}
                onPost={() => console.log(draft)}
                onSaveDraft={() => console.log('save')}
                onSchedule={() => console.log('schedule')}
            />
        </div>
    )
}

export default Index


const trendingFellowships = [
    {
        id: '1',
        title: 'Health/Healing',
        icon: MedicalCross,
        color: "#3B7C0F"
    },
    {
        id: '2',
        title: 'Finances',
        icon: CoinsStacked03,
        color: "#E62E05"
    },
    {
        id: '3',
        title: 'Family',
        icon: HeartSquare,
        color: "#BA24D5"
    },
    {
        id: '4',
        title: 'Job',
        icon: Briefcase01,
        color: "#CA9802"
    },
    {
        id: '5',
        title: 'Japa/Relocation',
        icon: Plane,
        color: "#444CE7"
    },
    {
        id: '6',
        title: 'Marriage',
        icon: Heart,
        color: "#C11574"
    },
]