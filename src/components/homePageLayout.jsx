import React from "react";
import NavBar from "./mainNavBar";
//import './style/pageLayout.css'

const homePageLayout = ({ children }) => {
    return (
        <div className="page-layout">
            <NavBar />
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default homePageLayout;