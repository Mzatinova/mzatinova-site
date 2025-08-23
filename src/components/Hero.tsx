import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";


const items = [
  { id: 1, name: 'Smartphone', image: '/electronics/phone.png', price: '850,000', link: '/products/smartphone'},
  { id: 2, name: 'Laptop', image: '/electronics/laptop.png', price: '1,500,000', link: '/products/laptop' },
  { id: 3, name: 'TV', image: '/electronics/tv.png', price: '750,000', link: '/products/tv' },
  { id: 4, name: 'Projector', image: '/electronics/projector.png', price: '250,000', link: '/products/projector' },
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  // change product every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative  flex flex-col items-center  overflow-hidden pt-28 pb-24 px-4 sm:px-6">
      {/* Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/videos/hero-futuristic.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/40 to-blue-900/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        
        {/* Left Text */}
        <div className="lg:col-span-3">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Build the Future. <span className="text-mzat-blue">At Scale.</span>
            </span>
          </h1>
          <h2 className="text-xl text-gray-300 mb-8 max-w-2xl">
                       <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mzatinova
            </span> provides integrated software solutions across Education, Health, Finance, Agriculture, AI, and more, helping businesses and individuals innovate, grow, and stay ahead in the digital world.
          </h2>
          <div className="flex gap-4">
            <a href="#branches">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 text-lg px-8 py-3">
              Explore Our Branches
            </Button>
            </a>

            <Link to="/contact">
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-3">
              Get in Touch
            </Button>
            </Link>
          </div>
        </div>

        {/* Right - Rotating Product with Slide + Fade */}
        <div className="lg:col-span-2 flex justify-center relative h-96">
          {items.map((product, i) => (
           <div
  key={product.id}
  className={`absolute top-0 left-0 w-80 bg-gradient-to-br from-black via-purple-900/40 to-blue-900/40 rounded-2xl shadow-lg p-6 text-center transform transition-all duration-1000 ease-in-out ${
    i === index 
      ? "opacity-100 translate-x-0" 
      : "opacity-0 translate-x-20"
  }`}
   style={{ top: "0%", left: "20%" }}
>
  <img src={product.image} alt={product.name} className="w-full h-50 object-cover rounded-lg mb-4" />
  <h3 className="text-lg font-semibold text-white">{product.name}</h3>
  <p className="text-blue-400 font-bold text-xl mt-2">MWK{product.price}</p>
  <Link to={product.link}>
  <Button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
    Shop Now
  </Button>
  </Link>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;


// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';

// const items = [
//   { id: 1, name: 'Smartphone', image: '/electronics/phone.png', price: 299 },
//   { id: 2, name: 'Laptop', image: '/electronics/laptop.png', price: 799 },
//   { id: 3, name: 'TV', image: '/electronics/tv.png', price: 499 },
//   { id: 4, name: 'Projector', image: '/electronics/projector.png', price: 199 },
// ];

// const Hero: React.FC = () => {
//   const [index, setIndex] = useState(0);

//   // change product every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % items.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Background */}
//       <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
//         <source src="/videos/hero-futuristic.mp4" type="video/mp4" />
//       </video>
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/40 to-blue-900/40"></div>

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        
//         {/* Left Text */}
//         <div className="lg:col-span-3">
//           <h1 className="text-5xl font-bold text-white mb-6">
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
//               Build the Future. <span className="text-mzat-blue">At Scale.</span>
//             </span>
//           </h1>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl">
//             Mzatinova provides integrated software solutions across Education, Health, Finance, Agriculture, AI, and more.
//           </p>
//           <div className="flex gap-4">
//             <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 text-lg px-8 py-3">
//               Explore Our Ecosystem
//             </Button>
//             <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-3">
//               Contact Us
//             </Button>
//           </div>
//         </div>

//         {/* Right - Rotating Product with Slide + Fade */}
//         <div className="lg:col-span-2 flex justify-center relative h-96">
//           {items.map((product, i) => (
//             <div
//               key={product.id}
//               className={`absolute top-0 left-0 w-72 bg-white rounded-2xl shadow-xl p-6 text-center transform transition-all duration-1000 ease-in-out ${
//                 i === index 
//                   ? "opacity-100 translate-x-0" 
//                   : "opacity-0 translate-x-20"
//               }`}
//             >
//               <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
//               <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
//               <p className="text-blue-600 font-bold text-xl mt-2">${product.price}</p>
//               <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
//                 Shop Now
//               </Button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { BookOpen, DollarSign, Heart, Sprout } from 'lucide-react';

// const Hero: React.FC = () => {
//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Video Background */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/videos/hero-futuristic.mp4" type="video/mp4" />
//       </video>

//       {/* Gradient + pattern overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/40 to-blue-900/40">
//         <div
//           className="absolute inset-0 opacity-20"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }}
//         ></div>
//       </div>
      
//       {/* Content
//       <div className="relative z-10 lg:col-span-3 max-w-4xl mx-auto px-6">
//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//           <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
//          Build the Future. <span className="text-mzat-blue">At Scale.</span>
            
//           </span>
//         </h1>
        
//         <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
//           Shaping the Future with Technology
//         </h2>
        
//         <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//           Innovating across Education, Health, Finance, Agriculture, AI, and more.
//         </p>
        
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-3">
//             Explore Branches
//           </Button>
//           <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-3">
//             Contact Us
//           </Button>
//         </div>
//       </div> */}

//                   {/* Visual - 40% */}
//                 <div className="relative z-10 w-full h-full flex items-center bg-black bg-opacity-50">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
      
//       {/* Text Content - Left */}
//       <div className="lg:col-span-3 text-left">
//         <h1 className="text-5xl font-bold text-white mb-6">
//           <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
//             Build the Future. <span className="text-mzat-blue">At Scale.</span>
//           </span>
//         </h1>

//         {/* <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
//           Shaping the Future with Technology
//         </h2> */}

//         <p className="text-xl text-gray-300 mb-8 max-w-2xl">
//            Mzatinova provides integrated software solutions across Education, Health, Finance, Agriculture, AI, and more.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4">
//           <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-3">
//             Explore Our Ecosystem
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-3"
//           >
//             Contact Us
//           </Button>
//         </div>
//       </div>

//       {/* Visual - Right */}
//       <div className="lg:col-span-2 flex justify-end">
//         <div className="relative">
//           {/* Central Logo */}
//           <div className="w-24 h-24 bg-mzat-blue rounded-full flex items-center justify-center text-white text-2xl font-bold animate-pulse">
//             M
//           </div>

//           {/* Orbiting Icons */}
//           <div
//             className="absolute inset-0 animate-spin"
//             style={{ animationDuration: "20s" }}
//           >
//             <BookOpen className="absolute -top-8 left-1/2 transform -translate-x-1/2 h-6 w-6 text-mzat-green" />
//             <Heart className="absolute top-1/2 -right-8 transform -translate-y-1/2 h-6 w-6 text-mzat-red" />
//             <Sprout className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 h-6 w-6 text-mzat-orange" />
//             <DollarSign className="absolute top-1/2 -left-8 transform -translate-y-1/2 h-6 w-6 text-yellow-600" />
//           </div>
//         </div>
//       </div>

//     </div>
//   </div>
//  </div>

 

      
//       {/* Animated elements */}
//       <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//       <div className="absolute bottom-32 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
//       <div className="absolute top-1/2 left-10 w-1 h-1 bg-teal-400 rounded-full animate-pulse delay-500"></div>
//     </section>
//   );
// };

// export default Hero;


// // import React from 'react';
// // import { Button } from '@/components/ui/button';

// // const Hero: React.FC = () => {
// //   return (
// //     <section className="relative h-screen flex items-center justify-center overflow-hidden">
// //       {/* Background with gradient and pattern */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20">
// //         <div className="absolute inset-0 opacity-20" 
// //              style={{
// //                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
// //              }}>
// //         </div>
// //       </div>
      
// //       {/* Content */}
// //       <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
// //         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
// //           <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
// //             Mzatinova
// //           </span>
// //         </h1>
        
// //         <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
// //           Shaping the Future with Technology
// //         </h2>
        
// //         <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
// //           Innovating across Education, Health, Finance, Agriculture, AI, and more.
// //         </p>
        
// //         <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //           <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-3">
// //             Explore Branches
// //           </Button>
// //           <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-3">
// //             Contact Us
// //           </Button>
// //         </div>
// //       </div>
      
// //       {/* Animated elements */}
// //       <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
// //       <div className="absolute bottom-32 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
// //       <div className="absolute top-1/2 left-10 w-1 h-1 bg-teal-400 rounded-full animate-pulse delay-500"></div>
// //     </section>
// //   );
// // };

// // export default Hero;