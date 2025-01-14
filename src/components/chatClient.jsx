import { StreamChat } from 'stream-chat';

const apiKey = import.meta.env.VITE_STREAM_CHAT_API_KEY;
const client = StreamChat.getInstance(apiKey);

export default client;
