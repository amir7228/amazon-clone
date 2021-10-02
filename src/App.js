import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
