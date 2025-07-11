import React from 'react';
import { BrainCircuit, Cpu, Eye, MessageSquare, Database, Network, Bot, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';

const AIPage = () => {
    return (
        <div className="bg-black min-h-screen flex flex-col text-gray-100">
            {/* Navigation */}
            {/* <Navbar active="ai" /> */}

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-red-900 to-black py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/ai/circuit-pattern.svg')]"></div>
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <BrainCircuit className="h-16 w-16 text-red-500 animate-pulse" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Mzatinova <span className="text-red-500">AI</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Intelligent systems solving tomorrow's challenges today
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="secondary" size="lg" className="bg-red-600 hover:bg-red-500 text-white">
                            Try Our AI Demo
                        </Button>
                        <Button variant="outline" size="lg" className="text-red-400 border-red-400 hover:bg-red-900/50">
                            API Documentation
                        </Button>
                    </div>
                </div>
            </section>

            {/* AI Capabilities */}
            <section id="capabilities" className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-4 text-red-500">
                        AI Capabilities
                    </h2>
                    <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
                        Cutting-edge artificial intelligence technologies we've developed
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <MessageSquare className="h-10 w-10 text-red-500" />,
                                title: "Natural Language",
                                description: "Advanced NLP for text understanding and generation"
                            },
                            {
                                icon: <Eye className="h-10 w-10 text-red-500" />,
                                title: "Computer Vision",
                                description: "Image and video analysis at scale"
                            },
                            {
                                icon: <Cpu className="h-10 w-10 text-red-500" />,
                                title: "Predictive Models",
                                description: "Forecasting and pattern recognition"
                            },
                            {
                                icon: <Database className="h-10 w-10 text-red-500" />,
                                title: "Data Intelligence",
                                description: "Extracting insights from complex datasets"
                            },
                            {
                                icon: <Network className="h-10 w-10 text-red-500" />,
                                title: "Neural Networks",
                                description: "Deep learning architectures"
                            },
                            {
                                icon: <Bot className="h-10 w-10 text-red-500" />,
                                title: "Conversational AI",
                                description: "Human-like dialog systems"
                            },
                            {
                                icon: <BarChart2 className="h-10 w-10 text-red-500" />,
                                title: "Decision Systems",
                                description: "AI for strategic planning"
                            },
                            {
                                icon: <BrainCircuit className="h-10 w-10 text-red-500" />,
                                title: "Cognitive Computing",
                                description: "Mimicking human thought processes"
                            }
                        ].map((capability, index) => (
                            <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-500/30 transition-all hover:shadow-lg hover:shadow-red-500/10">
                                <div className="mb-4">{capability.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                                <p className="text-gray-400">{capability.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Solutions */}
            <section id="solutions" className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 text-red-500">
                        Industry Solutions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            {
                                title: "Healthcare AI",
                                description: "Diagnostic assistance and patient monitoring systems",
                                features: [
                                    "Medical imaging analysis",
                                    "Drug discovery acceleration",
                                    "Personalized treatment plans"
                                ],
                                icon: "🏥"
                            },
                            {
                                title: "Financial AI",
                                description: "Algorithmic trading and risk assessment",
                                features: [
                                    "Fraud detection",
                                    "Credit scoring",
                                    "Market prediction"
                                ],
                                icon: "💳"
                            },
                            {
                                title: "Retail AI",
                                description: "Personalized shopping experiences",
                                features: [
                                    "Recommendation engines",
                                    "Inventory optimization",
                                    "Visual search"
                                ],
                                icon: "🛒"
                            },
                            {
                                title: "Manufacturing AI",
                                description: "Predictive maintenance and quality control",
                                features: [
                                    "Defect detection",
                                    "Supply chain optimization",
                                    "Robotic process automation"
                                ],
                                icon: "🏭"
                            }
                        ].map((solution, index) => (
                            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-red-500/20 transition-all">
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl">{solution.icon}</span>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                                        <p className="text-gray-400 mb-4">{solution.description}</p>
                                        <ul className="space-y-2">
                                            {solution.features.map((feature, i) => (
                                                <li key={i} className="flex items-center">
                                                    <span className="text-red-500 mr-2">▹</span>
                                                    <span className="text-gray-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Model Performance */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 text-red-500">
                        Model Benchmarks
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="text-left py-4 px-4 text-gray-400">Model</th>
                                    <th className="text-left py-4 px-4 text-gray-400">Task</th>
                                    <th className="text-left py-4 px-4 text-gray-400">Accuracy</th>
                                    <th className="text-left py-4 px-4 text-gray-400">Speed</th>
                                    <th className="text-left py-4 px-4 text-gray-400">Parameters</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        name: "NovaText-7B",
                                        task: "Text Generation",
                                        accuracy: "92%",
                                        speed: "1.2s/token",
                                        params: "7B"
                                    },
                                    {
                                        name: "VisionX-3B",
                                        task: "Image Classification",
                                        accuracy: "98.5%",
                                        speed: "45ms/image",
                                        params: "3B"
                                    },
                                    {
                                        name: "DeepPredict-5B",
                                        task: "Time Series",
                                        accuracy: "89.2%",
                                        speed: "0.8ms/query",
                                        params: "5B"
                                    },
                                    {
                                        name: "DialogFlow-9B",
                                        task: "Conversational AI",
                                        accuracy: "94.7%",
                                        speed: "2.1s/response",
                                        params: "9B"
                                    }
                                ].map((model, index) => (
                                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50">
                                        <td className="py-4 px-4 font-medium">{model.name}</td>
                                        <td className="py-4 px-4 text-gray-400">{model.task}</td>
                                        <td className="py-4 px-4">
                                            <span className={`px-2 py-1 rounded-full text-xs ${model.accuracy > "90%" ? "bg-green-900/50 text-green-400" : "bg-yellow-900/50 text-yellow-400"}`}>
                                                {model.accuracy}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 text-gray-400">{model.speed}</td>
                                        <td className="py-4 px-4 text-gray-400">{model.params}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12 text-center">
                        <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-900/20">
                            View All Models
                        </Button>
                    </div>
                </div>
            </section>

            {/* API Access */}
            <section className="py-20 bg-gradient-to-br from-red-900 to-black">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">AI API Access</h2>
                        <p className="text-xl mb-8 text-gray-300">
                            Integrate our powerful AI models into your applications
                        </p>

                        <div className="bg-gray-900/50 rounded-xl p-6 text-left mb-8 border border-gray-800">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                <span className="text-sm text-gray-400 ml-2">api.mzatinova.ai</span>
                            </div>

                            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm text-green-400">
                                {`// Example API Request\n`}
                                {`const response = await fetch('https://api.mzatinova.ai/v1/chat', {\n`}
                                {`  method: 'POST',\n`}
                                {`  headers: {\n`}
                                {`    'Authorization': 'Bearer YOUR_API_KEY',\n`}
                                {`    'Content-Type': 'application/json'\n`}
                                {`  },\n`}
                                {`  body: JSON.stringify({\n`}
                                {`    model: "NovaText-7B",\n`}
                                {`    messages: [{role: "user", content: "Hello!"}]\n`}
                                {`  })\n`}
                                {`});`}
                            </pre>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-red-600 hover:bg-red-500">
                                Get API Keys
                            </Button>
                            <Button variant="outline" size="lg" className="text-red-400 border-red-400 hover:bg-red-900/30">
                                Documentation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default AIPage;