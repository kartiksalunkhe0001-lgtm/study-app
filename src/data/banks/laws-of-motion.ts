import type { Bank, Flashcard, Mcq } from '../../types'

const mcqs: Mcq[] = [
  {
    id: 'lm-1', difficulty: 'easy',
    question: 'A 2 kg block is pushed with a 10 N force on a frictionless surface. What is its acceleration?',
    options: ['2 m/s²', '5 m/s²', '10 m/s²', '20 m/s²'], correctIndex: 1,
    explanation: 'From F = ma, a = F/m = 10/2 = 5 m/s². Acceleration points in the direction of the net force.',
  },
  {
    id: 'lm-2', difficulty: 'easy',
    question: 'What quantity is the measure of inertia of an object?',
    options: ['Speed', 'Mass', 'Velocity', 'Acceleration'], correctIndex: 1,
    explanation: 'Inertia is the resistance to a change in motion, and it is measured by mass.',
  },
  {
    id: 'lm-3', difficulty: 'easy',
    question: 'Newton’s third-law action and reaction forces act on:',
    options: ['The same body', 'Different bodies', 'Massless objects only', 'Only bodies in equilibrium'], correctIndex: 1,
    explanation: 'Action-reaction pairs act on two different bodies, which is why they do not cancel each other.',
  },
  {
    id: 'lm-4', difficulty: 'easy',
    question: 'The SI unit of force is:',
    options: ['Joule', 'Newton', 'Pascal', 'Watt'], correctIndex: 1,
    explanation: '1 newton = 1 kg·m/s², the force that gives 1 kg an acceleration of 1 m/s².',
  },
  {
    id: 'lm-5', difficulty: 'easy',
    question: 'A passenger lurches forward when a bus brakes suddenly. The best explanation is:',
    options: ['A forward force pushes the passenger', 'Inertia keeps the passenger moving', 'Gravity pulls them forward', 'A centrifugal force acts on them'], correctIndex: 1,
    explanation: 'The passenger keeps moving at the bus’s old velocity because of inertia. No real forward force is needed.',
  },
  {
    id: 'lm-6', difficulty: 'medium',
    question: 'A two-body system has no external force acting on it. Which quantity is always conserved?',
    options: ['Kinetic energy', 'Total momentum', 'Potential energy', 'Acceleration'], correctIndex: 1,
    explanation: 'With zero net external force, total momentum is conserved. Energy is not guaranteed to be conserved by that fact alone.',
  },
  {
    id: 'lm-7', difficulty: 'medium',
    question: 'An object moves at constant velocity. What is true about the net force on it?',
    options: ['It is maximum', 'It is zero', 'Only friction acts on it', 'Its mass is zero'], correctIndex: 1,
    explanation: 'Constant velocity means zero acceleration, so by F = ma the net force is zero.',
  },
  {
    id: 'lm-8', difficulty: 'medium',
    question: 'A lift accelerates upward. Compared with the true weight, the normal force from the floor is:',
    options: ['Less', 'Equal', 'Greater', 'Zero always'], correctIndex: 2,
    explanation: 'N − mg = ma gives N = m(g + a), which is greater than mg when the lift speeds up upward.',
  },
  {
    id: 'lm-9', difficulty: 'medium',
    question: 'A 5 kg block rests on a table with μs = 0.2 (g = 10 m/s²). What is the maximum static friction?',
    options: ['5 N', '10 N', '25 N', '50 N'], correctIndex: 1,
    explanation: 'f_max = μs·N = 0.2 × (5 × 10) = 10 N.',
  },
  {
    id: 'lm-10', difficulty: 'medium',
    question: 'The impulse delivered by a force equals:',
    options: ['F × m', 'Change in momentum', 'Change in kinetic energy', 'Work done'], correctIndex: 1,
    explanation: 'Impulse J = F·Δt = Δp. It has units of N·s, which equal kg·m/s.',
  },
  {
    id: 'lm-11', difficulty: 'hard',
    question: 'Blocks of 3 kg and 1 kg are joined by a string over a frictionless pulley (g = 10 m/s²). What is the acceleration?',
    options: ['2.5 m/s²', '5 m/s²', '7.5 m/s²', '10 m/s²'], correctIndex: 1,
    explanation: 'a = (m1 − m2)g / (m1 + m2) = (2 × 10) / 4 = 5 m/s².',
  },
  {
    id: 'lm-12', difficulty: 'hard',
    question: 'A 0.02 kg bullet leaves a 4 kg gun at 500 m/s. What is the recoil speed of the gun?',
    options: ['0.25 m/s', '2.5 m/s', '25 m/s', '250 m/s'], correctIndex: 1,
    explanation: 'Momentum is conserved: 4 × v = 0.02 × 500 = 10, so v = 2.5 m/s, opposite to the bullet.',
  },
  {
    id: 'lm-13', difficulty: 'hard',
    question: 'A 60 kg person stands in a lift accelerating downward at 2 m/s² (g = 10 m/s²). The apparent weight is:',
    options: ['480 N', '520 N', '600 N', '120 N'], correctIndex: 0,
    explanation: 'Apparent weight = m(g − a) = 60 × 8 = 480 N.',
  },
  {
    id: 'lm-14', difficulty: 'hard',
    question: 'A force of 12 N acts on a 4 kg object. What is its acceleration, and what is the force needed for 12 m/s²?',
    options: ['3 m/s² and 48 N', '8 m/s² and 3 N', '48 m/s² and 12 N', '3 m/s² and 12 N'], correctIndex: 0,
    explanation: 'a = F/m = 12/4 = 3 m/s². For 12 m/s², F = m·a = 4 × 12 = 48 N.',
  },
  {
    id: 'lm-15', difficulty: 'medium',
    question: 'A terminal velocity is reached when:',
    options: ['Drag is greater than weight', 'Drag equals weight', 'Weight is zero', 'Acceleration is maximum'], correctIndex: 1,
    explanation: 'At terminal velocity the net force is zero because the upward drag balances the weight, so acceleration is zero.',
  },
]

