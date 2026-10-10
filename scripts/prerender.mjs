// Předrenderuje obě jazykové verze do dist/index.html (cs) a dist/en/index.html (en).
// Spouští se po `vite build` a `vite build --ssr`, viz skript "build" v package.json.
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const SITE = 'https://petrskrivanek.cz'
const dist = resolve('dist')
const template = await readFile(resolve(dist, 'index.html'), 'utf8')
const { render, metas, h1s } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)

// Písma použitá v prvním zobrazení se načítají přednostně, aby se text po načtení písma neposouval.
const PRELOAD = [/big-shoulders-display-latin(-ext)?-800-normal-.*\.woff2$/, /schibsted-grotesk-latin(-ext)?-400-normal-.*\.woff2$/]
const fonts = (await readdir(resolve(dist, 'assets'))).filter((f) => PRELOAD.some((re) => re.test(f)))
const preloadTags = fonts
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')

const PATHS = { cs: '/', en: '/en/' }
const OG_ALT = { cs: 'Petr Skřivánek – ', en: 'Petr Skřivánek – ' }

function seoBlock(lang) {
  const m = metas[lang]
  const url = SITE + PATHS[lang]
  const other = lang === 'cs' ? 'en' : 'cs'
  return `<!--seo:start-->
    <title>${esc(m.title)}</title>
    <meta name="description" content="${esc(m.description)}" />
    <meta name="author" content="Petr Skřivánek" />
    <meta name="theme-color" content="#EEF0EA" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="cs" href="${SITE}/" />
    <link rel="alternate" hreflang="en" href="${SITE}/en/" />
    <link rel="alternate" hreflang="x-default" href="${SITE}/" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Petr Skřivánek" />
    <meta property="og:locale" content="${m.ogLocale}" />
    <meta property="og:locale:alternate" content="${metas[other].ogLocale}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(m.title)}" />
    <meta property="og:description" content="${esc(m.description)}" />
    <meta property="og:image" content="${SITE}/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(OG_ALT[lang] + h1s[lang])}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(m.title)}" />
    <meta name="twitter:description" content="${esc(m.description)}" />
    <meta name="twitter:image" content="${SITE}/og-image.png" />
    <!--seo:end-->`
}

function build(lang) {
  let html = template
  const start = html.indexOf('<!--seo:start-->')
  const end = html.indexOf('<!--seo:end-->')
  if (start < 0 || end < 0) throw new Error('V index.html chybí značky <!--seo:start--> / <!--seo:end-->')
  html = html.slice(0, start) + seoBlock(lang) + html.slice(end + '<!--seo:end-->'.length)
  html = html.replace('<html lang="cs">', `<html lang="${lang}">`)
  html = html.replace('</head>', `  ${preloadTags}
  </head>`)
  const app = render(lang)
  if (!html.includes('<div id="root"></div>')) throw new Error('V index.html chybí <div id="root"></div>')
  return html.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
}

await writeFile(resolve(dist, 'index.html'), build('cs'))
await mkdir(resolve(dist, 'en'), { recursive: true })
await writeFile(resolve(dist, 'en/index.html'), build('en'))
console.log('Předrenderováno: dist/index.html (cs), dist/en/index.html (en)')
