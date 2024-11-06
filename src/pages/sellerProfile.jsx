import React, { useState } from "react";
import "../styles/buyerProfile/buyerProfile.css";
import ProfileNav from "../components/sellerProfile/sellerNav";

//all page options
import HomeOp from "../components/sellerProfile/sellerHome";
import AnaliticsOp from "../components/sellerProfile/sellerAnalytics";
import ChatOp from "../components/profileOptions/chatOp";
import Settings from "../components/profileOptions/settings";
import OilInfo from "../components/profileOptions/oilInfo";
import ProfileInfo from "../components/profileOptions/profileInfo"
import AddOil from "../components/sellerProfile/sellerAdd";

const Profile = () => {
    const [pageOptions, setPageOptions] = useState("home");
    const [idOption, setIDOption] = useState("");

    const renderPageOption = () => {
        switch (pageOptions) {
            case "home":
                return <HomeOp />;
            case "analitics":
                return <AnaliticsOp />;
            case "chat":
                return <ChatOp />;
            case "settings":
                return <Settings />;
            case "info": // Ensure this matches the expected value
                return <OilInfo Id={idOption}/>;
            case "profile":
                return <ProfileInfo />;
            case "add":
                return <AddOil />;
            default:
                return <HomeOp />;
        }
    };

    return (
        <div className="mainArea">
            <ProfileNav setPageOptions={setPageOptions} />
            <div className="boxDisplay">
                {renderPageOption()}
            </div>
        </div>
    );
};

export default Profile;