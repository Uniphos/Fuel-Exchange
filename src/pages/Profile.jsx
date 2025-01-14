import React, { useState, useEffect } from "react";
import "../styles/buyerProfile/buyerProfile.css";
import ProfileNav from "../components/profileOptions/profileNav";
import AdminNav from "../components/adminProfile/adminNav.jsx";
import client from '../components/AWSdatabase'
import { useMutation, useQuery, gql } from '@apollo/client';

//all page options
import SHomeOp from "../components/sellerProfile/sellerHome";
import BHomeOp from "../components/buyerProfile/buyerHome";
import AHomeOp from "../components/adminProfile/adminHome.jsx";

//all profile options
import AnaliticsOp from "../components/profileOptions/analyticsProfile";
import ChatOp from "../components/profileOptions/chatOp";
import Settings from "../components/profileOptions/settings";
import OilInfo from "../components/profileOptions/oilInfo";
import ProfileInfo from "../components/profileOptions/profileInfo"
import AddOil from "../components/sellerProfile/sellerAdd";
import { supabase } from '../components/supaBaseClient';

const GET_USER_TYPE = gql`
  query getUserType($email: String!) {
    account_information(where: { email: { _eq: $email } }) {
      account_type
    }
  }
`;

const Profile = () => {
    const [pageOptions, setPageOptions] = useState("home");
    const [idOption, setIDOption] = useState("");
    const [usertype, setUserType] = useState("");

    const getEmail = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        return session. user.email;
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


    const renderPageOption = () => {
        switch (pageOptions) {
            case "shome":
                return <SHomeOp />;
            case "bhome":
                return <BHomeOp setPageOptions={setPageOptions} setIDOption={setIDOption}/>;
            case "ahome":
                return <AHomeOp />;
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
                if (usertype === "seller") {
                    return <SHomeOp />;
                } else if (usertype === "buyer") {
                    return <BHomeOp setPageOptions={setPageOptions} setIDOption={setIDOption}/>;
                } else if (usertype === "admin") {
                    return <AHomeOp />;
                }else{
                    return <p>error contact admin</p>;
                }
        }
    };

    return (
        <div className="mainArea">
            {usertype == "admin" ? <AdminNav setPageOptions={setPageOptions} /> : <ProfileNav setPageOptions={setPageOptions} />}
            <div className="boxDisplay">
                {renderPageOption()}
            </div>
        </div>
    );
};

export default Profile;