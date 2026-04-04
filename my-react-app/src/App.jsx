
import { useState, useRef, useEffect } from 'react'
import Header from './components/Header'
import WelcomeScreen from './components/WelcomeScreen'
import ChatMessage from './components/ChatMessage'
import ChatInput from './components/ChatInput'
import FollowupSuggestions from './components/FollowupSuggestions'

// Replace this URL with your backend endpoint when the server is running.
// The http://localhost fallback is for local development only; always set
// VITE_API_URL to an HTTPS endpoint in staging/production environments.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/chat'

function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [followups, setFollowups] = useState([])
  const bottomRef = useRef(null)

  // Scroll to the latest message whenever the list changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function sendMessage(text) {
    const question = text.trim()
    if (!question || loading) return

    setInput('')
    setFollowups([])

    const userMsg = { id: Date.now(), role: 'user', content: question }
    const thinkingMsg = { id: Date.now() + 1, role: 'assistant', thinking: true, content: '' }

    setMessages((prev) => [...prev, userMsg, thinkingMsg])
    setLoading(true)

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, history: messages.filter((m) => !m.thinking) }),
      })

      if (!res.ok) throw new Error(`Server error: ${res.status}`)

      const data = await res.json()

      // Replace the thinking placeholder with the real answer
      setMessages((prev) =>
        prev.map((m) =>
          m.thinking ? { ...m, thinking: false, content: data.answer ?? 'No response received.' } : m
        )
      )

      if (Array.isArray(data.followups) && data.followups.length > 0) {
        setFollowups(data.followups)
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.thinking
            ? {
                ...m,
                thinking: false,
                content:
                  'Sorry, I could not reach the server. Please make sure the EduMantri backend is running.',
              }
            : m
        )
      )
    } finally {
      setLoading(false)
    }
  }

  function handleFollowup(q) {
    setFollowups([])
    sendMessage(q)
  }

  const isEmpty = messages.length === 0

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-white" data-testid="app-root">
      <Header />

      {/* Messages area */}
      <main className="flex-1 overflow-y-auto">
        {isEmpty ? (
          <WelcomeScreen onPromptClick={(p) => sendMessage(p)} />
        ) : (
          <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-5">
            {messages.map((msg) => (
              <div key={msg.id}>
                <ChatMessage message={msg} />
                {/* Show follow-up chips below the last assistant message */}
                {!msg.thinking &&
                  msg.role === 'assistant' &&
                  msg.id === messages[messages.length - 1]?.id && (
                    <FollowupSuggestions suggestions={followups} onSelect={handleFollowup} />
                  )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
        )}
      </main>

      <ChatInput
        value={input}
        onChange={setInput}
        onSubmit={() => sendMessage(input)}
        disabled={loading}
      />
    </div>
  )
}

export default App
