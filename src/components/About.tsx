import fotoPetr from '@/assets/foto-petr.jpg'
import { useLang } from '@/i18n'

export default function About() {
  const { t, fmt } = useLang()
  const a = t.about

  return (
    <section className="about" id="o-mne">
      <div className="wrap">
        <div className="photo">
          <img src={fotoPetr} alt={a.photoAlt} width={600} height={600} loading="lazy" />
        </div>
        <div>
          <h2>{a.h2}</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            {fmt(a.lead)}
          </p>
          <p>{fmt(a.p1)}</p>
          <p>{fmt(a.p2)}</p>
          <dl className="facts">
            {a.facts.map((f) => (
              <div key={f.label} className={f.todo ? 'todo' : undefined}>
                <dt>{f.value}</dt>
                <dd>
                  {fmt(f.label)} {f.todo && <span className="todo-tag">{t.projects.todo}</span>}
                </dd>
              </div>
            ))}
          </dl>
          <aside className="super">
            <h3>{a.crisisTitle}</h3>
            <p>{fmt(a.crisisText)}</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
