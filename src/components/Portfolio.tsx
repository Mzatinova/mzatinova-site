import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './ui/Reveal';
import { portfolio } from '@/lib/data';

const cats = ['All', 'Education', 'Healthcare'];

const Portfolio: React.FC = () => {
  const [active, setActive] = useState('All');
  const items = active === 'All' ? portfolio : portfolio.filter((p) => p.cat === active);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Live': return 'bg-green-500';
      case 'In Development': return 'bg-yellow-500';
      case 'Research': return 'bg-purple-500';
      case 'Prototype': return 'bg-orange-500';
      default: return 'bg-cyan-500';
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'AI Solution': return 'bg-purple-600';
      case 'Web Platform': return 'bg-blue-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <section id="portfolio" className="relative py-28 bg-white dark:bg-[#05070f]">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeading
          center
          eyebrow="Our Work"
          title={<>Building Solutions That <span className="text-cyan-500">Create Impact</span></>}
          subtitle="Real deployments delivering measurable outcomes across Africa."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === c
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'border border-slate-300 dark:border-white/15 text-slate-600 dark:text-slate-300 hover:border-cyan-400'
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] hover:-translate-y-1 transition-transform">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">
                    {p.cat}
                  </span>

                  <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${getTypeColor(p.type)}`}>
                    {p.type}
                  </span>

                  <span className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white ${getStatusColor(p.status)}`}>
                    {p.status}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
                    {p.link ? (
                      <a 
                        href={p.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-500 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 shrink-0 transition-colors" />
                    )}
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
                  
                  {p.link && (
                    <div className="mt-4">
                      <a 
                        href={p.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                      >
                        View Project →
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
// import React, { useState } from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import SectionHeading from './SectionHeading';
// import Reveal from './ui/Reveal';
// import { portfolio } from '@/lib/data';

// // ✅ Update your categories to match your data structure
// const cats = [
//   'All',
//   'Education',
//   'Healthcare',
// ];

// // ✅ Add a type filter (optional, but good for future)
// const types = ['All', 'Web Platform', 'AI Solution'];

// const Portfolio: React.FC = () => {
//   const [active, setActive] = useState('All');
//   const items = active === 'All' ? portfolio : portfolio.filter((p) => p.cat === active);

//   // Helper function to get status badge color
//   const getStatusColor = (status: string) => {
//     switch(status) {
//       case 'Live': return 'bg-green-500';
//       case 'In Development': return 'bg-yellow-500';
//       case 'Research': return 'bg-purple-500';
//       case 'Prototype': return 'bg-orange-500';
//       default: return 'bg-cyan-500';
//     }
//   };

//   // Helper function to get type badge color
//   const getTypeColor = (type: string) => {
//     switch(type) {
//       case 'AI Solution': return 'bg-purple-600';
//       case 'Web Platform': return 'bg-blue-500';
//       case 'Mobile App': return 'bg-green-500';
//       default: return 'bg-slate-500';
//     }
//   };

//   return (
//     <section id="portfolio" className="relative py-28 bg-white dark:bg-[#05070f]">
//       <div className="max-w-7xl mx-auto px-5">
//         <SectionHeading
//           center
//           eyebrow="Our Work"
//           title={<>Building Solutions That <span className="text-cyan-500">Create Impact</span></>}
//           subtitle="Real deployments delivering measurable outcomes across Africa."
//         />

//         <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
//           {cats.map((c) => (
//             <button
//               key={c}
//               onClick={() => setActive(c)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                 active === c
//                   ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
//                   : 'border border-slate-300 dark:border-white/15 text-slate-600 dark:text-slate-300 hover:border-cyan-400'
//               }`}
//             >
//               {c}
//             </button>
//           ))}
//         </Reveal>

//         <div className="mt-12 grid md:grid-cols-2 gap-6">
//           {items.map((p, i) => (
//             <Reveal key={p.title} delay={i * 80}>
//               <div className="group relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] hover:-translate-y-1 transition-transform">
//                 <div className="relative h-56 overflow-hidden">
//                   <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
//                   {/* ✅ Category badge (top-left) */}
//                   <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">
//                     {p.cat}
//                   </span>

//                   {/* ✅ TYPE badge (bottom-left) - Shows "AI Solution" or "Web Platform" */}
//                   <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${getTypeColor(p.type)}`}>
//                     {p.type}
//                   </span>

//                   {/* ✅ STATUS badge (bottom-right) - Shows "Live", "In Development", etc. */}
//                   <span className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white ${getStatusColor(p.status)}`}>
//                     {p.status}
//                   </span>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-start justify-between gap-3">
//                     <h3 className="text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
//                     <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 shrink-0 transition-colors" />
//                   </div>
//                   <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {p.tech.map((t) => (
//                       <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
// // import React, { useState } from 'react';
// // import { ArrowUpRight } from 'lucide-react';
// // import SectionHeading from './SectionHeading';
// // import Reveal from './ui/Reveal';
// // import { portfolio } from '@/lib/data';

// // const cats = [
// //   'All',
// //   'Education',
// //   'Healthcare',
// // ];

// // const Portfolio: React.FC = () => {
// //   const [active, setActive] = useState('All');
// //   const items = active === 'All' ? portfolio : portfolio.filter((p) => p.cat === active);

// //   return (
// //     <section id="portfolio" className="relative py-28 bg-white dark:bg-[#05070f]">
// //       <div className="max-w-7xl mx-auto px-5">
// //         <SectionHeading
// //           center
// //           eyebrow="Our Work"
// //           title={<>Building Solutions That <span className="text-cyan-500">Create Impact</span></>}
// //           subtitle="Real deployments delivering measurable outcomes across Africa."
// //         />

// //         <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
// //           {cats.map((c) => (
// //             <button
// //               key={c}
// //               onClick={() => setActive(c)}
// //               className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
// //                 active === c
// //                   ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
// //                   : 'border border-slate-300 dark:border-white/15 text-slate-600 dark:text-slate-300 hover:border-cyan-400'
// //               }`}
// //             >
// //               {c}
// //             </button>
// //           ))}
// //         </Reveal>

// //         <div className="mt-12 grid md:grid-cols-2 gap-6">
// //           {items.map((p, i) => (
// //             <Reveal key={p.title} delay={i * 80}>
// //               <div className="group relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] hover:-translate-y-1 transition-transform">
// //                 <div className="relative h-56 overflow-hidden">
// //                   <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
// //                   <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">{p.cat}</span>
// //                   {/* <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500 text-white">{p.outcome}</span> */}
// //                   <span
// //   className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
// //     p.status === 'Live'
// //       ? 'bg-green-500'
// //       : p.status === 'AI Solution'
// //       ? 'bg-purple-500'
// //       : 'bg-cyan-500'
// //   }`}
// // >
// //   {p.status}
// // </span>
// //                 </div>
// //                 <div className="p-6">
// //                   <div className="flex items-start justify-between gap-3">
// //                     <h3 className="text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
// //                     <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 shrink-0 transition-colors" />
// //                   </div>
// //                   <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
// //                   <div className="mt-4 flex flex-wrap gap-2">
// //                     {p.tech.map((t) => (
// //                       <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">{t}</span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </Reveal>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Portfolio;
