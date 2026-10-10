import { useLang } from '@/i18n'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer>
      <div className="wrap">
        <span>{t.footer.text}</span>
        <a href="#hero">{t.footer.top}</a>
      </div>
    </footer>
  )
}
