
const OrderSidebar = ( { isCollapsed, setIsCollapsed, setCategory, onCartClick }) => {
    
    //temp category, should read from backend later
    const categories = ['Beverage', 'Cake', 'Pastry', 'Cookie'];

    return(
        <aside className={ `order-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-brand-section">
                {!isCollapsed && <span className="logo">Indie Bites</span>}
                <button onClick={() => setIsCollapsed(!isCollapsed)} className="toggle-btn">
                    {isCollapsed ? "»" : "«"}
                </button>
            </div>
            <nav className="sidebar-nav">
                    <button className="nav-item" onClick={() => window.location.href = '/'}>
                        <i className="icon-home"></i> {!isCollapsed && "Home"}
                    </button>
                    
                    <button className="nav-item" onClick={() => setCategory('All')}>
                        <i className="icon-grid"></i> {!isCollapsed && "View All"}
                    </button>

                    <div className="nav-dropdown">
                        <div className="dropdown-label">
                            <i className="icon-options"></i> {!isCollapsed && "Options"}
                        </div>
                        {!isCollapsed && (
                            <ul className="dropdown-items">
                                {categories.map(cat => (
                                    <li key={cat} onClick={() => setCategory(cat)}>{cat}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button className="nav-item cart-btn" onClick={onCartClick}>
                        <i className="icon-cart"></i> {!isCollapsed && "Cart"}
                    </button>
                </nav>
        </aside>
    );
}

export default OrderSidebar;