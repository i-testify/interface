// components/testify/TestifyComposer.tsx
'use client'

import { TestifyComposerProps } from './types'
import FellowshipSelect from './FellowshipSelect'
import TitleInput from './TitleInput'
import TestimonyEditor from './TestimonyEditor'
import ComposerToolbar from './ComposerToolbar'
import FooterActions from './FooterActions'
import CustomDialog from '../shared/Modals/CustomDialog'
import { useAppDispatch, useAppSelector } from '@/Redux/store'
import { toggleTestimonyModal } from '@/Redux/Slices/testimonySlice'
import { useEffect } from 'react'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

export default function TestifyComposer({
    fellowships,
    value,
    onChange,
    onPost,
    onSaveDraft,
    onSchedule,
    isPosting
}: Readonly<TestifyComposerProps>) {
    const { showTestimonyModal } = useAppSelector((state) => state.testimony)


    const dispatch = useAppDispatch()
    const update = (patch: Partial<typeof value>) =>
        onChange({ ...value, ...patch })

    const onClose = () => {
        dispatch(toggleTestimonyModal())
    }

    const editor = useEditor({
        extensions: [StarterKit, Underline],
        content: value.content,
        editorProps: {
            attributes: {
                class: 'prose max-w-none min-h-[220px] outline-none'
            }
        },
        onUpdate({ editor }) {
            update({ content: editor.getHTML() })
        },
        immediatelyRender: false
    })

    useEffect(() => {
        if (!editor) return
        if (editor.getHTML() !== value.content) {
            editor.commands.setContent(value.content, { emitUpdate: false })
        }
    }, [value.content, editor])


    async function handleAttach(files: FileList) {
        // const uploaded = await Promise.all(
        //     Array.from(files).map(async (file) => {
        //         const res = await uploadToS3(file) // your API
        //         return {
        //             id: crypto.randomUUID(),
        //             url: res.url,
        //             name: file.name,
        //             size: file.size,
        //             mime: file.type
        //         }
        //     })
        // )

        // update({
        //     attachments: [...value.attachments, ...uploaded]
        // })
    }
    return (
        <CustomDialog
            isOpen={showTestimonyModal}
            onClose={onClose}
            contentClassName='md:max-w-[650px] w-full p-5'
        >
            <div className="w-full space-y-4">

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

                <TestimonyEditor editor={editor} />

                <div className="flex flex-wrap gap-2 mt-2">
                    {value?.attachments?.map((file) => (
                        <a
                            key={file.id}
                            href={file.url}
                            target="_blank"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm"
                        >
                            📎 {file.name}
                        </a>
                    ))}
                </div>

                <div className='flex items-stretch justify-between h-20'>
                    <ComposerToolbar
                        editor={editor}
                        onAttach={handleAttach}
                    />
                <FooterActions
                    onPost={onPost}
                    onSchedule={onSchedule}
                    disabled={!value.content || isPosting}
                    />
                </div>
            </div>
        </CustomDialog>
    )
}
