import type { Bank, BankKey } from '../../types'
import { LAWS_OF_MOTION } from './laws-of-motion'
import { THERMODYNAMICS } from './thermodynamics'

export const BANKS: Record<BankKey, Bank> = {
  'laws-of-motion': LAWS_OF_MOTION,
  thermodynamics: THERMODYNAMICS,
}

export function matchBankKey(text: string): BankKey | null {
  const t = text.toLowerCase()
  if (/\b(motion|newton|force|mechanic|kinematic)/.test(t)) return 'laws-of-motion'
  if (/\b(thermo|entropy|carnot|heat engine)/.test(t)) return 'thermodynamics'
  return null
}
