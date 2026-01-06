import React from 'react'
import { Textarea } from '../ui/textarea'
import { cn } from '@/lib/utils'

interface Props extends React.ComponentProps<"textarea"> {
    readonly label?: React.ReactNode
    readonly groupClassName?: string
    readonly required?: boolean
    readonly error?: string
}

const TextAreaField = ({ label, groupClassName, required, error, ...props }: Props) => {
    return (
        <div className={cn("grid w-full max-w-sm gap-1", groupClassName)}>
            {label && (
                <label className="text-sm font-medium text-neutral-600">
                    {label} {required && "*"}
                </label>
            )}
            <Textarea {...props} />
            {error && (
                <p className="text-xs text-destructive">{error}</p>
            )}
        </div>
    )
}

export default TextAreaField