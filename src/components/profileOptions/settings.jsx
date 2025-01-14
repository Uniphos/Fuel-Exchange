import { useState, useEffect } from "react";
import React from "react";
import "../../styles/profileOptions/settings.css";
import { supabase } from '../supaBaseClient';
import { useParams } from "react-router-dom";
import client from '../AWSdatabase';
import { gql } from '@apollo/client';

const GENERAL_INFO = gql`
    query generalInfo($_eq: uuid!) {
      account_information(where: {user_id: {_eq: $_eq}}) {
        username
        email
        password
      }
}`;

const UPDATE_PASSWORD = gql`
  mutation updatePassword($_eq: uuid!, $password: String!) {
    update_account_information(where: {user_id: {_eq: $_eq}}, _set: {password: $password}) {
      affected_rows
      returning {
        username
      }
    }
  }`;


const SettingsOp = () => {
    const [acountExpand, setAcountExpand] = useState(false);
    const [notifExpand, setNotifExpand] = useState(false);
    const [helpExpand, setHelpExpand] = useState(false);
    const [securityExpand, setSecurityExpand] = useState(false);
    const [deleteExpand, setDeleteExpand] = useState(false);
    const [shareExpand, setShareExpand] = useState(false);
    const [passwordExpand, setPasswordExpand] = useState(false);

    const { id } = useParams();
    const [info, setInfo] = useState(null);

    const fetchInfo = async () => {
        try {
            const { data } = await client.query({
                query: GENERAL_INFO,
                variables: { _eq: id },
            });
            setInfo(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        const currentPassword = e.target[0].value;
        const newPassword = e.target[1].value;
        const confirmPassword = e.target[2].value;
        if(info?.account_information[0].password === currentPassword && newPassword === confirmPassword){
            try {
                await client.mutate({
                mutation: UPDATE_PASSWORD,
                variables: {
                    _eq: id,
                    password: newPassword
                }
                });
            } catch (error) {
                alert('Error updating password: ' + error);
                return;
            }

            try {
                await supabase.auth.updateUser({
                    password: newPassword,
                });
            } catch (error) {
                alert('Error updating password:', error);
                return;
            }
        }
    };

    const handleLogOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Error logging out:', error);
        } else {
            window.location = '/Fuel-Exchange/';
        }
    };   

    return (

        <div className="mainSettings">
            <p>Setting</p>  
            <div className="settingOptions">
                <div className="settingOption">
                    <div className='orderTopInfo' onClick={() => setAcountExpand(!acountExpand)}>
                        <p>Account</p>
                        <p className="arrow">{acountExpand ? "▲" : "▼"}</p>
                    </div>
                    {acountExpand && (
                        <div className="settingExpand">
                            <p>Username: {info?.account_information[0].username || 'N/A'}</p>
                            <p>Email: {info?.account_information[0].email || 'N/A'}</p>
                            <div className='orderTopInfo' onClick={() => setPasswordExpand(!passwordExpand)}>
                                <p>Change Password</p>
                                <p >{passwordExpand ? "▲" : "▼"}</p>
                            </div>
                            {passwordExpand && (
                                <div className="settingExpand2">
                                    <form onSubmit={handlePasswordChange()}>
                                        <input type="password" placeholder="Current Password" />
                                        <input type="password" placeholder="New Password" />
                                        <input type="password" placeholder="Confirm Password" />
                                        <button type="submit">Change Password</button>
                                    </form>
                                </div>
                            )}
                            <div className='orderTopInfo'>
                                <p>Language</p>
                                <select name="language" id="language">
                                    <option value="english">English</option>
                                    <option value="french">French</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="portuguese">Portuguese</option>
                                    <option value="arabic">Arabic</option>
                                    <option value="chinese">Chinese</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                <div className="settingOption">
                    <div className='orderTopInfo' onClick={() => setNotifExpand(!notifExpand)}>
                        <p>Notifications</p>
                        <p>{notifExpand ? "▲" : "▼"}</p>
                    </div>
                    {notifExpand && (
                        <div className="settingExpand">
                            <form>
                                <div className="radioRow">
                                    <input type="checkbox" name="notifs" id="enablePush" />
                                    <label>Enable push notifications</label>
                                </div>
                                <div className="radioRow">
                                    <input type="checkbox" name="notifs" id="disablePush" />
                                    <label>Enable email notifications</label>
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    )}
                </div>

                <div className="settingOption">
                    <div className='orderTopInfo' onClick={() => setHelpExpand(!helpExpand)}>
                        <p>Help center</p>
                        <p>{helpExpand ? "▲" : "▼"}</p>
                    </div>
                    {helpExpand && (
                        <div className="settingExpand">
                            <div className="settingRow">
                                <p>Contact Us:</p>
                                <p>thefuelexchange@gmail.com</p>
                            </div>
                        </div>
                    )}
                </div>
{/*
                <div className="settingOption">
                    <div className='orderTopInfo' onClick={() => setSecurityExpand(!securityExpand)}>
                        <p>Security</p>
                        <p>{securityExpand ? "▲" : "▼"}</p>
                    </div>
                    {securityExpand && (
                        <div className="settingExpand">
                            <form>
                                <div className="radioRow">
                                    <input type="checkbox" name="security" value="2FA"/>
                                    <label>Enable 2FA</label>
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    )}
                </div>
*/}
                <div className="settingOption">
                    <div className='orderTopInfo' onClick={() => setDeleteExpand(!deleteExpand)}>
                        <p>Deactivate/Delete account</p>
                        <p>{deleteExpand ? "▲" : "▼"}</p>
                    </div>
                    {deleteExpand && (
                        <div className="settingExpand">
                            <form>
                                <div className="radioRow">
                                    <input type="radio" name="account" value="deactivate"/>
                                    <label>Deactivate Account</label>
                                </div>
                                <div className="radioRow">
                                    <input type="radio" name="account" value="delete"/>
                                    <label>Delete Account</label>
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    )}
                </div>

                <div className="settingOption">
                    <div className='orderTopInfo' onClick={() => setShareExpand(!shareExpand)}>
                        <p>Share feedback</p>
                        <p>{shareExpand ? "▲" : "▼"}</p>
                    </div>
                    {shareExpand && (
                        <div className="settingExpand">
                            <form>
                                <textarea className="feedback" placeholder="Share your feedback" cols="50" rows="10"></textarea>
                                <p>Can we contact you if we have further questions?</p>
                                <div className="radioRow">
                                    <input type="radio" name="contact" value="yes"/>
                                    <label>Yes</label>
                                </div>
                                <div className="radioRow">
                                    <input type="radio" name="contact" value="no"/>
                                    <label>no</label>
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    )}
                </div>

            </div>

            <div className="logOut" onClick={handleLogOut}>
                <p>Log out</p>
            </div>
        </div>

    );

};

export default SettingsOp;