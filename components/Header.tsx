import Link from 'next/link'

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-gray-900 border-b border-gray-800">
      <Link href="/">
        <span className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-semibold tracking-tight text-lime-400">t0rq.com</span>
        </span>
      </Link>
      <nav className="flex gap-6">
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-100 hover:text-lime-400 font-medium transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
