import React from 'react';
import * as Icons from 'lucide-react';
import { Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './ui/Reveal';
import { services } from '@/lib/data';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-28 bg-slate-50 dark:bg-[#070b18] overflow-hidden">
      <div className="absolute inset-0 mn-grid opacity-[0.04] dark:opacity-[0.07]" />
      <div className="relative max-w-7xl mx-auto px-5">
        <SectionHeading
          center
          eyebrow="What We Build"
          title={<>Platform Engineering <span className="text-cyan-500">Services</span></>}
          subtitle="The capabilities that power our platforms — available to your organization."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = (Icons as any)[s.icon] || Icons.Circle;
            return (
              <Reveal key={s.name} delay={i * 100}>
                <div className="group relative h-full rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-8 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-2xl group-hover:from-cyan-500/20 transition-all" />
                  <span className="relative grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25">
                    <Icon className="w-7 h-7" />
                  </span>
                  <h3 className="relative mt-6 text-xl font-bold text-slate-900 dark:text-white">{s.name}</h3>
                  <ul className="relative mt-5 space-y-3">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <span className="grid place-items-center w-5 h-5 rounded-full bg-cyan-500/15 text-cyan-500 shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
