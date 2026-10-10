import { cz } from '@/lib/cz'
import { services } from '@/content/services'

export default function Services() {
  return (
    <section className="services" id="sluzby">
      <div className="wrap">
        <div className="sec-head">
          <h2>Co dělám</h2>
          <p className="lead">
            {cz('Čtyři věci, které spolu souvisejí. Kontakty v CRM, e-maily z nich, měření výsledků a AI na rutinu.')}
          </p>
        </div>
        <ol className="stops">
          {services.map((s) => (
            <li className="stop" id={s.id} key={s.id}>
              <span className="dot" aria-hidden="true" />
              <h3>{cz(s.title)}</h3>
              <p>{cz(s.text)}</p>
              <ul className="tools">
                {s.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="also">
          <strong>Dál umím:</strong>{' '}
          {cz('online reklamu včetně Google Ad Grants a Skliku, UX a weby od wireframu po spuštění.')}
        </p>
      </div>
    </section>
  )
}
