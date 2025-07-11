import React from 'react';
import { ShoppingBag, ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Add the Mzatinova Store title with glowing icon here */}
          <div className="flex justify-center mb-6">
            <ShoppingBag className="h-16 w-16 text-blue-200 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
            Mzatinova <span className="text-blue-200">Store</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Next-Gen Electronics
            <span className="inline text-yellow-300 ml-2">That Define Tomorrow</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Discover cutting-edge technology with unbeatable prices and lightning-fast delivery
          </p>
          {/* Keep your existing CTA buttons if you want */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="secondary" size="lg" className="bg-blue-200 hover:bg-blue-100 text-gray-900">
              Shop New Arrivals
            </Button>
            <Button variant="outline" size="lg" className="text-blue-200 border-blue-200 hover:bg-blue-800/50">
              View Deals
            </Button>
          </div>

          {/* Rest of your existing content */}



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                <Zap className="h-8 w-8 text-yellow-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-blue-100">Same-day delivery available</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                <Shield className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Shopping</h3>
              <p className="text-blue-100">100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                <Truck className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-blue-100">On orders over $99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;