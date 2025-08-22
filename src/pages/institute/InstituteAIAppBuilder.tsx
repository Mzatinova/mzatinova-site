import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Smartphone, Monitor, Zap, Sparkles, Download } from 'lucide-react';

const InstituteAIAppBuilder: React.FC = () => {


    const [appIdea, setAppIdea] = useState('');
    const [appName, setAppName] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedApp, setGeneratedApp] = useState<any>(null);

    const handleGenerate = async () => {
        setIsGenerating(true);
        // Simulate AI generation
        setTimeout(() => {
            setGeneratedApp({
                name: appName || 'My App',
                description: appIdea,
                features: ['User Authentication', 'Data Storage', 'Responsive Design', 'API Integration'],
                techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']
            });
            setIsGenerating(false);
        }, 3000);
    };

    return (
        // <div id="ai-builder" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div id="ai-builder" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        🤖 AI Powered
                    </Badge>
                    {/* <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> */}
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        AI App Builder
                    </h2>
                    {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto"> */}
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Generate mobile and web applications instantly with AI. Perfect for learning and prototyping.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Tabs defaultValue="mobile" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8">
                            <TabsTrigger value="mobile" className="flex items-center gap-2">
                                <Smartphone className="w-4 h-4" />
                                Mobile App
                            </TabsTrigger>
                            <TabsTrigger value="web" className="flex items-center gap-2">
                                <Monitor className="w-4 h-4" />
                                Web App
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="mobile">
                            {/* <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm"> */}
                            <Card className="border-0 shadow-2xl bg-gray-800/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-white">
                                        <Sparkles className="w-5 h-5 text-purple-600 " />
                                        Create Mobile App
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-white">App Name</label>
                                        <Input
                                            placeholder="Enter your app name"
                                            value={appName}
                                            onChange={(e) => setAppName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-white">Describe your app idea</label>
                                        <Textarea
                                            placeholder="I want to create an app that..."
                                            value={appIdea}
                                            onChange={(e) => setAppIdea(e.target.value)}
                                            rows={4}
                                        />
                                    </div>
                                    <Button
                                        onClick={handleGenerate}
                                        disabled={isGenerating || !appIdea}
                                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                                        size="lg"
                                    >
                                        {isGenerating ? (
                                            <>
                                                <Zap className="w-4 h-4 mr-2 animate-spin" />
                                                Generating...
                                            </>
                                        ) : (
                                            <>
                                                <Sparkles className="w-4 h-4 mr-2" />
                                                Generate Mobile App
                                            </>
                                        )}
                                    </Button>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="web">
                            {/* <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm"> */}
                            <Card className="border-0 shadow-2xl bg-gray-800/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-white">
                                        <Sparkles className="w-5 h-5 text-blue-600" />
                                        Create Web App
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-white">App Name</label>
                                        <Input
                                            placeholder="Enter your app name"
                                            value={appName}
                                            onChange={(e) => setAppName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-white">Describe your app idea</label>
                                        <Textarea
                                            placeholder="I want to create a web app that..."
                                            value={appIdea}
                                            onChange={(e) => setAppIdea(e.target.value)}
                                            rows={4}
                                        />
                                    </div>
                                    <Button
                                        onClick={handleGenerate}
                                        disabled={isGenerating || !appIdea}
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                        size="lg"
                                    >
                                        {isGenerating ? (
                                            <>
                                                <Zap className="w-4 h-4 mr-2 animate-spin" />
                                                Generating...
                                            </>
                                        ) : (
                                            <>
                                                <Sparkles className="w-4 h-4 mr-2 " />
                                                Generate Web App
                                            </>
                                        )}
                                    </Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    {generatedApp && (
                        // <Card className="mt-8 border-0 shadow-2xl bg-gradient-to-r from-green-50 to-blue-50">
                        <Card className="mt-8 border-0 shadow-2xl bg-gradient-to-r from-gray-800 to-blue-900/80">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-green-600" />
                                    Generated: {generatedApp.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">{generatedApp.description}</p>
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <h4 className="font-semibold mb-2">Features</h4>
                                        <div className="space-y-1">
                                            {generatedApp.features.map((feature: string, index: number) => (
                                                <Badge key={index} variant="secondary">{feature}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Tech Stack</h4>
                                        <div className="space-y-1">
                                            {generatedApp.techStack.map((tech: string, index: number) => (
                                                <Badge key={index} variant="outline">{tech}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600">
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Generated Code
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstituteAIAppBuilder;