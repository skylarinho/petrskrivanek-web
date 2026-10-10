import type { Lang } from './copy'
import { cz } from '@/lib/cz'
import type { Project } from './projects'

/** Anglické texty projektů podle slugu. Chybějící překlad hlídá test. */
export const projectsEn: Record<string, { title: string; summary: string; tags?: string[] }> = {
  'velvet-smile': {
    title: 'The entire technical backbone of a nonprofit',
    summary:
      'Website, domain, email, newsletter and online donations. I take care of everything technical so Věra can focus fully on the families she helps.',
    tags: ['Website', 'Domain and email', 'Brevo', 'Darujme', 'Analytics'],
  },
  'otevrena-zahrada': {
    title: 'Website of an educational space below Špilberk',
    summary: 'Leading the website build from wireframe through SEO to analytics setup.',
    tags: ['Wireframe', 'SEO', 'Analytics'],
  },
  'nadace-partnerstvi': {
    title: 'Website, analytics and CRM under one roof',
    summary:
      'Coordinating the website build, wireframes and UX consultation, event tracking with reporting, and managing and developing the Salesforce CRM.',
  },
  lipka: { title: '', summary: 'Website consultation, analytics and reporting, technical development of email marketing' },
  'evropsky-strom-roku': {
    title: '',
    summary: 'Coordination and development of a Nadace Partnerství project',
  },
  bevlava: { title: '', summary: 'Analytics, reporting and UX consultation for a hiking trails website' },
  'snt-group': { title: '', summary: 'Complete analytics setup, advertising integration and reporting' },
  belis: { title: '', summary: 'Analytics audit, measurement setup and reporting' },
  'ck-katu': { title: '', summary: 'Tracking enquiries and tour bookings' },
  'hotel-dvorana': { title: '', summary: 'Tracking bookings, forms and phone clicks' },
  ondrasovka: { title: '', summary: 'Advanced scroll and interaction tracking on a single-page site' },
  'novy-amos': { title: '', summary: 'Analytics and conversions for an education platform' },
}

/** Titulek, shrnutí a štítky projektu v daném jazyce (čeština s `cz()`). */
export function localizeProject(p: Project, lang: Lang) {
  if (lang === 'cs') {
    return { title: cz(p.title), summary: cz(p.summary), tags: p.tags.map(cz) }
  }
  const en = projectsEn[p.slug]
  return {
    title: en?.title || p.title,
    summary: en?.summary || p.summary,
    tags: en?.tags ?? p.tags,
  }
}
