import React from 'react';

function Hero() {
    return(
        <header className='header py-4 mt-5'>
            <div className='container'>
                <div className="row align-items-center">

                    {/* Text column */}
                    <div className="col-md text-start">
                        <h1 className="display-4 fw-bold">
                            Welcome to Indie Bites
                        </h1>
                        <p className="lead">
                            Serving homemade baked goods and specialty coffee with love and care. Order online for pickup or delivery!
                        </p>
                    </div>

                    {/* Image column */}
                    <div className="col-md-6 text-center">
                        <div className="header-image-placeholder">
                            <img src='../images/orange_swissroll.png' alt='orange swissroll and cranberry scones' className='img-fluid rounded'/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero; 