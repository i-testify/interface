// TestimonyEditor.tsx
export default function TestimonyEditor({
    value,
    onChange
}: Readonly<{
    value: string
    onChange: (v: string) => void
}>) {
    return (
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Share your testimony here for the world to hear..."
            className="w-full min-h-55 resize-none outline-none text-gray-700 placeholder-gray-400"
        />
    )
}
