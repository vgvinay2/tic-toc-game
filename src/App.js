import React, { Component } from "react";
import "./App.css";
import CounterApp from "./CounterApp";
import AddObtions from "./AddOptionForm";
import VisibiltyToggle from "./VisibiltyToggle";
import IndecisionApp from "./IndecisionApp";
class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterApp />
        <p>-------------------------------</p>
        <VisibiltyToggle />
        <p>-------------------------------</p>
        <IndecisionApp />
      </div>
    );
  }
}
export default App;
