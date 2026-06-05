import React, { useState } from 'react';
import { 
  CheckCircle2, Users, GraduationCap, ShieldCheck, 
  MessageSquare, FileSpreadsheet, CreditCard, Clock, 
  BellRing, BarChart3, ShieldAlert, ArrowRight, Sparkles 
} from 'lucide-react';

const EduSpaceSales: React.FC = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    directorName: '',
    whatsapp: '',
    studentCount: 'under-200'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect to your NestJS/PostgreSQL backend lead collector here
    console.log('Lead captured:', formData);
    setSubmitted(true);
  };

  // The 9 micro-features school directors look for
  const coreFeatures = [
    { title: 'Student Information System', desc: 'Centralized profiles for every student including enrollment history, parent contacts, and medical notes.', icon: Users },
    { title: 'Automated Grading & Report Cards', desc: 'Input marks once. System instantly calculates positions, weights terminal averages, and generates beautiful report cards.', icon: FileSpreadsheet },
    { title: 'Smart Attendance Tracking', desc: 'Track daily student and teacher presence with instant logs. Automatically flags chronic absences.', icon: Clock },
    { title: 'Fees & Finance Management', desc: 'Track school fee structures, issue digital receipts, flag outstanding balances, and monitor school operational accounts.', icon: CreditCard },
    { title: 'Instant SMS & WhatsApp Alerts', desc: 'Send automated broadcast notices for emergency meetings, holiday breaks, or direct notifications for unpaid fees.', icon: BellRing },
    { title: 'Real-time Analytics Dashboard', desc: 'Visual analytics for school directors to monitor enrollment trends, passing rates, and global school performance metrics.', icon: BarChart3 },
    { title: 'Teacher & Staff Portals', desc: 'Dedicated streamlined interfaces for teachers to submit continuous assessments and manage classroom diaries securely.', icon: GraduationCap },
    { title: 'Parent Portal Infrastructure', desc: 'A dedicated public lookup gateway where parents safely track results and feedback using simple individual tracking numbers.', icon: ShieldCheck },
    { title: 'Secure Data Safeguards', desc: 'Bank-grade cloud data isolation keeping student personal records, archives, and financial balances 100% private and protected.', icon: ShieldAlert }
  ];

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-100 font-sans antialiased">
      {/* Sales Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#05070f]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight text-white">
              Mzatinova <span className="text-cyan-500">EduSpace</span>
            </span>
            <span className="text-[10px] bg-cyan-500/10 text-cyan-400 font-semibold px-2 py-0.5 rounded-full border border-cyan-500/20">
              Enterprise Suite
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#why-eduspace" className="hover:text-cyan-400 transition-colors">Why Us</a>
            <a href="#onboard" className="hover:text-cyan-400 transition-colors">Setup Costs</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* The line to bypass marketing for existing buyers */}
            <a 
              href="https://portal.mzatinova.com/login" 
              className="text-xs sm:text-sm text-slate-300 hover:text-white font-medium"
            >
              Portal Login
            </a>
            <a 
              href="#onboard" 
              className="h-10 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-[#05070f] text-sm font-semibold flex items-center transition-all"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[65rem] h-[65rem] bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-xs font-medium text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" /> Built for African Primary & Secondary Schools
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              The Intelligent Platform for <span className="text-cyan-500">Modern Schools</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Eliminate administrative chaos. EduSpace is a comprehensive, cloud-based platform that automates grading, secures student histories, tracks fees, and bridges communication between teachers and parents instantly.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#onboard" className="h-14 px-8 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-[#05070f] font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/10 transition-all">
                Request School Setup <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://portal.mzatinova.com" target="_blank" rel="noreferrer" className="h-14 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 font-medium flex items-center transition-all text-slate-200">
                View Live Parent Interface
              </a>
            </div>
            
            {/* Quick trust proofs */}
            <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <p className="text-2xl font-bold text-white">12,000+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Students Tracked</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Uptime Record</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Cloud Automated</p>
              </div>
            </div>
          </div>

          {/* Interactive visual layout stack mockup */}
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-[4/3] rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 relative shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/40" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <span className="text-xs text-slate-500 font-mono">eduspace-core-engine.v1</span>
              </div>
              <div className="space-y-3">
                <div className="h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between px-4">
                  <span className="text-xs font-medium text-slate-300">Term 2 Report Card Processor</span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-900/30 px-2 py-0.5 rounded">Active</span>
                </div>
                <div className="h-24 rounded-xl bg-white/[0.01] border border-white/5 p-4 flex flex-col justify-between">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>SMS Automated Gateway Queue</span>
                    <span className="text-emerald-400">98% Sent</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[98%]" />
                  </div>
                </div>
                <div className="h-14 rounded-xl bg-white/[0.01] border border-white/5 flex items-center justify-between px-4 text-xs text-slate-400">
                  <span>Malawi National Curriculum Grading Schema</span>
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 9 Features Grid Block Section */}
      <section id="features" className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl text-left mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Engineered to Run Every Aspect of Your Institution
            </h2>
            <p className="mt-4 text-slate-400">
              Stop stitching modules together. EduSpace provides a unified management architecture out of the box, tailored for local administrative demands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feat, index) => (
              <div key={index} className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <feat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Block Section */}
      <section id="why-eduspace" className="py-24 max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Built for the Real Challenges Schools Face
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Many schools still struggle with tedious manual entry ledgers, broken data transparency, late result compilation timelines, and friction contacting parents. 
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              EduSpace eliminates manual paperwork delays completely, turning your administration records into live dashboards.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { t: 'Reduced Paperwork Burden', d: 'Digitize archives and eliminate storage overhead logs.' },
              { t: 'Rapid Assessment Output', d: 'Compile rankings and complete class report profiles in minutes.' },
              { t: 'Secure Family Connections', d: 'Keep parents completely loop-aware of attendance and records via shortcodes.' },
              { t: 'Actionable Performance Insights', d: 'Pinpoint drop-off risk factors before testing sequences start.' }
            ].map((v, i) => (
              <div key={i} className="p-5 rounded-2xl border border-white/5 bg-white/[0.01]">
                <span className="text-xs font-mono text-cyan-500 font-semibold">0{i+1}</span>
                <h4 className="font-bold text-white mt-2 text-base">{v.t}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding & Capture Form Block Section */}
      <section id="onboard" className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Deploy EduSpace for Your School
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">
            Fill out your basic structural variables below. The Mzatinova deployment desk will connect with you via WhatsApp or Email to coordinate data migration.
          </p>

          <div className="mt-12 text-left p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#05070f] relative overflow-hidden shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">School Institution Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Progress Private Primary"
                      className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all"
                      value={formData.schoolName}
                      onChange={e => setFormData({...formData, schoolName: e.target.value})}
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Contact Person / Director</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Director Administrator"
                      className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all"
                      value={formData.directorName}
                      onChange={e => setFormData({...formData, directorName: e.target.value})}
                      required 
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">WhatsApp Contact Number</label>
                    <input 
                      type="tel" 
                      placeholder="e.g., +265 999 000 000"
                      className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all font-mono"
                      value={formData.whatsapp}
                      onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Estimated Student Roster Size</label>
                    <select 
                      className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-slate-300 focus:outline-none focus:border-cyan-500 transition-all bg-[#05070f]"
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
                  className="w-full h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-[#05070f] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/10"
                >
                  Submit Onboarding Request <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Setup Request Captured</h3>
                <p className="text-sm text-slate-400 max-w-sm mx-auto">
                  Thank you. Your school size parameters are saved. A platform representative will message your WhatsApp line shortly to initialize your sandbox.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
        © 2026 Mzatinova Enterprise Architecture. All rights reserved. Powered by EduSpace Systems.
      </footer>
    </div>
  );
};

export default EduSpaceSales;