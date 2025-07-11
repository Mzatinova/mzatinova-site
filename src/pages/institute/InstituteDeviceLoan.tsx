import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Laptop, Smartphone, Tablet, Monitor, CheckCircle, Clock, MapPin } from 'lucide-react';

const InstituteDeviceLoan: React.FC = () => {
    const devices = [
        {
            name: 'Laptop',
            icon: Laptop,
            description: 'High-performance laptops for development and learning',
            available: 15,
            total: 25,
            duration: 'Up to 3 months',
            requirements: ['Active student', 'Course enrollment', 'Security deposit']
        },
        {
            name: 'Tablet',
            icon: Tablet,
            description: 'Tablets for mobile development and digital literacy',
            available: 8,
            total: 15,
            duration: 'Up to 2 months',
            requirements: ['Basic level completion', 'Valid ID', 'Return agreement']
        },
        {
            name: 'Smartphone',
            icon: Smartphone,
            description: 'Smartphones for mobile app testing and development',
            available: 12,
            total: 20,
            duration: 'Up to 1 month',
            requirements: ['Intermediate level', 'Project requirement', 'Insurance']
        },
        {
            name: 'Monitor',
            icon: Monitor,
            description: 'External monitors for enhanced productivity',
            available: 6,
            total: 10,
            duration: 'Up to 6 months',
            requirements: ['Advanced level', 'Home setup', 'Long-term project']
        }
    ];

    return (
        // <div id="devices" className="py-20 bg-white">
        <div id="devices" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    {/* <h2 className="text-4xl font-bold text-gray-900 mb-4"> */}
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Device Loan Program
                    </h2>
                    {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto"> */}
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Bridge the digital divide with our device loan program. Get access to the technology you need to succeed in your learning journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {devices.map((device, index) => {
                        const IconComponent = device.icon;
                        const availabilityPercentage = (device.available / device.total) * 100;

                        return (
                            // <Card key={index} className="hover:shadow-lg transition-shadow">
                            <Card key={index} className="hover:shadow-lg transition-shadow bg-white/5 backdrop-blur-sm">
                                <CardHeader className="text-center">
                                    <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-fit">
                                        <IconComponent className="h-8 w-8 text-white" />
                                    </div>
                                    {/* <CardTitle className="text-lg"> */}
                                    <CardTitle className="text-lg text-white">
                                        {device.name}</CardTitle>
                                    {/* <p className="text-sm text-gray-600"> */}
                                    <p className="text-sm text-gray-300">
                                        {device.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-white">Availability</span>
                                            <Badge
                                                variant={availabilityPercentage > 50 ? "default" : availabilityPercentage > 20 ? "secondary" : "destructive"}
                                                className="text-xs"
                                            >
                                                {device.available}/{device.total} available
                                            </Badge>
                                        </div>

                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${availabilityPercentage > 50 ? 'bg-green-500' :
                                                    availabilityPercentage > 20 ? 'bg-yellow-500' : 'bg-red-500'
                                                    }`}
                                                style={{ width: `${availabilityPercentage}%` }}
                                            ></div>
                                        </div>

                                        <div className="flex items-center text-sm text-white">
                                            <Clock className="h-4 w-4 mr-2" />
                                            {device.duration}
                                        </div>

                                        <div className="space-y-2">
                                            <p className="text-sm font-medium text-white">
                                                Requirements:</p>
                                            <div className="space-y-1">
                                                {device.requirements.map((req, reqIndex) => (
                                                    // <div key={reqIndex} className="flex items-center text-xs text-gray-600">
                                                    <div key={reqIndex} className="flex items-center text-xs text-white">
                                                        <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                                                        {req}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <Button
                                            className="w-full"
                                            disabled={device.available === 0}
                                            variant={device.available === 0 ? "secondary" : "default"}
                                        >
                                            {device.available === 0 ? 'Out of Stock' : 'Request Loan'}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center"> */}
                <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-8 text-center">
                    {/* <h3 className="text-2xl font-bold text-gray-900 mb-4"> */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                        How the Device Loan Program Works
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">
                                1
                            </div>
                            <h4 className="font-semibold mb-2">Apply Online</h4>
                            {/* <p className="text-sm text-gray-600"> */}
                            <p className="text-sm text-gray-300">
                                Submit your device loan request with course enrollment proof</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">
                                2
                            </div>
                            <h4 className="font-semibold mb-2">Quick Approval</h4>
                            {/* <p className="text-sm text-gray-600"> */}
                            <p className="text-sm text-gray-300">
                                Get approved within 24-48 hours based on availability</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">
                                3
                            </div>
                            <h4 className="font-semibold mb-2">Pickup & Learn</h4>
                            {/* <p className="text-sm text-gray-600"> */}
                            <p className="text-sm text-gray-300">
                                Collect your device and start your learning journey</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstituteDeviceLoan;