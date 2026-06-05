export interface Student {
  id: string;
  name: string;
  klass: string;
  gender: 'M' | 'F';
  guardian: string;
}

export const SUBJECTS = ['Mathematics', 'English', 'Science', 'Geography', 'ICT', 'Chichewa'];

export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export const TERM_FEE = 150000; // MWK

export interface StudentState {
  attendance: boolean[]; // length = DAYS
  grades: Record<string, number>; // subject -> 0-100
  paid: number; // amount paid
}

export const studentsSeed: Student[] = [
  { id: 's1', name: 'Thandiwe Banda', klass: 'Form 2A', gender: 'F', guardian: 'Grace Banda' },
  { id: 's2', name: 'Chikondi Phiri', klass: 'Form 2A', gender: 'M', guardian: 'James Phiri' },
  { id: 's3', name: 'Mphatso Gondwe', klass: 'Form 2A', gender: 'M', guardian: 'Ruth Gondwe' },
  { id: 's4', name: 'Tadala Mwale', klass: 'Form 2B', gender: 'F', guardian: 'Daniel Mwale' },
  { id: 's5', name: 'Yamikani Nkhoma', klass: 'Form 2B', gender: 'M', guardian: 'Esther Nkhoma' },
  { id: 's6', name: 'Limbani Kumwenda', klass: 'Form 2B', gender: 'M', guardian: 'Agnes Kumwenda' },
  { id: 's7', name: 'Chimwemwe Zulu', klass: 'Form 2C', gender: 'F', guardian: 'Peter Zulu' },
  { id: 's8', name: 'Madalitso Moyo', klass: 'Form 2C', gender: 'F', guardian: 'Sarah Moyo' },
];

function seedGrades(base: number): Record<string, number> {
  const g: Record<string, number> = {};
  SUBJECTS.forEach((s, i) => {
    g[s] = Math.min(98, Math.max(35, base + ((i * 7) % 23) - 8));
  });
  return g;
}

export function initialState(): Record<string, StudentState> {
  const map: Record<string, StudentState> = {};
  studentsSeed.forEach((s, idx) => {
    map[s.id] = {
      attendance: DAYS.map((_, d) => (idx + d) % 4 !== 0),
      grades: seedGrades(55 + idx * 4),
      paid: idx % 3 === 0 ? TERM_FEE : Math.round((TERM_FEE * (idx % 3 === 1 ? 0.5 : 1)) / 1) * (idx % 3 === 1 ? 1 : 1),
    };
  });
  // make some partial payments deterministic
  map['s2'].paid = 75000;
  map['s4'].paid = 0;
  map['s7'].paid = 100000;
  return map;
}

export function gradeLetter(score: number): { letter: string; remark: string; color: string } {
  if (score >= 80) return { letter: 'A', remark: 'Distinction', color: 'text-emerald-500' };
  if (score >= 70) return { letter: 'B', remark: 'Very Good', color: 'text-cyan-500' };
  if (score >= 60) return { letter: 'C', remark: 'Good', color: 'text-blue-500' };
  if (score >= 50) return { letter: 'D', remark: 'Pass', color: 'text-amber-500' };
  return { letter: 'F', remark: 'Needs Support', color: 'text-rose-500' };
}

export function average(grades: Record<string, number>): number {
  const vals = Object.values(grades);
  if (!vals.length) return 0;
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}

export const fmtMWK = (n: number) => 'MK ' + n.toLocaleString('en-US');
