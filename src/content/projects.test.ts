import { describe, expect, it } from 'vitest'
import { countByFilter, displayUrl, featuredProjects, otherProjects, projects } from './projects'

describe('projects', () => {
  it('má 3 vybrané a 9 dalších', () => {
    expect(featuredProjects).toHaveLength(3)
    expect(otherProjects).toHaveLength(9)
  })
  it('slugy jsou unikátní', () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length)
  })
  it('počty u čipů odpovídají mockupu', () => {
    expect([countByFilter('all'), countByFilter('nz'), countByFilter('mer'), countByFilter('web')]).toEqual([9, 3, 8, 2])
  })
  it('displayUrl vypustí www', () => {
    expect(displayUrl('https://www.katu.cz')).toBe('katu.cz')
    expect(displayUrl('https://kurzy.novyamos.cz')).toBe('kurzy.novyamos.cz')
  })
})

import { projectsEn } from './projects.en'

describe('anglické texty projektů', () => {
  it('má překlad pro každý projekt', () => {
    for (const p of projects) expect(projectsEn[p.slug]?.summary, p.slug).toBeTruthy()
  })
})
