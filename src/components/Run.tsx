import type { ReactNode } from 'react'
import { useLang } from '@/i18n'
import { APP_URL, RUN, STRAVA_URL, TREE_PROJECT_URL } from '@/content/site'

/** Malé linkové ikonky ke statistikám. */
const Icon = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

const IconRoute = () => (
  <Icon>
    <circle cx="8" cy="25" r="3" />
    <circle cx="24" cy="7" r="3" />
    <path d="M10.5 23.5C16 19 8 14 14 11c3-1.5 6 0 7.5-2.5" strokeDasharray="1 4" />
  </Icon>
)
const IconMountain = () => (
  <Icon>
    <path d="M3 26 13 8l5 8 3-4 8 14z" />
  </Icon>
)
const IconRun = () => (
  <Icon>
    <circle cx="19" cy="6" r="2.5" />
    <path d="M19 10l-3 7-5 1m5-1 4 3-1 7m-5-10 4-3 5 1 3-2" />
  </Icon>
)

export default function Run() {
  const { lang, t, fmt } = useLang()
  const r = t.run
  const nf = new Intl.NumberFormat(lang === 'cs' ? 'cs-CZ' : 'en-GB')
  const km = nf.format(Math.round(RUN.yearKm))

  return (
    <section className="run" id="beh">
      <div className="wrap">
        <div className="bib" role="group" aria-label={r.bibLabel.replace('{km}', km)}>
          <span className="pins-b" aria-hidden="true" />
          <p className="ev">{r.bibEvent}</p>
          <p className="num">{fmt(km)}</p>
          <p className="cap">{r.bibCaption}</p>
        </div>
        <div>
          <h2>{r.h2}</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            {fmt(r.lead)}
          </p>
          <div className="links">
            <a className="btn btn-ghost" href={STRAVA_URL}>
              {r.stravaButton}
            </a>
          </div>
        </div>
      </div>

      <div className="wrap tiles">
        <section className="tile" aria-labelledby="tile-total">
          <h3 id="tile-total">{r.totalTitle}</h3>
          <dl className="stat-list">
            <div>
              <IconRoute />
              <dt>{r.totalKm}</dt>
              <dd>{fmt(nf.format(Math.round(RUN.allTime.km)))}</dd>
            </div>
            <div>
              <IconRun />
              <dt>{r.totalActivities}</dt>
              <dd>{fmt(nf.format(RUN.allTime.activities))}</dd>
            </div>
            <div>
              <IconMountain />
              <dt>{r.totalElevation}</dt>
              <dd>{fmt(nf.format(RUN.allTime.elevation))}</dd>
            </div>
          </dl>
        </section>

        <section className="tile" aria-labelledby="tile-best">
          <h3 id="tile-best">{r.bestTitle}</h3>
          <dl className="best-list">
            <div>
              <dt>{r.best.k5}</dt>
              <dd>{RUN.best.k5}</dd>
            </div>
            <div>
              <dt>{r.best.k10}</dt>
              <dd>{RUN.best.k10}</dd>
            </div>
            <div>
              <dt>{r.best.half}</dt>
              <dd>{RUN.best.half}</dd>
            </div>
            <div>
              <dt>{r.best.marathon}</dt>
              <dd>{RUN.best.marathon}</dd>
            </div>
          </dl>
        </section>

        <section className="tile tile-app" aria-labelledby="tile-app">
          <p className="status">{r.appStatus}</p>
          <h3 id="tile-app">{fmt(r.appTitle)}</h3>
          <p>{fmt(r.appText)}</p>
          <a className="btn btn-primary btn-sm" href={APP_URL}>
            {r.appLink}
          </a>
        </section>

        <section className="tile" aria-labelledby="tile-tree">
          <h3 id="tile-tree">{fmt(r.treeTitle)}</h3>
          <p>{fmt(r.treeText)}</p>
          <a className="more" href={TREE_PROJECT_URL}>
            {r.treeLink}
          </a>
        </section>
      </div>
    </section>
  )
}
