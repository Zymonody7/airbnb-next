import ClientOnly from './components/ClientOnly'
import Modal from './components/modals'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import ToastProvider from './providers/ToastProvider'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone demo'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider></ToastProvider>
          <RegisterModal></RegisterModal>
          <Navbar></Navbar>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
