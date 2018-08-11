import React, { Component } from "react";
import "./App.css";
import CounterApp from "./CounterApp";
import AddObtions from "./AddOptionForm";
import VisibiltyToggle from "./VisibiltyToggle";
import IndecisionApp from "./IndecisionApp";
import IndecisionAppNew from "./IndecisionAppNew";
class App extends Component {
  render() {
    return (
      <div className="App">
      <CounterApp />
        <p>-------------------------------</p>
        <VisibiltyToggle />
        <p>-------------------------------</p>
        <IndecisionAppNew />
      </div>
    );
  }
}
export default App;
