import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Users, CalendarCheck, CreditCard, FileSpreadsheet, GraduationCap, Moon, Sun } from 'lucide-react';
import { ThemeProvider, useTheme } from '@/lib/theme';
import { studentsSeed, initialState, StudentState, TERM_FEE } from '@/lib/demoData';
import { BOOKING_URL } from '@/lib/data';
import StudentList from '@/components/demo/StudentList';
import AttendancePanel from '@/components/demo/AttendancePanel';
import FeesPanel from '@/components/demo/FeesPanel';
import ExamsPanel from '@/components/demo/ExamsPanel';
import ReportCard from '@/components/demo/ReportCard';

type Tab = 'attendance' | 'fees' | 'exams';
const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: 'attendance', label: 'Attendance', icon: CalendarCheck },
  { id: 'fees', label: 'Fees', icon: CreditCard },
  { id: 'exams', label: 'Exams', icon: FileSpreadsheet },
];

const DemoInner: React.FC = () => {
  const { theme, toggle } = useTheme();
  const [state, setState] = useState<Record<string, StudentState>>(() => initialState());
  const [selected, setSelected] = useState(studentsSeed[0].id);
  const [tab, setTab] = useState<Tab>('attendance');
  const [query, setQuery] = useState('');

  const student = useMemo(() => studentsSeed.find((s) => s.id === selected)!, [selected]);

  const toggleAtt = (day: number) =>
    setState((p) => ({ ...p, [selected]: { ...p[selected], attendance: p[selected].attendance.map((v, i) => (i === day ? !v : v)) } }));

  const setGrade = (subject: string, score: number) =>
    setState((p) => ({ ...p, [selected]: { ...p[selected], grades: { ...p[selected].grades, [subject]: score } } }));

  const recordPayment = (id: string, amount: number) =>
    setState((p) => ({ ...p, [id]: { ...p[id], paid: Math.min(TERM_FEE, p[id].paid + amount) } }));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#05070f] text-slate-900 dark:text-white antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-[#05070f]/80 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500">
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>
            <div className="h-5 w-px bg-slate-200 dark:bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600"><GraduationCap className="w-4 h-4 text-white" /></span>
              <span className="font-bold">EduSpace <span className="text-cyan-500">Live Demo</span></span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={toggle} className="grid place-items-center w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-200 hover:border-cyan-400">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25">
              <Sparkles className="w-4 h-4" /> Request Full Demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero strip */}
      <div className="max-w-7xl mx-auto px-5 pt-8 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> Interactive Sandbox · No login required
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Experience EduSpace Before You Commit</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl text-sm">
          Click around a real mock school dashboard. Toggle attendance, record fees, enter exam grades, and watch the
          report card and AI insights regenerate instantly.
        </p>
      </div>

      {/* Dashboard */}
      <div className="max-w-7xl mx-auto px-5 pb-20 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3">
          <StudentList students={studentsSeed} state={state} selected={selected} onSelect={setSelected} query={query} setQuery={setQuery} />
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-500" />
              <div><div className="text-base font-bold">{studentsSeed.length}</div><div className="text-[10px] text-slate-400">Enrolled</div></div>
            </div>
            <div className="rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-500" />
              <div><div className="text-base font-bold">3</div><div className="text-[10px] text-slate-400">Classes</div></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5">
            <div className="flex gap-2 mb-6 p-1 rounded-xl bg-slate-100 dark:bg-white/5">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    tab === t.id ? 'bg-white dark:bg-white/10 text-cyan-600 dark:text-cyan-400 shadow' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white'
                  }`}
                >
                  <t.icon className="w-4 h-4" /> <span className="hidden sm:inline">{t.label}</span>
                </button>
              ))}
            </div>

            {tab === 'attendance' && <AttendancePanel student={student} state={state[selected]} toggle={toggleAtt} />}
            {tab === 'fees' && <FeesPanel students={studentsSeed} state={state} selected={selected} onSelect={setSelected} record={recordPayment} />}
            {tab === 'exams' && <ExamsPanel student={student} state={state[selected]} setGrade={setGrade} />}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <div className="flex items-center gap-2 mb-3">
              <FileSpreadsheet className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-bold">Auto-Generated Report Card</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 font-semibold">Live</span>
            </div>
            <ReportCard student={student} state={state[selected]} />
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow">
              <Sparkles className="w-4 h-4" /> Get EduSpace for Your School
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const EduSpaceDemo: React.FC = () => (
  <ThemeProvider>
    <DemoInner />
  </ThemeProvider>
);

export default EduSpaceDemo;
