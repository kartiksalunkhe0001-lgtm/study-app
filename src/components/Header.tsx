import { BrainCircuit, Activity, AlertTriangle, CalendarClock } from 'lucide-react'
import { STATS } from '../data/mock'

const Stat = ({ icon, label, value, accent }: { icon: React.ReactNode; label: string; value: string; accent: string }) => (
  <div className="glass-soft rounded-xl px-4 py-2.5 flex items-center gap-3 min-w-[150px]">
    <div className={`w-9 h-9 rounded-lg grid place-items-center ${accent}`}>{icon}</div>
    <div className="leading-tight">
      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{label}</div>
      <div className="text-sm font-bold text-slate-100">{value}</div>
    </div>
  </div>
)

export default function Header() {
  return (
    <header className="card px-5 py-4 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3.5">
        <div className="relative">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 grid place-items-center shadow-lg shadow-emerald-500/30">
            <BrainCircuit className="w-7 h-7 text-slate-950" strokeWidth={2.2} />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse-soft" />
        </div>
        <div>
          <h1 className="text-xl font-extrabold tracking-tight text-slate-50 leading-none">FocusRecall <span className="text-emerald-400">AI</span></h1>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="chip bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              <Activity className="w-3 h-3" /> Local-First AI Engine
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Stat icon={<Activity className="w-4 h-4 text-emerald-300" />} label="Quizzes Completed" value={String(STATS.quizzesCompleted)} accent="bg-emerald-500/10" />
        <Stat icon={<AlertTriangle className="w-4 h-4 text-rose-300" />} label="Weak Topics Flagged" value={String(STATS.weakTopicsFlagged)} accent="bg-rose-500/10" />
        <Stat icon={<CalendarClock className="w-4 h-4 text-amber-300" />} label="Next Review Due" value={STATS.nextReviewDue} accent="bg-amber-500/10" />
      </div>
    </header>
  )
}
