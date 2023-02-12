import React from "react";
import ReactDOM from "react-dom/client";
import './css/index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { RoomProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoomProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RoomProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

/*
import React from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { RoomProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <RoomProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RoomProvider>,
  document.getElementById("root")
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/*serviceWorker.register();*/
