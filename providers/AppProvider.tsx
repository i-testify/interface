import { AuthModal, Navbar, Sidebar } from '@/components/shared'
import React, { ReactNode } from 'react'
import QueryProvider from './QueryProvider'
import ReduxProvider from './ReduxProvider'
import { GoogleOAuthProvider } from '@react-oauth/google';

interface Props {
    children: ReactNode
}

const AppProvider = ({ children }: Props) => {
    return (
        <GoogleOAuthProvider clientId="<your_client_id>">

            <QueryProvider>
                <ReduxProvider>
                    <div className="flex h-svh flex-col overflow-hidden">
                        <Navbar />
                        <main className="flex flex-1 overflow-hidden">
                            <Sidebar />

                            <section className="flex-1 overflow-y-auto">
                                {children}
                            </section>
                        </main>
                        <AuthModal />
                    </div>
                </ReduxProvider>
            </QueryProvider>
        </GoogleOAuthProvider>
    )
}

export default AppProvider