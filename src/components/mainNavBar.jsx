import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/mainNavBar.css'; // Assuming you have some CSS for styling
import logo from '../assets/logo.png'; // Removed extra space
import { supabase } from './supaBaseClient';
import client from './AWSdatabase'
import { gql } from '@apollo/client';


const GET_ID = gql`
  query getID($email: String!) {
    account_information(where: { email: { _eq: $email } }) {
      user_id
    }
  }
`;

const MainNavBar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const checkLogin = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setLoggedIn(true);
                setEmail(session.user.email);
            }
        };
        checkLogin();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userIdResult = await client.query({
                query: GET_ID,
                variables: { email: email },
              });
              window.location.href = '/Fuel-Exchange/#/profile/' + userIdResult.data.account_information[0].user_id;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <nav className="navbar">
            <div className="Icon">
                <img src={logo} alt="Logo" />
            </div>
            <div className='authentication'>
                {loggedIn ? (
                    <button onClick={handleSubmit}>Go to your Profile</button>
                    ) : (
                    <div className='spacing'>
                        <Link to="/signup" className="login-button">Sign Up</Link>
                        <Link to="/login" className="login-button">Login</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default MainNavBar;