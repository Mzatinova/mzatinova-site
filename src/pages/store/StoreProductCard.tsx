import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart } from 'lucide-react';
import { useWishlist } from './StoreWishlistContext'; // adjust import path

const ProductCard = ({ product, onAddToCart }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-2 hover:border-blue-300 relative">
      <CardContent className="p-4">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white">
              -{discount}%
            </Badge>
          )}
          <button
            onClick={() => toggleWishlist(product.id)}
            aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            className={`absolute top-2 right-2 transition-opacity ${
              inWishlist ? 'text-red-500 fill-red-500 opacity-100' : 'text-gray-400 opacity-80 group-hover:opacity-100'
            }`}
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>
        
        <Badge variant="secondary" className="mb-2">
          {product.category}
        </Badge>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}>
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.rating})</span>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;




// import React from 'react';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { ShoppingCart, Heart } from 'lucide-react';

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   originalPrice?: number;
//   image: string;
//   category: string;
//   rating: number;
//   inStock: boolean;
// }

// interface ProductCardProps {
//   product: Product;
//   onAddToCart: (product: Product) => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
//   const discount = product.originalPrice 
//     ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
//     : 0;

//   return (
//     <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-2 hover:border-blue-300">
//       <CardContent className="p-4">
//         <div className="relative overflow-hidden rounded-lg mb-4">
//           <img 
//             src={product.image} 
//             alt={product.name}
//             className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
//           />
//           {discount > 0 && (
//             <Badge className="absolute top-2 left-2 bg-red-500 text-white">
//               -{discount}%
//             </Badge>
//           )}
//           <Button 
//             size="sm" 
//             variant="ghost" 
//             className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
//           >
//             <Heart className="h-4 w-4" />
//           </Button>
//         </div>
        
//         <Badge variant="secondary" className="mb-2">
//           {product.category}
//         </Badge>
        
//         <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        
//         <div className="flex items-center gap-2 mb-3">
//           <div className="flex text-yellow-400">
//             {[...Array(5)].map((_, i) => (
//               <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}>
//                 ★
//               </span>
//             ))}
//           </div>
//           <span className="text-sm text-gray-600">({product.rating})</span>
//         </div>
        
//         <div className="flex items-center gap-2 mb-4">
//           <span className="text-2xl font-bold text-blue-600">${product.price}</span>
//           {product.originalPrice && (
//             <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
//           )}
//         </div>
//       </CardContent>
      
//       <CardFooter className="p-4 pt-0">
//         <Button 
//           onClick={() => onAddToCart(product)}
//           disabled={!product.inStock}
//           className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
//         >
//           <ShoppingCart className="h-4 w-4 mr-2" />
//           {product.inStock ? 'Add to Cart' : 'Out of Stock'}
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default ProductCard;