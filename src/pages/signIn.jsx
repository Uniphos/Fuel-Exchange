import React, { useState } from 'react';
import HomePageLayout from "../components/homePageLayout";
import '../styles/signIn.css';
import logo from '../assets/logo.png';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-in logic here
        if (email === 'buyer@buyer.com' && password === '1234') {
            window.location.href = '/buyerProfile';
        } else if (email === 'seller@seller.com' && password === '1234') {
            window.location.href = '/sellerProfile';
        }
    };

    const getClick = () =>{
        window.location = '/';
    }


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
                    <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                </div>
            </div>
            </div>
    );
};

export default SignIn;