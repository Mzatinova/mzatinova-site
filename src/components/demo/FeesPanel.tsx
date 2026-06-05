import React from 'react';
import { Student, StudentState, TERM_FEE, fmtMWK } from '@/lib/demoData';

interface Props {
  students: Student[];
  state: Record<string, StudentState>;
  selected: string;
  onSelect: (id: string) => void;
  record: (id: string, amount: number) => void;
}

const FeesPanel: React.FC<Props> = ({ students, state, selected, onSelect, record }) => {
  const totalBilled = students.length * TERM_FEE;
  const totalPaid = students.reduce((a, s) => a + state[s.id].paid, 0);
  const collection = Math.round((totalPaid / totalBilled) * 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Fees Management</h3>
        <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold">Term Fee {fmtMWK(TERM_FEE)}</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {[['Billed', fmtMWK(totalBilled)], ['Collected', fmtMWK(totalPaid)], ['Rate', collection + '%']].map(([l, v]) => (
          <div key={l} className="rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-3 text-center">
            <div className="text-xs text-slate-400">{l}</div>
            <div className="text-base font-bold text-slate-900 dark:text-white mt-1">{v}</div>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-xs">
              <th className="text-left font-semibold px-4 py-3">Student</th>
              <th className="text-right font-semibold px-3 py-3">Paid</th>
              <th className="text-right font-semibold px-3 py-3">Balance</th>
              <th className="text-center font-semibold px-3 py-3">Status</th>
              <th className="text-center font-semibold px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            {students.map((s) => {
              const paid = state[s.id].paid;
              const bal = TERM_FEE - paid;
              const cleared = bal <= 0;
              return (
                <tr key={s.id} className={`${selected === s.id ? 'bg-cyan-500/5' : ''} hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer`} onClick={() => onSelect(s.id)}>
                  <td className="px-4 py-3">
                    <span className="font-semibold text-slate-900 dark:text-white">{s.name}</span>
                    <span className="block text-xs text-slate-400">{s.klass}</span>
                  </td>
                  <td className="px-3 py-3 text-right text-slate-700 dark:text-slate-300">{fmtMWK(paid)}</td>
                  <td className={`px-3 py-3 text-right font-semibold ${cleared ? 'text-emerald-500' : 'text-rose-500'}`}>{fmtMWK(Math.max(0, bal))}</td>
                  <td className="px-3 py-3 text-center">
                    <span className={`text-[11px] font-bold px-2 py-1 rounded-full ${cleared ? 'bg-emerald-500/15 text-emerald-500' : paid > 0 ? 'bg-amber-500/15 text-amber-500' : 'bg-rose-500/15 text-rose-500'}`}>
                      {cleared ? 'Cleared' : paid > 0 ? 'Partial' : 'Unpaid'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      disabled={cleared}
                      onClick={(e) => { e.stopPropagation(); record(s.id, Math.min(50000, bal)); }}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition ${cleared ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed' : 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/30'}`}
                    >
                      {cleared ? 'Paid' : '+ MK 50,000'}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeesPanel;
