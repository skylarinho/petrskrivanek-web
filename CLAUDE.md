# petrskrivanek.cz – instrukce pro Claude Code

Osobní web Petra Skřivánka: výkladní skříň a portfolio. Cílovou skupinou jsou neziskovky a malé organizace. Hlavní akcí je rezervace 30min hovoru přes Calendly, embedovaného přímo v sekci Kontakt (`#rezervace`). Všechna CTA na webu vedou na tuto kotvu.
Vizuální předloha je `mockup/index.html` a `mockup/case-studie.html`. Je závazná pro rozvržení, barvy, typografii a texty.

## Stack a cíl
- Stávající projekt pochází z Lovable: Vite + React + TS + Tailwind + shadcn/ui. Stack ponech, jen ho vyčisti.
- Hosting: GitHub → Cloudflare Workers (statické soubory, `wrangler.jsonc`) → doména petrskrivanek.cz (živě od 10/2026).
- Build `npm run build`, výstup `dist/` (předrenderované `/` a `/en/`), SPA fallback se nepoužívá.
- Případové studie jsou **zatím skryté**. Šablonu (`mockup/case-studie.html`) připrav jako route `/projekty/:slug` za přepínačem `SHOW_CASE_STUDIES = false`. Dokud je vypnutý, route se negeneruje a karty odkazují na web klienta. Po zapnutí musí být studie indexovatelné (prerender, např. `vite-react-ssg`, před instalací se zeptej).

## Odstranit z Lovable
- `lovable-tagger` a jeho volání ve `vite.config.ts`, odznak „Edit with Lovable“.
- Meta `author: Lovable`, `twitter:site @Lovable`, OG obrázek z lovable.app. Nahradit vlastním OG obrázkem 1200×630.

## Design tokeny (Tailwind theme.extend + CSS proměnné)
| token | hex | použití |
|---|---|---|
| bg (Ranní pole) | #EEF0EA | pozadí stránky |
| surface | #FFFFFF | karty |
| ink (Smrk) | #1D332E | text, tmavé sekce, primární tlačítko |
| ink-2 (Mech) | #4A5C55 | sekundární text |
| line | #C9D1C6 | linky, okraje |
| ochre (Skřivan) | #C7893A | jen grafika: body trasy, čísla kroků (na textu nesplní kontrast) |
| ochre-text | #8A5419 | oranžový text (AA) |
| leaf (Sazenice) | #D7E6C3 | sekce Běh, štítek „neziskovka“ |

- Písma (Google Fonts, `latin-ext`): **Big Shoulders Display** 800 na nadpisy a velká čísla, **Schibsted Grotesk** 400/500/700 na text a UI.
- Zaoblení: 99px tlačítka a štítky, 18px velké karty, 6px malé bloky. Stíny téměř žádné, jediný je pod startovním číslem.
- Mobil první: základ 390 px, desktop od 860 px (`md:` uprav na 860 px nebo použij vlastní breakpoint).

## Klíčové prvky (držet přesně)
1. **Hero trasa**: SVG běžecké trasy (GPS styl) se 4 kontrolními body: Salesforce CRM, E-maily, Měření, AI. Body odkazují na kotvy služeb. Při načtení se trasa jednou nakreslí (stroke-dashoffset 2,4 s) a body postupně naskočí. Jinde na stránce žádná automatická animace. Při `prefers-reduced-motion` se animace vypne.
2. **Co dělám** jako trasa: na mobilu svislá přerušovaná čára, na desktopu vodorovná, 4 zastávky.
3. **Startovní číslo** „3 800+“ v sekci Běh: bílá karta se 4 dírkami po špendlících, natočená o −2°.
4. **Projekty**: 3 vybrané karty (`featured`, první přes celou šířku: Velvet Smile, Otevřená zahrada, Nadace Partnerství). Pod nimi seznam dalších spoluprací s filtrem (počty u čipů). V „Vše“ se ukáže prvních 6 a tlačítko „Zobrazit všechny spolupráce“, při aktivním filtru se ukáže vše, co odpovídá. Projektů bude přibývat, nic nesmí být napevno v JSX.
5. **Krizová komunikace (Zátor 2024)**: nenápadný blok „Když jde do tuhého“ v sekci O mně (okrová linka vlevo). Nepatří mezi projekty ani do služeb.
6. **Calendly inline embed** v bílém rámu (výška 700 px), skript `https://assets.calendly.com/assets/external/widget.js` načítat lazy, až když se sekce blíží viewportu (IntersectionObserver). Jako fallback `noscript` odkaz.
7. Mobilní spodní lišta s CTA se zobrazí po odscrollování z hera a zmizí v sekci Kontakt.

