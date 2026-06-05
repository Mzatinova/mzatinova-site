import React, { useState } from 'react';
import { Rocket, Heart, GraduationCap, Globe, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './ui/Reveal';
import { jobs, subscribe } from '@/lib/data';

const benefits = [
  { t: 'Remote-first culture', icon: Globe },
  { t: 'Learning stipend', icon: GraduationCap },
  { t: 'Health coverage', icon: Heart },
  { t: 'Real impact work', icon: Rocket },
];

const Careers: React.FC = () => {
  const [role, setRole] = useState(jobs[0].role);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);

  const apply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    await subscribe(email, 'careers', ['careers', 'applicant', role], name);
    setSent(true);
    setEmail('');
    setName('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="careers" className="relative py-28 bg-slate-50 dark:bg-[#070b18] overflow-hidden">
      <div className="absolute inset-0 mn-grid opacity-[0.04] dark:opacity-[0.07]" />
      <div className="relative max-w-7xl mx-auto px-5">
        <SectionHeading
          center
          eyebrow="Careers"
          title={<>Build the Future <span className="text-cyan-500">With Us</span></>}
          subtitle="Join a team of builders shaping Africa's intelligent platforms. We hire for curiosity and craft."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((b) => (
                <div key={b.t} className="flex items-center gap-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-500"><b.icon className="w-5 h-5" /></span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{b.t}</span>
                </div>
              ))}
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Open Positions & Internships</h3>
            <div className="space-y-2">
              {jobs.map((j) => (
                <button
                  key={j.role}
                  onClick={() => setRole(j.role)}
                  className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-xl border transition-all ${
                    role === j.role ? 'border-cyan-400 bg-cyan-500/10' : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:border-cyan-400/50'
                  }`}
                >
                  <span className="font-medium text-slate-800 dark:text-white text-sm">{j.role}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{j.type} · {j.loc}</span>
                </button>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <form onSubmit={apply} className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Apply Now</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Applying for: <span className="text-cyan-500 font-semibold">{role}</span></p>
              <div className="mt-6 space-y-4">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="mn-input" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="mn-input" />
                <textarea rows={3} placeholder="Tell us about yourself" className="mn-input resize-none" />
                <button type="submit" className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow">
                  Submit Application
                </button>
                {sent && (
                  <p className="flex items-center gap-2 text-sm text-green-500 font-medium"><Check className="w-4 h-4" /> Application received — we'll be in touch!</p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Careers;
