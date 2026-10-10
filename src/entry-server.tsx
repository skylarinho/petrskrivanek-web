import { renderToString } from 'react-dom/server'
import App from './App'
import { copy, type Lang } from './content/copy'

/** Volá scripts/prerender.mjs po buildu. */
export function render(lang: Lang): string {
  return renderToString(<App lang={lang} />)
}

export const metas = { cs: copy.cs.meta, en: copy.en.meta }
export const h1s = { cs: copy.cs.hero.h1, en: copy.en.hero.h1 }
