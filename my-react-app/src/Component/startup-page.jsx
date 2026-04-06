import React, { useState } from 'react';

const AuraTutorLanding = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-surface text-on-surface sans-text min-h-screen flex flex-col selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      {/* TopNavBar Shell (Transactional/Focused - Navigation suppressed as per rules for Landing/Login) */}
      <nav className="bg-[#fafaf3]/85 backdrop-blur-xl sticky top-0 z-50 shadow-[0_8px_32px_rgba(27,28,24,0.05)]">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="font-serif italic text-2xl text-[#163821]">Aura Tutor</div>
          <div className="flex items-center gap-8">
            <a className="Inter uppercase tracking-wider text-xs font-medium text-stone-500 hover:text-[#452c00] transition-colors" href="#">Dashboard</a>
            <a className="Inter uppercase tracking-wider text-xs font-medium text-stone-500 hover:text-[#452c00] transition-colors" href="#">Help</a>
            <span className="material-symbols-outlined text-[#163821] cursor-pointer" data-icon="account_circle">account_circle</span>
          </div>
        </div>
      </nav>

      <main className="grow flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-24 max-w-7xl mx-auto gap-16">
        {/* Hero Section (Content & Identity) */}
        <div className="flex-1 space-y-8 md:text-left text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] uppercase font-bold tracking-widest">
            <span className="material-symbols-outlined text-[14px]" data-icon="auto_awesome">auto_awesome</span>
            The Digital Atelier
          </div>
          <h1 className="serif-text text-5xl md:text-7xl font-semibold leading-[1.1] text-primary tracking-tight">
            Meet Your Personal <br />
            <span className="italic text-tertiary">AI Tutor.</span>
          </h1>
          <p className="serif-text italic text-xl md:text-2xl text-on-surface-variant max-w-lg leading-relaxed">
            Master any subject with study-focused AI, curated within a sanctuary for deep work and scholarly pursuit.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="brass-gradient text-on-tertiary px-10 py-4 rounded-xl font-semibold tracking-wide shadow-lg hover:scale-105 transition-all duration-300 active:scale-95 flex items-center gap-2">
              Get Started
              <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
            <p className="sans-text text-[11px] uppercase tracking-widest font-bold text-stone-400">
              No Credit Card Required
            </p>
          </div>
        </div>

        {/* Visual/Login Anchor (The Asymmetric Focus) */}
        <div className="flex-1 w-full max-w-md">
          <div className="bg-surface-container-low p-8 md:p-12 rounded-4xl relative shadow-sm border border-outline-variant/10">
            {/* Glowing Graphic Element */}
            <div className="absolute -top-12 -right-8 w-32 h-32 bg-tertiary-fixed-dim/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary-fixed/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col items-center">
              {/* Animated Book/Brain Icon Placeholder */}
              <div className="w-24 h-24 bg-surface-container-lowest rounded-2xl flex items-center justify-center soft-glow mb-8 group transition-all duration-500 hover:rotate-3">
                <span className="material-symbols-outlined material-symbols-filled text-5xl text-tertiary" data-icon="menu_book" data-weight="fill">menu_book</span>
              </div>
              <h2 className="serif-text text-2xl font-bold text-on-surface mb-2">Welcome Back</h2>
              <p className="sans-text text-xs uppercase tracking-widest text-stone-500 font-semibold mb-8">Enter your digital atelier</p>
              <div className="w-full space-y-4">
                {/* Login Options */}
                <button className="w-full flex items-center justify-center gap-3 bg-surface-container-lowest border border-outline-variant/30 py-3.5 px-6 rounded-xl hover:bg-surface-container-high transition-colors sans-text text-sm font-semibold text-on-surface">
                  <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChfMyXQnpBu-gDd2tv8AYf_wieKAXd6h2_Lde1wtMhr1IrZlpoOATCIUGrV_uztXutn0lOp93lPrT3_shuJSRdEfuQq6FEmdwHIZvF8_soExjASJrFyw8ho1VFtsHJWS2pW4z1zf5Wf_s9A3db_GwoGTM4JMVmXsb_jnFl5csCquuRRQchOpKgDdk7u-DJ-GO5er1V4NeZFcYumMmAuc5BQdSWQZuiiRgEL1-FHrhzxgjP0mklrqUNziC7mOzrMm2CeKmobN1i7jk9" />
                  Continue with Google
                </button>
                <button className="w-full flex items-center justify-center gap-3 bg-stone-900 text-white py-3.5 px-6 rounded-xl hover:bg-black transition-colors sans-text text-sm font-semibold">
                  <span className="material-symbols-outlined text-[20px]" data-icon="code">code</span>
                  Continue with GitHub
                </button>
                <div className="flex items-center gap-4 py-4">
                  <div className="h-px grow bg-outline-variant/20"></div>
                  <span className="sans-text text-[10px] uppercase tracking-widest text-stone-400 font-bold">Or</span>
                  <div className="h-px grow bg-outline-variant/20"></div>
                </div>
                <div className="space-y-4">
                  <input
                    className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 sans-text text-sm transition-all placeholder:text-stone-400"
                    placeholder="Institutional Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="w-full bg-secondary text-on-secondary py-3.5 px-6 rounded-xl hover:bg-primary transition-all sans-text text-sm font-semibold tracking-wide">
                    Continue with Email
                  </button>
                </div>
              </div>
              <p className="sans-text text-[11px] text-center mt-8 text-stone-500 leading-relaxed">
                By continuing, you agree to our <br />
                <a className="text-tertiary font-bold hover:underline" href="#">Terms of Service</a> and <a className="text-tertiary font-bold hover:underline" href="#">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Shell */}
      <footer className="bg-surface border-t border-stone-200/20 py-12">
        <div className="flex flex-col items-center gap-4 text-center w-full max-w-7xl mx-auto px-4">
          <div className="text-[#163821] font-serif text-xl italic">Aura Tutor</div>
          <div className="flex gap-8">
            <a className="text-stone-400 hover:text-[#163821] transition-colors Inter text-xs uppercase tracking-widest font-semibold" href="#">Privacy Policy</a>
            <a className="text-stone-400 hover:text-[#163821] transition-colors Inter text-xs uppercase tracking-widest font-semibold" href="#">Terms of Service</a>
            <a className="text-stone-400 hover:text-[#163821] transition-colors Inter text-xs uppercase tracking-widest font-semibold" href="#">Research Credits</a>
          </div>
          <p className="text-stone-600 font-headline italic text-sm mt-4">
            © 2024 Aura Tutor. The Digital Atelier for Deep Learning.
          </p>
        </div>
      </footer>

      {/* Decorative Corner Chip (Annotation Style) */}
      <div className="fixed bottom-6 right-6 hidden md:block">
        <div className="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-2 rounded-lg text-[11px] uppercase font-bold tracking-widest shadow-lg flex items-center gap-2 border border-tertiary/10">
          <span className="material-symbols-outlined material-symbols-filled text-[16px]" data-icon="lightbulb" data-weight="fill">lightbulb</span>
          AI-Enhanced Study Mode Active
        </div>
      </div>

      {/* Inline styles that cannot be handled by Tailwind */}
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-filled {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .serif-text { font-family: 'Newsreader', serif; }
        .sans-text { font-family: 'Inter', sans-serif; }
        .brass-gradient {
          background: linear-gradient(135deg, #452c00 0%, #614107 100%);
        }
        .soft-glow {
          box-shadow: 0 0 60px 10px rgba(255, 221, 177, 0.3);
        }
      `}</style>
    </div>
  );
};

export default AuraTutorLanding;