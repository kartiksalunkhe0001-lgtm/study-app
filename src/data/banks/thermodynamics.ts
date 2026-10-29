import type { Bank, Flashcard, Mcq } from '../../types'

const mcqs: Mcq[] = [
  {
    id: 'th-1', difficulty: 'medium',
    question: 'For an isothermal expansion of an ideal gas, which statement is true?',
    options: ['ΔU > 0, Q = W', 'ΔU = 0, Q = W', 'ΔU < 0, Q = 0', 'W = 0, Q = ΔU'], correctIndex: 1,
    explanation: 'Constant temperature means ΔU = 0 for an ideal gas. The first law then gives Q = W.',
  },
  {
    id: 'th-2', difficulty: 'medium',
    question: 'The efficiency of a Carnot engine working between 400 K and 300 K is:',
    options: ['25%', '33%', '50%', '75%'], correctIndex: 0,
    explanation: 'η = 1 − Tc/Th = 1 − 300/400 = 0.25 = 25%. It depends only on the reservoir temperatures.',
  },
  {
    id: 'th-3', difficulty: 'medium',
    question: 'In an adiabatic process, which relation holds?',
    options: ['Q = 0, ΔU = −W', 'Q = W, ΔU = 0', 'W = 0, ΔU = Q', 'Q > 0, ΔU = W'], correctIndex: 0,
    explanation: 'No heat is exchanged, so Q = 0 and ΔU = −W. When the gas expands, its internal energy and temperature drop.',
  },
  {
    id: 'th-4', difficulty: 'easy',
    question: 'In an isochoric (constant volume) process, the work done by the gas is:',
    options: ['PΔV', 'Zero', 'Equal to Q', 'Equal to ΔU'], correctIndex: 1,
    explanation: 'Volume does not change, so ΔV = 0 and W = 0. The first law then gives ΔU = Q.',
  },
  {
    id: 'th-5', difficulty: 'easy',
    question: 'For an isobaric (constant pressure) process, the work done by the gas is:',
    options: ['Zero', 'PΔV', 'nRT', 'Q/2'], correctIndex: 1,
    explanation: 'At constant pressure, W = P·ΔV, which is the area under the P-V graph.',
  },
  {
    id: 'th-6', difficulty: 'easy',
    question: 'Over one complete cycle of a heat engine, the change in internal energy is:',
    options: ['Always positive', 'Zero', 'Equal to Q', 'Equal to −W'], correctIndex: 1,
    explanation: 'Internal energy is a state function. After a full cycle the gas returns to its starting state, so ΔU = 0.',
  },
  {
    id: 'th-7', difficulty: 'medium',
    question: 'On a P-V diagram, the work done by a gas during a process is represented by:',
    options: ['Area under the curve', 'Slope of the curve', 'Pressure at V = 0', 'Temperature of the gas'], correctIndex: 0,
    explanation: 'Work is W = ∫P dV, which is the area under the P-V curve.',
  },
  {
    id: 'th-8', difficulty: 'easy',
    question: 'The efficiency of any heat engine is defined as:',
    options: ['η = Qc/Qh', 'η = W/Qh', 'η = Qh/W', 'η = Tc/Th'], correctIndex: 1,
    explanation: 'Efficiency is the useful work output divided by the heat taken in from the hot reservoir.',
  },
  {
    id: 'th-9', difficulty: 'medium',
    question: 'A Carnot engine works between 600 K and 300 K. Its efficiency is:',
    options: ['25%', '33%', '50%', '66%'], correctIndex: 2,
    explanation: 'η = 1 − 300/600 = 0.5 = 50%.',
  },
  {
    id: 'th-10', difficulty: 'medium',
    question: 'What does a refrigerator need in order to move heat from a cold body to a hot one?',
    options: ['Heat flowing spontaneously from cold to hot', 'An external work input', 'Efficiency above 100%', 'No energy at all'], correctIndex: 1,
    explanation: 'The Second Law forbids heat flowing from cold to hot on its own, so outside work (such as electricity) must be supplied.',
  },
  {
    id: 'th-11', difficulty: 'hard',
    question: 'During a reversible isothermal process at temperature T, the entropy change for heat Q is:',
    options: ['ΔS = Q·T', 'ΔS = Q/T', 'ΔS = 0 always', 'ΔS = W/T'], correctIndex: 1,
    explanation: 'For a reversible process at constant temperature, ΔS = Q/T.',
  },
  {
    id: 'th-12', difficulty: 'medium',
    question: 'According to the Second Law, the entropy of an isolated system:',
    options: ['Always decreases', 'Never decreases', 'Is always constant', 'Oscillates'], correctIndex: 1,
    explanation: 'In an isolated system the entropy stays the same in reversible processes and increases in irreversible ones.',
  },
  {
    id: 'th-13', difficulty: 'easy',
    question: 'The internal energy of an ideal gas depends on:',
    options: ['Pressure only', 'Volume only', 'Temperature only', 'Mass only'], correctIndex: 2,
    explanation: 'For an ideal gas, internal energy depends only on temperature (Joule’s law).',
  },
  {
    id: 'th-14', difficulty: 'hard',
    question: '2 moles of an ideal gas expand isothermally at 300 K from V to 2V. The work done is closest to:',
    options: ['1729 J', '3456 J', '2494 J', '5000 J'], correctIndex: 1,
    explanation: 'W = nRT ln(2) = 2 × 8.31 × 300 × 0.693 ≈ 3456 J.',
  },
  {
    id: 'th-15', difficulty: 'hard',
    question: 'During an adiabatic compression of an ideal gas, the temperature of the gas:',
    options: ['Decreases', 'Increases', 'Stays the same', 'Becomes zero'], correctIndex: 1,
    explanation: 'Compression is work done on the gas, and with Q = 0 that energy raises the internal energy and temperature.',
  },
]

