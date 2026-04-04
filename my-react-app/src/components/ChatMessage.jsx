function UserAvatar() {
  return (
    <div className="w-7 h-7 flex-shrink-0 rounded-full bg-slate-600 flex items-center justify-center">
      <svg className="w-4 h-4 text-slate-300" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    </div>
  )
}

function BotAvatar() {
  return (
    <div className="w-7 h-7 flex-shrink-0 rounded-full bg-amber-400 flex items-center justify-center shadow-md shadow-amber-500/30">
      <span className="text-slate-900 font-black text-xs select-none">E</span>
    </div>
  )
}

function ThinkingDots() {
  return (
    <div className="flex items-center gap-1 py-1 px-1">
      <span className="w-2 h-2 rounded-full bg-amber-400/60 animate-bounce" style={{ animationDelay: '0ms' }}></span>
      <span className="w-2 h-2 rounded-full bg-amber-400/60 animate-bounce" style={{ animationDelay: '150ms' }}></span>
      <span className="w-2 h-2 rounded-full bg-amber-400/60 animate-bounce" style={{ animationDelay: '300ms' }}></span>
    </div>
  )
}

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'
  const isThinking = message.role === 'assistant' && message.thinking

  return (
    <div className={`flex gap-3 w-full ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {isUser ? <UserAvatar /> : <BotAvatar />}

      <div
        className={`
          max-w-[80%] sm:max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed
          ${isUser
            ? 'bg-amber-400 text-slate-900 font-medium rounded-tr-sm'
            : 'bg-slate-800 text-slate-200 border border-slate-700/60 rounded-tl-sm'
          }
        `}
      >
        {isThinking ? (
          <ThinkingDots />
        ) : (
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
        )}
      </div>
    </div>
  )
}
