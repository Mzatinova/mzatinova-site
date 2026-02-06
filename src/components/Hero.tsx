import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
import { Code, Brain, Cpu, Shield, Cloud, Smartphone, Database, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // 2. FORCE VIDEO AUTOPLAY
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-24 px-4 sm:px-6 bg-black">

      {/* --- META-STYLE BACKGROUND START --- */}
      <div className="absolute inset-0 overflow-hidden z-0">

        {/* VIDEO LAYER */}
        <video
          ref={videoRef}
          playsInline
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          poster="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          onError={(e) => console.error("Video Error:", e.currentTarget.error, "Current Source:", e.currentTarget.currentSrc)}
        >
          <source src="/videos/background-video.mp4" type="video/mp4" />
        </video>

        {/* COLOR OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-blue-950/40 mix-blend-multiply"></div>

        {/* TEXTURE OVERLAY */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      {/* --- META-STYLE BACKGROUND END --- */}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Remove grid-cols-2 and center the content */}
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-blue-500/30">
            <Zap className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-blue-200">Innovating Across Industries</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            <span className="block">Modern Software</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Built Right.
            </span>

          </h1>

          {/* Subheading */}
          {/* <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            <span className="font-semibold text-blue-300">Mzatinova</span> delivers integrated software
            across <span className="text-purple-300">Education</span>, <span className="text-green-300">Health</span>,
            <span className="text-yellow-300"> Finance</span>, <span className="text-teal-300">Agriculture</span>,
            and <span className="text-pink-300">AI</span> — helping businesses innovate and grow in the digital era.
          </p> */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            <span className="font-semibold text-blue-300">Mzatinova</span> designs and builds modern software, AI systems, and digital platforms that help organizations move faster and operate smarter.
          </p>




          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105">
                <Code className="mr-2 h-5 w-5" />
                Explore Products
              </Button>
            </Link>

            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm">
                Start Project
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-12 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-blue-200/60 uppercase tracking-wider mt-1">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-sm text-blue-200/60 uppercase tracking-wider mt-1">Solutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">1M+</div>
              <div className="text-sm text-blue-200/60 uppercase tracking-wider mt-1">Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import React, { useState, useEffect, useRef } from 'react'; // Import useRef
// import { Button } from '@/components/ui/button';
// import { Link } from "react-router-dom";
// import { Code, Brain, Cpu, Shield, Cloud, Smartphone, Database, Zap } from 'lucide-react';

// const Hero: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const videoRef = useRef<HTMLVideoElement>(null); // 1. Create a reference for the video

//   // Featured products data (kept the same)
//   const featuredProducts = [
//     {
//       id: 1,
//       name: 'EduSpace Portal',
//       description: 'Educational platform for schools',
//       status: 'LIVE',
//       icon: <Code className="h-12 w-12 text-blue-400" />,
//       gradient: 'from-blue-500 to-cyan-500',
//       link: '/products/eduspace'
//     },
//     {
//       id: 2,
//       name: 'Mzatinova Store',
//       description: 'E-commerce platform',
//       status: 'COMING SOON',
//       icon: <Smartphone className="h-12 w-12 text-purple-400" />,
//       gradient: 'from-purple-500 to-pink-500',
//       link: '/products/store'
//     },
//     {
//       id: 3,
//       name: 'AI Solutions',
//       description: 'Artificial Intelligence services',
//       status: 'AVAILABLE',
//       icon: <Brain className="h-12 w-12 text-teal-400" />,
//       gradient: 'from-teal-500 to-green-500',
//       link: '/services/ai-solutions'
//     },
//     {
//       id: 4,
//       name: 'Custom Software',
//       description: 'Tailored business solutions',
//       status: 'AVAILABLE',
//       icon: <Cpu className="h-12 w-12 text-orange-400" />,
//       gradient: 'from-orange-500 to-red-500',
//       link: '/products/custom'
//     }
//   ];

//   // 2. FORCE VIDEO AUTOPLAY
//   useEffect(() => {
//     if (videoRef.current) {
//       // Browsers require the property to be set on the DOM node directly
//       videoRef.current.defaultMuted = true;
//       videoRef.current.muted = true;

//       // Attempt to play
//       videoRef.current.play().catch(error => {
//         console.log("Autoplay prevented:", error);
//       });
//     }
//   }, []);

//   // Rotate featured products
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-24 px-4 sm:px-6 bg-black">

//       {/* --- META-STYLE BACKGROUND START --- */}
//       <div className="absolute inset-0 overflow-hidden z-0">

//         {/* VIDEO LAYER */}
//         <video
//           ref={videoRef} // Attach the ref here
//           playsInline
//           autoPlay
//           loop
//           muted
//           className="absolute inset-0 w-full h-full object-cover opacity-50"
//           // I replaced the URL with a very reliable CDN link often used for testing
//           poster="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
//           // ADD THIS LINE TO SEE THE ERROR:
//           onError={(e) => console.error("Video Error:", e.currentTarget.error, "Current Source:", e.currentTarget.currentSrc)}
//         >
//           {/* Use a reliable generic tech background for testing */}
//           <source src="/videos/background-video.mp4" type="video/mp4" />
//         </video>

//         {/* COLOR OVERLAY - Crucial for text readability */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-blue-950/40 mix-blend-multiply"></div>

//         {/* TEXTURE OVERLAY - Adds the 'premium' grain */}
//         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//       </div>
//       {/* --- META-STYLE BACKGROUND END --- */}

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

//           {/* Left Column - Main Message */}
//           <div className="text-center lg:text-left">
//             <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-blue-500/30">
//               <Zap className="h-4 w-4 text-yellow-400 fill-yellow-400" />
//               <span className="text-sm font-medium text-blue-200">Innovating Across Industries</span>
//             </div>
//             {/* 
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
//               <span className="block">Building Digital</span>
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
//                 Solutions That Transform.
//               </span>
//             </h1> */}
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
//               {/* Main Headline */}

//               <span className="block">Building Digital</span>
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
//                 Solutions That Transform Industries.
//               </span>

//             </h1>


//             {/* Subheading */}
//             <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
//               <span className="font-semibold text-blue-300">Mzatinova</span> delivers integrated software
//               across <span className="text-purple-300">Education</span>, <span className="text-green-300">Health</span>,
//               <span className="text-yellow-300"> Finance</span>, <span className="text-teal-300">Agriculture</span>,
//               and <span className="text-pink-300">AI</span> — helping businesses innovate and grow in the digital era.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <Link to="/products">
//                 <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105">
//                   <Code className="mr-2 h-5 w-5" />
//                   Explore Products
//                 </Button>
//               </Link>

//               <Link to="/contact">
//                 <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm">
//                   Start Project
//                 </Button>
//               </Link>
//             </div>

//             {/* Stats */}
//             <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 border-t border-white/10 pt-8">
//               <div>
//                 <div className="text-3xl font-bold text-white">50+</div>
//                 <div className="text-sm text-blue-200/60 uppercase tracking-wider mt-1">Countries</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white">100+</div>
//                 <div className="text-sm text-blue-200/60 uppercase tracking-wider mt-1">Solutions</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white">1M+</div>
//                 <div className="text-sm text-blue-200/60 uppercase tracking-wider mt-1">Users</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Featured Product Showcase */}
//           <div className="relative h-[400px] lg:h-[500px] perspective-1000">
//             <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden">
//               {featuredProducts.map((product, i) => (
//                 <div
//                   key={product.id}
//                   className={`absolute inset-0 p-8 flex flex-col justify-center transition-all duration-700 ease-in-out transform ${i === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
//                     }`}
//                 >
//                   <div className={`inline-flex self-start p-3 rounded-xl bg-gradient-to-br ${product.gradient} mb-6 shadow-lg`}>
//                     {React.cloneElement(product.icon as React.ReactElement, { className: "h-8 w-8 text-white" })}
//                   </div>

//                   <div className="inline-block mb-2">
//                     <span className={`text-xs font-bold tracking-wider px-2 py-1 rounded bg-white/10 ${product.status === 'LIVE' ? 'text-green-400' : 'text-blue-400'}`}>
//                       {product.status}
//                     </span>
//                   </div>

//                   <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{product.name}</h3>
//                   <p className="text-lg text-gray-300 mb-8">{product.description}</p>

//                   <Link to={product.link} className="mt-auto">
//                     <div className="group flex items-center text-white font-semibold cursor-pointer">
//                       View Details
//                       <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
//                     </div>
//                   </Link>

//                   {/* Background Glow */}
//                   <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${product.gradient} rounded-full blur-[80px] opacity-20 pointer-events-none`}></div>
//                 </div>
//               ))}

//               {/* Progress Indicators */}
//               <div className="absolute bottom-6 left-8 right-8 flex gap-2">
//                 {featuredProducts.map((_, i) => (
//                   <div
//                     key={i}
//                     className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-12 bg-white' : 'w-4 bg-white/20'}`}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Link } from "react-router-dom";
// import { Code, Brain, Cpu, Shield, Cloud, Smartphone, Database, Zap } from 'lucide-react';

// const Hero: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Featured products data
//   const featuredProducts = [
//     {
//       id: 1,
//       name: 'EduSpace Portal',
//       description: 'Educational platform for schools',
//       status: 'LIVE',
//       icon: <Code className="h-12 w-12 text-blue-400" />,
//       gradient: 'from-blue-500 to-cyan-500',
//       link: '/products/eduspace'
//     },
//     {
//       id: 2,
//       name: 'Mzatinova Store',
//       description: 'E-commerce platform',
//       status: 'COMING SOON',
//       icon: <Smartphone className="h-12 w-12 text-purple-400" />,
//       gradient: 'from-purple-500 to-pink-500',
//       link: '/products/store'
//     },
//     {
//       id: 3,
//       name: 'AI Solutions',
//       description: 'Artificial Intelligence services',
//       status: 'AVAILABLE',
//       icon: <Brain className="h-12 w-12 text-teal-400" />,
//       gradient: 'from-teal-500 to-green-500',
//       link: '/services/ai-solutions'
//     },
//     {
//       id: 4,
//       name: 'Custom Software',
//       description: 'Tailored business solutions',
//       status: 'AVAILABLE',
//       icon: <Cpu className="h-12 w-12 text-orange-400" />,
//       gradient: 'from-orange-500 to-red-500',
//       link: '/products/custom'
//     }
//   ];

//   // Rotate featured products
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-24 px-4 sm:px-6 bg-black">

//       {/* --- META-STYLE BACKGROUND START --- */}
//       <div className="absolute inset-0 overflow-hidden z-0">

//         {/* 1. The Video Layer */}
//         {/* 'object-cover' makes it fill screen. 'mix-blend-overlay' allows it to interact with bg colors */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
//           className="absolute inset-0 w-full h-full object-cover opacity-60"
//         >
//           {/* Using a sample tech/network video from a free stock source for demonstration */}
//           <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-lines-996-large.mp4" type="video/mp4" />
//           <div className="absolute inset-0 bg-black"></div>
//         </video>

//         {/* 2. The Color & Mesh Overlay */}
//         {/* This creates the dark fade so white text pops.  */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-blue-900/20 mix-blend-multiply"></div>

//         {/* 3. A subtle pattern overlay (optional, adds texture) */}
//         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//       </div>
//       {/* --- META-STYLE BACKGROUND END --- */}

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

//           {/* Left Column - Main Message */}
//           <div className="text-center lg:text-left">
//             <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-blue-500/30">
//               <Zap className="h-4 w-4 text-yellow-400 fill-yellow-400" />
//               <span className="text-sm font-medium text-blue-200">Innovating Across Industries</span>
//             </div>

//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
//               <span className="block">Building Digital</span>
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
//                 Solutions That Transform.
//               </span>
//             </h1>

//             <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
//               We don't just write code; we solve problems. <span className="text-white font-medium">Mzatinova</span> integrates{" "}
//               <span className="text-blue-300">Education</span>, <span className="text-green-300">Health</span>, and <span className="text-purple-300">Finance</span> with advanced AI to deliver real results.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <Link to="/products">
//                 <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105">
//                   <Code className="mr-2 h-5 w-5" />
//                   Explore Products
//                 </Button>
//               </Link>

//               <Link to="/contact">
//                 <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm">
//                   Start Project
//                 </Button>
//               </Link>
//             </div>

//             {/* Stats Row */}
//             <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 border-t border-white/10 pt-8">
//               <div>
//                 <div className="text-3xl font-bold text-white">50+</div>
//                 <div className="text-sm text-blue-200/60 uppercase tracking-wider mt-1">Countries</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white">100+</div>
//                 <div className="text-sm text-blue-200/60 uppercase tracking-wider mt-1">Solutions</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white">1M+</div>
//                 <div className="text-sm text-blue-200/60 uppercase tracking-wider mt-1">Users</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Featured Product Showcase */}
//           <div className="relative h-[400px] lg:h-[500px] perspective-1000">
//             {/* Glassmorphism Card Container */}
//             <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden">
//               {/* Product Render Logic */}
//               {featuredProducts.map((product, i) => (
//                 <div
//                   key={product.id}
//                   className={`absolute inset-0 p-8 flex flex-col justify-center transition-all duration-700 ease-in-out transform ${i === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
//                     }`}
//                 >
//                   <div className={`inline-flex self-start p-3 rounded-xl bg-gradient-to-br ${product.gradient} mb-6 shadow-lg`}>
//                     {React.cloneElement(product.icon as React.ReactElement, { className: "h-8 w-8 text-white" })}
//                   </div>

//                   <div className="inline-block mb-2">
//                     <span className={`text-xs font-bold tracking-wider px-2 py-1 rounded bg-white/10 ${product.status === 'LIVE' ? 'text-green-400' : 'text-blue-400'}`}>
//                       {product.status}
//                     </span>
//                   </div>

//                   <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{product.name}</h3>
//                   <p className="text-lg text-gray-300 mb-8">{product.description}</p>

//                   <Link to={product.link} className="mt-auto">
//                     <div className="group flex items-center text-white font-semibold cursor-pointer">
//                       View Details
//                       <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
//                     </div>
//                   </Link>

//                   {/* Background Glow for Card */}
//                   <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${product.gradient} rounded-full blur-[80px] opacity-20 pointer-events-none`}></div>
//                 </div>
//               ))}

//               {/* Progress Indicators */}
//               <div className="absolute bottom-6 left-8 right-8 flex gap-2">
//                 {featuredProducts.map((_, i) => (
//                   <div
//                     key={i}
//                     className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-12 bg-white' : 'w-4 bg-white/20'}`}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// // import React, { useState, useEffect } from 'react';
// // import { Button } from '@/components/ui/button';
// // import { Link } from "react-router-dom";
// // import { Code, Brain, Cpu, Shield, Cloud, Smartphone, Database, Zap } from 'lucide-react';

// // const Hero: React.FC = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   // Featured products/solutions - showcasing your software offerings
// //   const featuredProducts = [
// //     {
// //       id: 1,
// //       name: 'EduSpace Portal',
// //       description: 'Educational platform for schools',
// //       status: 'LIVE',
// //       icon: <Code className="h-12 w-12 text-blue-400" />,
// //       gradient: 'from-blue-500 to-cyan-500',
// //       link: '/products/eduspace'
// //     },
// //     {
// //       id: 2,
// //       name: 'Mzatinova Store',
// //       description: 'E-commerce platform',
// //       status: 'COMING SOON',
// //       icon: <Smartphone className="h-12 w-12 text-purple-400" />,
// //       gradient: 'from-purple-500 to-pink-500',
// //       link: '/products/store'
// //     },
// //     {
// //       id: 3,
// //       name: 'AI Solutions',
// //       description: 'Artificial Intelligence services',
// //       status: 'AVAILABLE',
// //       icon: <Brain className="h-12 w-12 text-teal-400" />,
// //       gradient: 'from-teal-500 to-green-500',
// //       link: '/services/ai-solutions'
// //     },
// //     {
// //       id: 4,
// //       name: 'Custom Software',
// //       description: 'Tailored business solutions',
// //       status: 'AVAILABLE',
// //       icon: <Cpu className="h-12 w-12 text-orange-400" />,
// //       gradient: 'from-orange-500 to-red-500',
// //       link: '/products/custom'
// //     }
// //   ];

// //   // Tech icons for background animation
// //   const techIcons = [
// //     <Code key="code" className="h-8 w-8 text-blue-400/30" />,
// //     <Brain key="brain" className="h-8 w-8 text-purple-400/30" />,
// //     <Cloud key="cloud" className="h-8 w-8 text-teal-400/30" />,
// //     <Database key="db" className="h-8 w-8 text-orange-400/30" />,
// //     <Shield key="shield" className="h-8 w-8 text-green-400/30" />,
// //     <Zap key="zap" className="h-8 w-8 text-yellow-400/30" />,
// //   ];

// //   // Rotate featured products every 5 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-24 px-4 sm:px-6">
// //       {/* Animated Tech Background */}
// //       <div className="absolute inset-0 overflow-hidden">
// //         <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-40">
// //           <source src="/videos/tech-background.mp4" type="video/mp4" />
// //           {/* Fallback gradient */}
// //           <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20"></div>
// //         </video>

// //         {/* Floating Tech Icons */}
// //         <div className="absolute inset-0">
// //           {[...Array(15)].map((_, i) => (
// //             <div
// //               key={i}
// //               className="absolute animate-float"
// //               style={{
// //                 left: `${Math.random() * 100}%`,
// //                 top: `${Math.random() * 100}%`,
// //                 animationDelay: `${Math.random() * 5}s`,
// //                 animationDuration: `${15 + Math.random() * 20}s`
// //               }}
// //             >
// //               {techIcons[Math.floor(Math.random() * techIcons.length)]}
// //             </div>
// //           ))}
// //         </div>

// //         {/* Gradient Overlay */}
// //         <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/30 to-blue-900/30"></div>
// //       </div>

// //       {/* Content */}
// //       <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

// //           {/* Left Column - Main Message */}
// //           <div className="text-center lg:text-left">
// //             {/* Tagline */}
// //             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/20">
// //               <Zap className="h-4 w-4 text-yellow-400" />
// //               <span className="text-sm font-medium text-blue-300">Innovating Across Industries</span>
// //             </div>

// //             {/* Main Headline */}
// //             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
// //               <span className="block">Building Digital</span>
// //               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
// //                 Solutions That Transform Industries.
// //               </span>
// //             </h1>

// //             {/* Subheading */}
// //             {/* <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
// //               <span className="font-semibold text-blue-300">Mzatinova</span> delivers integrated software 
// //               across <span className="text-purple-300">Education</span>, <span className="text-green-300">Health</span>, 
// //               <span className="text-yellow-300"> Finance</span>, <span className="text-teal-300">Agriculture</span>, 
// //               and <span className="text-pink-300">AI</span> — helping businesses innovate and grow in the digital era.
// //             </p> */}

// //             {/* Subheading */}
// //             <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
// //               We don't just write code; we solve problems in the sectors that matter most.{" "}
// //               <span className="font-semibold text-blue-300">Mzatinova</span> integrates{" "}
// //               <span className="text-purple-300">Education</span>,{" "}
// //               <span className="text-green-300">Health</span>,{" "}
// //               <span className="text-yellow-300">Finance</span>, and{" "}
// //               <span className="text-teal-300">Agriculture</span> with advanced{" "}
// //               <span className="text-pink-300">AI</span> to deliver results, not just promises.
// //             </p>

// //             {/* CTA Buttons */}
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
// //               <Link to="/products">
// //                 <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg shadow-lg shadow-blue-500/25">
// //                   <Code className="mr-2 h-5 w-5" />
// //                   Explore Our Products
// //                 </Button>
// //               </Link>

// //               <Link to="/contact">
// //                 <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-6 text-lg">
// //                   Start Your Project
// //                 </Button>
// //               </Link>
// //             </div>

// //             {/* Stats */}
// //             <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
// //               <div className="text-center lg:text-left">
// //                 <div className="text-2xl font-bold text-white">50+</div>
// //                 <div className="text-sm text-gray-400">Countries Reached</div>
// //               </div>
// //               <div className="text-center lg:text-left">
// //                 <div className="text-2xl font-bold text-white">100+</div>
// //                 <div className="text-sm text-gray-400">Solutions Built</div>
// //               </div>
// //               <div className="text-center lg:text-left col-span-2 sm:col-span-1">
// //                 <div className="text-2xl font-bold text-white">1M+</div>
// //                 <div className="text-sm text-gray-400">Users Impacted</div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Column - Featured Product Showcase */}
// //           <div className="relative h-[400px] lg:h-[500px]">
// //             {/* Animated Background Card */}
// //             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5 rounded-3xl border border-white/10 backdrop-blur-sm"></div>

// //             {/* Featured Product Cards */}
// //             {featuredProducts.map((product, i) => (
// //               <div
// //                 key={product.id}
// //                 className={`absolute inset-0 lg:inset-4 transition-all duration-1000 ease-in-out transform ${i === currentIndex
// //                   ? 'opacity-100 scale-100 translate-x-0'
// //                   : 'opacity-0 scale-95 translate-x-20'
// //                   }`}
// //               >
// //                 <div className={`h-full bg-gradient-to-br ${product.gradient}/10 to-black/50 rounded-2xl p-6 lg:p-8 border border-white/10 backdrop-blur-sm`}>
// //                   {/* Status Badge */}
// //                   <div className="inline-block mb-4">
// //                     <span className={`px-3 py-1 rounded-full text-xs font-semibold ${product.status === 'LIVE'
// //                       ? 'bg-green-500/20 text-green-400'
// //                       : product.status === 'COMING SOON'
// //                         ? 'bg-yellow-500/20 text-yellow-400'
// //                         : 'bg-blue-500/20 text-blue-400'
// //                       }`}>
// //                       {product.status}
// //                     </span>
// //                   </div>

// //                   {/* Product Icon */}
// //                   <div className="mb-6">
// //                     {product.icon}
// //                   </div>

// //                   {/* Product Details */}
// //                   <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
// //                     {product.name}
// //                   </h3>
// //                   <p className="text-gray-300 mb-6">
// //                     {product.description}
// //                   </p>

// //                   {/* CTA */}
// //                   <Link to={product.link}>
// //                     <Button
// //                       className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white`}
// //                     >
// //                       {product.status === 'COMING SOON' ? 'Learn More' : 'View Details'}
// //                     </Button>
// //                   </Link>

// //                   {/* Decorative Elements */}
// //                   <div className="absolute bottom-4 right-4 opacity-10">
// //                     {product.icon}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}

// //             {/* Navigation Dots */}
// //             <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
// //               {featuredProducts.map((_, i) => (
// //                 <button
// //                   key={i}
// //                   onClick={() => setCurrentIndex(i)}
// //                   className={`w-2 h-2 rounded-full transition-all ${i === currentIndex
// //                     ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-400'
// //                     : 'bg-gray-600 hover:bg-gray-500'
// //                     }`}
// //                   aria-label={`View product ${i + 1}`}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Scroll Indicator */}
// //       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// //         <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
// //           <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

