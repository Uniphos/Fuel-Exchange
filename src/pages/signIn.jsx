import React, { useState, useEffect } from 'react';
import '../styles/signIn.css';
import logo from '../assets/logo.png';
import { supabase } from '../components/supaBaseClient';
import { useMutation, useQuery, gql } from '@apollo/client';
import client from '../components/AWSdatabase'

const GET_ID = gql`
  query getID($email: String!) {
    account_information(where: { email: { _eq: $email } }) {
      user_id
    }
  }
`;

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        
        getSession();
    }, []);

    const getSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        console.log(session.user.email);
    };
    const getClick = () =>{
        window.location = '/Fuel-Exchange/';
    }

    const login  = async () => {
        try {
        await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        } catch (error) {
            alert('Invalid Email or Password');
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle sign-in logic here
        login();
        
        const userIdResult = await client.query({
            query: GET_ID,
            variables: { email: email },
          });

        window.location.href = '/Fuel-Exchange/#/profile/' + userIdResult.data.account_information[0].user_id;
        
    };
        

    return (
        <div className="signInPage">
            <div className="topBar">
                <img src={logo} alt='logo' className='logo' onClick={getClick}/>
            </div>
            <div className="signInContainer">
                <div className="centerText">
                    <h2>Sign In</h2>
                </div>
                <div className='container'>
                    
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" >Sign In</button>
                    </form>
                    <p>Don't have an account? <a href="/Fuel-Exchange/#/signup">Sign Up</a></p>
                </div>
            </div>
            </div>
    );
};

export default SignIn;