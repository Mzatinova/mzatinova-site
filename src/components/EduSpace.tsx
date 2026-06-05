import React from 'react';
import * as Icons from 'lucide-react';
import { ArrowRight, MousePointerClick } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import Reveal from './ui/Reveal';
import VideoBackdrop from './ui/VideoBackdrop';
import { eduFeatures, IMG } from '@/lib/data';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const EduSpace: React.FC = () => {
  return (
    <section id="platforms" className="relative py-28 bg-slate-50 dark:bg-[#070b18] overflow-hidden">
      <div className="absolute inset-0 mn-grid opacity-[0.04] dark:opacity-[0.07]" />
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Flagship Platform · EduSpace"
              title={<>The Intelligent Platform for <span className="text-cyan-500">Modern Schools</span></>}
              subtitle="A complete cloud-based school management and analytics platform that streamlines administration, communication, and academic performance tracking."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/eduspace-demo" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow">
                <MousePointerClick className="w-4 h-4" /> Try Live Demo
              </Link>
       <Link 
  to="/platforms/eduspace" 
  target="_blank"
  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 border border-cyan-500/30 bg-cyan-500/[0.02] hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
>
  View more on EduSpace 
  <ArrowRight className="w-4 h-4 text-cyan-500 group-hover:text-white group-hover:translate-x-1 transition-transform" />
</Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[['12K+', 'Students'], ['320+', 'Teachers'], ['98%', 'Satisfaction']].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-500">{v}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <Link to="/eduspace-demo" className="group block relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
              <div className="relative aspect-video">
                <VideoBackdrop image={IMG.dashboard} overlay="from-transparent via-transparent to-[#05070f]/30" />
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 font-semibold text-sm shadow-xl">
                    <MousePointerClick className="w-4 h-4" /> Open Interactive Demo
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
                  <span className="text-white text-sm font-semibold">Live Attendance Dashboard</span>
                  <span className="text-cyan-300 text-xs flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Streaming</span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>

        {/* <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {eduFeatures.map((f, i) => {
            const Icon = (Icons as any)[f.icon] || Icons.Circle;
            return (
              <Reveal key={f.t} delay={i * 60}>
                <div className="group h-full rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-6 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10 transition-all hover:-translate-y-1">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-600/15 text-cyan-500 group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-slate-900 dark:text-white">{f.t}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div> */}

        {/* Why EduSpace */}
<div className="mt-24 max-w-5xl mx-auto">
  <div className="text-center">
    <span className="text-cyan-500 font-semibold uppercase tracking-wider">
      Why EduSpace?
    </span>

    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
      Built for the Real Challenges Schools Face
    </h2>

    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
      Many schools still struggle with manual processes, disconnected records,
      delayed reporting, and limited visibility into student performance.
      EduSpace was designed to simplify administration and provide actionable
      insights through a secure cloud-based platform built for African schools.
    </p>
  </div>

  <div className="mt-12 grid md:grid-cols-4 gap-5">
    {[
      {
        title: "Reduced Paperwork",
        text: "Digitize student records, attendance, and reports."
      },
      {
        title: "Faster Reporting",
        text: "Generate report cards and analytics in minutes."
      },
      {
        title: "Better Communication",
        text: "Keep parents, teachers, and administrators connected."
      },
      {
        title: "Real-Time Insights",
        text: "Monitor performance, attendance, and trends instantly."
      }
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-6"
      >
        <h3 className="font-bold text-slate-900 dark:text-white">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {item.text}
        </p>
      </div>
    ))}  
  </div>
</div>
      </div>
    </section>
  );
};

export default EduSpace;
