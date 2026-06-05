import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Send, CheckCircle2 } from 'lucide-react';
// import { supabase } from '@/lib/supabase';
import Reveal from './Reveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    setStatus('loading');
    try {
      // await supabase.from('mzatinova_leads').insert({ ...form, source: 'contact-form' });
      await fetch('https://famous.ai/api/crm/6a1f0c67e3698e04fe29ba90/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, name: form.name || undefined, source: 'contact-form', tags: ['contact', 'website-lead'] }),
      });
    } catch (e) { /* ignore */ }
    setStatus('done');
    setForm({ name: '', email: '', organization: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 bg-[#05060f]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Get In Touch</p>
          <h2 className="font-grotesk text-3xl lg:text-5xl font-bold text-white mt-3">Let's Build Together</h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          <Reveal>
            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'hello@mzatinova.com' },
                { icon: Phone, label: 'Phone', value: '+265 999 000 000' },
                { icon: MapPin, label: 'Office', value: 'Lilongwe, Malawi' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center shrink-0">
                    <c.icon size={20} className="text-[#05060f]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{c.label}</p>
                    <p className="text-white font-medium">{c.value}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3">
                {[Linkedin, Twitter, Facebook].map((Ic, i) => (
                  <a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all">
                    <Ic size={18} />
                  </a>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 h-56">
                <iframe
                  title="MzatiNova Office"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=33.6%2C-14.05%2C33.85%2C-13.9&layer=mapnik&marker=-13.98,33.78"
                  className="w-full h-full grayscale invert-[.9] contrast-125"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={submit} className="rounded-3xl bg-white/5 border border-white/10 p-7 space-y-4">
              {status === 'done' ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="mx-auto text-cyan-400 mb-4" size={48} />
                  <p className="text-white font-semibold text-lg">Message Sent</p>
                  <p className="text-slate-400 text-sm mt-1">We'll be in touch shortly.</p>
                  <button type="button" onClick={() => setStatus('idle')} className="mt-6 text-cyan-400 text-sm hover:underline">Send another</button>
                </div>
              ) : (
                <>
                  <input required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/50 outline-none transition" />
                  <input required type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/50 outline-none transition" />
                  <input placeholder="Organization" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/50 outline-none transition" />
                  <textarea required rows={4} placeholder="Tell us about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/50 outline-none transition resize-none" />
                  <button disabled={status === 'loading'} className="w-full py-3.5 rounded-xl font-semibold text-[#05060f] bg-gradient-to-r from-cyan-400 to-violet-500 hover:shadow-lg hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-60">
                    {status === 'loading' ? 'Sending...' : <>Send Message <Send size={16} /></>}
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
