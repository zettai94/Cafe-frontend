import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
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
            setCartItems(items);

            const total = items.reduce((acc, item) => acc + item.quantity, 0);
            setCartCount(total);
        } catch (error) {
            console.error("Error connecting to Spring backend:", error);
            setCartItems([]);
            setCartCount(0);
        }
    }, [API_BASE_URL]);

    const addToCart = async(productId) => {
        const currentId = localStorage.getItem('currentOrderId');
        
        try{
            const response = await axios.post(`${API_BASE_URL}/api/orders/add-items`, {
                orderId: currentId,
                productId: productId,
                quantity: 1
            });

            if(response.data.orderId && !orderId)
            {
                const newId = response.data.orderId;
                setOrderId(newId);
                localStorage.setItem('currentOrderId', newId);
            }
            await refreshCart();
        } catch (e)
        {
            console.log("Couldn't add item: " + e);
        }
    };
    
    useEffect(() => {
        const existingId = localStorage.getItem('currentOrderId');
        if(existingId) {
           refreshCart();
        }
    }, []);

    return (
        <CartContext.Provider value={{ cartCount, cartItems, orderId, refreshCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);