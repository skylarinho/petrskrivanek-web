import { useEffect, useState } from 'react'
import { useLang } from '@/i18n'

/** Mobilní spodní lišta s CTA: po odscrollování z hera, mizí v sekci Kontakt. */
export default function Dock() {
  const { t, fmt } = useLang()
  const [heroOut, setHeroOut] = useState(false)
  const [contactIn, setContactIn] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    const contact = document.getElementById('kontakt')
    if (!hero || !contact) return
    const a = new IntersectionObserver(([e]) => setHeroOut(!e.isIntersecting))
    const b = new IntersectionObserver(([e]) => setContactIn(e.isIntersecting))
    a.observe(hero)
    b.observe(contact)
    return () => {
      a.disconnect()
      b.disconnect()
    }
  }, [])

  const on = heroOut && !contactIn

  return (
    <div className={`dock${on ? ' on' : ''}`} aria-hidden={!on} inert={!on}>
      <span>{fmt(t.dock.text)}</span>
      <a className="btn btn-sm" href="#rezervace">
        {t.dock.cta}
      </a>
    </div>
  )
}
