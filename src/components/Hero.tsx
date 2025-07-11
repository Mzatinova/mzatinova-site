import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Code, FlaskConical, BrainCog, LifeBuoy } from 'lucide-react';

const smartfiURL = import.meta.env.VITE_SMARTFI_URL;
const items = [
  { id: 1, name: 'Smartphone', image: '/electronics/phone.jpg', price: 299, originalPrice: 349, rating: 4 },
  { id: 2, name: 'Laptop', image: '/electronics/laptop.jpg', price: 799, originalPrice: 999, rating: 5 },
  { id: 3, name: 'TV', image: '/electronics/tv.jpg', price: 499, rating: 3 },
  { id: 4, name: 'Projector', image: '/electronics/projector.jpg', price: 199, originalPrice: 249, rating: 4 },
  { id: 5, name: 'Tablet', image: '/electronics/tablet.jpg', price: 150, rating: 4 },
];

const loopedItems = [...items, ...items];

const colorMap: Record<string, string> = {
  'bg-blue-600': 'text-blue-600',
  'bg-purple-600': 'text-purple-600',
  'bg-green-600': 'text-green-600',
  'bg-yellow-600': 'text-yellow-600',
  'bg-red-600': 'text-red-600',
  'bg-indigo-600': 'text-indigo-600',

};

const brands = [
  {
    id: 'institute',
    name: 'Mzatinova Digital Institute',
    description: 'Empowering digital transformation through education',
    highlights: [
      'Comprehensive courses & certifications',
      'App builder platform',
      'Device loan programs',
      'Industry-recognized credentials'
    ],
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
    path: '/institute',
    icon: <GraduationCap className="mr-2 h-5 w-5" />,
    action: 'Learn More'
  },
  {
    id: 'store',
    name: 'Mzatinova Store',
    description: 'Your destination for cutting-edge technology',
    highlights: [
      'Latest devices & gadgets',
      'Competitive pricing',
      'Exclusive member benefits',
      'Fast delivery',
      'Secure Shopping'
    ],
    color: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
    path: '/store',
    icon: <ArrowRight className="mr-2 h-5 w-5" />,
    action: 'Visit Store'
  },
  {
    id: 'studio',
    name: 'Mzatinova Studio',
    description: 'Innovative software solutions for the digital age',
    highlights: [
      'Custom software development',
      'Cloud Innovation',
      'AI Solutions',
      'consultancy',
      'Digital Transformation'
    ],
    color: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
    path: '/studio',
    icon: <Code className="mr-2 h-5 w-5" />,
    action: 'Explore'
  },
  {
    id: 'labs',
    name: 'Mzatinova Labs',
    description: 'Where tomorrow\'s technology is born today',
    highlights: [
      'Experimental projects',
      'Beta feature testing',
      'R&D initiatives',
      'Cutting-edge prototypes'
    ],
    color: 'bg-yellow-600',
    hoverColor: 'hover:bg-yellow-700',
    path: '/labs',
    icon: <FlaskConical className="mr-2 h-5 w-5" />,
    action: 'Discover'
  },
  {
    id: 'ai',
    name: 'Mzatinova AI',
    description: 'Intelligent solutions for complex challenges',
    highlights: [
      'AI model development',
      'Machine learning services',
      'Natural language processing',
      'Computer vision'
    ],
    color: 'bg-red-600',
    hoverColor: 'hover:bg-red-700',
    path: '/AI',
    icon: <BrainCog className="mr-2 h-5 w-5" />,
    action: 'Try Now'
  },
  {
    id: 'support',
    name: 'Mzatinova Support',
    description: 'Always here to help you succeed',
    highlights: [
      '24/7 help center',
      'Comprehensive documentation',
      'Community forums',
      'Expert assistance'
    ],
    color: 'bg-indigo-600',
    hoverColor: 'hover:bg-indigo-700',
    path: '/support',
    icon: <LifeBuoy className="mr-2 h-5 w-5" />,
    action: 'Get Help'
  }
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
          <span className="text-blue-400">   Powering Your Digital Success</span>
        </h1>

        {/* <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
          Powering Your Digital Success
        </p> */}


        {/* Brand Overview Section */}
        <div className="w-full max-w-6xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <div key={brand.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-all">
                {/* <h3 className={`text-xl font-bold mb-2 ${brand.color.replace('bg', 'text')}`}> */}
                <h3 className={`text-xl font-bold mb-2 ${brand.id === 'support'
                    ? 'text-indigo-400' // Trying a lighter indigo
                    : colorMap[brand.color]
                  }`}>
                  {brand.name}</h3>
                <p className="text-gray-300 mb-4">{brand.description}</p>
                <ul className="text-left text-gray-400 space-y-1 mb-4">
                  {brand.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => window.location.href = brand.path}
                  className={`${brand.color} ${brand.hoverColor} w-full mt-2`}
                >
                  {brand.icon}
                  {brand.action}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Store Carousel (only shown for store) */}
        <div className="overflow-hidden w-full py-8">
          <h3 className="text-2xl font-bold text-white mb-4">Featured Products</h3>
          <div className="flex gap-6 w-max animate-carousel-scroll">
            {loopedItems.map((item, index) => (
              <div
                key={index}
                className="min-w-[200px] max-w-[200px] bg-white rounded-2xl shadow-lg overflow-hidden p-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
                <div className="font-semibold text-black text-sm">{item.name}</div>

                {/* ⭐ Rating */}
                <div className="text-yellow-400 text-sm flex justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < item.rating ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>

                {/* 💰 Prices */}
                <div className="mt-2 text-center">
                  <span className="text-blue-600 font-bold text-md">${item.price}</span>{' '}
                  {item.originalPrice && (
                    <span className="text-gray-500 line-through text-sm ml-1">${item.originalPrice}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA Button (only for store) */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Button
            onClick={() => {
              window.location.href = '/store';
            }}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>



      </div>
    </section>
  );
};

export default Hero;