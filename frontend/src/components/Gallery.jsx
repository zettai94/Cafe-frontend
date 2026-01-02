import React from 'react';

export default function Gallery(){
    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

    return(
        <section id="gallery" className="carousel container">
            <div className="gallery-header">
                <h2>Gallery</h2>
                <a href="#">See more...</a>
            </div>
            <div className="gallery-viewpoint">
                <div className="gallery-trail">
                    {images.map((item, index) => (
                        <div key={index} className="gal-card"> 
                            <img src={item} alt={`${index} - ${item}`} className='gal-img'/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}