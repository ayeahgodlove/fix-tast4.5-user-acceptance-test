import React, { Component } from "react";



class Event extends Component {
    state = {
        collapsed: true,
      };

      handleClick = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

      dateNewFormat = (eventDate) => {
        const newDate = `${new Date(eventDate)}`;
        return newDate;
      };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    
    return <div className="event">
           <h2 className="summary">{event.summary}</h2>
           {/* <p className="start-time">{this.dateNewFormat(event.start.dateTime)}</p> */}
           <p className="location">{event.location} </p>

           <button
           className={`details-button ${collapsed ? "show" : "hide"}-details`}
           onClick={this.handleClick}> 
           {collapsed ? "Show Details" : "Hide Details"}
        </button>

        {!collapsed && (
          <div
            className={`extra-details ${
              this.state.collapsed ? "hide" : "show"
            }`}
          >
            <h3>Check the event:</h3>
            <a href={event.htmlLink} rel="noreferrer" target="_blank">
              Details on Google Calendar
            </a>
            <p className="event-description">{event.description}</p>
          </div>
        )}
       </div>;
          

  }
}
export default Event;