import logo from '@/assets/logo-skrivan.webp'
import { useLang } from '@/i18n'

export default function Footer() {
  const { t } = useLang()
  const nav = [
    { href: '#sluzby', label: t.nav.services },
    { href: '#projekty', label: t.nav.projects },
    { href: '#beh', label: t.nav.run },
    { href: '#o-mne', label: t.nav.about },
  ]

  return (
    <footer>
      <div className="wrap foot">
        <div className="foot-brand">
          <img src={logo} alt="" width={40} height={40} loading="lazy" />
          <div>
            <strong>Petr Skřivánek</strong>
            <span>{t.footer.tagline}</span>
          </div>
        </div>
        <nav className="foot-nav" aria-label={t.nav.mainLabel}>
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="foot-top" href="#hero">
          {t.footer.top} <span aria-hidden="true">↑</span>
        </a>
        <p className="foot-meta">
          <span>{t.footer.text}</span>
          <a className="lang-link" href={t.nav.switchTo.href} hrefLang={t.nav.switchTo.label === 'English' ? 'en' : 'cs'}>
            {t.nav.switchTo.label}
          </a>
        </p>
      </div>
    </footer>
  )
}
