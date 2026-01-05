import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText,
} from "@/components/ui/input-group"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface Props extends React.ComponentProps<"input"> {
    readonly preIcon?: ReactNode
    readonly sufIcon?: ReactNode
    readonly label?: ReactNode
    groupClassName?: string
}

export function InputField({ sufIcon, preIcon, label, placeholder, className, groupClassName }: Props) {
    return (
        <div className={cn("grid w-full max-w-sm gap-1", groupClassName)}>
            {label && <label htmlFor="">{label}</label>}
            <InputGroup className={className}>
                <InputGroupAddon>
                    <InputGroupText>{preIcon}</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder={placeholder} />
                <InputGroupAddon align="inline-end">
                    <InputGroupText>{sufIcon}</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}
