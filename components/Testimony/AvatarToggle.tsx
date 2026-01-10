// AvatarToggle.tsx
export default function AvatarToggle({
    enabled,
    onChange
}: Readonly<{
    enabled: boolean
    onChange: (v: boolean) => void
}>) {
    return (
        <button
            onClick={() => onChange(!enabled)}
            className={`w-16 h-8 rounded-full p-1 transition ${enabled ? 'bg-black' : 'bg-gray-300'
                }`}
        >
            <div
                className={`w-6 h-6 rounded-full bg-white transform transition ${enabled ? 'translate-x-8' : ''
                    }`}
            />
        </button>
    )
}
