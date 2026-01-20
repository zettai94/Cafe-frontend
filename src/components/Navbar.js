import OrderButton from './OrderButton';

function Navbar() {
    const backToTop = (e) => {
        e.preventDefault(); //prevent # from appearing in URL
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <nav className='navbar navbar-expand-md fixed-top'>
            <div className='container'>
                {/* Brand */}
                <a className='navbar-brand' href='/' onClick={backToTop}>Indie Bites</a>
            
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
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                        <a className="nav-link" href="/" onClick={backToTop}>Home</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="#features">About</a>
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
                <div className="nav-order-wrapper">
                    <OrderButton variant="nav-order-btn" text="Order Here"/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;