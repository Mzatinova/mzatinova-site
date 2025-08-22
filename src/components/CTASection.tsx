import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-teal-900/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Let's Build the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Future</span> Together
        </h2>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Ready to transform your business with cutting-edge technology?
          Join the innovation revolution with Mzatinova.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-4">
              Get in Touch
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-4">
            Schedule Demo
          </Button>
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-700"></div>
    </section>
  );
};

export default CTASection;