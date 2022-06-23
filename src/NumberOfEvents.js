import React, { Component } from 'react';


class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
      }

handleItemClicked = () => {
      this.setState({
      numberOfEvents: 32,
    });
   }          
    
  render() {
    return (
        <div className="NumberOfEvents">
         <h3>Number of events to display</h3>
         <input
          className='number-of-events'
          type="number"
          value={this.props.numberOfEvents}
         onClick={() => this.handleItemClicked()}/>
         </div>
    );
   }
  }

export default NumberOfEvents;