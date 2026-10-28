import { useState } from 'react'
import Header from './components/Header'
import InputPanel from './components/InputPanel'
import QuizEngine from './components/QuizEngine'
import Heatmap from './components/Heatmap'
import { SAMPLE_QUIZ, TARGETED_QUIZ } from './data/mock'
import type { SampleFile, Topic, QuizPayload } from './data/mock'

export default function App() {
  const [activeFile, setActiveFile] = useState<SampleFile | null>(null)
  const [generating, setGenerating] = useState(false)
  const [quiz, setQuiz] = useState<QuizPayload | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [generatingTarget, setGeneratingTarget] = useState<string | null>(null)

  const resetQuizState = () => {
    setQuiz(null)
    setSubmitted(false)
  }

  const handleActivate = (f: SampleFile) => {
    setActiveFile(f)
    resetQuizState()
  }

  const handleClear = () => {
    setActiveFile(null)
    resetQuizState()
  }

  const handleGenerate = () => {
    if (!activeFile) return
    setGenerating(true)
    resetQuizState()
    window.setTimeout(() => {
      setQuiz(SAMPLE_QUIZ)
      setGenerating(false)
    }, 1400)
  }

  const handleSubmit = () => setSubmitted(true)

  const handleTargetedQuiz = (topic: Topic) => {
    setGeneratingTarget(topic.id)
    resetQuizState()
    window.setTimeout(() => {
      setQuiz(TARGETED_QUIZ)
      setGeneratingTarget(null)
      document.getElementById('quiz-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 1200)
  }

  return (
    <div className="min-h-screen px-4 py-5 lg:px-6 lg:py-6 max-w-[1600px] mx-auto">
      <div className="flex flex-col gap-4">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <aside className="lg:col-span-3 xl:col-span-3">
            <InputPanel
              activeFile={activeFile}
              onActivate={handleActivate}
              onClear={handleClear}
              onGenerate={handleGenerate}
              generating={generating}
            />
          </aside>

          <main id="quiz-anchor" className="lg:col-span-6 xl:col-span-6">
            <QuizEngine quiz={quiz} generating={generating || generatingTarget !== null} submitted={submitted} onSubmit={handleSubmit} />
          </main>

          <aside className="lg:col-span-3 xl:col-span-3">
            <Heatmap onTargetedQuiz={handleTargetedQuiz} generatingTarget={generatingTarget} />
          </aside>
        </div>

        <footer className="text-center text-[11px] text-slate-600 py-3">
          FocusRecall AI · Local-first active recall engine · All processing simulated on-device for demo
        </footer>
      </div>
    </div>
  )
}
