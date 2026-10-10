/**
 * Texty webu ve dvou jazycích. Čeština prochází přes `cz()` až při vykreslení.
 * Nové jsou jen nadpisy sekcí a mikrocopy, ostatní texty vycházejí ze stávajícího webu (viz docs/brief.md).
 */

export type Lang = 'cs' | 'en'

export type Copy = {
  meta: { title: string; description: string; ogLocale: string }
  nav: { services: string; projects: string; run: string; about: string; menu: string; close: string; mainLabel: string; book: string; switchTo: { label: string; href: string } }
  hero: {
    h1: string
    lead: string
    cta: string
    ctaProjects: string
    place: string
    mapTitle: string
    mapCaption: string
    startFinish: string
    checkpoints: { crm: string; email: string; data: string; ai: string }
  }
  services: {
    h2: string
    lead: string
    items: { id: string; title: string; text: string; tools: string[] }[]
    alsoLabel: string
    also: string
  }
  projects: {
    h2: string
    lead: string
    moreHeading: string
    filterLabel: string
    filters: { all: string; nz: string; mer: string; web: string }
    showAll: string
    nonprofit: string
    formerly: string
    todo: string
    screenshotTodo: string
    verifyUrl: string
  }
  run: {
    h2: string
    lead: string
    lead2: string
    bibEvent: string
    bibCaption: string
    bibLabel: string
    stravaButton: string
    treeTitle: string
    treeText: string
    treeLink: string
    todo: string
  }
  about: {
    h2: string
    lead: string
    p1: string
    p2: string
    photoAlt: string
    facts: { value: string; label: string; todo?: boolean }[]
    crisisTitle: string
    crisisText: string
  }
  steps: {
    h2: string
    items: { title: string; text: string }[]
  }
  contact: {
    h2: string
    lead: string
    calendlyFallback: string
    mail: string
    mailLabel: string
    copy: string
    copied: string
  }
  dock: { text: string; cta: string }
  footer: { text: string; top: string }
}

