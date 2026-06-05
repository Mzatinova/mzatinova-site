import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
// import { supabase } from '@/lib/supabase';

export default function DemoModal({ open, onClose, title }: { open: boolean; onClose: () => void; title: string }) {
  const [form, setForm] = useState({ name: '', email: '', organization: '' });
  const [done, setDone] = useState(false);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    try {
      // await supabase.from('mzatinova_leads').insert({ ...form, source: 'demo-request', message: title });
      await fetch('https://famous.ai/api/crm/6a1f0c67e3698e04fe29ba90/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, name: form.name || undefined, source: 'demo-request', tags: ['demo', 'website-lead'] }),
      });
    } catch (e) { /* ignore */ }
    setDone(true);
  };

  const close = () => { setDone(false); setForm({ name: '', email: '', organization: '' }); onClose(); };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />
      <div className="relative w-full max-w-md rounded-3xl bg-[#0b0e1a] border border-white/10 p-7 shadow-2xl">
        <button onClick={close} className="absolute top-5 right-5 text-slate-400 hover:text-white"><X size={20} /></button>
        {done ? (
          <div className="text-center py-10">
            <CheckCircle2 className="mx-auto text-cyan-400 mb-4" size={48} />
            <p className="text-white font-semibold text-lg">Request Received</p>
            <p className="text-slate-400 text-sm mt-1">Our team will reach out within 24 hours.</p>
            <button onClick={close} className="mt-6 px-6 py-2.5 rounded-full text-[#05060f] font-semibold bg-gradient-to-r from-cyan-400 to-violet-500">Done</button>
          </div>
        ) : (
          <>
            <h3 className="font-grotesk text-2xl font-bold text-white">{title}</h3>
            <p className="text-slate-400 text-sm mt-1">Tell us a little about you and we'll set things up.</p>
            <form onSubmit={submit} className="mt-6 space-y-3">
              <input required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/50 outline-none" />
              <input required type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/50 outline-none" />
              <input placeholder="Organization" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/50 outline-none" />
              <button className="w-full py-3.5 rounded-xl font-semibold text-[#05060f] bg-gradient-to-r from-cyan-400 to-violet-500 hover:shadow-lg hover:shadow-cyan-500/40 transition-all">Submit Request</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
