import { LogOut, Users, CalendarCheck, Wallet, GraduationCap, TrendingUp, Bell, FileText, ArrowLeft } from 'lucide-react';
// import { useAuth } from '@/contexts/AuthContext';

const STATS = [
  { icon: Users, label: 'Total Students', value: '1,284', delta: '+3.2%', color: 'from-cyan-400 to-blue-500' },
  { icon: CalendarCheck, label: 'Attendance Rate', value: '96.4%', delta: '+1.1%', color: 'from-emerald-400 to-teal-500' },
  { icon: Wallet, label: 'Fees Collected', value: 'MWK 42.8M', delta: '+8.7%', color: 'from-violet-400 to-purple-500' },
  { icon: GraduationCap, label: 'Avg. Performance', value: '78.2%', delta: '+2.4%', color: 'from-amber-400 to-orange-500' },
];

const ALERTS = [
  { icon: Bell, text: 'Term 2 exam results published for Form 3.', time: '2h ago' },
  { icon: FileText, text: '48 report cards generated and ready to send.', time: '5h ago' },
  { icon: Wallet, text: 'SMS reminders sent to 120 parents with pending fees.', time: '1d ago' },
  { icon: Users, text: '14 new student enrolments awaiting approval.', time: '2d ago' },
];

const BARS = [55, 70, 60, 85, 72, 90, 78, 95, 80, 88, 92, 84];
const MONTHS = ['J','F','M','A','M','J','J','A','S','O','N','D'];

export default function Portal({ onExit }: { onExit: () => void }) {
  // const { profile, user, signOut } = useAuth();
  const name = 'Admin'; // profile?.full_name || user?.email?.split('@')[0] || 'Admin';
  const org = 'Your Organization'; // profile?.organization || 'Your Organization';

  return (
    <div className="min-h-screen bg-[#05060f] text-white">
      <header className="border-b border-white/10 bg-[#070912]/80 backdrop-blur-xl sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
              <span className="font-bold text-[#05060f]">M</span>
            </div>
            <div>
              <p className="font-grotesk font-bold leading-tight">EduSpace Portal</p>
              <p className="text-[11px] text-slate-400">{org}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onExit} className="hidden sm:flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition">
              <ArrowLeft size={16} /> Back to site
            </button>
            {/* <button onClick={signOut} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:border-rose-400/40 hover:text-rose-300 transition">
              <LogOut size={15} /> Sign out
            </button> */}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="font-grotesk text-2xl lg:text-3xl font-bold">Welcome back, {name}</h1>
            <p className="text-slate-400 mt-1">Here's what's happening at {org} today.</p>
          </div>
          {/* <span className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-cyan-400/10 to-violet-500/10 border border-white/10 text-cyan-300">
            {profile?.plan || 'EduSpace Starter'}
          </span> */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4`}>
                <s.icon size={18} className="text-[#05060f]" />
              </div>
              <p className="text-2xl font-bold font-grotesk">{s.value}</p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-xs text-slate-400">{s.label}</p>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1"><TrendingUp size={11} /> {s.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold">Enrolment & Performance Trend</h2>
              <span className="text-xs text-slate-400">Last 12 months</span>
            </div>
            <div className="flex items-end gap-2 h-48">
              {BARS.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full rounded-t bg-gradient-to-t from-cyan-500/30 to-violet-400 hover:from-cyan-400 transition-all" style={{ height: `${h}%` }} />
                  <span className="text-[10px] text-slate-500">{MONTHS[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="font-semibold mb-5">Recent Activity</h2>
            <div className="space-y-4">
              {ALERTS.map((a, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <a.icon size={14} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-200 leading-snug">{a.text}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {['Manage Students', 'Record Attendance', 'Generate Reports', 'Send SMS'].map((q) => (
            <button key={q} className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-5 text-left hover:border-cyan-400/40 transition group">
              <p className="font-semibold group-hover:text-cyan-300 transition">{q}</p>
              <p className="text-xs text-slate-500 mt-1">Quick action</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
