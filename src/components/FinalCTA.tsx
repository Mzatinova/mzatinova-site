import React from 'react';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import Reveal from './ui/Reveal';
import VideoBackdrop from './ui/VideoBackdrop';
import { IMG, BOOKING_URL } from '@/lib/data';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <VideoBackdrop image={IMG.cloud} overlay="from-[#05070f]/85 via-blue-950/80 to-[#05070f]/95" />
      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Ready to Digitize Your <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Organization?</span>
          </h2>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
            Let's discuss how Mzatinova can help your institution transform operations through intelligent digital platforms.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow"
            >
              <CalendarCheck className="w-4 h-4" /> Book Consultation
            </a>
            <button
              onClick={() => go('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
            >
              Request Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;
