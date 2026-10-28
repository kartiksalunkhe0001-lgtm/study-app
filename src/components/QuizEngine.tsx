import { useState } from 'react'
import { Zap, CheckCircle2, XCircle, Loader2, Send, Brain, Lightbulb, Clock, AlertOctagon, Mic } from 'lucide-react'
import type { QuizPayload } from '../data/mock'

interface Props {
  quiz: QuizPayload | null
  generating: boolean
  submitted: boolean
  onSubmit: () => void
}

export default function QuizEngine({ quiz, generating, submitted, onSubmit }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [subjective, setSubjective] = useState('')
  const [micActive, setMicActive] = useState(false)

  if (generating) {
    return (
      <div className="card p-6 flex flex-col items-center justify-center gap-4 min-h-[420px] animate-fade-in">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 animate-spin-slow" />
          <Zap className="w-6 h-6 text-emerald-400 absolute inset-0 m-auto" />
        </div>
        <div className="text-center">
          <div className="text-sm font-bold text-slate-100 flex items-center justify-center gap-2">
            <Brain className="w-4 h-4 text-emerald-400" /> Generating Active Recall Quiz
          </div>
          <div className="mt-2 space-y-1.5">
            {['Analyzing document structure & key concepts', 'Formulating retrieval-practice MCQs', 'Crafting one deep-reasoning question', 'Preparing diagnostic rubric'].map((s, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <Loader2 className="w-3 h-3 animate-spin-slow text-emerald-400" style={{ animationDelay: `${i * 200}ms` }} />
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="w-56 h-1.5 rounded-full bg-slate-800 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 animate-pulse-soft" style={{ width: '78%' }} />
        </div>
      </div>
    )
  }

  if (!quiz) {
    return (
      <div className="card p-6 flex flex-col items-center justify-center text-center min-h-[420px] gap-3">
        <div className="w-14 h-14 rounded-2xl bg-slate-800/60 grid place-items-center">
          <Zap className="w-7 h-7 text-slate-500" />
        </div>
        <h3 className="text-base font-bold text-slate-200">Active Recall Quiz Engine</h3>
        <p className="text-sm text-slate-500 max-w-xs">
          Upload or select a study sample, then hit <span className="text-emerald-400 font-semibold">Generate Active Recall Quiz</span> to produce instant MCQs and a deep-reasoning question.
        </p>
      </div>
    )
  }

  const allMcqAnswered = quiz.mcqs.every((m) => answers[m.id] !== undefined)

  return (
    <div className="card p-5 flex flex-col gap-5 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
          <Zap className="w-4 h-4 text-emerald-400" /> Active Recall Quiz
        </h2>
        <span className="chip bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">{quiz.topic}</span>
      </div>
      <p className="text-xs text-slate-400 -mt-3">Source: {quiz.source}</p>

      <div className="space-y-3">
        {quiz.mcqs.map((m, idx) => (
          <div key={m.id} className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-3.5">
            <div className="flex gap-2 mb-2.5">
              <span className="chip bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 shrink-0">MCQ {idx + 1}</span>
              <p className="text-sm font-semibold text-slate-100 leading-snug">{m.question}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {m.options.map((opt, oi) => {
                const selected = answers[m.id] === oi
                const isCorrect = oi === m.correctIndex
                const reveal = submitted
                let cls = 'border-slate-700 bg-slate-800/40 hover:bg-slate-700/40 text-slate-300'
                if (selected && !reveal) cls = 'border-emerald-500/60 bg-emerald-500/10 text-emerald-200'
                if (reveal && isCorrect) cls = 'border-emerald-500/70 bg-emerald-500/15 text-emerald-200'
                if (reveal && selected && !isCorrect) cls = 'border-rose-500/70 bg-rose-500/15 text-rose-200'
                if (reveal && !selected && !isCorrect) cls = 'border-slate-800 bg-slate-900/30 text-slate-500 opacity-60'
                return (
                  <button
                    key={oi}
                    disabled={submitted}
                    onClick={() => setAnswers((a) => ({ ...a, [m.id]: oi }))}
                    className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 text-sm text-left transition-all duration-150 ${cls}`}
                  >
                    <span className="w-5 h-5 rounded-md grid place-items-center text-[11px] font-bold border border-current/40 opacity-90 shrink-0">
                      {String.fromCharCode(65 + oi)}
                    </span>
                    <span className="flex-1">{opt}</span>
                    {reveal && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    {reveal && selected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                  </button>
                )
              })}
            </div>
            {submitted && (
              <div className="mt-2.5 rounded-lg bg-slate-950/50 border border-slate-800 px-3 py-2 text-xs text-slate-300 animate-fade-in flex gap-2">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span><span className="font-semibold text-amber-300">Concept:</span> {m.explanation}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-3.5">
        <div className="flex gap-2 mb-2">
          <span className="chip bg-amber-500/15 text-amber-300 border border-amber-500/20 shrink-0">Subjective</span>
          <p className="text-sm font-semibold text-slate-100 leading-snug">{quiz.subjective.prompt}</p>
        </div>
        <div className="relative">
          <textarea
            value={subjective}
            onChange={(e) => setSubjective(e.target.value)}
            disabled={submitted}
            placeholder="Type or speak your answer in detail..."
            rows={4}
            className="w-full rounded-lg bg-slate-950/60 border border-slate-800 px-3 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 resize-none transition-colors"
          />
          <button
            onClick={() => setMicActive((m) => !m)}
            disabled={submitted}
            title="Voice input"
            className={`absolute bottom-2.5 right-2.5 w-8 h-8 rounded-lg grid place-items-center transition-all ${micActive ? 'bg-rose-500/20 text-rose-300 animate-pulse-soft' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}
          >
            <Mic className="w-4 h-4" />
          </button>
        </div>
        {micActive && !submitted && (
          <div className="mt-2 text-[11px] text-rose-300 flex items-center gap-1.5 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse-soft" /> Listening… (demo: type to populate)
          </div>
        )}
      </div>

      {!submitted ? (
        <button
          onClick={onSubmit}
          disabled={!allMcqAnswered}
          className="btn-rose w-full"
        >
          <Send className="w-4 h-4" /> Submit &amp; Evaluate
        </button>
      ) : (
        <DiagnosticCard diag={quiz.diagnostic} />
      )}
    </div>
  )
}

function DiagnosticCard({ diag }: { diag: QuizPayload['diagnostic'] }) {
  return (
    <div className="rounded-xl border border-rose-500/30 bg-gradient-to-br from-rose-950/40 to-slate-950/50 p-4 animate-slide-up">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-rose-500/20 grid place-items-center">
          <AlertOctagon className="w-4 h-4 text-rose-300" />
        </div>
        <h3 className="text-sm font-bold text-rose-200">Diagnostic Error Detective</h3>
      </div>
      <div className="space-y-3">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-rose-400 font-bold mb-1.5">Conceptual Errors Identified</div>
          <ul className="space-y-1.5">
            {diag.conceptualErrors.map((e, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" /> {e}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold mb-1.5">Correct Core Concept</div>
          <div className="flex items-start gap-2 text-xs text-slate-200 rounded-lg bg-emerald-500/5 border border-emerald-500/15 px-3 py-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> {diag.correctCoreConcept}
          </div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold mb-1.5">Time-Saving Exam Shortcut</div>
          <div className="flex items-start gap-2 text-xs text-slate-200 rounded-lg bg-amber-500/5 border border-amber-500/15 px-3 py-2">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> {diag.examShortcut}
          </div>
        </div>
      </div>
    </div>
  )
}
