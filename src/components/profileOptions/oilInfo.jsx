import React, { useState } from "react";
import "../../styles/infoOp.css";

const InfoOp = ({ Id }) => {
    const [activeID, setActiveID] = useState(Id); // Correctly initialize state
    console.log(activeID);

    const handleClick = (event) => {
        setActiveID(event.currentTarget.id);
    };

    return (
        <div className="oilInfo">
            <div className="topInfo">
                <div >
                    <div className="infoRow">
                        <h1>JET A1:</h1> 
                        <p>Platts +12</p>
                    </div>
                    <div className="description">
                        <p>Contract: 2mil bbl x 12mo</p>
                        <p>Trial amount: 200k bbl </p>
                        <p>Origin: US Gulf Coast </p>
                    </div>
                </div>
                <button className="startOrder">Start order</button>
            </div>
            <div className="bottomInfo">
            <div className="infoDiscrp">
                    <p>Description</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parir.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="order">
                    <p>Name your order</p>
                    <div className="orderDis">
                        <form className="orderDis">
                            <select id="Qty" name="Qty">
                                <option value="Qty">Qty</option>
                            </select>
                            <input type="text" id="maxPrice" name="maxPrice" placeholder="Max Price"/>
                            <input type="text" id="minPrice" name="minPrice" placeholder="Min Price"/>
                            <select id="location" name="location">
                                <option value="location">Port of delivery</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            <div className="moreOptions">
                <div className="homeOpContainer">
                    <div className="homeOpItem" id="placeholder1" onClick={handleClick}>
                        <h1>placeholder</h1>   
                    </div>
                    <div className="homeOpItem" id="placeholder2" onClick={handleClick}>
                        <h1>placeholder</h1>   
                    </div>
                    <div className="homeOpItem" id="placeholder3" onClick={handleClick}>
                        <h1>placeholder</h1>   
                    </div>
                    <div className="homeOpItem" id="placeholder4" onClick={handleClick}>
                        <h1>placeholder</h1>   
                    </div>
                    <div className="homeOpItem" id="placeholder5" onClick={handleClick}>
                        <h1>placeholder</h1>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoOp;