import React from 'react';
import dateFns from 'date-fns';
import PropTypes from 'prop-types';

const CalendarHeader = ({currentMonth, prevMonth, nextMonth}) => {
  const dateFormat = "MMMM YYYY";

  return (
    <div className="calendar__header calendar__row">
      <div className="calendar__col calendar__col--center">
        <div className="icon" onClick={prevMonth}>
          ❮
        </div>
      </div>
      <div className="calendar__col calendar__col--center">
        <span>{dateFns.format(currentMonth, dateFormat)}</span>
      </div>
      <div className="calendar__col calendar__col--center" onClick={nextMonth}>
        <div className="icon">❯</div>
      </div>
    </div>
  );
};

CalendarHeader.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  prevMonth: PropTypes.func.isRequired,
  nextMonth: PropTypes.func.isRequired
};

export default CalendarHeader;