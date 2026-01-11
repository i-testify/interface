// components/PostCard.tsx
import Image from "next/image"
import ShareIcon from "@/components/shared/Icons/ShareIcon.svg"
import CelebrateIcon from "@/components/shared/Icons/celebrate-icon.svg"
import ChatCircleIcon from "@/components/shared/Icons/chat-circle.svg"
import { cn } from "@/lib/utils"


type CommentCardProps = {
    readonly author: string
    readonly avatarUrl: string
    readonly time: string
    readonly excerpt: string
    readonly className?: string
}

export default function CommentCard({
    author,
    avatarUrl,
    time,
    excerpt,
    className
}: CommentCardProps) {
    return (
        <article className={cn("w-full max-w-full flex items-stretch gap-2  bg-white ", className)}>
            {/* Header */}
            <div className="flex flex-col items-center shrink-0">
                <Image
                    src={avatarUrl}
                    alt={author}
                    width={32}
                    height={32}
                    className="rounded-full shrink-0 size-8!"
                />

                <div className="flex-1 w-px bg-neutral-300 mt-1" />
            </div>


            <section>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">

                        <div className="text-sm flex gap-2 items-center">
                            <span className="font-medium text-gray-900">
                                {author}
                            </span>
                            <div className="text-gray-400">{time}</div>
                        </div>
                    </div>

                    <button className="text-gray-400 hover:text-gray-600 rotate-90">•••</button>
                </div>

                {/* Excerpt */}
                <p className="mt-3 text-sm text-gray-600 ">{excerpt}</p>

                {/* Actions */}
                <div className="mt-4 flex items-center gap-2">
                    <ActionButton label="Celebrate" icon={<CelebrateIcon />} className="px-3" />
                    <ActionButton icon={<ChatCircleIcon />} className="size-7!" />
                    <ActionButton icon={<ShareIcon />} className="size-7!" />
                </div>
            </section>
        </article>
    )
}

function ActionButton({ label, icon, className }: { readonly label?: string; readonly icon?: React.ReactNode; readonly className?: string }) {
    return (
        <button className={cn(`flex items-center justify-center cursor-pointer gap-1 py-1 rounded-full border border-gray-200  text-sm text-gray-700 h-7! hover:bg-gray-50`, className)}>
            {icon}
            {label}
        </button>
    )
}
