import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './ui/Reveal';
import { platforms, ROADMAP } from '@/lib/data';

const Roadmap: React.FC = () => {
  return (
    <section className="relative py-28 bg-white dark:bg-[#05070f] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-5">
        <SectionHeading
          center
          eyebrow="Enterprise Platforms"
          title={<>Intelligent Platform <span className="text-cyan-500">Ecosystem</span></>}
          subtitle="A growing family of industry-focused solutions solving real-world challenges across sectors."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROADMAP.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:border-cyan-400/40 transition-all">
                <div className="relative h-40 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060f] to-transparent" />
                  <span className={`absolute top-3 right-3 text-[11px] font-semibold px-3 py-1 rounded-full ${p.status === 'Active' ? 'bg-cyan-400 text-[#05060f]' : 'bg-white/10 text-slate-300 border border-white/15'}`}>
                    {p.status}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className={`font-grotesk text-xl font-bold bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>{p.name}</h3>
                  <p className="text-slate-400 text-sm mt-1">{p.fullDesc}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 text-sm mt-4 hover:gap-2 transition-all group/link"
                  >
                    {p.linkText}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                {/* <div className="p-6">
                    <h3 className={`font-grotesk text-xl font-bold bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>{p.name}</h3>
                    <p className="text-slate-400 text-sm mt-1">{p.desc}</p>
                  </div> */}
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Roadmap;
