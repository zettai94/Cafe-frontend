import React, { useState, useEffect } from 'react';
import { menu, coffee, non_coffee, baked } from "./Menu";

export default function MenuCard() { 
   
        const [startIndex, setStartIndex] = useState(0);
        const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 1 : 3);
        const TOTAL_ITEMS = menu.length;

        useEffect(() => {
            const handleResize = () => {
                setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
            };
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        const slideOffset = (startIndex / itemsPerPage) * 100;
        const handleNext= () => {
            setStartIndex((startIndex + itemsPerPage) % TOTAL_ITEMS);
        }; 

        const handlePrev = () => {
            const prevIndex = startIndex - itemsPerPage;
            if(prevIndex >= 0) {
                setStartIndex(prevIndex);
            }
            else {
                setStartIndex(TOTAL_ITEMS - itemsPerPage);
            }
        };
        
        const fullMenu = [...coffee, ...non_coffee, ...baked];

        return (
        <section id="menu" className='menu container'>
            <div className="highlight-container"> 
                <div className="menu-header">
                    <div id="menu-title"><h2>Menu Highlights</h2></div>
                        {/* Navigation next/prev */}
                        <div className="menu-slider-wrapper">
                            <div className="slider-controls">
                                <button onClick={handlePrev} className="btn-prevNext">
                                    <ion-icon name="chevron-back-outline"></ion-icon>
                                </button>
                                <button onClick={handleNext} className="btn-prevNext">
                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Menu items grid*/}
                    <div className="menu-viewpoint">
                        <div
                            className="menu-slider-track"
                            style={{ transform: `translateX(-${slideOffset}%)`, 
                                        display: 'flex',
                                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                        >
                            {menu.map((item, index) => (
                                <div key={item.title || index} className="menu-card">
                                    <div className="menu-image-container text-center">
                                        <img src={item.picture} alt={item.title} className="img-fluid rounded mb-3"/>
                                        <div className="menu-image-text">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                        
                                </div>
                            ))}
                        </div>
                    </div>
            </div>

            <br />

            {/* menu lists */}
           <div className="menu-list-container">
             {fullMenu.map((category, index) => (
                <div key={index} className="menu-list-section">
                    
                    {/* Left/Right Column: Menu Text */}
                    <div className="menu-list">
                        <div className="menu-list-header">
                            <h2>{category.title}</h2>
                        </div>

                        <div className="menu-list-content">
                            {category.items.map((item, i) => (
                                <div key={i} className="menu-item-row">
                                    <span className="menu-item-name">{item.name}</span>
                                    <span className="menu-item-price">{item.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right/Left Column: Menu Image */}
                    <div className="menu-list-pic">
                        <div className="menu-image-frame">
                            <img src={category.image} alt={category.title} />
                        </div>
                    </div>

                </div>
            ))}
           </div>
                

                    
        </section>
    );
}
