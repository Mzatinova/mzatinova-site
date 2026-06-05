import React from 'react';
import { Check, X } from 'lucide-react';
import { Student, StudentState, DAYS } from '@/lib/demoData';

interface Props {
  student: Student;
  state: StudentState;
  toggle: (dayIndex: number) => void;
}

const AttendancePanel: React.FC<Props> = ({ student, state, toggle }) => {
  const present = state.attendance.filter(Boolean).length;
  const rate = Math.round((present / DAYS.length) * 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Weekly Attendance</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{student.name} · {student.klass}</p>
        </div>
        <div className="text-right">
          <div className={`text-2xl font-bold ${rate >= 80 ? 'text-emerald-500' : rate >= 60 ? 'text-amber-500' : 'text-rose-500'}`}>{rate}%</div>
          <div className="text-xs text-slate-400">{present}/{DAYS.length} days</div>
        </div>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Tap a day to mark present / absent — totals update live.</p>
      <div className="grid grid-cols-5 gap-3">
        {DAYS.map((d, i) => {
          const ok = state.attendance[i];
          return (
            <button
              key={d}
              onClick={() => toggle(i)}
              className={`flex flex-col items-center gap-2 py-4 rounded-xl border transition-all ${
                ok
                  ? 'border-emerald-400/50 bg-emerald-500/10'
                  : 'border-rose-400/40 bg-rose-500/10'
              }`}
            >
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{d}</span>
              <span className={`grid place-items-center w-9 h-9 rounded-full text-white ${ok ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                {ok ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
              </span>
              <span className={`text-[10px] font-bold ${ok ? 'text-emerald-500' : 'text-rose-500'}`}>{ok ? 'Present' : 'Absent'}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 h-2 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-500 ${rate >= 80 ? 'bg-emerald-500' : rate >= 60 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${rate}%` }} />
      </div>
    </div>
  );
};

export default AttendancePanel;
