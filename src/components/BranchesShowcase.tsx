import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Heart, Wheat, DollarSign, Store, Users, Brain, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';

const BranchesShowcase: React.FC = () => {

  const branches = [
    {
      name: 'Eduspace',
      icon: GraduationCap,
      description: 'Revolutionary educational technology platforms transforming learning experiences.',
      color: 'from-blue-500 to-cyan-500',
      link: 'https://www.eduspace.mzatinova.com'
    },
    {
      name: 'Health',
      icon: Heart,
      description: 'Advanced healthcare solutions powered by AI and digital innovation.',
      color: 'from-red-500 to-pink-500',
      link: 'https://health.mzatinova.com'
    },
    {
      name: 'Agriculture',
      icon: Wheat,
      description: 'Smart farming technologies for sustainable agricultural practices.',
      color: 'from-green-500 to-emerald-500',
      link: 'https://agriculture.mzatinova.com'
    },
    {
      name: 'Finance',
      icon: DollarSign,
      description: 'Next-generation fintech solutions for modern financial services.',
      color: 'from-yellow-500 to-orange-500',
      link: 'https://finance.mzatinova.com'
    },
    {
      name: 'Store',
      icon: Store,
      description: 'E-commerce platforms with cutting-edge retail technology.',
      color: 'from-purple-500 to-violet-500',
      link: 'https://store.mzatinova.com'
    },
    {
      name: 'Zanga Social',
      icon: Users,
      description: 'Social networking platform connecting communities worldwide.',
      color: 'from-indigo-500 to-blue-500',
      link: 'https://zanga.mzatinova.com'
    },
    {
      name: 'AI',
      icon: Brain,
      description: 'Artificial intelligence solutions driving the future of technology.',
      color: 'from-teal-500 to-cyan-500',
      link: 'https://ai.mzatinova.com'
    },
    {
      name: 'Labs',
      icon: FlaskConical,
      description: 'Our research and development engine, dedicated to pioneering the next generation of technology that will shape our future.',
      color: 'from-slate-400 to-gray-500',
      link: 'https://labs.mzatinova.com'
    }
  ];

  return (
    <section id="branches" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Branches</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our diverse portfolio of innovative solutions across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {branches.map((branch) => {
            const IconComponent = branch.icon;
            return (
              <Card key={branch.name} className="bg-black/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 flex flex-col">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${branch.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{branch.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="text-gray-300 mb-4">
                    {branch.description}
                  </CardDescription>
                  <a href={branch.link} rel="noopener noreferrer" className="mt-auto">
                    <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BranchesShowcase;