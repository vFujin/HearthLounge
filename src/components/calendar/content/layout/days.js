import React from 'react';
import dateFns from "date-fns";
import PropTypes from 'prop-types';

const CalendarDays = ({currentMonth, mobileBreakpoint}) => {
  console.log(window.innerWidth);
  const dateFormat = window.innerWidth <= mobileBreakpoint ? "ddd" : "dddd";
  const days = [];
  let startDate = dateFns.startOfWeek(currentMonth);

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="calendar__col calendar__col--center" key={i}>
        {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
      </div>
    );
  }

  return <div className="calendar__days calendar__row">{days}</div>;
};

CalendarDays.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired
};

export default CalendarDays;