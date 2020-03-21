import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.scss";
import {BrowserRouter as Router} from 'react-router-dom';
import Content from "../Content/Content";
import client from "../../graphql-client/client/client";

const App = (): JSX.Element => {
  // const store = useStore();

  return (
    <ApolloProvider client={client}>
      <Router>
        <Content />
      </Router>
    </ApolloProvider>
  );
};

export default App;
