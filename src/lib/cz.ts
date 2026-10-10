const NBSP = ' '
const NB_HYPHEN = '‑'

/**
 * Česká typografie: nezlomitelné mezery, pomlčky, uvozovky, e‑mail.
 * Je idempotentní, takže ji lze volat opakovaně.
 */
export function cz(text: string): string {
  return (
    text
      // jednopísmenné předložky a spojky (v, k, s, z, o, u, a, i) + mezera
      .replace(/(?<=^|[\s(„“"])([vkszouai]) +/gi, `$1${NBSP}`)
      // tisíce: „3 800“, „1 234 567“
      .replace(/(?<=\d) (?=\d{3}(?!\d))/g, NBSP)
      // číslo + jednotka/slovo: „30 minut“, „5 let“, „8+ let“
      .replace(/(\d\+?) (?=[A-Za-zÀ-ž])/g, `$1${NBSP}`)
      // pomlčka se spojovníkem mezi mezerami → půlčtverčík
      .replace(/ (?:-{1,2}|—) /g, ' – ')
      // rovné uvozovky → české
      .replace(/"([^"]*)"/g, '„$1“')
      // E‑mail s nezlomitelným spojovníkem
      .replace(/(^|[^\w@.-])([eE])-mail/g, `$1$2${NB_HYPHEN}mail`)
  )
}
