import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Code, Wrench, Smartphone, Users } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      id: 'eduspace',
      name: 'EduSpace Portal',
      status: 'LIVE',
      statusIcon: <CheckCircle className="h-4 w-4" />,
      description: 'Educational platform currently piloted in schools. Selected for EdTech@UNIMA 2026.',
      icon: <Code className="h-10 w-10 text-blue-400" />,
      gradient: 'from-blue-500 to-cyan-500',
      link: '/products/eduspace',
      features: ['School Management', 'Parent Portal', 'Real-time Results', 'Mobile Access'],
      ctaText: 'View Live Demo'
    },
    {
      id: 'store',
      name: 'Mzatinova Store',
      status: 'COMING SOON',
      statusIcon: <Clock className="h-4 w-4" />,
      description: 'Electronics e-commerce platform with cutting-edge retail technology.',
      icon: <Smartphone className="h-10 w-10 text-purple-400" />,
      gradient: 'from-purple-500 to-pink-500',
      link: '/products/store',
      features: ['Online Marketplace', 'Secure Payments', 'Delivery Tracking', 'Warranty Services'],
      ctaText: 'Notify Me'
    },
    {
      id: 'zanga',
      name: 'Zanga Social',
      status: 'IN DEVELOPMENT',
      statusIcon: <Wrench className="h-4 w-4" />,
      description: 'Community social platform connecting people worldwide.',
      icon: <Users className="h-10 w-10 text-teal-400" />,
      gradient: 'from-teal-500 to-green-500',
      link: '/products/zanga',
      features: ['Social Networking', 'Community Groups', 'Live Streaming', 'Marketplace'],
      ctaText: 'Learn More'
    },
    {
      id: 'custom',
      name: 'Custom Solutions',
      status: 'AVAILABLE',
      statusIcon: <CheckCircle className="h-4 w-4" />,
      description: 'Tailored software solutions for businesses across all industries.',
      icon: <Code className="h-10 w-10 text-orange-400" />,
      gradient: 'from-orange-500 to-red-500',
      link: '/products/custom',
      features: ['Bespoke Development', 'System Integration', 'API Development', 'Maintenance'],
      ctaText: 'Start Project'
    }
  ];

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'LIVE':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'COMING SOON':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'IN DEVELOPMENT':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'AVAILABLE':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">

      {/* --- EXTERNAL VIDEO/IMAGE LAYER START --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          // IMAGE: Bright Blue Abstract Network
          poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2600&auto=format&fit=crop
"
          // Opacity at 50% for brightness
          className="w-full h-full object-cover opacity-50"
        >
          {/* EXTERNAL VIDEO LINK */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-background-2738-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Moderate overlay (60%) to ensure text readability while keeping background visible */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      {/* --- EXTERNAL VIDEO LAYER END --- */}

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-4 border border-blue-500/20 backdrop-blur-md">
            <span className="text-sm font-medium text-blue-300">What We're Building</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured Products</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-sm">
            From live platforms to upcoming innovations, discover what we're building at Mzatinova
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              // UPDATED CARD STYLING:
              // 1. bg-gray-900/90: Much more opaque and lighter than black/60
              // 2. border-white/20: Stronger border for visibility
              // 3. backdrop-blur-xl: Maximum blur to clear up the text area
              className="group bg-gray-900/90 border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 backdrop-blur-xl overflow-hidden shadow-xl"
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient}`} />

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${product.gradient}/10 border border-white/10`}>
                    {product.icon}
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeClass(product.status)}`}>
                    {product.statusIcon}
                    {product.status}
                  </div>
                </div>

                <CardTitle className="text-white text-xl mt-4">
                  {product.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-gray-300 text-base">
                  {product.description}
                </CardDescription>

                {/* Features List */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-400">Key Features:</p>
                  <ul className="space-y-1.5">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link to={product.link}>
                    <Button
                      className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20`}
                    >
                      {product.ctaText}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <p className="text-gray-200 font-medium">
              Looking for something specific?
            </p>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10 backdrop-blur-sm"
              >
                Request Custom Solution
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import { CheckCircle, Clock, Code, Wrench, Smartphone, Users } from 'lucide-react';

