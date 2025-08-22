import React from 'react';
import { useWishlist } from './StoreWishlistContext';
import ProductCard from './StoreProductCard';

// You must provide your actual product list here
const allProducts = [
    {
        id: 1,
        name: 'Samsung Smart TV 50"',
        price: 550000,
        originalPrice: 620000,
        image: '/products/tv.jpg',
        category: 'TV',
        rating: 4,
        inStock: true,
    },
    {
        id: 2,
        name: 'HP EliteBook Laptop',
        price: 690000,
        originalPrice: 750000,
        image: '/products/laptop.jpg',
        category: 'Laptop',
        rating: 5,
        inStock: true,
    },
    {
        id: 3,
        name: 'iPhone 13 Pro',
        price: 779000,
        originalPrice: 850000,
        image: '/products/iphone.jpg',
        category: 'Phone',
        rating: 5,
        inStock: true,
    },
    {
        id: 4,
        name: 'Bluetooth Home Speaker',
        price: 75000,
        originalPrice: 90000,
        image: '/products/speaker.jpg',
        category: 'Speaker',
        rating: 3,
        inStock: false,
    },
    // Add more products as needed
];

const WishlistPage = () => {
    const { wishlist } = useWishlist();

    const wishlistProducts = allProducts.filter(p => wishlist.includes(p.id));

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Your Wishlist ❤️</h1>
            {wishlistProducts.length === 0 ? (
                <p>You haven't added any items to your wishlist yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {wishlistProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={() => {
                                // Implement your add to cart logic here
                                alert(`Added ${product.name} to cart!`);
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistPage;
