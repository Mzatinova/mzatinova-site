import React from 'react';
import { ShoppingCart, Star, Truck, Shield, CreditCard, ChevronRight, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';

const StorePage = () => {
    const products = [
        {
            id: 1,
            name: 'Smartphone X Pro',
            price: 899,
            originalPrice: 999,
            rating: 4,
            image: '/store/phone.jpg',
            tags: ['New', '5G', '256GB']
        },
        {
            id: 2,
            name: 'Ultra Slim Laptop',
            price: 1299,
            originalPrice: 1499,
            rating: 5,
            image: '/store/laptop.jpg',
            tags: ['Lightweight', '16GB RAM']
        },
        {
            id: 3,
            name: '4K Smart TV',
            price: 799,
            rating: 4,
            image: '/store/tv.jpg',
            tags: ['55"', 'HDR']
        },
        {
            id: 4,
            name: 'Wireless Earbuds',
            price: 149,
            originalPrice: 199,
            rating: 4,
            image: '/store/earbuds.jpg',
            tags: ['Noise Cancelling']
        },
        {
            id: 5,
            name: 'Smart Watch 3',
            price: 249,
            rating: 3,
            image: '/store/watch.jpg',
            tags: ['Fitness Tracker']
        },
        {
            id: 6,
            name: 'Gaming Console',
            price: 499,
            originalPrice: 549,
            rating: 5,
            image: '/store/console.jpg',
            tags: ['1TB SSD']
        },
        {
            id: 7,
            name: 'Bluetooth Speaker',
            price: 89,
            rating: 4,
            image: '/store/speaker.jpg',
            tags: ['Waterproof']
        },
        {
            id: 8,
            name: 'Tablet Mini',
            price: 329,
            originalPrice: 399,
            rating: 4,
            image: '/store/tablet.jpg',
            tags: ['10" Display']
        }
    ];

    const categories = [
        { name: 'Smartphones', count: 42 },
        { name: 'Laptops', count: 28 },
        { name: 'TVs & Displays', count: 35 },
        { name: 'Audio', count: 56 },
        { name: 'Wearables', count: 19 },
        { name: 'Accessories', count: 87 }
    ];

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Navigation */}
            {/* <Navbar active="store" /> */}

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-900 to-purple-700 text-white py-24">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Mzatinova Store
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Your destination for cutting-edge technology
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative mb-8">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-lg bg-purple-800/50 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
                            placeholder="Search products..."
                        />
                        <Button className="absolute right-2 top-2 bg-purple-600 hover:bg-purple-500">
                            Search
                        </Button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {['Smartphones', 'Laptops', 'Audio', 'Deals'].map((tag, i) => (
                            <Button key={i} variant="outline" className="text-white border-white hover:bg-white/10">
                                {tag}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section id="products" className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
                            Featured Products
                        </h2>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" className="flex items-center gap-2">
                                <Filter className="h-4 w-4" />
                                Filters
                            </Button>
                            <Button variant="outline">
                                Sort By
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    {product.tags.length > 0 && (
                                        <div className="absolute top-2 left-2 flex gap-2">
                                            {product.tags.map((tag, i) => (
                                                <span key={i} className="text-xs px-2 py-1 bg-purple-600 text-white rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-1 text-gray-900">{product.name}</h3>

                                    {/* Rating */}
                                    <div className="flex items-center mb-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-500 ml-1">({Math.floor(Math.random() * 100) + 1})</span>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                                        )}
                                    </div>

                                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                        <ShoppingCart className="h-4 w-4 mr-2" />
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                            View All Products
                        </Button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Shop by Category
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600">
                                        {category.name}
                                    </h3>
                                    <span className="text-sm text-gray-500">{category.count} items</span>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <Button variant="link" className="text-purple-600 p-0 h-auto hover:underline">
                                        Shop Now
                                    </Button>
                                    <ChevronRight className="h-5 w-5 text-purple-600" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Promo Banner */}
            <section className="py-16 bg-purple-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Summer Tech Sale!
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Up to 40% off select items. Limited time offer.
                    </p>
                    <Button variant="secondary" size="lg">
                        Shop the Sale
                    </Button>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Why Shop With Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Truck className="h-10 w-10 text-purple-600" />,
                                title: "Fast Shipping",
                                description: "Free delivery on orders over $50"
                            },
                            {
                                icon: <Shield className="h-10 w-10 text-purple-600" />,
                                title: "Secure Payments",
                                description: "100% secure checkout process"
                            },
                            {
                                icon: <CreditCard className="h-10 w-10 text-purple-600" />,
                                title: "Flexible Payments",
                                description: "Multiple payment options available"
                            }
                        ].map((benefit, i) => (
                            <div key={i} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-purple-100 p-4 rounded-full">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        What Our Customers Say
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                quote: "The smartphone I bought exceeded my expectations. Fast shipping and great customer service!",
                                author: "Sarah J.",
                                rating: 5
                            },
                            {
                                quote: "Best prices I've found online for tech products. Will definitely shop here again.",
                                author: "Michael T.",
                                rating: 4
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                                <blockquote className="text-lg italic text-gray-700 mb-6">
                                    "{testimonial.quote}"
                                </blockquote>
                                <p className="font-medium text-gray-900">— {testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-purple-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Subscribe for exclusive deals and product launches
                    </p>

                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-lg bg-purple-800/50 text-white placeholder-purple-200 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                            />
                            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-sm mt-3 text-purple-200">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default StorePage;