const cs: Copy = {
  meta: {
    title: 'Petr Skřivánek – CRM, e-mailing, měření a AI pro neziskovky',
    description:
      'Pomáhám neziskovkám a malým organizacím se Salesforce, e-mailovými automatizacemi, měřením a AI. Olomouc.',
    ogLocale: 'cs_CZ',
  },
  nav: {
    services: 'Co dělám',
    projects: 'Projekty',
    run: 'Běh',
    about: 'O mně',
    menu: 'Menu',
    close: 'Zavřít menu',
    mainLabel: 'Hlavní',
    book: 'Rezervovat hovor',
    switchTo: { label: 'EN', href: '/en/' },
  },
  hero: {
    h1: 'Propojím vaše nástroje, aby pracovaly za vás',
    lead: 'Pomáhám neziskovkám a malým organizacím se Salesforce, e-mailovými automatizacemi, měřením a AI. Nastavím, propojím a vysvětlím – bez žargonu.',
    cta: 'Rezervovat 30 minut zdarma',
    ctaProjects: 'Projekty',
    place: 'Olomouc',
    mapTitle: 'Trasa spolupráce: Salesforce CRM, e-maily, měření a AI',
    mapCaption: 'Kontakty, e-maily, data a AI jako jedna trasa, ne čtyři oddělené nástroje.',
    startFinish: 'start a cíl',
    checkpoints: { crm: 'Salesforce CRM', email: 'E-maily', data: 'Měření', ai: 'AI' },
  },
  services: {
    h2: 'Co dělám',
    lead: 'Čtyři věci, které spolu souvisejí. Kontakty v CRM, e-maily z nich, měření výsledků a AI na rutinu.',
    items: [
      {
        id: 's-crm',
        title: 'CRM a Salesforce',
        text: 'Dárci, dobrovolníci a partneři na jednom místě. Uvidíte, kdo s kým kdy mluvil, od prvního kontaktu po dlouhodobý vztah.',
        tools: ['Salesforce', 'Airtable', 'Procesy'],
      },
      {
        id: 's-email',
        title: 'E-mailing a automatizace',
        text: 'Technická stránka e-mailingu: napojení na CRM, automatické série a sledování, aby zprávy chodily správným lidem ve správný čas.',
        tools: ['Brevo', 'Zapier', 'Make'], // nástroje potvrdit (docs/brief.md)
      },
      {
        id: 's-data',
        title: 'Měření a data',
        text: 'Konečně víte, kdo na web přichází, co ho zajímá a co přináší výsledky. Včetně přehledných reportů.',
        tools: ['GA4', 'Tag Manager', 'Looker Studio'],
      },
      {
        id: 's-ai',
        title: 'AI a produktivita',
        text: 'AI odbaví rutinu a vy se soustředíte na to, co opravdu rozhoduje. Vyberu vhodný nástroj a ukážu, jak s ním pracovat.',
        tools: ['Claude', 'ChatGPT', 'Automatizace'],
      },
    ],
    alsoLabel: 'Dál umím:',
    also: 'online reklamu včetně Google Ad Grants a Skliku, UX a weby od wireframu po spuštění.',
  },
  projects: {
    h2: 'Projekty',
    lead: 'Vybrané spolupráce podrobně, ostatní v přehledu pod nimi.',
    moreHeading: 'Další spolupráce',
    filterLabel: 'Filtr projektů',
    filters: { all: 'Vše', nz: 'Neziskovky', mer: 'Měření', web: 'Weby a UX' },
    showAll: 'Zobrazit všechny spolupráce',
    nonprofit: 'neziskovka',
    formerly: 'dříve',
    todo: 'Doplnit',
    screenshotTodo: 'Screenshot (doplnit)',
    verifyUrl: 'ověřit URL',
  },
  run: {
    h2: 'Kilometry, které sázejí stromy',
    lead: 'V běhu si urovnávám myšlenky a často tam dostávám nejlepší nápady.',
    lead2: 'Běhám zhruba 160 km měsíčně a část z toho dává smysl i pro krajinu.',
    bibEvent: 'Naběháno',
    bibCaption: 'kilometrů, zhruba 160 měsíčně',
    bibLabel: 'Naběháno přes 1 100 kilometrů, zhruba 160 kilometrů měsíčně',
    stravaButton: 'Moje běhy na Stravě',
    treeTitle: 'Běžím pro stromy',
    treeText:
      'Koordinuji program Běžím pro stromy Nadace Partnerství. Běžci při registraci na závody RunCzech nebo do virtuálního Běhu pro stromy přispívají na výsadby a péči o stromy.',
    treeLink: 'O projektu',
    todo: 'Doplnit',
  },
  about: {
    h2: 'O mně',
    lead: 'Jsem Petr. V Nadaci Partnerství pracuji jako manažer marketingových technologií a pro další organizace nastavuji CRM, e-mailing, měření a AI.',
    p1: 'Hledám praktická řešení, která šetří čas i peníze. Co neumím, dohledám, nebo najdu nástroj, který si poradí.',
    p2: 'Vystudoval jsem cestovní ruch, takže mě baví i smysluplné lokální projekty a destinace, třeba na Broumovsku.',
    photoAlt: 'Petr Skřivánek',
    facts: [
      { value: '8+', label: 'let v marketingu', todo: true },
      { value: '10', label: 'let koordinace projektů', todo: true },
      { value: '12+', label: 'projektů v portfoliu' },
      { value: '5', label: 'let Běžím pro stromy', todo: true },
    ],
    crisisTitle: 'Když jde do tuhého',
    crisisText:
      'Během povodní v září 2024 jsem v Zátoru převzal krizovou komunikaci: sítě, PR, novináře, fotodokumentaci i fundraising. Nechlubím se tím, ale umím to.',
  },
  steps: {
    h2: 'Jak spolupráce probíhá',
    items: [
      { title: 'Zjistím, co potřebujete', text: 'Začínáme 30minutovým hovorem zdarma, bez závazků.' },
      { title: 'Navrhnu řešení', text: 'Konkrétní plán: nejjednodušší cesta, která funguje.' },
      { title: 'Zrealizujeme a změříme', text: 'Implementuji, nastavím měření a předám s vysvětlením.' },
    ],
  },
  contact: {
    h2: 'Pojďme si zavolat',
    lead: 'Máte nápad, problém, nebo jen chcete vědět, jestli vám můžu pomoct? Za 30 minut zjistíme, co potřebujete a jak na to.',
    calendlyFallback: 'Rezervovat 30 minut v Calendly',
    mail: 'Raději napsat e-mail',
    mailLabel: 'E-mail',
    copy: 'Kopírovat',
    copied: 'Zkopírováno',
  },
  dock: { text: '30 minut zdarma', cta: 'Rezervovat hovor' },
  footer: { text: '© 2026 Petr Skřivánek, Olomouc', top: 'Nahoru' },
}

