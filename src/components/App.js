import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import CustomersList from "./CustomersList";
import AverageCustomer from "./AverageCustomer";
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
        <AverageCustomer customers={people} />
      </div>
    );
  }
}

export default App;
