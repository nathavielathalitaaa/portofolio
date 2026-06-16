import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Beranda',    href: '/#hero-intro' },
  { label: 'Tentang',    href: '/#about' },
  { label: 'Perjalanan', href: '/#journey' },
  { label: 'Portofolio', href: '/#portfolio' },
  { label: 'Kontak',     href: '/#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero-intro')

  // Scrollspy
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      const scrollY = window.pageYOffset
      sections.forEach(section => {
        const top = section.offsetTop - 150
        const height = section.offsetHeight
        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(section.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (!e.target.closest('#navbar-root')) setMenuOpen(false)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="fixed top-5 right-[5%] z-50">
      <nav id="navbar-root" className="relative">

        {/* Hamburger toggle button — always visible */}
        <button
          className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-black
                     shadow-[4px_4px_0px_#000000] font-bold text-[0.85rem] cursor-pointer
                     active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000]
                     hover:bg-[var(--brand-pink)] hover:text-white transition-colors"
          onClick={(e) => { e.stopPropagation(); setMenuOpen(v => !v) }}
          aria-label="Toggle navigation menu"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-[1rem]`}></i>
          <span>Menu</span>
        </button>

        {/* Full nav dropdown — same brutalist style as original */}
        {menuOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white border-2 border-black shadow-[4px_4px_0px_#000000]">
            <ul className="flex flex-col list-none p-3 gap-2 min-w-[180px]">
              {navItems.map(item => {
                const id = item.href.split('#')[1]
                const isActive = activeSection === id
                return (
                  <li key={id}>
                    <a
                      href={item.href}
                      onClick={handleNavClick}
                      className={`block text-[0.85rem] font-bold no-underline px-4 py-2 border-2 border-black transition-all
                        ${isActive
                          ? 'bg-[var(--brand-pink)] text-white shadow-[1px_1px_0px_#000000] translate-x-[2px] translate-y-[2px]'
                          : 'bg-white text-[var(--text-dark)] hover:bg-[var(--brand-pink)] hover:text-white shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000]'
                        }`}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

      </nav>
    </header>
  )
}
