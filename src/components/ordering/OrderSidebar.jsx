import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../constants/categories';

const OrderSidebar = ( { isCollapsed, setIsCollapsed, setCategory, activeCategory }) => {
   return(
    <div className="sidebar-container">
        <Sidebar 
            collapsed={isCollapsed}
            backgroundColor="var(--primary-color)"
            width="40%"
            collapsedWidth="60px"
            transitionDuration={300}
            rootStyles={{ border: "none",
                            height: '100vh',
                            position: 'fixed'
                        }}
        >
            <div className="menu-navi">
                <Menu>
                    <MenuItem 
                        component={<Link to="/" />} 
                        className="custom-nav"
                    > 
                        <div className="nav-box logo-box">Indie Bites</div> 
                    </MenuItem>
                    <MenuItem component={<Link to="/" />} className="nav-menu-item">
                        <div className="nav-box">Home</div>
                    </MenuItem>
                    <MenuItem onClick={() => setCategory('')} className="nav-menu-item">
                        <div className="nav-box">View All</div>
                    </MenuItem>
                    <SubMenu 
                        label={<div className="nav-box options-box">Categories</div>}
                        className="submenu"
                    >
                        {Object.values(CATEGORIES).map((cat) => (
                        <MenuItem 
                            key={cat.value} 
                            onClick={() => setCategory(cat.value)}
                            className={activeCategory === cat.value ? 'active-cat' : ''}
                        >
                            {cat.label}
                        </MenuItem>
                        ))}
                    </SubMenu>
                    <MenuItem className="custom-nav">
                        <div className="nav-box">Cart</div>
                    </MenuItem>
                </Menu>
            </div>

            {/* toggle section */}
            <div className="sidebar-toggle">
                <button className="collapse-toggle" onClick={ () => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ? (<IoChevronForwardOutline
                                        color={"var(--text-light)"}
                                        size={22}/>
                                    ) : 
                                    (<IoChevronBackOutline
                                            color={"var(--text-light)"}
                                            size={22} />
                                    )}
                </button>
            </div>
        </Sidebar>
    </div>
   );
}

export default OrderSidebar;