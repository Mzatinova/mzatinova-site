import { useState } from 'react';
import { X, CheckCircle2, Beaker } from 'lucide-react';

const researchAreas = [
    'AI in Education',
    'Healthcare AI',
    'Agricultural AI',
    'Natural Language Processing',
    'Computer Vision',
    'Predictive Analytics',
    'Other'
];

export default function ResearchModal({ open, onClose, title }: { open: boolean; onClose: () => void; title: string }) {
    const [form, setForm] = useState({ name: '', email: '', organization: '', researchArea: '', message: '' });
    const [done, setDone] = useState(false);



    if (!open) return null;

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.email) return;
        try {
            await fetch('https://famous.ai/api/crm/6a1f0c67e3698e04fe29ba90/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: form.email,
                    name: form.name || undefined,
                    source: 'research-inquiry',
                    tags: ['research', 'ai-lab', 'website-lead'],
                    message: `Research Area: ${form.researchArea}\nMessage: ${form.message}\nOrganization: ${form.organization}`
                }),
            });
        } catch (e) { /* ignore */ }
        setDone(true);
    };

    const close = () => {
        setDone(false);
        setForm({ name: '', email: '', organization: '', researchArea: '', message: '' });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />
            <div className="relative w-full max-w-md rounded-3xl bg-[#0b0e1a] border border-white/10 p-7 shadow-2xl">
                <button onClick={close} className="absolute top-5 right-5 text-slate-400 hover:text-white"><X size={20} /></button>
                {done ? (
                    <div className="text-center py-10">
                        <CheckCircle2 className="mx-auto text-purple-400 mb-4" size={48} />
                        <p className="text-white font-semibold text-lg">Research Interest Submitted</p>
                        <p className="text-slate-400 text-sm mt-1">Our AI research team will reach out within 48 hours.</p>
                        <button onClick={close} className="mt-6 px-6 py-2.5 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-cyan-500">Done</button>
                    </div>
                ) : (
                    <>
                        <div className="flex items-center gap-2 mb-1">
                            <Beaker className="text-purple-400" size={24} />
                            <h3 className="font-grotesk text-2xl font-bold text-white">{title}</h3>
                        </div>
                        <p className="text-slate-400 text-sm mt-1">Interested in collaborating on AI research? Let's discuss.</p>
                        <form onSubmit={submit} className="mt-6 space-y-3">
                            <input
                                required
                                placeholder="Full Name"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-400/50 outline-none"
                            />
                            <input
                                required
                                type="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-400/50 outline-none"
                            />
                            <input
                                placeholder="Organization / Institution"
                                value={form.organization}
                                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-400/50 outline-none"
                            />
                            <select
                                value={form.researchArea}
                                onChange={(e) => setForm({ ...form, researchArea: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-400/50 outline-none"
                            >
                                <option value="" className="bg-[#0b0e1a] text-white">Select Research Area</option>
                                {researchAreas.map((area) => (
                                    <option key={area} value={area} className="bg-[#0b0e1a] text-white">
                                        {area}
                                    </option>
                                ))}
                            </select>
                            <textarea
                                placeholder="Tell us about your research interest or collaboration idea..."
                                rows={3}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-400/50 outline-none resize-none"
                            />
                            <button className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/40 transition-all">
                                Submit Research Interest
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}