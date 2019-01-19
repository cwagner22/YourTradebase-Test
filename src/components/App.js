import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import logo from "./logo.svg";
import "./App.css";
import CustomersList from "./CustomersList";
import people from "./people.json";

class App extends Component {
  render() {
    return (
      <div className={"App"}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>YourTradebase Test</h1>
        <CustomersList customers={people} />
      </div>
    );
  }
}

export default App;
