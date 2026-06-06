import React, { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { subscribe } from '@/lib/data';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const cols = [
  { title: 'Platforms', links: ['EduSpace', 'HealthSpace (Planned)', 'AgriSpace (Planned)', 'FinSpace (Planned)'], target: 'platforms' },
  { title: 'Services', links: ['Software Development', 'Cloud Services', 'AI Solutions'], target: 'services' },
  { title: 'Company', links: ['About', 'AI Lab', 'Portfolio', 'Careers', 'Blog'], target: 'about' },
  { title: 'Contact', links: ['hello@mzatinova.com', '+265 888 447 122', 'Lilongwe, Malawi'], target: 'contact' },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const sub = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    await subscribe(email, 'footer-signup', ['newsletter', 'footer-signup']);
    setSent(true); setEmail('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer className="relative bg-[#05070f] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <button onClick={() => go('home')} className="flex items-center gap-2">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600">
                <Sparkles className="w-5 h-5 text-white" />
              </span>
              <span className="text-lg font-bold text-white"><span className="text-cyan-400">Mzatinova</span></span>
            </button>
            <p className="mt-4 text-sm text-slate-400 max-w-xs leading-relaxed">
              Software, Cloud, and AI Solutions Powered by Intelligent Platform Architecture.
            </p>
            <form onSubmit={sub} className="mt-6 flex gap-2 max-w-sm">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="mn-input !py-2.5 flex-1" />
              <button type="submit" className="px-4 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 text-sm whitespace-nowrap">Subscribe</button>
            </form>
            {sent && <p className="mt-2 flex items-center gap-1 text-xs text-green-400"><Check className="w-3 h-3" /> Subscribed!</p>}
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-bold text-white text-sm">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <button onClick={() => go(c.target)} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors text-left">{l}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">© 2026 Mzatinova. All rights reserved.</p>
          <p className="text-sm font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Built in Malawi. Ready for Africa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
