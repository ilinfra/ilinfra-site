import React, { useState } from 'react';
import { Server, Globe, LifeBuoy, CheckCircle2, Shield, RefreshCw, DollarSign, HelpCircle, Zap, Lock, Cpu, Clock } from 'lucide-react';

// ==========================================
// ⬇️ 内容管理中心 (SITE_CONTENT) ⬇️
// 以后改字、改案例、改号码，只改这里即可！
// ==========================================
const SITE_CONTENT = {
  en: {
    nav: { solutions: "SOLUTIONS", expertise: "EXPERTISE", process: "PROCESS", cta: "GET AUDIT", langSwitch: "中 / EN" },
    hero: {
      title1: "BUILDING THE",
      title2: "UNBREAKABLE.",
      subtitle: "Enterprise IT Managed Services (MSP) across Singapore & Malaysia. We bridge the gap between global standards and local execution.",
      btnTalk: "Talk to an Architect",
      btnExplore: "Explore Solutions"
    },
    solutions: {
      title: "STRUCTURED FOR GROWTH.",
      subtitle: "Tailored IT infrastructure solutions designed to scale with your business. We don't just fix computers; we architect reliability.",
      items: [
        {
          icon: "Server",
          title: "Endpoint Deployment & Security",
          desc: "Full lifecycle management of corporate workstations. From imaging and domain integration to advanced endpoint protection deployment.",
          bullets: ["Domain Joining & AD Policies", "Office LTSC & Productivity Prep", "ESET Endpoint Security Enforcement"]
        },
        {
          icon: "Globe",
          title: "Co-Managed IT & Site Support",
          desc: "The local hands and feet for MNCs. We specialize in cross-vendor collaboration, ensuring your local branch aligns with global HQ standards.",
          bullets: ["Weekly On-site Support (MY/SG)", "New Hire IT Onboarding", "ERP/DC Vendor Collaboration"]
        },
        {
          icon: "LifeBuoy",
          title: "Managed IT Helpdesk",
          desc: "Proactive remote and on-site support for SMEs. Minimize downtime with our high-response helpdesk available via WhatsApp.",
          bullets: ["Annual Retainer Support", "Emergency Per-call Response", "Rapid Remote Troubleshooting"]
        }
      ]
    },
    process: {
      title: "OUR ARCHITECTURAL PROCESS",
      steps: [
        { num: "01", title: "Audit", text: "We assess your current infrastructure for bottlenecks and security risks." },
        { num: "02", title: "Plan", text: "We design a scalable blueprint that fits your budget and growth targets." },
        { num: "03", title: "Deploy", text: "Silent and seamless execution with minimal disruption to your daily operations." },
        { num: "04", title: "Maintain", text: "Ongoing optimization and 24/7 monitoring to prevent issues before they occur." }
      ]
    },
    techStack: {
      title: "Technologies We Trust",
      tags: ["Windows Server (DC)", "Active Directory", "ESET Protect", "Office LTSC", "AnyDesk Enterprise", "Sage 300 Integration", "Fortinet & Sophos", "Azure Management"]
    },
    caseStudies: {
      title: "FIELD-TESTED EXPERTISE.",
      items: [
        {
          tag: "Infrastructure upgrade",
          title: "Corporate IT Overhaul",
          client: "Singapore Enterprise Client",
          desc: "Coordinated with core vendors for a seamless server upgrade. Managed the rollout of high-performance workstations with full security hardening.",
          bullets: [
            { strong: "Seamless Integration:", text: " 100% success rate in domain joining and ERP connectivity." },
            { strong: "Centralized Security:", text: " Custom ESET policies deployed to all endpoints." }
          ]
        },
        {
          tag: "Ongoing Support",
          title: "Enterprise Site Support",
          client: "MNC Client in Malaysia",
          desc: "Providing scheduled weekly on-site support. Handling hardware issues and personnel onboarding for an MNC environment.",
          bullets: [
            { strong: "Reliability:", text: " Dedicated weekly on-site presence." },
            { strong: "Agility:", text: " Rapid response to personnel turnover and hardware lifecycle management." }
          ]
        }
      ]
    },
    contact: {
      trust: "Cross-border operations. Trusted by enterprises in",
      title: "Unlock the Flow.",
      subtitle: "Stop fighting IT fires. Start building for growth. Message our architects today.",
      sgSupport: "Singapore Support",
      mySupport: "Malaysia Support",
      note: "Managed Service Provider // Singapore & Malaysia",
      sgNum: "+65 8178 8822",
      myNum: "+60 10 254 4932"
    }
  },
  zh: {
    nav: { solutions: "解决方案", expertise: "项目经验", process: "服务流程", cta: "获取评估", langSwitch: "EN / 中" },
    hero: {
      title1: "构建",
      title2: "坚不可摧的底层架构",
      subtitle: "横跨新马两地的企业 IT 托管服务 (MSP)。我们填补了国际标准与本地执行之间的鸿沟。",
      btnTalk: "与架构师对话",
      btnExplore: "探索核心业务"
    },
    solutions: {
      title: "为增长而构建 (STRUCTURED FOR GROWTH)",
      subtitle: "量身定制的 IT 基础设施方案。我们不只是修理电脑，我们负责构建企业的稳定性与信任感。",
      items: [
        {
          icon: "Server",
          title: "终端部署与安全管控",
          desc: "企业工作站的全生命周期管理。从系统镜像制作、域整合到高级端点防护策略的下发。",
          bullets: ["域控整合与 AD 组策略", "Office LTSC 统一部署", "ESET 终端安全策略加固"]
        },
        {
          icon: "Globe",
          title: "联合运维与驻场支持",
          desc: "跨国企业在本地的“手和脚”。我们擅长跨供应商协作，确保本地分支机构符合总部 IT 标准。",
          bullets: ["新马每周定期驻场支持", "员工入职 IT 权限初始化", "核心供应商协同协作"]
        },
        {
          icon: "LifeBuoy",
          title: "IT 托管与远程维保",
          desc: "灵活高效的企业 IT 救援中心。通过 WhatsApp 极速响应，通过远程协助解决 90% 以上的日常故障。",
          bullets: ["年度维保托管协议", "应急按次计费支持", "远程快速排障解决"]
        }
      ]
    },
    process: {
      title: "我们的服务流程",
      steps: [
        { num: "01", title: "审计", text: "评估您当前的架构瓶颈、漏洞及潜在的安全风险。" },
        { num: "02", title: "规划", text: "设计符合您预算和增长目标的扩展示例蓝图。" },
        { num: "03", title: "执行", text: "静默且无缝的部署，将对您业务的影响降至最低。" },
        { num: "04", title: "维保", text: "持续优化与监控，在问题发生前提前预警并解决。" }
      ]
    },
    techStack: {
      title: "我们信赖的技术伙伴",
      tags: ["Windows Server (DC)", "Active Directory", "ESET Protect", "Office LTSC", "AnyDesk Enterprise", "Sage 300 整合", "Fortinet & Sophos", "Azure 管理"]
    },
    caseStudies: {
      title: "身经百战的实战经验。",
      items: [
        {
          tag: "架构升级",
          title: "企业级 IT 架构大修",
          client: "新加坡企业客户",
          desc: "执行了全公司规模的服务器与终端硬件升级。在第三方供应商进行数据迁移的同时，主导了底层的无缝切换。",
          bullets: [
            { strong: "无缝整合:", text: " 100% 成功接入新域环境，确保业务连接顺畅。" },
            { strong: "集中安全:", text: " 为所有终端统一部署了定制化的 ESET 防护策略。" }
          ]
        },
        {
          tag: "日常运维",
          title: "企业级驻场支持",
          client: "马来西亚跨国客户",
          desc: "提供稳定的每周驻场支持。处理高频的硬件维护、网络故障及大规模的人员入职/离职 IT 交接。",
          bullets: [
            { strong: "高可靠性:", text: " 定期现场驻场执勤支持。" },
            { strong: "敏捷响应:", text: " 快速处理人员流动带来的资产与权限变动。" }
          ]
        }
      ]
    },
    contact: {
      trust: "跨国运营，深受以下地区充满活力的企业信赖",
      title: "解锁数据流动。",
      subtitle: "停止把精力浪费在 IT 琐事上。今天就开始构建您的增长基石。联系我们的架构师。",
      sgSupport: "新加坡支持团队",
      mySupport: "马来西亚支持团队",
      note: "IT 托管服务商 // 新加坡 & 马来西亚",
      sgNum: "+65 8178 8822",
      myNum: "+60 10 254 4932"
    }
  }
};

