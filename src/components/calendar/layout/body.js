import React from 'react';
import PropTypes from 'prop-types';

const CalendarBody = ({rows}) => {
  const rowsLength = rows.length;
  const styles = {
    gridTemplateRows: `repeat(${rowsLength}, calc(${73 / rowsLength}vh - ${4 / rowsLength}px))`
  };

  return (
    <div className="calendar__body" style={styles}>
      {rows}
    </div>
  )
};

CalendarBody.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CalendarBody;