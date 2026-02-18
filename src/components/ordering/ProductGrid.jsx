import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from './cartComponents/CartContext'

const ProductGrid = ({ activeCategory }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    const BASE_URL = process.env.REACT_APP_API_URL || 'https://indiebites-api.onrender.com';
    const PRODUCTS_URL = `${BASE_URL}/api/products`;
    
    useEffect(() => {
        const fetchProducts = async() => {
            setLoading(true);
            try {
                const isAll = !activeCategory || activeCategory === 'All';
                const url = isAll
                    ? PRODUCTS_URL
                    : `${PRODUCTS_URL}?category=${activeCategory}`;

                const response = await axios.get(url);
                setProducts(response.data);
            } catch (e)
            {
                console.log("Error fetching products: " + e);
            }
            finally
            {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [activeCategory]);

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loading-circle"></div>
                <p className="loading-text">PREPARING THE MENU...</p>
            </div>
        );
    }
    
    return (
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.productId} className="product-card">
                    <div className="product-image-wrapper">
                        {/* Ensure your images are in the public/images folder */}
                        <img src={product.productImageURL} alt={product.productName} />
                    </div>
                    <div className="product-info">
                        <h3>{product.productName}</h3>
                        <p>{product.description}</p>
                        <div className="product-footer">
                            <span className="price">${product.productPrice.toFixed(2)}</span>
                            
                            {/* Inventory Logic */}
                            {(product.inventory ===null || product.inventory.inStock > 0 )? (
                                <button 
                                    className="add-btn" 
                                    onClick={() => addToCart(product.productId)}
                                    // future: allow quantity choice and red quantity show when stock 5 or below
                                >
                                    +
                                </button>
                            ) : (
                                <span className="sold-out-badge">Sold Out</span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;