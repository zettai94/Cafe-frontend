import React from 'react';

export default function Gallery(){
    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

    const doubleImages = [...images, ...images];
    return(
        <section id="gallery" className="carousel container">
            <div className="gallery-header">
                <h2>Gallery</h2>
                <a href="https://www.instagram.com/theindiebiteskch/" target="_black">See more...</a>
            </div>
            <div className="gallery-viewpoint">
                <div className="gallery-trail">
                    {doubleImages.map((item, index) => (
                        <div key={index} className="gal-card"> 
                            <img src={item} alt={`${index} - ${item}`} className='gal-img'/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}