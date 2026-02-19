import { useState } from 'react';
import OrderSidebar from '../../components/ordering/OrderSidebar';
import ProductGrid from '../../components/ordering/ProductGrid';
import { CartProvider } from '../../components/ordering/cartComponents/CartContext';
import './OrderingPage.css';
const OrderingPage =() =>{
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [category, setCategory] = useState('All');
    const [isCartOpen, setIsCartOpen] = useState(false);

    return(
        <CartProvider>
            <div className="order-layout">
                <OrderSidebar 
                    isCollapsed={isCollapsed}
                    setIsCollapsed={setIsCollapsed}
                    setCategory={setCategory}
                    onCartClick={() => setIsCartOpen(true)}
                />
                <ProductGrid />
            </div>
        </CartProvider>
    );
}

export default OrderingPage;