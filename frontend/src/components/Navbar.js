import React from 'react';

function Navbar() {
    return(
        <nav className='navbar navbar-expand-md sticky-top'>
            <div className='container'>
                {/* Brand */}
                <a className='navbar-brand' href='#home'>Indie Bites</a>
            
                {/* Mobile toggle button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">

                    <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#menu">Menu</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#gallery">Gallery</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                    </li>

                </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;