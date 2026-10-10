import About from '@/components/About'
import Contact from '@/components/Contact'
import Dock from '@/components/Dock'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Run from '@/components/Run'
import Services from '@/components/Services'
import Steps from '@/components/Steps'
import { LangProvider } from '@/i18n'
import type { Lang } from '@/content/copy'

export default function App({ lang }: { lang: Lang }) {
  return (
    <LangProvider lang={lang}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Run />
        <About />
        <Steps />
        <Contact />
      </main>
      <Footer />
      <Dock />
    </LangProvider>
  )
}
