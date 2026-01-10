// TitleInput.tsx
export default function TitleInput({
    value,
    onChange
}: Readonly<{
    value: string
    onChange: (v: string) => void
}>) {
    return (
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Your Title"
            className="w-full text-lg font-medium border-b outline-none py-2 placeholder-gray-400"
        />
    )
}
