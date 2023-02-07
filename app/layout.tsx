import './globals.css'
import { Barlow_Semi_Condensed } from '@next/font/google'

const barlow = Barlow_Semi_Condensed({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  preload: true
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={barlow.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-gray-200'>
        <main className="container mx-auto max-w-7xl p-2 md:p-10">
          {children}
        </main>
      </body>
    </html>
  )
}
