import React from 'react';
import Reveal from './ui/Reveal';

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<Props> = ({ eyebrow, title, subtitle, center, light }) => (
  <Reveal className={center ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}>
    {eyebrow && (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4 ${light ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-400/30' : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20'}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> {eyebrow}
      </div>
    )}
    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>{subtitle}</p>
    )}
  </Reveal>
);

export default SectionHeading;
