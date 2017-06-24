import React from 'react';
import { Link } from 'react-router';

const TournamentsBlock = () => {
  let calendar = "https://www.google.com/calendar/embed?src=kvaverirkumds90dnen1jlmmq0dcvgom%40import.calendar.google.com&ctz=America/New_York";
  return (
      <div>
        <iframe
            src={calendar}
            style={{border: 'none', margin: '10px'}}
            width="95%"
            height="82%"
            frameBorder="0"
            scrolling="no"></iframe>
      </div>
  );
};

export default TournamentsBlock;