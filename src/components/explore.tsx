import React from 'react';

const platforms = [
    {
        name: 'Mzatinova Eduspace',
        description: 'A smart classroom companion for secondary and tertiary students.',
        link: 'https://eduspace.mzatinova.com',
        logo: '/eduspace-logo.png',
    },
    {
        name: 'Smartfielectronics',
        description: 'Shop for quality electronics and accessories — online and physical.',
        link: 'https://shop.smartfielectronics.com',
        logo: '/smartfi-logo.png',
    },
    {
        name: 'Zanga',
        description: 'A modern social media app focused on creativity and connection.',
        link: 'https://zanga.mzatinova.com',
        logo: '/zanga-logo.png',
    }
];

const Explore = () => {
    return (
        <section id="explore" className="py-16 bg-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Platforms</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {platforms.map((platform) => (
                        <a
                            key={platform.name}
                            href={platform.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 p-6 rounded-2xl shadow hover:shadow-lg transition text-white border border-white/10"
                        >
                            <img src={platform.logo} alt={platform.name} className="h-12 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                            <p className="text-sm text-gray-300">{platform.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Explore;
