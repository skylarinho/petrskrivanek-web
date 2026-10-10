import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { cz } from '@/lib/cz'
import { copy, type Copy, type Lang } from '@/content/copy'

type Ctx = { lang: Lang; t: Copy; fmt: (s: string) => string }

const LangContext = createContext<Ctx | null>(null)

/** Jazyk z cesty: /en/… je angličtina, vše ostatní čeština. */
export function langFromPath(pathname: string): Lang {
  return /^\/en(\/|$)/.test(pathname) ? 'en' : 'cs'
}

export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const t = copy[lang]
  // Česká typografie jen pro češtinu
  const fmt = lang === 'cs' ? cz : (s: string) => s

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang, t])

  return <LangContext.Provider value={{ lang, t, fmt }}>{children}</LangContext.Provider>
}

export function useLang(): Ctx {
  const c = useContext(LangContext)
  if (!c) throw new Error('useLang musí být uvnitř LangProvider')
  return c
}