const flashcards: Flashcard[] = [
  { id: 'th-f1', front: 'First law of thermodynamics', back: 'ΔU = Q − W: heat added minus work done by the gas.' },
  { id: 'th-f2', front: 'Isothermal process', back: 'Temperature is constant, so ΔU = 0 for an ideal gas.' },
  { id: 'th-f3', front: 'Adiabatic process', back: 'No heat exchange (Q = 0), so ΔU = −W.' },
  { id: 'th-f4', front: 'Isochoric process', back: 'Volume is constant, so W = 0 and ΔU = Q.' },
  { id: 'th-f5', front: 'Isobaric process', back: 'Pressure is constant, so W = PΔV.' },
  { id: 'th-f6', front: 'Second Law (Kelvin-Planck)', back: 'No engine can turn all heat from one reservoir into work over a full cycle.' },
  { id: 'th-f7', front: 'Second Law (Clausius)', back: 'Heat cannot flow spontaneously from a colder body to a hotter body.' },
  { id: 'th-f8', front: 'Entropy', back: 'A measure of disorder or the number of microstates. It increases in irreversible processes of isolated systems.' },
  { id: 'th-f9', front: 'Carnot efficiency', back: 'η = 1 − Tc/Th, with temperatures in kelvin.' },
  { id: 'th-f10', front: 'Coefficient of performance (fridge)', back: 'COP = Qc / W, the heat removed from the cold side per unit of work input.' },
  { id: 'th-f11', front: 'Reversible process', back: 'Happens infinitely slowly, so the system stays close to equilibrium.' },
  { id: 'th-f12', front: 'Internal energy of an ideal gas', back: 'Depends only on temperature.' },
  { id: 'th-f13', front: 'Isothermal work for an ideal gas', back: 'W = nRT ln(V2/V1).' },
  { id: 'th-f14', front: 'Heat engine', back: 'Takes heat from a hot reservoir, does work, and rejects heat to a cold reservoir.' },
  { id: 'th-f15', front: 'Cp vs Cv', back: 'Cp is greater than Cv because extra heat at constant pressure goes into expansion work.' },
]

export const THERMODYNAMICS: Bank = {
  title: 'Thermodynamics',
  mcqs,
  flashcards,
  shortcut: 'Isothermal means think Q = W and ΔU = 0. Adiabatic means think Q = 0 and ΔU = −W. Pick the variable that is zero first to avoid sign errors.',
  mindMap: {
    id: 'root', label: 'Thermodynamics',
    children: [
      { id: 'b1', label: 'Laws', children: [
        { id: 'b1a', label: 'Zeroth: thermal equilibrium', children: [] },
        { id: 'b1b', label: 'First: ΔU = Q − W', children: [] },
        { id: 'b1c', label: 'Second: entropy rises', children: [] },
      ] },
      { id: 'b2', label: 'Processes', children: [
        { id: 'b2a', label: 'Isothermal', children: [] },
        { id: 'b2b', label: 'Adiabatic', children: [] },
        { id: 'b2c', label: 'Isochoric', children: [] },
        { id: 'b2d', label: 'Isobaric', children: [] },
      ] },
      { id: 'b3', label: 'Engines & Fridges', children: [
        { id: 'b3a', label: 'Carnot efficiency', children: [] },
        { id: 'b3b', label: 'Coefficient of performance', children: [] },
        { id: 'b3c', label: 'Work input needed', children: [] },
      ] },
      { id: 'b4', label: 'Key quantities', children: [
        { id: 'b4a', label: 'Internal energy', children: [] },
        { id: 'b4b', label: 'Entropy', children: [] },
        { id: 'b4c', label: 'Work = area under PV', children: [] },
      ] },
    ],
  },
}
