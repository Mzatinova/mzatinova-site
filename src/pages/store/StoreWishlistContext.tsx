// src/pages/store/StoreWishlistContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

interface WishlistContextType {
    wishlist: string[];
    toggleWishlist: (productId: string) => void;
    isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [wishlist, setWishlist] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('wishlist');
        if (stored) setWishlist(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const toggleWishlist = (productId: string) => {
        setWishlist(prev =>
            prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
        );
    };

    const isInWishlist = (productId: string) => wishlist.includes(productId);

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) throw new Error('useWishlist must be used within WishlistProvider');
    return context;
};

// // WishlistContext.tsx
// import React, { createContext, useContext, useEffect, useState } from 'react';

// interface WishlistContextType {
//     wishlist: number[];
//     toggleWishlist: (productId: number) => void;
//     isInWishlist: (productId: number) => boolean;
// }

// const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [wishlist, setWishlist] = useState<number[]>([]);

//     useEffect(() => {
//         const stored = localStorage.getItem('wishlist');
//         if (stored) setWishlist(JSON.parse(stored));
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('wishlist', JSON.stringify(wishlist));
//     }, [wishlist]);

//     const toggleWishlist = (productId: number) => {
//         setWishlist(prev =>
//             prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
//         );
//     };

//     const isInWishlist = (productId: number) => wishlist.includes(productId);

//     return (
//         <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
//             {children}
//         </WishlistContext.Provider>
//     );
// };

// export const useWishlist = () => {
//     const context = useContext(WishlistContext);
//     if (!context) throw new Error('useWishlist must be used within WishlistProvider');
//     return context;
// };
