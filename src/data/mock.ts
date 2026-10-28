export type TopicStatus = 'red' | 'yellow' | 'green'

export interface Topic {
  id: string
  name: string
  accuracy: number
  status: TopicStatus
  lastReviewed: string
  nextReview: string
  reviewsDone: number
}

export interface SampleFile {
  id: string
  name: string
  type: 'pdf' | 'image'
  sizeLabel: string
}

export interface PdfPreview {
  title: string
  pages: number
  headings: string[]
}

export interface OcrBlock {
  text: string
  equations: string[]
  bullets: string[]
}

export interface Mcq {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface SubjectiveQuestion {
  id: string
  prompt: string
}

export interface Diagnostic {
  conceptualErrors: string[]
  correctCoreConcept: string
  examShortcut: string
}

export interface QuizPayload {
  source: string
  topic: string
  mcqs: Mcq[]
  subjective: SubjectiveQuestion
  diagnostic: Diagnostic
}

export const TOPICS: Topic[] = [
  { id: 't1', name: 'Thermodynamics', accuracy: 42, status: 'red', lastReviewed: '3 days ago', nextReview: 'Today', reviewsDone: 2 },
  { id: 't2', name: 'Rotational Dynamics', accuracy: 51, status: 'red', lastReviewed: '5 days ago', nextReview: 'Today', reviewsDone: 1 },
  { id: 't3', name: 'Optics', accuracy: 68, status: 'yellow', lastReviewed: '2 days ago', nextReview: 'Day 2', reviewsDone: 4 },
  { id: 't4', name: 'Chemical Bonding', accuracy: 74, status: 'yellow', lastReviewed: '1 day ago', nextReview: 'Day 3', reviewsDone: 3 },
  { id: 't5', name: 'Electrostatics', accuracy: 63, status: 'yellow', lastReviewed: '4 days ago', nextReview: 'Day 2', reviewsDone: 2 },
  { id: 't6', name: 'Vectors', accuracy: 92, status: 'green', lastReviewed: '6 days ago', nextReview: 'Day 7', reviewsDone: 5 },
  { id: 't7', name: 'Kinematics', accuracy: 88, status: 'green', lastReviewed: '5 days ago', nextReview: 'Day 6', reviewsDone: 4 },
  { id: 't8', name: 'Atomic Structure', accuracy: 81, status: 'green', lastReviewed: '3 days ago', nextReview: 'Day 5', reviewsDone: 3 },
  { id: 't9', name: 'Organic Reactions', accuracy: 84, status: 'green', lastReviewed: '2 days ago', nextReview: 'Day 4', reviewsDone: 3 },
  { id: 't10', name: 'Modern Physics', accuracy: 77, status: 'yellow', lastReviewed: '1 day ago', nextReview: 'Day 3', reviewsDone: 2 },
]

export const SAMPLE_PDF: SampleFile = {
  id: 'sample-pdf',
  name: 'Physics_Ch3_Laws_of_Motion_Summary.pdf',
  type: 'pdf',
  sizeLabel: '1.2 MB',
}

export const SAMPLE_IMAGE: SampleFile = {
  id: 'sample-img',
  name: 'Handwritten_Notes_Mechanics.jpg',
  type: 'image',
  sizeLabel: '840 KB',
}

export const PDF_PREVIEW: PdfPreview = {
  title: 'Physics — Chapter 3: Laws of Motion (Summary)',
  pages: 14,
  headings: [
    '3.1 Newton\u2019s First Law & Inertia',
    '3.2 Momentum and Impulse (p = mv, J = F\u0394t)',
    '3.3 Newton\u2019s Second Law in Vector Form',
    '3.4 Action-Reaction Pairs (Third Law)',
    '3.5 Free Body Diagrams & Pseudo Forces',
    '3.6 Friction: Static vs Kinetic Limits',
    '3.7 Work-Energy Theorem for Systems',
  ],
}

export const OCR_TEXT: OcrBlock = {
  text: 'Newton\u2019s 2nd Law: rate of change of momentum equals net force. For constant mass, F = ma. Momentum p = mv conserved when no external force acts on the system. Impulse = change in momentum = F\u00d7t.',
  equations: ['F = dp/dt = m\u00b7a', 'p = m\u00b7v', 'J = F\u00b7\u0394t = \u0394p', 'F_friction \u2264 \u03bc_s\u00b7N'],
  bullets: [
    'First law: object stays at rest / uniform motion unless net force \u2260 0',
    'Second law: direction of acceleration = direction of net force',
    'Third law: forces always occur in equal & opposite pairs on different bodies',
    'Free body diagram isolates one body and shows all forces acting on it',
  ],
}

export const SAMPLE_QUIZ: QuizPayload = {
  source: 'Laws of Motion (PDF + Handwritten Notes)',
  topic: 'Laws of Motion',
  mcqs: [
    {
      id: 'q1',
      question: 'A block of mass 2 kg is pushed with a force of 10 N on a frictionless surface. What is its acceleration?',
      options: ['2 m/s\u00b2', '5 m/s\u00b2', '10 m/s\u00b2', '20 m/s\u00b2'],
      correctIndex: 1,
      explanation: 'From F = ma, a = F/m = 10/2 = 5 m/s\u00b2. Force and acceleration point in the same direction; mass is the proportionality constant between them.',
    },
    {
      id: 'q2',
      question: 'When no external force acts on a two-body system, which quantity is always conserved?',
      options: ['Kinetic energy', 'Total momentum', 'Potential energy', 'Acceleration'],
      correctIndex: 1,
      explanation: 'Total momentum is conserved in the absence of a net external force (Newton\u2019s first law for systems). Energy is only conserved when all forces are conservative \u2014 not guaranteed by zero net force alone.',
    },
    {
      id: 'q3',
      question: 'A 1 kg ball hits a wall and rebounds with the same speed. The impulse delivered by the wall is best described as:',
      options: ['Zero, since speed is unchanged', 'Equal to the change in momentum (\u0394p)', 'Equal to the kinetic energy lost', 'Twice the magnitude of momentum'],
      correctIndex: 3,
      explanation: 'Reversing direction flips momentum sign. Impulse J = \u0394p = p_final \u2212 p_initial = mv \u2212 (\u2212mv) = 2mv, twice the original momentum magnitude. Speed stays the same but velocity (a vector) changes.',
    },
  ],
  subjective: {
    id: 's1',
    prompt: 'Explain why a passenger lurches forward when a speeding bus brakes suddenly, using Newton\u2019s laws of motion. Relate your answer to inertia, reference frames, and the role of seatbelts.',
  },
  diagnostic: {
    conceptualErrors: [
      'Treating impulse and energy as interchangeable \u2014 impulse is a vector (\u0394p), energy is a scalar (Joules).',
      'Forgetting that momentum conservation requires zero NET external force, not just any individual force being zero.',
    ],
    correctCoreConcept: 'Newton\u2019s first law (inertia) keeps the passenger moving forward at the bus\u2019s original velocity when the bus decelerates. There is no real backward force on the passenger \u2014 only the bus slows while the body continues uniform motion. A seatbelt supplies the impulse needed to match the bus\u2019s new velocity.',
    examShortcut: 'For collision/rebound MCQs: if speed is unchanged on rebound, impulse = 2mv. If it sticks, impulse = mv. Pick the factor of 2 immediately to save 40+ seconds.',
  },
}

export const TARGETED_QUIZ: QuizPayload = {
  source: 'Thermodynamics (Targeted Revision)',
  topic: 'Thermodynamics',
  mcqs: [
    {
      id: 'tq1',
      question: 'For an isothermal expansion of an ideal gas, which statement is true?',
      options: ['\u0394U > 0, Q = W', '\u0394U = 0, Q = W', '\u0394U < 0, Q = 0', 'W = 0, Q = \u0394U'],
      correctIndex: 1,
      explanation: 'Isothermal \u21d2 T constant \u21d2 \u0394U = 0 (for ideal gas, U depends only on T). First law: \u0394U = Q \u2212 W \u21d2 0 = Q \u2212 W \u21d2 Q = W. All heat added becomes work done by the gas.',
    },
    {
      id: 'tq2',
      question: 'The efficiency of a Carnot engine operating between 400 K and 300 K is:',
      options: ['25%', '33%', '50%', '75%'],
      correctIndex: 0,
      explanation: '\u03b7 = 1 \u2212 T_c/T_h = 1 \u2212 300/400 = 0.25 = 25%. Carnot efficiency depends only on the reservoir temperatures, not on the working substance.',
    },
    {
      id: 'tq3',
      question: 'In an adiabatic process, the correct relation is:',
      options: ['Q = 0, \u0394U = \u2212W', 'Q = W, \u0394U = 0', 'W = 0, \u0394U = Q', 'Q > 0, \u0394U = W'],
      correctIndex: 0,
      explanation: 'Adiabatic \u21d2 no heat exchange (Q = 0). First law: \u0394U = Q \u2212 W = \u2212W. When the gas expands (W > 0), internal energy drops and temperature falls \u2014 the basis of adiabatic cooling.',
    },
  ],
  subjective: {
    id: 'ts1',
    prompt: 'Derive the expression for work done by an ideal gas during isothermal expansion at temperature T from volume V\u2081 to V\u2082, and explain why internal energy does not change in the process.',
  },
  diagnostic: {
    conceptualErrors: [
      'Confusing isothermal (\u0394U = 0) with adiabatic (Q = 0) \u2014 the held-constant quantity differs.',
      'Applying \u0394U = nCv\u0394T blindly when T is constant \u2014 it correctly gives zero, but only because U depends solely on T for an ideal gas.',
    ],
    correctCoreConcept: 'For an isothermal ideal-gas expansion, W = nRT ln(V\u2082/V\u2081). Since U depends only on T (Joule\u2019s law) and T is fixed, \u0394U = 0, so all heat absorbed Q equals work done W.',
    examShortcut: 'Isothermal \u21d2 think \u201cQ = W, \u0394U = 0.\u201d Adiabatic \u21d2 think \u201cQ = 0, \u0394U = \u2212W.\u201d Anchor on which variable is zero to avoid first-law sign errors.',
  },
}

export const STATS = {
  quizzesCompleted: 18,
  weakTopicsFlagged: 2,
  nextReviewDue: 'Today \u00b7 2 topics',
}
