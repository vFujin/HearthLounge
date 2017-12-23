import React, { Component } from 'react';

export class Tournaments extends Component {
  render() {
    return (
        <div className="pageContainer tournaments">

          <iframe src="https://www.google.com/calendar/embed?src=kvaverirkumds90dnen1jlmmq0dcvgom%40import.calendar.google.com&ctz=America/New_York"
                  name="myiframe"
                  width="100%"
                  title="Tournament calendar"
                  height="100%"
                  frameBorder="0"
                  scrolling="no">
          </iframe>

        </div>
    );
  }
}
