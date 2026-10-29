import type { StudyFile } from '../types'

export const SAMPLE_PDF: StudyFile = {
  id: 'sample-pdf',
  name: 'Physics_Ch3_Laws_of_Motion_Summary.pdf',
  kind: 'pdf',
  sizeLabel: '1.2 MB',
  bankKey: 'laws-of-motion',
  pdfPreview: {
    title: 'Physics: Chapter 3, Laws of Motion (Summary)',
    pages: 14,
    headings: [
      '3.1 Newton’s First Law & Inertia',
      '3.2 Momentum and Impulse (p = mv, J = FΔt)',
      '3.3 Newton’s Second Law in Vector Form',
      '3.4 Action-Reaction Pairs (Third Law)',
      '3.5 Free Body Diagrams & Pseudo Forces',
      '3.6 Friction: Static vs Kinetic Limits',
      '3.7 Work-Energy Theorem for Systems',
    ],
  },
}

export const SAMPLE_NOTE: StudyFile = {
  id: 'sample-note',
  name: 'Handwritten_Notes_Mechanics.jpg',
  kind: 'image',
  sizeLabel: '840 KB',
  bankKey: 'laws-of-motion',
  previewUrl: 'https://images.pexels.com/photos/34079281/pexels-photo-34079281.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ocr: {
    text: 'Newton’s 2nd Law: rate of change of momentum equals net force. For constant mass, F = ma. Momentum p = mv is conserved when no external force acts on the system. Impulse = change in momentum = F×t.',
    equations: ['F = dp/dt = m·a', 'p = m·v', 'J = F·Δt = Δp', 'F_friction ≤ μ_s·N'],
    bullets: [
      'First law: object stays at rest or uniform motion unless net force ≠ 0',
      'Second law: direction of acceleration = direction of net force',
      'Third law: forces come in equal and opposite pairs on different bodies',
      'Free body diagram isolates one body and shows all forces acting on it',
    ],
  },
}
