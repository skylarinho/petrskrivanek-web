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

## Nasazení (Cloudflare Workers, statické soubory)
Web běží jako Cloudflare Worker se statickými soubory (`wrangler.jsonc` → složka `dist`). Každý push do `main` spustí nový build a nasazení.

- **Build command:** `npm run build`, **Deploy command:** `npx wrangler deploy` (Workers & Pages → projekt `petrskrivanek-web` → Settings → Build).
- **Wrangler konfigurace v repu je nutná.** Bez `wrangler.jsonc` se Cloudflare pokouší projekt sám „nakonfigurovat pro Vite“ a build spadne.
- **Žádné proměnné ani API tokeny** web nepotřebuje.
- **Doména:** `petrskrivanek.cz` je přidaná v Settings → Domains & Routes, DNS spravuje Cloudflare (nameservery `*.ns.cloudflare.com`, Active24 je jen registrátor). Záznam `www` je proxied CNAME na `petrskrivanek.cz` a Redirect Rule „Redirect from WWW to root“ ho přesměruje na doménu bez `www`.
- **Subdoména `hnizdo`** míří na Lovable (samostatný projekt, zatím se nepřesouvá). Záznamy `_lovable…` v DNS nech být.
- **Hlavička a cache:** `public/_headers`. Chybová stránka: `public/404.html`.
- **Po nasazení:** Google Search Console (doménová property, TXT záznam v Cloudflare DNS) a odeslání `https://petrskrivanek.cz/sitemap.xml`.

Starý web (jednosouborový HTML) je v historii gitu před commitem „Scaffold Vite + React…“.
