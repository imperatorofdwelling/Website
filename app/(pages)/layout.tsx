import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '../styles/globals.css'
import Navbar from 'shared/ui/navbar/Navbar'
import ClientOnly from 'shared/ui/ClientOnly'
import RegisterModal from 'shared/ui/modals/RegisterModal'
import ToasterProvider from '../providers/ToasterProvider'
import LoginModal from 'shared/ui/modals/LoginModal'
import RentModal from 'shared/ui/modals/RentModal'
import SearchModal from 'shared/ui/modals/SearchModal'
import { TanStackQueryProvider } from '@/providers/TanStackQueryProvider'
import Script from 'next/script'
import { YandexMapProvider } from '@/providers/YandexMapProvider'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Imperator Of Dwelling',
    description: 'Booking application',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <TanStackQueryProvider>
                    <YandexMapProvider>
                        <ClientOnly>
                            <ToasterProvider />
                            <RegisterModal />
                            <RentModal />
                            <LoginModal />
                            <SearchModal />
                            <Navbar />
                        </ClientOnly>
                        <div className="pb-20 pt-28">{children}</div>
                    </YandexMapProvider>
                </TanStackQueryProvider>
            </body>
        </html>
    )
}
