import { cz } from '@/lib/cz'

export default function App() {
  return (
    <main className="wrap py-16">
      <h1 className="text-[clamp(58px,15.5vw,112px)] leading-[.88]">
        {cz('Propojím vaše nástroje, aby pracovaly za vás')}
      </h1>
      <p className="mt-4 text-ink-2">{cz('Rezervace na 30 minut zdarma – 3 800+ stromů.')}</p>
    </main>
  )
}
