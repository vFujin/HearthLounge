import React from 'react';
import dateFns from "date-fns";
import PropTypes from 'prop-types';

const Cell = ({selectedDate, monthStart, day, handleDateClick, parsedDate, formattedDate, events}) => {

  const selected = dateFns.isSameDay(day, selectedDate) ? "selected" : undefined;
  const disabled = !dateFns.isSameMonth(day, monthStart) ? "disabled" : selected;

  return (
    <div className={`col cell ${disabled}`}
         key={day}
         onClick={() => handleDateClick(parsedDate)}>
      <span className="number">{formattedDate}</span>
      <span className="bg">{formattedDate}</span>
    </div>
  )
};

Cell.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  monthStart: PropTypes.instanceOf(Date).isRequired,
  day: PropTypes.instanceOf(Date).isRequired,
  parsedDate: PropTypes.instanceOf(Date).isRequired,
  formattedDate: PropTypes.string.isRequired,
  handleDateClick: PropTypes.func.isRequired,
};

export default Cell;