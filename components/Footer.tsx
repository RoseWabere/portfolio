import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold mb-2">Rose Wabere</h3>
            <p className="text-text-muted text-sm">
              Data Engineer · Nairobi, Kenya · Founder, Data Scout KE
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/RoseWabere" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary-500 transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="https://linkedin.com/in/rosewabere" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary-500 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="https://datascoutke.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary-500 transition-colors"
              aria-label="Data Scout KE"
            >
              <i className="fas fa-building text-xl"></i>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-light text-center text-text-light text-sm">
          © {currentYear} Rose Wabere. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
