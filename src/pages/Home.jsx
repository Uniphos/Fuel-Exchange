import React from 'react';
import HomePageLayout from "../components/homePageLayout";
import ScrollingTextBar from "../components/scrollBarText";
import "../styles/home.css"
import PImage from '../assets/negotiation.png'


const Home = () => {
    return (
        <div>
            <HomePageLayout>
                <ScrollingTextBar />
                <div className='mainPage'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/1/1c/The_San_Ardo_Oil_Field_From_The_Coast_Starlight._%286132948846%29.jpg' 
                    alt='oil field' className='img1'/>
                    <div className='missionStatement'>
                        <p>Our Mission:</p>
                        <p className='mainText'><b>With over 25 years of experience in oil and gas <blue>The Fuel Exchange</blue> <br/> 
                        is dedicated to facilitating the selling and buying of large<br/>
                        quantities of fuels. Our Services:</b></p>
                        <div className='missionContainer'>
                            <div className='mission'>
                                <p className='mainText'><b>Buying and Selling</b></p>
                                <p>When using our platform users will be<br/>
                                welcomed with a dashboard that allows<br/>
                                users to post listings and update account<br/>
                                information. Once a listing is posted the<br/>
                                listing is shown to those interested in<br/>
                                buying or selling a specific type of fuel.</p>
                            </div>
                            <div className='mission'>
                                <p className='mainText'><b>Trust</b></p>
                                <p>The largest issue when dealing in large fuel<br/>
                                transactions is trust. Far too many times there<br/>
                                are too many people in the middle that causes<br/>
                                miscommunications and cause deals to fall<br/>
                                through. The Fuel Exchange eliminates the <br/>
                                need for middle men.</p>
                            </div>
                            <div className='mission'>
                                <p className='mainText'><b>Transactions</b></p>
                                <p>The Fuel Exchange facilitates every step <br/>
                                of the transaction. When using our <br/>
                                platform buyers and sellers must abide <br/>
                                by our procedures. When a transaction <br/>
                                is in process we verify all shipment <br/>
                                loads and handle all the payments.</p>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <img src={PImage} alt='handShake' className='handShake' />
                    <div className='process'>
                        <p>How it Works</p>
                        <p>Sign up and create an account. Fill out all KYC (Know your Customer) requirements. After review we will send you a list of our <br/>
                        procedures for you to sign and return. In the meanwhile you can explore the dashboard, update all your information, and post your<br/>
                        listings. Once we verify your information we will make all your listings active and being to connect you with our verified buyers/sellers.<br/>
                        <br/>
                        Once we connect both parties to what fuel, price, quantities, and timeline they are looking for our procedure will start. Our team will <br/>
                        physically test the fuels at a specified port and verify the results. When/if all information is verified we will notify both parties and<br/>
                        create an escrow account for the transaction. <br/>
                        <br/>
                        After the transaction is executed all listings will be updated and The Fuel Exchange will continue to offer our support for new and <br/>
                        closed deals on our platform.</p><br/>
                    </div>
                </div>
            </HomePageLayout>
        </div>
    );
};

export default Home;