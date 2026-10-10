import { useEffect, useState } from 'react'
import portret from '@/assets/portret-petr.jpeg'

const NAV = [
  { href: '#sluzby', label: 'Co dělám' },
  { href: '#projekty', label: 'Projekty' },
  { href: '#beh', label: 'Běh' },
  { href: '#o-mne', label: 'O mně' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting))
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  return (
    <header className={`top${scrolled ? ' scrolled' : ''}`} id="top">
      <div className="wrap">
        <a className="brand" href="#hero">
          <img src={portret} alt="" width={40} height={40} />
          Petr Skřivánek
        </a>
        <nav className="nav" aria-label="Hlavní">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary btn-sm" href="#rezervace">
          Rezervovat hovor
        </a>
      </div>
    </header>
  )
}
