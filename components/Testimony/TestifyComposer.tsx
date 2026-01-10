// components/testify/TestifyComposer.tsx
'use client'

import { TestifyComposerProps } from './types'
import FellowshipSelect from './FellowshipSelect'
import TitleInput from './TitleInput'
import TestimonyEditor from './TestimonyEditor'
import AvatarToggle from './AvatarToggle'
import ComposerToolbar from './ComposerToolbar'
import FooterActions from './FooterActions'
import CustomDialog from '../shared/Modals/CustomDialog'

export default function TestifyComposer({
    fellowships,
    value,
    onChange,
    onPost,
    onSaveDraft,
    onSchedule,
    isPosting
}: Readonly<TestifyComposerProps>) {
    const update = (patch: Partial<typeof value>) =>
        onChange({ ...value, ...patch })

    const onClose = () => {

    }

    return (
        <CustomDialog
            isOpen={true}
            onClose={onClose}
        >
            <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl border p-6 space-y-4">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Testify!</h2>
                    {onSaveDraft && (
                        <button
                            onClick={onSaveDraft}
                            className="text-sm text-gray-500 hover:text-black"
                        >
                            Drafts
                        </button>
                    )}
                </div>

                <FellowshipSelect
                    value={value.fellowshipId}
                    onChange={(id) => update({ fellowshipId: id })}
                    options={fellowships}
                />

                <TitleInput
                    value={value.title}
                    onChange={(title) => update({ title })}
                />

                <TestimonyEditor
                    value={value.content}
                    onChange={(content) => update({ content })}
                />

                <AvatarToggle
                    enabled={value.showAvatar}
                    onChange={(showAvatar) => update({ showAvatar })}
                />

                <ComposerToolbar />

                <FooterActions
                    onPost={onPost}
                    onSchedule={onSchedule}
                    disabled={!value.content || isPosting}
                />
            </div>
        </CustomDialog>
    )
}
