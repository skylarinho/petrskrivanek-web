import { useState } from 'react'
import { useLang } from '@/i18n'
import { localizeProject } from '@/content/projects.en'
import {
  PROJECT_FILTERS,
  countByFilter,
  displayUrl,
  featuredProjects,
  otherProjects,
  projectHref,
  type ProjectFilter,
} from '@/content/projects'

const LIMIT = 6

export default function Projects() {
  const { lang, t, fmt } = useLang()
  const p = t.projects
  const [filter, setFilter] = useState<'all' | ProjectFilter>('all')
  const [expanded, setExpanded] = useState(false)

  const matching = otherProjects.filter((x) => filter === 'all' || x.filters.includes(filter))
  const visible = filter === 'all' && !expanded ? matching.slice(0, LIMIT) : matching
  const canExpand = filter === 'all' && !expanded && matching.length > LIMIT

  return (
    <section id="projekty">
      <div className="wrap">
        <div className="sec-head">
          <h2>{p.h2}</h2>
        </div>

        <div className="cases">
          {featuredProjects.map((proj, i) => {
            const L = localizeProject(proj, lang)
            return (
              <article className={`case${i === 0 ? ' feat' : ''}`} key={proj.slug}>
                {proj.screenshot ? (
                  <img className="shot" src={proj.screenshot} alt="" loading="lazy" />
                ) : (
                  <div className="shot todo">
                    {displayUrl(proj.url)}
                    <br />
                    {p.screenshotTodo}
                  </div>
                )}
                <div className="body">
                  <p className="client">
                    {fmt(proj.client)}
                    {proj.isNonprofit && <span>{p.nonprofit}</span>}
                  </p>
                  <h3>{L.title}</h3>
                  <p>{L.summary}</p>
                  <ul className="tags">
                    {L.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a className="more" href={projectHref(proj)}>
                    {displayUrl(proj.url)}
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="more-head">
          <h3>{p.moreHeading}</h3>
          <div className="chips" role="group" aria-label={p.filterLabel}>
            {PROJECT_FILTERS.map((f) => (
              <button key={f.key} type="button" aria-pressed={filter === f.key} onClick={() => setFilter(f.key)}>
                {p.filters[f.key]} <span className="c">{countByFilter(f.key)}</span>
              </button>
            ))}
          </div>
        </div>

        <ul className="plist">
          {visible.map((proj) => {
            const L = localizeProject(proj, lang)
            return (
              <li key={proj.slug}>
                <a href={projectHref(proj)}>
                  <span className="n">
                    {fmt(proj.client)}
                    {proj.isNonprofit && <em>{p.nonprofit}</em>}
                    {proj.formerName && (
                      <em className="was">
                        {p.formerly} {proj.formerName}
                      </em>
                    )}
                  </span>
                  <span className="d">{L.summary}</span>
                  <span className={`u${proj.todo ? ' todo' : ''}`}>{proj.todo ? p.verifyUrl : displayUrl(proj.url)}</span>
                </a>
              </li>
            )
          })}
        </ul>
        {canExpand && (
          <button type="button" className="btn btn-ghost showall" onClick={() => setExpanded(true)}>
            {p.showAll}
          </button>
        )}
      </div>
    </section>
  )
}
