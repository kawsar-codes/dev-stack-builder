const productLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
]

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Careers', href: '#careers' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
]

function Footer() {
  return (
    <footer className="border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
                DS
              </span>
              <span className="text-lg font-extrabold text-slate-900">
                Dev<span className="brand-gradient-text">Stack</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-6 flex items-center gap-5 text-sm font-medium text-slate-600">
              <a
                href="https://github.com/kawsar-codes/dev-stack-builder"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-slate-900"
              >
                GitHub
              </a>
              <a href="#" className="transition-colors hover:text-slate-900">
                Twitter
              </a>
              <a href="#" className="transition-colors hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Product</h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="transition-colors hover:text-slate-600">
              Privacy
            </a>
            <a href="#terms" className="transition-colors hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
