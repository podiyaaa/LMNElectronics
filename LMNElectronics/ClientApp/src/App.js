import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./components/home";

import "./custom.css";
import Cart from "./components/cart";
import Orders from "./components/orders";
import Profile from "./components/profile";
import Products from "./components/products";
import Login from "./components/login";
import Register from "./components/register";
import CustomerDashboard from "./components/customer-dashboard";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/ad" component={Products} />
      </Layout>
    );
  }
}
