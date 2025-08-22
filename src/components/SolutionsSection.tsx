import React from 'react';
import { Cloud, Smartphone, Cpu, Bot, Globe, Shield } from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      icon: Bot,
      title: 'Artificial Intelligence',
      description: 'Advanced AI solutions for automation and intelligent decision-making'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure and services for modern businesses'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Cross-platform mobile apps with cutting-edge user experiences'
    },
    {
      icon: Cpu,
      title: 'Enterprise Solutions',
      description: 'Robust enterprise software for complex business operations'
    },
    {
      icon: Globe,
      title: 'Digital Platforms',
      description: 'Comprehensive digital ecosystems connecting users globally'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions protecting digital assets'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="group p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {solution.title}
                </h3>

                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {solution.description}
                </p>

                <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;