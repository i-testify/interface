// FellowshipSelect.tsx
import { Fellowship } from './types'

export default function FellowshipSelect({
    options,
    value,
    onChange
}: Readonly<{
    options: Fellowship[]
    value?: string
    onChange: (id: string) => void
}>) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-fit px-4 py-2 rounded-full bg-gray-100 text-sm border focus:outline-none"
        >
            <option value="">Select Fellowship</option>
            {options.map((f) => (
                <option key={f.id} value={f.id}>
                    {f.name}
                </option>
            ))}
        </select>
    )
}
