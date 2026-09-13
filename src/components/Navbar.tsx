import { useState } from 'react'

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6 lg:px-8">
        {/* Left slot: hamburger on mobile, logo + brand name on desktop */}
        <div className="flex flex-1 items-center">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="cursor-pointer text-slate-700 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <a href="#home" className="hidden items-center gap-2 md:flex">
            <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
              DS
            </span>
            <span className="text-lg font-extrabold text-slate-900">
              Dev<span className="brand-gradient-text">Stack</span>
            </span>
          </a>
        </div>

        {/* Center slot: nav links on desktop, logo only on mobile */}
        <div className="flex flex-1 items-center justify-center">
          <a href="#home" className="flex items-center md:hidden">
            <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
              DS
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={
                  index === 0
                    ? 'text-sm font-semibold text-[var(--color-brand-via)]'
                    : 'text-sm font-medium text-slate-600 transition-colors hover:text-slate-900'
                }
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Right slot: auth buttons, same on every breakpoint */}
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
          <button
            type="button"
            className="cursor-pointer text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Sign In
          </button>
          <button
            type="button"
            className="brand-gradient cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-white sm:px-5"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile menu panel, toggled by the hamburger button */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-slate-100 px-4 py-3 md:hidden">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className={
                index === 0
                  ? 'rounded-lg px-3 py-2 text-sm font-semibold text-[var(--color-brand-via)]'
                  : 'rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
