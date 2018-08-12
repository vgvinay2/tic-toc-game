import React, { Component } from "react";
import ObtionModal from './ObtionModal';

class IndecisionAppNew extends Component {
  constructor(props){
    super(props);
    this.handleDeleteObtion = this.handleDeleteObtion.bind(this);
    this.handlepick = this.handlepick.bind(this);
    this.AddObtionHandler = this.AddObtionHandler.bind(this);
    this.singleDeltehandler= this.singleDeltehandler.bind(this);
    this.handlOkay = this.handlOkay.bind(this);
    this.state = {
      obtions: props.obtions,
      selectedObtion: undefined
    }
  }
  componentDidMount(){
    try{
      const json = localStorage.getItem('obtions');
      const obtions = JSON.parse(json);
      if(obtions){
        this.setState(() => ({ obtions: obtions }) );
      }
    }catch(e){
     // Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.obtions.length !== this.state.obtions.length){
      const json = JSON.stringify(this.state.obtions);
      localStorage.setItem('obtions',json)
    }

  }
  componentWillUnmount(){

  }
  handlOkay(){
    this.setState(() => ({ selectedObtion: undefined  }) );
  }
  handleDeleteObtion(){
     this.setState(()=>({ obtions: [] }));
  };
  singleDeltehandler(obtionToRemove){
    this.setState((prevState)=>({
      obtions: prevState.obtions.filter((obtion)=>{  return obtionToRemove !== obtion; }) }));
  };
  handlepick(){
    const RandomObtion =this.state.obtions[Math.floor(Math.random() * this.state.obtions.length)];
    this.setState(()=>   ({selectedObtion: RandomObtion })  );
  };
  
  AddObtionHandler(obtion){
    if(!obtion){
      return "Enter value to add Item";
    } else if(this.state.obtions.indexOf(obtion) > -1){
      return "this Item alredy exist";
    }
    // this.setState((prevState)=>{
    //   return {
    //     obtions: prevState.obtions.concat(obtion)
    //   }
    // })
    this.setState((prevState)=> ({ obtions: prevState.obtions.concat(obtion) }) );
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
         singleDeltehandler = {this.singleDeltehandler}
         />
        <AddObtions AddObtionHandler = {this.AddObtionHandler}/>
        <ObtionModal
          selectedObtion = {this.state.selectedObtion}
          handlOkay = {this.handlOkay}
        />
      </div>
    );
  }
}
IndecisionAppNew.defaultProps = {
  obtions: []
}
const Header = (props)=>{
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

const Action = (props) =>{
  return (
    <div>
      <button 
        onClick = {props.handlepick} 
        disabled = {props.hasobtions ? false :true }
        >
        What should I do
      </button>
    </div>
  );
}

const Obtions = (props) =>{
  return (
    <div>
    <button onClick = {props.handleDeleteObtion} >Remove All</button>
    {props.obtions.length ===0 && <p>Please Add some obtions to get started</p>}
     {
      props.obtions.map((obtion) => 
        <Obtion 
          key = {obtion}
          ObtionText = {obtion}
          singleDeltehandler = {props.singleDeltehandler}
      
      />)
     }
    </div>
  );
}

const Obtion = (props) => {
  return (
    <div>
      {props.ObtionText}
      <button
        onClick = {(e)=>{
          props.singleDeltehandler(props.ObtionText)
        }} >
        Remove
      </button>
    </div>
  );
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
    this.setState(()=>({ error }));
    if(!error){
      e.target.elements.option.value = '';
    }
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