// const FeaturedProducts: React.FC = () => {
//   const products = [
//     {
//       id: 'eduspace',
//       name: 'EduSpace Portal',
//       status: 'LIVE',
//       statusIcon: <CheckCircle className="h-4 w-4" />,
//       description: 'Educational platform currently piloted in schools. Selected for EdTech@UNIMA 2026.',
//       icon: <Code className="h-10 w-10 text-blue-400" />,
//       gradient: 'from-blue-500 to-cyan-500',
//       link: '/products/eduspace',
//       features: ['School Management', 'Parent Portal', 'Real-time Results', 'Mobile Access'],
//       ctaText: 'View Live Demo'
//     },
//     {
//       id: 'store',
//       name: 'Mzatinova Store',
//       status: 'COMING SOON',
//       statusIcon: <Clock className="h-4 w-4" />,
//       description: 'Electronics e-commerce platform with cutting-edge retail technology.',
//       icon: <Smartphone className="h-10 w-10 text-purple-400" />,
//       gradient: 'from-purple-500 to-pink-500',
//       link: '/products/store',
//       features: ['Online Marketplace', 'Secure Payments', 'Delivery Tracking', 'Warranty Services'],
//       ctaText: 'Notify Me'
//     },
//     {
//       id: 'zanga',
//       name: 'Zanga Social',
//       status: 'IN DEVELOPMENT',
//       statusIcon: <Wrench className="h-4 w-4" />,
//       description: 'Community social platform connecting people worldwide.',
//       icon: <Users className="h-10 w-10 text-teal-400" />,
//       gradient: 'from-teal-500 to-green-500',
//       link: '/products/zanga',
//       features: ['Social Networking', 'Community Groups', 'Live Streaming', 'Marketplace'],
//       ctaText: 'Learn More'
//     },
//     {
//       id: 'custom',
//       name: 'Custom Solutions',
//       status: 'AVAILABLE',
//       statusIcon: <CheckCircle className="h-4 w-4" />,
//       description: 'Tailored software solutions for businesses across all industries.',
//       icon: <Code className="h-10 w-10 text-orange-400" />,
//       gradient: 'from-orange-500 to-red-500',
//       link: '/products/custom',
//       features: ['Bespoke Development', 'System Integration', 'API Development', 'Maintenance'],
//       ctaText: 'Start Project'
//     }
//   ];

//   const getStatusBadgeClass = (status: string) => {
//     switch (status) {
//       case 'LIVE':
//         return 'bg-green-500/20 text-green-400 border-green-500/30';
//       case 'COMING SOON':
//         return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
//       case 'IN DEVELOPMENT':
//         return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
//       case 'AVAILABLE':
//         return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
//       default:
//         return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
//     }
//   };

//   return (
//     <section className="py-20 bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-4 border border-blue-500/20">
//             <span className="text-sm font-medium text-blue-300">What We're Building</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured Products</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             From live platforms to upcoming innovations, discover what we're building at Mzatinova
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <Card
//               key={product.id}
//               className="group bg-black/40 border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 backdrop-blur-sm overflow-hidden"
//             >
//               {/* Gradient Accent */}
//               <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient}`} />

//               <CardHeader className="pb-4">
//                 <div className="flex items-start justify-between">
//                   <div className={`p-3 rounded-xl bg-gradient-to-br ${product.gradient}/10 border border-white/10`}>
//                     {product.icon}
//                   </div>
//                   <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeClass(product.status)}`}>
//                     {product.statusIcon}
//                     {product.status}
//                   </div>
//                 </div>

//                 <CardTitle className="text-white text-xl mt-4">
//                   {product.name}
//                 </CardTitle>
//               </CardHeader>

//               <CardContent className="space-y-4">
//                 <CardDescription className="text-gray-300 text-base">
//                   {product.description}
//                 </CardDescription>

//                 {/* Features List */}
//                 <div className="space-y-2">
//                   <p className="text-sm font-medium text-gray-400">Key Features:</p>
//                   <ul className="space-y-1.5">
//                     {product.features.map((feature, index) => (
//                       <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
//                         <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* CTA Button */}
//                 <div className="pt-4">
//                   <Link to={product.link}>
//                     <Button
//                       className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20`}
//                     >
//                       {product.ctaText}
//                     </Button>
//                   </Link>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
//             <p className="text-gray-300">
//               Looking for something specific?
//             </p>
//             <Link to="/contact">
//               <Button
//                 variant="outline"
//                 className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
//               >
//                 Request Custom Solution
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;