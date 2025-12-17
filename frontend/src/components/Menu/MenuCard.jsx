import React, { useState } from 'react';
import { menu } from "./Menu";

export default function MenuCard() { 
   
        const [startIndex, setStartIndex] = useState(0);
        const ITEM_PER_PAGE= 3;
        const TOTAL_ITEMS = menu.length;
        const displayItems = menu.slice(startIndex, startIndex + ITEM_PER_PAGE);
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
         return (
        <section className='menu-card container'>
            <div className="menu-grid"> 
                <div className="menu-title-grid">
                    <div id="menu-title"><h2 >Menu Highlights</h2></div>
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
                    <div className="menu-grid-content">
                        {displayItems.map((item, index) => (
                            <div key={item.title || index} className="menu-item">
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
        </section>
    );
}
