import React, { Component } from "react";
//what we called this
class CounterApp extends Component {
  constructor(props) {
    super(props);
    //Required only if they are not arrow function
    // Arrow function run at run time
    // this.AdOne = this.AdOne.bind(this);
    // this.MinOne = this.MinOne.bind(this);
    // this.Reset = this.Reset.bind(this);
    this.state = {
      count: 0,
    };
  }
  componentDidMount(){
    try{
      const json = localStorage.getItem('count');
      const count = JSON.parse(json);
      if(count){
        this.setState(() => ({ count: count }) );
      }
    }catch(e){
     // Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('count',json)
    }

  }
  AdOne = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  MinOne = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1,
      };
    });
  };
  Reset = () => {
    console.log(`${this.state.count}`);
    this.setState(
      () => {
        return {
          count: 0,
        };
      },
      () => {
        console.log(`${this.state.count}`);
      },
    );

    //console.log("Reset"+ this.state.count);
    // Asyn behaviour of SetState Method
    // this.setState((prevState)=> {
    //   return{
    //     count: prevState.count + 1
    //   }
    // });
  };
  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.AdOne} className="button">
          +1
        </button>
        <button onClick={this.MinOne} className="button">
          -1
        </button>
        <button onClick={this.Reset} className="button">
          Reset
        </button>
      </div>
    );
  }
}
export default CounterApp;
