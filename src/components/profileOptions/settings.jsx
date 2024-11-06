import { useState } from "react";
import React from "react";
import "../../styles/profileOptions/settings.css";


const SettingsOp = () => {
    const [acountExpand, setAcountExpand] = useState(false);
    const [notifExpand, setNotifExpand] = useState(false);
    const [helpExpand, setHelpExpand] = useState(false);
    const [securityExpand, setSecurityExpand] = useState(false);
    const [deleteExpand, setDeleteExpand] = useState(false);
    const [shareExpand, setShareExpand] = useState(false);
    const [passwordExpand, setPasswordExpand] = useState(false);


    

    return (

        <div className="mainSettings">
            <p>Setting</p>  
            <div className="settingOptions">
                <div className="settingOption">
                    <div className='orderTopInfo'>
                        <p>Account</p>
                        <p onClick={() => setAcountExpand(!acountExpand)}>{acountExpand ? "▲" : "▼"}</p>
                    </div>
                    {acountExpand && (
                        <div className="settingExpand">
                            <p>Username: Showcase Username</p>
                            <p>Email: Showcase Email</p>
                            <p>Password: Showcase Password as ***********</p>
                            <div className='orderTopInfo'>
                                <p>Change Password</p>
                                <p onClick={() => setPasswordExpand(!passwordExpand)}>{passwordExpand ? "▲" : "▼"}</p>
                            </div>
                            {passwordExpand && (
                                <div className="settingExpand2">
                                    <form>
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
                    <div className='orderTopInfo'>
                        <p>Notifications</p>
                        <p onClick={() => setNotifExpand(!notifExpand)}>{notifExpand ? "▲" : "▼"}</p>
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
                    <div className='orderTopInfo'>
                        <p>Help center</p>
                        <p onClick={() => setHelpExpand(!helpExpand)}>{helpExpand ? "▲" : "▼"}</p>
                    </div>
                    {helpExpand && (
                        <div className="settingExpand">
                            <div className="settingRow">
                                <p>Contact Us:</p>
                                <p>Company email</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="settingOption">
                    <div className='orderTopInfo'>
                        <p>Security</p>
                        <p onClick={() => setSecurityExpand(!securityExpand)}>{securityExpand ? "▲" : "▼"}</p>
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

                <div className="settingOption">
                    <div className='orderTopInfo'>
                        <p>Deactivate/Delete account</p>
                        <p onClick={() => setDeleteExpand(!deleteExpand)}>{deleteExpand ? "▲" : "▼"}</p>
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
                    <div className='orderTopInfo'>
                        <p>Share feedback</p>
                        <p onClick={() => setShareExpand(!shareExpand)}>{shareExpand ? "▲" : "▼"}</p>
                    </div>
                    {shareExpand && (
                        <div className="settingExpand">
                            <form>
                                <textarea placeholder="Share your feedback" cols="50" rows="10"></textarea>
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

            <div className="logOut">
                <p>Log out</p>
            </div>
        </div>

    );

};

export default SettingsOp;