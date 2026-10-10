import { useLang } from '@/i18n'
import { RUN, STRAVA_URL, TREE_PROJECT_URL } from '@/content/site'

export default function Run() {
  const { lang, t, fmt } = useLang()
  const r = t.run
  const km = new Intl.NumberFormat(lang === 'cs' ? 'cs-CZ' : 'en-GB').format(RUN.km)

  return (
    <section className="run" id="beh">
      <div className="wrap">
        <div className="bib" role="group" aria-label={r.bibLabel}>
          <span className="pins-b" aria-hidden="true" />
          <p className="ev">{r.bibEvent}</p>
          <p className="num">{fmt(`${km}+`)}</p>
          <p className="cap">{fmt(r.bibCaption)}</p>
        </div>
        <div>
          <h2>{r.h2}</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            {fmt(r.lead)}
          </p>
          <p style={{ marginTop: 12 }}>{fmt(r.lead2)}</p>
          <div className="links">
            <a className="btn btn-ghost" href={STRAVA_URL}>
              {r.stravaButton}
            </a>
          </div>

          <aside className="tree">
            <h3>{fmt(r.treeTitle)}</h3>
            <p>{fmt(r.treeText)}</p>
            <a className="more" href={TREE_PROJECT_URL}>
              {r.treeLink}
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
