import React from 'react';

function Header() {
    return(
        <header className='header p-5'>
            <div className='header-content'>
                <div className="row align-items-center">

                    {/* Text column */}
                    <div className="col-md text-start">
                        <h1 className="display-6 fw-bold">
                            Welcome to IndieBites Cafe
                        </h1>
                        <p className="lead p-1">
                            Meticulously crafted coffee, fresh bites, and a seamless ordering experience.
                        </p>
                    </div>

                    {/* Image column */}
                    <div className="col-md-6 text-center">
                        <div className="header-image-placeholder">
                            <img src='#' alt='insert image for later' className='img-fluid rounded'/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header; 