import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Terminal, ChevronRight, Activity } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-slate-950 border-t border-slate-800/50">

      {/* Deep-Tech Background Architecture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* "Engine Core" Central Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[120px] rounded-[100%] opacity-70"></div>

        {/* Vignette to fade edges */}
        <div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(circle_at_center,transparent_20%,black_80%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-4xl">

        {/* Initialization Status */}
        <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-blue-500/30 px-5 py-2 rounded-full mb-8 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
          <Activity className="h-4 w-4 text-blue-400" />
          <span className="text-xs font-mono text-blue-300 tracking-widest uppercase font-semibold">
            System Ready for Deployment
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
          Ready to put our <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
            engines to work?
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
          Data Intelligence + Workflow Automation. <br />
          <span className="font-medium text-slate-300">Built in Malawi. Ready for the world.</span>
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">

          {/* Primary Button */}
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="group w-full relative px-8 py-4 bg-white text-slate-950 rounded-xl font-bold transition-all duration-300 hover:bg-slate-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
              <Rocket className="h-5 w-5 text-slate-900 group-hover:-translate-y-0.5 transition-transform" />
              Initialize Project
              <ChevronRight className="h-5 w-5 text-slate-600 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          {/* Secondary Button */}
          <button className="group w-full sm:w-auto px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-slate-700 text-white rounded-xl font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 flex items-center justify-center gap-2">
            <Terminal className="h-5 w-5 text-slate-400" />
            Schedule Architecture Demo
          </button>

        </div>
      </div>
    </section>
  );
};

export default CTASection;

// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// const CTASection: React.FC = () => {
//   return (
//     <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
//         }}>
//       </div>

//       <div className="container mx-auto px-6 text-center relative z-10">
//         <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
//           Ready to put our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">engines</span> to work?
//         </h2>

//         <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//           Data Intelligence + Workflow Automation. Built in Malawi. Ready for the world.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Link to="contact">
//             <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-4 shadow-lg shadow-blue-500/20">
//               Get in Touch
//             </Button>
//           </Link>
//           <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:border-blue-300 hover:text-blue-300 text-lg px-8 py-4">
//             Schedule Demo
//           </Button>
//         </div>
//       </div>

//       {/* Animated elements */}
//       <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
//       <div className="absolute bottom-10 right-10 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
//       <div className="absolute top-1/2 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
//       <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-700"></div>
//     </section>
//   );
// };

// export default CTASection;

// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// const CTASection: React.FC = () => {
//   return (
//     <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
//         }}>
//       </div>

//       <div className="container mx-auto px-6 text-center relative z-10">
//         <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
//           Let's Build the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Future</span> Together
//         </h2>

//         <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//           Ready to transform your business with cutting-edge technology?
//           Join the innovation revolution with Mzatinova.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Link to="contact">
//             <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-4 shadow-lg shadow-blue-500/20">
//               Get in Touch
//             </Button>
//           </Link>
//           <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:border-blue-300 hover:text-blue-300 text-lg px-8 py-4">
//             Schedule Demo
//           </Button>
//         </div>
//       </div>

//       {/* Animated elements */}
//       <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
//       <div className="absolute bottom-10 right-10 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
//       <div className="absolute top-1/2 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
//       <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-700"></div>
//     </section>
//   );
// };

// export default CTASection;

// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// const CTASection: React.FC = () => {
//   return (
//     <section id="contact" className="py-20 relative overflow-hidden">
//       {/* Beautiful CTA Background */}
//       <div className="absolute inset-0 z-0">
//         {/* Futuristic connection/innovation background */}
//         <img
//           src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2600&auto=format&fit=crop"
//           alt="Innovation Background"
//           className="w-full h-full object-cover"
//         />

//         {/* Gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/25 to-teal-900/20" />

//         {/* Subtle grid pattern */}
//         <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px]" />
//       </div>

//       <div className="container mx-auto px-6 text-center relative z-10">
//         <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
//           Let's Build the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Future</span> Together
//         </h2>

//         <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
//           Ready to transform your business with cutting-edge technology?
//           Join the innovation revolution with Mzatinova.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//           <Link to="/contact">
//             <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-10 py-6 rounded-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
//               Get in Touch
//             </Button>
//           </Link>
//           <Link to="/contact">
//             <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-10 py-6 rounded-xl backdrop-blur-sm hover:border-white/50 transition-all duration-300">
//               Schedule Demo
//             </Button>
//           </Link>
//         </div>
//       </div>

//       {/* Animated elements */}
//       <div className="absolute top-10 left-10 w-6 h-6 bg-blue-400 rounded-full animate-pulse blur-sm opacity-70"></div>
//       <div className="absolute bottom-10 right-10 w-8 h-8 bg-purple-400 rounded-full animate-pulse delay-1000 blur-sm opacity-70"></div>
//       <div className="absolute top-1/2 right-20 w-4 h-4 bg-teal-400 rounded-full animate-pulse delay-500 blur-sm opacity-70"></div>
//       <div className="absolute bottom-20 left-20 w-5 h-5 bg-blue-300 rounded-full animate-pulse delay-700 blur-sm opacity-70"></div>

//       {/* Additional animated circles */}
//       <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-purple-500/30 rounded-full animate-pulse delay-300 blur-xl"></div>
//       <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1500 blur-xl"></div>
//     </section>
//   );
// };

// export default CTASection;

// // import React from 'react';
// // import { Button } from '@/components/ui/button';
// // import { Link } from 'react-router-dom';

// // const CTASection: React.FC = () => {
// //   return (
// //     <section id="contact" className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-teal-900/20 relative overflow-hidden">
// //       {/* Background pattern */}
// //       <div className="absolute inset-0 opacity-10"
// //         style={{
// //           backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
// //         }}>
// //       </div>

// //       <div className="container mx-auto px-6 text-center relative z-10">
// //         <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
// //           Let's Build the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Future</span> Together
// //         </h2>

// //         <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
// //           Ready to transform your business with cutting-edge technology?
// //           Join the innovation revolution with Mzatinova.
// //         </p>

// //         <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //           <Link to="contact">
// //             <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-4">
// //               Get in Touch
// //             </Button>
// //           </Link>
// //           <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-4">
// //             Schedule Demo
// //           </Button>
// //         </div>
// //       </div>

// //       {/* Animated elements */}
// //       <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
// //       <div className="absolute bottom-10 right-10 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
// //       <div className="absolute top-1/2 right-20 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-500"></div>
// //       <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-700"></div>
// //     </section>
// //   );
// // };

// // export default CTASection;