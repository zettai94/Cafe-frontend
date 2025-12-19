import React, { useState } from 'react';
import { menu, coffee, non_coffee, baked } from "./Menu";

export default function MenuCard() { 
   
        const [startIndex, setStartIndex] = useState(0);
        const ITEM_PER_PAGE= 3;
        const TOTAL_ITEMS = menu.length;

        const slideOffset = (startIndex / ITEM_PER_PAGE) * 100;
        const handleNext= () => {
            const nextIndex = startIndex + ITEM_PER_PAGE;
            if(nextIndex < TOTAL_ITEMS) {
                setStartIndex(nextIndex);
            }
            else if (startIndex +1 < TOTAL_ITEMS) {
                setStartIndex(TOTAL_ITEMS - ITEM_PER_PAGE);
            }
        }; 

        const handlePrev = () => {
            const prevIndex = startIndex - ITEM_PER_PAGE;
            if(prevIndex >= 0) {
                setStartIndex(prevIndex);
            }
            else {
                setStartIndex(0);
            }
        };

        const isPreviousDisabled = startIndex === 0;
        const isNextDisabled = startIndex + ITEM_PER_PAGE >= TOTAL_ITEMS;
        
        const fullMenu = [...coffee, ...non_coffee, ...baked];

        return (
        <section className='menu container'>
            <div className="highlight-container"> 
                <div className="menu-header">
                    <div id="menu-title"><h2>Menu Highlights</h2></div>
                        {/* Navigation next/prev */}
                        <div className="menu-slider-wrapper">
                            <div className="slider-controls">
                                <button onClick={handlePrev} disabled={isPreviousDisabled}>
                                    Prev
                                </button>
                            </div>
                            <div className="slider-controls">
                                <button onClick={handleNext} disabled={isNextDisabled}>
                                    Next
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
                                        gap: '20px',
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
            
            <br></br>

            {/* menu lists */}
            {fullMenu.map((category, index) => (
                <div key={index} className="menu-list-section">
                    
                    {/* Left/Right Column: Menu Text */}
                    <div className="menu-list">
                        <div className="menu-list-header">
                            <h2>{category.title}</h2>
                        </div>

                        <div className="menu-list-content">
                            {/* Items Column - Aligned Left */}
                            <div className="menu-list-items">
                                {category.items.map((item, i) => (
                                    <div key={i} className="menu-item-name">
                                        {item.name}
                                    </div>
                                ))}
                            </div>

                            {/* Prices Column - Aligned Right */}
                            <div className="menu-list-prices">
                                {category.items.map((item, i) => (
                                    <div key={i} className="menu-item-price">
                                        {item.price}
                                    </div>
                                ))}
                            </div>
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
                

                    
        </section>
    );
}
