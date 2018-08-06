import React, { Component } from "react";

class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.AddHandler = this.AddHandler.bind(this);
    this.state = {
      obtions: [],
      title: "Add Search title",
    };
  }
  AddHandler(obtions) {
    console.log(obtions);
    this.setState(prevState => {
      console.log("prevState.obtions", prevState.obtions);
      return {
        obtions: prevState.obtions.concat([obtions]),
      };
    });
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <Obtions obtions={this.state.obtions} />
        <FormObtions AddHandler={this.AddHandler} />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title} </h2>
      </div>
    );
  }
}

class Obtions extends Component {
  render() {
    return (
      <div>
        {this.props.obtions.map(obtions => (
          <Obtion key={obtions} obtionText={obtions} />
        ))}
      </div>
    );
  }
}

class Obtion extends Component {
  render() {
    return (
      <div>
        <p> {this.props.obtionText}</p>
      </div>
    );
  }
}

class FormObtions extends Component {
  constructor(props) {
    super(props);
    this.AddHandler = this.AddHandler.bind(this);
  }

  AddHandler(e) {
    e.preventDefault();
    console.log(e.target.elements);
    const option = e.target.elements.option.value.trim();
    if (option) {
      // alert(this.props.AddHandler(option));
      this.props.AddHandler(option);
      e.target.elements.option.value = null;
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.AddHandler}>
          <input type="text" name="option" />
          <button>Add Obtions</button>
        </form>
      </div>
    );
  }
}
export default IndecisionApp;
