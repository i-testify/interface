// ComposerToolbar.tsx
import { Bold, Italic, Underline, List } from 'lucide-react'

export default function ComposerToolbar() {
    return (
        <div className="flex gap-3 text-gray-500">
            <Bold className="w-4 h-4 cursor-pointer" />
            <Italic className="w-4 h-4 cursor-pointer" />
            <Underline className="w-4 h-4 cursor-pointer" />
            <List className="w-4 h-4 cursor-pointer" />
        </div>
    )
}
