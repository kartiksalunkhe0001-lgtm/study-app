export type TabId = 'studio' | 'heatmap' | 'feynman'
export type TopicStatus = 'red' | 'yellow' | 'green'
export type BankKey = 'laws-of-motion' | 'thermodynamics'
export type Difficulty = 'easy' | 'medium' | 'hard'
export type QuestionCount = 5 | 10 | 15
export type OutputMode = 'flashcards' | 'mindmap' | 'subjective' | 'mcq'

export interface Topic {
  id: string
  name: string
  accuracy: number
  status: TopicStatus
  lastReviewed: string
  nextReview: string
  reviewsDone: number
  bankKey?: BankKey
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

export interface StudyFile {
  id: string
  name: string
  kind: 'pdf' | 'image' | 'text'
  sizeLabel: string
  bankKey?: BankKey
  previewUrl?: string
  pdfPreview?: PdfPreview
  ocr?: OcrBlock
  textExcerpt?: string
  wordCount?: number
}

export interface Mcq {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  difficulty: Difficulty
}

export interface Flashcard {
  id: string
  front: string
  back: string
}

export interface SubjectiveQuestion {
  id: string
  prompt: string
  keyPoints: string[]
  wordTarget: number
}

export interface MindNode {
  id: string
  label: string
  children: MindNode[]
}

interface OutputBase {
  id: string
  topic: string
  source: 'curated' | 'template'
}

export type McqOutput = OutputBase & { mode: 'mcq'; items: Mcq[]; shortcut: string }
export type FlashcardOutput = OutputBase & { mode: 'flashcards'; items: Flashcard[] }
export type SubjectiveOutput = OutputBase & { mode: 'subjective'; items: SubjectiveQuestion[] }
export type MindMapOutput = OutputBase & { mode: 'mindmap'; root: MindNode }
export type StudyOutput = McqOutput | FlashcardOutput | SubjectiveOutput | MindMapOutput

export interface StudioSettings {
  mode: OutputMode
  count: QuestionCount
  difficulty: Difficulty
}

export interface GenerationRequest extends StudioSettings {
  id: string
  topic: string
  bankKey: BankKey | null
  durationMs: number
}

export interface Bank {
  title: string
  mcqs: Mcq[]
  flashcards: Flashcard[]
  mindMap: MindNode
  shortcut: string
}

export interface FeynmanConcept {
  id: string
  label: string
  keywords: string[]
  idea: string
}

export interface FeynmanMisconception {
  pattern: RegExp
  mistake: string
  correction: string
}

export interface FeynmanTopic {
  id: string
  title: string
  prompt: string
  bankKey: BankKey
  concepts: FeynmanConcept[]
  misconceptions: FeynmanMisconception[]
  metaphor: { title: string; text: string }
}

export interface FeynmanAnalysis {
  referenced: boolean
  wordCount: number
  sentenceCount: number
  avgSentenceLength: number
  jargon: string[]
  matches: FeynmanConcept[]
  blindspots: FeynmanConcept[]
  misconceptions: FeynmanMisconception[]
}

export interface FeynmanSeed {
  key: number
  topicId: string | null
  customTitle: string
}
