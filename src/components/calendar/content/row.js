import React from 'react';
import PropTypes from 'prop-types';

const Row = ({day, days}) => {
  return (
    <div className="calendar__row" key={day}>
      {days}
    </div>
  )
};

Row.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  days: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Row;