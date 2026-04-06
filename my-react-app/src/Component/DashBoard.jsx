import React from 'react';
import {
  AccountCircle,
  CloudUpload,
  MoreVert,
  UploadFile,
  Quiz,
  Forum,
} from '@mui/icons-material';

const AuraTutorDashboard = () => {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* TopNavBar */}
      <header className="glass-header sticky top-0 z-50 shadow-[0_8px_32px_rgba(27,28,24,0.05)] bg-[#fafaf3]/85">
        <nav className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-8">
            <a className="font-serif italic text-2xl text-[#163821]" href="#">Aura Tutor</a>
            <div className="hidden md:flex items-center gap-6">
              <a className="text-[#163821] font-bold border-b-2 border-[#163821] pb-1 text-xs uppercase tracking-wider font-label" href="#">Dashboard</a>
              <a className="text-stone-500 font-medium hover:text-[#452c00] transition-colors duration-200 text-xs uppercase tracking-wider font-label" href="#">Help</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-stone-500 hover:text-[#163821] transition-all p-2 rounded-full hover:bg-surface-container-high">
              <AccountCircle />
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-screen-2xl mx-auto px-8 py-12 flex flex-col lg:flex-row gap-12">
        {/* Main Dashboard Content (Restructured to be primary focus without sidebar) */}
        <section className="flex-1 space-y-12">
          {/* Welcome Header */}
          <div className="space-y-2">
            <h1 className="text-5xl font-headline tracking-tight text-primary">Welcome Back, Julian</h1>
            <p className="text-lg font-headline italic text-on-surface-variant opacity-80">"The beautiful thing about learning is that no one can take it away from you." — B.B. King</p>
          </div>

          {/* Quick Actions Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative group overflow-hidden bg-primary-container rounded-3xl p-8 flex flex-col justify-end min-h-60">
              <img
                alt="Desk study"
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3HF4XmHylNZmukau5qaT6tCqxIFOtY9jDwH5Lcfgc16wpy7DxAbcl1SU-3tQoBVMF3HrEbr1TmIdCloU_EfqogNEl10nFp305qxrVD6U9RYOsC-IlenZdx7m-JBRZMv15BMJ_SGl-_5jvy7-ZmKRz3PDHCZHdU2Iqeq99iRIesdHHOqSFfVAOq3gnqCsEePlFwT3bCemZ8ca4ruEcjfjH6JK2jgm6BHECZnNPEuKOV8EWA7E5FZwfpWJjDakT_aow-K4YdIEzG3Pj"
              />
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl font-headline text-on-primary font-medium">Ready for deep work?</h3>
                <p className="text-on-primary-container max-w-sm">Launch a focused study session with your latest materials. Aura will guide your inquiry.</p>
                <button className="w-fit brass-btn text-white px-8 py-3 rounded-xl font-label text-xs uppercase tracking-widest transition-all hover:scale-[1.02]">Start a New Study Session</button>
              </div>
            </div>
            <div className="bg-tertiary-fixed rounded-3xl p-8 flex flex-col justify-between border border-tertiary-container/10">
              <div className="space-y-2">
                <CloudUpload className="text-tertiary text-4xl" style={{ fontSize: '2.5rem' }} />
                <h3 className="text-xl font-headline text-on-tertiary-fixed font-bold leading-tight">Expand Your Library</h3>
              </div>
              <button className="w-full bg-on-tertiary-fixed text-white px-4 py-3 rounded-xl font-label text-[10px] uppercase tracking-widest transition-all">Upload New Material</button>
            </div>
          </div>

          {/* Study Units Section */}
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <h2 className="text-3xl font-headline text-primary">Your Study Units</h2>
              <a className="font-label text-xs uppercase tracking-widest text-stone-500 hover:text-primary transition-colors" href="#">View All Archive</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-surface-container-low rounded-3xl p-8 hover:bg-surface-container-high transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-headline text-primary group-hover:italic transition-all">Late Victorian Literature</h3>
                    <p className="font-label text-[10px] uppercase tracking-wider text-stone-400">Last refined 2 hours ago</p>
                  </div>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-label font-bold uppercase tracking-tighter">12 Sources</span>
                </div>
                <div className="bg-surface rounded-xl p-4 mb-6 border border-outline-variant/10">
                  <p className="text-sm font-headline italic text-on-surface-variant line-clamp-2">"The tension between industrial progress and romantic nostalgia is most evident in Hardy's late prose..."</p>
                  <div className="mt-2 flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-30"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-30"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-30"></span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 text-xs font-label uppercase tracking-widest border border-primary/20 py-2.5 rounded-lg text-primary hover:bg-primary hover:text-white transition-all">Open Desk</button>
                  <button className="material-symbols-outlined text-stone-400">
                    <MoreVert />
                  </button>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-surface-container-low rounded-3xl p-8 hover:bg-surface-container-high transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-headline text-primary group-hover:italic transition-all">Organic Chemistry II</h3>
                    <p className="font-label text-[10px] uppercase tracking-wider text-stone-400">Last refined Oct 14, 2024</p>
                  </div>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-label font-bold uppercase tracking-tighter">8 Sources</span>
                </div>
                <div className="bg-surface rounded-xl p-4 mb-6 border border-outline-variant/10">
                  <p className="text-sm font-headline italic text-on-surface-variant line-clamp-2">Recent Note: SN1 vs SN2 reaction kinetics in polar protic vs aprotic solvents. Crucial for tomorrow's lab.</p>
                  <div className="mt-2 flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-30"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-30"></span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 text-xs font-label uppercase tracking-widest border border-primary/20 py-2.5 rounded-lg text-primary hover:bg-primary hover:text-white transition-all">Open Desk</button>
                  <button className="material-symbols-outlined text-stone-400">
                    <MoreVert />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Recent Activity & Focus */}
        <aside className="w-full lg:w-80 space-y-12">
          <div className="bg-surface-container-high rounded-3xl p-8">
            <h2 className="text-xl font-headline text-primary mb-6">Recent Activity</h2>
            <div className="space-y-8">
              {/* Activity Item 1 */}
              <div className="flex gap-4 relative">
                <div className="shrink-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <UploadFile className="text-sm" style={{ fontSize: '1rem' }} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-on-surface">Uploaded <span className="font-bold">Hardy_Tess.pdf</span></p>
                  <p className="text-[10px] text-stone-400 font-label uppercase tracking-tighter">15 minutes ago</p>
                </div>
                <div className="absolute left-4 top-8 bottom-0 w-px bg-outline-variant/30 h-8"></div>
              </div>
              {/* Activity Item 2 */}
              <div className="flex gap-4 relative">
                <div className="shrink-0 w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                  <Quiz className="text-sm" style={{ fontSize: '1rem' }} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-on-surface">Mastered <span className="font-bold">5 Flashcards</span> in Bio</p>
                  <p className="text-[10px] text-stone-400 font-label uppercase tracking-tighter">1 hour ago</p>
                </div>
                <div className="absolute left-4 top-8 bottom-0 w-px bg-outline-variant/30 h-8"></div>
              </div>
              {/* Activity Item 3 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <Forum className="text-sm" style={{ fontSize: '1rem' }} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-on-surface">Continued chat in <span className="font-bold">Thermodynamics</span></p>
                  <p className="text-[10px] text-stone-400 font-label uppercase tracking-tighter">Yesterday</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 text-[10px] font-label uppercase tracking-widest text-stone-500 hover:text-primary transition-all">Clear History</button>
          </div>

          {/* Focus Chip */}
          <div className="bg-[#163821] text-white rounded-3xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <p className="font-label text-[9px] uppercase tracking-[0.2em] opacity-60 mb-2">Weekly Goal</p>
              <p className="font-headline text-2xl italic mb-4">Focus Streak: 4 Days</p>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-tertiary-fixed h-full w-4/5"></div>
              </div>
              <p className="mt-2 text-[10px] opacity-70">2 hours left for your daily target</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-[#fafaf3] border-t border-stone-200/20 py-12">
        <div className="flex flex-col items-center gap-4 text-center w-full max-w-7xl mx-auto px-4">
          <p className="text-[#163821] font-serif italic text-xl">Aura Tutor</p>
          <nav className="flex gap-6">
            <a className="text-stone-400 hover:text-[#163821] transition-colors font-label text-xs uppercase tracking-widest" href="#">Privacy Policy</a>
            <a className="text-stone-400 hover:text-[#163821] transition-colors font-label text-xs uppercase tracking-widest" href="#">Terms of Service</a>
            <a className="text-stone-400 hover:text-[#163821] transition-colors font-label text-xs uppercase tracking-widest" href="#">Research Credits</a>
          </nav>
          <p className="text-stone-600 font-headline italic text-sm mt-4 opacity-70">© 2024 Aura Tutor. The Digital Atelier for Deep Learning.</p>
        </div>
      </footer>

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
        }
        body { 
          font-family: 'Inter', sans-serif; 
          background-color: #fafaf3; 
          color: #1b1c18; 
        }
        h1, h2, h3, .serif, .font-headline { 
          font-family: 'Newsreader', serif; 
        }
        .glass-header { 
          background-color: rgba(250, 250, 243, 0.85); 
          backdrop-filter: blur(20px); 
        }
        .velvet-btn { 
          background: linear-gradient(135deg, #163821 0%, #2d4f36 100%); 
        }
        .brass-btn { 
          background: #452c00; 
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default AuraTutorDashboard;