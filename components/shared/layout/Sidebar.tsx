'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { SidebarToggleIcon } from '../Icons'
import { AppLinks, FooterLinks } from '@/utils/constants/routes'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { MoonStarIcon } from 'lucide-react'

const Sidebar = () => {
    const pathname = usePathname()
    return (
        <div className='border max-w-fit  py-7 border-t-0 h-full flex-1 relative flex flex-col justify-between'>
            <Button className='rounded-full size-8 p-2 flex items-center justify-center absolute -right-4 top-7 bg-white' variant="outline" >
                <SidebarToggleIcon />
            </Button>
            <ul className='px-5 space-y-2'>
                {
                    AppLinks.map((item) => {
                        const isActive = pathname === item.href
                        const Icon = item.icon
                        return (
                            <Link href={item.href} key={item.id} className={cn('flex font-medium items-center gap-2.5 px-3 py-2 hover:bg-neutral-100 rounded-lg text-neutral-600 text-sm', isActive && "bg-neutral-100! text-neutral-800")}>
                                <Icon />
                                <span>{item.label}</span>
                            </Link>
                        )
                    })
                }
            </ul>

            <section className='px-5 space-y-4'>
                <Button variant="secondary" className='text-neutral-800 cursor-pointer border border-neutral-200'> <MoonStarIcon /> Go dark</Button>
                <ul className="flex items-center text-neutral-500">
                    {FooterLinks.map((item) => (
                        <Link href={item.href}
                            key={item.id}
                            className="after:mx-3 after:content-['•'] text-sm font-medium last:after:content-['']"
                        >
                            {item.label}
                        </Link>
                    ))}
                </ul>

            </section>
        </div>
    )
}

export default Sidebar