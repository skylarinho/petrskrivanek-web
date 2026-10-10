import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/i18n'
import { CALENDLY_PLAIN_URL, CALENDLY_URL, EMAIL, INSTAGRAM, LINKEDIN } from '@/content/site'

const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js'

/** Calendly skript se načte až ve chvíli, kdy se sekce blíží viewportu. */
function useLazyCalendly(target: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = target.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        if (!document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)) {
          const s = document.createElement('script')
          s.src = CALENDLY_SCRIPT
          s.async = true
          document.body.appendChild(s)
        }
      },
      { rootMargin: '600px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])
}

function CopyEmail() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* schránka nemusí být dostupná, odkaz mailto: funguje dál */
    }
  }

  return (
    <button type="button" className="copy" onClick={copy} aria-live="polite">
      {copied ? t.contact.copied : t.contact.copy}
    </button>
  )
}

export default function Contact() {
  const { lang, t, fmt } = useLang()
  const c = t.contact
  const cal = useRef<HTMLDivElement>(null)
  useLazyCalendly(cal)

  return (
    <section className="contact" id="kontakt">
      <div className="wrap">
        <h2>{c.h2}</h2>
        <p className="lead" style={{ marginTop: 16 }}>
          {fmt(c.lead)}
        </p>
        <div className="cal" id="rezervace" ref={cal}>
          <div className="calendly-inline-widget" data-url={`${CALENDLY_URL}${lang === 'en' ? '&locale=en' : ''}`} />
          <noscript>
            <a href={CALENDLY_PLAIN_URL}>{c.calendlyFallback}</a>
          </noscript>
        </div>
        <div className="ctas">
          <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>
            {fmt(c.mail)}
          </a>
        </div>
        <div className="ways">
          <span>
            {fmt(c.mailLabel)}: <a href={`mailto:${EMAIL}`}>{EMAIL}</a> <CopyEmail />
          </span>
          <span>
            LinkedIn: <a href={LINKEDIN.href}>{LINKEDIN.label}</a>
          </span>
          <span>
            Instagram: <a href={INSTAGRAM.href}>{INSTAGRAM.label}</a>
          </span>
        </div>
      </div>
    </section>
  )
}