const flashcards: Flashcard[] = [
  { id: 'lm-f1', front: "Newton's first law", back: 'An object stays at rest or in uniform motion unless a net external force acts on it.' },
  { id: 'lm-f2', front: "Newton's second law", back: 'F = ma: net force equals mass times acceleration, in the same direction.' },
  { id: 'lm-f3', front: "Newton's third law", back: 'Forces come in equal and opposite pairs that act on different bodies.' },
  { id: 'lm-f4', front: 'Inertia', back: 'Resistance to a change in motion. It depends on mass.' },
  { id: 'lm-f5', front: 'Momentum', back: 'p = mv. It is a vector pointing in the direction of velocity.' },
  { id: 'lm-f6', front: 'Impulse', back: 'J = F·Δt = Δp, the change in momentum.' },
  { id: 'lm-f7', front: 'Conservation of momentum', back: 'Total momentum stays constant when the net external force is zero.' },
  { id: 'lm-f8', front: 'Static friction', back: 'f ≤ μs·N. It matches the applied force up to a maximum value.' },
  { id: 'lm-f9', front: 'Kinetic friction', back: 'f = μk·N. It stays constant once the surfaces slide.' },
  { id: 'lm-f10', front: 'Free body diagram', back: 'A diagram that shows every force acting on one body.' },
  { id: 'lm-f11', front: 'Pseudo force', back: 'A fictitious force seen in an accelerating frame, equal to −ma.' },
  { id: 'lm-f12', front: 'Apparent weight in an upward lift', back: 'N = m(g + a), which is more than the true weight.' },
  { id: 'lm-f13', front: 'Tension', back: 'The pulling force transmitted along a string or rope.' },
  { id: 'lm-f14', front: 'Normal force', back: 'The contact force that acts perpendicular to a surface.' },
  { id: 'lm-f15', front: 'Terminal velocity', back: 'The speed at which drag equals weight, so acceleration is zero.' },
]

export const LAWS_OF_MOTION: Bank = {
  title: 'Laws of Motion',
  mcqs,
  flashcards,
  shortcut: 'For collision and rebound questions, if speed is unchanged after a reversal, impulse is 2mv. If the object sticks, impulse is mv. Spot the factor of 2 first to save time.',
  mindMap: {
    id: 'root', label: 'Laws of Motion',
    children: [
      { id: 'b1', label: "Newton's Laws", children: [
        { id: 'b1a', label: '1st: Inertia', children: [] },
        { id: 'b1b', label: '2nd: F = ma', children: [] },
        { id: 'b1c', label: '3rd: Action-Reaction', children: [] },
      ] },
      { id: 'b2', label: 'Momentum', children: [
        { id: 'b2a', label: 'p = mv', children: [] },
        { id: 'b2b', label: 'Impulse J = FΔt', children: [] },
        { id: 'b2c', label: 'Conservation', children: [] },
      ] },
      { id: 'b3', label: 'Forces', children: [
        { id: 'b3a', label: 'Friction', children: [] },
        { id: 'b3b', label: 'Tension', children: [] },
        { id: 'b3c', label: 'Normal force', children: [] },
        { id: 'b3d', label: 'Pseudo force', children: [] },
      ] },
      { id: 'b4', label: 'Applications', children: [
        { id: 'b4a', label: 'Rockets & recoil', children: [] },
        { id: 'b4b', label: 'Lifts & apparent weight', children: [] },
        { id: 'b4c', label: 'Pulley systems', children: [] },
      ] },
    ],
  },
}
