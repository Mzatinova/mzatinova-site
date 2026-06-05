import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Linkedin, Twitter, Facebook, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './ui/Reveal';
import { subscribe } from '@/lib/data';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    await subscribe(email, 'contact-form', ['contact', 'lead'], name);
    setSent(true);
    setEmail(''); setName(''); setMsg('');
    setTimeout(() => setSent(false), 4000);
  };

  const contacts = [
    { icon: Mail, label: 'Email', value: 'hello@mzatinova.com' },
    { icon: Phone, label: 'Phone', value: '+265 999 000 000' },
    { icon: MapPin, label: 'Location', value: 'Lilongwe, Malawi' },
  ];

  return (
    <section id="contact" className="relative py-28 bg-white dark:bg-[#05070f]">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeading
          center
          eyebrow="Get in Touch"
          title={<>Let's Build Something <span className="text-cyan-500">Intelligent</span></>}
          subtitle="Reach out for a demo, consultation, or partnership. We'd love to hear from you."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <form onSubmit={submit} className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-8">
              <div className="space-y-4">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="mn-input" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="mn-input" />
                <textarea rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="How can we help?" className="mn-input resize-none" />
                <button type="submit" className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow">
                  Send Message
                </button>
                {sent && <p className="flex items-center gap-2 text-sm text-green-500 font-medium"><Check className="w-4 h-4" /> Message sent — we'll respond shortly!</p>}
              </div>
            </form>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-4">
            {contacts.map((c) => (
              <div key={c.label} className="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-5">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white"><c.icon className="w-5 h-5" /></span>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{c.label}</div>
                  <div className="font-semibold text-slate-900 dark:text-white">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Github].map((I, i) => (
                <a key={i} href="#" className="grid place-items-center w-11 h-11 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-cyan-400 hover:text-cyan-500 transition-colors">
                  <I className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex-1 min-h-[160px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 relative mn-map">
              <div className="absolute inset-0 grid place-items-center">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur text-slate-800 dark:text-white text-sm font-semibold">
                  <MapPin className="w-4 h-4 text-cyan-500" /> Lilongwe, Malawi
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
