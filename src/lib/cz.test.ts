import { describe, expect, it } from 'vitest'
import { cz } from './cz'

const N = ' '

describe('cz()', () => {
  it('váže jednopísmenné předložky a spojky', () => {
    expect(cz('Jsem v Olomouci a rád běhám')).toBe(`Jsem v${N}Olomouci a${N}rád běhám`)
    expect(cz('K tomu s ním')).toBe(`K${N}tomu s${N}ním`)
  })
  it('váže i za sebou jdoucí spojky', () => {
    expect(cz('v a v')).toBe(`v${N}a${N}v`)
  })
  it('nesahá do delších slov', () => {
    expect(cz('vata sova')).toBe('vata sova')
  })
  it('váže číslo a jednotku', () => {
    expect(cz('30 minut zdarma')).toBe(`30${N}minut zdarma`)
    expect(cz('5 let')).toBe(`5${N}let`)
    expect(cz('8+ let v marketingu')).toBe(`8+${N}let v${N}marketingu`)
  })
  it('váže tisíce', () => {
    expect(cz('3 800+')).toBe(`3${N}800+`)
    expect(cz('1 234 567')).toBe(`1${N}234${N}567`)
  })
  it('mění spojovník s mezerami na pomlčku', () => {
    expect(cz('bez žargonu - srozumitelně')).toBe('bez žargonu – srozumitelně')
    expect(cz('slovo-slovo')).toBe('slovo-slovo')
  })
  it('používá české uvozovky', () => {
    expect(cz('říká "ahoj"')).toBe('říká „ahoj“')
  })
  it('píše e‑mail s nezlomitelným spojovníkem', () => {
    expect(cz('E-mail')).toBe('E‑mail')
    expect(cz('e-mailing')).toBe('e‑mailing')
    expect(cz('petr@e-mail.cz')).toBe('petr@e-mail.cz')
  })
  it('je idempotentní', () => {
    const s = cz('Jsem v Olomouci - 30 minut, 3 800 stromů, "e-mail"')
    expect(cz(s)).toBe(s)
  })
})
