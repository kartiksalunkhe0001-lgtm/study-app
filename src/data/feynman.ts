import type { FeynmanTopic } from '../types'

export const FEYNMAN_TOPICS: FeynmanTopic[] = [
  {
    id: 'second-law',
    title: 'Second Law of Thermodynamics',
    prompt: 'Why does heat flow one way, and why can no machine be perfect?',
    bankKey: 'thermodynamics',
    jargon: ['entropy', 'reservoir', 'irreversible', 'carnot', 'isolated', 'kelvin'],
    concepts: [
      { id: 'heat-direction', label: 'Heat flows from hot to cold on its own', keywords: ['hot', 'cold', 'flow'], idea: 'Heat moves from hotter to colder objects by itself. Moving it the other way needs outside work.' },
      { id: 'fridge-work', label: 'Fridges need work input', keywords: ['fridge', 'refrigerator', 'work', 'electricity', 'pump'], idea: 'A refrigerator moves heat from cold to hot only when work, such as electricity, is supplied.' },
      { id: 'engine-limit', label: 'No engine turns all heat into work', keywords: ['engine', 'work', 'heat', 'reservoir', 'waste'], idea: 'Some heat must always be dumped into a cold reservoir. No engine converts all of it into work.' },
      { id: 'entropy', label: 'Entropy never decreases in isolation', keywords: ['entropy', 'disorder', 'isolated', 'irreversible'], idea: 'The entropy of an isolated system stays the same or rises. It rises in irreversible processes.' },
      { id: 'carnot', label: 'Carnot efficiency depends on temperatures', keywords: ['carnot', 'efficiency', 'temperature', 'kelvin'], idea: 'Maximum efficiency is 1 minus Tc/Th, with temperatures in kelvin.' },
    ],
    misconceptions: [
      { pattern: /cold\w*\s+(to|into)\s+(a\s+)?hot/i, mistake: 'Heat can flow from cold to hot on its own', correction: 'Heat only moves from hot to cold spontaneously. Reversing it requires external work.' },
      { pattern: /entropy\s+(always\s+)?(decreases|goes down)/i, mistake: 'Entropy always decreases', correction: 'Entropy of an isolated system never decreases. It increases in irreversible processes.' },
      { pattern: /100\s*%\s*efficien|efficiency\s+(of\s+)?(over|above|greater than)\s+100/i, mistake: 'An engine can be 100% efficient', correction: 'Some heat must be rejected to a cold reservoir, so efficiency is always below 100%.' },
    ],
    metaphor: {
      title: 'The water wheel and the hill',
      text: 'Heat flowing from hot to cold is like water running downhill: it moves on its own. Pumping water back up the hill (a fridge) costs energy, and some water always runs off at the bottom, which is why no machine is perfect.',
    },
  },
  {
    id: 'newton-second',
    title: "Newton's Second Law",
    prompt: 'What happens to an object when a net force acts on it?',
    bankKey: 'laws-of-motion',
    jargon: ['vector', 'impulse', 'momentum', 'inertia', 'acceleration'],
    concepts: [
      { id: 'force-accel', label: 'Force, mass and acceleration', keywords: ['force', 'mass', 'acceleration'], idea: 'Net force equals mass times acceleration, and the acceleration points the same way as the force.' },
      { id: 'inertia', label: 'Inertia resists changes in motion', keywords: ['inertia', 'resist', 'change', 'motion'], idea: 'Inertia is an object\'s resistance to changes in its motion. Mass is the measure of it.' },
      { id: 'balanced', label: 'Zero net force means no acceleration', keywords: ['balanced', 'zero', 'constant', 'velocity', 'equilibrium'], idea: 'Zero net force means no acceleration, so the object stays at rest or keeps a constant velocity.' },
      { id: 'action-reaction', label: 'Action and reaction act on different bodies', keywords: ['action', 'reaction', 'pair', 'different', 'bodies'], idea: 'Action and reaction forces are equal and opposite, but they act on different bodies, so they do not cancel.' },
      { id: 'impulse', label: 'Impulse equals change in momentum', keywords: ['impulse', 'momentum', 'time', 'change'], idea: 'Impulse is force times time, and it equals the change in momentum.' },
    ],
    misconceptions: [
      { pattern: /force.*\bkeeps?\b.*\bmoving\b/i, mistake: 'A force is needed to keep a moving object moving', correction: 'Without a net force, an object keeps moving at constant velocity (Newton\'s first law).' },
      { pattern: /(action|reaction).{0,60}\bcancel/i, mistake: 'Action and reaction forces cancel out', correction: 'They are equal and opposite but act on different bodies, so they never cancel each other.' },
      { pattern: /heavier\s+objects?\s+fall\s+faster/i, mistake: 'Heavier objects fall faster', correction: 'Without air resistance, all objects fall with the same acceleration g.' },
    ],
    metaphor: {
      title: 'Pushing a shopping cart',
      text: 'A full cart takes more push to speed up than an empty one. The harder you push, the faster it speeds up, and the heavier it is, the less it speeds up for the same push.',
    },
  },
]
