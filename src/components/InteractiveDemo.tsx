import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const InteractiveDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRunning(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const demos = {
    ai: {
      title: "AI Processing",
      description: "Watch our AI analyze data in real-time",
      color: "bg-blue-500"
    },
    vr: {
      title: "VR Experience",
      description: "Immersive virtual reality simulation",
      color: "bg-purple-500"
    },
    quantum: {
      title: "Quantum Computing",
      description: "Quantum algorithms solving complex problems",
      color: "bg-green-500"
    },
    eduspace: {
      title: "Mzatinova Eduspace",
      description: "Explore interactive study planning, flashcards and AI assistant features.",
      color: "bg-yellow-500"
    },
    smartfielectronics: {
      title: "Smartfielectronics",
      description: "Browse and filter electronics by category in this commerce demo.",
      color: "bg-red-500"
    },
    zanga: {
      title: "Zanga Social",
      description: "See post reactions, share content, and experience gamified interactions.",
      color: "bg-indigo-500"
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Interactive Demos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Experience our technology in action
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs value={activeDemo} onValueChange={setActiveDemo}>
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="ai">AI</TabsTrigger>
              <TabsTrigger value="vr">VR</TabsTrigger>
              <TabsTrigger value="quantum">Quantum</TabsTrigger>
              <TabsTrigger value="eduspace">Eduspace</TabsTrigger>
              <TabsTrigger value="smartfielectronics">Smartfie</TabsTrigger>
              <TabsTrigger value="zanga">Zanga</TabsTrigger>
            </TabsList>

            {Object.entries(demos).map(([key, demo]) => (
              <TabsContent key={key} value={key}>
                <Card className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">{demo.title}</CardTitle>
                    <p className="text-center text-gray-600 dark:text-gray-300">{demo.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="h-64 bg-black rounded-lg relative overflow-hidden">
                      <div className={`absolute inset-0 ${demo.color} opacity-20 animate-pulse`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-6xl animate-spin">⚡</div>
                      </div>
                      {isRunning && (
                        <div className="absolute bottom-4 left-4 right-4">
                          <Progress value={progress} className="h-2" />
                          <p className="text-white text-sm mt-2">Processing: {progress}%</p>
                        </div>
                      )}
                    </div>

                    <div className="text-center">
                      <Button
                        onClick={startDemo}
                        disabled={isRunning}
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        {isRunning ? 'Running...' : 'Start Demo'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
