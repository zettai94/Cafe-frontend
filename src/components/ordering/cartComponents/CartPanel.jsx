import { use } from 'react';
import { useCart } from './cartComponents/CartContext';
import { IoClose } from 'react-icons/io5';

const CartPanel = ({ isOpen, onClose }) => {
    const { cartCount, cartItems, updateQuantity, removeFromCart } = useCart();

    if (!isOpen) return null;

    return(
        <div className="cart-container">
            <div className="cart-panel">
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-cart-btn" onClick={onClose}>
                        <IoClose size={24} />
                    </button>
                </div>

                <div className="cart-content">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cartItems.map((item)=> (
                            <div key={item.productId} className="cart-item-row">
                                <div className="cart-item-pic">
                                    <img src={item.productImageURL} alt={item.productName} />
                                </div>
                                <div className="cart-item-info">
                                    <span className="cart-item-name">{item.productName} x {item.quantity}</span>
                                </div>
                                <div className="cart-item-actions">
                                    {/* Future implementation: allow update quantity */}
                                    <button className="cart-remove-item-btn" onClick={() => removeFromCart(item.productId)}>
                                        <IoClose/>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="cart-footer">
                    <button className="cart-btn cancel-btn" onClick={onClose}>Cancel</button>
                    <button className="cart-btn checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartPanel;