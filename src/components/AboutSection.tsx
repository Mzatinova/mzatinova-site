import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-gray-900 via-purple-900/10 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mzatinova</span>
            </h2>

            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Mzatinova is a global software company at the forefront of technological innovation.
                We specialize in creating cutting-edge solutions that transform industries and shape the future.
              </p>

              <p className="text-lg">
                Our mission is to harness the power of technology to solve complex challenges across
                education, healthcare, finance, agriculture, and beyond. We believe in creating
                sustainable, scalable solutions that make a meaningful impact on society.
              </p>

              <p className="text-lg">
                With expertise spanning AI, VR, robotics, and digital platforms, we're building
                the infrastructure for tomorrow's world today.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
                <div className="text-gray-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">100+</div>
                <div className="text-gray-400">Solutions</div>
              </div>
            </div>

            <Button className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-teal-400 rounded-full animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;