import React from 'react';
import dateFns from "date-fns";
import _ from "lodash";
import PropTypes from 'prop-types';

const Cell = ({selectedDate, monthStart, day, handleDateClick, parsedDate, formattedDate, events}) => {

  const selected = dateFns.isSameDay(day, selectedDate) ? "selected" : undefined;
  const disabled = !dateFns.isSameMonth(day, monthStart) ? "disabled" : selected;
  const eventDateFormat = 'HH:mm';


  const mapEvents = () => _.sortBy(events, event => event.start.dateTime).map((event, i) => (
    <li className="event" key={i}>
      <p className="event__date">{dateFns.format(event.start.dateTime, eventDateFormat)}</p>
      <p className="event__title">{event.summary}</p>
    </li>
  ));

  return (
    <div className={`col cell ${disabled}`}
         key={day}
         onClick={() => handleDateClick(parsedDate)}>
      <span className="cell__number">{formattedDate}</span>
      <span className="cell__background">{formattedDate}</span>
      <ul className="cell__events">
        {events && mapEvents()}
      </ul>
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