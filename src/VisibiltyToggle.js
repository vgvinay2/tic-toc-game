import React, { Component } from "react";

class VisibiltyToggle extends Component {
  constructor(props) {
    super(props);
    this.VisibleHandler = this.VisibleHandler.bind(this);
    this.state = {
      Visibility: false,
    };
  }
  VisibleHandler(e) {
    this.setState(prevState => {
      console.log(prevState);
      return {
        Visibility: !prevState.Visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Visibility Toggle</h2>
        <button onClick={this.VisibleHandler}>
          {this.state.Visibility ? "Hide Details" : "Show details"}
        </button>
        {this.state.Visibility && (
          <div>
            <p>These are details Now you can see!</p>
          </div>
        )}
      </div>
    );
  }
}
export default VisibiltyToggle;
