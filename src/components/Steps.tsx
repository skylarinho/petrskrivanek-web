import { useLang } from '@/i18n'

export default function Steps() {
  const { t, fmt } = useLang()

  return (
    <section id="spoluprace" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>{t.steps.h2}</h2>
        </div>
        <ol className="steps">
          {t.steps.items.map((s) => (
            <li key={s.title}>
              <h3>{fmt(s.title)}</h3>
              <p>{fmt(s.text)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
