import React, { useState } from 'react';
import { Server, Globe, LifeBuoy, Shield, CheckCircle2, Quote, RefreshCw } from 'lucide-react';

// ==========================================
// ⬇️ 全局图片库 (高质量无版权 IT 配图) ⬇️
// ==========================================
const IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop", // 蓝色网络连接抽象图
  aboutImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop", // 服务器机房
  whyUsImg: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop", // 网络布线/IT运维
  ctaBg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" // 网络安全代码
};

// ==========================================
// ⬇️ 内容管理中心 (SITE_CONTENT) ⬇️
// ==========================================
const SITE_CONTENT = {
  en: {
    nav: { about: "ABOUT US", services: "SERVICES", testimonials: "TESTIMONIALS", cta: "CONTACT US", langSwitch: "中 / EN" },
    hero: {
      title1: "Build Your IT Infrastructure",
      title2: "with Confidence",
      subtitle: "Reliable. Scalable. Secure. We design and manage IT systems that power your business growth.",
      btnPrimary: "Get Started",
      btnSecondary: "Book a Consultation"
    },
    about: {
      title: "About IL INFRA",
      p1: "At IL INFRA, we specialize in delivering practical and reliable IT infrastructure solutions for modern businesses.",
      p2: "From system setup to long-term support, we focus on building stable environments that allow companies to operate smoothly and securely.",
      p3: "With experience supporting businesses across Malaysia and Singapore, our approach is simple:",
      bullets: ["Clear solutions", "Fast response", "Long-term reliability"],
      closing: "We don't just fix problems — we build systems that prevent them."
    },
    services: {
      title: "Our Services",
      items: [
        {
          icon: "Server",
          title: "IT Infrastructure Setup",
          desc: "Complete setup for servers, networks, and business systems."
        },
        {
          icon: "RefreshCw",
          title: "System Migration",
          desc: "Smooth and secure migration with minimal downtime."
        },
        {
          icon: "LifeBuoy",
          title: "IT Support & Maintenance",
          desc: "Fast response support to keep your business running."
        },
        {
          icon: "Shield",
          title: "Security & Backup Solutions",
          desc: "Protect your data with reliable backup and security systems."
        }
      ]
    },
    whyUs: {
      title: "Why Businesses Choose IL INFRA",
      bullets: [
        "Fast response time",
        "Practical and cost-effective solutions",
        "Experience across multiple industries",
        "Support in Malaysia & Singapore",
        "Long-term system planning mindset"
      ]
    },
    testimonials: {
      title: "What Our Clients Say",
      items: [
        { quote: "Reliable and responsive IT support. Issues are resolved quickly with practical solutions." },
        { quote: "We've been using their IT support services for a while now, and their fast response time is impressive." },
        { quote: "Very helpful in setting up our systems and improving security. Smooth experience overall." }
      ]
    },
    cta: {
      title: "Ready to Upgrade Your IT System?",
      subtitle: "Let us help you build a stable and scalable IT infrastructure for your business.",
      btn: "Contact Us Today"
    },
    footer: {
      brand: "IL INFRA",
      desc: "IT Infrastructure & Support",
      location: "📍 Malaysia & Singapore",
      email: "📧 hello@il-infra.com",
      phone: "📞 +65 8178 8822 / +60 10 254 4932"
    }
  },
  zh: {
    nav: { about: "关于我们", services: "核心服务", testimonials: "客户评价", cta: "联系我们", langSwitch: "EN / 中" },
    hero: {
      title1: "充满信心地构建",
      title2: "您的 IT 基础设施",
      subtitle: "可靠 · 可扩展 · 安全。我们设计并管理助力您业务增长的 IT 系统。",
      btnPrimary: "立即开始",
      btnSecondary: "预约咨询"
    },
    about: {
      title: "关于 IL INFRA",
      p1: "在 IL INFRA，我们专注于为现代企业提供务实、可靠的 IT 基础设施解决方案。",
      p2: "从系统搭建到长期维保，我们致力于构建稳定的环境，让企业能够安全、顺畅地运营。",
      p3: "凭借在马来西亚和新加坡支持企业的丰富经验，我们的理念非常简单：",
      bullets: ["清晰的解决方案", "极速响应", "长期的可靠性"],
      closing: "我们不仅解决问题，更通过构建完善的系统来预防问题。"
    },
    services: {
      title: "我们的服务",
      items: [
        {
          icon: "Server",
          title: "IT 基础设施搭建",
          desc: "为服务器、企业网络和核心业务系统提供完整的搭建服务。"
        },
        {
          icon: "RefreshCw",
          title: "系统无缝迁移",
          desc: "平滑且安全的系统与数据迁移，将业务中断时间降至最低。"
        },
        {
          icon: "LifeBuoy",
          title: "IT 支持与维保",
          desc: "极速响应的技术支持，确保您的业务时刻保持运转。"
        },
        {
          icon: "Shield",
          title: "安全与备份方案",
          desc: "通过可靠的灾备与安全防护系统，全方位保护您的企业数据。"
        }
      ]
    },
    whyUs: {
      title: "为什么企业选择 IL INFRA",
      bullets: [
        "极速的响应时间",
        "务实且高性价比的方案",
        "跨越多个行业的丰富经验",
        "全面覆盖马来西亚与新加坡的技术支持",
        "着眼长远的系统规划思维"
      ]
    },
    testimonials: {
      title: "客户评价",
      items: [
        { quote: "可靠且响应迅速的 IT 支持。问题总能通过务实的方案快速解决。" },
        { quote: "我们使用他们的 IT 支持服务有一段时间了，他们极快的响应速度令人印象深刻。" },
        { quote: "在搭建系统和提升安全性方面非常有帮助。整体体验非常顺畅。" }
      ]
    },
    cta: {
      title: "准备好升级您的 IT 系统了吗？",
      subtitle: "让我们帮助您为企业构建一个稳定、可扩展的 IT 基础设施。",
      btn: "立即联系我们"
    },
    footer: {
      brand: "IL INFRA",
      desc: "IT Infrastructure & Support",
      location: "📍 Malaysia & Singapore",
      email: "📧 hello@il-infra.com",
      phone: "📞 +65 8178 8822 / +60 10 254 4932"
    }
  }
};

