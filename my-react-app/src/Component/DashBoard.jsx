export default function Dashboard() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={{ backgroundColor: '#fafaf3', color: '#1b1c18', fontFamily: 'Inter, sans-serif', minHeight: '100vh' }}>

        {/* Header */}
        <header style={{ backgroundColor: 'rgba(250,250,243,0.85)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 8px 32px rgba(27,28,24,0.05)' }}>
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '1rem 2rem', maxWidth: '1536px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <a href="#" style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontSize: '1.5rem', color: '#163821', textDecoration: 'none' }}>Aura Tutor</a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <a href="#" style={{ color: '#163821', fontWeight: 700, borderBottom: '2px solid #163821', paddingBottom: '0.25rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>Dashboard</a>
                <a href="#" style={{ color: '#78716c', fontWeight: 500, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>Help</a>
              </div>
            </div>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', borderRadius: '9999px' }}>
              <span className="material-symbols-outlined" style={{ color: '#78716c' }}>account_circle</span>
            </button>
          </nav>
        </header>

        {/* Main */}
        <main style={{ maxWidth: '1536px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>

          {/* Primary Content */}
          <section style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Welcome */}
            <div>
              <h1 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', color: '#163821', marginBottom: '0.5rem' }}>Welcome Back, Julian</h1>
              <p style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontSize: '1.125rem', color: '#424842', opacity: 0.8 }}>"The beautiful thing about learning is that no one can take it away from you." — B.B. King</p>
            </div>

            {/* Quick Actions Bento */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {/* Hero Card */}
              <div style={{ gridColumn: 'span 2', position: 'relative', overflow: 'hidden', backgroundColor: '#2d4f36', borderRadius: '1.5rem', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '240px' }}>
                <img
                  alt="Desk study"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3HF4XmHylNZmukau5qaT6tCqxIFOtY9jDwH5Lcfgc16wpy7DxAbcl1SU-3tQoBVMF3HrEbr1TmIdCloU_EfqogNEl10nFp305qxrVD6U9RYOsC-IlenZdx7m-JBRZMv15BMJ_SGl-_5jvy7-ZmKRz3PDHCZHdU2Iqeq99iRIesdHHOqSFFAOq3gnqCsEePlFwT3bCemZ8ca4ruEcjfjH6JK2jgm6BHECZnNPEuKOV8EWA7E5FZwfpWJjDakT_aow-K4YdIEzG3Pj"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2, mixBlendMode: 'overlay' }}
                />
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.875rem', color: '#ffffff', fontWeight: 500, marginBottom: '1rem' }}>Ready for deep work?</h3>
                  <p style={{ color: '#9ac0a0', maxWidth: '24rem', marginBottom: '1rem', fontSize: '0.875rem' }}>Launch a focused study session with your latest materials. Aura will guide your inquiry.</p>
                  <button style={{ background: '#452c00', color: '#ffffff', padding: '0.75rem 2rem', borderRadius: '0.75rem', fontFamily: 'Inter, sans-serif', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.15em', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }}>
                    Start a New Study Session
                  </button>
                </div>
              </div>

              {/* Upload Card */}
              <div style={{ backgroundColor: '#ffddb1', borderRadius: '1.5rem', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgba(97,65,7,0.1)' }}>
                <div>
                  <span className="material-symbols-outlined" style={{ color: '#452c00', fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>cloud_upload</span>
                  <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.25rem', color: '#291800', fontWeight: 700, lineHeight: 1.2 }}>Expand Your Library</h3>
                </div>
                <button style={{ width: '100%', backgroundColor: '#291800', color: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.75rem', fontFamily: 'Inter, sans-serif', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.15em', border: 'none', cursor: 'pointer' }}>
                  Upload New Material
                </button>
              </div>
            </div>

            {/* Study Units */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
                <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.875rem', color: '#163821' }}>Your Study Units</h2>
                <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#78716c', textDecoration: 'none' }}>View All Archive</a>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {[
                  {
                    title: 'Late Victorian Literature',
                    updated: 'Last refined 2 hours ago',
                    sources: '12 Sources',
                    note: '"The tension between industrial progress and romantic nostalgia is most evident in Hardy\'s late prose..."',
                    dots: 3
                  },
                  {
                    title: 'Organic Chemistry II',
                    updated: 'Last refined Oct 14, 2024',
                    sources: '8 Sources',
                    note: 'Recent Note: SN1 vs SN2 reaction kinetics in polar protic vs aprotic solvents. Crucial for tomorrow\'s lab.',
                    dots: 2
                  }
                ].map((card) => (
                  <div
                    key={card.title}
                    style={{ backgroundColor: '#f5f4ed', borderRadius: '1.5rem', padding: '2rem', transition: 'background 0.2s', cursor: 'default' }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e9e8e2'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f5f4ed'}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                      <div>
                        <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.5rem', color: '#163821', marginBottom: '0.25rem' }}>{card.title}</h3>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a8a29e' }}>{card.updated}</p>
                      </div>
                      <span style={{ backgroundColor: '#c2eec0', color: '#476d49', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.625rem', fontFamily: 'Inter, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{card.sources}</span>
                    </div>
                    <div style={{ backgroundColor: '#fafaf3', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.5rem', border: '1px solid rgba(194,200,192,0.1)' }}>
                      <p style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontSize: '0.875rem', color: '#424842', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{card.note}</p>
                      <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                        {Array.from({ length: card.dots }).map((_, i) => (
                          <span key={i} style={{ width: '0.375rem', height: '0.375rem', borderRadius: '9999px', backgroundColor: '#163821', opacity: 0.3, display: 'inline-block' }} />
                        ))}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <button style={{ flex: 1, fontSize: '0.75rem', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', border: '1px solid rgba(22,56,33,0.2)', padding: '0.625rem', borderRadius: '0.5rem', color: '#163821', backgroundColor: 'transparent', cursor: 'pointer', transition: 'all 0.2s' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#163821'; e.currentTarget.style.color = '#ffffff'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#163821'; }}
                      >
                        Open Desk
                      </button>
                      <span className="material-symbols-outlined" style={{ color: '#a8a29e', cursor: 'pointer' }}>more_vert</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Aside */}
          <aside style={{ width: '320px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Recent Activity */}
            <div style={{ backgroundColor: '#e9e8e2', borderRadius: '1.5rem', padding: '2rem' }}>
              <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.25rem', color: '#163821', marginBottom: '1.5rem' }}>Recent Activity</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { icon: 'upload_file', bg: '#c2eec0', color: '#476d49', text: <span>Uploaded <strong>Hardy_Tess.pdf</strong></span>, time: '15 minutes ago' },
                  { icon: 'quiz', bg: '#ffddb1', color: '#291800', text: <span>Mastered <strong>5 Flashcards</strong> in Bio</span>, time: '1 hour ago' },
                  { icon: 'forum', bg: '#2d4f36', color: '#9ac0a0', text: <span>Continued chat in <strong>Thermodynamics</strong></span>, time: 'Yesterday' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', position: 'relative' }}>
                    <div style={{ flexShrink: 0, width: '2rem', height: '2rem', borderRadius: '9999px', backgroundColor: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>{item.icon}</span>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', fontWeight: 500, color: '#1b1c18', marginBottom: '0.25rem' }}>{item.text}</p>
                      <p style={{ fontSize: '0.625rem', color: '#a8a29e', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>{item.time}</p>
                    </div>
                    {i < 2 && <div style={{ position: 'absolute', left: '1rem', top: '2rem', width: '1px', height: '2rem', backgroundColor: 'rgba(194,200,192,0.3)' }} />}
                  </div>
                ))}
              </div>
              <button style={{ width: '100%', marginTop: '2rem', fontSize: '0.625rem', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#78716c', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}>
                Clear History
              </button>
            </div>

            {/* Focus Streak */}
            <div style={{ backgroundColor: '#163821', color: '#ffffff', borderRadius: '1.5rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5625rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6, marginBottom: '0.5rem' }}>Weekly Goal</p>
                <p style={{ fontFamily: 'Newsreader, serif', fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '1rem' }}>Focus Streak: 4 Days</p>
                <div style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.1)', height: '0.375rem', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: '#ffddb1', height: '100%', width: '80%' }} />
                </div>
                <p style={{ marginTop: '0.5rem', fontSize: '0.625rem', opacity: 0.7 }}>2 hours left for your daily target</p>
              </div>
              <div style={{ position: 'absolute', right: '-1rem', bottom: '-1rem', width: '6rem', height: '6rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '9999px', filter: 'blur(20px)' }} />
            </div>
          </aside>
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: '#fafaf3', borderTop: '1px solid rgba(231,229,228,0.2)', padding: '3rem 1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center', maxWidth: '80rem', margin: '0 auto' }}>
            <p style={{ color: '#163821', fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontSize: '1.25rem' }}>Aura Tutor</p>
            <nav style={{ display: 'flex', gap: '1.5rem' }}>
              {['Privacy Policy', 'Terms of Service', 'Research Credits'].map(link => (
                <a key={link} href="#" style={{ color: '#a8a29e', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>{link}</a>
              ))}
            </nav>
            <p style={{ color: '#57534e', fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontSize: '0.875rem', marginTop: '1rem', opacity: 0.7 }}>
              © 2024 Aura Tutor. The Digital Atelier for Deep Learning.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}