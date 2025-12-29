import { Button } from '@/components/ui/button'
import React from 'react'
import { InputField } from '../InputField'
import { ITestifyLogo } from '..'
import { Search } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='border-b border-neutral-200 w-full min-h-18 px-8 flex justify-between items-center gap-4'>
            <ITestifyLogo />
            <InputField placeholder="Search for anything..." className='bg-neutral-100 h-10' preIcon={<Search />} />
            <Button className='bg-neutral-100 text-neutral-800 text-sm font-medium rounded-[14px]'>Log in</Button>
        </div>
    )
}

export default Navbar