'use client'
import { PostCard, TextAreaField } from '@/components/shared'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft } from '@untitled-ui/icons-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface Props {
    testimonyId: string
}

const Index = ({ testimonyId }: Props) => {
    const router = useRouter()
    const [focused, setFocused] = useState(false)
    const [value, setValue] = useState("")
    const expanded = focused || value.length > 0
    return (
        <div className='space-y-8'>

            <button onClick={() => router.back()} className='flex items-center gap-2 '>
                <ArrowLeft /> Go Back
            </button>

            <PostCard
                author="{newusername}"
                collaborators="{anotherusername}"
                avatarUrl="/assets/Avatars Default with Backdrop.svg"
                time="3 mins"
                title="How Forgiveness Brought Peace Back Into My Home After Months of Conflict"
                excerpt="There was so much tension between me and my husband that we barely spoke for weeks..."
                imageUrl="/assets/Image.jpg"
                category="Health & Healing"
                className='border-t-0 border-b pb-8'
            />

            <section>
                <TextAreaField
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    label="Responses"
                    groupClassName='max-w-full gap-4'
                    className={cn('transition-all duration-200 bg-neutral-100 focus:bg-transparent',
                        expanded ? 'min-h-39 pb-16' : 'min-h-11.25 resize-none',)}
                    labelClassName='font-semibold text-neutral-800 text-base'
                    placeholder='Share your thought'
                    actions={
                        <div className={expanded ? "flex items-center gap-2" : "hidden"}>
                            <Button variant="secondary" className="rounded-[14px] h-10">
                                Cancel
                            </Button>
                            <Button className="rounded-[14px] h-10 ">
                                Comment
                            </Button>
                        </div>
                    }

                />
            </section>
        </div>
    )
}

export default Index