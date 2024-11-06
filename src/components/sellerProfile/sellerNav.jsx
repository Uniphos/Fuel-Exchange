import React, { useState } from "react";
import "../../styles/buyerProfile/buyerNav.css";

//import for all icons and logos
import logo from "../../assets/logo.png";
import profileIcon from "../../assets/Icons/profileIcon.png";
import home from "../../assets/Icons/Home.png";
import analitics from "../../assets/Icons/analitics.png";
import settings from "../../assets/Icons/settings.png";
import chat from "../../assets/Icons/chat.png";
import add from "../../assets/Icons/add.png";

const SellerNav = ({ setPageOptions }) => {
    const [activeButton, setActiveButton] = useState("home");

    const handleButtonClick = (page) => {
        setActiveButton(page);
        setPageOptions(page);
    };

    const handleLogoPress = () => {
        window.location.href = "/";
    }

    return (
        <div className="profileNav">
            <div className="profile-nav">
                <div className="topRow">
                    <img 
                        src={profileIcon} 
                        alt="profIcon" 
                        className={`icons ${activeButton === "profileInfo" ? "active" : ""}`}
                        onClick={() => handleButtonClick("profile")}
                    />
                    <img src={logo} alt="Logo" className="profileLogo" onClick={handleLogoPress}/>
                </div>
                <div className="options">
                    <img
                        src={home}
                        alt="home"
                        className={`icons ${activeButton === "home" ? "active" : ""}`}
                        onClick={() => handleButtonClick("home")}
                    />
                    <img
                        src={analitics}
                        alt="analitics"
                        className={`icons ${activeButton === "analitics" ? "active" : ""}`}
                        onClick={() => handleButtonClick("analitics")}
                    />
                    <img
                        src={chat}
                        alt="chat"
                        className={`icons ${activeButton === "chat" ? "active" : ""}`}
                        onClick={() => handleButtonClick("chat")}
                    />
                    <img
                        src={settings}
                        alt="settings"
                        className={`icons ${activeButton === "settings" ? "active" : ""}`}
                        onClick={() => handleButtonClick("settings")}
                    />
                    <img
                        src={add}
                        alt="add"
                        className={`icons ${activeButton === "add" ? "active" : ""}`}
                        onClick={() => handleButtonClick("add")}
                    />
                </div>
            </div>
        </div>
    );
};

export default SellerNav;