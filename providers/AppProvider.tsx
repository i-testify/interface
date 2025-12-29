import { Navbar, Sidebar } from '@/components/shared'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const AppProvider = ({ children }: Props) => {
    return (
        <div className="flex h-svh flex-col overflow-hidden">
            <Navbar />

            <main className="flex flex-1 overflow-hidden">
                <Sidebar />

                <section className="flex-1 overflow-y-auto">
                    {children}
                </section>
            </main>
        </div>
    )
}

export default AppProvider