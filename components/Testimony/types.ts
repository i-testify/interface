export interface Fellowship {
    id: string
    name: string
}

export interface TestimonyDraft {
    fellowshipId?: string
    title: string
    content: string
    showAvatar: boolean
}

export interface TestifyComposerProps {
    fellowships: Fellowship[]
    value: TestimonyDraft
    onChange: (value: TestimonyDraft) => void
    onPost: () => void
    onSaveDraft?: () => void
    onSchedule?: () => void
    isPosting?: boolean
}
