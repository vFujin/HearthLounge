import React from 'react';
import dateFns from "date-fns";
import PropTypes from 'prop-types';
import Cell from "./cell";
import CalendarBody from "./layout/body";

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
      const parsedDate = dateFns.parse(day);

      days.push(
        <Cell key={day}
              selectedDate={selectedDate}
              monthStart={monthStart}
              day={day}
              parsedDate={parsedDate}
              formattedDate={formattedDate}
              handleDateClick={handleDateClick}/>
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

  return <CalendarBody rows={rows}/>
};

Cells.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  handleDateClick: PropTypes.func.isRequired
};

export default Cells;