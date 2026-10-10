import type { AnchorHTMLAttributes } from 'react'
import { useLang } from '@/i18n'

/** Odkaz ven: otevře se v novém okně a čtečkám to oznámí. */
export default function ExtLink({ children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { t } = useLang()
  return (
    <a {...rest} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> {t.extNote}</span>
    </a>
  )
}
