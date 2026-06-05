import React, { useState } from 'react';
import { 
  CheckCircle2, Users, FileSpreadsheet, CreditCard, Clock, 
  BellRing, BarChart3, ArrowRight, Sparkles,
  LayoutDashboard, Layers, ExternalLink, Grid, LogIn, X,
  ChevronDown
} from 'lucide-react';
import { useTheme } from '@/lib/theme'; // Ties straight into your hook configuration

const eduspaceProducts = [
  {
    id: 'hub',
    title: 'EduSpace Hub',
    subtitle: 'Management Dashboard for School Owners & Admins',
    badge: 'Available',
    loginUrl: 'https://hub.mzatinova.com/login',
    desc: 'The complete digital workspace for school directors and administrators. Record student admissions, manage complex school fees, instantly calculate terminal class positions, and run your school operations from one secure dashboard.',
    accentColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/5 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/20',
    icon: LayoutDashboard,
    highlights: ['Malawi curriculum grading & terminal marks', 'School fees tracking & digital receipts', 'Secure staff data isolation']
  },
  {
    id: 'portal',
    title: 'EduSpace Portal',
    subtitle: 'Access Gateway for Parents & Guardians',
    badge: 'Available',
    loginUrl: 'https://portal.mzatinova.com/login',
    desc: 'The public-facing portal built entirely for parent transparency. Parents can input their unique student tracking numbers to view attendance histories, track unpaid fee balances, and download official report cards.',
    accentColor: 'text-purple-600 dark:text-purple-400 bg-purple-500/5 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20',
    icon: Layers,
    highlights: ['Instant report card lookups', 'Mobile-friendly for simple smartphones', 'Real-time balance notifications']
  }
];

const coreFeatures = [
  { title: 'Student Information Records', desc: 'Centralized profiles for every student including enrollment history, class assignments, and parent contact logs.', icon: Users },
  { title: 'Automated Grading & Reports', desc: 'Input marks once. The system handles class weights, terminal averages, and generates structured report cards instantly.', icon: FileSpreadsheet },
  { title: 'Attendance Management', desc: 'Maintain clean digital logs of daily student presence to easily flag and address chronic absenteeism.', icon: Clock },
  { title: 'Fees & Finances tracking', desc: 'Set up termly school fee structures, log dynamic cash allocations, flag outstanding balances, and check collection histories.', icon: CreditCard },
  { title: 'SMS & WhatsApp Alerts', desc: 'Send direct broadcast notifications to parents regarding general school updates, meetings, or outstanding fee reminders.', icon: BellRing },
  { title: 'School Head Analytics', desc: 'Clear performance charts designed for school owners to monitor term-over-term enrollment trends and fee collections.', icon: BarChart3 }
];

