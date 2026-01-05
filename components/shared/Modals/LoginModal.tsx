'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/Redux/store'
import { toggleShowLoginModal } from '@/Redux/Slices/appSlice'
import CustomDialog from './CustomDialog'
import { InputField } from '../InputField'
import { Button } from '@/components/ui/button'
import { Lock01, Mail01 } from '@untitled-ui/icons-react'
import { GoogleLogin } from '@react-oauth/google';


const LoginModal = () => {
    const { showLoginModal } = useAppSelector((state) => state.app)
    const dispatch = useAppDispatch()

    const handleClose = () => {
        // Close modal logic here
        dispatch(toggleShowLoginModal(false))
    }

    return (
        <CustomDialog
            isOpen={showLoginModal}
            onClose={handleClose}
            title="Welcome Back!"
            description="Share your testimony. Encourage someone’s faith today."
            contentClassName='md:max-w-[622px] rounded-[30px]'
            headerClassName='flex flex-col items-center text-center gap-2 mb-4'
        >
            {/* Login form or content goes here */}
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                text='continue_with'

                logo_alignment='center'
                containerProps={{ className: 'rounded-xl! h-12!' }}

            />

            <div>
                <div className='flex items-center gap-3 my-4'>
                    <div className='h-px border-neutral-300 border border-dashed  flex-1'></div>
                    <span className='text-sm text-neutral-500'>or continue with email</span>
                    <div className='h-px border-neutral-300 border border-dashed  flex-1'></div>
                </div>
            </div>
            <div className="">
                <form action="" className='grid gap-y-4.5 w-full'>
                    <InputField preIcon={<Mail01 />} label="Your email" placeholder='yourname@example.com' className='bg-neutral-100 h-12 w-full' groupClassName='max-w-full' />
                    <InputField preIcon={<Lock01 />} label={
                        <div className='flex items-center w-full justify-between'>
                            <span>Your password</span>
                            <Button variant="link" className='text-xs underline underline-offset-1'>Forgot password?</Button>
                        </div>
                    } placeholder='Enter your password' className='bg-neutral-100 h-12 w-full' groupClassName='max-w-full' />
                    <Button className='w-full mt-2.5 h-12 font-bold text-base'>Sign in</Button>
                </form>
            </div>
            <div>
                <p className='text-center font-medium text-base text-neutral-500 mt-6'>
                    New to iTestify?
                    <Button variant="link" className='  p-0! ml-1 text-neutral-900 font-medium '> Create an account</Button>
                </p>
            </div>
        </CustomDialog>
    )
}

export default LoginModal