const en: Copy = {
  meta: {
    title: 'Petr Skřivánek – CRM, email automation, analytics and AI for nonprofits',
    description:
      'I help nonprofits and small organisations with Salesforce, email automation, analytics and AI. Based in Olomouc, Czech Republic.',
    ogLocale: 'en_GB',
  },
  nav: {
    services: 'What I do',
    projects: 'Projects',
    run: 'Running',
    about: 'About',
    menu: 'Menu',
    close: 'Close menu',
    mainLabel: 'Main',
    book: 'Book a call',
    switchTo: { label: 'CS', href: '/' },
  },
  hero: {
    h1: 'I connect your tools so they work for you',
    lead: 'I help nonprofits and small organisations with Salesforce, email automation, analytics and AI. I set it up, connect it and explain it – no jargon.',
    cta: 'Book 30 minutes for free',
    ctaProjects: 'Projects',
    place: 'Olomouc, Czech Republic',
    mapTitle: 'Route of our work together: Salesforce CRM, email, analytics and AI',
    mapCaption: 'Contacts, email, data and AI as one route, not four separate tools.',
    startFinish: 'start & finish',
    checkpoints: { crm: 'Salesforce CRM', email: 'Email', data: 'Analytics', ai: 'AI' },
  },
  services: {
    h2: 'What I do',
    lead: 'Four connected things. Contacts in the CRM, emails built on them, measuring the results, and AI for the routine.',
    items: [
      {
        id: 's-crm',
        title: 'CRM and Salesforce',
        text: 'Donors, volunteers and partners in one place. See who talked to whom and when, from the first contact to a long-term relationship.',
        tools: ['Salesforce', 'Airtable', 'Processes'],
      },
      {
        id: 's-email',
        title: 'Email and automation',
        text: 'The technical side of email: CRM integration, automated series and tracking, so the right messages reach the right people at the right time.',
        tools: ['Brevo', 'Zapier', 'Make'],
      },
      {
        id: 's-data',
        title: 'Analytics and data',
        text: 'Finally know who visits your site, what interests them and what drives results. Including clear reports.',
        tools: ['GA4', 'Tag Manager', 'Looker Studio'],
      },
      {
        id: 's-ai',
        title: 'AI and productivity',
        text: 'AI handles the routine and you focus on what really matters. I pick the right tool and show you how to work with it.',
        tools: ['Claude', 'ChatGPT', 'Automation'],
      },
    ],
    alsoLabel: 'I also do:',
    also: 'online advertising including Google Ad Grants and Sklik, UX and websites from wireframe to launch.',
  },
  projects: {
    h2: 'Projects',
    lead: 'Selected collaborations in detail, the others in the overview below.',
    moreHeading: 'More collaborations',
    filterLabel: 'Project filter',
    filters: { all: 'All', nz: 'Nonprofits', mer: 'Analytics', web: 'Web and UX' },
    showAll: 'Show all collaborations',
    nonprofit: 'nonprofit',
    formerly: 'formerly',
    todo: 'To do',
    screenshotTodo: 'Screenshot (to do)',
    verifyUrl: 'verify URL',
  },
  run: {
    h2: 'Kilometres that plant trees',
    lead: 'Running is where I sort out my thoughts, and often where my best ideas come from.',
    lead2: 'I run roughly 160 km a month, and part of it makes sense for the landscape too.',
    bibEvent: 'Run so far',
    bibCaption: 'kilometres, roughly 160 a month',
    bibLabel: 'Over 1,100 kilometres run, roughly 160 kilometres a month',
    stravaButton: 'My runs on Strava',
    treeTitle: 'Běžím pro stromy (Running for Trees)',
    treeText:
      'I coordinate the Běžím pro stromy programme at Nadace Partnerství (the Partnership Foundation). Runners who sign up for RunCzech races or the virtual Run for Trees contribute to planting and caring for trees.',
    treeLink: 'About the project',
    todo: 'To do',
  },
  about: {
    h2: 'About me',
    lead: 'I’m Petr. At Nadace Partnerství I work as a marketing technology manager, and for other organisations I set up CRM, email, analytics and AI.',
    p1: 'I look for practical solutions that save time and money. What I don’t know, I look up, or I find a tool that does.',
    p2: 'I studied tourism, so I also enjoy meaningful local projects and destinations, such as the Broumov region.',
    photoAlt: 'Petr Skřivánek',
    facts: [
      { value: '8+', label: 'years in marketing', todo: true },
      { value: '10', label: 'years of project coordination', todo: true },
      { value: '12+', label: 'projects in the portfolio' },
      { value: '5', label: 'years of Běžím pro stromy', todo: true },
    ],
    crisisTitle: 'When things get tough',
    crisisText:
      'During the floods of September 2024 I took over crisis communication in Zátor: social media, PR, press, photo documentation and fundraising. I don’t boast about it, but I can do it.',
  },
  steps: {
    h2: 'How we work together',
    items: [
      { title: 'I find out what you need', text: 'We start with a free 30-minute call, no strings attached.' },
      { title: 'I propose a solution', text: 'A concrete plan: the simplest way that works.' },
      { title: 'We build it and measure it', text: 'I implement it, set up measurement and hand it over with an explanation.' },
    ],
  },
  contact: {
    h2: 'Let’s have a call',
    lead: 'Have an idea, a problem, or just want to know whether I can help? In 30 minutes we’ll find out what you need and how to do it.',
    calendlyFallback: 'Book 30 minutes in Calendly',
    mail: 'Rather write an email',
    mailLabel: 'Email',
    copy: 'Copy',
    copied: 'Copied',
  },
  dock: { text: '30 minutes for free', cta: 'Book a call' },
  footer: { text: '© 2026 Petr Skřivánek, Olomouc', top: 'Back to top' },
}

export const copy: Record<Lang, Copy> = { cs, en }
