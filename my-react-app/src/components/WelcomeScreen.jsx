const EXAMPLE_PROMPTS = [
  "What is an Importer Exporter Code (IEC) and how do I apply?",
  "Explain the MEIS scheme under Foreign Trade Policy.",
  "What documents are required for export of goods under DGFT?",
  "How do I register on the DGFT portal for the first time?",
]

export default function WelcomeScreen({ onPromptClick }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-12 text-center">
      {/* Hero logo */}
      <div className="w-16 h-16 rounded-2xl bg-amber-400 flex items-center justify-center shadow-xl shadow-amber-500/30 mb-6">
        <span className="text-slate-900 font-black text-3xl select-none">E</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
        Welcome to <span className="text-amber-400">EduMantri</span>
      </h1>
      <p className="text-slate-400 text-sm sm:text-base max-w-md mb-10">
        Your AI-powered guide to DGFT regulations, Foreign Trade Policies, and export–import procedures.
        Ask anything about official DGFT documents.
      </p>

      {/* Example prompts */}
      <div className="grid gap-3 w-full max-w-xl">
        {EXAMPLE_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            onClick={() => onPromptClick(prompt)}
            className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-400/50 text-left transition-all duration-200 cursor-pointer"
          >
            <span className="w-5 h-5 flex-shrink-0 text-amber-400/70 group-hover:text-amber-400 transition-colors">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-slate-300 group-hover:text-white text-sm transition-colors">{prompt}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
