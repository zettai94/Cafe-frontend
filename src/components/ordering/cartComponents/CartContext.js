import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [orderId, setOrderId] = useState(localStorage.getItem('currentOrderId'));

    const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://localhost:8080';

    /* for future usage: check orderid
        create or retrieve orderid upon clicking on "Cart"
        Cart panel will also open onClick
     */

    const refreshCart = useCallback(async() => {
        const currentId = localStorage.getItem('currentOrderId');
        if(!currentId) return;
        try {
            const response = await axios.get(`${API_BASE_URL}/api/orders/${currentId}`);
            
            // get quantity from orderItem of currentOrder
            const items = response.data.orderItems || [];
            const total = items.reduce((acc, item) => acc + item.quantity, 0);
            setCartCount(total);
        } catch (error) {
            console.error("Error connecting to Spring backend:", error);
            setCartCount(0);
        }
    }, [API_BASE_URL]);

    const addToCart = async(productId) => {
        try{
            const response = await axios.post(`${API_BASE_URL}/api/orders/add-items`, {
                productId: productId,
                quantity: 1
            });

            if(response.data.orderId && !orderId)
            {
                const newId = response.data.orderId;
                setOrderId(newId);
                localStorage.setItem('currentOrderId', newId);
            }
        } catch (e)
        {
            console.log("Couldn't add item: " + e);
        }
    };
    
    useEffect(() => {
        refreshCart();
    }, [refreshCart]);

    return (
        <CartContext.Provider value={{ cartCount, orderId, refreshCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);