export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  description: string;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 1199,
    originalPrice: 1299,
    image: '/placeholder.svg',
    category: 'smartphones',
    rating: 5,
    inStock: true,
    description: 'Latest iPhone with titanium design'
  },
  {
    id: '2',
    name: 'MacBook Pro 16"',
    price: 2499,
    originalPrice: 2699,
    image: '/placeholder.svg',
    category: 'laptops',
    rating: 5,
    inStock: true,
    description: 'Powerful laptop for professionals'
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    price: 399,
    originalPrice: 449,
    image: '/placeholder.svg',
    category: 'headphones',
    rating: 4,
    inStock: true,
    description: 'Premium noise-canceling headphones'
  },
  {
    id: '4',
    name: 'Canon EOS R5',
    price: 3899,
    image: '/placeholder.svg',
    category: 'cameras',
    rating: 5,
    inStock: true,
    description: 'Professional mirrorless camera'
  },
  {
    id: '5',
    name: 'Apple Watch Ultra 2',
    price: 799,
    originalPrice: 849,
    image: '/placeholder.svg',
    category: 'watches',
    rating: 4,
    inStock: true,
    description: 'Ultimate sports watch'
  },
  {
    id: '6',
    name: 'PlayStation 5',
    price: 499,
    image: '/placeholder.svg',
    category: 'gaming',
    rating: 5,
    inStock: false,
    description: 'Next-gen gaming console'
  },
  {
    id: '7',
    name: 'Samsung 65" OLED TV',
    price: 1799,
    originalPrice: 1999,
    image: '/placeholder.svg',
    category: 'tv',
    rating: 4,
    inStock: true,
    description: '4K OLED Smart TV'
  },
  {
    id: '8',
    name: 'NVIDIA RTX 4090',
    price: 1599,
    image: '/placeholder.svg',
    category: 'components',
    rating: 5,
    inStock: true,
    description: 'High-end graphics card'
  }
];

// export const categories = [
//   { id: 'smartphones', name: 'Smartphones', count: 1 },
//   { id: 'laptops', name: 'Laptops', count: 1 },
//   { id: 'headphones', name: 'Headphones', count: 1 },
//   { id: 'cameras', name: 'Cameras', count: 1 },
//   { id: 'watches', name: 'Watches', count: 1 },
//   { id: 'gaming', name: 'Gaming', count: 1 },
//   { id: 'tv', name: 'TV & Audio', count: 1 },
//   { id: 'components', name: 'Components', count: 1 }
// ];

export const categories = [
  { id: 'smartphones', name: 'Smartphones', count: 1, icon: 'Smartphone' },
  { id: 'laptops', name: 'Laptops', count: 1, icon: 'Laptop' },
  { id: 'headphones', name: 'Headphones', count: 1, icon: 'Headphones' },
  { id: 'cameras', name: 'Cameras', count: 1, icon: 'Camera' },
  { id: 'watches', name: 'Watches', count: 1, icon: 'Watch' },
  { id: 'gaming', name: 'Gaming', count: 1, icon: 'Gamepad2' },
  { id: 'tv', name: 'TV & Audio', count: 1, icon: 'Tv' },
  { id: 'components', name: 'Components', count: 1, icon: 'Cpu' }
];