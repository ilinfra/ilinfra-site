// ... (之前的代码保持不变) ...

export default function App() {
  const [lang, setLang] = useState('en');
  const d = SITE_CONTENT[lang];

  return (
    <div className="bg-[#020617] text-slate-300 min-h-screen font-sans selection:bg-[#00E5FF] selection:text-[#020617] scroll-smooth">
      
      {/* 极简网格背景 */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* 导航栏 */}
      <nav className="fixed w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          
          {/* --- 分离式 Logo 区域 --- */}
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            {/* 只显示图标部分 (请确保你的 logo.png 已经去掉了文字，或只裁剪出波浪图标) */}
            <img 
              src="/logo.png" 
              alt="ILINFRA Icon" 
              className="h-12 md:h-14 w-auto object-contain mix-blend-screen drop-shadow-[0_0_8px_rgba(0,229,255,0.4)] transition-transform duration-300 group-hover:scale-110" 
            />
            
            {/* 文字渲染区域 */}
            <div className="flex flex-col justify-center border-l border-white/10 pl-4">
              <div className="flex items-center text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none">
                <span className="text-[#00E5FF]">IL</span>
                <span className="text-white">INFRA</span>
              </div>
              <span className="text-[#00E5FF] text-[0.55rem] md:text-[0.65rem] font-bold uppercase tracking-[0.35em] mt-1.5 opacity-90">
                Unlocking The Flow.
              </span>
            </div>
          </div>
          {/* ----------------------- */}

          <div className="hidden md:flex gap-8 items-center text-xs font-bold text-slate-400 tracking-wider uppercase">
            <a href="#about" className="hover:text-white transition-colors">{d.nav.about}</a>
            <a href="#services" className="hover:text-white transition-colors">{d.nav.services}</a>
            <a href="#testimonials" className="hover:text-white transition-colors">{d.nav.testimonials}</a>
            <a href="#contact" className="bg-white text-[#020617] px-6 py-2.5 rounded-full font-bold hover:bg-[#00E5FF] transition-all transform hover:scale-105 shadow-lg">{d.nav.cta}</a>
            <div className="w-px h-4 bg-slate-700 mx-2"></div>
            <button onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} className="hover:text-[#00E5FF] transition-colors flex items-center gap-1 font-bold tracking-widest">
              <Globe className="w-3.5 h-3.5" /> {d.nav.langSwitch}
            </button>
          </div>
        </div>
      </nav>

// ... (中间的 Hero, About, Services 等板块代码保持不变) ...

      {/* 极简底部 (Footer) */}
      <footer className="bg-[#020617] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-slate-800 pb-12 mb-8">
            <div>
              {/* --- 底部文字 Logo --- */}
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/logo.png" 
                  alt="ILINFRA Icon" 
                  className="h-16 md:h-20 w-auto object-contain mix-blend-screen opacity-90" 
                />
                <div className="flex flex-col border-l border-white/10 pl-5">
                  <div className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-white">
                    <span className="text-[#00E5FF]">IL</span>INFRA
                  </div>
                  <span className="text-slate-500 text-[0.6rem] font-bold uppercase tracking-[0.4em] mt-2">
                    Unlocking The Flow.
                  </span>
                </div>
              </div>
              <p className="text-slate-500 text-sm font-light tracking-wide max-w-sm">{d.footer.desc}</p>
            </div>
            
            <div className="flex flex-col gap-3 md:text-right md:justify-end">
              <p className="text-slate-300 text-sm font-medium">{d.footer.location}</p>
              <a href={`mailto:${d.footer.email.replace('📧 ', '')}`} className="text-slate-400 text-sm hover:text-[#00E5FF] transition-colors">{d.footer.email}</a>
              <p className="text-slate-400 text-sm">{d.footer.phone}</p>
            </div>
          </div>
          
          <div className="text-center text-slate-700 text-[0.65rem] font-bold tracking-[0.5em] uppercase">
            &copy; {new Date().getFullYear()} {d.footer.brand}. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
