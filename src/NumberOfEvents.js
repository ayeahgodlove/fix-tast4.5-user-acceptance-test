import React, { Component } from 'react';


class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
      };

      handleInputChanged = (event) => {
        const value = event.target.value;
        console.log("value: ", value)
    
        if (value <= 0 || value > 32) {
          this.setState({
            numberOfEvents: 0 
          });
        } else {
          this.setState({
            numberOfEvents: value,
          });
        }
        this.props.updateNumberOfEvents(value);
      };          
    
  render() {
    return (
        <div className='NumberOfEvents'>
         <h3>Number of events to display</h3>
         <input
          className='number-of-events'
          type='number'
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}/>
         </div>
    );
   }
  }

export default NumberOfEvents;