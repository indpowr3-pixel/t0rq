import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
