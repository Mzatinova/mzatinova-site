import React from 'react';
import { Sparkles, GraduationCap, Brain } from 'lucide-react';
import { Student, StudentState, SUBJECTS, DAYS, TERM_FEE, average, gradeLetter, fmtMWK } from '@/lib/demoData';

interface Props {
  student: Student;
  state: StudentState;
}

const ReportCard: React.FC<Props> = ({ student, state }) => {
  const avg = average(state.grades);
  const g = gradeLetter(avg);
  const present = state.attendance.filter(Boolean).length;
  const attRate = Math.round((present / DAYS.length) * 100);
  const balance = Math.max(0, TERM_FEE - state.paid);

  const best = SUBJECTS.reduce((a, b) => (state.grades[b] > state.grades[a] ? b : a), SUBJECTS[0]);
  const weak = SUBJECTS.reduce((a, b) => (state.grades[b] < state.grades[a] ? b : a), SUBJECTS[0]);

  const insight =
    avg >= 75
      ? `${student.name.split(' ')[0]} is performing strongly, excelling in ${best}. Maintain momentum and consider enrichment work.`
      : avg >= 55
      ? `${student.name.split(' ')[0]} shows solid progress. Targeted support in ${weak} could lift the overall average.`
      : `${student.name.split(' ')[0]} would benefit from focused intervention, especially in ${weak}. Early support is recommended.`;

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0e1f]">
      <div className="relative px-6 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 mn-grid opacity-10" />
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-white/15"><GraduationCap className="w-5 h-5" /></span>
            <div>
              <div className="text-sm font-bold leading-none">MzatiNova Academy</div>
              <div className="text-[10px] text-white/70 mt-1">EduSpace · Term 2 Report Card</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-extrabold leading-none">{g.letter}</div>
            <div className="text-[10px] text-white/70 mt-1">{avg}% Avg</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-5">
          <span className={`grid place-items-center w-12 h-12 rounded-full text-white font-bold ${student.gender === 'F' ? 'bg-gradient-to-br from-pink-500 to-rose-500' : 'bg-gradient-to-br from-cyan-500 to-blue-600'}`}>
            {student.name.split(' ').map((n) => n[0]).join('')}
          </span>
          <div>
            <div className="font-bold text-slate-900 dark:text-white">{student.name}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{student.klass} · Guardian: {student.guardian}</div>
          </div>
        </div>

        <table className="w-full text-sm mb-5">
          <thead>
            <tr className="text-slate-400 text-xs border-b border-slate-200 dark:border-white/10">
              <th className="text-left font-semibold py-2">Subject</th>
              <th className="text-right font-semibold py-2">Score</th>
              <th className="text-right font-semibold py-2">Grade</th>
              <th className="text-right font-semibold py-2">Remark</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            {SUBJECTS.map((sub) => {
              const sg = gradeLetter(state.grades[sub]);
              return (
                <tr key={sub}>
                  <td className="py-2 text-slate-700 dark:text-slate-300">{sub}</td>
                  <td className="py-2 text-right font-semibold text-slate-900 dark:text-white">{state.grades[sub]}</td>
                  <td className={`py-2 text-right font-bold ${sg.color}`}>{sg.letter}</td>
                  <td className={`py-2 text-right text-xs ${sg.color}`}>{sg.remark}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="rounded-xl bg-slate-50 dark:bg-white/5 p-3 text-center">
            <div className="text-xs text-slate-400">Average</div>
            <div className={`text-lg font-bold ${g.color}`}>{avg}%</div>
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-white/5 p-3 text-center">
            <div className="text-xs text-slate-400">Attendance</div>
            <div className={`text-lg font-bold ${attRate >= 80 ? 'text-emerald-500' : 'text-amber-500'}`}>{attRate}%</div>
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-white/5 p-3 text-center">
            <div className="text-xs text-slate-400">Fees Balance</div>
            <div className={`text-lg font-bold ${balance === 0 ? 'text-emerald-500' : 'text-rose-500'}`}>{balance === 0 ? 'Cleared' : fmtMWK(balance)}</div>
          </div>
        </div>

        <div className="rounded-xl border border-violet-400/30 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <Brain className="w-4 h-4 text-violet-500" />
            <span className="text-xs font-bold text-violet-500 tracking-wide uppercase">AI-Powered Insight</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{insight}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
