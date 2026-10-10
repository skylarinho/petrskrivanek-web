import { useLang } from '@/i18n'

export default function Services() {
  const { t, fmt } = useLang()
  const s = t.services

  return (
    <section className="services" id="sluzby">
      <div className="wrap">
        <div className="sec-head">
          <h2>{s.h2}</h2>
        </div>
        <ol className="stops">
          {s.items.map((it) => (
            <li className="stop" id={it.id} key={it.id}>
              <span className="dot" aria-hidden="true" />
              <h3>{fmt(it.title)}</h3>
              <p>{fmt(it.text)}</p>
              <ul className="tools">
                {it.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="also">
          <strong>{s.alsoLabel}</strong> {fmt(s.also)}
        </p>
      </div>
    </section>
  )
}
