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
    
    return <div className="Event">

    </div>;
  }
}
export default Event;