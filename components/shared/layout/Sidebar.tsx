'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { SidebarToggleIcon } from '../Icons'
import { AppLinks, AppRoutes, FooterLinks } from '@/utils/constants/routes'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { MoonStarIcon } from 'lucide-react'
import { ChevronRight, HeartHand, InfoCircle } from '@untitled-ui/icons-react'

const getInitialTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") return "light"

    const stored = localStorage.getItem("theme") as "light" | "dark" | null
    if (stored) return stored

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
}



const Sidebar = () => {
    const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme)
    const pathname = usePathname()

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
        localStorage.setItem("theme", theme)
    }, [theme])



    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark"

        setTheme(next)
        localStorage.setItem("theme", next)
        document.documentElement.classList.toggle("dark", next === "dark")
    }

    return (
        <div className='border max-w-fit  py-7 border-t-0 h-full flex-1 relative flex flex-col justify-between'>
            <Button
                className="rounded-full size-8 p-2 flex items-center justify-center absolute -right-4 top-7 bg-neutral-25 dark:bg-neutral-25"
                variant="outline"
            >
                <SidebarToggleIcon />
            </Button>

            <section>

            <ul className='px-5 space-y-2'>
                {
                    AppLinks.map((item) => {
                        const isActive = pathname === item.href
                        const Icon = item.icon
                        return (
                            <Link href={item.href} key={item.id} className={cn('flex font-medium items-center gap-2.5 px-3 py-2 hover:bg-neutral-100 rounded-lg text-neutral-600 text-sm', isActive && "bg-neutral-100 text-neutral-800")}>
                                <Icon className={cn(isActive && 'text-orange-500')} />
                                <span >{item.label}</span>
                            </Link>
                        )
                    })
                }
            </ul>

                <section className='border-y py-4 px-5 mt-4'>
                    <h4 className='p-2 flex items-center gap-2.5'>Fellowships <ChevronRight /> </h4>
                </section>

                <section className='px-4 py-4'>
                    <Link href={AppRoutes.About.href} className={cn('flex font-medium items-center gap-2.5 px-3 py-2 hover:bg-neutral-100 rounded-lg text-neutral-600 text-sm',)} >
                        <InfoCircle />
                        <span>About iTestify</span>
                    </Link>
                    <Link href={AppRoutes.Donation.href} className={cn('flex font-medium items-center gap-2.5 px-3 py-2 hover:bg-neutral-100 rounded-lg text-neutral-600 text-sm',)}>
                        <HeartHand />
                        <span>Make a donation</span>
                    </Link>
                </section>
            </section>

            <section className='px-5 space-y-4'>
                <Button
                    onClick={toggleTheme}
                    variant="secondary"
                    className="border  flex items-center gap-2"
                >
                    <MoonStarIcon />
                    {theme === "dark" ? "Go light" : "Go dark"}
                </Button>
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