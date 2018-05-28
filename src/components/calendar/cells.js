import React from 'react';
import dateFns from "date-fns";
import PropTypes from 'prop-types';

const Cells = ({currentMonth, selectedDate, handleDateClick}) => {
  const monthStart = dateFns.startOfMonth(currentMonth);
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);

  const dateFormat = "D";
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);
      const cloneDay = day;
      const selected = dateFns.isSameDay(day, selectedDate) ? "selected" : undefined;
      const disabled = !dateFns.isSameMonth(day, monthStart) ? "disabled" : selected;

      days.push(
        <div className={`col cell ${disabled}`}
             key={day}
             onClick={() => handleDateClick(dateFns.parse(cloneDay))}>
          <span className="number">{formattedDate}</span>
          <span className="bg">{formattedDate}</span>
        </div>
      );
      day = dateFns.addDays(day, 1);
    }
    rows.push(
      <div className="calendar__row" key={day}>
        {days}
      </div>
    );
    days = [];
  }

  return <div className="calendar__body"
              style={{gridTemplateRows: `repeat(${rows.length}, calc(${73 / rows.length}vh - ${4 / rows.length}px))`}}>{rows}</div>;
};

Cells.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  handleDateClick: PropTypes.func.isRequired
};

export default Cells;