import { useLayoutEffect, useRef } from 'react'
import { cz } from '@/lib/cz'
import { ROUTE_PATH } from '@/content/routePath'

const CHECKPOINTS = [
  { href: '#s-crm', label: 'Salesforce CRM', x: 96, y: 176, tx: 112, ty: 181 },
  { href: '#s-email', label: 'E-maily', x: 176, y: 78, tx: 188, ty: 104 },
  { href: '#s-data', label: 'Měření', x: 318, y: 138, tx: 302, ty: 143, anchor: 'end' as const },
  { href: '#s-ai', label: 'AI', x: 236, y: 286, tx: 236, ty: 264, anchor: 'middle' as const },
]

// Zpoždění naskočení bodů (s) při kreslení trasy
const POP_DELAYS = [0.9, 1.35, 1.9, 2.4]

export default function Hero() {
  const routeRef = useRef<SVGPathElement>(null)

  // Délka trasy pro animaci kreslení (stroke-dashoffset)
  useLayoutEffect(() => {
    const r = routeRef.current
    if (r) r.style.setProperty('--len', String(Math.ceil(r.getTotalLength())))
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="wrap">
        <div>
          <h1>{cz('Propojím vaše nástroje, aby pracovaly za vás')}</h1>
          <p className="lead">
            {cz(
              'Pomáhám neziskovkám a malým organizacím se Salesforce, e-mailovými automatizacemi, měřením a AI. Nastavím, propojím a vysvětlím – bez žargonu.',
            )}
          </p>
          <div className="ctas">
            <a className="btn btn-primary" href="#rezervace">
              {cz('Rezervovat 30 minut zdarma')}
            </a>
            <a className="btn btn-ghost" href="#projekty">
              Projekty
            </a>
          </div>
          <p className="meta">Olomouc</p>
        </div>

        <figure className="map">
          <svg viewBox="0 0 360 320" role="img" aria-labelledby="mapT">
            <title id="mapT">{cz('Trasa spolupráce: Salesforce CRM, e-maily, měření a AI')}</title>
            <g className="contour">
              <path d="M-10 40 C60 20 120 60 190 30 S320 10 380 40" />
              <path d="M-10 120 C50 100 110 150 200 110 S320 90 380 130" />
              <path d="M-10 205 C70 190 130 230 210 200 S320 180 380 215" />
              <path d="M-10 300 C60 280 140 320 220 290 S320 270 380 300" />
              <ellipse cx="200" cy="175" rx="58" ry="34" />
              <ellipse cx="200" cy="175" rx="30" ry="16" />
            </g>
            <path ref={routeRef} className="route" id="route" d={ROUTE_PATH} />
            <g className="sf">
              <circle cx="36" cy="282" r="5" fill="#1D332E" />
              <text x="22" y="308">
                start a cíl
              </text>
            </g>
            {CHECKPOINTS.map((c, i) => (
              <g className="cp" key={c.href} style={{ animationDelay: `${POP_DELAYS[i]}s` }}>
                <a href={c.href}>
                  <circle className="o" cx={c.x} cy={c.y} r={10} />
                  <circle className="i" cx={c.x} cy={c.y} r={4} />
                  <text x={c.tx} y={c.ty} textAnchor={c.anchor}>
                    {cz(c.label)}
                  </text>
                </a>
              </g>
            ))}
          </svg>
          <figcaption>
            {cz('Kontakty, e-maily, data a AI jako jedna trasa, ne čtyři oddělené nástroje.')}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
