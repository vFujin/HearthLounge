import React from 'react';
import dateFns from "date-fns";
import _ from 'lodash';
import PropTypes from 'prop-types';
import Cell from "../cell";
import Rows from "../rows";
import Row from "../row";

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

  const filterEvents = (dayStart, dayEnd) => {
    if(events){
      return events.filter(event => _.inRange(+new Date(event.start.dateTime), dayStart, dayEnd) && event);
    }
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);
      const parsedDate = dateFns.parse(day);
      const dayStart = +dateFns.startOfDay(day);
      const dayEnd = +dateFns.endOfDay(day);
      const dayEvents = filterEvents(dayStart, dayEnd);

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
  handleDateClick: PropTypes.func.isRequired
};

export default CalendarBody;