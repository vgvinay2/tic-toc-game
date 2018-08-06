import React, { Component } from 'react';
//what we called this 
class AddObtions extends Component {
    AddHandler(e) {
        e.preventDefault();
        console.log(e.target.elements);
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
        }
    };
    render() {
       return (   
        <div>
        <form onSubmit = {this.AddHandler}>
            <input type= "text" name= "option"/>
            <button>Add Obtions</button>
        </form>
       </div>
  );
 }
}
export default AddObtions;