// ==========================================
// ⬇️ UI 架构渲染引擎 (无需修改) ⬇️
// ==========================================

const WhatsAppIcon = () => (
  <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/><path d="M12 0c-6.627 0-12 5.373-12 12 0 2.056.528 3.987 1.458 5.672l-1.458 4.328 4.439-1.428c1.62.866 3.475 1.428 5.561 1.428 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.996c-1.797 0-3.488-.466-4.966-1.275l-3.088.992 1.018-3.023c-.886-1.558-1.396-3.376-1.396-5.305 0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
  </svg>
);

const DynamicIcon = ({ name }) => {
  const icons = { Server, Globe, LifeBuoy, RefreshCw, DollarSign, Shield, Zap, Lock, Cpu, Clock };
  const Component = icons[name] || Server;
  return <Component className="w-8 h-8 text-[#00E5FF]" />;
};

export default function App() {
  const [lang, setLang] = useState('zh');
  const d = SITE_CONTENT[lang];

  return (
    <div className="bg-[#020617] text-[#F8FAFC] min-h-screen font-sans selection:bg-[#00E5FF] selection:text-[#020617] scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex items-center leading-none">
              <span className="text-[#00E5FF] font-black text-3xl tracking-tighter">IL</span>
              <span className="text-white font-black text-3xl tracking-tighter">INFRA</span>
            </div>
            <span className="text-[#00E5FF] text-[0.45rem] uppercase font-light tracking-[0.3em] ml-1 mt-1">Unlocking the Flow.</span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-xs font-bold text-slate-400 tracking-widest uppercase">
            <a href="#solutions" className="hover:text-[#00E5FF] transition-colors">{d.nav.solutions}</a>
            <a href="#process" className="hover:text-[#00E5FF] transition-colors">{d.nav.process}</a>
            <a href="#expertise" className="hover:text-[#00E5FF] transition-colors">{d.nav.expertise}</a>
            <a href="#contact" className="bg-[#00E5FF] text-[#020617] px-5 py-2 rounded font-black hover:bg-white transition-colors">{d.nav.cta}</a>
            <button onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} className="ml-4 px-3 py-1 border border-slate-700 rounded-full hover:text-white transition-all">{d.nav.langSwitch}</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-48 pb-32 px-6 flex flex-col items-center text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
          {d.hero.title1} <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">{d.hero.title2}</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mb-12">{d.hero.subtitle}</p>
        <div className="flex gap-6">
          <a href="#contact" className="bg-[#00E5FF] text-[#020617] px-8 py-4 rounded-lg font-black tracking-widest uppercase shadow-[0_0_20px_rgba(0,229,255,0.4)]">{d.hero.btnTalk}</a>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24 bg-[#050b1a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-16 tracking-tighter text-center">{d.solutions.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.solutions.items.map((item, i) => (
              <div key={i} className="bg-[#020617] p-10 rounded-3xl border border-white/5 hover:border-[#00E5FF]/40 transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform"><DynamicIcon name={item.icon} /></div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 text-sm font-light mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase"><CheckCircle2 className="w-3 h-3 text-[#00E5FF]" /> {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-16 tracking-tighter">{d.process.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {d.process.steps.map((step, idx) => (
              <div key={idx} className="relative p-6">
                <div className="text-5xl font-black text-white/5 absolute top-0 left-1/2 -translate-x-1/2">{step.num}</div>
                <h4 className="text-xl font-bold text-white mb-2 relative z-10">{step.title}</h4>
                <p className="text-slate-500 text-sm font-light relative z-10">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-24 bg-[#050b1a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-16 tracking-tighter">{d.caseStudies.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.caseStudies.items.map((study, i) => (
              <div key={i} className="bg-gradient-to-br from-[#0f172a] to-[#020617] p-12 rounded-3xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#00E5FF]/10 px-4 py-1 text-[#00E5FF] text-[0.6rem] font-black uppercase tracking-widest">{study.tag}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-[#00E5FF] text-xs font-black uppercase tracking-widest mb-6">{study.client}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{study.desc}</p>
                <div className="space-y-4">
                  {study.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full mt-2 shrink-0"></div>
                      <p className="text-slate-300 text-sm font-light"><strong className="text-white">{b.strong}</strong>{b.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-[#00E5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#020617] origin-bottom-left -rotate-3 scale-110"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 mt-12">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">{d.contact.title}</h2>
          <p className="text-slate-400 mb-16 text-xl font-light">{d.contact.subtitle}</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <a href={`https://wa.me/${d.contact.sgNum.replace(/\s+/g, '')}`} target="_blank" className="bg-[#0a1121] p-8 rounded-3xl border border-white/5 hover:border-[#00E5FF] hover:shadow-[0_20px_50px_rgba(0,229,255,0.2)] transition-all flex items-center gap-6 group">
              <div className="bg-[#25D366]/10 p-4 rounded-2xl group-hover:bg-[#00E5FF]/20 transition-colors"><WhatsAppIcon /></div>
              <div className="text-left">
                <div className="text-xs text-slate-500 uppercase font-black tracking-widest mb-1">{d.contact.sgSupport}</div>
                <div className="font-black text-2xl text-white tracking-tight">{d.contact.sgNum}</div>
              </div>
            </a>
            <a href={`https://wa.me/${d.contact.myNum.replace(/\s+/g, '')}`} target="_blank" className="bg-[#0a1121] p-8 rounded-3xl border border-white/5 hover:border-[#00E5FF] hover:shadow-[0_20px_50px_rgba(0,229,255,0.2)] transition-all flex items-center gap-6 group">
              <div className="bg-[#25D366]/10 p-4 rounded-2xl group-hover:bg-[#00E5FF]/20 transition-colors"><WhatsAppIcon /></div>
              <div className="text-left">
                <div className="text-xs text-slate-500 uppercase font-black tracking-widest mb-1">{d.contact.mySupport}</div>
                <div className="font-black text-2xl text-white tracking-tight">{d.contact.myNum}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-[#020617] border-t border-white/5 text-center text-slate-700 text-[0.6rem] font-black uppercase tracking-[0.5em]">&copy; 2026 ILINFRA. ALL RIGHTS RESERVED.</footer>
    </div>
  );
}
