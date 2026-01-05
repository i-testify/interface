'use client'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { cn } from '@/lib/utils'


interface Props {
    isOpen: boolean
    onClose: () => void
    title: string
    description: string
    children: React.ReactNode
    contentClassName?: string
    titleClassName?: string
    descriptionClassName?: string
    headerClassName?: string
}


const CustomDialog = ({ isOpen, onClose, title, description, children, contentClassName, titleClassName, descriptionClassName, headerClassName }: Props) => {

    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent className={cn('p-12', contentClassName)}>
                <DialogHeader className={cn('', headerClassName)}>
                    <DialogTitle className={cn('', titleClassName)}>{title}</DialogTitle>
                    <DialogDescription className={cn('', descriptionClassName)}>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CustomDialog