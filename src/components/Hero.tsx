import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Activity, MousePointerClick } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoBackdrop from './ui/VideoBackdrop';
import { IMG } from '@/lib/data';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const FloatCard: React.FC<{ icon: React.ReactNode; label: string; value: string; className: string; delay: string }> = ({
  icon, label, value, className, delay,
}) => (
  <div
    className={`absolute hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mn-float ${className}`}
    style={{ animationDelay: delay }}
  >
    <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white">{icon}</span>
    <div>
      <div className="text-white font-bold text-lg leading-none">{value}</div>
      <div className="text-white/60 text-xs mt-1">{label}</div>
    </div>
  </div>
);

// const Hero: React.FC = () => {
export default function Hero({ onDemo, onTalk }: { onDemo: () => void; onTalk: () => void }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <VideoBackdrop image={IMG.hero} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Software • Cloud • AI
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Building Intelligent{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Digital Platforms
            </span>{' '}
       
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
          Modernizing organizations through intelligent, industry-focused platforms.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
                <button onClick={onDemo} className="group px-7 py-3.5 rounded-full font-semibold text-[#05060f] bg-gradient-to-r from-cyan-400 to-violet-500 hover:shadow-xl hover:shadow-cyan-500/40 transition-all flex items-center gap-2">
            Request Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
            <button
              onClick={() => go('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Play className="w-4 h-4" /> Talk to Us
            </button>
          </div>

          {/* <Link to="/eduspace-demo" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors">
            <MousePointerClick className="w-4 h-4" /> Try the EduSpace interactive demo — no login required
            <ArrowRight className="w-3.5 h-3.5" />
          </Link> */}

          {/* <div className="mt-12 flex flex-wrap gap-8">
            {[
              ['12,000+', 'Students Managed'],
              ['99.9%', 'Platform Uptime'],
              ['4', 'Platform Ecosystem'],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-3xl font-bold text-white">{v}</div>
                <div className="text-sm text-slate-400">{l}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <FloatCard icon={<TrendingUp className="w-5 h-5" />} value="+38%" label="Efficiency gain" className="top-32 right-10 lg:right-24" delay="0s" />
      <FloatCard icon={<Users className="w-5 h-5" />} value="2,140" label="Active users today" className="bottom-40 right-24 lg:right-48" delay="1.2s" />
      <FloatCard icon={<Activity className="w-5 h-5" />} value="Live" label="Real-time analytics" className="top-1/2 right-8 lg:right-12" delay="0.6s" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05070f] to-transparent z-[5]" />
    </section>
  );
};


