import ApolloClient from "apollo-client";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL + "/api/graphqlEndpoint"
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem("accessToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

export default client;
