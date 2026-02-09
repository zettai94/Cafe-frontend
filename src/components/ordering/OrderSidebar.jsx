import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../constants/categories';

const OrderSidebar = ( { isCollapsed, setIsCollapsed, setCategory, activeCategory }) => {
   return(
    <div className="sidebar-container" style={{ display: 'flex', height:'100vh'}}>
        <Sidebar 
            collapsed={isCollapsed}
            backgroundColor="var(--primary-color)"
            width="40%"
            collapsedWidth="60px"
            transitionDuration={300}
            rootStyles={{ border: "none" }}
        >
            <Menu>
                <MenuItem 
                    component={<Link to="/" />} 
                    className="brand-menu-item"
                > 
                    <div className="white-box">Indie Bites</div> 
                </MenuItem>
                <MenuItem component={<Link to="/" />} className="nav-menu-item">
                    <div className="white-box">Home</div>
                </MenuItem>
                <MenuItem onClick={() => setCategory('')} className="nav-menu-item">
                    <div className="white-box">View All</div>
                </MenuItem>
                <SubMenu 
                    label={<div className="white-box border-red">Categories</div>}
                    className="nav-menu-item category-submenu"
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
                <MenuItem className="nav-menu-item">
                    <div className="white-box">Cart</div>
                </MenuItem>
            </Menu>
        </Sidebar>
    </div>
   );
}

export default OrderSidebar;