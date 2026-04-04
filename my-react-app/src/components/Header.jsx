export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-3 bg-slate-900/80 backdrop-blur border-b border-slate-700/60">
      <div className="flex items-center gap-3">
        {/* Logo mark */}
        <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/30">
          <span className="text-slate-900 font-black text-sm select-none">E</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-amber-400 font-bold text-base tracking-wide">EduMantri</span>
          <span className="text-slate-400 text-[10px] font-medium uppercase tracking-widest">DGFT Policy Assistant</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Online
        </span>
      </div>
    </header>
  )
}
