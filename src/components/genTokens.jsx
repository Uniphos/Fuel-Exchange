import { StreamChat } from 'stream-chat';
const apiKey = import.meta.env.VITE_STREAM_CHAT_API_KEY;
const secret = import.meta.env.VITE_STREAM_CHAT_SECRET_KEY;

// Replace with your Stream API Key and Secret
const serverClient = StreamChat.getInstance(apiKey, secret);

/**
 * Generate a token for a given user ID.
 * @param {string} userId - The ID of the user to generate the token for.
 * @returns {string} - The generated token.
 */
const generateToken = (userId) => {
  return serverClient.createToken(userId); // No expiration set
};

export default generateToken;
