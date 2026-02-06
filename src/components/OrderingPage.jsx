import { useState } from 'react';
import OrderSidebar from './OrderSidebar';


const OrderingPage =() =>{
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [category, setCategory] = useState('All');
    const [isCartOpen, setIsCartOpen] = useState(false);

    return(
        <div className="order-layout">
            <OrderSidebar 
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
                setCategory={setCategory}
                onCartClick={() => setIsCartOpen(true)}
            />
        </div>
    );
}

export default OrderingPage;