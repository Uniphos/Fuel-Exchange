import React, { useState, useRef, useEffect } from "react";
import "../../styles/profileOptions/chatOp.css";

const ChatOp = () => {
    const [chatLog, setChatLog] = useState([
        { sender: "User", message: "Hello I would like to inquire about the Jet A1 fuel and the contents inside of it aswell as the earliest time I can get it."},
        { sender: "Admin", message: "Hello, the Jet A1 fuel is a type of aviation fuel that is used in aircrafts. It is a clear to straw-colored fuel, based on highly refined kerosene, which is used in jet engines." },
        { sender: "Admin", message: "The earliest time you can get it is 2 days from now." },
        { sender: "User", message: "Thank you. I have a couple of questions."},
        { sender: "User", message: "What is the quality of the Jet A1 fuel?" },
        { sender: "User", message: "aswell as what port does the Jet A1 fuel originate from?" },
        { sender: "User", message: "I would like to start a transaction with you, after this information is provided" },
        { sender: "Admin", message: "The Jet A1 fuel is of high quality and is used in aircrafts. It is a clear to straw-colored fuel, based on highly refined kerosene, which is used in jet engines." },
        { sender: "Admin", message: "The Jet A1 fuel originates from the port of Rotterdam." },
    ]);

    const [newMessage, setNewMessage] = useState("");
    const chatLogRef = useRef(null);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (newMessage.trim() !== "") {
            addMessageToChatLog("User", newMessage);
            setNewMessage("");
        }
    };

    const addMessageToChatLog = (sender, message) => {
        setChatLog((prevChatLog) => [...prevChatLog, { sender, message }]);
    };

    useEffect(() => {
        if (chatLogRef.current) {
            chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
        }
    }, [chatLog]);

    return (
        <div className="ChatOp">
            <div className="chatList">
                <p>John doe oil</p>
            </div>
            <div className="chatBox">
                <div className="chatLog" ref={chatLogRef}>
                    {chatLog.map((chat, index) => (
                        <div key={index} className={chat.sender}>
                            <div className="chat">
                                <p>{chat.message}</p>
                            </div>
                            <div className="label">
                                <h5>{chat.sender}</h5>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="chatInput">
                    <form onSubmit={handleFormSubmit} className="formChat">
                        <input
                            type="text"
                            placeholder="Type your message here..."
                            className="inputChat"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatOp;