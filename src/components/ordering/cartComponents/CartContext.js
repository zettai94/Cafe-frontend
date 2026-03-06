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
            
            //debug:
            console.log("Cart data from backend:", response.data);

            // get quantity from orderItem of currentOrder
            const items = response.data.orderList || [];
            setCartItems(items);

            const total = items.reduce((acc, item) => acc + (item.orderQty || 0), 0);
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

            const newId = response.data.orderId;
            if(newId && newId !== currentId)
            {
                //if it's different from current, update local storage and state
                setOrderId(newId);
                localStorage.setItem('currentOrderId', newId);
            }
            await refreshCart();
        } catch (e)
        {
            console.log("Couldn't add item: " + e);

            //if reponse status is not 
            if(e.response && (e.response.status === 400 || e.response.status === 403))
            {
                const userConfirmed = window.confirm(
                    "Your previous session has expired. Do you want to start a new order?"
                )
                if(userConfirmed)
                {
                    localStorage.removeItem('currentOrderId');
                    setOrderId(null);
                    console.log("Starting new order...");
                    await addToCart(productId);
                }
                else{
                    localStorage.removeItem('currentOrderId');
                    setOrderId(null);
                    setCartCount(0);
                    setCartItems([]);
                }
            }
        }
    };

    const removeFromCart = async(orderItemId) => {
        const currentId = localStorage.getItem('currentOrderId');
        if(!currentId) return;

        try {
            await axios.delete(`${API_BASE_URL}/api/orders/${currentId}/items/${orderItemId}`);
            await refreshCart();
            const response = await axios.get(`${API_BASE_URL}/api/orders/${currentId}`);
            if(!response.data) {
                localStorage.removeItem('currentOrderId');
                setOrderId(null);
                setCartCount(0);
                setCartItems([]);
            }
        } catch (e) {
            console.error("Couldn't remove item: " + e.message);
        }
    };
    
    useEffect(() => {
        const existingId = localStorage.getItem('currentOrderId');
        if(existingId) {
           refreshCart();
        }
    }, [refreshCart]);

    return (
        <CartContext.Provider value={{ cartCount, cartItems, orderId, refreshCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);