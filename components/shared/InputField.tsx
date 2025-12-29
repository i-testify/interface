import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText,
} from "@/components/ui/input-group"
import { ReactNode } from "react"

interface Props extends React.ComponentProps<"input"> {
    readonly preIcon?: ReactNode
    readonly sufIcon?: ReactNode
    readonly label?: ReactNode
}

export function InputField({ sufIcon, preIcon, label, placeholder, className }: Props) {
    return (
        <div className="grid w-full max-w-sm gap-6">
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
