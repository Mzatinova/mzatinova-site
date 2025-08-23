import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsSection: React.FC = () => {
  const news = [
    {
      title: 'Mzatinova Launches Revolutionary AI Platform',
      description: 'Our latest AI platform is transforming how businesses approach automation and decision-making.',
      date: '2024-01-15',
      category: 'AI Innovation'
    },
    {
      title: 'Global Expansion into Healthcare Technology',
      description: 'Expanding our healthcare solutions to serve millions of patients worldwide.',
      date: '2024-01-10',
      category: 'Healthcare'
    },
    {
      title: 'Partnership with Leading Educational Institutions',
      description: 'Collaborating with top universities to revolutionize digital learning experiences.',
      date: '2024-01-05',
      category: 'Education'
    }
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">News</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with our latest innovations and industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card key={index} className="bg-black/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-400 font-medium">{article.category}</span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-white hover:text-blue-400 transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="text-gray-300 mb-4">
                  {article.description}
                </CardDescription>
                <Button variant="ghost" className="text-purple-400 hover:text-white hover:bg-purple-500/20 p-0 mt-auto">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;