## Obsah a data
- Projekty drž v `src/content/projects.ts` (typ `Project`: slug, client, formerName?, isNonprofit, title, summary, tags, filters[], url, featured, order, caseStudy?, todo?). Nový klient se přidává jen sem.
- **Nic nevymýšlej.** Recenze, čísla, výsledky, citace ani data klientů. Co chybí, zobraz jako viditelný placeholder (`.todo` = čárkovaný okrový obrys + štítek „Doplnit“). Před spuštěním musí být všechny placeholdery vyřešené, nebo blok skrytý.
- Strava: API je odpojené, čísla se mění ručně v `src/content/site.ts` (`RUN`, stav z profilu na Stravě). Žádná Cloudflare Function ani graf, `@uiarc/sparkline` odpadá.

## Česká typografie (povinné)
- Nezlomitelná mezera (`\u00A0`) po jednopísmenných předložkách a spojkách (v, k, s, z, o, u, a, i), mezi číslem a jednotkou („30 minut“, „5 let“) a v tisících („3 800“).
- Pomlčka je `–` s mezerami, nikdy spojovník. Uvozovky „…“. „E‑mail“ píš s nezlomitelným spojovníkem (U+2011).
- Udělej utilitu `cz(text)` a použij ji na všechny texty z `projects.ts` a další copy. Nadpisy mají `text-wrap: balance`, odstavce `text-wrap: pretty`.
- `<html lang="cs">`.

## Arc Library (jen interakce, ne vzhled)
Registry: `"@uiarc": "https://uiarc.dev/r/{name}.json"` v `components.json`. Arc vyžaduje React 19 a `motion`. Zkontroluj verzi Reactu v projektu a případný upgrade nejdřív navrhni.
- `@uiarc/filter-toolbar`: filtr seznamu projektů (Vše / Neziskovky / Měření / Weby a UX), s počty
- `@uiarc/drawer` nebo `bottom-sheet`: mobilní menu
- `@uiarc/sparkline`: graf běhů ze Stravy
- `@uiarc/copy-button`: kopírování e-mailu v kontaktu
Vzhled komponent vždy přebij našimi tokeny, vlastní styly Arcu nepoužívej.

## Kvalita
- Kontrola na 390 px a 1440 px (Playwright screenshot), žádný horizontální scroll.
- Viditelný focus (3px okrový outline), kontrast AA, alt texty, tlačítka filtru s `aria-pressed`.
- Lighthouse mobil ≥ 95 ve všech kategoriích. Fotky ve WebP/AVIF se zadanými rozměry.


## Stav implementace (10/2026)
Odchylky od textu výše, které jsou odsouhlasené:
- **Arc Library se nepoužívá.** Filtr projektů, mobilní menu (nativní `<dialog>`) a kopírování e-mailu jsou vlastní komponenty. `sparkline` odpadá, Strava API je odpojené a kilometry se mění ručně v `src/content/site.ts`.
- **Předrenderování** řeší vlastní `scripts/prerender.mjs` (bez `vite-react-ssg`), vygeneruje `/` (cs) a `/en/` (en).
- **Dvojjazyčnost:** texty v `src/content/copy.ts`, `cz()` jen pro češtinu.
- **Písma** jsou hostovaná lokálně (`@fontsource`), ne z Google Fonts.
- **Případové studie** zatím nejsou postavené, `SHOW_CASE_STUDIES = false` je jen přepínač v datech.
- Tailwind 4: tokeny jsou v `@theme` v `src/index.css`, vzhled komponent v `src/site.css` (převzato z mockupu).
