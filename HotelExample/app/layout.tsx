import "../styles/globals.css"
import MountedClient from "./components/MountedClient"
import RegisterModal from "./components/modals/RegisterModal"
import Navbar from "./components/navbar/Navbar"
import { Nunito } from "next/font/google"
import ReduxProvider from "./providers/ReduxProvider"
import LoginModal from "./components/modals/LoginModal"
import ToastProvider from "./providers/ToastProvider"
import getCurrentUser from "./actions/getCurrentUser"
import ElementModal from "./components/modals/ElementModal"

const newFont = Nunito({ subsets: ["latin"] })

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    const user = await getCurrentUser()//mevcut kullanıcıya erişim saglar.
    return (
        <html lang="en">
            <body className={newFont.className}>
                <ReduxProvider>
                    <MountedClient>
                        <ToastProvider />
                        <ElementModal />
                        <LoginModal />
                        <RegisterModal />
                        <Navbar user={user} />
                    </MountedClient>
                    {children}
                </ReduxProvider>
            </body>
        </html>
    )
}