export default function FollowupSuggestions({ suggestions, onSelect }) {
  if (!suggestions || suggestions.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 mt-3 ml-10">
      {suggestions.map((q, i) => (
        <button
          key={i}
          onClick={() => onSelect(q)}
          className="text-xs px-3 py-1.5 rounded-full border border-amber-400/40 text-amber-400/80 hover:text-amber-300 hover:border-amber-400/70 hover:bg-amber-400/5 transition-all duration-150 cursor-pointer"
        >
          {q}
        </button>
      ))}
    </div>
  )
}
