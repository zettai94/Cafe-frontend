import { useCart } from './CartContext';
import { IoClose } from 'react-icons/io5';

const CartPanel = ({ isOpen, onClose }) => {
    const { cartCount, cartItems = [], updateQuantity, removeFromCart } = useCart();

    if (!isOpen) return null;

    return(
        <>
        <div className="cart-click-capture" onClick={onClose}></div>
        <div className="cart-panel-wrapper">
            <div className="cart-panel">
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-cart-btn" onClick={onClose}>
                        <IoClose size={30} />
                    </button>
                </div>

                <div className={`cart-content ${cartItems.length === 0 ? 'is-empty' : ''}`}>
                    {cartItems?.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cartItems.map((item)=> (
                            <div key={item.orderItemId} className="cart-item-row">
                                <div className="cart-item-pic">
                                    <img src={item.product?.productImageURL} alt={item.product.productName} />
                                </div>
                                <div className="cart-item-info">
                                    <span className="cart-item-name">{item.product?.productName} x {item.orderQty}</span>
                                </div>
                                <div className="cart-item-actions">
                                    {/* Future implementation: allow update quantity */}
                                    <button className="cart-remove-item-btn" onClick={() => removeFromCart(item.product?.productId)}>
                                        <IoClose/>
                                    </button>
                                    {/* close button not functioning properly*/}
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="cart-footer">
                    <button className="general-btn cancel-btn" onClick={onClose}>Cancel</button>
                    <button className="general-btn checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default CartPanel;