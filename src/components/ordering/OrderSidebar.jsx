import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../constants/categories';

const OrderSidebar = ( { isCollapsed, setIsCollapsed, setCategory, activeCategory }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        if (isCollapsed) {
            setIsCollapsed(false);
            setIsDropdownOpen(true);
        } else {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    return(
        <aside className={ `order-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-content">
                <div className="sidebar-wrapper">
                    <Link to="/" className="sidebar-brand-link">
                        <div className="sidebar-brand">
                            {!isCollapsed && <span className="logo-text">Indie Bites</span>}
                            {isCollapsed && <i className="icon-logo-alt"></i>} 
                        </div>
                    </Link>

                    <nav className="sidebar-nav">
                        <Link to="/" className="nav-item">
                            <i className="icon-home"></i> 
                            {!isCollapsed && <span>Home</span>}
                        </Link>

                        {/* View All passes an empty string for the API fetch later */}
                        <button className="nav-item" onClick={() => setCategory('')}>
                            <i className="icon-grid"></i> 
                            {!isCollapsed && <span>View All</span>}
                        </button>

                        <div className={`nav-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                            <button className="nav-item dropdown-toggle" onClick={handleToggleDropdown}>
                                <div className="nav-item-left">
                                    <i className="icon-options"></i>
                                    {!isCollapsed && <span>Categories</span>}
                                </div>
                                {!isCollapsed && <span className="arrow">{isDropdownOpen ? '▴' : '▾'}</span>}
                            </button>

                            {!isCollapsed && isDropdownOpen && (
                                <ul className="dropdown-list">
                                    {Object.values(CATEGORIES).map((cat) => (
                                        <li 
                                            key={cat.value} 
                                            className={`dropdown-item ${activeCategory === cat.value ? 'selected' : ''}`}
                                            onClick={() => setCategory(cat.value)}
                                        >
                                            {cat.label}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <button className="nav-item cart-btn-sidebar">
                            <i className="icon-cart"></i> 
                            {!isCollapsed && <span>Cart</span>}
                        </button>
                    </nav>
                </div>
            </div>

            <div className="sidebar-footer">
                <button className="collapse-toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ? "»" : "«"}
                </button>
            </div>
        </aside>
    );
}

export default OrderSidebar;