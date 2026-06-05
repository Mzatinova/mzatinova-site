import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { Student, StudentState, SUBJECTS, average, gradeLetter } from '@/lib/demoData';

interface Props {
  student: Student;
  state: StudentState;
  setGrade: (subject: string, score: number) => void;
}

const ExamsPanel: React.FC<Props> = ({ student, state, setGrade }) => {
  const avg = average(state.grades);
  const g = gradeLetter(avg);

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Exam Grade Entry</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{student.name} · End of Term Exams</p>
        </div>
        <div className="text-right">
          <div className={`text-2xl font-bold ${g.color}`}>{avg}% · {g.letter}</div>
          <div className="text-xs text-slate-400">Average</div>
        </div>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Enter or adjust scores — the report card regenerates automatically.</p>
      <div className="space-y-2.5">
        {SUBJECTS.map((sub) => {
          const score = state.grades[sub];
          const sg = gradeLetter(score);
          return (
            <div key={sub} className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-4 py-2.5">
              <span className="flex-1 text-sm font-medium text-slate-800 dark:text-slate-200">{sub}</span>
              <div className="flex items-center gap-2">
                <button onClick={() => setGrade(sub, Math.max(0, score - 5))} className="grid place-items-center w-7 h-7 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-cyan-400"><Minus className="w-3.5 h-3.5" /></button>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={score}
                  onChange={(e) => setGrade(sub, Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
                  className="w-14 text-center py-1.5 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm font-semibold outline-none focus:border-cyan-400"
                />
                <button onClick={() => setGrade(sub, Math.min(100, score + 5))} className="grid place-items-center w-7 h-7 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-cyan-400"><Plus className="w-3.5 h-3.5" /></button>
              </div>
              <span className={`w-7 text-center text-sm font-bold ${sg.color}`}>{sg.letter}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExamsPanel;
