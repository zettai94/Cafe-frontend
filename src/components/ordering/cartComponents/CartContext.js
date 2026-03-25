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
            //console.log("Cart data from backend:", response.data);

            // get quantity from orderItem of currentOrder
            let items = response.data.orderList || [];
    
            const expiredItems = items.filter(item => {
                const expiryString = item.product?.inventory?.holdExpiresAt;
                if(!expiryString) return false; // if no expiry, consider it not expired
                const utcExpiryString = expiryString.includes('Z') ? expiryString : `${expiryString}Z`;
                const expiryDate = new Date(utcExpiryString);
                const now = new Date();
                return expiryDate < now;
            });

            if(expiredItems.length > 0) {
                //remove all expired items from order and alert user which items were removed
                for(const item of expiredItems)
                {
                    await axios.delete(`${API_BASE_URL}/api/orders/${currentId}/items/${item.orderItemId}`);
                }

                const names = expiredItems.map(item => item.product?.productName).join(', ');
                alert(`Reservation expired for: ${names}. They have been removed from your cart. Please add them again if you wish to order.`);
                const updatedResponse = await axios.get(`${API_BASE_URL}/api/orders/${currentId}`);
                const finalItems = updatedResponse.data.orderList || [];
                setCartItems(finalItems);
                setCartCount(finalItems.reduce((acc, item) => acc + (item.orderQty || 0), 0));
                return;
            }

            setCartItems(items);
            const total = items.reduce((acc, item) => acc + (item.orderQty || 0), 0);
            setCartCount(total);
        } catch (error) {
            console.error("Error connecting to Spring backend:", error);
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

            const updatedOrder = response.data;
            setCartItems(updatedOrder.orderList || []);
            setCartCount((updatedOrder.orderList || []).reduce((acc, item) => acc + item.orderQty, 0));

            if(updatedOrder.orderId.toString() !== currentId)
            {
                setOrderId(updatedOrder.orderId);
                localStorage.setItem('currentOrderId', updatedOrder.orderId);
            }
        } catch (e)
        {
            console.error("Couldn't add item: " + e.response?.data?.message || e.message);
        }
    };

    const removeFromCart = async(orderItemId) => {
        const currentId = localStorage.getItem('currentOrderId');
        if(!currentId) return;

        try {
            const response= await axios.delete(`${API_BASE_URL}/api/orders/${currentId}/items/${orderItemId}`);
        
            //if order was empty, java delete the order items list
            const updatedItems = response.data.orderList || [];
            setCartItems(updatedItems);
            const total = updatedItems.reduce((acc, item) => acc + (item.orderQty || 0), 0);
            setCartCount(total);
        } catch (e) {
            console.error("Couldn't remove item: " + e.message);
        }
    };

    const checkOrderStatus = useCallback(async() => {
        const currentId = localStorage.getItem('currentOrderId');
        if(!currentId) return;
        try{
            const response = await axios.get(`${API_BASE_URL}/api/orders/${currentId}`);
            const currentStatus = response.data.status;
            if(currentStatus !== 'PENDING')
            {
                console.log("Order is no longer pending. Refreshing...");
                setCartItems([]);
                setCartCount(0);
                setOrderId(null);
                localStorage.removeItem('currentOrderId');
                alert("Your previous order has expired or been processed. Your cart has been cleared.");
            } 
        }catch(e)
        {
            console.error("Error checking order status: " + e.message);
        }
    }, [API_BASE_URL]);
    
    useEffect(() => {
        //check if status is "pending", otherwise start new order
        const existingId = localStorage.getItem('currentOrderId');
        if(existingId) {
            checkOrderStatus();
            refreshCart();
        }

        //background cleanup check for expired IF website is actively being viewed 
        // every 1 minute
        const cleanupInterval = setInterval(() => {
            const id = localStorage.getItem('currentOrderId');
            if(document.visibilityState === 'visible' && id){
                console.log("Running background sync for OrderId " + id);
                checkOrderStatus();
                refreshCart();
            }
        }, 60000);
        return () => clearInterval(cleanupInterval);
    }, [checkOrderStatus, refreshCart]);

    return (
        <CartContext.Provider value={{ cartCount, cartItems, orderId, refreshCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);