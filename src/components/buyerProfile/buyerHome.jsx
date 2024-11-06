import React from "react";
import { useState } from "react";
import "../../styles/buyerProfile/buyerHome.css";

const HomeOp = ({ setPageOptions, setIDOption }) => {

    const handleClick = (event) => {
        const id = event.currentTarget.id;
        setPageOptions("info");
        setIDOption(id);
    };

    return (
        <div className="homeOp">
            <form className="filter">
                <input type="text" placeholder="Search" className="search" />
                <input type="submit" value="filter" className="filterBtn"/>
            </form>
            <div className="homeOpContainer">
                <div className="homeOpItem" id="JET A1" onClick={handleClick}>
                    <h1>JET A1</h1> <br/>
                    <div className="description">
                        <p>Contract: 2mil bbl x 12mo</p>
                        <p>Trial amount: 200k bbl </p>
                        <p>Origin: US Gulf Coast </p>
                    </div>
                </div>
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
    );
};

export default HomeOp;