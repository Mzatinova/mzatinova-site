import React from 'react';
import { Brain, Cpu, Network, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './ui/Reveal';
import VideoBackdrop from './ui/VideoBackdrop';
import { aiProjects, IMG } from '@/lib/data';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const AILab: React.FC = () => {
  return (
    <section id="ai-lab" className="relative py-28 overflow-hidden">
      <VideoBackdrop image={IMG.ai} overlay="from-[#05070f]/85 via-[#070b18]/85 to-[#05070f]/95" />
      <div className="relative max-w-7xl mx-auto px-5">
       <SectionHeading
  center
  light
  eyebrow="Research & Development"
  title={<>Mzatinova <span className="text-cyan-400">AI Lab</span></>}
  subtitle="Researching and developing practical AI solutions for African organizations."
/>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {aiProjects.map((p, i) => {
            const icons = [Brain, Cpu, Network];
            const Icon = icons[i % 3];
            return (
              <Reveal key={p.name} delay={i * 100}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 hover:border-cyan-400/50 transition-all">
                  <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-lg">
                    <Icon className="w-7 h-7" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-white">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.desc}</p>
                  <div className="mt-6">
                    <div className="flex justify-between text-xs text-slate-400 mb-2">
                      <span>Development</span>
                      <span>{p.progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${p.progress}%` }} />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 text-center" delay={120}>
          <button onClick={() => go('careers')} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-500 to-cyan-500 shadow-xl shadow-violet-500/25 hover:shadow-cyan-500/40 transition-shadow">
            Join Our Research <ArrowRight className="w-4 h-4" />
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default AILab;
