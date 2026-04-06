import { useState } from "react";

export default function Workspace() {
  const [message, setMessage] = useState("");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e3e3dc; border-radius: 10px; }
      `}</style>

      <div style={{ backgroundColor: '#fafaf3', color: '#1b1c18', fontFamily: 'Inter, sans-serif', display: 'flex', height: '100vh', overflow: 'hidden' }}>

        {/* Sidebar */}
        <aside style={{ display: 'flex', flexDirection: 'column', height: '100%', paddingTop: '1.5rem', paddingBottom: '1.5rem', paddingRight: '1rem', backgroundColor: '#f5f4ed', width: '16rem', flexShrink: 0 }}>
          <div style={{ padding: '0 1.5rem', marginBottom: '2.5rem' }}>
            <h1 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.25rem', fontWeight: 700, color: '#163821' }}>Study Workspace</h1>
            <p style={{ fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', fontWeight: 600, color: '#78716c', marginTop: '0.25rem' }}>The Digital Atelier</p>
          </div>

          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {[
              { icon: 'description', label: 'Documents', active: true },
              { icon: 'smart_toy', label: 'AI Tutor', active: false },
              { icon: 'style', label: 'Flashcards', active: false },
              { icon: 'edit_note', label: 'Notes', active: false },
              { icon: 'summarize', label: 'Summary', active: false },
            ].map(item => (
              <a
                key={item.label}
                href="#"
                style={{
                  display: 'flex', alignItems: 'center',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: item.active ? '#e9e8e2' : 'transparent',
                  color: item.active ? '#163821' : '#78716c',
                  borderRadius: item.active ? '0 9999px 9999px 0' : undefined,
                  fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', fontWeight: 600,
                  textDecoration: 'none', transition: 'transform 0.3s'
                }}
              >
                <span className="material-symbols-outlined" style={{ marginRight: '0.75rem' }}>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div style={{ padding: '0 1.5rem', marginTop: '1.5rem' }}>
            <button style={{ width: '100%', backgroundColor: '#163821', color: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.75rem', fontWeight: 500, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>upload_file</span>
              Upload Text
            </button>
          </div>

          <div style={{ marginTop: 'auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 0', color: '#78716c', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
              <span className="material-symbols-outlined" style={{ marginRight: '0.75rem', fontSize: '0.875rem' }}>help</span> Support
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 0', color: '#78716c', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
              <span className="material-symbols-outlined" style={{ marginRight: '0.75rem', fontSize: '0.875rem' }}>logout</span> Sign Out
            </a>
          </div>
        </aside>

        {/* Main Workspace */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>

          {/* Header */}
          <header style={{ backgroundColor: 'rgba(250,250,243,0.85)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0.75rem 2rem', boxShadow: '0 1px 3px rgba(27,28,24,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <span style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontSize: '1.5rem', color: '#163821' }}>The Scholarly Sanctuary</span>
              <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                {[
                  { label: 'Library', active: true },
                  { label: 'Scholarships', active: false },
                  { label: 'Archives', active: false },
                ].map(item => (
                  <a key={item.label} href="#" style={{
                    color: item.active ? '#163821' : '#78716c',
                    fontFamily: 'Newsreader, serif', fontSize: '1.125rem', lineHeight: 1.5,
                    textDecoration: 'none', fontWeight: item.active ? 700 : 400,
                    borderBottom: item.active ? '2px solid #452c00' : 'none',
                    paddingBottom: item.active ? '2px' : undefined
                  }}>{item.label}</a>
                ))}
              </nav>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginRight: '1rem' }}>
                {['notifications', 'settings'].map(icon => (
                  <button key={icon} style={{ padding: '0.5rem', color: '#163821', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', borderRadius: '9999px', display: 'flex', alignItems: 'center' }}>
                    <span className="material-symbols-outlined">{icon}</span>
                  </button>
                ))}
              </div>
              <button style={{ backgroundColor: '#452c00', color: '#ffffff', padding: '0.5rem 1.5rem', borderRadius: '0.75rem', fontWeight: 500, fontSize: '0.875rem', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }}>
                New Session
              </button>
              <img
                alt="User profile avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARsuMtOYOKjGJTxQEQDvEypsgdad-ewAzF_47LKBl65BQqfcqNGdfl17oK2zZoPIfj3XwOR85QbkgTFUO9hVaCpXo_c_GxRkXTYZs0QVKkXiP4UANewHQjm1ZgmCl_tQ2i46uo3Q2c__7pV5mR6G6IuFBxNDrpQAr61TyHDeMOAF4-oF3F0DeD0z7x1xYLiqaapayOMz-_1GyVjL69jZ5sukVcFoj_PBHbvy5qm8FOGsfNmREeUZpru79AHklf6mphjMzu-T4_vORg"
                style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', border: '1px solid #c2c8c0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
              />
            </div>
          </header>

          {/* 3-Column Body */}
          <div style={{ flex: 1, display: 'flex', overflow: 'hidden', padding: '1.5rem', gap: '1.5rem' }}>

            {/* Panel A: Library */}
            <section style={{ width: '18rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', flexShrink: 0 }}>
              <div style={{ backgroundColor: '#f5f4ed', borderRadius: '1rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#163821' }}>Library</h2>
                <button style={{ width: '100%', backgroundColor: '#e3e3dc', border: '2px dashed #c2c8c0', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer', marginBottom: '1.5rem', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e3e3dc'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#e3e3dc'}
                >
                  <span className="material-symbols-outlined" style={{ color: '#163821', fontSize: '1.5rem' }}>cloud_upload</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#424842' }}>Upload PDF</span>
                </button>

                <div className="custom-scrollbar" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { icon: 'picture_as_pdf', name: 'Ancient Greek Philosophies.pdf', meta: '1.2 MB • Updated 2h ago', active: true },
                    { icon: 'description', name: 'Medieval History Notes.txt', meta: '45 KB • Updated yesterday', active: false },
                    { icon: 'picture_as_pdf', name: 'Structural Linguistics Intro.pdf', meta: '4.8 MB • Updated 3d ago', active: false },
                  ].map(doc => (
                    <div
                      key={doc.name}
                      style={{ padding: '0.75rem', backgroundColor: doc.active ? '#e9e8e2' : '#f5f4ed', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', border: doc.active ? 'none' : '1px solid transparent', transition: 'all 0.2s' }}
                    >
                      <span className="material-symbols-outlined" style={{ color: '#416743' }}>{doc.icon}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: '0.875rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{doc.name}</p>
                        <p style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#a8a29e' }}>{doc.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Panel B: Chat */}
            <section style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', borderRadius: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden', position: 'relative', border: '1px solid rgba(227,227,220,0.5)' }}>
              <div className="custom-scrollbar" style={{ flex: 1, overflowY: 'auto', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                {/* AI Message 1 */}
                <div style={{ display: 'flex', gap: '1rem', maxWidth: '85%' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', backgroundColor: '#163821', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: '#ffffff', fontSize: '1.25rem' }}>auto_awesome</span>
                  </div>
                  <div>
                    <div style={{ backgroundColor: '#f5f4ed', padding: '1.5rem', borderRadius: '1rem 1rem 1rem 0' }}>
                      <p style={{ fontFamily: 'Newsreader, serif', fontSize: '1.125rem', lineHeight: 1.6 }}>
                        Greetings. I've analyzed your document on <em>Ancient Greek Philosophies</em>. How would you like to proceed today? We can deep-dive into Socrates' dialectic method, or perhaps summarize the core tenets of Stoicism found in chapter three.
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <span style={{ padding: '0.25rem 0.75rem', backgroundColor: '#ffddb1', color: '#291800', borderRadius: '9999px', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>AI Suggestion</span>
                      <span style={{ padding: '0.25rem 0.75rem', backgroundColor: '#c2eec0', color: '#476d49', borderRadius: '9999px', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Context: Ch. 3</span>
                    </div>
                  </div>
                </div>

                {/* User Message */}
                <div style={{ display: 'flex', gap: '1rem', maxWidth: '80%', marginLeft: 'auto', flexDirection: 'row-reverse' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', overflow: 'hidden', flexShrink: 0, border: '1px solid #c2c8c0' }}>
                    <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc0QtVypWlQXoEjnIvSFYpY0fZFKxiHx9YkPr6OjGYMC-uxKrcfMejD0Q_Ibm7G807Cv9Jx8KEco9KdzOu5JJsrVzeKU9ZitDDzQBH-5vL4Nt8Z2q2MbSWGxWtvVTJwJcP_nWjshSoc97Yi_wGXi2cYhd2_13V6e4i3C2Evpl4arJzYnVdoiF5kZzbrA2mlZ4zXKoiLPxWTT3I1FN_iphKy8aU94KqrWNraKLTNW-flJM2ouP3lDiM8euznouVvvIfciku3sOK9oZr" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ backgroundColor: '#163821', color: '#ffffff', padding: '1.5rem', borderRadius: '1rem 1rem 0 1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', lineHeight: 1.6 }}>Can you explain the difference between the Socratic method and the Sophists' approach as mentioned on page 14?</p>
                  </div>
                </div>

                {/* AI Message 2 */}
                <div style={{ display: 'flex', gap: '1rem', maxWidth: '85%' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', backgroundColor: '#163821', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: '#ffffff', fontSize: '1.25rem' }}>auto_awesome</span>
                  </div>
                  <div style={{ backgroundColor: '#f5f4ed', padding: '1.5rem', borderRadius: '1rem 1rem 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <p style={{ fontFamily: 'Newsreader, serif', fontSize: '1.125rem', lineHeight: 1.6 }}>A pivotal distinction. Page 14 highlights that while both used rhetoric, their goals were polar opposites:</p>
                    <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <li style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', color: '#424842', fontSize: '1rem' }}><strong>Socrates:</strong> Sought objective truth through persistent questioning.</li>
                      <li style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', color: '#424842', fontSize: '1rem' }}><strong>Sophists:</strong> Taught persuasion for the sake of political power, often regardless of truth.</li>
                    </ul>
                    <p style={{ fontFamily: 'Newsreader, serif', fontSize: '1.125rem', lineHeight: 1.6 }}>Would you like me to generate a set of flashcards to help you memorize these differences?</p>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(227,227,220,0.3)' }}>
                <div style={{ position: 'relative' }}>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Inquire with your mentor..."
                    rows={1}
                    style={{ width: '100%', backgroundColor: '#e9e8e2', border: 'none', borderRadius: '1rem', padding: '1rem 1.5rem', paddingRight: '4rem', fontFamily: 'Newsreader, serif', fontSize: '1.125rem', outline: 'none', resize: 'none', color: '#1b1c18', transition: 'box-shadow 0.2s' }}
                    onFocus={e => e.currentTarget.style.boxShadow = '0 0 0 2px rgba(22,56,33,0.2)'}
                    onBlur={e => e.currentTarget.style.boxShadow = 'none'}
                  />
                  <button style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '2.5rem', height: '2.5rem', backgroundColor: '#163821', color: '#ffffff', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
                  >
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Panel C: Study Tools */}
            <section style={{ width: '20rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', flexShrink: 0, height: '100%', overflow: 'hidden' }}>

              {/* Flashcards */}
              <div style={{ backgroundColor: '#f5f4ed', borderRadius: '1rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', maxHeight: '50%', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.25rem', fontWeight: 600, color: '#163821' }}>Study Corner</h2>
                  <span style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#604006', backgroundColor: '#ffddb1', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>8 New</span>
                </div>

                <div style={{ position: 'relative', height: '12rem', marginBottom: '1.5rem' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: '#ffffff', border: '1px solid rgba(194,200,192,0.3)', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', transform: 'rotate(2deg) translateY(8px)', zIndex: 0 }} />
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: '#ffffff', border: '1px solid rgba(194,200,192,0.3)', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.08)', transform: 'rotate(-1deg) translateY(4px)', zIndex: 10 }} />
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: '#ffffff', border: '1px solid rgba(194,200,192,0.5)', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', zIndex: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#416743', fontWeight: 700, marginBottom: '0.5rem' }}>Question</p>
                    <p style={{ fontFamily: 'Newsreader, serif', fontSize: '1.125rem', lineHeight: 1.3 }}>What was the primary method of instruction used by Socrates?</p>
                    <button style={{ marginTop: '1rem', fontSize: '0.75rem', fontWeight: 600, color: '#163821', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Reveal Answer</button>
                  </div>
                </div>

                <button style={{ width: '100%', padding: '0.75rem', backgroundColor: '#c2eec0', color: '#476d49', borderRadius: '0.75rem', fontWeight: 700, fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s' }}>
                  Generate Flashcards
                </button>
              </div>

              {/* Notes & Summaries */}
              <div style={{ flex: 1, backgroundColor: '#f5f4ed', borderRadius: '1rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#163821' }}>Notes &amp; Summaries</h2>
                <div className="custom-scrollbar" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { accent: '#eebf7a', title: 'Key Takeaway #1', body: 'Truth is absolute and found within, not taught from without.', italic: true },
                    { accent: '#a9d0af', title: 'Sophist Ethics', body: 'Pragmatism over idealism. High fees for political rhetoric training.', italic: false },
                    { accent: '#a7d1a5', title: 'Euthyphro Dilemma', body: 'Exploring the nature of piety and divine command theory.', italic: false },
                  ].map(note => (
                    <div key={note.title} style={{ position: 'relative', paddingLeft: '1rem' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '0.25rem', backgroundColor: note.accent, borderRadius: '9999px' }} />
                      <h4 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1b1c18', marginBottom: '0.25rem' }}>{note.title}</h4>
                      <p style={{ fontFamily: note.italic ? 'Newsreader, serif' : 'inherit', fontStyle: note.italic ? 'italic' : 'normal', fontSize: '0.875rem', color: '#424842' }}>{note.body}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e3e3dc' }}>
                  <button style={{ width: '100%', backgroundColor: '#2d4f36', color: '#9ac0a0', padding: '0.75rem', borderRadius: '0.75rem', fontWeight: 700, fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>summarize</span>
                    Summarize Now
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* FAB */}
        <button style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '3.5rem', height: '3.5rem', backgroundColor: '#452c00', borderRadius: '9999px', boxShadow: '0 25px 50px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', border: 'none', cursor: 'pointer', transition: 'transform 0.2s', zIndex: 100 }}
          onMouseEnter={e => e.currentTarget.style.transform = 'rotate(12deg) scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1)'}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
        </button>
      </div>
    </>
  );
}