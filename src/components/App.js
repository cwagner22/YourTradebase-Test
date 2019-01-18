import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import logo from "./logo.svg";
import styles from "./App.css";
import CustomersList from "./CustomersList";
import people from "./people.json";

class App extends Component {
  render() {
    return <div className={styles.App}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <CustomersList people={people} />
      </div>;
  }
}

export default App;