export default function EduSpaceLandingPage() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(eduspaceProducts[0].id);
  const [trayOpen, setTrayOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ schoolName: '', directorName: '', whatsapp: '', studentCount: 'under-200' });

  const activeProduct = eduspaceProducts.find(p => p.id === activeTab) || eduspaceProducts[0];
  const ActiveProductIcon = activeProduct.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#05070f] text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-cyan-500/30 transition-colors duration-300">
      
      {/* Structural Sub-Navigation Toolbar (If integrated beneath standard navbar) */}
      <div className="bg-slate-50 dark:bg-[#0b0f19] border-b border-slate-200 dark:border-white/5 py-2.5 px-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Core Application Cluster
          </div>
          
          {/* App Tray Dropdown Integration */}
          <div className="relative">
            <button 
              onClick={() => setTrayOpen(!trayOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-all font-semibold"
            >
              <Grid className="w-3.5 h-3.5 text-cyan-500" /> Launch Apps <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {trayOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setTrayOpen(false)} />
                <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0f19] p-3 shadow-2xl space-y-1 z-20 animate-in fade-in slide-in-from-top-2 duration-150">
                  <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Instant Access Hub</p>
                  {eduspaceProducts.map((prod) => {
                    const ProdIcon = prod.icon;
                    return (
                      <a 
                        key={prod.id}
                        href={prod.loginUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-start justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-left group"
                        onClick={() => setTrayOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 group-hover:bg-cyan-500/10 transition-all">
                            <ProdIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">{prod.title}</p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Click to access portal</p>
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors self-center" />
                      </a>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Glow Effects only render cleanly in dark configuration to avoid casting dirty washes over light themes */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[65rem] h-[65rem] bg-cyan-500/[0.03] dark:bg-cyan-500/[0.015] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/[0.06] dark:bg-cyan-500/5 border border-cyan-500/10 dark:border-cyan-500/20 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" /> Reliable School Software Suite
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Manage Your Entire School with <span className="text-cyan-500">Zero Chaos</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Stop stressing over manual records. **EduSpace** builds separate, dedicated applications sharing a single system to power administrative tasks for school management and public access for parents at the same time.
            </p>
            
            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a href="#register" className="h-14 px-8 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 transition-all">
                Setup Your Institution <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex gap-2">
                <a href="https://hub.mzatinova.com/login" target="_blank" rel="noreferrer" className="flex-1 sm:flex-initial h-14 px-5 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-all text-slate-700 dark:text-slate-200">
                  <LayoutDashboard className="w-4 h-4 text-cyan-500" /> Admin Hub
                </a>
                <a href="https://portal.mzatinova.com/login" target="_blank" rel="noreferrer" className="flex-1 sm:flex-initial h-14 px-5 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-all text-slate-700 dark:text-slate-200">
                  <Layers className="w-4 h-4 text-purple-500" /> Parent Portal
                </a>
              </div>
            </div>
          </div>

          {/* Dynamic Interactive Software Module Simulator */}
          <div className="lg:col-span-6 relative">
            <div className="w-full rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#090d16] p-6 shadow-xl dark:shadow-2xl text-left transition-colors duration-300">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4 mb-6">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Explore Live Software Layouts</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                </div>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-200/60 dark:bg-white/5 rounded-xl mb-6">
                {eduspaceProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveTab(p.id)}
                    className={`h-10 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 focus:outline-none ${
                      activeTab === p.id 
                        ? 'bg-white dark:bg-[#05070f] text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-white/5' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <p.icon className="w-3.5 h-3.5" />
                    {p.title}
                  </button>
                ))}
              </div>

              {/* Preview Information Box */}
              <div className="space-y-4 min-h-[190px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <ActiveProductIcon className="w-5 h-5 text-cyan-500" /> {activeProduct.title}
                    </h3>
                    <span className={`text-[10px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full border ${activeProduct.accentColor}`}>
                      {activeProduct.badge}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">{activeProduct.subtitle}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">{activeProduct.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex flex-wrap gap-2">
                  {activeProduct.highlights.map((h, i) => (
                    <span key={i} className="text-[11px] bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/5 font-medium">
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Split Features Overview */}
      <section id="apps" className="py-20 border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.005]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-3xl text-left mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              One Integrated Account. Two Dedicated Software Portals.
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              When your institution registers on the EduSpace platform, you immediately receive two distinct web systems. No messy links, perfect data coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {eduspaceProducts.map((product) => {
              const ProductIcon = product.icon;
              return (
                <div key={product.id} className="p-8 rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#090d16] text-left flex flex-col justify-between group hover:border-slate-300 dark:hover:border-white/10 shadow-sm transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-800 dark:text-white mb-6 group-hover:scale-105 transition-transform">
                      <ProductIcon className="w-6 h-6 text-cyan-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{product.title}</h3>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${product.accentColor}`}>
                        {product.badge}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-400 dark:text-slate-500">{product.subtitle}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2">{product.desc}</p>
                  </div>
                  
                  <div className="pt-8 mt-8 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">Core State: Cloud Synchronization</span>
                    <a 
                      href={product.loginUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-xs font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                    >
                      Open Application Portal <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Block List Grid */}
      <section id="features" className="py-20 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl text-left mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Core Institutional Modules Built Inside
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Information inputs safely route between administrative workrooms and parent communication screens automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feat, index) => (
              <div key={index} className="p-6 rounded-3xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] text-left hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/[0.04] dark:bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6">
                  <feat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{feat.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding On-Demand Setup Intake Form */}
      <section id="register" className="py-20 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Register Your School for Setup
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm">
            Provide your foundational school details below. The Mzatinova support center will process your details and establish your active instances.
          </p>

          <div className="mt-12 text-left p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#05070f] relative overflow-hidden shadow-xl dark:shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">School/Institution Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Progress Private Primary"
                      className="w-full h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                      value={formData.schoolName}
                      onChange={e => setFormData({...formData, schoolName: e.target.value})}
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Director / Contact Person</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Director Administrator"
                      className="w-full h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                      value={formData.directorName}
                      onChange={e => setFormData({...formData, directorName: e.target.value})}
                      required 
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">WhatsApp Contact Line</label>
                    <input 
                      type="tel" 
                      placeholder="e.g., +265 999 000 000"
                      className="w-full h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all font-mono"
                      value={formData.whatsapp}
                      onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Estimated Student Size</label>
                    <select 
                      className="w-full h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-500 transition-all bg-white dark:bg-[#05070f]"
                      value={formData.studentCount}
                      onChange={e => setFormData({...formData, studentCount: e.target.value})}
                    >
                      <option value="under-200">Under 200 Students</option>
                      <option value="200-500">200 - 500 Students</option>
                      <option value="500-1000">500 - 1,000 Students</option>
                      <option value="above-1000">More than 1,000 Students</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/10 hover:scale-[1.01]"
                >
                  Submit Setup Request <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Setup Details Captured</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Your registration information has been securely saved. A support representative will message your WhatsApp line shortly to guide you through activation.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Base Global Footer */}
      <footer className="border-t border-slate-200 dark:border-white/5 py-8 text-center text-xs text-slate-400 dark:text-slate-500">
        © 2026 Mzatinova. Powered by EduSpace Systems. All rights reserved.
      </footer>
    </div>
  );
}


// import React, { useState } from 'react';
// import { 
//   CheckCircle2, Users, FileSpreadsheet, CreditCard, Clock, 
//   BellRing, BarChart3, ArrowRight, Sparkles,
//   LayoutDashboard, Layers, ChevronDown, ExternalLink, Grid
// } from 'lucide-react';

// // Specialized apps built for educational stakeholders
// const eduspaceProducts = [
//   {
//     id: 'hub',
//     title: 'EduSpace Hub',
//     subtitle: 'Management Dashboard for School Owners & Admins',
//     badge: 'Available',
//     loginUrl: 'https://hub.mzatinova.com/login',
//     desc: 'The complete digital workspace for school directors and administrators. Record student admissions, manage complex school fees, instantly calculate terminal class positions, and run your school operations from one secure dashboard.',
//     accentColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
//     icon: LayoutDashboard,
//     highlights: ['Malawi curriculum grading & terminal marks', 'School fees tracking & digital receipts', 'Secure staff data isolation']
//   },
//   {
//     id: 'portal',
//     title: 'EduSpace Portal',
//     subtitle: 'Access Gateway for Parents & Guardians',
//     badge: 'Available',
//     loginUrl: 'https://portal.mzatinova.com/login',
//     desc: 'The public-facing portal built entirely for parent transparency. Parents can input their unique student tracking numbers to view attendance histories, track unpaid fee balances, and download official report cards.',
//     accentColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
//     icon: Layers,
//     highlights: ['Instant report card lookups', 'Mobile-friendly for simple smartphones', 'Real-time balance notifications']
//   }
// ];

// const coreFeatures = [
//   { title: 'Student Information Records', desc: 'Centralized profiles for every student including enrollment history, class assignments, and parent contact logs.', icon: Users },
//   { title: 'Automated Grading & Reports', desc: 'Input marks once. The system handles class weights, terminal averages, and generates structured report cards instantly.', icon: FileSpreadsheet },
//   { title: 'Attendance Management', desc: 'Maintain clean digital logs of daily student presence to easily flag and address chronic absenteeism.', icon: Clock },
//   { title: 'Fees & Finances tracking', desc: 'Set up termly school fee structures, log dynamic cash allocations, flag outstanding balances, and check collection histories.', icon: CreditCard },
//   { title: 'SMS & WhatsApp Alerts', desc: 'Send direct broadcast notifications to parents regarding general school updates, meetings, or outstanding fee reminders.', icon: BellRing },
//   { title: 'School Head Analytics', desc: 'Clear performance charts designed for school owners to monitor term-over-term enrollment trends and fee collections.', icon: BarChart3 }
// ];

// const EduSpaceSales: React.FC = () => {
//   const [activeTab, setActiveTab] = useState(eduspaceProducts[0].id);
//   const [trayOpen, setTrayOpen] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({ schoolName: '', directorName: '', whatsapp: '', studentCount: 'under-200' });

//   const activeProduct = eduspaceProducts.find(p => p.id === activeTab) || eduspaceProducts[0];
//   const ActiveProductIcon = activeProduct.icon;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div className="min-h-screen bg-[#05070f] text-slate-100 font-sans antialiased selection:bg-cyan-500/30">
      
//       {/* Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-md bg-[#05070f]/80 border-b border-white/5">
//         <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <span className="text-xl font-bold tracking-tight text-white">
//               Mzatinova <span className="text-cyan-500">EduSpace</span>
//             </span>
//           </div>
          
//           <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
//             <a href="#apps" className="hover:text-white transition-colors">Our School Apps</a>
//             <a href="#features" className="hover:text-white transition-colors">System Features</a>
//             <a href="#register" className="hover:text-white transition-colors">Register School</a>
//           </nav>

//           {/* Google Workspace Style App Tray Dropdown */}
//           <div className="flex items-center gap-4 relative">
//             <div className="relative">
//               <button 
//                 onClick={() => setTrayOpen(!trayOpen)}
//                 className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 hover:bg-white/10 hover:text-white transition-all"
//                 title="Launch EduSpace Apps"
//                 aria-label="Launch EduSpace Apps"
//               >
//                 <Grid className="w-5 h-5" />
//               </button>

//               {trayOpen && (
//                 <>
//                   <div className="fixed inset-0 z-10" onClick={() => setTrayOpen(false)} />
//                   <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-white/10 bg-[#0b0f19] p-3 shadow-2xl space-y-1 z-20 animate-in fade-in slide-in-from-top-2 duration-150">
//                     <p className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">Go directly to login</p>
//                     {eduspaceProducts.map((prod) => {
//                       const ProdIcon = prod.icon;
//                       return (
//                         <a 
//                           key={prod.id}
//                           href={prod.loginUrl}
//                           target="_blank"
//                           rel="noreferrer"
//                           className="flex items-start justify-between p-3 rounded-xl hover:bg-white/5 transition-all text-left group"
//                           onClick={() => setTrayOpen(false)}
//                         >
//                           <div className="flex items-center gap-3">
//                             <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
//                               <ProdIcon className="w-4 h-4" />
//                             </div>
//                             <div>
//                               <p className="text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors">{prod.title}</p>
//                               <p className="text-[10px] text-slate-400 mt-0.5">Click to Open Portal</p>
//                             </div>
//                           </div>
//                           <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors self-center" />
//                         </a>
//                       );
//                     })}
//                   </div>
//                 </>
//               )}
//             </div>

//             <a 
//               href="#register" 
//               className="h-10 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-[#05070f] text-sm font-semibold flex items-center transition-all"
//             >
//               Get Started
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative py-16 lg:py-28 overflow-hidden">
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[65rem] h-[65rem] bg-cyan-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        
//         <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-12 gap-12 items-center">
//           <div className="lg:col-span-6 text-left space-y-6">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-xs font-medium text-cyan-400">
//               <Sparkles className="w-3.5 h-3.5" /> Reliable School Software Suite
//             </div>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
//               Manage Your Entire School with <span className="text-cyan-500">Zero Chaos</span>
//             </h1>
//             <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
//               Stop stressing over manual records. **EduSpace** builds separate, dedicated applications sharing a single system to power administrative tasks for school management and public access for parents at the same time.
//             </p>
            
//             {/* Direct App Link Buttons Section */}
//             <div className="pt-2 flex flex-col sm:flex-row gap-3">
//               <a href="#register" className="h-14 px-8 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-[#05070f] font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 transition-all">
//                 Setup Your Institution <ArrowRight className="w-4 h-4" />
//               </a>
//               <div className="flex gap-2">
//                 <a href="https://hub.mzatinova.com/login" target="_blank" rel="noreferrer" className="flex-1 sm:flex-initial h-14 px-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium flex items-center justify-center gap-2 transition-all text-slate-200">
//                   <LayoutDashboard className="w-4 h-4 text-cyan-400" /> Admin Hub Login
//                 </a>
//                 <a href="https://portal.mzatinova.com/login" target="_blank" rel="noreferrer" className="flex-1 sm:flex-initial h-14 px-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium flex items-center justify-center gap-2 transition-all text-slate-200">
//                   <Layers className="w-4 h-4 text-purple-400" /> Parent Portal Login
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Clean Interactive Graphic Switcher */}
//           <div className="lg:col-span-6 relative">
//             <div className="w-full rounded-3xl border border-white/10 bg-[#090d16] p-6 shadow-2xl text-left">
//               <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
//                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Explore Live Software Layouts</span>
//                 <div className="flex gap-1.5">
//                   <div className="w-2.5 h-2.5 rounded-full bg-slate-700" /><div className="w-2.5 h-2.5 rounded-full bg-slate-700" /><div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
//                 </div>
//               </div>

//               {/* Tabs */}
//               <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-xl mb-6">
//                 {eduspaceProducts.map((p) => (
//                   <button
//                     key={p.id}
//                     onClick={() => setActiveTab(p.id)}
//                     className={`h-10 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
//                       activeTab === p.id ? 'bg-[#05070f] text-cyan-400 shadow-md border border-white/5' : 'text-slate-400 hover:text-white'
//                     }`}
//                   >
//                     <p.icon className="w-3.5 h-3.5" />
//                     {p.title}
//                   </button>
//                 ))}
//               </div>

//               {/* Tab Display Box */}
//               <div className="space-y-4 min-h-[180px] flex flex-col justify-between">
//                 <div>
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-lg font-bold text-white flex items-center gap-2">
//                       <ActiveProductIcon className="w-5 h-5 text-cyan-400" /> {activeProduct.title}
//                     </h3>
//                     <span className={`text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-full border ${activeProduct.accentColor}`}>
//                       {activeProduct.badge}
//                     </span>
//                   </div>
//                   <p className="text-xs font-mono text-slate-400 mt-1">{activeProduct.subtitle}</p>
//                   <p className="text-sm text-slate-300 mt-4 leading-relaxed">{activeProduct.desc}</p>
//                 </div>

//                 <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
//                   {activeProduct.highlights.map((h, i) => (
//                     <span key={i} className="text-[11px] bg-white/5 text-slate-300 px-2.5 py-1 rounded-md border border-white/5">
//                       ✓ {h}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Clear Application Separation Section */}
//       <section id="apps" className="py-20 border-t border-white/5 bg-white/[0.005]">
//         <div className="max-w-7xl mx-auto px-5">
//           <div className="max-w-3xl text-left mb-16">
//             <h2 className="text-3xl font-bold text-white sm:text-4xl">
//               One Integrated Account. Two Dedicated Software Portals.
//             </h2>
//             <p className="mt-4 text-slate-400">
//               When your institution registers on the EduSpace platform, you immediately receive two distinct web systems. No messy links, perfect data coordination.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {eduspaceProducts.map((product) => {
//               const ProductIcon = product.icon;
//               return (
//                 <div key={product.id} className="p-8 rounded-3xl border border-white/5 bg-[#090d16] text-left flex flex-col justify-between group hover:border-white/10 transition-all">
//                   <div className="space-y-4">
//                     <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6">
//                       <ProductIcon className="w-6 h-6 text-cyan-400" />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <h3 className="text-xl font-bold text-white">{product.title}</h3>
//                       <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${product.accentColor}`}>
//                         {product.badge}
//                       </span>
//                     </div>
//                     <p className="text-xs font-mono text-slate-500">{product.subtitle}</p>
//                     <p className="text-sm text-slate-400 leading-relaxed pt-2">{product.desc}</p>
//                   </div>
                  
//                   <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
//                     <span className="text-xs text-slate-500 font-mono">Status: Connected to Database</span>
//                     <a 
//                       href={product.loginUrl} 
//                       target="_blank" 
//                       rel="noreferrer"
//                       className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
//                     >
//                       Open Application Portal <ExternalLink className="w-3 h-3" />
//                     </a>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section id="features" className="py-20 border-t border-white/5 bg-white/[0.01]">
//         <div className="max-w-7xl mx-auto px-5">
//           <div className="max-w-2xl text-left mb-16">
//             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//               Core Institutional Modules Built Inside
//             </h2>
//             <p className="mt-4 text-slate-400">
//               Information inputs safely route between administrative workrooms and parent communication screens automatically.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {coreFeatures.map((feat, index) => (
//               <div key={index} className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] text-left">
//                 <div className="w-12 h-12 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
//                   <feat.icon className="w-5 h-5" />
//                 </div>
//                 <h3 className="text-lg font-bold text-white">{feat.title}</h3>
//                 <p className="mt-3 text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Onboarding Form */}
//       <section id="register" className="py-20 border-t border-white/5 bg-white/[0.01]">
//         <div className="max-w-4xl mx-auto px-5 text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//             Register Your School for Setup
//           </h2>
//           <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">
//             Provide your foundational school details below. The Mzatinova support center will process your details and establish your active instances.
//           </p>

//           <div className="mt-12 text-left p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#05070f] relative overflow-hidden shadow-2xl">
//             {!submitted ? (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid sm:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">School/Institution Name</label>
//                     <input 
//                       type="text" 
//                       placeholder="e.g., Progress Private Primary"
//                       className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all"
//                       value={formData.schoolName}
//                       onChange={e => setFormData({...formData, schoolName: e.target.value})}
//                       required 
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Director / Contact Person</label>
//                     <input 
//                       type="text" 
//                       placeholder="e.g., Director Administrator"
//                       className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all"
//                       value={formData.directorName}
//                       onChange={e => setFormData({...formData, directorName: e.target.value})}
//                       required 
//                     />
//                   </div>
//                 </div>

//                 <div className="grid sm:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">WhatsApp Contact Line</label>
//                     <input 
//                       type="tel" 
//                       placeholder="e.g., +265 999 000 000"
//                       className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all font-mono"
//                       value={formData.whatsapp}
//                       onChange={e => setFormData({...formData, whatsapp: e.target.value})}
//                       required 
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Estimated Student Size</label>
//                     <select 
//                       className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-slate-300 focus:outline-none focus:border-cyan-500 transition-all bg-[#05070f]"
//                       value={formData.studentCount}
//                       onChange={e => setFormData({...formData, studentCount: e.target.value})}
//                     >
//                       <option value="under-200">Under 200 Students</option>
//                       <option value="200-500">200 - 500 Students</option>
//                       <option value="500-1000">500 - 1,000 Students</option>
//                       <option value="above-1000">More than 1,000 Students</option>
//                     </select>
//                   </div>
//                 </div>

//                 <button 
//                   type="submit" 
//                   className="w-full h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-[#05070f] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/10"
//                 >
//                   Submit Setup Request <ArrowRight className="w-4 h-4" />
//                 </button>
//               </form>
//             ) : (
//               <div className="py-8 text-center space-y-4">
//                 <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto">
//                   <CheckCircle2 className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white">Setup Details Captured</h3>
//                 <p className="text-sm text-slate-400 max-w-sm mx-auto">
//                   Your registration information has been securely saved. A support representative will message your WhatsApp line shortly to guide you through activation.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
//         © 2026 Mzatinova. Powered by EduSpace Systems. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default EduSpaceSales;

// // import React, { useState } from 'react';
// // import { 
// //   CheckCircle2, Users, GraduationCap, ShieldCheck, 
// //   FileSpreadsheet, CreditCard, Clock, 
// //   BellRing, BarChart3, ShieldAlert, ArrowRight, Sparkles,
// //   LayoutDashboard, Layers, ChevronDown, ExternalLink
// // } from 'lucide-react';

// // // 1. DYNAMIC ECOSYSTEM ARRAY - Fully scalable for infinite products
// // const eduspaceProducts = [
// //   {
// //     id: 'hub',
// //     title: 'EduSpace Hub',
// //     subtitle: 'Admin & Operations Core',
// //     badge: 'Live',
// //     loginUrl: 'https://hub.mzatinova.com/login',
// //     desc: 'The centralized engine for school directors and administrators. Manage admissions, track complex school fees, instantly calculate terminal averages, and run multi-tenant school operations from one secure desk.',
// //     accentColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
// //     icon: LayoutDashboard,
// //     highlights: ['Multi-currency fee tracking', 'Malawi curriculum grading schema', 'Staff data isolation']
// //   },
// //   {
// //     id: 'portal',
// //     title: 'EduSpace Portal',
// //     subtitle: 'Parent & Public Gateway',
// //     badge: 'Live',
// //     loginUrl: 'https://portal.mzatinova.com/login',
// //     desc: 'The public-facing communication layer. Parents use secure lookup profiles to instantly monitor student attendance logs, download verified report cards, and track outstanding balance structures.',
// //     accentColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
// //     icon: Layers,
// //     highlights: ['Instant tracking number access', 'Mobile-friendly interfaces', 'Secure result distribution']
// //   }
// // ];

// // const coreFeatures = [
// //   { title: 'Student Information System', desc: 'Centralized profiles for every student including enrollment history, parent contacts, and terminal academic tracking.', icon: Users },
// //   { title: 'Automated Grading & Report Cards', desc: 'Input marks once. System instantly calculates positions, weights terminal averages, and generates report cards.', icon: FileSpreadsheet },
// //   { title: 'Smart Attendance Tracking', desc: 'Track daily student and teacher presence with instant digital logs. Automatically flags chronic absences.', icon: Clock },
// //   { title: 'Fees & Finance Management', desc: 'Track school fee structures, issue digital receipts, flag outstanding balances, and monitor school operational accounts.', icon: CreditCard },
// //   { title: 'Instant SMS & WhatsApp Alerts', desc: 'Send automated broadcast notices for emergency meetings, holiday breaks, or direct notifications for unpaid balances.', icon: BellRing },
// //   { title: 'Real-time Analytics Dashboard', desc: 'Visual analytics for school directors to monitor enrollment trends, collection rates, and global school performance metrics.', icon: BarChart3 }
// // ];

// // const EduSpaceSales: React.FC = () => {
// //   const [activeTab, setActiveTab] = useState(eduspaceProducts[0].id);
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const [submitted, setSubmitted] = useState(false);
// //   const [formData, setFormData] = useState({ schoolName: '', directorName: '', whatsapp: '', studentCount: 'under-200' });

// //   const activeProduct = eduspaceProducts.find(p => p.id === activeTab) || eduspaceProducts[0];
// //   const ActiveProductIcon = activeProduct.icon;

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setSubmitted(true);
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#05070f] text-slate-100 font-sans antialiased selection:bg-cyan-500/30">
      
// //       {/* Header */}
// //       <header className="sticky top-0 z-50 backdrop-blur-md bg-[#05070f]/80 border-b border-white/5">
// //         <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
// //           <div className="flex items-center gap-3">
// //             <span className="text-xl font-bold tracking-tight text-white">
// //               Mzatinova <span className="text-cyan-500">EduSpace</span>
// //             </span>
// //             <span className="text-[10px] bg-cyan-500/10 text-cyan-400 font-semibold px-2 py-0.5 rounded-full border border-cyan-500/20">
// //               Enterprise Suite
// //             </span>
// //           </div>
          
// //           <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
// //             <a href="#ecosystem" className="hover:text-white transition-colors">Our Ecosystem</a>
// //             <a href="#features" className="hover:text-white transition-colors">Core Modules</a>
// //             <a href="#onboard" className="hover:text-white transition-colors">Deploy</a>
// //           </nav>

// //           {/* DYNAMIC DROPDOWN MENU - Loops through all apps dynamically */}
// //           <div className="flex items-center gap-4 relative">
// //             <div className="relative">
// //               <button 
// //                 onClick={() => setDropdownOpen(!dropdownOpen)}
// //                 className="h-10 px-4 rounded-xl bg-white/5 border border-white/10 text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-all text-slate-200"
// //               >
// //                 App Portals <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
// //               </button>

// //               {dropdownOpen && (
// //                 <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-white/10 bg-[#0b0f19] p-2 shadow-2xl space-y-1">
// //                   {eduspaceProducts.map((prod) => {
// //                     const ProdIcon = prod.icon;
// //                     return (
// //                       <a 
// //                         key={prod.id}
// //                         href={prod.loginUrl}
// //                         target="_blank"
// //                         rel="noreferrer"
// //                         className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all text-left group"
// //                       >
// //                         <div className="flex items-center gap-3">
// //                           <ProdIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
// //                           <div>
// //                             <p className="text-xs font-semibold text-white">{prod.title}</p>
// //                             <p className="text-[10px] text-slate-400">{prod.badge} App</p>
// //                           </div>
// //                         </div>
// //                         <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-white" />
// //                       </a>
// //                     );
// //                   })}
// //                 </div>
// //               )}
// //             </div>

// //             <a 
// //               href="#onboard" 
// //               className="h-10 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-[#05070f] text-sm font-semibold flex items-center transition-all"
// //             >
// //               Get Started
// //             </a>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Hero Section */}
// //       <section className="relative py-20 lg:py-32 overflow-hidden">
// //         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[65rem] h-[65rem] bg-cyan-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        
// //         <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-12 gap-12 items-center">
// //           <div className="lg:col-span-6 text-left space-y-6">
// //             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-xs font-medium text-cyan-400">
// //               <Sparkles className="w-3.5 h-3.5" /> Complete Infrastructure Suite
// //             </div>
// //             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
// //               The Unified Architecture for <span className="text-cyan-500">School Systems</span>
// //             </h1>
// //             <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
// //               No single interface fits every user. **EduSpace** provides distinct, specialized applications built on a shared database core to power back-office administrative control and public consumer workflows simultaneously.
// //             </p>
// //             <div className="pt-2 flex flex-wrap gap-4">
// //               <a href="#onboard" className="h-14 px-8 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-[#05070f] font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/10 transition-all">
// //                 Request Suite Activation <ArrowRight className="w-4 h-4" />
// //               </a>
// //             </div>
// //           </div>

// //           {/* INTERACTIVE HERO GRAPHIC - Showcases every app clearly with tab switching */}
// //           <div className="lg:col-span-6 relative">
// //             <div className="w-full rounded-3xl border border-white/10 bg-[#090d16] p-6 shadow-2xl text-left">
// //               <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
// //                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live System Environment Explorer</span>
// //                 <div className="flex gap-1.5">
// //                   <div className="w-2.5 h-2.5 rounded-full bg-rose-500/40" /><div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
// //                 </div>
// //               </div>

// //               {/* Dynamic Tabs */}
// //               <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-xl mb-6">
// //                 {eduspaceProducts.map((p) => (
// //                   <button
// //                     key={p.id}
// //                     onClick={() => setActiveTab(p.id)}
// //                     className={`h-10 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
// //                       activeTab === p.id ? 'bg-[#05070f] text-cyan-400 shadow-md border border-white/5' : 'text-slate-400 hover:text-white'
// //                     }`}
// //                   >
// //                     <p.icon className="w-3.5 h-3.5" />
// //                     {p.title}
// //                   </button>
// //                 ))}
// //               </div>

// //               {/* Dynamic Product Visual Box */}
// //               <div className="space-y-4 min-h-[180px] flex flex-col justify-between">
// //                 <div>
// //                   <div className="flex items-center justify-between">
// //                     <h3 className="text-lg font-bold text-white flex items-center gap-2">
// //                       <ActiveProductIcon className="w-5 h-5 text-cyan-400" /> {activeProduct.title}
// //                     </h3>
// //                     <span className={`text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-full border ${activeProduct.accentColor}`}>
// //                       {activeProduct.badge} Module
// //                     </span>
// //                   </div>
// //                   <p className="text-xs font-mono text-slate-400 mt-1">{activeProduct.subtitle}</p>
// //                   <p className="text-sm text-slate-300 mt-4 leading-relaxed">{activeProduct.desc}</p>
// //                 </div>

// //                 <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
// //                   {activeProduct.highlights.map((h, i) => (
// //                     <span key={i} className="text-[11px] bg-white/5 text-slate-300 px-2.5 py-1 rounded-md border border-white/5">
// //                       ✓ {h}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* DETAILED ECOSYSTEM SECTION - Clear visibility & separation of all live apps */}
// //       <section id="ecosystem" className="py-24 border-t border-white/5 bg-white/[0.005]">
// //         <div className="max-w-7xl mx-auto px-5">
// //           <div className="max-w-3xl text-left mb-16">
// //             <h2 className="text-3xl font-bold text-white sm:text-4xl">
// //               One Unified Account. Distinct Production Engines.
// //             </h2>
// //             <p className="mt-4 text-slate-400">
// //               When your school registers to the EduSpace platform, you deploy separate localized gateways out of the box. No cross-contamination, perfect data scaling.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             {eduspaceProducts.map((product) => {
// //               const ProductIcon = product.icon;
// //               return (
// //                 <div key={product.id} className="p-8 rounded-3xl border border-white/5 bg-[#090d16] text-left flex flex-col justify-between group hover:border-white/10 transition-all">
// //                   <div className="space-y-4">
// //                     <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6">
// //                       <ProductIcon className="w-6 h-6 text-cyan-400" />
// //                     </div>
// //                     <div className="flex items-center justify-between">
// //                       <h3 className="text-xl font-bold text-white">{product.title}</h3>
// //                       <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${product.accentColor}`}>
// //                         Production {product.badge}
// //                       </span>
// //                     </div>
// //                     <p className="text-xs font-mono text-slate-500">{product.subtitle}</p>
// //                     <p className="text-sm text-slate-400 leading-relaxed pt-2">{product.desc}</p>
// //                   </div>
                  
// //                   <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
// //                     <span className="text-xs text-slate-500 font-mono">Status: Connected to Database</span>
// //                     <a 
// //                       href={product.loginUrl} 
// //                       target="_blank" 
// //                       rel="noreferrer"
// //                       className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
// //                     >
// //                       Access App <ExternalLink className="w-3 h-3" />
// //                     </a>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Shared Features Grid */}
// //       <section id="features" className="py-24 border-t border-white/5 bg-white/[0.01]">
// //         <div className="max-w-7xl mx-auto px-5">
// //           <div className="max-w-2xl text-left mb-16">
// //             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
// //               Cross-Platform Functional Capabilities
// //             </h2>
// //             <p className="mt-4 text-slate-400">
// //               Features pass data cleanly across both administrative interfaces and consumer-facing access portals in real-time.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {coreFeatures.map((feat, index) => (
// //               <div key={index} className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] text-left">
// //                 <div className="w-12 h-12 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
// //                   <feat.icon className="w-5 h-5" />
// //                 </div>
// //                 <h3 className="text-lg font-bold text-white">{feat.title}</h3>
// //                 <p className="mt-3 text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Onboarding Form */}
// //       <section id="onboard" className="py-24 border-t border-white/5 bg-white/[0.01]">
// //         <div className="max-w-4xl mx-auto px-5 text-center">
// //           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
// //             Provision the EduSpace Umbrella Suite
// //           </h2>
// //           <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">
// //             Provide your foundational parameters below. The Mzatinova onboarding desk will establish your production instance.
// //           </p>

// //           <div className="mt-12 text-left p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#05070f] relative overflow-hidden shadow-2xl">
// //             {!submitted ? (
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="grid sm:grid-cols-2 gap-6">
// //                   <div>
// //                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">School Institution Name</label>
// //                     <input 
// //                       type="text" 
// //                       placeholder="e.g., Progress Private Primary"
// //                       className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all"
// //                       value={formData.schoolName}
// //                       onChange={e => setFormData({...formData, schoolName: e.target.value})}
// //                       required 
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Contact Person / Director</label>
// //                     <input 
// //                       type="text" 
// //                       placeholder="e.g., Director Administrator"
// //                       className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all"
// //                       value={formData.directorName}
// //                       onChange={e => setFormData({...formData, directorName: e.target.value})}
// //                       required 
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="grid sm:grid-cols-2 gap-6">
// //                   <div>
// //                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">WhatsApp Contact Number</label>
// //                     <input 
// //                       type="tel" 
// //                       placeholder="e.g., +265 999 000 000"
// //                       className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all font-mono"
// //                       value={formData.whatsapp}
// //                       onChange={e => setFormData({...formData, whatsapp: e.target.value})}
// //                       required 
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Estimated Student Roster Size</label>
// //                     <select 
// //                       className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-slate-300 focus:outline-none focus:border-cyan-500 transition-all bg-[#05070f]"
// //                       value={formData.studentCount}
// //                       onChange={e => setFormData({...formData, studentCount: e.target.value})}
// //                     >
// //                       <option value="under-200">Under 200 Students</option>
// //                       <option value="200-500">200 - 500 Students</option>
// //                       <option value="500-1000">500 - 1,000 Students</option>
// //                       <option value="above-1000">More than 1,000 Students</option>
// //                     </select>
// //                   </div>
// //                 </div>

// //                 <button 
// //                   type="submit" 
// //                   className="w-full h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-[#05070f] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/10"
// //                 >
// //                   Submit Onboarding Request <ArrowRight className="w-4 h-4" />
// //                 </button>
// //               </form>
// //             ) : (
// //               <div className="py-8 text-center space-y-4">
// //                 <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto">
// //                   <CheckCircle2 className="w-6 h-6" />
// //                 </div>
// //                 <h3 className="text-xl font-bold text-white">Setup Request Captured</h3>
// //                 <p className="text-sm text-slate-400 max-w-sm mx-auto">
// //                   Thank you. Your parameters are saved. A platform representative will message your WhatsApp line shortly to initialize your sandbox.
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Mini Footer */}
// //       <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
// //         © 2026 Mzatinova Enterprise Architecture. All rights reserved. Powered by EduSpace Systems.
// //       </footer>
// //     </div>
// //   );
// // };

// // export default EduSpaceSales;

// // // import React, { useState } from 'react';
// // // import { 
// // //   CheckCircle2, Users, GraduationCap, ShieldCheck, 
// // //   MessageSquare, FileSpreadsheet, CreditCard, Clock, 
// // //   BellRing, BarChart3, ShieldAlert, ArrowRight, Sparkles 
// // // } from 'lucide-react';

// // // const EduSpaceSales: React.FC = () => {
// // //   const [formData, setFormData] = useState({
// // //     schoolName: '',
// // //     directorName: '',
// // //     whatsapp: '',
// // //     studentCount: 'under-200'
// // //   });
// // //   const [submitted, setSubmitted] = useState(false);

// // //   const handleSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     // Connect to your NestJS/PostgreSQL backend lead collector here
// // //     console.log('Lead captured:', formData);
// // //     setSubmitted(true);
// // //   };

// // //   // The 9 micro-features school directors look for
// // //   const coreFeatures = [
// // //     { title: 'Student Information System', desc: 'Centralized profiles for every student including enrollment history, parent contacts, and medical notes.', icon: Users },
// // //     { title: 'Automated Grading & Report Cards', desc: 'Input marks once. System instantly calculates positions, weights terminal averages, and generates beautiful report cards.', icon: FileSpreadsheet },
// // //     { title: 'Smart Attendance Tracking', desc: 'Track daily student and teacher presence with instant logs. Automatically flags chronic absences.', icon: Clock },
// // //     { title: 'Fees & Finance Management', desc: 'Track school fee structures, issue digital receipts, flag outstanding balances, and monitor school operational accounts.', icon: CreditCard },
// // //     { title: 'Instant SMS & WhatsApp Alerts', desc: 'Send automated broadcast notices for emergency meetings, holiday breaks, or direct notifications for unpaid fees.', icon: BellRing },
// // //     { title: 'Real-time Analytics Dashboard', desc: 'Visual analytics for school directors to monitor enrollment trends, passing rates, and global school performance metrics.', icon: BarChart3 },
// // //     { title: 'Teacher & Staff Portals', desc: 'Dedicated streamlined interfaces for teachers to submit continuous assessments and manage classroom diaries securely.', icon: GraduationCap },
// // //     { title: 'Parent Portal Infrastructure', desc: 'A dedicated public lookup gateway where parents safely track results and feedback using simple individual tracking numbers.', icon: ShieldCheck },
// // //     { title: 'Secure Data Safeguards', desc: 'Bank-grade cloud data isolation keeping student personal records, archives, and financial balances 100% private and protected.', icon: ShieldAlert }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-[#05070f] text-slate-100 font-sans antialiased">
// // //       {/* Sales Header */}
// // //       <header className="sticky top-0 z-50 backdrop-blur-md bg-[#05070f]/80 border-b border-white/5">
// // //         <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
// // //           <div className="flex items-center gap-3">
// // //             <span className="text-xl font-bold tracking-tight text-white">
// // //               Mzatinova <span className="text-cyan-500">EduSpace</span>
// // //             </span>
// // //             <span className="text-[10px] bg-cyan-500/10 text-cyan-400 font-semibold px-2 py-0.5 rounded-full border border-cyan-500/20">
// // //               Enterprise Suite
// // //             </span>
// // //           </div>
          
// // //           <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
// // //             <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
// // //             <a href="#why-eduspace" className="hover:text-cyan-400 transition-colors">Why Us</a>
// // //             <a href="#onboard" className="hover:text-cyan-400 transition-colors">Setup Costs</a>
// // //           </nav>

// // //           <div className="flex items-center gap-4">
// // //             {/* The line to bypass marketing for existing buyers */}
// // //             <a 
// // //               href="https://portal.mzatinova.com/login" 
// // //               className="text-xs sm:text-sm text-slate-300 hover:text-white font-medium"
// // //             >
// // //               Portal Login
// // //             </a>
// // //             <a 
// // //               href="#onboard" 
// // //               className="h-10 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-[#05070f] text-sm font-semibold flex items-center transition-all"
// // //             >
// // //               Get Started
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       {/* Hero Section */}
// // //       <section className="relative py-24 lg:py-36 overflow-hidden">
// // //         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[65rem] h-[65rem] bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" />
        
// // //         <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-12 gap-12 items-center">
// // //           <div className="lg:col-span-7 text-left space-y-6">
// // //             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-xs font-medium text-cyan-400">
// // //               <Sparkles className="w-3.5 h-3.5" /> Built for African Primary & Secondary Schools
// // //             </div>
// // //             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
// // //               The Intelligent Platform for <span className="text-cyan-500">Modern Schools</span>
// // //             </h1>
// // //             <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
// // //               Eliminate administrative chaos. EduSpace is a comprehensive, cloud-based platform that automates grading, secures student histories, tracks fees, and bridges communication between teachers and parents instantly.
// // //             </p>
// // //             <div className="pt-4 flex flex-wrap gap-4">
// // //               <a href="#onboard" className="h-14 px-8 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-[#05070f] font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/10 transition-all">
// // //                 Request School Setup <ArrowRight className="w-4 h-4" />
// // //               </a>
// // //               <a href="https://portal.mzatinova.com" target="_blank" rel="noreferrer" className="h-14 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 font-medium flex items-center transition-all text-slate-200">
// // //                 View Live Parent Interface
// // //               </a>
// // //             </div>
            
// // //             {/* Quick trust proofs */}
// // //             <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-4 text-center sm:text-left">
// // //               <div>
// // //                 <p className="text-2xl font-bold text-white">12,000+</p>
// // //                 <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Students Tracked</p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-2xl font-bold text-white">99.9%</p>
// // //                 <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Uptime Record</p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-2xl font-bold text-white">100%</p>
// // //                 <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Cloud Automated</p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Interactive visual layout stack mockup */}
// // //           <div className="lg:col-span-5 relative">
// // //             <div className="w-full aspect-[4/3] rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 relative shadow-2xl">
// // //               <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
// // //                 <div className="flex items-center gap-2">
// // //                   <div className="w-3 h-3 rounded-full bg-rose-500/40" />
// // //                   <div className="w-3 h-3 rounded-full bg-amber-500/40" />
// // //                   <div className="w-3 h-3 rounded-full bg-green-500/40" />
// // //                 </div>
// // //                 <span className="text-xs text-slate-500 font-mono">eduspace-core-engine.v1</span>
// // //               </div>
// // //               <div className="space-y-3">
// // //                 <div className="h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between px-4">
// // //                   <span className="text-xs font-medium text-slate-300">Term 2 Report Card Processor</span>
// // //                   <span className="text-[10px] font-mono text-cyan-400 bg-cyan-900/30 px-2 py-0.5 rounded">Active</span>
// // //                 </div>
// // //                 <div className="h-24 rounded-xl bg-white/[0.01] border border-white/5 p-4 flex flex-col justify-between">
// // //                   <div className="flex justify-between text-xs text-slate-400">
// // //                     <span>SMS Automated Gateway Queue</span>
// // //                     <span className="text-emerald-400">98% Sent</span>
// // //                   </div>
// // //                   <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
// // //                     <div className="bg-emerald-500 h-full w-[98%]" />
// // //                   </div>
// // //                 </div>
// // //                 <div className="h-14 rounded-xl bg-white/[0.01] border border-white/5 flex items-center justify-between px-4 text-xs text-slate-400">
// // //                   <span>Malawi National Curriculum Grading Schema</span>
// // //                   <CheckCircle2 className="w-4 h-4 text-cyan-400" />
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* The 9 Features Grid Block Section */}
// // //       <section id="features" className="py-24 border-y border-white/5 bg-white/[0.01]">
// // //         <div className="max-w-7xl mx-auto px-5">
// // //           <div className="max-w-2xl text-left mb-16">
// // //             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
// // //               Engineered to Run Every Aspect of Your Institution
// // //             </h2>
// // //             <p className="mt-4 text-slate-400">
// // //               Stop stitching modules together. EduSpace provides a unified management architecture out of the box, tailored for local administrative demands.
// // //             </p>
// // //           </div>

// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {coreFeatures.map((feat, index) => (
// // //               <div key={index} className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/30 transition-all duration-300 group">
// // //                 <div className="w-12 h-12 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
// // //                   <feat.icon className="w-5 h-5" />
// // //                 </div>
// // //                 <h3 className="text-lg font-bold text-white">{feat.title}</h3>
// // //                 <p className="mt-3 text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Value Proposition Block Section */}
// // //       <section id="why-eduspace" className="py-24 max-w-7xl mx-auto px-5">
// // //         <div className="grid lg:grid-cols-12 gap-12 items-center">
// // //           <div className="lg:col-span-5 space-y-4">
// // //             <h2 className="text-3xl font-bold tracking-tight text-white">
// // //               Built for the Real Challenges Schools Face
// // //             </h2>
// // //             <p className="text-sm text-slate-400 leading-relaxed">
// // //               Many schools still struggle with tedious manual entry ledgers, broken data transparency, late result compilation timelines, and friction contacting parents. 
// // //             </p>
// // //             <p className="text-sm text-slate-400 leading-relaxed">
// // //               EduSpace eliminates manual paperwork delays completely, turning your administration records into live dashboards.
// // //             </p>
// // //           </div>
          
// // //           <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
// // //             {[
// // //               { t: 'Reduced Paperwork Burden', d: 'Digitize archives and eliminate storage overhead logs.' },
// // //               { t: 'Rapid Assessment Output', d: 'Compile rankings and complete class report profiles in minutes.' },
// // //               { t: 'Secure Family Connections', d: 'Keep parents completely loop-aware of attendance and records via shortcodes.' },
// // //               { t: 'Actionable Performance Insights', d: 'Pinpoint drop-off risk factors before testing sequences start.' }
// // //             ].map((v, i) => (
// // //               <div key={i} className="p-5 rounded-2xl border border-white/5 bg-white/[0.01]">
// // //                 <span className="text-xs font-mono text-cyan-500 font-semibold">0{i+1}</span>
// // //                 <h4 className="font-bold text-white mt-2 text-base">{v.t}</h4>
// // //                 <p className="text-xs text-slate-400 mt-1 leading-relaxed">{v.d}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Onboarding & Capture Form Block Section */}
// // //       <section id="onboard" className="py-24 border-t border-white/5 bg-white/[0.01]">
// // //         <div className="max-w-4xl mx-auto px-5 text-center">
// // //           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
// // //             Deploy EduSpace for Your School
// // //           </h2>
// // //           <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">
// // //             Fill out your basic structural variables below. The Mzatinova deployment desk will connect with you via WhatsApp or Email to coordinate data migration.
// // //           </p>

// // //           <div className="mt-12 text-left p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#05070f] relative overflow-hidden shadow-2xl">
// // //             {!submitted ? (
// // //               <form onSubmit={handleSubmit} className="space-y-6">
// // //                 <div className="grid sm:grid-cols-2 gap-6">
// // //                   <div>
// // //                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">School Institution Name</label>
// // //                     <input 
// // //                       type="text" 
// // //                       placeholder="e.g., Progress Private Primary"
// // //                       className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all"
// // //                       value={formData.schoolName}
// // //                       onChange={e => setFormData({...formData, schoolName: e.target.value})}
// // //                       required 
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Contact Person / Director</label>
// // //                     <input 
// // //                       type="text" 
// // //                       placeholder="e.g., Director Administrator"
// // //                       className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all"
// // //                       value={formData.directorName}
// // //                       onChange={e => setFormData({...formData, directorName: e.target.value})}
// // //                       required 
// // //                     />
// // //                   </div>
// // //                 </div>

// // //                 <div className="grid sm:grid-cols-2 gap-6">
// // //                   <div>
// // //                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">WhatsApp Contact Number</label>
// // //                     <input 
// // //                       type="tel" 
// // //                       placeholder="e.g., +265 999 000 000"
// // //                       className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all font-mono"
// // //                       value={formData.whatsapp}
// // //                       onChange={e => setFormData({...formData, whatsapp: e.target.value})}
// // //                       required 
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Estimated Student Roster Size</label>
// // //                     <select 
// // //                       className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-slate-300 focus:outline-none focus:border-cyan-500 transition-all bg-[#05070f]"
// // //                       value={formData.studentCount}
// // //                       onChange={e => setFormData({...formData, studentCount: e.target.value})}
// // //                     >
// // //                       <option value="under-200">Under 200 Students</option>
// // //                       <option value="200-500">200 - 500 Students</option>
// // //                       <option value="500-1000">500 - 1,000 Students</option>
// // //                       <option value="above-1000">More than 1,000 Students</option>
// // //                     </select>
// // //                   </div>
// // //                 </div>

// // //                 <button 
// // //                   type="submit" 
// // //                   className="w-full h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-[#05070f] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/10"
// // //                 >
// // //                   Submit Onboarding Request <ArrowRight className="w-4 h-4" />
// // //                 </button>
// // //               </form>
// // //             ) : (
// // //               <div className="py-8 text-center space-y-4">
// // //                 <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto">
// // //                   <CheckCircle2 className="w-6 h-6" />
// // //                 </div>
// // //                 <h3 className="text-xl font-bold text-white">Setup Request Captured</h3>
// // //                 <p className="text-sm text-slate-400 max-w-sm mx-auto">
// // //                   Thank you. Your school size parameters are saved. A platform representative will message your WhatsApp line shortly to initialize your sandbox.
// // //                 </p>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Mini Footer */}
// // //       <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
// // //         © 2026 Mzatinova Enterprise Architecture. All rights reserved. Powered by EduSpace Systems.
// // //       </footer>
// // //     </div>
// // //   );
// // // };

// // // export default EduSpaceSales;