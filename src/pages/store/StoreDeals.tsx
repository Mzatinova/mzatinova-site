import React from 'react';
import ProductCard from './StoreProductCard';
import { useWishlist } from './StoreWishlistContext';

const StoreDeals = () => {
    const deals = [/* your deals array with categories, rating, etc. */];
    const { toggleWishlist, isInWishlist } = useWishlist();

    const handleAddToCart = (product) => {
        // Your add to cart logic here
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-red-600 mb-8">🔥 Hot Deals This Week</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {deals.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default StoreDeals;
