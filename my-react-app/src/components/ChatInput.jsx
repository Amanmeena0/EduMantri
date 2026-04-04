import { useRef, useEffect } from 'react'

export default function ChatInput({ value, onChange, onSubmit, disabled }) {
  const textareaRef = useRef(null)

  // Auto-grow textarea
  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`
  }, [value])

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (!disabled && value.trim()) onSubmit()
    }
  }

  return (
    <div className="sticky bottom-0 px-4 pb-4 pt-2 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent">
      <div className="max-w-2xl mx-auto flex items-end gap-2 bg-slate-800 border border-slate-700 rounded-2xl px-4 py-3 shadow-xl shadow-black/40 focus-within:border-amber-400/60 transition-colors duration-200">
        <textarea
          ref={textareaRef}
          rows={1}
          placeholder="Ask about DGFT policies, procedures, IEC, FTP…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className="flex-1 resize-none bg-transparent text-slate-200 placeholder-slate-500 text-sm leading-relaxed outline-none min-h-[24px] max-h-[160px] disabled:opacity-50"
        />
        <button
          onClick={onSubmit}
          disabled={disabled || !value.trim()}
          aria-label="Send message"
          className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 shadow-md shadow-amber-500/20"
        >
          <svg className="w-4 h-4 text-slate-900" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
      <p className="text-center text-slate-600 text-[10px] mt-2">
        EduMantri answers based only on official DGFT documents. Always verify with official sources.
      </p>
    </div>
  )
}
