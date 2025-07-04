import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const smartfiURL = import.meta.env.VITE_SMARTFI_URL;
const items = [
  { id: 1, name: 'Smartphone', image: '/electronics/phone.jpg', price: 299, originalPrice: 349, rating: 4 },
  { id: 2, name: 'Laptop', image: '/electronics/laptop.jpg', price: 799, originalPrice: 999, rating: 5 },
  { id: 3, name: 'TV', image: '/electronics/tv.jpg', price: 499, rating: 3 },
  { id: 4, name: 'Projector', image: '/electronics/projector.jpg', price: 199, originalPrice: 249, rating: 4 },
  { id: 5, name: 'Tablet', image: '/electronics/tablet.jpg', price: 150, rating: 4 },
];

const loopedItems = [...items, ...items];

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
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
          <span className="text-blue-400">Mzatinova</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
          Powering Your Digital Success
        </p>

        {/* Carousel */}
        <div className="overflow-hidden w-full py-8">
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

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Button
            onClick={() => {
              window.location.href = smartfiURL;
            }}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
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
