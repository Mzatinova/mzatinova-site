import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Student, StudentState, average, gradeLetter } from '@/lib/demoData';

interface Props {
  students: Student[];
  state: Record<string, StudentState>;
  selected: string;
  onSelect: (id: string) => void;
  query: string;
  setQuery: (q: string) => void;
}

const StudentList: React.FC<Props> = ({ students, state, selected, onSelect, query, setQuery }) => {
  const filtered = students.filter(
    (s) => s.name.toLowerCase().includes(query.toLowerCase()) || s.klass.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] overflow-hidden">
      <div className="p-4 border-b border-slate-200 dark:border-white/10">
        <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-3">Students <span className="text-slate-400 font-normal">({students.length})</span></h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search students…"
            className="w-full pl-9 pr-3 py-2 rounded-lg text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white outline-none focus:border-cyan-400 transition"
          />
        </div>
      </div>
      <div className="max-h-[460px] overflow-y-auto divide-y divide-slate-100 dark:divide-white/5">
        {filtered.map((s) => {
          const avg = average(state[s.id].grades);
          const g = gradeLetter(avg);
          return (
            <button
              key={s.id}
              onClick={() => onSelect(s.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                selected === s.id ? 'bg-cyan-500/10' : 'hover:bg-slate-50 dark:hover:bg-white/5'
              }`}
            >
              <span className={`grid place-items-center w-9 h-9 rounded-full text-white text-xs font-bold shrink-0 ${s.gender === 'F' ? 'bg-gradient-to-br from-pink-500 to-rose-500' : 'bg-gradient-to-br from-cyan-500 to-blue-600'}`}>
                {s.name.split(' ').map((n) => n[0]).join('')}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-semibold text-slate-900 dark:text-white truncate">{s.name}</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">{s.klass}</span>
              </span>
              <span className={`text-sm font-bold ${g.color}`}>{g.letter}</span>
              <ChevronRight className={`w-4 h-4 transition-colors ${selected === s.id ? 'text-cyan-500' : 'text-slate-300 dark:text-slate-600'}`} />
            </button>
          );
        })}
        {filtered.length === 0 && <p className="px-4 py-8 text-center text-sm text-slate-400">No students found.</p>}
      </div>
    </div>
  );
};

export default StudentList;
