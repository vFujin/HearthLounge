import React from 'react';

const TournamentsBlock = () => {
  let calendar = "https://www.google.com/calendar/embed?src=kvaverirkumds90dnen1jlmmq0dcvgom%40import.calendar.google.com&ctz=Europe/London";
  return (
      <div>
        <iframe
          title="iframe"
            src={calendar}
            style={{border: 'none', margin: '10px'}}
            width="96%"
            height="94%"
            frameBorder="0"
            scrolling="no"></iframe>
      </div>
  );
};

export default TournamentsBlock;