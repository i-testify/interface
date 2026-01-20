// components/PostCard.tsx
'use client'
import Image from "next/image"
import { CelebrateIcon, ChatCircle, KeyIcon, ShareIcon } from "../Icons"
import { cn } from "@/lib/utils"
import { Bookmark, EyeOff, Flag03, MedicalCross } from "@untitled-ui/icons-react"
import CustomDropDown from "../CustomDropDown"
import { useState } from "react"

export type CardType = "compact" | "card"

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
    readonly cardType?: CardType
    readonly imageClassName?: string
    readonly bodyClassName?: string
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
    className,
    imageClassName,
    bodyClassName,
    cardType = "card"
}: PostCardProps) {
    const isCompact = cardType === "compact"
    const isCard = cardType === "card"
    const [action, setAction] = useState<string | null>(null)

    const handleAction = (action: string) => {
        console.log(action)

    }
    return (
        <article className={cn("w-full max-w-full flex items-start gap-2 border-t  ", className)}>
            {/* Header */}
            <div className={cn("overflow-hidden ", isCompact ? "mr-2 h-14 w-18" : "hidden")}>
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={72}
                        height={56}
                        className="h-auto w-full object-cover max-w-129.5 rounded-lg"
                        priority
                    />
                )}
            </div>

            <Image
                src={avatarUrl}
                alt={author}
                width={32}
                height={32}
                className="rounded-full shrink-0"
            />
            <section>


                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">

                        <div className="text-sm flex gap-2 items-center">
                            <span className="font-medium text-neutral-900">
                                {author}
                                {collaborators && (
                                    <span className="text-gray-500"> and {collaborators}</span>
                                )}
                            </span>
                            <div className="text-gray-400">{time}</div>
                        </div>
                    </div>


                    <CustomDropDown
                        value={action}
                        align="end"
                        onChange={handleAction}
                        items={[
                            {
                                value: "save",
                                icon: <Bookmark />,
                                label: <>Save</>,

                            },
                            {
                                value: "hide",
                                icon: <EyeOff />,
                                label: <>Hide</>,
                            },
                            {
                                value: "report",
                                icon: <Flag03 />,
                                label: <>Report</>,
                            },
                        ]}
                        renderTrigger={(selected) => (
                            <button className="text-gray-400 hover:text-gray-600 rotate-90 relative z-10">•••</button>
                        )}
                        contentClassName="min-w-[180px]"
                    />

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
                <h2 className="mt-3 text-lg font-semibold text-neutral-800">{title}</h2>
                <div className={cn("", bodyClassName)}>


                    {/* Image */}
                    {imageUrl && isCard && (
                        <div className="mt-3 overflow-hidden">
                            <Image
                                src={imageUrl}
                                alt={title}
                                width={518}
                                height={420}
                                className={cn("h-auto w-full object-cover  rounded-lg", imageClassName)}
                                priority
                            />
                        </div>
                    )}

                    {/* Excerpt */}
                    <p className="mt-3 text-sm text-neutral-500 line-clamp-3">{excerpt}</p>

                    {/* Actions */}
                    <div className="mt-4 flex items-center gap-2">
                        <ActionButton label="Celebrate" icon={<CelebrateIcon className="text-neutral-700 dark:text-neutral-700" />} />
                        <ActionButton icon={<ChatCircle className="text-neutral-700 dark:text-neutral-700" />} />
                        <ActionButton icon={<KeyIcon className="text-neutral-700 dark:text-neutral-700" />} className="px-1 py-1 size-7!" />
                        <ActionButton label="Share" icon={<ShareIcon className="text-neutral-700 dark:text-neutral-700" />} />
                    </div>
                </div>
            </section>
        </article>
    )
}

function ActionButton({ label, icon, className }: { readonly label?: string; readonly icon?: React.ReactNode; readonly className?: string }) {
    return (
        <button className={cn(`flex  relative z-30 items-center justify-center cursor-pointer gap-1 rounded-full border px-4 py-1 text-sm text-neutral-700 h-7! hover:bg-neutral-50`, className)}>
            {icon}
            {label}
        </button>
    )
}
