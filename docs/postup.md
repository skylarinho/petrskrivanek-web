# Postup: z Lovable přes GitHub do PC a Claude Code

## 1. Lovable → GitHub (jednou)
1. V Lovable otevři projekt petrskrivanek.cz → vpravo nahoře **GitHub → Connect to GitHub**.
2. Vyber účet `skylarinho` a nech vytvořit repo (např. `petrskrivanek-cz`). Lovable do něj pushne celý kód.
3. Od této chvíle **v Lovable nic needituj**. Sync je obousměrný a změny z Lovable by šly rovnou do `main`.

## 2. Repo do PC
```bash
cd ~/Projekty                # nebo kamkoliv, kde máš weby
git clone https://github.com/skylarinho/petrskrivanek-cz.git
cd petrskrivanek-cz
git checkout -b redesign     # veškerá práce ve větvi, main zůstává živý web
```

## 3. Vložit balíček
Rozbal `petrskrivanek-redesign.zip` a zkopíruj do kořene repa:
```
petrskrivanek-cz/
├─ CLAUDE.md              ← z balíčku (Claude Code ho čte automaticky)
├─ redesign/
│  ├─ mockup/             ← index.html, case-studie.html, assets
│  ├─ docs/               ← brief.md, prompty.md, postup.md
│  └─ assets/             ← fotky, path hero trasy
└─ … (kód z Lovable)
```
V CLAUDE.md pak cesty `mockup/…` čti jako `redesign/mockup/…` (nebo to nech Claude Code opravit v kroku 1).

```bash
git add . && git commit -m "Podklady pro redesign"
```

## 4. Claude Code
1. Otevři složku ve VS Code, terminál → `claude`.
2. První zpráva:
   > Přečti CLAUDE.md a redesign/docs/brief.md. Pak udělej krok 1 z redesign/docs/prompty.md. Nic neměň, dokud neschválím plán.
3. Dál jeď kroky 2–9 z `prompty.md`. Po každém kroku: `npm run dev`, kontrola na mobilu (DevTools 390 px), commit.

## 5. Nasazení (doména už je na Cloudflare)
1. Cloudflare → Workers & Pages → **Create → Pages → Connect to Git** → repo z kroku 1.
2. Build: `npm run build`, output `dist`. Produkční větev `main`. Větev `redesign` dostane náhledovou URL (`redesign.<projekt>.pages.dev`) automaticky.
3. Až bude redesign schválený: merge `redesign` → `main`.
4. Pages projekt → **Custom domains** → přidej `petrskrivanek.cz` (a `www`). Protože zóna je ve stejném Cloudflare účtu, DNS záznam se vytvoří sám.
5. Předtím v DNS smaž nebo uprav stávající záznamy, které pro `petrskrivanek.cz` a `www` míří na Lovable. Záznam pro `hnizdo` nech být.
6. Ověř HTTPS a přesměrování `www` → bez www (Redirect Rule), pak odpoj projekt v Lovable.
