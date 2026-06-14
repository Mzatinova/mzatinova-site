import React from 'react';
import { Lightbulb, Award, ShieldCheck, HeartHandshake, GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './ui/Reveal';
import { IMG } from '@/lib/data';

const values = [
  { t: 'Innovation', icon: Lightbulb },
  { t: 'Excellence', icon: Award },
  { t: 'Integrity', icon: ShieldCheck },
  { t: 'Customer Success', icon: HeartHandshake },
  { t: 'Continuous Learning', icon: GraduationCap },
];

const About: React.FC = () => {
  return (
   <section id="about" className="relative py-28 bg-slate-50 dark:bg-[#070b18] overflow-hidden">
  <div className="absolute inset-0 mn-grid opacity-[0.04] dark:opacity-[0.07]" />
  <div className="relative max-w-7xl mx-auto px-5">
    <SectionHeading
      center
      eyebrow="Who We Are"
      title={<>Built in Malawi. <span className="text-cyan-500">Designed for Africa.</span></>}
    />
    
    <div className="grid lg:grid-cols-2 gap-14 items-center mt-14">
      {/* Left column - Mission, Vision, Values */}
      <div>
        <div className="space-y-6">
          {/* Mission Card */}
          <div className="rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6">
            <h3 className="font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">To empower organizations through software, cloud, and AI solutions.</p>
          </div>
          
          {/* Vision Card */}
          <div className="rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6">
            <h3 className="font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">To build Africa's leading intelligent platform company.</p>
          </div>

          {/* Core Values Card */}
          <div className="rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Our Core Values</h3>
            <div className="flex flex-wrap gap-2.5">
              {values.map((v) => (
                <span key={v.t} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors hover:border-cyan-500/30">
                  <v.icon className="w-3.5 h-3.5 text-cyan-500" /> {v.t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right column - Story and Team */}
      <Reveal delay={120}>
        <div className="space-y-4">
          <div className="rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6">
            <h4 className="font-bold text-slate-900 dark:text-white">Our Story</h4>
            <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded in Malawi, <span className="text-cyan-500">Mzatinova</span> is building a growing ecosystem of
              technology platforms designed to solve practical challenges across
              education, healthcare, agriculture, financial services, and other
              emerging sectors across Africa. Our goal is to create practical,
              scalable solutions that help organizations operate more effectively
              and prepare for the future.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 mt-4">
            <h4 className="font-bold text-slate-900 dark:text-white mb-5">Our Team</h4>
            <div className="flex items-center gap-4">
              <img src={IMG.founder} alt="Wadi Mkweza" className="w-20 h-20 rounded-xl object-cover border border-slate-200 dark:border-white/10" />
              <div>
                <h5 className="font-semibold text-slate-900 dark:text-white">Wadi Mkweza</h5>
                <p className="text-cyan-500 text-sm font-medium">Founder & CEO</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Full-Stack AI Engineer and Architect dedicated to building the digital infrastructure for Africa's emerging sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>
  );
};

export default About;
