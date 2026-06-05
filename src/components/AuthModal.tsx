import { useState } from 'react';
import { X, Lock } from 'lucide-react';
// import { useAuth } from '@/contexts/AuthContext';


export default function AuthModal({ open, onClose, onSuccess }: { open: boolean; onClose: () => void; onSuccess: () => void }) {
  // const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [form, setForm] = useState({ email: '', password: '', fullName: '', organization: '' });
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  if (!open) return null;

  // const submit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setErr('');
  //   setBusy(true);
  //   const res = mode === 'login'
  //     ? await signIn(form.email, form.password)
  //     : await signUp(form.email, form.password, form.fullName, form.organization);
  //   setBusy(false);
  //   if (res.error) { setErr(res.error); return; }
  //   onSuccess();
  // };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-3xl bg-[#0b0e1a] border border-white/10 p-7 shadow-2xl">
        <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-white"><X size={20} /></button>
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center mb-4">
          <Lock size={22} className="text-[#05060f]" />
        </div>
        <h3 className="font-grotesk text-2xl font-bold text-white">
          {mode === 'login' ? 'EduSpace Client Login' : 'Create Portal Account'}
        </h3>
        <p className="text-slate-400 text-sm mt-1">
          {mode === 'login' ? 'Access your private school portal.' : 'Set up access for your organization.'}
        </p>

        {err && <div className="mt-4 text-sm text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg px-3 py-2">{err}</div>}

        {/* <form onSubmit={submit} className="mt-5 space-y-3">
          {mode === 'signup' && (
            <>
              <input required placeholder="Full Name" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/50 outline-none" />
              <input required placeholder="Organization / School Name" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/50 outline-none" />
            </>
          )}
          <input required type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/50 outline-none" />
          <input required type="password" minLength={6} placeholder="Password (min 6 chars)" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/50 outline-none" />
          <button disabled={busy} className="w-full py-3.5 rounded-xl font-semibold text-[#05060f] bg-gradient-to-r from-cyan-400 to-violet-500 hover:shadow-lg hover:shadow-cyan-500/40 transition-all disabled:opacity-60">
            {busy ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form> */}

        <p className="text-center text-sm text-slate-400 mt-5">
          {mode === 'login' ? "Don't have access?" : 'Already registered?'}{' '}
          <button onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setErr(''); }} className="text-cyan-400 font-medium hover:underline">
            {mode === 'login' ? 'Request portal access' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
}
