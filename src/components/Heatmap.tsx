import { AlertTriangle, Target, Zap } from 'lucide-react'
import type { Topic, TopicStatus } from '../data/mock'
import { TOPICS } from '../data/mock'

interface Props {
  onTargetedQuiz: (topic: Topic) => void
  generatingTarget: string | null
}

const STATUS_META: Record<TopicStatus, { label: string; dot: string; text: string; bg: string; border: string; bar: string }> = {
  red: { label: 'High Attention Required', dot: 'bg-rose-500', text: 'text-rose-300', bg: 'bg-rose-500/10', border: 'border-rose-500/30', bar: 'from-rose-500 to-rose-600' },
  yellow: { label: 'Intermediate Review', dot: 'bg-amber-400', text: 'text-amber-300', bg: 'bg-amber-500/10', border: 'border-amber-500/30', bar: 'from-amber-400 to-amber-500' },
  green: { label: 'Strong Mastery', dot: 'bg-emerald-500', text: 'text-emerald-300', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', bar: 'from-emerald-400 to-emerald-500' },
}

export default function Heatmap({ onTargetedQuiz, generatingTarget }: Props) {
  const red = TOPICS.filter((t) => t.status === 'red')
  const yellow = TOPICS.filter((t) => t.status === 'yellow')
  const green = TOPICS.filter((t) => t.status === 'green')

  return (
    <div className="card p-4 flex flex-col gap-3.5 h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-slate-100">Spaced Repetition Heatmap</h2>
        <span className="chip bg-slate-800 text-slate-400 border border-slate-700 text-[10px]">10 Topics</span>
      </div>

      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-2.5 flex items-center gap-2 animate-fade-in">
        <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0" />
        <p className="text-xs text-amber-100">
          <span className="font-bold">{red.length} High-Attention topics</span> queued for your Day-3 spaced review.
        </p>
      </div>

      <div className="flex flex-col gap-3 overflow-y-auto pr-1 -mr-1 min-h-0">
        <Group title="High Attention Required" subtitle="Accuracy < 60%" topics={red} onTargetedQuiz={onTargetedQuiz} generatingTarget={generatingTarget} />
        <Group title="Intermediate Review" subtitle="Accuracy 60–80%" topics={yellow} onTargetedQuiz={onTargetedQuiz} generatingTarget={generatingTarget} />
        <Group title="Strong Mastery" subtitle="Accuracy > 80%" topics={green} onTargetedQuiz={onTargetedQuiz} generatingTarget={generatingTarget} />
      </div>
    </div>
  )
}

function Group({
  title,
  subtitle,
  topics,
  onTargetedQuiz,
  generatingTarget,
}: {
  title: string
  subtitle: string
  topics: Topic[]
  onTargetedQuiz: (t: Topic) => void
  generatingTarget: string | null
}) {
  if (topics.length === 0) return null
  const meta = STATUS_META[topics[0].status]
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${meta.dot}`} />
          <span className={`text-[11px] font-bold uppercase tracking-wider ${meta.text}`}>{title}</span>
        </div>
        <span className="text-[10px] text-slate-500">{subtitle}</span>
      </div>
      <div className="space-y-2">
        {topics.map((t) => {
          const busy = generatingTarget === t.id
          return (
            <div key={t.id} className={`rounded-xl border ${meta.border} ${meta.bg} p-2.5 transition-all hover:scale-[1.01]`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-slate-100">{t.name}</span>
                <span className={`text-xs font-bold ${meta.text}`}>{t.accuracy}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-800/70 overflow-hidden mb-2">
                <div className={`h-full rounded-full bg-gradient-to-r ${meta.bar} transition-all duration-700`} style={{ width: `${t.accuracy}%` }} />
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5">
                <span>Last: {t.lastReviewed}</span>
                <span>Next: <span className="text-slate-300 font-semibold">{t.nextReview}</span></span>
                <span>{t.reviewsDone} reviews</span>
              </div>
              {t.status === 'red' && (
                <button
                  onClick={() => onTargetedQuiz(t)}
                  disabled={busy}
                  className="btn-rose w-full text-[11px] py-1.5"
                >
                  {busy ? <Zap className="w-3 h-3 animate-pulse-soft" /> : <Target className="w-3 h-3" />}
                  {busy ? 'Generating…' : 'Generate Targeted Revision Quiz Now'}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
