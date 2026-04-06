export default function LandingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Inter:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .serif-text { font-family: 'Newsreader', serif; }
        .sans-text { font-family: 'Inter', sans-serif; }
        .brass-gradient { background: linear-gradient(135deg, #452c00 0%, #614107 100%); }
        .soft-glow { box-shadow: 0 0 60px 10px rgba(255, 221, 177, 0.3); }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background-color: #ffddb1; color: #291800; }
      `}</style>

      <div style={{ backgroundColor: '#fafaf3', color: '#1b1c18', fontFamily: 'Inter, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        {/* TopNavBar */}
        <nav style={{
          backgroundColor: 'rgba(250,250,243,0.85)',
          backdropFilter: 'blur(20px)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          boxShadow: '0 8px 32px rgba(27,28,24,0.05)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '1rem 2rem', maxWidth: '1536px', margin: '0 auto' }}>
            <div style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontSize: '1.5rem', color: '#163821' }}>Aura Tutor</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <a href="#" style={{ fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', fontWeight: 500, color: '#78716c', textDecoration: 'none' }}>Dashboard</a>
              <a href="#" style={{ fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', fontWeight: 500, color: '#78716c', textDecoration: 'none' }}>Help</a>
              <span className="material-symbols-outlined" style={{ color: '#163821', cursor: 'pointer' }}>account_circle</span>
            </div>
          </div>
        </nav>

        {/* Main */}
        <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem', maxWidth: '80rem', margin: '0 auto', gap: '4rem', flexWrap: 'wrap' }}>

          {/* Hero Section */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', backgroundColor: '#c2eec0', color: '#476d49', borderRadius: '9999px', fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '2rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>auto_awesome</span>
              The Digital Atelier
            </div>
            <h1 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 600, lineHeight: 1.1, color: '#163821', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Meet Your Personal <br />
              <span style={{ fontStyle: 'italic', color: '#452c00' }}>AI Tutor.</span>
            </h1>
            <p style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: '#424842', maxWidth: '32rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Master any subject with study-focused AI, curated within a sanctuary for deep work and scholarly pursuit.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                className="brass-gradient"
                style={{ color: '#ffffff', padding: '1rem 2.5rem', borderRadius: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Get Started
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, color: '#a8a29e' }}>
                No Credit Card Required
              </p>
            </div>
          </div>

          {/* Login Card */}
          <div style={{ flex: 1, maxWidth: '28rem', width: '100%' }}>
            <div style={{ backgroundColor: '#f5f4ed', padding: '3rem', borderRadius: '2rem', position: 'relative', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid rgba(194,200,192,0.1)' }}>
              <div style={{ position: 'absolute', top: '-3rem', right: '-2rem', width: '8rem', height: '8rem', backgroundColor: 'rgba(238,191,122,0.2)', borderRadius: '9999px', filter: 'blur(48px)' }} />
              <div style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', width: '10rem', height: '10rem', backgroundColor: 'rgba(194,238,192,0.2)', borderRadius: '9999px', filter: 'blur(48px)' }} />

              <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  className="soft-glow"
                  style={{ width: '6rem', height: '6rem', backgroundColor: '#ffffff', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', transition: 'transform 0.5s', cursor: 'default' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'rotate(3deg)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'rotate(0deg)'}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#452c00', fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                </div>
                <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.5rem', fontWeight: 700, color: '#1b1c18', marginBottom: '0.5rem' }}>Welcome Back</h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#78716c', fontWeight: 600, marginBottom: '2rem' }}>Enter your digital atelier</p>

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', backgroundColor: '#ffffff', border: '1px solid rgba(194,200,192,0.3)', padding: '0.875rem 1.5rem', borderRadius: '0.75rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#1b1c18', transition: 'background 0.2s' }}>
                    <img alt="Google" style={{ width: '1.25rem', height: '1.25rem' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuChfMyXQnpBu-gDd2tv8AYf_wieKAXd6h2_Lde1wtMhr1IrZlpoOATCIUGrV_uztXutn0lOp93lPrT3_shuJSRdEfuQq6FEmdwHIZvF8_soExjASJrFyw8ho1VFtsHJWS2pW4z1zf5Wf_s9A3db_GwoGTM4JMVmXsb_jnFl5csCquuRRQchOpKgDdk7u-DJ-GO5er1V4NeZFcYumMmAuc5BQdSWQZuiiRgEL1-FHrhzxgjP0mklrqUNziC7mOzrMm2CeKmobN1i7jk9" />
                    Continue with Google
                  </button>
                  <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', backgroundColor: '#1c1917', color: '#ffffff', padding: '0.875rem 1.5rem', borderRadius: '0.75rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600, border: 'none', transition: 'background 0.2s' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>code</span>
                    Continue with GitHub
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0' }}>
                    <div style={{ height: '1px', flexGrow: 1, backgroundColor: 'rgba(194,200,192,0.2)' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#a8a29e', fontWeight: 700 }}>Or</span>
                    <div style={{ height: '1px', flexGrow: 1, backgroundColor: 'rgba(194,200,192,0.2)' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input
                      type="email"
                      placeholder="Institutional Email"
                      style={{ width: '100%', backgroundColor: '#e3e3dc', border: 'none', borderBottom: '2px solid #c2c8c0', padding: '0.75rem 0', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', outline: 'none', color: '#1b1c18', transition: 'border-color 0.2s' }}
                      onFocus={e => e.currentTarget.style.borderBottomColor = '#163821'}
                      onBlur={e => e.currentTarget.style.borderBottomColor = '#c2c8c0'}
                    />
                    <button style={{ width: '100%', backgroundColor: '#416743', color: '#ffffff', padding: '0.875rem 1.5rem', borderRadius: '0.75rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', border: 'none', transition: 'background 0.2s' }}>
                      Continue with Email
                    </button>
                  </div>
                </div>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', textAlign: 'center', marginTop: '2rem', color: '#78716c', lineHeight: 1.6 }}>
                  By continuing, you agree to our <br />
                  <a href="#" style={{ color: '#452c00', fontWeight: 700, textDecoration: 'none' }}>Terms of Service</a> and <a href="#" style={{ color: '#452c00', fontWeight: 700, textDecoration: 'none' }}>Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: '#fafaf3', borderTop: '1px solid rgba(231,229,228,0.2)', padding: '3rem 1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center', maxWidth: '80rem', margin: '0 auto' }}>
            <div style={{ color: '#163821', fontFamily: 'Newsreader, serif', fontSize: '1.25rem', fontStyle: 'italic' }}>Aura Tutor</div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {['Privacy Policy', 'Terms of Service', 'Research Credits'].map(link => (
                <a key={link} href="#" style={{ color: '#a8a29e', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, textDecoration: 'none' }}>{link}</a>
              ))}
            </div>
            <p style={{ color: '#57534e', fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontSize: '0.875rem', marginTop: '1rem' }}>
              © 2024 Aura Tutor. The Digital Atelier for Deep Learning.
            </p>
          </div>
        </footer>

        {/* Corner Chip */}
        <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem' }}>
          <div style={{ backgroundColor: '#ffddb1', color: '#291800', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.6875rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.15em', boxShadow: '0 10px 15px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(69,44,0,0.1)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
            AI-Enhanced Study Mode Active
          </div>
        </div>
      </div>
    </>
  );
}