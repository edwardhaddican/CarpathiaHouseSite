import React from "react";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  render() {
    return (
      <iframe
        src="https://calendar.google.com/calendar/embed?src=carpathia.holdfast%40gmail.com&ctz=America%2FNew_York"
        frameborder="0"
        scrolling="no"
        className='calendar'
      ></iframe>
    );

  }
}

export default Calendar;
