'use client'
import React, { Activity, useState } from 'react'
import { Button } from '@/components/ui/button'
import { CustomDropDown, InputField, ITestifyLogo } from '..'
import { Search } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/Redux/store'
import { toggleAuthModal } from '@/Redux/Slices/authSlice'
import AlertIcon from '@/components/shared/Icons/interface-alert-alarm-bell-2--alert-bell-ring-notification-alarm.svg'
import { ChevronDown, User03 } from '@untitled-ui/icons-react'
import Image from 'next/image'



const Navbar = () => {
    const { showNavTestimonyButton } = useAppSelector((state) => state.app)
    const [accountAction, setAccountAction] = useState<"profile" | "logout" | null>(null)

    const username = "@samsontobie"
    const dispatch = useAppDispatch()

    const handleLoginClick = () => {
        dispatch(toggleAuthModal())
    }

    const signOut = () => {
        console.log("i signed out")
    }


    return (
        <div className='border-b  w-full min-h-18 px-8 flex justify-between items-center gap-4'>
            <div className='flex-1'>

            <ITestifyLogo />
            </div>
            <div className='flex-1'>

            <InputField placeholder="Search for anything..." className='bg-neutral-100 h-10' preIcon={<Search />} />
            </div>
            <section className='flex items-center gap-2 flex-1'>
                <Activity mode={showNavTestimonyButton ? "visible" : "hidden"}  >
                    <Button className='rounded-[14px]'>
                        <Image src="/assets/fellowships/write_circle.svg" alt="edit--pen" height={14} width={14} />
                        Share your testimony
                    </Button>
                </Activity>

                <button className='rounded-full border size-10 shrink-0 flex items-center justify-center'>
                    <AlertIcon className='text-neutral-800' />
                </button>
                <User03 />
                <p>{username}</p>
                <CustomDropDown
                    value={accountAction}
                    align='end'
                    onChange={(value) => {
                        setAccountAction(value)

                        if (value === "profile") {
                            console.log("Profile")
                        }

                        if (value === "logout") {
                            signOut()
                        }
                    }}
                    items={[
                        { value: "profile", label: "Profile" },
                        { value: "logout", label: <span className="text-red-500">Logout</span> },
                    ]}
                    renderTrigger={() => (
                        <div className="flex items-center gap-1">
                            <ChevronDown />
                        </div>
                    )}
                    contentClassName="min-w-[120px]"
                />


            <Button onClick={handleLoginClick} className='bg-neutral-100 hover:bg-neutral-100 cursor-pointer text-neutral-800 text-sm font-medium rounded-[14px]'>Log in</Button>
            </section>
        </div>
    )
}

export default Navbar