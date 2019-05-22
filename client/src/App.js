import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/register" component={() => <Register />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
