import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const refreshCart = async () => {
        try {
            // temp
            const response = await axios.get('http://localhost:8080/api/orders/1'); 
            
            // get quantity from orderItem of currentOrder
            const items = response.data.orderItems || [];
            const total = items.reduce((acc, item) => acc + item.quantity, 0);
            
            setCartCount(total);
        } catch (error) {
            console.error("Error connecting to Spring backend:", error);
            setCartCount(0);
        }
    };

    useEffect(() => {
        refreshCart();
    }, []);

    return (
        <CartContext.Provider value={{ cartCount, refreshCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);