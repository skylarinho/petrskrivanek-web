# petrskrivanek.cz

Osobní web Petra Skřivánka. Vite + React 19 + TypeScript + Tailwind 4, předrenderovaný do statického HTML (česky `/`, anglicky `/en/`). Hosting: Cloudflare Pages.

## Příkazy
```bash
npm install
npm run dev      # vývojový server
npm test         # testy (cz(), data projektů)
npm run build    # build + předrenderování do dist/
npm run preview  # náhled produkčního buildu
```
`npm run build` spustí klientský build, SSR build (`dist-ssr/`) a `scripts/prerender.mjs`, který vygeneruje `dist/index.html` a `dist/en/index.html` včetně meta tagů pro oba jazyky.

## Kde se co mění
| co | kde |
|---|---|
| texty (česky i anglicky) | `src/content/copy.ts` |
| projekty a spolupráce, jejich pořadí | `src/content/projects.ts` (anglicky `projects.en.ts`) |
| kilometry ze Stravy, odkazy, e‑mail | `src/content/site.ts` (`RUN`) |
| barvy, písma | `src/index.css` (`@theme`) |
| meta tagy, JSON‑LD | `index.html` (dev) a `scripts/prerender.mjs` (produkce) |
| favicon, OG obrázek, sitemap | `public/` |

České texty procházejí funkcí `cz()` (nezlomitelné mezery, pomlčky, uvozovky). Chybějící údaje se označují `todo: true`, web je ukáže jako „Doplnit“.

## Nasazení na Cloudflare Pages
1. Workers & Pages → Create → Pages → Connect to Git → repo `skylarinho/petrskrivanek-web`.
2. Build command `npm run build`, output directory `dist`, produkční větev `main`. Proměnná `NODE_VERSION` není potřeba, Node bere z `.nvmrc`.
3. Větev `redesign` dostane náhledovou URL `redesign.<projekt>.pages.dev`.
4. Po schválení merge `redesign` → `main`.
5. Pages projekt → Custom domains → `petrskrivanek.cz` a `www`. Staré DNS záznamy pro apex a `www`, které míří jinam, předtím smaž. Záznam pro `hnizdo` nech.
6. Redirect Rule `www.petrskrivanek.cz` → `petrskrivanek.cz`.

Starý web (jednosouborový HTML) je v historii gitu před commitem „Scaffold Vite + React…“.
