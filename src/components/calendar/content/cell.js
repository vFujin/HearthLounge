import React from 'react';
import dateFns from "date-fns";
import _ from "lodash";
import PropTypes from 'prop-types';
import Tooltip from 'antd/lib/tooltip';

const Cell = ({selectedDate, monthStart, day, handleDateClick, parsedDate, formattedDate, events}) => {

  const currentDay = dateFns.isSameDay(day, new Date()) ? "current" : undefined;
  const selected = dateFns.isSameDay(day, selectedDate) ? "selected" : undefined;
  const disabled = !dateFns.isSameMonth(day, monthStart) ? "disabled" : selected;
  const eventDateFormat = 'HH:mm';
  const sortedEvents = _.sortBy(events, event => event.start.dateTime);

  const mapEvents = () => sortedEvents.map((event, i) => (
    <li className="event" key={i}>
      <p className="event__date">{dateFns.format(event.start.dateTime, eventDateFormat)}</p>
      <p className="event__title">
        <Tooltip title={event.summary} placement="topLeft">
          {event.summary}
        </Tooltip>
      </p>
    </li>
  ));


  return (
    <div className={`col cell ${disabled} ${currentDay}`}
         key={day}
         onClick={() => handleDateClick(parsedDate, sortedEvents)}>
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
  events: PropTypes.arrayOf(PropTypes.object)
};

export default Cell;