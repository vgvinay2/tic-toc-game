import React, { Component } from "react";
class IndecisionAppNew extends Component {
  constructor(props){
    super(props);
    this.handleDeleteObtion = this.handleDeleteObtion.bind(this);
    this.handlepick = this.handlepick.bind(this);
    this.AddObtionHandler = this.AddObtionHandler.bind(this);
    this.state = {
      obtions: []
    }
  }

  handleDeleteObtion(){
     this.setState(()=>{
      return {
        obtions: []
      }
     });
  };
  handlepick(){
    alert("hi");
  };
  
  AddObtionHandler(obtion){
    if(!obtion){
      return "Enter value to add Item";
    } else if(this.state.obtions.indexOf(obtion) > -1){
      return "this Item alredy exist";
    }
    this.setState((prevState)=>{
      return {
        obtions: prevState.obtions.concat(obtion)
      }
    })
  };

  render() {
    const title = "Indecision"; 
    const subtitle = "Put the life in hand of computer";
    
    return (
      <div>
        <Header title = {title} subtitle = {subtitle} />
        <Action 
          hasobtions ={this.state.obtions.length > 0} 
          handlepick = {this.handlepick}
        />
        <Obtions 
         obtions = {this.state.obtions}
         handleDeleteObtion = {this.handleDeleteObtion}
         />
        <AddObtions AddObtionHandler = {this.AddObtionHandler}/>
      </div>
    );
  }
}
class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
class Action extends Component {
 render() {
    return (
      <div>
        <button 
          onClick = {this.props.handlepick} 
          disabled = {this.props.hasobtions ? false :true }
          >
          What should I do
        </button>
      </div>
    );
  }
}

class Obtions extends Component {
  render() {
    return (
      <div>
      <button onClick = {this.props.handleDeleteObtion} >Remove All</button>
       {
         this.props.obtions.map((obtion) => <Obtion key = {obtion} ObtionText = {obtion} />)
       }
      </div>
    );
  }
}
class Obtion extends Component {
  render() {
    return (
      <div>
      {this.props.ObtionText}
      </div>
    );
  }
}

class AddObtions extends Component {
  constructor(props){
   super(props);
   this.handleAddObtion = this.handleAddObtion.bind(this);
   this.state = {
     error: undefined 
   }
  }
  handleAddObtion(e){
    e.preventDefault();
    const obtion = e.target.elements.option.value.trim();
    const error = this.props.AddObtionHandler(obtion);
    this.setState(()=>{
     return { error: error}
    })
  };
  render() {
    return (
      <div>
      {this.state.error && <p> {this.state.error} </p>}
      <form onSubmit={this.handleAddObtion}>
          <input
            type="text"
            name="option"
          />
          <button>Add Options</button>
        </form>
      </div>
    );
  }
}
export default IndecisionAppNew;
// Bind 1 inline binding inefficeient
// Using constructor method
// component state allow us to manage some data and when data get change component 
//automatically render

// React component state flow
// 1 Setup default state Object { count: 0 } so 
// 2 first time component  get rendered using default state value
// 3 chnage state based on event 
// 4 component render using new state value 
// start again at 3


// pass function in prop for two way data binding