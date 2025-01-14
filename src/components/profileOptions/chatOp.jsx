import React, { useState, useEffect } from "react";
import { Chat, Channel, ChannelList, MessageList, MessageInput, Window } from "stream-chat-react";
import 'stream-chat-react/dist/css/v2/index.css'
import streamClient from '../chatClient';
import client from '../AWSdatabase'
import "../../styles/profileOptions/chatOp.css";
import { useParams } from "react-router-dom";
import { gql } from '@apollo/client';

const GET_INFO = gql`
    query obtainInfo($_eq: uuid!) {
        account_information(where: {user_id: {_eq: $_eq}}) {
        email
        username
    }
}
`;


function App() {
  const [chatClient, setChatClient] = useState(null);
  const { id } = useParams();

  const getData = async () => {
    const result = await client.query({
      query: GET_INFO,
      variables: { _eq: id },
    });
    console.log(result.data.account_information[0]);
    return result.data.account_information[0];
  };

  useEffect(() => {

    const connectUser = async () => {
    
      try{
        const data = await getData();
        await streamClient.connectUser(
          {
            id: id,
            name: data.email,
          },
          streamClient.devToken(id) // Replace with a real token in production
        );

        setChatClient(streamClient);
      } catch (error) {
        console.error(error);
      }

      
    };

    connectUser();
    console.log(streamClient);
    // Cleanup
    return () => chatClient?.disconnectUser();
  }, []);

  if (!chatClient) return <div>Loading...</div>;

  return (
    <div className="chat-container">
        <Chat client={chatClient} theme="messaging light">
          <div className="app-container">
            {/* Sidebar with the ChannelList */}
            <div className="channel-list-container">
              <ChannelList
                filters={{ type: "messaging", members: { $in: [id] } }}
                sort={{ last_message_at: -1 }}
                options={{ limit: 20 }}
              />
            </div>

            {/* Chat window */}
            <div className="chat-window-container">
              <Channel>
                <Window>
                  <MessageList />
                  <MessageInput />
                </Window>
              </Channel>
            </div>
          </div>
        </Chat>
    </div>
  );
};

export default App;
