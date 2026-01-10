// FooterActions.tsx
export default function FooterActions({
    onPost,
    onSchedule,
    disabled
}: Readonly<{
    onPost: () => void
    onSchedule?: () => void
    disabled?: boolean
}>) {
    return (
        <div className="flex justify-between items-center">
            {onSchedule && (
                <button
                    onClick={onSchedule}
                    className="text-sm text-gray-500 hover:text-black"
                >
                    Schedule for later
                </button>
            )}

            <button
                disabled={disabled}
                onClick={onPost}
                className="bg-black text-white px-6 py-2 rounded-full disabled:opacity-50"
            >
                Post
            </button>
        </div>
    )
}