// ==========================================
// ⬇️ UI 架构渲染引擎 ⬇️
// ==========================================

const DynamicIcon = ({ name }) => {
  const icons = { Server, Globe, LifeBuoy, RefreshCw, Shield };
  const Component = icons[name] || Server;
  return <Component className="w-8 h-8 text-[#00E5FF]" />;
};

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
      {/* 导航栏Logo 区域 */}
<div className="flex flex-col cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
  <img 
    src="/logo.png" 
    alt="ILINFRA Logo" 
    className="h-16 md:h-24 w-auto object-contain mix-blend-screen transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(0,229,255,0.3)]" 
  />
</div>
          <div className="hidden md:flex gap-8 items-center text-xs font-bold text-slate-400 tracking-wider uppercase">
            <a href="#about" className="hover:text-white transition-colors">{d.nav.about}</a>
            <a href="#services" className="hover:text-white transition-colors">{d.nav.services}</a>
            <a href="#testimonials" className="hover:text-white transition-colors">{d.nav.testimonials}</a>
            <a href="#contact" className="bg-[#00E5FF] text-[#020617] px-6 py-2.5 rounded-full font-bold hover:bg-white transition-all">{d.nav.cta}</a>
            <div className="w-px h-4 bg-slate-700 mx-2"></div>
            <button onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} className="hover:text-[#00E5FF] transition-colors flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" /> {d.nav.langSwitch}
            </button>
          </div>
        </div>
      </nav>

      {/* 首屏 (Hero Section) - 加入科技融合底图 */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-6 flex flex-col items-center text-center overflow-hidden min-h-[85vh] justify-center">
        {/* 背景图层 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <img src={IMAGES.heroBg} alt="Hero IT Background" className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity" />
           <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/80 to-[#020617]"></div>
        </div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#00E5FF]/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1] max-w-4xl relative z-10">
          {d.hero.title1} <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-400">
            {d.hero.title2}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed font-light relative z-10">
          {d.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10">
          <a href="#contact" className="bg-[#00E5FF] text-[#020617] px-8 py-4 rounded-full font-bold tracking-wide hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,229,255,0.2)]">
            👉 {d.hero.btnPrimary}
          </a>
          <a href="#contact" className="bg-slate-900/60 backdrop-blur border border-slate-600 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-slate-800 transition-all flex items-center justify-center">
            {d.hero.btnSecondary}
          </a>
        </div>
      </section>

      {/* 关于我们 (About Us) - 保留机房配图 */}
      <section id="about" className="py-24 bg-[#0B1120] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs font-bold text-[#00E5FF] tracking-widest uppercase mb-6">
                About Us
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">{d.about.title}</h2>
              <div className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed font-light">
                <p>{d.about.p1}</p>
                <p>{d.about.p2}</p>
                <p>{d.about.p3}</p>
              </div>
              <ul className="mt-8 space-y-4">
                {d.about.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" /> {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 bg-[#020617] border-l-4 border-[#00E5FF] rounded-r-xl shadow-lg">
                <p className="text-white font-semibold italic">"{d.about.closing}"</p>
              </div>
            </div>
            
            {/* 右侧配图区域 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/20 to-transparent rounded-2xl blur-2xl group-hover:from-[#00E5FF]/40 transition-all duration-500"></div>
              <img src={IMAGES.aboutImg} alt="IT Infrastructure Server Room" className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-slate-700/50 object-cover aspect-square md:aspect-[4/5]" />
            </div>
          </div>
        </div>
      </section>

      {/* 我们的服务 (Our Services) */}
      <section id="services" className="py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">{d.services.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {d.services.items.map((item, i) => (
              <div key={i} className="bg-[#0F172A] p-10 rounded-2xl border border-slate-800 hover:border-[#00E5FF]/50 hover:bg-[#151E32] transition-all duration-300 group shadow-lg flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-[#020617] border border-slate-700 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                  <DynamicIcon name={item.icon} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 为什么选择我们 (Why Choose Us) - 升级为图文并茂的网格布局 */}
      <section className="py-24 bg-[#0B1120] border-t border-white/5 relative overflow-hidden">
        {/* 背景光晕装饰 */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* 左侧：配图 (网络布线/IT运维) */}
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 group">
               <img src={IMAGES.whyUsImg} alt="IT Professional Support" className="w-full h-full object-cover aspect-video lg:aspect-square group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-luminosity" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* 右侧：文字与核心优势 */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tight">{d.whyUs.title}</h2>
              <div className="space-y-6">
                {d.whyUs.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-[#020617] p-5 rounded-2xl border border-slate-800 hover:border-slate-600 transition-colors">
                    <div className="bg-[#00E5FF]/10 p-2 rounded-full shrink-0 shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                      <CheckCircle2 className="w-6 h-6 text-[#00E5FF]" />
                    </div>
                    <span className="text-slate-200 text-base md:text-lg font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 客户评价 (Testimonials) */}
      <section id="testimonials" className="py-24 bg-[#020617] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-16 tracking-tight text-center">{d.testimonials.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.testimonials.items.map((item, i) => (
              <div key={i} className="bg-[#0F172A] p-10 rounded-2xl border border-slate-800 relative shadow-lg hover:border-slate-600 transition-colors">
                <Quote className="w-10 h-10 text-slate-700 absolute top-8 right-8 opacity-40" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, star) => (
                    <svg key={star} className="w-5 h-5 text-[#00E5FF]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light italic">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 行动号召 (Call To Action) - 加入网络安全/矩阵背景 */}
      <section id="contact" className="py-32 relative overflow-hidden text-[#020617] border-y border-cyan-900/50">
        {/* 背景图层 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <img src={IMAGES.ctaBg} alt="CTA Tech Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/90 to-[#0B1120]/90 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617] opacity-60"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white drop-shadow-md">{d.cta.title}</h2>
          <p className="mb-10 text-lg md:text-xl font-medium text-cyan-50 drop-shadow-md">{d.cta.subtitle}</p>
          
          <a href={`https://wa.me/${d.footer.phone.split('/')[0].replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#020617] text-white px-10 py-5 rounded-full font-black text-lg tracking-wide hover:bg-white hover:text-[#020617] transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            👉 {d.cta.btn}
          </a>
        </div>
      </section>

      {/* 极简底部 (Footer) */}
      <footer className="bg-[#020617] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-slate-800 pb-12 mb-8">
            <div>
              <div className="flex items-center leading-none mb-8">
  <img 
    src="/logo.png" 
    alt="ILINFRA Logo" 
    className="h-28 md:h-40 w-auto object-contain mix-blend-screen filter drop-shadow-[0_0_15px_rgba(0,229,255,0.2)]" 
  />
</div>
              <p className="text-slate-400 text-sm font-light tracking-wide">{d.footer.desc}</p>
            </div>
            
            <div className="flex flex-col gap-3 md:text-right">
              <p className="text-slate-300 text-sm">{d.footer.location}</p>
              <a href={`mailto:${d.footer.email.replace('📧 ', '')}`} className="text-slate-300 text-sm hover:text-[#00E5FF] transition-colors">{d.footer.email}</a>
              <p className="text-slate-300 text-sm">{d.footer.phone}</p>
            </div>
          </div>
          
          <div className="text-center text-slate-600 text-xs font-semibold tracking-wider uppercase">
            &copy; {new Date().getFullYear()} {d.footer.brand}. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
