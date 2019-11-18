import React from 'react';
import './house.css';

class House extends React.Component{
  constructor(){
    super();

    this.state = {
      kitchen: true,
      bathroom: false,
      livingRoom: true,
      bedroom: false
    }

    this.kitchenSwitch = this.kitchenSwitch.bind(this);
    this.bathroomSwitch = this.bathroomSwitch.bind(this);
    this.livingRoomSwitch = this.livingRoomSwitch.bind(this);
    this.bedroomSwitch = this.bedroomSwitch.bind(this);
  }

  kitchenSwitch(){
    this.setState( { kitchen: !this.state.kitchen }, function(){
      console.log("Kitchen light: " + this.state.kitchen );
    });
  }
  bathroomSwitch(){
    this.setState( { bathroom: !this.state.bathroom }, function(){
      console.log("Bathroom light: " + this.state.bathroom );
    });
  }
  livingRoomSwitch(){
    this.setState( { livingRoom: !this.state.livingRoom }, function(){
      console.log("Livingroom light: " + this.state.livingRoom );
    });
  }
  bedroomSwitch(){
    this.setState( { bedroom: !this.state.bedroom }, function(){
      console.log("Bedroom light: " + this.state.bedroom );
    });
  }

    render(){
      return (
        <div>
          <button
            onClick={ this.kitchenSwitch }
            className={ "switch" + (this.state.kitchen ? "on" : "off" ) }>
            Kitchen
          </button>
          <button
            onClick={ this.bathroomSwitch }
            className={ "switch" + (this.state.bathroom ? "on" : "off" ) }>
            Bathroom
          </button>
          <button
            onClick={ this.livingRoomSwitch }
            className={ "switch" + (this.state.livingRoom ? "on" : "off" ) }>
            Livingroom
          </button>
          <button
            onClick={ this.bedroomSwitch }
            className={ "switch" + (this.state.bedroom ? "on" : "off" ) }>
            Bedroom
          </button>
        </div>
      )
    }
}

export default House;
