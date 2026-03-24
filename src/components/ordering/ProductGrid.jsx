import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from './cartComponents/CartContext'

const ProductGrid = ({ activeCategory }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

      
    useEffect(() => {
        const BASE_URL = process.env.REACT_APP_API_URL || 'https://localhost:8080';
        const PRODUCTS_URL = `${BASE_URL}/api/products`;

        const fetchProducts = async() => {
            setLoading(true);
            try {
                const params = new URLSearchParams();
                if (activeCategory && activeCategory !== 'All') {
                    params.append('category', activeCategory.toLowerCase());
                }
                
                const queryString = params.toString();
                const finalURL = queryString ? `${PRODUCTS_URL}?${queryString}` : PRODUCTS_URL;
                const response = await axios.get(finalURL);
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
            {products.length > 0? (
                products.map((product) => (
                    <div key={product.productId} className="product-card">
                        <div className="product-image-wrapper">
                            {/* Ensure your images are in the public/images folder */}
                            <img src={product.productImageURL} alt={product.productName} className="product-img" />
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
                                        onClick={() => addToCart(product.productId, 1)}
                                        // future: allow quantity choice and red quantity show when stock 5 or below
                                    >
                                        +
                                    </button>
                                
                                ) : (
                                    <span className="sold-out-badge">Out of Stock</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="empty-category">
                    <h2>Oops!</h2>
                    <p>Nothing available under <strong>{activeCategory}</strong> right now.</p>
                </div>
            )}
        </div>
    );
}

export default ProductGrid;