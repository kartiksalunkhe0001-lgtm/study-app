import { useRef, useState } from 'react'
import { FileText, Image as ImageIcon, UploadCloud, Sparkles, ChevronDown, ChevronUp, FileUp, Loader2, Trash2 } from 'lucide-react'
import { PDF_PREVIEW, OCR_TEXT, SAMPLE_PDF, SAMPLE_IMAGE } from '../data/mock'
import type { SampleFile } from '../data/mock'

interface Props {
  activeFile: SampleFile | null
  onActivate: (f: SampleFile) => void
  onClear: () => void
  onGenerate: () => void
  generating: boolean
}

export default function InputPanel({ activeFile, onActivate, onClear, onGenerate, generating }: Props) {
  const [dragging, setDragging] = useState(false)
  const [ocrOpen, setOcrOpen] = useState(true)
  const [ingesting, setIngesting] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return
    const f = files[0]
    const type: 'pdf' | 'image' = f.type.includes('pdf') ? 'pdf' : 'image'
    const sizeLabel = `${(f.size / 1024).toFixed(0)} KB`
    setIngesting(true)
    window.setTimeout(() => {
      onActivate({ id: `up-${Date.now()}`, name: f.name, type, sizeLabel })
      setIngesting(false)
    }, 900)
  }

  const showPdf = activeFile?.type === 'pdf'
  const showImage = activeFile?.type === 'image'

  return (
    <div className="card p-4 flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-slate-100 flex items-center gap-2">
          <FileUp className="w-4 h-4 text-emerald-400" /> Study Material Ingestion
        </h2>
        {activeFile && (
          <button onClick={onClear} className="text-xs text-slate-400 hover:text-rose-300 flex items-center gap-1 transition-colors">
            <Trash2 className="w-3.5 h-3.5" /> Clear
          </button>
        )}
      </div>

      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files) }}
        onClick={() => inputRef.current?.click()}
        className={`rounded-2xl border-2 border-dashed px-4 py-6 text-center cursor-pointer transition-all duration-200 ${
          dragging ? 'border-emerald-400 bg-emerald-500/10 scale-[1.01]' : 'border-slate-700 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-800/40'
        }`}
      >
        <input ref={inputRef} type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => handleFiles(e.target.files)} />
        <UploadCloud className={`w-8 h-8 mx-auto mb-2 transition-colors ${dragging ? 'text-emerald-400' : 'text-slate-500'}`} />
        <p className="text-sm font-semibold text-slate-200">Drag &amp; drop or <span className="text-emerald-400">browse</span></p>
        <p className="text-xs text-slate-500 mt-0.5">PDF notes (.pdf) · Handwritten photos (.jpg, .png, .jpeg)</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => onActivate(SAMPLE_PDF)}
          className={`btn-ghost text-xs ${activeFile?.id === SAMPLE_PDF.id ? 'ring-2 ring-emerald-500/60 bg-emerald-500/10' : ''}`}
        >
          <FileText className="w-3.5 h-3.5 text-rose-300" /> Sample PDF
        </button>
        <button
          onClick={() => onActivate(SAMPLE_IMAGE)}
          className={`btn-ghost text-xs ${activeFile?.id === SAMPLE_IMAGE.id ? 'ring-2 ring-emerald-500/60 bg-emerald-500/10' : ''}`}
        >
          <ImageIcon className="w-3.5 h-3.5 text-amber-300" /> Sample Note
        </button>
      </div>

      {ingesting && (
        <div className="rounded-xl bg-slate-900/60 px-3 py-2.5 flex items-center gap-2 text-xs text-slate-300 animate-fade-in">
          <Loader2 className="w-4 h-4 text-emerald-400 animate-spin-slow" /> Ingesting &amp; parsing document structure…
        </div>
      )}

      {!activeFile && !ingesting && (
        <div className="rounded-xl border border-slate-800 bg-slate-900/30 px-4 py-6 text-center text-xs text-slate-500">
          No file loaded yet. Upload your own or load a sample to preview extraction.
        </div>
      )}

      {activeFile && !ingesting && (
        <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-3 animate-slide-up">
          <div className="flex items-center gap-2.5 mb-3">
            <div className={`w-9 h-9 rounded-lg grid place-items-center ${showPdf ? 'bg-rose-500/15' : 'bg-amber-500/15'}`}>
              {showPdf ? <FileText className="w-5 h-5 text-rose-300" /> : <ImageIcon className="w-5 h-5 text-amber-300" />}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-100 truncate">{activeFile.name}</div>
              <div className="text-[11px] text-slate-500">{activeFile.sizeLabel} · {showPdf ? 'PDF Document' : 'Handwritten Image'}</div>
            </div>
          </div>

          {showPdf && (
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">File Ingestion Preview</div>
              <div className="text-sm font-bold text-slate-100 leading-tight">{PDF_PREVIEW.title}</div>
              <div className="mt-1 chip bg-slate-800 text-slate-300 border border-slate-700">{PDF_PREVIEW.pages} pages</div>
              <div className="mt-3 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Key Headings Extracted</div>
              <ul className="mt-1.5 space-y-1">
                {PDF_PREVIEW.headings.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {showImage && (
            <div>
              <div className="rounded-lg overflow-hidden border border-slate-700/60 mb-2 relative">
                <img
                  src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=640&q=70"
                  alt="Handwritten notes preview"
                  className="w-full h-28 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
              <button
                onClick={() => setOcrOpen((o) => !o)}
                className="w-full flex items-center justify-between text-[11px] uppercase tracking-wider text-slate-300 font-semibold mb-1.5 hover:text-emerald-300 transition-colors"
              >
                <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-amber-300" /> Live Vision OCR Transcription</span>
                {ocrOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
              {ocrOpen && (
                <div className="rounded-lg bg-slate-950/60 border border-slate-800 p-2.5 text-xs text-slate-300 leading-relaxed animate-fade-in">
                  <p className="mb-2">{OCR_TEXT.text}</p>
                  <div className="space-y-1.5 mb-2">
                    {OCR_TEXT.equations.map((eq, i) => (
                      <div key={i} className="eq">{eq}</div>
                    ))}
                  </div>
                  <ul className="space-y-1">
                    {OCR_TEXT.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400 mt-0.5">•</span>
                        <span className="text-slate-300">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <button
        onClick={onGenerate}
        disabled={!activeFile || generating}
        className="btn-primary w-full mt-auto"
      >
        {generating ? <Loader2 className="w-4 h-4 animate-spin-slow" /> : <Sparkles className="w-4 h-4" />}
        {generating ? 'Processing with AI…' : 'Generate Active Recall Quiz'}
      </button>
    </div>
  )
}
