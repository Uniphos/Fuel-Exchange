import React from 'react';
import '../styles/scrollBarText.css';

const ScrollingTextBar = ({ text }) => {
    return (
        <div className="scrolling-text-bar">
            <div className="scrolling-text">
                <div className="scrolling-text-item">
                    <p>Jet A1</p> <p>Price</p> <p><span className='positive'>+1.27 </span></p>
                </div>
                <div className="scrolling-text-item">
                    <p>EN590</p> <p>Price</p> <p><span className='negative'>-0.46 </span></p>
                </div>
                <div className="scrolling-text-item">
                    <p>D6</p> <p>Price</p> <p><span className='positive'>+1.27 </span></p>
                </div>
            </div>
        </div>
    );
};

export default ScrollingTextBar;