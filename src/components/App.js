import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import logo from "./logo.png";
import "./App.css";
import CustomersList from "./CustomersList";
import people from "./people.json";

class App extends Component {
  render() {
    return (
      <div className={"App"}>
        <img
          src={logo}
          alt="YourTradebase Test"
          title="YourTradebase Test"
          className="App-logo"
        />
        <h1>React Test</h1>
        <CustomersList customers={people} />
      </div>
    );
  }
}

export default App;
