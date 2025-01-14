import { ApolloClient, InMemoryCache } from '@apollo/client';

const HASURAURL = import.meta.env.VITE_APP_GRAPHQL_URI
const HASURAKEY = import.meta.env.VITE_APP_HASURA_ADMIN_SECRET


const client = new ApolloClient({
  uri: HASURAURL,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': HASURAKEY,
  },
});

export default client;