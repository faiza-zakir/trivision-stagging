import React, { createContext, useState } from 'react';

// Create a Context for the product
export const ProductContext = createContext();

// Create a Provider component
export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(null);

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    );
};