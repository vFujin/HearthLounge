import React from 'react';
import dateFns from "date-fns";
import PropTypes from 'prop-types';
import Cell from "../cell";
import Rows from "../rows";
import Row from "../row";
import {filterEvents} from "../../utils/filter-events";

const CalendarBody = ({currentMonth, selectedDate, events, handleDateClick}) => {
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
      const dayEvents = filterEvents(events, day);

      days.push(
        <Cell key={day}
              selectedDate={selectedDate}
              monthStart={monthStart}
              day={day}
              parsedDate={parsedDate}
              formattedDate={formattedDate}
              events={dayEvents}
              handleDateClick={handleDateClick}/>
      );
      day = dateFns.addDays(day, 1);
    }

    rows.push(
      <Row key={day}
           day={day}
           days={days}/>
    );
    days = [];
  }
  return <Rows rows={rows}/>
};

CalendarBody.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  handleDateClick: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.object)
};

export default CalendarBody;