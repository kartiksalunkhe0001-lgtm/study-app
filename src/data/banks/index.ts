import type { Bank } from '../../types'
import { LAWS_OF_MOTION } from './laws-of-motion'
import { THERMODYNAMICS } from './thermodynamics'

export const BANKS: Record<Bank['title'] extends string ? 'laws-of-motion' | 'thermodynamics' : never, Bank> = {
  'laws-of-motion': LAWS_OF_MOTION,
  thermodynamics: THERMODYNAMICS,
}
