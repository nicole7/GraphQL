import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../../super-sweet-app/src/components/App/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const client = new ApolloClient({});

// const allPosts = [
//   {
//     title: "First title",
//     content: "First content"
//   },
//   {
//     title: "Second title",
//     content: "Second content"
//   }
// ];
