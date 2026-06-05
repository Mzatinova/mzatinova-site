import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './ui/Reveal';
import { blogPosts } from '@/lib/data';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="relative py-28 bg-white dark:bg-[#05070f]">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeading
          center
          eyebrow="Insights"
          title={<>From the <span className="text-cyan-500">MzatiNova Blog</span></>}
          subtitle="Ideas on software, AI, cloud, and digital transformation across Africa."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {blogPosts.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <article className="group h-full rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500 text-white">{b.cat}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span>{b.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {b.read}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">{b.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-500">
                    Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
