// src/pages/store/StorePage.tsx
import React, { useState, useMemo } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import StoreHeroSection from './StoreHeroSection';
import CategoryFilter from './StoreCategoryFilter';
import ProductGrid from './StoreProductGrid';
import { useToast } from '@/hooks/use-toast';
import { categories, mockProducts, Product } from './data/products';
import StoreNavigation from './StoreNavigation';

const StorePage: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const { toast } = useToast();

  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen">
      <StoreNavigation
        isOpen={isNavOpen}
        onToggle={() => setIsNavOpen(!isNavOpen)}
        cartCount={cartItems.length}
      // searchQuery={searchQuery}
      // onSearchChange={setSearchQuery}
      />

      <StoreHeroSection />

      <main className="container mx-auto px-4 py-8 pt-24">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {selectedCategory === 'all' ? 'All Products' :
              categories.find(cat => cat.id === selectedCategory)?.name || 'Products'}
          </h2>
          <p className="text-gray-600">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        <ProductGrid
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />
      </main>
    </div>
  );
};

export default StorePage;

