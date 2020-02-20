import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.scss";
import AddPost from "../AddPost/AddPost";
import ShowPost from "./ShowPost/ShowPost";

//import AddUser from "../AddUser/AddUser";
import client from "../../graphql-client/client/client";

const App = (): JSX.Element => {
  // const store = useStore();

  return (
    <ApolloProvider client={client}>
      <AddPost />
      <ShowPost />
    </ApolloProvider>
  );
};

export default App;
