import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";
import AddPost from "../AddPost/AddPost";
//import AddUser from "../AddUser/AddUser";
import client from "../../graphql-client/client/client";

const App = (): JSX.Element => {
  // const store = useStore();

  return (
    <ApolloProvider client={client}>
      <AddPost />
    </ApolloProvider>
  );
};

export default App;
