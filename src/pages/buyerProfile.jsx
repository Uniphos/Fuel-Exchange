import React, { useState } from "react";
import "../styles/buyerProfile/buyerProfile.css";
import ProfileNav from "../components/buyerProfile/buyerNav";

//all page options
import HomeOp from "../components/buyerProfile/buyerHome";
import AnaliticsOp from "../components/buyerProfile/buyerAnalytics";
import ChatOp from "../components/profileOptions/chatOp";
import Settings from "../components/profileOptions/settings";
import OilInfo from "../components/profileOptions/oilInfo";
import ProfileInfo from "../components/profileOptions/profileInfo"

const Profile = () => {
    const [pageOptions, setPageOptions] = useState("home");
    const [idOption, setIDOption] = useState("");

    const renderPageOption = () => {
        switch (pageOptions) {
            case "home":
                return <HomeOp setPageOptions={setPageOptions} setIDOption={setIDOption} />;
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
            default:
                return <HomeOp setPageOptions={setPageOptions} setIDOption={setIDOption}/>;
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