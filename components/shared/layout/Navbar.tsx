'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { InputField, ITestifyLogo } from '..'
import { Search } from 'lucide-react'
import { useAppDispatch } from '@/Redux/store'
import { toggleAuthModal } from '@/Redux/Slices/authSlice'

const Navbar = () => {
    const dispatch = useAppDispatch()

    const handleLoginClick = () => {
        dispatch(toggleAuthModal())
    }

    return (
        <div className='border-b border-neutral-200 w-full min-h-18 px-8 flex justify-between items-center gap-4'>
            <ITestifyLogo />
            <InputField placeholder="Search for anything..." className='bg-neutral-100 h-10' preIcon={<Search />} />
            <Button onClick={handleLoginClick} className='bg-neutral-100 hover:bg-neutral-100 cursor-pointer text-neutral-800 text-sm font-medium rounded-[14px]'>Log in</Button>
        </div>
    )
}

export default Navbar