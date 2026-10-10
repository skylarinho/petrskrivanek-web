import { useEffect, useRef, useState } from 'react'
import logo from '@/assets/logo-skrivan.webp'
import { useLang } from '@/i18n'

export default function Header() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const menu = useRef<HTMLDialogElement>(null)

  const NAV = [
    { href: '#sluzby', label: t.nav.services },
    { href: '#projekty', label: t.nav.projects },
    { href: '#beh', label: t.nav.run },
    { href: '#o-mne', label: t.nav.about },
  ]

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting))
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  const closeMenu = () => menu.current?.close()

  return (
    <header className={`top${scrolled ? ' scrolled' : ''}`} id="top">
      <div className="wrap">
        <a className="brand" href="#hero">
          <img src={logo} alt="" width={40} height={40} />
          Petr Skřivánek
        </a>
        <nav className="nav" aria-label={t.nav.mainLabel}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="top-actions">
          <a className="btn btn-primary btn-sm top-cta" href="#rezervace">
            {t.nav.book}
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-label={t.nav.menu}
            aria-haspopup="dialog"
            onClick={() => menu.current?.showModal()}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobilní menu: nativní <dialog> řeší focus trap, Esc i pozadí */}
      <dialog
        ref={menu}
        className="drawer"
        aria-label={t.nav.menu}
        onClick={(e) => e.target === menu.current && closeMenu()}
      >
        <div className="drawer-in">
          <button type="button" className="drawer-close" aria-label={t.nav.close} onClick={closeMenu}>
            ×
          </button>
          <nav aria-label={t.nav.mainLabel}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={closeMenu}>
                {n.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-primary" href="#rezervace" onClick={closeMenu}>
            {t.nav.book}
          </a>
          <a className="lang-link" href={t.nav.switchTo.href} hrefLang={t.nav.switchTo.label === 'English' ? 'en' : 'cs'}>
            {t.nav.switchTo.label}
          </a>
        </div>
      </dialog>
    </header>
  )
}
