import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartContextProvider from "./contexts/cart/cart-context";
import ProfileContextProvider from "./contexts/profile/profile-context";
import registerServiceWorker from "./registerServiceWorker";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <ProfileContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProfileContextProvider>
  </BrowserRouter>,
  rootElement
);

registerServiceWorker();
