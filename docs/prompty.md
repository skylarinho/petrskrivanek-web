# Prompty pro Claude Code (postupně, po každém kroku commit)

1. **Audit a úklid**
   Přečti CLAUDE.md a projdi repo z Lovable. Vypiš strukturu, závislosti, verzi Reactu a jak funguje současné napojení na Stravu. Odstraň lovable-tagger, odznak a Lovable meta. Zatím nic nepřepisuj, jen navrhni plán.

2. **Tokeny a typografie**
   Nastav design tokeny a fonty podle CLAUDE.md (Tailwind theme + CSS proměnné). Vytvoř utilitu `cz()` pro českou typografii s testy (předložky, čísla, pomlčky, e‑mail).

3. **Datový model projektů**
   Vytvoř `src/content/projects.ts` s typem `Project` a naplň ho daty z `mockup/index.html` (3 featured + 9 dalších, SNT Group s `formerName: "Sonet Studio"`, Belis s `todo: true`). Chybějící údaje označ `todo: true`, nic nedoplňuj.

4. **Úvodní stránka**
   Postav úvodní stránku podle `mockup/index.html` sekci po sekci. Hero trasu převezmi jako SVG komponentu i s animací a reduced-motion. Filtr projektů udělej přes `@uiarc/filter-toolbar` a mobilní menu přes `@uiarc/drawer`, obojí ostyluj našimi tokeny.

5. **Případové studie (připravit, nezapínat)**
   Route `/projekty/:slug` podle `mockup/case-studie.html` za přepínačem `SHOW_CASE_STUDIES = false`. Na webu se zatím nic nezobrazí.

5b. **Calendly**
   Embed Calendly v sekci Kontakt podle CLAUDE.md (lazy načtení skriptu, fallback odkaz). Všechna CTA vedou na `#rezervace`.

6. **Strava**
   Napoj sekci Běh na Stravu přes Cloudflare Pages Function (tokeny v env). Graf přes `@uiarc/sparkline`. Když data nedorazí, schovej graf a nech jen odkaz na profil.

7. **SEO a meta**
   Title, description, OG/Twitter pro každou stránku, `sitemap.xml`, `robots.txt`, strukturovaná data `Person`. OG obrázek zatím placeholder.

8. **Nasazení**
   Připrav nasazení na Cloudflare Pages z GitHubu (build `npm run build`, výstup `dist`), `_redirects`, `_headers` (cache fontů a assetů). Doména petrskrivanek.cz už je v Cloudflare, napiš mi jen kroky pro připojení Custom domain v Pages a které DNS záznamy po Lovable smazat (subdoménu hnizdo nechat).

9. **QA**
   Playwright screenshoty 390 a 1440 px všech stránek, kontrola horizontálního scrollu, focusu, kontrastu, Lighthouse mobil. Vypiš všechny zbývající placeholdery „Doplnit“.
