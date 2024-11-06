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
import SignUpBox from "../../components/profileOptions/signUpBox";

const ProfileNav = ({userType}) => {
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
                        className={`icon`}
                    />
                    <img src={logo} alt="Logo" className="profileLogo" onClick={handleLogoPress}/>
                </div>
                <div className="options">
                    <img
                        src={home}
                        alt="home"
                        className={`icon`}
                    />
                    <img
                        src={analitics}
                        alt="analitics"
                        className={`icon`}
                    />
                    <img
                        src={chat}
                        alt="chat"
                        className={`icon`}
                    />
                    <img
                        src={settings}
                        alt="settings"
                        className={`icon`}
                    />
                    <img
                        src={add}
                        alt="add"
                        className={`icon`}
                    />
                </div>
            </div>
            <div className="boxDisplay">
            <SignUpBox user={userType} />
            </div>
        </div>
    );
};

export default ProfileNav;