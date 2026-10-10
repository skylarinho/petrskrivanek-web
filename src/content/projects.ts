import velvetSmile from '@/assets/projects/velvet-smile.webp'
import otevrenaZahrada from '@/assets/projects/otevrena-zahrada.webp'
import nadacePartnerstvi from '@/assets/projects/nadace-partnerstvi.webp'

/**
 * Všechny projekty na webu. Nový klient se přidává jen sem.
 * Texty se na výstupu prohánějí přes `cz()`, tady zůstávají čisté.
 * Co není ověřené, má `todo: true` a web ho ukáže jako placeholder.
 */

export type ProjectFilter = 'nz' | 'mer' | 'web'

export const PROJECT_FILTERS: { key: 'all' | ProjectFilter; label: string }[] = [
  { key: 'all', label: 'Vše' },
  { key: 'nz', label: 'Neziskovky' },
  { key: 'mer', label: 'Měření' },
  { key: 'web', label: 'Weby a UX' },
]

export type Project = {
  slug: string
  client: string
  /** Dřívější název klienta, např. po rebrandingu. */
  formerName?: string
  /** Neziskovka, zobrazí se štítek. */
  isNonprofit: boolean
  /** Nadpis karty (featured) nebo krátký popis spolupráce (seznam). */
  title: string
  summary: string
  tags: string[]
  filters: ProjectFilter[]
  url: string
  featured: boolean
  /** Pořadí v rámci featured a v rámci seznamu. */
  order: number
  /** Cesta ke screenshotu (16:10, min. 1600 px). Bez něj se ukáže placeholder. */
  screenshot?: string
  /** Případová studie, route /projekty/:slug za SHOW_CASE_STUDIES. */
  caseStudy?: { published: boolean }
  /** Údaj čeká na ověření. Web ho označí „Doplnit“. */
  todo?: boolean
}

/** Přepínač případových studií. Dokud je false, karty vedou na web klienta. */
export const SHOW_CASE_STUDIES = false

