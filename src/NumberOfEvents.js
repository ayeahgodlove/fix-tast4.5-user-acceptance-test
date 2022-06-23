// import React, { Component } from 'react';
//



// class CitySearch extends Component {
//     state = {
//         numberOfEvents: 32,
//       }

//  handleInputChanged = (event) => {
//         const value = event.target.value;
//         const suggestions = this.props.locations.filter((location) => {
//             return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
//           });
//           this.setState({
//             query: value,
//             suggestions,
//           });
//         };

// handleItemClicked = (suggestion) => {
//       this.setState({
//       query: suggestion
//     });
//    }          
    
//   render() {
//     return (
//         <div className="NumberOfEvents">
//          <input
//           type="text"
//           className="city"
//           value={this.state.query}
//           onChange={this.handleInputChanged}
//          />
//          <ul className="suggestions">
//          {this.state.suggestions.map((suggestion) => (
//          <li key={suggestion}
//          onClick={() => this.handleItemClicked(suggestion)}
//          >{suggestion}</li>
//           ))}
//            <li>
//             <b>See all the events</b>
//          </li>
//        </ul>
//      </div>
//     );
//   }
// }

// export default NumberOfEvents;