import React, { useState, useEffect } from "react";
import "../../styles/buyerProfile/buyerNav.css";

//import for all icons and logos
import logo from "../../assets/logo.png";
import profileIcon from "../../assets/Icons/profileIcon.png";
import home from "../../assets/Icons/Home.png";
import analitics from "../../assets/Icons/analitics.png";
import settings from "../../assets/Icons/settings.png";
import chat from "../../assets/Icons/chat.png";
import add from "../../assets/Icons/add.png";
import { useMutation, useQuery, gql } from '@apollo/client';
import { supabase } from '../supaBaseClient';
import client from '../AWSdatabase'


const GET_USER_TYPE = gql`
  query getUserType($email: String!) {
    account_information(where: { email: { _eq: $email } }) {
      account_type
    }
  }
`;
const SellerNav = ({ setPageOptions }) => {
    const [activeButton, setActiveButton] = useState("home");
    const [homeType, setHomeType] = useState("home");
    const [userType, setUserType] = useState("");

    const handleButtonClick = (page) => {
        setActiveButton(page);
        setPageOptions(page);
    };

    const getEmail = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        return session.user.email;
    };

    useEffect(() => {
        const fetchUserType = async () => {
            const email = await getEmail();
            if (email) {
                const result = await client.query({
                    query: GET_USER_TYPE,
                    variables: { email }
                });
                setUserType(result.data.account_information[0].account_type);
            }
        };
        fetchUserType();
    }, []);

    const handleLogoPress = () => {
        window.location.href = "/Fuel-Exchange/";
    }

    const setHome = () => {
        if (userType === "seller") {
            setHomeType("shome");
        } else if (userType === "buyer") {
            setHomeType("bhome");
        } else if (userType === "admin") {
            setHomeType("ahome");
        }
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
                    { userType == "seller" ?
                    <img
                        src={add}
                        alt="add"
                        className={`icons ${activeButton === "add" ? "active" : ""}`}
                        onClick={() => handleButtonClick("add")}
                    /> : null }
                </div>
            </div>
        </div>
    );
};

export default SellerNav;