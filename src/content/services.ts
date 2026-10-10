export type Service = {
  id: string
  title: string
  text: string
  tools: string[]
}

export const services: Service[] = [
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
    tools: ['Brevo', 'Zapier', 'Make'], // nástroje potvrdit (brief.md)
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
]
