import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Laptop, Headphones, Camera, Watch, Gamepad2, Tv, Cpu } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const StoreCategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onCategoryChange }) => {
  const categoryIcons: { [key: string]: React.ReactNode } = {
    smartphones: <Smartphone className="h-4 w-4" />,
    laptops: <Laptop className="h-4 w-4" />,
    headphones: <Headphones className="h-4 w-4" />,
    cameras: <Camera className="h-4 w-4" />,
    watches: <Watch className="h-4 w-4" />,
    gaming: <Gamepad2 className="h-4 w-4" />,
    tv: <Tv className="h-4 w-4" />,
    components: <Cpu className="h-4 w-4" />,
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Categories</h2>
      <div className="flex flex-wrap gap-3">
        <Button
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          onClick={() => onCategoryChange('all')}
          className={`flex items-center gap-2 transition-all duration-300 ${selectedCategory === 'all'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
              : 'hover:bg-blue-50 hover:border-blue-300'
            }`}
        >
          All Products
          <Badge variant="secondary" className="ml-1">
            {categories.reduce((sum, cat) => sum + cat.count, 0)}
          </Badge>
        </Button>

        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 transition-all duration-300 ${selectedCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                : 'hover:bg-blue-50 hover:border-blue-300'
              }`}
          >
            {categoryIcons[category.id] || <Cpu className="h-4 w-4" />}
            {category.name}
            <Badge variant="secondary" className="ml-1">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StoreCategoryFilter;