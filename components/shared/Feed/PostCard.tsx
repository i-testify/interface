// components/PostCard.tsx
import Image from "next/image"
import ShareIcon from "@/components/shared/Icons/ShareIcon.svg"
import CelebrateIcon from "@/components/shared/Icons/celebrate-icon.svg"
import ChatCircleIcon from "@/components/shared/Icons/chat-circle.svg"
import KeyIcon from "@/components/shared/Icons/key-01.svg"
import { cn } from "@/lib/utils"
import { MedicalCross } from "@untitled-ui/icons-react"

type PostCardProps = {
    readonly author: string
    readonly collaborators?: string
    readonly avatarUrl: string
    readonly time: string
    readonly title: string
    readonly excerpt: string
    readonly imageUrl?: string
    readonly category?: string
    readonly className?: string
}

export default function PostCard({
    author,
    collaborators,
    avatarUrl,
    time,
    title,
    excerpt,
    imageUrl,
    category,
    className
}: PostCardProps) {
    return (
        <article className={cn("w-full max-w-full flex items-start gap-2 border-t  bg-white ", className)}>
            {/* Header */}
            <Image
                        src={avatarUrl}
                        alt={author}
                        width={40}
                        height={40}
                className="rounded-full shrink-0"
                    />
            <section>


                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">

                    <div className="text-sm flex gap-2 items-center">
                        <span className="font-medium text-gray-900">
                            {author}
                            {collaborators && (
                                <span className="text-gray-500"> and {collaborators}</span>
                            )}
                        </span>
                        <div className="text-gray-400">{time}</div>
                    </div>
                </div>

                    <button className="text-gray-400 hover:text-gray-600 rotate-90">•••</button>
            </div>

            {/* Category */}
            {category && (
                <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
                        <span className="text-lg">
                            <MedicalCross />
                        </span>
                    <span>{category}</span>
                </div>
            )}

            {/* Title */}
            <h2 className="mt-3 text-lg font-semibold text-gray-900">{title}</h2>

            {/* Image */}
            {imageUrl && (
                <div className="mt-3 overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={518}
                        height={420}
                        className="h-auto w-full object-cover max-w-129.5 rounded-lg"
                        priority
                    />
                </div>
            )}

            {/* Excerpt */}
            <p className="mt-3 text-sm text-gray-600 line-clamp-3">{excerpt}</p>

            {/* Actions */}
            <div className="mt-4 flex items-center gap-2">
                <ActionButton label="Celebrate" icon={<CelebrateIcon />} />
                <ActionButton icon={<ChatCircleIcon />} />
                <ActionButton icon={<KeyIcon />} className="px-1 py-1 size-7!" />
                <ActionButton label="Share" icon={<ShareIcon />} />
            </div>
            </section>
        </article>
    )
}

function ActionButton({ label, icon, className }: { readonly label?: string; readonly icon?: React.ReactNode; readonly className?: string }) {
    return (
        <button className={cn(`flex items-center justify-center cursor-pointer gap-1 rounded-full border border-gray-200 px-4 py-1 text-sm text-gray-700 h-7! hover:bg-gray-50`, className)}>
            {icon}
            {label}
        </button>
    )
}
