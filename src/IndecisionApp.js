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
    this.state = {
      option: "",
    };
    this.AddHandler = this.AddHandler.bind(this);
  }

  AddHandler(e) {
    e.preventDefault();
    if (this.state.option) {
      // alert(this.props.AddHandler(option));
      this.props.AddHandler(this.state.option);
      this.setState({ option: "" });
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.AddHandler}>
          <input
            type="text"
            name="option"
            value={this.state.option}
            onChange={this.handleChange}
          />
          <button>Add Options</button>
        </form>
      </div>
    );
  }
}
export default IndecisionApp;