export const projects: Project[] = [
  // ---------- Vybrané ----------
  {
    slug: 'velvet-smile',
    client: 'Velvet Smile, Brno',
    isNonprofit: true,
    title: 'Celé technické zázemí jedné neziskovky',
    summary:
      'Web, doména, e-maily, newsletter i online dary. Starám se o všechno technické, aby se Věra mohla naplno věnovat rodinám, kterým pomáhá.',
    tags: ['Web', 'Doména a e-maily', 'Brevo', 'Darujme', 'Měření'],
    filters: ['nz', 'web', 'mer'],
    url: 'https://velvetsmile.com',
    featured: true,
    order: 1,
    screenshot: velvetSmile,
  },
  {
    slug: 'otevrena-zahrada',
    client: 'Otevřená zahrada, Brno',
    isNonprofit: true,
    title: 'Web vzdělávacího prostoru pod Špilberkem',
    summary: 'Vedení výroby webu od wireframu přes SEO po nastavení měření.',
    tags: ['Wireframe', 'SEO', 'Měření'],
    filters: ['nz', 'web', 'mer'],
    url: 'https://otevrena-zahrada.cz',
    featured: true,
    order: 2,
    screenshot: otevrenaZahrada,
  },
  {
    slug: 'nadace-partnerstvi',
    client: 'Nadace Partnerství',
    isNonprofit: true,
    title: 'Web, analytika a CRM pod jednou střechou',
    summary:
      'Koordinace výroby webu, wireframy a UX konzultace, měření událostí s reportingem a správa a rozvoj CRM v Salesforce.',
    tags: ['Salesforce', 'GA4', 'Tag Manager', 'UX'],
    filters: ['nz', 'mer', 'web'],
    url: 'https://nadacepartnerstvi.cz',
    featured: true,
    order: 3,
    screenshot: nadacePartnerstvi,
  },

  // ---------- Další spolupráce ----------
  {
    slug: 'lipka',
    client: 'Lipka',
    isNonprofit: true,
    title: 'Konzultace webu, měření a reporting, technický rozvoj e-mail marketingu',
    summary: 'Konzultace webu, měření a reporting, technický rozvoj e-mail marketingu',
    tags: [],
    filters: ['nz', 'mer', 'web'],
    url: 'https://lipka.cz',
    featured: false,
    order: 1,
  },
  {
    slug: 'evropsky-strom-roku',
    client: 'Evropský strom roku',
    isNonprofit: true,
    title: 'Koordinace a rozvoj projektu Nadace Partnerství',
    summary: 'Koordinace a rozvoj projektu Nadace Partnerství',
    tags: [],
    filters: ['nz'],
    url: 'https://treeoftheyear.org',
    featured: false,
    order: 2,
  },
  {
    slug: 'bevlava',
    client: 'Bevlava',
    isNonprofit: false,
    title: 'Měření, reporting a UX konzultace webu turistických stezek',
    summary: 'Měření, reporting a UX konzultace webu turistických stezek',
    tags: [],
    filters: ['mer', 'web'],
    url: 'https://bevlava.cz',
    featured: false,
    order: 3,
  },
  {
    slug: 'snt-group',
    client: 'SNT Group',
    formerName: 'Sonet Studio',
    isNonprofit: false,
    title: 'Kompletní nastavení měření, propojení s reklamou a reporting',
    summary: 'Kompletní nastavení měření, propojení s reklamou a reporting',
    tags: [],
    filters: ['mer'],
    url: 'https://sonetstudio.cz', // vyměnit, až bude nový web SNT Group
    featured: false,
    order: 4,
  },
  {
    slug: 'belis',
    client: 'Smaltované nádobí Belis',
    isNonprofit: false,
    title: 'Audit analytiky, nastavení měření a reporting',
    summary: 'Audit analytiky, nastavení měření a reporting',
    tags: [],
    filters: ['mer'],
    url: 'https://smaltovanenadobibelis.cz',
    featured: false,
    order: 6,
  },
  {
    slug: 'ck-katu',
    client: 'CK Katu',
    isNonprofit: false,
    title: 'Měření poptávek a rezervací zájezdů',
    summary: 'Měření poptávek a rezervací zájezdů',
    tags: [],
    filters: ['mer'],
    url: 'https://www.katu.cz',
    featured: false,
    order: 7,
  },
  {
    slug: 'hotel-dvorana',
    client: 'Hotel Dvorana',
    isNonprofit: false,
    title: 'Měření rezervací, formulářů a telefonních prokliků',
    summary: 'Měření rezervací, formulářů a telefonních prokliků',
    tags: [],
    filters: ['mer'],
    url: 'https://hoteldvorana.cz',
    featured: false,
    order: 8,
  },
  {
    slug: 'ondrasovka',
    client: 'Ondrášovka',
    isNonprofit: false,
    title: 'Pokročilé měření scrollu a interakcí na single page webu',
    summary: 'Pokročilé měření scrollu a interakcí na single page webu',
    tags: [],
    filters: ['mer'],
    url: 'https://ondrasovka.cz',
    featured: false,
    order: 5,
  },
  {
    slug: 'novy-amos',
    client: 'Nový Amos',
    isNonprofit: false,
    title: 'Měření a konverze vzdělávací platformy',
    summary: 'Měření a konverze vzdělávací platformy',
    tags: [],
    filters: ['mer'],
    url: 'https://kurzy.novyamos.cz',
    featured: false,
    order: 9,
  },
]

const byOrder = (a: Project, b: Project) => a.order - b.order

export const featuredProjects = projects.filter((p) => p.featured).sort(byOrder)
export const otherProjects = projects.filter((p) => !p.featured).sort(byOrder)

/** Kolik projektů v seznamu „Další spolupráce“ odpovídá filtru (čísla u čipů). */
export function countByFilter(key: 'all' | ProjectFilter): number {
  return otherProjects.filter((p) => key === 'all' || p.filters.includes(key)).length
}

/** Doména pro zobrazení, např. „https://www.katu.cz“ na „katu.cz“. */
export function displayUrl(url: string): string {
  return new URL(url).host.replace(/^www\./, '')
}

/** Odkaz karty: případová studie jen když je přepínač zapnutý a studie publikovaná. */
export function projectHref(p: Project): string {
  return SHOW_CASE_STUDIES && p.caseStudy?.published ? `/projekty/${p.slug}` : p.url
}
